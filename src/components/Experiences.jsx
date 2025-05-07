import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import PropTypes from 'prop-types';
import { EXPERIENCES } from "../constants";

const ExperienceItem = ({ experience, index, isVisible }) => {
  const itemControls = useAnimation();
  
  useEffect(() => {
    if (isVisible) {
      // Sequence the appearance based on index, coming from left
      setTimeout(() => {
        itemControls.start({
          opacity: 1,
          x: 0,
          transition: { 
            duration: 0.8, 
            type: "spring",
            stiffness: 70,
            damping: 12
          }
        });
      }, index * 250);
    } else {
      // Sequence the disappearance based on reverse index
      setTimeout(() => {
        itemControls.start({
          opacity: 0,
          x: -100,
          transition: { 
            duration: 0.5
          }
        });
      }, (EXPERIENCES.length - index - 1) * 100);
    }
  }, [isVisible, index, itemControls]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={itemControls}
      className="mb-12"
      // Removed whileHover that was causing movement to the left
    >
      <motion.div 
        className="flex justify-between items-center mb-4"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ 
          duration: 0.5, 
          delay: isVisible ? index * 0.25 + 0.2 : 0
        }}
      >
        <motion.h2 
          className="text-2xl font-semibold"
          whileHover={{ color: "#4B5563", scale: 1.01, transition: { duration: 0.3 } }}
        >
          {experience.role}
        </motion.h2>
        <motion.span 
          className="text-gray-400"
          whileHover={{ color: "#ffffff" }}
        >
          {experience.year}
        </motion.span>
      </motion.div>
      
      <motion.h3 
        className="text-xl text-gray-300 mb-2"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ 
          duration: 0.5, 
          delay: isVisible ? index * 0.25 + 0.4 : 0
        }}
        whileHover={{ color: "#4B5563", scale: 1.01, transition: { duration: 0.3 } }}
      >
        {experience.company}
      </motion.h3>
      
      <motion.p 
        className="text-gray-300 mb-4"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ 
          duration: 0.5, 
          delay: isVisible ? index * 0.25 + 0.6 : 0
        }}
      >
        {experience.description}
      </motion.p>
      
      <motion.div 
        className="flex flex-wrap gap-2"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: isVisible ? index * 0.25 + 0.8 : 0
        }}
      >
        {experience.technologies.map((tech, techIndex) => (
          <motion.span
            key={techIndex}
            className="bg-gray-800 text-xs px-3 py-1 rounded-full text-gray-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ 
              duration: 0.3, 
              delay: isVisible ? index * 0.25 + 0.8 + (techIndex * 0.05) : 0
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#374151",
              color: "#ffffff",
              transition: { duration: 0.3 }
            }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

// Add prop validation
ExperienceItem.propTypes = {
  experience: PropTypes.shape({
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired
};

const Experiences = () => {
  const controls = useAnimation();
  const [visible, setVisible] = useState(false);
  const experiencesRef = useRef(null);
  
  useEffect(() => {
    // Create the intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        
        if (entry.isIntersecting) {
          setVisible(true);
          controls.start("visible");
        } else {
          setVisible(false);
          controls.start("hidden");
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px", // Adjust when the animation triggers
        threshold: 0.2 // How much of the element needs to be visible
      }
    );

    // Store the current ref value in a variable for cleanup
    const currentRef = experiencesRef.current;

    // Observe the experiences element
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls]);

  // Enhanced animation variants
  const containerVariants = {
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.6
      }
    },
    hidden: { 
      opacity: 0, 
      y: 50,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
        duration: 0.4
      }
    }
  };

  // Title animation variants (left to right)
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.div 
      ref={experiencesRef}
      id="experiences"
      className="border-b border-neutral-800 py-24"
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Title with left-to-right animation */}
      <motion.div initial="hidden" animate="visible" variants={titleVariants} className="pb-2 w-full text-center">
        <h1 className="my-2 text-center text-4xl">Experience</h1>
        <motion.div
          className="h-1 w-24 bg-gray-500 mx-auto mt-2"
          initial={{ width: 0 }}
          animate={visible ? { width: "6rem" } : { width: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>
      
      <div className="container mx-auto px-6">
        {/* Description text matching Projects component style */}
        <motion.p 
          className="text-gray-400 text-center mb-8"
          initial={{ opacity: 0, y: 15 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.15,
            ease: "easeOut"
          }}
        >
          My professional journey has equipped me with a diverse skill set and valuable experience
          across various roles and technologies.
        </motion.p>
        
        {EXPERIENCES.map((experience, index) => (
          <ExperienceItem 
            key={index} 
            experience={experience} 
            index={index} 
            isVisible={visible} 
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Experiences;