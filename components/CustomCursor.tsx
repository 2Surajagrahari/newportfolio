"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  const springX = useSpring(position.x, { stiffness: 500, damping: 28 });
  const springY = useSpring(position.y, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      // Heuristic to check if something is clickable/hoverable
      const isClickable = 
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('button') !== null ||
        target.closest('a') !== null;
        
      setIsPointer(isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Offset by half the width/height (16px) to center the cursor
    springX.set(position.x - 16);
    springY.set(position.y - 16);
  }, [position, springX, springY]);

  // Provide a server-safe render
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-white pointer-events-none z-[9999] mix-blend-difference hidden lg:flex items-center justify-center overflow-hidden"
      style={{
        x: springX,
        y: springY,
        scale: isPointer ? 1.8 : 1,
        backgroundColor: isPointer ? "white" : "transparent"
      }}
      transition={{ scale: { type: "spring", stiffness: 300, damping: 20 } }}
    >
        {isPointer && (
           <motion.span 
             initial={{ opacity: 0, scale: 0 }} 
             animate={{ opacity: 1, scale: 1 }} 
             className="text-[8px] text-black font-bold uppercase tracking-widest mix-blend-difference"
           >
             Click
           </motion.span>
        )}
    </motion.div>
  );
}
