import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub size={20} />,
    href: "https://github.com/SurjeetKaran",
    label: "GitHub",
    desc: "My code & projects",
  },
  {
    icon: <FaLinkedin size={20} />,
    href: "https://www.linkedin.com/in/surjeet-karan",
    label: "LinkedIn",
    desc: "Connect professionally",
  },
  {
    icon: <FaEnvelope size={20} />,
    href: "mailto:surjeetkaran777@gmail.com",
    label: "Email",
    desc: "Drop me a message",
  },
 {
  icon: (
    <img
      src="/Learnify.svg"
      alt="Learnify"
      width={25}
      height={25}
      className="rounded-md group-hover:shadow-[0_0_12px_#3b82f6] transition duration-300"
    />
  ),
  href: "https://learnify-frontend-surjeet-karans-projects.vercel.app/",
  label: "Learnify",
  desc: "My Ai-Powered learning System",
}
];

export default function SocialSidebar() {
  return (
    <aside className="hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 flex-col gap-3 z-50">
      {socials.map((social, index) => (
        <motion.div
          key={social.label}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative group flex items-center"
        >
          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute -left-[200px] w-[180px] px-4 py-2 bg-white/10 text-white text-xs backdrop-blur-sm rounded-md opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto shadow-xl"
          >
            <p className="font-semibold text-sm mb-1">{social.label}</p>
            <p className="text-gray-300 text-xs">{social.desc}</p>
          </motion.div>

          {/* Icon */}
          <motion.a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 0.25 }}
            className="group relative flex items-center justify-center w-9 h-9 text-white transition-transform"
            title={social.label}
          >
            <span className="absolute inset-0 rounded-md bg-white/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">{social.icon}</span>
          </motion.a>
        </motion.div>
      ))}
    </aside>
  );
}
