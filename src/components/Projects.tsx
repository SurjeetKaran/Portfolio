import { motion } from "framer-motion";

const projects = [
  {
    title: "Modern Portfolio",
    description:
      "A professional single-page portfolio with smooth Lenis scrolling, Framer Motion animations, and styled with Tailwind CSS.",
    link: "https://portfolio-surjeet-karans-projects.vercel.app/",
    tech: ["React", "TypeScript", "Framer Motion", "Tailwind", "Lenis"]
  },
  {
    title: "Learnify",
    description:
      "An AI-powered gamified learning platform that blends interactive quizzes, adaptive feedback, and engaging UI to make learning fun and efficient.",
    link: "https://learnify-frontend-surjeet-karans-projects.vercel.app/",
    tech: ["Next.js", "TypeScript", "GroqAI API", "MongoDB", "Tailwind"]
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-black text-white px-6 py-24 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 🔵 Background Glow (matching About) */}
      <div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-[600px] h-[600px] bg-[#3b82f6] rounded-full blur-[180px] opacity-25 animate-glow" />
      </div>

      {/* ✨ Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-500 to-indigo-400"
      >
        Projects
      </motion.h2>

      {/* 📦 Project Cards */}
      <div className="relative z-10 grid gap-6 md:grid-cols-2 max-w-5xl w-full">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-6 text-left hover:border-blue-400/30 hover:shadow-blue-500/10 transition-all"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-2">{project.description}</p>
            <p className="text-sm text-gray-400 mb-4">{project.tech.join(" • ")}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Explore →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

