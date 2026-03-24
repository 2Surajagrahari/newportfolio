"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const techStack1 = [
  { name: "React", color: "text-sky-400" },
  { name: "Next.js", color: "text-white" },
  { name: "TypeScript", color: "text-blue-500" },
  { name: "Node.js", color: "text-green-500" },
  { name: "GraphQL", color: "text-pink-500" },
  { name: "Python", color: "text-yellow-400" },
  { name: "C++", color: "text-blue-600" }
];

const techStack2 = [
  { name: "Tailwind CSS", color: "text-teal-400" },
  { name: "Framer Motion", color: "text-purple-500" },
  { name: "Express", color: "text-zinc-400" },
  { name: "MongoDB", color: "text-green-600" },
  { name: "PostgreSQL", color: "text-indigo-400" },
  { name: "Docker", color: "text-blue-400" },
  { name: "AWS", color: "text-orange-500" },
  { name: "Java", color: "text-red-500" }
];

const platforms = [
  { 
    name: "LeetCode", 
    description: "239 Problems Solved. Consistent algorithmic practice.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
    graphData: [
      { label: "Easy", value: 116, max: 250, color: "bg-emerald-400" },
      { label: "Medium", value: 114, max: 250, color: "bg-yellow-400" },
      { label: "Hard", value: 9, max: 250, color: "bg-red-500" }
    ],
    stats: {
      ProblemsSolved: "239",
      GlobalRank: "#607K+",
      Easy: "116",
      Medium: "114"
    }
  },
  { 
    name: "Codeforces", 
    description: "Newbie rank. Active competitive programmer from LPU.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    graphData: [
      { label: "Current", value: 1105, max: 2000, color: "bg-zinc-400" },
      { label: "Max Rating", value: 1105, max: 2000, color: "bg-blue-400" }
    ],
    stats: {
      Rating: "1105",
      Rank: "Newbie",
      MaxRating: "1105",
      Organization: "LPU"
    }
  },
  { 
    name: "GitHub", 
    description: "Aspiring Full Stack Developer. Constant builder.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    graphData: [
      { label: "Repos", value: 37, max: 50, color: "bg-emerald-400" },
      { label: "Followers", value: 12, max: 50, color: "bg-emerald-500" },
      { label: "Following", value: 5, max: 50, color: "bg-emerald-600" }
    ],
    stats: {
      Repositories: "37",
      Followers: "12",
      Following: "5",
      Role: "Full Stack"
    }
  }
];

export default function Skills() {
  const [selectedPlatform, setSelectedPlatform] = useState<typeof platforms[0] | null>(null);

  return (
    <section className="relative w-full py-32 bg-black z-20 border-t border-white/10" id="skills">
      <div className="max-w-6xl mx-auto px-8 lg:px-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Tech Stack */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8 drop-shadow-lg"
            >
              Full-Stack Toolkit
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-zinc-400 text-lg mb-10 drop-shadow-sm"
            >
              From interactive highly-performant frontends to robust scalable backends, I bring end-to-end expertise.
            </motion.p>

            {/* Scroller 1 (Right to Left) */}
            <div className="relative flex overflow-hidden w-full group select-none [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mb-6 mt-8">
              <motion.div
                className="flex gap-4 sm:gap-6 py-4 pr-4 sm:pr-6 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
              >
                {[...techStack1, ...techStack1].map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center whitespace-nowrap px-6 sm:px-8 py-4 sm:py-5 rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-md hover:bg-zinc-800 hover:border-white/20 hover:scale-110 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] relative overflow-hidden"
                  >
                    <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                    <span className={`text-lg sm:text-xl font-bold tracking-wide ${tech.color} drop-shadow-md`}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Scroller 2 (Left to Right) */}
            <div className="relative flex overflow-hidden w-full group select-none [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <motion.div
                className="flex gap-4 sm:gap-6 py-4 pr-4 sm:pr-6 w-max"
                animate={{ x: ["-50%", "0%"] }}
                transition={{ duration: 35, ease: "linear", repeat: Infinity }}
              >
                {[...techStack2, ...techStack2].map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center whitespace-nowrap px-6 sm:px-8 py-4 sm:py-5 rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-md hover:bg-zinc-800 hover:border-white/20 hover:scale-110 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] relative overflow-hidden"
                  >
                    <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                    <span className={`text-lg sm:text-xl font-bold tracking-wide ${tech.color} drop-shadow-md`}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Coding Platforms */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8 drop-shadow-lg"
            >
              Coding & Algorithms
            </motion.h2>

            <div className="flex flex-col gap-6">
              {platforms.map((platform, i) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
                  className="group relative p-6 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-colors overflow-hidden shadow-lg backdrop-blur-sm cursor-pointer"
                  onClick={() => setSelectedPlatform(platform)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-orange-500/0 to-purple-500/0 group-hover:from-yellow-500/10 group-hover:to-orange-500/10 transition-colors duration-500" />
                  <div className="relative z-10 flex flex-col gap-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight flex items-center gap-3 drop-shadow-md">
                      {platform.name}
                      <span className="text-sm font-bold text-yellow-400 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0 duration-300">
                        View Stats →
                      </span>
                    </h3>
                    <p className="text-zinc-300 font-medium drop-shadow-sm">
                      {platform.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <AnimatePresence>
        {selectedPlatform && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedPlatform(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-zinc-900 rounded-xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedPlatform(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              
              <div className="relative w-full overflow-y-auto bg-zinc-950 flex flex-col items-center justify-center p-8 min-h-[40vh] py-16">
                <div className={`px-8 py-4 rounded-2xl ${selectedPlatform.bg} ${selectedPlatform.border} border mb-12`}>
                  <h2 className={`text-4xl sm:text-6xl font-black tracking-tight ${selectedPlatform.color}`}>
                    {selectedPlatform.name}
                  </h2>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl px-4">
                  {Object.entries(selectedPlatform.stats).map(([key, value]) => (
                    <motion.div 
                      key={key} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center justify-center p-6 bg-zinc-900 border border-white/5 rounded-2xl hover:border-white/20 transition-colors shadow-xl"
                    >
                      <span className="text-zinc-500 text-xs sm:text-sm uppercase tracking-widest mb-3 font-semibold text-center break-words">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="text-2xl sm:text-3xl font-bold text-white text-center break-words">{value}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Animated Graph UI */}
                <div className="w-full max-w-4xl px-4 mt-8 h-48 sm:h-64 flex items-end gap-2 sm:gap-4 p-6 bg-zinc-900 border border-white/5 rounded-2xl shadow-xl">
                  {selectedPlatform.graphData.map((data, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center justify-end gap-3 h-full group">
                      <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                        {data.value}
                      </span>
                      <div className="w-full relative h-full flex items-end bg-black/40 rounded-t-md overflow-hidden border-b border-white/10">
                        <motion.div 
                          className={`w-full rounded-t-md ${data.color} origin-bottom`}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          style={{ height: `${(data.value / data.max) * 100}%` }}
                          transition={{ duration: 1, type: "spring", bounce: 0.5, delay: 0.3 + (idx * 0.1) }}
                        />
                      </div>
                      <span className="text-zinc-500 text-xs sm:text-sm font-mono tracking-wider">{data.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-6 bg-zinc-900 border-t border-white/10 shrink-0">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{selectedPlatform.name} Stats</h3>
                <p className="text-zinc-400 font-mono text-sm">{selectedPlatform.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
