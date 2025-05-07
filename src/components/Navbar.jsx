import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Function to scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "technologies", 
        "experiences", 
        "projects", 
        "timeline",
        "certification", 
        "contact"
      ];
      
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle window resize to close mobile menu on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);
  
  // Navigation links array
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-70 backdrop-blur-sm py-6">
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-12">
        {/* Logo with animation */}
        <div className="flex flex-shrink-0 items-center pl-2 md:pl-4 lg:pl-6">
          <a href="/" aria-label="Home">
            <motion.img 
              src={logo} 
              className="mx-2" 
              width={80}
              height={64}
              alt="Logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center justify-center gap-6 text-base tracking-tighter">
          {navLinks.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`hover:text-gray-400 transition-colors tracking-tighter ${
                activeSection === item.id ? "text-gray-400" : ""
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 * parseInt(Math.random() * 5) }}
              whileHover={{ scale: 1.1 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center justify-center gap-4 text-3xl pr-6">
          <motion.a 
            href="https://github.com/JENNAH-IMAD"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            whileHover={{ scale: 1.2, rotate: 10, color: "#333" }}
          >
            <FaGithub />
          </motion.a>

          <motion.a 
            href="https://www.linkedin.com/in/imad-jennah/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
            whileHover={{ scale: 1.2, rotate: 10, color: "#0077b5" }}
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <motion.div 
          className="lg:hidden bg-black bg-opacity-90 backdrop-blur-sm"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col px-4 py-2">
            {/* Mobile Navigation Links */}
            {navLinks.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`py-3 text-left hover:text-gray-400 transition-colors ${
                  activeSection === item.id ? "text-gray-400" : ""
                }`}
                whileHover={{ x: 10 }}
              >
                {item.label}
              </motion.button>
            ))}
            
            {/* Mobile Social Icons */}
            <div className="flex gap-6 py-4 text-2xl">
              <motion.a 
                href="https://github.com/JENNAH-IMAD"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{ scale: 1.2, rotate: 10, color: "#333" }}
              >
                <FaGithub />
              </motion.a>

              <motion.a 
                href="https://www.linkedin.com/in/imad-jennah/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, rotate: 10, color: "#0077b5" }}
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;