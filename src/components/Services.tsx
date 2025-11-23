import { motion } from "framer-motion";
import { Code, MonitorSmartphone, Database, Laptop } from "lucide-react";
import CanvasParticles from "./CanvasParticles";

const services = [
  {
    icon: <Code size={28} />,
    title: "Full-Stack Development",
    description:
      "I build end-to-end scalable applications using modern stacks like MERN (MongoDB, Express, React, Node.js) and Flutter for mobile apps. From designing RESTful APIs to crafting responsive frontends, I ensure modular architecture, seamless data flow, and high performance across platforms. I also follow best practices like clean code, reusable components, and version control.",
  },
  {
    icon: <MonitorSmartphone size={28} />,
    title: "Responsive UI & Mobile Development",
    description:
      "I design elegant, mobile-first interfaces using Flutter, React Native, Tailwind CSS, and Framer Motion. Every interface is optimized for performance, accessibility, and cross-device consistency. I emphasize smooth animations, intuitive navigation, and a user-centric experience for both mobile and web platforms.",
  },
  {
    icon: <Database size={28} />,
    title: "Backend & API Development",
    description:
      "I create secure, efficient, and scalable backend systems using Node.js, Express, and MongoDB. My focus includes authentication & authorization, data modeling, API versioning, error handling, and optimization of database queries. I ensure robust server-side logic that integrates seamlessly with frontend and mobile applications.",
  },
  {
    icon: <Laptop size={28} />,
    title: "Software & App Engineering",
    description:
      "I design and develop full-fledged software and apps, following modern engineering principles. From requirement analysis and prototyping to testing and deployment, I use agile workflows and CI/CD practices. My solutions prioritize reliability, maintainability, and user experience across web and mobile platforms.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full min-h-screen bg-black text-white py-24 px-6 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 🌌 Canvas Particle Background */}
      <CanvasParticles />

      {/* 💡 Glowing Backgrounds */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500 opacity-20 rounded-full blur-[160px] pointer-events-none z-0"
        aria-hidden="true"
      />
      <div
        className="absolute top-[40%] left-[55%] w-[400px] h-[400px] bg-indigo-600 opacity-10 rounded-full blur-[180px] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* 🔷 Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-3xl md:text-4xl font-bold mb-14 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500"
      >
        Services
      </motion.h2>

      {/* 🧩 Service Grid */}
      <div className="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 transition duration-300 shadow-2xl hover:border-blue-400/30 hover:shadow-blue-500/10"
          >
            <div className="text-blue-400 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
