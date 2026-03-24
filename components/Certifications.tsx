"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const certs = [
  { name: "DSA Summer Training Course", year: "2025", issuer: "Programming Pathshala", image: "/dsa-cert.png" },
  { name: "The Bits and Bytes of Computer Networking", year: "2024", issuer: "Google on Coursera", image: "/google-cert.png" },
  { name: "Computer Communications", year: "2024", issuer: "University of Colorado", image: "/colorado-cert.png" },
];

export default function Certifications() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedCert, setSelectedCert] = useState<typeof certs[0] | null>(null);

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
              onClick={() => setSelectedCert(cert)}
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

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-zinc-900 rounded-xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              <div className="relative w-full overflow-y-auto bg-zinc-800 flex items-center justify-center p-4 min-h-[50vh]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={selectedCert.image} alt={selectedCert.name} className="w-full h-auto object-contain" />
              </div>

              <div className="p-6 bg-zinc-900 border-t border-white/10 shrink-0">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{selectedCert.name}</h3>
                <p className="text-zinc-400 font-mono text-sm">{selectedCert.issuer} • {selectedCert.year}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
