"use client";

import { motion, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

function MagneticButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3;
    const y = (clientY - (top + height / 2)) * 0.3;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: mouseX, y: mouseY }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-colors ${className}`}
    >
      {children}
    </motion.button>
  );
}

export default function AboutMe() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/SurajCV (1).pdf";
    link.download = "Suraj_Agrahari_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative w-full py-32 px-8 lg:px-24 bg-black z-20 overflow-hidden" id="about">
      {/* Background glowing orb - Reduced blur for a sharper, HD aesthetic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-white/5 blur-[60px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* Left: Image / Graphic */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-full aspect-[4/5] max-w-md rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-900 border border-white/10" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white mix-blend-difference z-10">
              <span className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-700 ease-out">🚀</span>
              <h3 className="text-2xl font-bold tracking-tight">System Ready</h3>
              <p className="text-white/60 mt-2">v2.0 Beta</p>
            </div>
            
            <div className="absolute inset-0 border-[1px] border-white/20 rounded-3xl group-hover:border-white/50 transition-colors duration-700 pointer-events-none" />
          </div>
        </motion.div>

        {/* Right: Text and Button */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-6 lg:gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
          >
            Decoding Complexity. <br />
            <span className="text-zinc-500">Designing Clarity.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl"
          >
            I am a multi-disciplinary Creative Developer specializing in high-performance WebGL, immersive interactive experiences, and robust frontend architectures. I merge technical rigor with an obsessive eye for design to build the next generation of digital products.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full sm:w-auto"
          >
            <MagneticButton 
              onClick={handleDownloadCV}
              className="mt-2 sm:mt-4 px-8 py-4 sm:px-10 sm:py-5 w-full sm:w-auto bg-white text-black text-base sm:text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download Resume
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" opacity="0.6">
                  <path d="M12 4V16M12 16L8 12M12 16L16 12M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </MagneticButton>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
