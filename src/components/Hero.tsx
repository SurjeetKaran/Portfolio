import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { useState, useEffect } from "react";
import CanvasParticles from "./CanvasParticles"; // adjust path if needed


const MotionDiv = (props: HTMLMotionProps<"div">) => <motion.div {...props} />;

const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Engineer",
  "Software Developer",
  "Android Developer",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  // Typing effect logic
  useEffect(() => {
    const role = roles[currentRole];
    if (charIndex < role.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + role[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }, 1000);
      return () => clearTimeout(pause);
    }
  }, [charIndex, currentRole]);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-x-hidden"
    >

       {/* 🌌 Canvas Particle Background */}
  <CanvasParticles />
      {/* 💡 Glowing Bulb Background (from Skills section) */}
      <div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-[#3b82f6] rounded-full blur-[140px] opacity-30 animate-glow" />
      </div>

      {/* 🎯 Hero Content */}
     <div className="relative z-10 max-w-4xl w-full text-center rounded-3xl p-10 pb-8 backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl transition duration-300 hover:border-blue-400/30 hover:shadow-blue-500/10">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-gray-300"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl min-h-[1.5em] font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600"
        >
          Surjeet Karan
        </motion.h1>

        <motion.p
          key={currentRole}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-2xl text-gray-200 min-h-[2em] font-mono"
        >
          {displayedText}
          <span className="animate-pulse">|</span>
        </motion.p>

        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl text-white text-lg font-semibold bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition duration-300"
          >
            Contact Me
          </a>

          <a
            href="/Surjeet_resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl text-white text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition duration-300"
          >
            Get Resume
          </a>
        </MotionDiv>
      </div>
    </section>
  );
}
