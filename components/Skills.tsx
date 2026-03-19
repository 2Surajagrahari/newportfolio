"use client";

import { motion } from "framer-motion";

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Express",
  "MongoDB", "PostgreSQL", "Docker", "AWS", "GraphQL",
  "Tailwind CSS", "Framer Motion", "Python", "C++", "Java"
];

const platforms = [
  { name: "LeetCode", description: "200+ Problems Solved. Top 11.5% Globally." },
  { name: "Codeforces", description: "newbie rating. Active competitive programmer." },
  { name: "GitHub", description: "Open source contributor and constant builder." }
];

export default function Skills() {
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

            <div className="relative flex overflow-hidden w-full group select-none [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <motion.div
                className="flex gap-4 py-4 pr-4 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 40, ease: "linear", repeat: Infinity }}
              >
                {[...techStack, ...techStack].map((tech, i) => (
                  <span
                    key={i}
                    className="whitespace-nowrap px-6 py-3 rounded-full border border-white/20 bg-white/5 text-white/95 font-semibold tracking-wide hover:bg-white/20 hover:scale-110 hover:border-yellow-500/50 transition-all cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
                  >
                    {tech}
                  </span>
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
                  className="group relative p-6 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-colors overflow-hidden shadow-lg backdrop-blur-sm"
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
    </section>
  );
}
