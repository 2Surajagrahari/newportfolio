"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const op1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const blur1 = useTransform(scrollYProgress, [0, 0.15], ["blur(0px)", "blur(20px)"]);

  const op2 = useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.5], [100, 0, 0, -100]);
  const scale2 = useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.5], [0.9, 1, 1, 1.1]);

  const op3 = useTransform(scrollYProgress, [0.55, 0.6, 0.8, 1], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.6, 0.8, 1], [100, 0, 0, -100]);
  const scale3 = useTransform(scrollYProgress, [0.55, 0.6, 0.8, 1], [0.9, 1, 1, 1.1]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] z-10 pointer-events-none">
      <div className="sticky top-0 w-full h-screen">
        
        {/* Section 1 */}
        <motion.div 
          style={{ opacity: op1, scale: scale1, filter: blur1 }}
          className="absolute inset-0 flex items-center justify-center p-6 lg:p-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="px-4 py-1.5 mb-6 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white/80 text-xs sm:text-sm font-medium tracking-wide uppercase shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Suraj Kumar Agrahari
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white text-center mix-blend-difference drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] leading-[1.1]">
              Crafting <br /> <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-300 to-neutral-600">Digital Reality.</span>
            </h1>
          </motion.div>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ opacity: op2, y: y2, scale: scale2 }}
          className="absolute inset-0 flex items-center justify-start p-6 lg:p-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-3xl mix-blend-difference drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            I engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">high-performance</span> experiences.
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ opacity: op3, y: y3, scale: scale3 }}
          className="absolute inset-0 flex items-center justify-end p-6 lg:p-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-3xl text-right mix-blend-difference drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            Bridging the gap between <span className="italic font-light">imagination</span> and execution.
          </h2>
        </motion.div>
        
      </div>
    </div>
  );
}
