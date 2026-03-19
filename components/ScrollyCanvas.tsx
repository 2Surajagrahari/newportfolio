"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function ScrollyCanvas({ totalFrames = 128 }: { totalFrames?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map 0 -> 1 progress to 0 -> totalFrames - 1
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);

  useEffect(() => {
    // Preload images
    const images: HTMLImageElement[] = [];
    
    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      // Added priority loading for first few frames
      if (i < 10) img.fetchPriority = "high";
      img.src = `/sequence/${i}.gif`;
      img.onload = () => {
        // Render first frame as soon as it's loaded to avoid blank flash
        if (i === 0) {
          renderFrame(0);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;

    // Handle Resize & Canvas Drawing
    const renderFrame = (index: number) => {
      if (!canvasRef.current || !imagesRef.current[index]) return;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = imagesRef.current[index];

      if (!ctx || !img.complete) return;

      // Handle high DPI displays (Force retina HD scaling)
      const dpr = window.devicePixelRatio ? Math.max(window.devicePixelRatio, 2) : 2; 
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      
      // Force Ultra-HD Image Smoothing
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      // Object-fit: cover logic
      const scale = Math.max(rect.width / img.width, rect.height / img.height);
      const x = (rect.width / 2) - (img.width / 2) * scale;
      const y = (rect.height / 2) - (img.height / 2) * scale;

      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    let animationFrameId: number;
    // Subscribe to framer-motion scroll updates
    const unsubscribe = frameIndex.on("change", (latest) => {
      const index = Math.min(totalFrames - 1, Math.max(0, Math.round(latest)));
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => renderFrame(index));
    });

    const handleResize = () => {
      renderFrame(Math.round(frameIndex.get()));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [totalFrames, frameIndex]);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh] bg-black">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        {/* The canvas scales to 100% of the sticky parent */}
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
    </div>
  );
}
