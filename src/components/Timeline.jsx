import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';

const careerData = [
  { title: "Software Engineering Intern", company: "EMSI", start: 2020, end: 2020, color: "bg-green-500" },
  { title: "Software Developer Intern", company: "EMSI", start: 2021, end: 2021, color: "bg-green-500" },
  { title: "Machine Learning Developer Intern", company: "EMSI (Final Year Project)", start: 2022, end: 2022, color: "bg-green-500" },
  { title: "Full Stack Web Developer Intern", company: "Eurafric Information", start: 2023, end: 2023, color: "bg-blue-200" },
  { title: "Full Stack Web Developer Intern", company: "Munisys", start: 2024, end: 2024, color: "bg-blue-500" },
];

// Define the job item component with proper prop validation
const JobItem = ({ job, index, isVisible }) => {
  const itemControls = useAnimation();
  
  useEffect(() => {
    if (isVisible) {
      // Sequence the appearance based on index
      setTimeout(() => {
        itemControls.start({
          opacity: 1,
          y: 0,
          transition: { 
            duration: 0.7, 
            type: "spring",
            stiffness: 100
          }
        });
      }, index * 150);
    } else {
      // Sequence the disappearance based on reverse index
      setTimeout(() => {
        itemControls.start({
          opacity: 0,
          y: 30,
          transition: { 
            duration: 0.5
          }
        });
      }, (careerData.length - index - 1) * 100);
    }
  }, [isVisible, index, itemControls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={itemControls}
      className="relative flex flex-col items-start"
      style={{ left: `${(job.start - 2020) * 20}%`, width: `${(job.end - job.start + 1) * 20}%` }}
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
    >
      <motion.p 
        className="text-sm font-semibold"
        whileHover={{ color: "#38b2ac", scale: 1.05 }}
      >
        {job.title}
      </motion.p>
      <motion.p 
        className="text-sm font-bold text-gray-300"
        whileHover={{ color: "#ffffff" }}
      >
        {job.company}
      </motion.p>
      <motion.div 
        className={`h-2 ${job.color} rounded-md w-full my-1`}
        whileHover={{ 
          height: "10px",
          transition: { duration: 0.3 }
        }}
        initial={{ width: 0 }}
        animate={isVisible ? { width: "100%" } : { width: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: isVisible ? index * 0.15 + 0.3 : (careerData.length - index - 1) * 0.1 
        }}
      />
      <motion.p 
        className="text-xs text-gray-400"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: isVisible ? index * 0.15 + 0.5 : (careerData.length - index - 1) * 0.1 
        }}
      >
        {job.start} - {job.end}
      </motion.p>
    </motion.div>
  );
};

// Add prop validation
JobItem.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired
};

const Timeline = () => {
  const controls = useAnimation();
  const [visible, setVisible] = useState(false);
  const timelineRef = useRef(null);
  
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

    // Observe the timeline element
    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(timelineRef.current);
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

  // Year markers for the timeline
  const years = [2021, 2022, 2023, 2024, 2025];

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
      ref={timelineRef}
      id="timeline"
      className="border-b border-neutral-800 py-24"
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Title with matching style from Projects/Technologies components */}
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={titleVariants} 
        className="pb-2 w-full text-center"
      >
        <h1 className="my-2 text-center text-4xl">Timeline</h1>
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
        My professional journey and experience in the field of software development.
      </motion.p>
      
      <div className="container mx-auto px-6">
        <div className="relative w-full max-w-5xl flex flex-col gap-6 mx-auto">
          {careerData.map((job, index) => (
            <JobItem 
              key={index} 
              job={job} 
              index={index} 
              isVisible={visible} 
            />
          ))}
        </div>

        {/* Timeline Line */}
        <motion.div 
          className="relative w-full max-w-5xl mt-12 mx-auto"
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: visible ? 0.5 : 0 }}
        >
          <motion.div 
            className="w-full h-1 bg-white"
            initial={{ width: 0 }}
            animate={visible ? { width: "100%" } : { width: 0 }}
            transition={{ 
              duration: 1.5, 
              delay: visible ? 0.2 : 0 
            }}
          />
          <div className="flex justify-between text-sm text-gray-300 mt-2">
            {years.map((year, i) => (
              <motion.span 
                key={i} 
                className="w-1/5 text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={visible ? 
                  { y: 0, opacity: 1 } : 
                  { y: 20, opacity: 0 }
                }
                transition={{ 
                  duration: 0.5, 
                  delay: visible ? i * 0.1 + 1 : (years.length-i-1) * 0.1
                }}
                whileHover={{ 
                  scale: 1.2, 
                  color: "#ffffff",
                  transition: { duration: 0.2 }
                }}
              >
                {year}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Timeline;