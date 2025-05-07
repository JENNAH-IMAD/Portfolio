import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import PropTypes from 'prop-types';
import { PROJECTS } from "../constants";

const ProjectItem = ({ project, index, isVisible }) => {
  const itemControls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        itemControls.start({
          opacity: 1,
          y: 0,
          transition: { 
            duration: 0.6, 
            ease: [0.25, 0.1, 0.25, 1],
            staggerChildren: 0.05
          }
        });
      }, index * 120);
    } else {
      setTimeout(() => {
        itemControls.start({
          opacity: 0,
          y: 15,
          transition: { 
            duration: 0.4,
            ease: "easeInOut"
          }
        });
      }, index * 60);
    }
  }, [isVisible, index, itemControls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={itemControls}
      className="p-6 rounded-lg shadow-lg backdrop-blur-lg bg-gray-900 bg-opacity-20 hover:bg-opacity-30 transition-all duration-500 cursor-pointer"
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      onClick={() => window.open(project.link, '_blank')}
    >
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
        initial={{ scale: 0.98, opacity: 0.9 }}
        animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.98, opacity: 0.9 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      <motion.h3 
        className="text-2xl font-semibold mb-2"
        whileHover={{ color: "#666666", scale: 1.01, transition: { duration: 0.3 } }}
      >
        {project.title}
      </motion.h3>
      <motion.p 
        className="text-gray-300 mb-4"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ 
          duration: 0.7,
          delay: isVisible ? index * 0.08 + 0.2 : 0
        }}
      >
        {project.description}
      </motion.p>
      <motion.div 
        className="flex flex-wrap gap-2"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ 
          duration: 0.7, 
          delay: isVisible ? index * 0.08 + 0.3 : 0 
        }}
      >
        {project.technologies.map((tech, techIndex) => (
          <motion.span
            key={techIndex}
            className="bg-gray-800 text-xs px-3 py-1 rounded-full text-gray-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ 
              duration: 0.4, 
              delay: isVisible ? index * 0.05 + 0.3 + (techIndex * 0.03) : 0,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#4a4a4a",
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

ProjectItem.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired // <--- Assure-toi que chaque projet a bien un lien
  }).isRequired,
  index: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired
};

const Projects = () => {
  const controls = useAnimation();
  const [visible, setVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
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
        rootMargin: "0px 0px -5% 0px",
        threshold: 0.15
      }
    );

    const currentRef = projectsRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls]);

  const containerVariants = {
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.08,
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hidden: { 
      opacity: 0, 
      y: 30,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.04,
        staggerDirection: -1,
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.1, 0.25, 1]
      } 
    },
  };

  return (
    <motion.div 
      ref={projectsRef}
      id="projects"
      className="border-b border-neutral-800 py-24"
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={titleVariants} 
        className="pb-2 w-full text-center"
      >
        <h1 className="my-2 text-center text-4xl">Projects</h1>
        <motion.div
          className="h-1 w-24 bg-gray-500 mx-auto mt-2"
          initial={{ width: 0 }}
          animate={visible ? { width: "6rem" } : { width: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 0.3
          }}
        />
      </motion.div>
      
      <div className="container mx-auto px-6">
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
          Here are some of the projects I&apos;ve worked on. Each project represents a unique challenge 
          and an opportunity to learn and grow as a developer.
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectItem 
              key={index} 
              project={project} 
              index={index} 
              isVisible={visible} 
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
