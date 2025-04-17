import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  
  // Function to scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-70 backdrop-blur-sm py-6">
      <div className="flex items-center justify-between px-12">
        {/* Logo avec animation - moved right with pl-6 */}
        <div className="flex flex-shrink-0 items-center pl-6">
          <a href="/" aria-label="Home">
            <motion.img 
              src={logo} 
              className="mx-2" 
              width={100} 
              height={80} 
              alt="Logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            />
          </a>
        </div>

        {/* Navigation Links - Updated font styling */}
        <div className="flex items-center justify-center gap-6 text-base tracking-tighter">
          {[
            { id: "about", label: "About" },
            { id: "technologies", label: "Technologies" },
            { id: "timeline", label: "Timeline" },
            { id: "experiences", label: "Experiences" },
            { id: "projects", label: "Projects" },
            { id: "certification", label: "Certification" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
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

        {/* Icônes avec animations - moved left with pr-6 */}
        <div className="flex items-center justify-center gap-4 text-3xl pr-6">
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
    </nav>
  );
};

export default Navbar;