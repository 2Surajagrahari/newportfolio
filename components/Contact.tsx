"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/surajagrahari265@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative w-full py-40 bg-black z-20 overflow-hidden" id="contact">
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 overflow-hidden pointer-events-none opacity-5">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          <span className="text-[200px] md:text-[300px] font-bold text-white uppercase tracking-tighter leading-none pr-16 shadow-none">
            Let&apos;s Talk Let&apos;s Talk Let&apos;s Talk
          </span>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-8 lg:px-24 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 lg:mb-8 drop-shadow-lg"
        >
          Ready to sync?<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 line-through decoration-white/20">Let&apos;s build.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-zinc-400 mb-12 lg:mb-16 max-w-2xl mx-auto drop-shadow-md"
        >
          Whether you have a specific project in mind, need technical consultation, or just want to explore possibilities, I&apos;m currently open for new opportunities.
        </motion.p>
        
        {status === "success" ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-xl mx-auto p-12 rounded-3xl bg-white/5 border border-white/20 shadow-2xl flex flex-col items-center justify-center backdrop-blur-md"
          >
            <span className="text-6xl mb-6 drop-shadow-lg">🎉</span>
            <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Thank you!</h3>
            <p className="text-zinc-300 text-lg">Your direct message has been sent to surajagrahari265@gmail.com. I will reach out to you very soon.</p>
            <button onClick={() => setStatus("idle")} className="mt-8 px-6 py-2 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors shadow-lg">
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-xl mx-auto flex flex-col gap-6 text-left"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_subject" value="New Direct Message from Portfolio!" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="w-full relative group shadow-lg">
              <input type="text" name="name" placeholder="Your Name" required className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-white font-medium outline-none focus:border-white/50 transition-colors peer backdrop-blur-sm" />
              <div className="absolute inset-0 border border-yellow-500/0 rounded-xl pointer-events-none peer-focus:border-yellow-500/50 transition-colors duration-500" />
            </div>
            
            <div className="w-full relative group shadow-lg">
              <input type="email" name="email" placeholder="Email Address" required className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-white font-medium outline-none focus:border-white/50 transition-colors peer backdrop-blur-sm" />
              <div className="absolute inset-0 border border-orange-500/0 rounded-xl pointer-events-none peer-focus:border-orange-500/50 transition-colors duration-500" />
            </div>

            <div className="w-full relative group shadow-lg">
              <textarea name="message" placeholder="Tell me about your project..." required rows={4} className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-white font-medium outline-none focus:border-white/50 transition-colors peer resize-none backdrop-blur-sm" />
              <div className="absolute inset-0 border border-yellow-500/0 rounded-xl pointer-events-none peer-focus:border-yellow-500/50 transition-colors duration-500" />
            </div>

            <button disabled={status === "loading"} type="submit" className="w-full py-5 rounded-xl bg-white text-black font-bold text-lg hover:bg-neutral-200 transition-colors shadow-[0_4px_14px_rgba(255,255,255,0.4)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.6)] disabled:opacity-50">
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-center mt-2 font-medium">Oops! Something went wrong. Please email directly to <a href="mailto:surajagrahari265@gmail.com" className="underline hover:text-red-300">surajagrahari265@gmail.com</a></p>
            )}
          </motion.form>
        )}
      </div>
    </section>
  );
}
