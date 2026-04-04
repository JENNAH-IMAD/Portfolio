import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { InfoHero } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const LanguageToggle = ({ current, onChange, ariaLabel, compact = false }) => {
  return (
    <div
      className={`flex items-center gap-1 rounded-full border border-neutral-700/70 bg-black/40 px-2 py-1 ${
        compact ? "text-[10px]" : "text-[11px]"
      }`}
      aria-label={ariaLabel}
      role="group"
    >
      <button
        type="button"
        onClick={() => onChange("fr")}
        className={`px-2 py-0.5 rounded-full transition-colors ${
          current === "fr" ? "bg-white text-black" : "text-stone-400 hover:text-white"
        }`}
      >
        FR
      </button>
      <span className="text-stone-600">/</span>
      <button
        type="button"
        onClick={() => onChange("en")}
        className={`px-2 py-0.5 rounded-full transition-colors ${
          current === "en" ? "bg-white text-black" : "text-stone-400 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
};

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const currentLang = (i18n.resolvedLanguage || i18n.language || "fr").slice(0, 2);
  const changeLanguage = (lng) => {
    if (lng !== currentLang) i18n.changeLanguage(lng);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { offset: -80 });
      } else {
        window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
      }
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      setHidden(currentY > lastScrollY && currentY > 100);
      setLastScrollY(currentY);

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
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") setIsMobileMenuOpen(false); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const navLinks = [
    { id: "about", label: t("nav.about") },
    { id: "technologies", label: t("nav.technologies") },
    { id: "timeline", label: t("nav.timeline") },
    { id: "experiences", label: t("nav.experiences") },
    { id: "projects", label: t("nav.projects") },
    { id: "certification", label: t("nav.certification") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled ? "bg-black/85 backdrop-blur-md shadow-lg shadow-black/40" : "bg-black/60 backdrop-blur-sm"
      } py-4 md:py-5`}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12">

        {/* Logo */}
        <div className="flex flex-shrink-0 items-center">
          <a href="/Portfolio" aria-label={t("nav.home")}>
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
              <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-white rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.button>
          ))}
        </div>

        {/* Desktop Social Icons + Language */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageToggle
            current={currentLang}
            onChange={changeLanguage}
            ariaLabel={t("language.label")}
          />
          <motion.a
            href="https://github.com/JENNAH-IMAD"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-2xl text-stone-400 hover:text-white transition-colors"
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
            className="text-2xl text-stone-400 hover:text-[#0077b5] transition-colors"
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
            aria-label={t("nav.toggleMenu")}
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

              <div className="flex items-center justify-between pt-4">
                <LanguageToggle
                  current={currentLang}
                  onChange={changeLanguage}
                  ariaLabel={t("language.label")}
                  compact
                />
                <div className="flex gap-5 text-2xl">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
