import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleSections.length > 0) {
        setActiveSection(visibleSections[0].target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.4,
    });

    navLinks.forEach((link) => {
      const section = document.getElementById(link.href.slice(1));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        {/* 🔤 Animated Name */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative font-bold text-xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-500 to-indigo-400 before:absolute before:-inset-1 before:bg-gradient-to-r before:from-blue-500 before:to-indigo-500 before:blur-md before:opacity-30 before:rounded"
        >
          Surjeet Karan
        </motion.div>

        {/* 🖥️ Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-sm">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = id === activeSection;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`transition font-medium ${
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-500 to-indigo-400"
                      : "text-white hover:text-blue-400"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* 📱 Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-white" />
              <div className="w-6 h-0.5 bg-white" />
              <div className="w-6 h-0.5 bg-white" />
            </div>
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu Content */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden flex flex-col items-center gap-4 py-4 bg-black/90 backdrop-blur border-t border-white/10"
          >
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = id === activeSection;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-medium transition ${
                      isActive
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-500 to-indigo-400"
                        : "text-white hover:text-blue-400"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
