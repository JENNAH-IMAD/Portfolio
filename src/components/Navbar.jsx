import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { InfoHero } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "technologies", "experiences", "projects", "timeline", "certification", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") setIsMobileMenuOpen(false); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "technologies", label: "Technologies" },
    { id: "timeline", label: "Timeline" },
    { id: "experiences", label: "Experiences" },
    { id: "projects", label: "Projects" },
    { id: "certification", label: "Certification" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/85 backdrop-blur-md shadow-lg shadow-black/40" : "bg-black/60 backdrop-blur-sm"
      } py-4 md:py-5`}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12">

        {/* Logo */}
        <div className="flex flex-shrink-0 items-center">
          <a href="/Portfolio" aria-label="Home">
            <motion.img
              src={InfoHero.logo}
              className="mx-1"
              width={72}
              height={58}
              alt="Logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center gap-5 text-sm tracking-tight">
          {navLinks.map((item, i) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative py-1 transition-colors duration-200 ${
                activeSection === item.id ? "text-white" : "text-stone-400 hover:text-white"
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden lg:flex items-center gap-4 text-2xl">
          <motion.a
            href="https://github.com/JENNAH-IMAD"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-stone-400 hover:text-white transition-colors"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.2, rotate: 8 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/imad-jennah/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-stone-400 hover:text-[#0077b5] transition-colors"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.2, rotate: 8 }}
          >
            <FaLinkedin />
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-neutral-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`py-3 text-left text-base border-b border-neutral-800/50 last:border-0 transition-colors ${
                    activeSection === item.id ? "text-white font-medium" : "text-stone-400 hover:text-white"
                  }`}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ x: 6 }}
                >
                  {item.label}
                </motion.button>
              ))}

              {/* Social icons in mobile menu */}
              <div className="flex gap-5 pt-4 text-2xl">
                <motion.a
                  href="https://github.com/JENNAH-IMAD"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-stone-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/imad-jennah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-stone-400 hover:text-[#0077b5] transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaLinkedin />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
