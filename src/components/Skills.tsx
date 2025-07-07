// src/components/Skills.tsx
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiGit,
  SiJavascript,
  SiChakraui,
  SiVite,
  SiNextdotjs,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { TbListSearch } from "react-icons/tb";
import { SlMagicWand } from "react-icons/sl";

const skills = [
  {
    name: "React",
    icon: <SiReact size={20} />,
    description: "A JavaScript library for building user interfaces.",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs size={20} />,
    description: "JavaScript runtime for building server-side apps.",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={20} />,
    description: "NoSQL database for flexible, document-oriented data.",
  },
  {
    name: "Express.js",
    icon: <SiExpress size={20} />,
    description: "Minimal web framework for Node.js.",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={20} />,
    description: "Typed superset of JavaScript for scalable development.",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={20} />,
    description: "The core language of the web, enabling interactivity.",
  },
  {
    name: "C++",
    icon: <SiCplusplus size={20} />,
    description:
      "Object-oriented language for systems and performance-critical apps.",
  },
  {
    name: "C",
    icon: <SiC size={20} />,
    description: "Powerful low-level language for systems programming.",
  },
  {
    name: "DSA",
    icon: <TbListSearch size={20} />,
    description: "Data Structures & Algorithms for efficient problem-solving.",
  },
  {
    name: "Chakra UI",
    icon: <SiChakraui size={20} />,
    description: "Accessible and composable React component library.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={20} />,
    description: "Utility-first CSS framework for rapid UI development.",
  },
  {
    name: "Framer Motion",
    icon: <SiFramer size={20} />,
    description: "React animation library for motion and transitions.",
  },
  {
    name: "Git",
    icon: <SiGit size={20} />,
    description: "Version control system for tracking code changes.",
  },
  {
    name: "Vite.js",
    icon: <SiVite size={20} />,
    description: "Lightning-fast frontend build tool and dev server.",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={20} />,
    description: "React framework with SSR and full-stack features.",
  },
  {
    name: "Lenis",
    icon: <SlMagicWand size={20} />,
    description: "Smooth scroll library for creating fluid interactions.",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen bg-black text-white py-24 px-6 flex flex-col items-center justify-center"
    >
      {/* 💡 Blue Bulb Glow Background */}
      <div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-[500px] h-[500px] bg-[#3b82f6] rounded-full blur-[160px] opacity-20 animate-glow" />
      </div>

      {/* 🧠 Skills Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-500 to-indigo-400"
      >
        Skill Set
      </motion.h2>

      {/* 🧊 Skills Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03 }}
            className="group relative bg-white/10 border border-white/10 backdrop-blur-md p-4 rounded-xl flex items-center gap-3 text-left transition duration-300 hover:ring-2 hover:ring-blue-500/60 hover:shadow-[0_0_20px_#3b82f6aa]"
          >
            <div className="text-blue-400">{skill.icon}</div>

            {/* Tooltip */}
            <div className="relative group inline-block">
              <div className="cursor-pointer px-2 py-1">{skill.name}</div>

              {/* Tooltip */}
              <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max max-w-xs opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out bg-zinc-900 text-white text-sm px-4 py-2 rounded-lg shadow-xl border border-blue-500/30 z-20">
                {skill.description}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-zinc-900 border-l border-t border-blue-500/30 shadow-sm" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
