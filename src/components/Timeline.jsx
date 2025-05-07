import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const careerData = [
  {
    title: "Academic Project - Frontend Web Site",
    company: "EMSI",
    start: 2020,
    end: 2020,
    color: "bg-green-500",
    description: "Developed a basic frontend booking website as part of an academic project.",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Academic Project - Desktop Application",
    company: "EMSI",
    start: 2021,
    end: 2021,
    color: "bg-green-500",
    description: "Built a desktop application for managing the school's IT asset inventory.",
    technologies: ["C#", "ADO.NET", "SQL Server", "Windows Forms"]
  },
  {
    title: "Academic Project - Machine Learning Developer",
    company: "EMSI (Final Year Project)",
    start: 2022,
    end: 2022,
    color: "bg-green-500",
    description: "Built machine learning models to detect student performance patterns and integrated them into a Flask-based web application.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "Flask"]
  },
  {
    title: "Full Stack Web Developer Intern",
    company: "Eurafric Information",
    start: 2023,
    end: 2023,
    color: "bg-blue-200",
    description: "Developed a full stack web application for assessing the DevOps and Agile maturity of development teams, using Spring Boot, Angular, and MySQL, with JWT-based role authentication.",
    technologies: ["Spring Boot", "Angular", "MySQL", "JWT", "REST API"]
  },
  {
    title: "Full Stack Web Developer Intern",
    company: "Munisys",
    start: 2024,
    end: 2024,
    color: "bg-blue-500",
    description: "Led the development of a full stack internal module using React.js and Spring Boot, implementing secure JWT-based authentication and integrating with SQL Server.",
    technologies: ["Spring Boot", "React.js", "SQL Server", "JWT", "REST API"]
  }
];

const JobItem = ({ job, index, isVisible }) => {
  const itemControls = useAnimation();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (isVisible) {
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

  const badgeColor = job.color === 'bg-green-500'
    ? 'bg-green-600'
    : job.color === 'bg-blue-200'
    ? 'bg-blue-300'
    : 'bg-blue-600';

  const titleColor = job.color === 'bg-green-500'
    ? 'text-green-400'
    : job.color === 'bg-blue-200'
    ? 'text-blue-300'
    : 'text-blue-500';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={itemControls}
      className="relative flex flex-col items-start"
      style={{ left: `${(job.start - 2020) * 20}%`, width: `${(job.end - job.start + 1) * 20}%` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.p className="text-sm font-semibold">{job.title}</motion.p>
      <motion.p className="text-sm font-bold text-gray-300">{job.company}</motion.p>
      <motion.div
        className={`h-2 ${job.color} rounded-md w-full my-1`}
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

      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute z-50 top-[-11rem] left-0 border text-white text-sm rounded-lg shadow-lg p-4 w-72 bg-gray-900"
            style={{
              borderColor: 'currentColor'
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className={`font-bold ${titleColor}`}>{job.title}</h3>
            <p className="text-gray-300">{job.company}</p>
            <p className="text-gray-400 text-xs mb-2">
              {job.start} - {job.end}
            </p>
            <p className="text-gray-300 mb-3">{job.description}</p>
            <div className="flex flex-wrap gap-2">
              {job.technologies.map((tech, i) => (
                <span
                  key={i}
                  className={`text-white text-xs px-2 py-1 rounded font-mono ${badgeColor}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

JobItem.propTypes = {
  job: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired
};

const Timeline = () => {
  const controls = useAnimation();
  const [visible, setVisible] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          controls.start("visible");
        } else {
          setVisible(false);
          controls.start("hidden");
        }
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.2 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, [controls]);

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

  const years = [2021, 2022, 2023, 2024, 2025];

  return (
    <motion.div
      ref={timelineRef}
      id="timeline"
      className="border-b border-neutral-800 py-24"
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        className="pb-2 w-full text-center"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="my-2 text-center text-4xl">Timeline</h1>
        <div className="h-1 w-24 bg-gray-500 mx-auto mt-2" />
      </motion.div>

      <motion.p
        className="text-gray-400 text-center mb-8"
        initial={{ opacity: 0, y: 15 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        My professional journey and experience in the field of software development.
      </motion.p>

      <div className="container mx-auto px-6">
        <div className="relative w-full max-w-5xl flex flex-col gap-6 mx-auto">
          {careerData.map((job, index) => (
            <JobItem key={index} job={job} index={index} isVisible={visible} />
          ))}
        </div>

        <motion.div
          className="relative w-full max-w-5xl mt-12 mx-auto"
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="w-full h-1 bg-white"
            initial={{ width: 0 }}
            animate={visible ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          />
          <div className="flex justify-between text-sm text-gray-300 mt-2">
            {years.map((year, i) => (
              <motion.span
                key={i}
                className="w-1/5 text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={visible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 + 1 }}
                whileHover={{
                  scale: 1.2,
                  color: "#CBD5E0",
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
