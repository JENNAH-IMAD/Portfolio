import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const careerData = [
  {
    title: "Academic Project - Frontend Web Site",
    company: "EMSI",
    start: 2020,
    end: 2020,
    color: "bg-green-700",
    borderColor: "border-green-700",
    textColor: "text-green-400",
    description: "Developed a basic frontend booking website as part of an academic project.",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Academic Project - Desktop Application",
    company: "EMSI",
    start: 2021,
    end: 2021,
    color: "bg-green-700",
    borderColor: "border-green-700",
    textColor: "text-green-400",
    description: "Built a desktop application for managing the school's IT asset inventory.",
    technologies: ["C#", "ADO.NET", "SQL Server", "Windows Forms"]
  },
  {
    title: "Academic Project - Machine Learning Developer",
    company: "EMSI (Final Year Project)",
    start: 2022,
    end: 2022,
    color: "bg-green-700",
    borderColor: "border-green-700",
    textColor: "text-green-400",
    description: "Built machine learning models to detect student performance patterns and integrated them into a Flask-based web application.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "Flask"]
  },
  {
    title: "Full Stack Web Developer Intern",
    company: "Eurafric Information",
    start: 2023,
    end: 2023,
    color: "bg-blue-600",
    borderColor: "border-blue-500",
    textColor: "text-blue-400",
    description: "Developed a full stack web application for assessing the DevOps and Agile maturity of development teams, using Spring Boot, Angular, and MySQL, with JWT-based role authentication.",
    technologies: ["Spring Boot", "Angular", "MySQL", "JWT", "REST API"]
  },
  {
    title: "Full Stack Web Developer Intern",
    company: "Munisys",
    start: 2024,
    end: 2024,
    color: "bg-blue-400",
    borderColor: "border-blue-300",
    textColor: "text-blue-300",
    description: "Led the development of a full stack internal module using React.js and Spring Boot, implementing secure JWT-based authentication and integrating with SQL Server.",
    technologies: ["Spring Boot", "React.js", "SQL Server", "JWT", "REST API"]
  }
];

/* ── Vertical card (mobile / tablet) ── */
const VerticalJobItem = ({ job, index, isVisible }) => {
  const itemControls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        itemControls.start({ opacity: 1, x: 0, transition: { duration: 0.6, type: "spring", stiffness: 80 } });
      }, index * 150);
    } else {
      itemControls.start({ opacity: 0, x: -40, transition: { duration: 0.4 } });
    }
  }, [isVisible, index, itemControls]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={itemControls}
      className="relative flex gap-4"
    >
      {/* Timeline dot + line */}
      <div className="flex flex-col items-center">
        <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${job.color}`} />
        {index < careerData.length - 1 && (
          <div className="w-0.5 bg-neutral-700 flex-1 mt-1" />
        )}
      </div>

      {/* Card */}
      <div className={`mb-8 pb-2 border-l-2 ${job.borderColor} pl-4 flex-1`}>
        <p className={`text-xs font-bold mb-0.5 ${job.textColor}`}>
          {job.start}{job.end !== job.start ? ` – ${job.end}` : ""}
        </p>
        <h3 className="text-sm font-semibold text-white leading-snug">{job.title}</h3>
        <p className="text-xs text-gray-400 mb-2">{job.company}</p>
        <p className="text-xs text-gray-300 mb-3 leading-relaxed">{job.description}</p>
        <div className="flex flex-wrap gap-1">
          {job.technologies.map((tech, i) => (
            <span key={i} className={`text-white text-xs px-2 py-0.5 rounded font-mono ${job.color}`}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

VerticalJobItem.propTypes = {
  job: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

/* ── Horizontal bar item (desktop) ── */
const HorizontalJobItem = ({ job, index, isVisible }) => {
  const itemControls = useAnimation();
  const [hovered, setHovered] = useState(false);

  const YEAR_START = 2020;
  const SLOT_WIDTH = 20;
  const left = (job.start - YEAR_START) * SLOT_WIDTH;
  const width = (job.end - job.start + 1) * SLOT_WIDTH;

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        itemControls.start({ opacity: 1, y: 0, transition: { duration: 0.7, type: "spring", stiffness: 100 } });
      }, index * 150);
    } else {
      itemControls.start({ opacity: 0, y: 30, transition: { duration: 0.5 } });
    }
  }, [isVisible, index, itemControls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={itemControls}
      className="relative flex flex-col items-start"
      style={{ left: `${left}%`, width: `${width}%` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className="text-sm font-semibold truncate w-full">{job.title}</p>
      <p className="text-sm font-bold text-gray-300 truncate w-full">{job.company}</p>
      <motion.div
        className={`h-2 ${job.color} rounded-md w-full my-1`}
        initial={{ width: 0 }}
        animate={isVisible ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 0.8, delay: isVisible ? index * 0.15 + 0.3 : 0 }}
      />
      <p className="text-xs text-gray-400">
        {job.start}{job.end !== job.start ? ` – ${job.end}` : ""}
      </p>

      <AnimatePresence>
        {hovered && (
          <motion.div
            className={`absolute z-50 bottom-full mb-2 left-0 border text-white text-sm rounded-lg shadow-xl p-4 w-72 bg-gray-900 ${job.borderColor}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className={`font-bold text-sm mb-0.5 ${job.textColor}`}>{job.title}</h3>
            <p className="text-gray-300 text-xs">{job.company}</p>
            <p className="text-gray-400 text-xs mb-2">
              {job.start}{job.end !== job.start ? ` – ${job.end}` : ""}
            </p>
            <p className="text-gray-300 text-xs mb-3 leading-relaxed">{job.description}</p>
            <div className="flex flex-wrap gap-1">
              {job.technologies.map((tech, i) => (
                <span key={i} className={`text-white text-xs px-2 py-0.5 rounded font-mono ${job.color}`}>
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

HorizontalJobItem.propTypes = {
  job: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

/* ── Main Timeline ── */
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
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );

    const ref = timelineRef.current;
    if (ref) observer.observe(ref);
    return () => { if (ref) observer.unobserve(ref); };
  }, [controls]);

  const containerVariants = {
    visible: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.1, duration: 0.6 } },
    hidden: { opacity: 0, y: 50, transition: { when: "afterChildren", staggerChildren: 0.05, staggerDirection: -1, duration: 0.4 } }
  };

  const years = [2020, 2021, 2022, 2023, 2024];

  return (
    <motion.div
      ref={timelineRef}
      id="timeline"
      className="border-b border-neutral-800 py-20"
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Header */}
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
        className="text-gray-400 text-center mb-10"
        initial={{ opacity: 0, y: 15 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        My professional journey and experience in the field of software development.
      </motion.p>

      <div className="container mx-auto px-4 md:px-6">

        {/* ── Mobile / Tablet: vertical layout (hidden on xl+) ── */}
        <div className="block xl:hidden max-w-lg mx-auto">
          {careerData.map((job, index) => (
            <VerticalJobItem key={index} job={job} index={index} isVisible={visible} />
          ))}
        </div>

        {/* ── Desktop: horizontal bar chart (hidden below xl) ── */}
        <div className="hidden xl:block">
          <div className="relative w-full max-w-5xl flex flex-col gap-6 mx-auto">
            {careerData.map((job, index) => (
              <HorizontalJobItem key={index} job={job} index={index} isVisible={visible} />
            ))}
          </div>

          {/* Year axis */}
          <motion.div
            className="relative w-full max-w-5xl mt-12 mx-auto"
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="w-full h-0.5 bg-white"
              initial={{ scaleX: 0, originX: 0 }}
              animate={visible ? { scaleX: 1 } : { scaleX: 0 }}
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
                  whileHover={{ scale: 1.2, color: "#CBD5E0", transition: { duration: 0.2 } }}
                >
                  {year}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
};

export default Timeline;
