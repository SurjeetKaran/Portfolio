import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import CanvasParticles from "./CanvasParticles";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-black text-white px-6 py-24 flex items-center justify-center overflow-hidden"
    >
       {/* 🌌 Canvas Particle Background */}
              <CanvasParticles />
      {/* 🔮 Glowing Background */}
      <div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-[600px] h-[600px] bg-gradient-to-tr from-purple-600 via-blue-500 to-transparent rounded-full blur-[180px] opacity-40" />
      </div>

      {/* 🧊 Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
       className="relative z-10 max-w-4xl w-full text-center rounded-3xl p-10 pb-8 backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl transition duration-300 hover:border-blue-400/30 hover:shadow-blue-500/10">
        {/* 🌈 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-500 to-indigo-400 text-center"
        >
          Let’s Connect
        </motion.h2>

        {/* 💬 Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 text-center max-w-2xl mx-auto mb-10"
        >
          Interested in working together or have a question? Reach out via email or connect through any platform below!
        </motion.p>

        {/* 🔗 Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a
            href="mailto:surjeetKaran777@gmail.com"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300"
          >
            <Mail size={18} />
            Email
          </a>

          <a
            href="https://github.com/SurjeetKaran"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300"
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/surjeet-karan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-sky-600 to-blue-800 px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
