"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Lovely Professional University, Jalandhar",
    score: "7.3 CGPA",
    year: "Currently Pursuing",
    details: "Focusing on core computer science subjects, software development, and modern technologies.",
  },
  {
    degree: "12th Standard",
    institution: "Sarvoday Inter College, Jaunpur",
    score: "75%",
    year: "Completed",
    details: "Completed higher secondary education with a science background, laying a strong foundation in mathematics and analytical problem solving.",
  }
];

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative w-full py-32 bg-black z-20 overflow-hidden" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-8 lg:px-24 relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-24 text-center md:text-left"
        >
          Educational Pathway
        </motion.h2>

        <div className="relative flex flex-col gap-16 md:gap-32">
          {/* Animated Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-[2px] bg-white/10 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div
              className="w-full bg-yellow-400 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {educationData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`relative flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                {/* Center Dot */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-[20px] md:left-1/2 w-6 h-6 md:w-8 md:h-8 -translate-x-1/2 rounded-full bg-black border-4 border-yellow-400 z-10 shadow-[0_0_20px_rgba(250,204,21,0.5)]"
                />

                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                    className="group relative p-6 md:p-8 bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-yellow-400/50 transition-colors duration-500 overflow-hidden"
                  >
                    {/* Hover internal glow */}
                    <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/5 transition-colors duration-500" />

                    <div className={`relative z-10 flex flex-col gap-2 ${isEven ? 'md:items-end text-left md:text-right' : 'items-start text-left'}`}>
                      <span className="inline-block px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-xs font-mono font-medium w-fit mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                        {item.degree}
                      </h3>
                      <h4 className="text-base md:text-lg text-zinc-300 font-medium">
                        {item.institution}
                      </h4>
                      <div className="inline-flex items-center gap-2 mt-2 w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                        <span className="font-mono text-white/90 font-bold bg-white/5 px-2 py-0.5 rounded text-sm md:text-base">
                          {item.score}
                        </span>
                      </div>
                      <p className="mt-4 text-zinc-400 leading-relaxed text-sm md:text-base">
                        {item.details}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Empty flex space for alignment */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
