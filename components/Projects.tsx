"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";

const projects = [
  {
    title: "AeroNexus",
    description: "AeroNexus is an AI-powered flight route optimization system that calculates weather-aware, fuel-efficient flight paths using C++ algorithms, geospatial data, and machine learning.",
    image: "✈️"
  },
  {
    title: "Rely Tailors",
    description: "Rely Tailors is a comprehensive, web-based management system designed to streamline operations for tailoring and boutique businesses.",
    image: "🛍️"
  },
  {
    title: "ClubSphere",
    description: "This website for clubs to manage membership applications, dues collection, event planning, and member communications. Include features for committee management.",
    image: "👥"
  },
  {
    title: "Creative Agency Hub",
    description: "Award-winning portfolio featuring scrollytelling and smooth page transitions.",
    image: "🎨"
  }
];

function TiltCard({ project, index }: { project: { title: string; description: string; image: string }; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse position relative to center [-0.5, 0.5]
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative h-96 rounded-3xl cursor-pointer"
    >
      {/* Background Container */}
      <div
        className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl transition-colors duration-500 group-hover:bg-white/10"
        style={{ transform: "translateZ(0px)" }}
      />

      {/* Hover glow - Sharper less blurry effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ transform: "translateZ(-20px)" }}
      >
        <div className="absolute -inset-10 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-purple-500/10 blur-[60px] rounded-[100%]" />
      </div>

      {/* Content */}
      <div
        className="relative h-full flex flex-col justify-end p-6 md:p-8 md:pb-10 z-10"
        style={{ transform: "translateZ(50px)" }}
      >
        <div className="text-5xl md:text-6xl mb-auto opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125 origin-left">
          {project.image}
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2 md:mb-3 tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm md:text-base text-neutral-400 line-clamp-3">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="relative w-full min-h-screen bg-black py-32 px-8 lg:px-24 flex flex-col items-center z-20" id="projects">

      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Project Works
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl">
            A curated collection of digital experiences combining aesthetic design
            and rigorous engineering principles. Built for the modern web.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 [perspective:1000px]">
          {projects.map((project, index) => (
            <TiltCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
