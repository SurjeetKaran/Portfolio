// src/components/AboutMe.tsx
import CanvasParticles from "./CanvasParticles";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative w-full bg-black text-white py-24 px-6 flex flex-col items-center"
    >
      {/* 🌌 Canvas Particle Background */}
      <CanvasParticles />

      {/* 🔵 Background Glow */}
      <div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-[600px] h-[600px] bg-[#3b82f6] rounded-full blur-[180px] opacity-25 animate-glow" />
      </div>

      {/* ✨ Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-500 to-indigo-400"
      >
        About Me
      </motion.h2>

      {/* 🧊 Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl w-full text-center rounded-3xl p-10 pb-8 backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl transition duration-300 hover:border-blue-400/30 hover:shadow-blue-500/10"
      >
        <div className="text-left">
          {/* 👨‍💻 Intro */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-xl md:text-2xl font-semibold mb-4"
          >
            I'm <span className="text-blue-400">Surjeet Karan</span> — Full Stack & Mobile App Developer
          </motion.h3>

          {/* 📝 About Me */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-base md:text-lg text-gray-300 leading-relaxed"
          >
            I’m a passionate developer who loves building impactful applications from scratch. I specialize in both frontend and backend development, creating high-performance, scalable, and visually appealing solutions.
          </motion.p>

          {/* 💻 Tech Stack */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base md:text-lg text-gray-300 leading-relaxed mt-4"
          >
            My expertise spans <span className="text-white font-medium">Flutter, Dart, React Native, React, TypeScript, Node.js, Express, MongoDB, and Python</span>. I enjoy transforming ideas into real products with clean, modular, and maintainable code.
          </motion.p>

          {/* 🌟 Highlight Projects */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-base md:text-lg text-gray-300 leading-relaxed mt-4"
          >
            I recently built <span className="text-white font-medium">HealthyMe</span> — a full-stack health tracker app, and <span className="text-white font-medium">Learnify</span> — an AI-powered gamified learning platform. These projects reflect my ability to independently design, develop, and deploy full-scale applications.
          </motion.p>

          {/* 🤝 Call to Action */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base md:text-lg text-gray-300 leading-relaxed mt-4"
          >
            If you’re a recruiter or collaborator, feel free to explore my{" "}
            <a href="#projects" className="text-blue-400 hover:underline">
              projects
            </a>{" "}
            or{" "}
            <a href="#contact" className="text-blue-400 hover:underline">
              connect with me
            </a>{" "}
            — I’m always excited to create, learn, and work on meaningful solutions.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
