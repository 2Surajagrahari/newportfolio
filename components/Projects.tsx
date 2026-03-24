"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";

const projects = [
  {
    title: "AeroNexus",
    description: "An AI-powered flight route optimization system calculating weather-aware, fuel-efficient paths using ML and geospatial data.",
    image: "✈️",
    className: "md:col-span-2 md:row-span-2 min-h-[350px] md:min-h-[450px]",
    gradient: "from-blue-600/30 via-cyan-500/10 to-transparent",
    border: "group-hover:border-cyan-400/50 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
  },
  {
    title: "Rely Tailors",
    description: "Comprehensive web-based management system streamlining operations for tailoring boutiques.",
    image: "🛍️",
    className: "md:col-span-1 md:row-span-1 min-h-[250px]",
    gradient: "from-pink-600/30 via-purple-500/10 to-transparent",
    border: "group-hover:border-pink-400/50 group-hover:shadow-[0_0_30px_rgba(244,114,182,0.2)]"
  },
  {
    title: "ClubSphere",
    description: "Membership manager for dues collection, event planning, and seamless communication.",
    image: "👥",
    className: "md:col-span-1 md:row-span-1 min-h-[250px]",
    gradient: "from-emerald-600/30 via-teal-500/10 to-transparent",
    border: "group-hover:border-teal-400/50 group-hover:shadow-[0_0_30px_rgba(45,212,191,0.2)]"
  },
  {
    title: "Creative Portfolio",
    description: "Award-winning creative portfolio featuring scrollytelling, high-performance WebGL, and smooth modern transitions.",
    image: "🎨",
    className: "md:col-span-3 min-h-[300px]",
    gradient: "from-orange-600/30 via-yellow-500/10 to-transparent",
    border: "group-hover:border-yellow-400/50 group-hover:shadow-[0_0_30px_rgba(250,204,21,0.2)]"
  }
];

function TiltCard({ project, index }: { project: typeof projects[0]; index: number }) {
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
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-3xl cursor-pointer ${project.className}`}
    >
      {/* Background Container */}
      <div
        className={`absolute inset-0 bg-zinc-900/60 backdrop-blur-xl border border-white/5 rounded-3xl transition-all duration-500 overflow-hidden ${project.border}`}
        style={{ transform: "translateZ(0px)" }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-700`} />
      </div>

      {/* Hover glow behind the icon */}
      <div
        className="absolute top-8 right-8 w-32 h-32 bg-white/5 rounded-full blur-[40px] group-hover:bg-white/10 transition-colors duration-700 pointer-events-none"
        style={{ transform: "translateZ(-20px)" }}
      />

      {/* Content */}
      <div
        className="relative h-full flex flex-col justify-end p-6 md:p-8 md:pb-10 z-10"
        style={{ transform: "translateZ(40px)" }}
      >
        <div className="absolute top-6 right-6 md:top-8 md:right-8 text-5xl md:text-7xl opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12 group-hover:-translate-y-2 origin-center drop-shadow-2xl">
          {project.image}
        </div>

        <div className="mt-auto pt-24 w-full md:max-w-[85%]">
           <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 tracking-tight drop-shadow-md">
             {project.title}
           </h3>
           <p className="text-sm md:text-base text-neutral-300 leading-relaxed drop-shadow-sm">
             {project.description}
           </p>
           
           <div className="mt-6 flex items-center gap-3">
             <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform">
               View Live
             </button>
             <button className="px-5 py-2 rounded-full border border-white/20 text-white text-sm font-bold hover:bg-white/10 transition-colors">
               Source Code
             </button>
           </div>
        </div>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 [perspective:1000px] w-full max-w-6xl">
          {projects.map((project, index) => (
            <TiltCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
