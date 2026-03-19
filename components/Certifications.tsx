"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const certs = [
  { name: "Google Data Analytics", year: "2023", issuer: "Coursera" },
  { name: "Advanced React Patterns", year: "2022", issuer: "Frontend Masters" },
  { name: "AWS Certified Solutions Architect", year: "2021", issuer: "Amazon Web Services" },
  { name: "WebGL & Three.js Journey", year: "2021", issuer: "Bruno Simon" },
];

export default function Certifications() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative w-full py-32 bg-black z-20">
      <div className="max-w-6xl mx-auto px-8 lg:px-24">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16"
        >
          Certifications & Learning
        </motion.h2>

        <div className="flex flex-col border-t border-white/10">
          {certs.map((cert, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative border-b border-white/10 py-8 cursor-pointer overflow-hidden leading-none"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Highlight background */}
              <motion.div 
                className="absolute inset-0 bg-white/5 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hovered === i ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "circOut" }}
              />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 px-4 transition-transform duration-500 group-hover:translate-x-4">
                <div className="flex items-center gap-4 md:gap-6 text-white group-hover:text-yellow-400 transition-colors duration-300">
                  <span className="text-zinc-500 text-sm md:text-lg font-mono tracking-widest group-hover:text-yellow-600 transition-colors">0{i + 1}</span>
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-medium">
                    {cert.name}
                  </h3>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-4 md:gap-6 text-zinc-400 text-xs sm:text-sm md:text-base pl-[32px] md:pl-0 w-full md:w-auto mt-2 md:mt-0">
                  <span>{cert.issuer}</span>
                  <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-yellow-600 transition-colors" />
                  <span className="font-mono text-zinc-500">{cert.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
