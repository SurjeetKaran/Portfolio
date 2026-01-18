import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CanvasParticles from "./CanvasParticles";

const projects = [
  {
    title: "BMS – Bank Management System",
    description:
      "A full-stack banking web app with JWT-based role authentication (Admin/User), supporting account management, transfers, and transaction history via secure REST APIs.",
    link: "https://github.com/SurjeetKaran/BMS",
    tech: ["Spring Boot", "Spring Security", "JWT", "MySQL", "React", "TypeScript", "MUI"]
  },
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
  },
  {
    title: "HealthyMe",
    description:
      "A full-stack health tracking app with Flutter frontend and Node.js/Express/MongoDB backend. Track activity, calories, goals, streaks, and more with a polished UI.",
    link: "https://github.com/SurjeetKaran/HealthyMe",
    tech: ["Flutter", "Dart", "Node.js", "Express", "MongoDB", "JWT"]
  },
  {
    title: "AskNet",
    description:
      "RNN-powered Q&A model built with PyTorch, trained on a custom dataset to answer factual questions through a CLI interface.",
    link: "https://github.com/SurjeetKaran/AskNet",
    tech: ["Python", "PyTorch", "NLP", "RNN"]
  }
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // ✅ scroll exactly 1 card each click
  const scrollOneCard = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const card = container.querySelector<HTMLDivElement>("[data-card='project']");
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 24; // gap-6 = 1.5rem = 24px

    container.scrollBy({
      left: dir === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth"
    });
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-black text-white px-6 py-24 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 🌌 Background */}
      <CanvasParticles />

      {/* 🔵 Glow */}
      <div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-[600px] h-[600px] bg-[#3b82f6] rounded-full blur-[180px] opacity-25 animate-glow" />
      </div>

      {/* ✨ Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-500 to-indigo-400"
      >
        Projects
      </motion.h2>

      {/* ✅ Carousel Wrapper */}
      <div className="relative z-10 w-full max-w-6xl flex items-center gap-4">
        
        {/* ⬅ Left Arrow (outside cards) */}
        <button
          onClick={() => scrollOneCard("left")}
          className="
            flex items-center justify-center shrink-0
            w-12 h-12 rounded-full
            bg-black/40 hover:bg-black/60 border border-white/10
            backdrop-blur-md transition
          "
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* ✅ Scroll Area (arrows won't overlap now) */}
        <div className="w-full overflow-hidden">
          <div
            ref={scrollRef}
            className="
              flex gap-6
              overflow-x-scroll overflow-y-hidden
              no-scrollbar
              snap-x snap-mandatory scroll-smooth
              py-2
            "
          >
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                data-card="project"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="
                  min-w-[320px] sm:min-w-[380px] md:min-w-[420px]
                  snap-start
                  bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl
                  p-6 text-left
                  hover:border-blue-400/30 hover:shadow-blue-500/10 transition-all
                "
              >
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-2">{project.description}</p>
                <p className="text-sm text-gray-400 mb-4">
                  {project.tech.join(" • ")}
                </p>
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
        </div>

        {/* ➡ Right Arrow (outside cards) */}
        <button
          onClick={() => scrollOneCard("right")}
          className="
            flex items-center justify-center shrink-0
            w-12 h-12 rounded-full
            bg-black/40 hover:bg-black/60 border border-white/10
            backdrop-blur-md transition
          "
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
}

