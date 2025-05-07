import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import C1 from "../assets/projects/C1.jpeg";
import C2 from "../assets/projects/C2.jpeg";
import C3 from "../assets/projects/C3.jpeg";
import C4 from "../assets/projects/C4.jpeg";
import C5 from "../assets/projects/C5.jpeg";
import C6 from "../assets/projects/C6.jpeg";
import C7 from "../assets/projects/C7.jpeg";
import C8 from "../assets/projects/C8.jpeg";
import C9 from "../assets/projects/C9.jpeg";

// Certificate Data
const certifications = [
  { 
    id: 1, 
    src: C1, 
    title: "Modeling Software Systems using UML", 
    issuer: "The Hong Kong University of Science and Technology",
    link: "https://www.coursera.org/account/accomplishments/verify/2G5A7W2SX97T" 
  },
  { 
    id: 2, 
    src: C2, 
    title: "Android App Development", 
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/specialization/BFYBZ3TVW53L" 
  },
  { 
    id: 3, 
    src: C3, 
    title: "Java FullStack Developer", 
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/specialization/Q3R6ZGNS69D2" 
  },
  { 
    id: 4, 
    src: C4, 
    title: "Machine Learning with Python", 
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/V273Y5SWFURZ" 
  },
  { 
    id: 5, 
    src: C5, 
    title: "DevOps, Cloud, and Agile Foundations", 
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/specialization/WK7NPNM99Z3R" 
  },
  { 
    id: 6, 
    src: C6, 
    title: "Advanced Topics and Future Trends in Database Technologies", 
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/SMW3WW3KH9BR" 
  },
  { 
    id: 7, 
    src: C7, 
    title: "Developing Back-End Apps with Node.js and Express", 
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/PC5WLKE8WWTU" 
  },
  { 
    id: 8, 
    src: C8, 
    title: "Building Scalable Java Microservices with Spring Boot and Spring Cloud", 
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/N9JWG28TFYAU" 
  },
  { 
    id: 9, 
    src: C9, 
    title: "Advanced React", 
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/QQH2N78B9X3U" 
  },
];

const Certification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Observer for the entire section visibility
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    // Observer for individual card animations
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-card");
          } else {
            // Remove the class when scrolling up and card is no longer visible
            entry.target.classList.remove("show-card");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".cert-card").forEach((card) => {
      cardObserver.observe(card);
    });

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
      document.querySelectorAll(".cert-card").forEach((card) => {
        cardObserver.unobserve(card);
      });
    };
  }, []);

  // Motion variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 14 
      }
    },
    hover: {
      scale: 1.03,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  // Image animation variants with zoom effect
  const imageVariants = {
    initial: { scale: 0.95, opacity: 0.9 },
    hover: { 
      scale: [1, 1.08, 1.05], 
      opacity: 1,
      transition: { 
        duration: 1.2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  // Title animation variants (matching Experience component)
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div 
      ref={sectionRef}
      id="certifications" 
      className="border-b border-neutral-800 py-24"
    >
      {/* Title section matching Projects component */}
      <motion.div 
        initial="hidden" 
        animate={isVisible ? "visible" : "hidden"} 
        variants={titleVariants} 
        className="pb-2 w-full text-center"
      >
        <h1 className="my-2 text-center text-4xl">Certifications</h1>
        <motion.div
          className="h-1 w-24 bg-gray-500 mx-auto mt-2"
          initial={{ width: 0 }}
          animate={isVisible ? { width: "6rem" } : { width: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>

      {/* Description text matching Projects component style */}
      <motion.p 
        className="text-gray-400 text-center mb-8 container mx-auto px-6"
        initial={{ opacity: 0, y: 15 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.15,
          ease: "easeOut"
        }}
      >
        Here are some of the certifications I&apos;ve earned. Each certification represents my commitment 
        to continuous learning and professional development.
      </motion.p>

      {/* Grid Layout with Staggered Animation */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-8 container mx-auto"
      >
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            className="cert-card opacity-0 transform translate-y-8 transition-all duration-700"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="block h-full bg-[#0a0a0a] rounded-md overflow-hidden border border-[#112240] hover:border-white/40 transition-colors duration-300">
              {/* Certificate Image Container - Fixed Size */}
              <div className="h-[160px] overflow-hidden flex items-center justify-center bg-[#0a0a0a] p-2">
                <motion.img 
                  src={cert.src} 
                  alt={cert.title} 
                  className="max-h-full max-w-full object-contain"
                  variants={imageVariants}
                  initial="initial"
                  whileHover="hover"
                />
              </div>
              
              {/* Certificate Information - Updated to match Projects font style */}
              <div className="p-4">
                <motion.h3 
                  className="text-2xl font-semibold mb-2"
                  whileHover={{ color: "#4B5563", scale: 1.01, transition: { duration: 0.3 } }}
                >
                  {cert.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-300 mb-4"
                  whileHover={{ color: "#ffffff" }}
                >
                  {cert.issuer}
                </motion.p>
                
                <div className="flex justify-between items-center mt-2">
                  <motion.a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-xs px-3 py-1 rounded-full text-gray-300"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "#374151",
                      color: "#ffffff",
                      transition: { duration: 0.3 }
                    }}
                  >
                    View Certificate
                  </motion.a>
                  <motion.div 
                    className="w-6 h-6 flex items-center justify-center text-white"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                      <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                    </svg>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Add custom CSS for scroll animation */}
      <style jsx>{`
        .cert-card {
          transform: translateY(30px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .show-card {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .hide-card {
          opacity: 0 !important;
          transform: translateY(30px) !important;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Certification;