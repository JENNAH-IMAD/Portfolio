import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import PropTypes from 'prop-types';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
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

  const handleCardClick = () => {
    const target = project.previewLink || project.link;
    if (target && target !== "#") {
      window.open(target, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={itemControls}
      className="flex flex-col p-5 rounded-xl shadow-lg backdrop-blur-lg bg-gray-900 bg-opacity-20 hover:bg-opacity-40 border border-neutral-800 hover:border-neutral-600 transition-all duration-500 cursor-pointer group"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      onClick={handleCardClick}
    >
      {/* Image */}
      <div className="overflow-hidden rounded-lg mb-4">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-44 object-cover rounded-lg"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Title */}
      <motion.h3
        className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-300"
      >
        {project.title}
      </motion.h3>

      {/* Description */}
      <motion.ul
        className="text-gray-400 mb-4 list-disc list-inside space-y-1 text-sm flex-1"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 0.7,
          delay: isVisible ? index * 0.08 + 0.2 : 0
        }}
      >
        {project.description.map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </motion.ul>

      {/* Technologies */}
      <motion.div
        className="flex flex-wrap gap-2 mb-4"
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
            whileHover={{
              scale: 1.08,
              backgroundColor: "#374151",
              color: "#ffffff",
              transition: { duration: 0.2 }
            }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>

      {/* Action Buttons */}
      <div
        className="flex gap-3 mt-auto pt-3 border-t border-neutral-700"
        onClick={(e) => e.stopPropagation()}
      >
        {project.link && project.link !== "#" && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs bg-neutral-800 hover:bg-neutral-700 text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaGithub className="text-base" />
            GitHub
          </motion.a>
        )}
        {project.previewLink && (
          <motion.a
            href={project.previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs bg-white text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-lg font-medium transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaExternalLinkAlt className="text-base" />
            Live Preview
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
    previewLink: PropTypes.string,
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
        threshold: 0.1
      }
    );

    const currentRef = projectsRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
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
      className="border-b border-neutral-800 py-20"
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

      <div className="container mx-auto px-4 md:px-6">
        <motion.p
          className="text-gray-400 text-center mb-10"
          initial={{ opacity: 0, y: 15 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: "easeOut"
          }}
        >
          Here are some of the projects I&apos;ve worked on. Click a card or the Live Preview button to explore.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
