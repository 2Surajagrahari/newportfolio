"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.floor(from + (to - from) * easeProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, isInView]);

  return <span ref={ref}>{value}</span>;
}

const stats = [
  { value: 50, suffix: "+", label: "Global Projects Delivered" },
  { value: 12, suffix: "", label: "Awards Won" },
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export default function Achievements() {
  return (
    <section className="relative w-full py-24 bg-black z-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-8 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4">
                <Counter from={0} to={stat.value} duration={2.5} />
                <span className="text-zinc-500 ml-1">{stat.suffix}</span>
              </div>
              <p className="text-sm md:text-base text-zinc-400 font-medium uppercase tracking-widest max-w-[160px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
