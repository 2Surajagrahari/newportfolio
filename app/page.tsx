import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="bg-black text-white selection:bg-yellow-400 selection:text-black cursor-none">
      <CustomCursor />
      <ScrollProgress />

      {/* Scrollytelling Hero Area */}
      <div className="relative w-full">
        {/* We have exactly 128 frames (0 to 127) */}
        <ScrollyCanvas totalFrames={128} />
        <Overlay />
      </div>

      {/* Expanded Sections */}
      <AboutMe />
      <Education />
      <Skills />
      <Achievements />

      {/* Projects */}
      <Projects />

      {/* More Sections */}
      <Certifications />
      <Contact />

      {/* Footer */}
      <footer className="w-full py-12 border-t border-white/10 flex flex-col items-center justify-center gap-6 text-neutral-500 text-sm bg-black z-20 relative">
        <div className="flex items-center gap-8 text-base font-medium">
          <a href="https://github.com/2Surajagrahari" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all">GitHub</a>
          <a href="https://www.linkedin.com/in/suraj-agraharii/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all">LinkedIn</a>
          <a href="https://www.instagram.com/suraj.agr_/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all">Instagram</a>
          <a href="mailto:surajagrahari265@gmail.com" className="hover:text-white hover:scale-110 transition-all">Gmail</a>
        </div>
        <p>© {new Date().getFullYear()} Suraj Kumar Agrahari. All rights reserved.</p>
      </footer>
    </main>
  );
}
