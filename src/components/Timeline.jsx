import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const careerData = [
  {
    title: "Academic Project - Frontend Web Site",
    company: "EMSI",
    start: 2020, end: 2020,
    color: "bg-green-700", borderColor: "border-green-700", textColor: "text-green-400",
    description: "Developed a basic frontend booking website as part of an academic project.",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Academic Project - Desktop Application",
    company: "EMSI",
    start: 2021, end: 2021,
    color: "bg-green-700", borderColor: "border-green-700", textColor: "text-green-400",
    description: "Built a desktop application for managing the school's IT asset inventory.",
    technologies: ["C#", "ADO.NET", "SQL Server", "Windows Forms"]
  },
  {
    title: "Academic Project - Machine Learning Developer",
    company: "EMSI (Final Year Project)",
    start: 2022, end: 2022,
    color: "bg-green-700", borderColor: "border-green-700", textColor: "text-green-400",
    description: "Built machine learning models to detect student performance patterns and integrated them into a Flask-based web application.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "Flask"]
  },
  {
    title: "Full Stack Web Developer Intern",
    company: "Eurafric Information",
    start: 2023, end: 2023,
    color: "bg-blue-600", borderColor: "border-blue-500", textColor: "text-blue-400",
    description: "Developed a full stack web application for assessing the DevOps and Agile maturity of development teams, using Spring Boot, Angular, and MySQL, with JWT-based role authentication.",
    technologies: ["Spring Boot", "Angular", "MySQL", "JWT", "REST API"]
  },
  {
    title: "Full Stack Web Developer Intern",
    company: "Munisys",
    start: 2024, end: 2024,
    color: "bg-blue-400", borderColor: "border-blue-300", textColor: "text-blue-300",
    description: "Led the development of a full stack internal module using React.js and Spring Boot, implementing secure JWT-based authentication and integrating with SQL Server.",
    technologies: ["Spring Boot", "React.js", "SQL Server", "JWT", "REST API"]
  },
  {
    title: "Freelance Full Stack Web Developer",
    company: "Remote",
    start: 2025, end: 2025,
    color: "bg-purple-500", borderColor: "border-purple-400", textColor: "text-purple-400",
    description: "Designed and deployed a full stack web application for managing meeting room reservations, using ASP.NET Core Web API, React.js, Tailwind CSS, and PostgreSQL, deployed on Azure/AWS.",
    technologies: ["ASP.NET Core", "React.js", "Tailwind CSS", "PostgreSQL", "Azure/AWS"]
  }
];

/* ── Vertical card (mobile / tablet) ── */
const VerticalJobItem = ({ job, index }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    if (itemRef.current) {
      gsap.fromTo(itemRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 0.6, ease: "power2.out",
          delay: index * 0.15,
          scrollTrigger: { trigger: itemRef.current, start: "top 88%", toggleActions: "play none none none" }
        }
      );
    }
  }, [index]);

  return (
    <div ref={itemRef} className="relative flex gap-4 opacity-0">
      <div className="flex flex-col items-center">
        <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${job.color}`} />
        {index < careerData.length - 1 && (
          <div className="w-0.5 bg-neutral-700 flex-1 mt-1" />
        )}
      </div>
      <div className={`mb-8 pb-2 border-l-2 ${job.borderColor} pl-4 flex-1`}>
        <p className={`text-xs font-bold mb-0.5 ${job.textColor}`}>
          {job.start}{job.end !== job.start ? ` – ${job.end}` : ""}
        </p>
        <h3 className="text-sm font-semibold text-white leading-snug">{job.title}</h3>
        <p className="text-xs text-gray-400 mb-2">{job.company}</p>
        <p className="text-xs text-gray-300 mb-3 leading-relaxed">{job.description}</p>
        <div className="flex flex-wrap gap-1">
          {job.technologies.map((tech, i) => (
            <span key={i} className={`text-white text-xs px-2 py-0.5 rounded font-mono ${job.color}`}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

VerticalJobItem.propTypes = {
  job: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

/* ── Horizontal bar item (desktop) ── */
const HorizontalJobItem = ({ job, index }) => {
  const [hovered, setHovered] = useState(false);
  const itemRef = useRef(null);
  const barRef = useRef(null);

  const YEAR_START = 2020;
  const SLOT_WIDTH = 16.66;
  const left = (job.start - YEAR_START) * SLOT_WIDTH;
  const width = (job.end - job.start + 1) * SLOT_WIDTH;

  useEffect(() => {
    if (itemRef.current) {
      gsap.fromTo(itemRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          delay: index * 0.15,
          scrollTrigger: { trigger: itemRef.current, start: "top 90%", toggleActions: "play none none none" }
        }
      );
    }
    // Animate progress bar
    if (barRef.current) {
      gsap.fromTo(barRef.current,
        { scaleX: 0 },
        {
          scaleX: 1, duration: 0.8, ease: "power2.out",
          delay: index * 0.15 + 0.3,
          scrollTrigger: { trigger: itemRef.current, start: "top 90%", toggleActions: "play none none none" }
        }
      );
    }
  }, [index]);

  return (
    <div
      ref={itemRef}
      className="relative flex flex-col items-start opacity-0"
      style={{ left: `${left}%`, width: `${width}%` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className="text-[13px] font-semibold w-full" style={{ whiteSpace: "nowrap", overflow: "visible" }}>{job.title}</p>
      <p className="text-[13px] font-bold text-gray-300 w-full" style={{ whiteSpace: "nowrap", overflow: "visible" }}>{job.company}</p>
      <div
        ref={barRef}
        className={`h-2 ${job.color} rounded-md w-full my-1 origin-left`}
        style={{ transform: "scaleX(0)" }}
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
                <span key={i} className={`text-white text-xs px-2 py-0.5 rounded font-mono ${job.color}`}>{tech}</span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

HorizontalJobItem.propTypes = {
  job: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

/* ── Main Timeline ── */
const Timeline = () => {
  const timelineRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const subtitleRef = useRef(null);
  const yearAxisRef = useRef(null);
  const yearsRef = useRef([]);

  const years = [2020, 2021, 2022, 2023, 2024, 2025];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: timelineRef.current, start: "top 80%", toggleActions: "play none none none" }
        }
      );
      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, delay: 0.2, ease: "power2.out",
          scrollTrigger: { trigger: timelineRef.current, start: "top 80%", toggleActions: "play none none none" }
        }
      );
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.3, ease: "power2.out",
          scrollTrigger: { trigger: timelineRef.current, start: "top 80%", toggleActions: "play none none none" }
        }
      );

      // Year axis line
      if (yearAxisRef.current) {
        gsap.fromTo(yearAxisRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 1.5, ease: "power2.out", delay: 0.8,
            scrollTrigger: { trigger: timelineRef.current, start: "top 60%", toggleActions: "play none none none" }
          }
        );
      }
      // Year labels
      yearsRef.current.forEach((el, i) => {
        if (el) {
          gsap.fromTo(el,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, delay: i * 0.1 + 1,
              scrollTrigger: { trigger: timelineRef.current, start: "top 60%", toggleActions: "play none none none" }
            }
          );
        }
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={timelineRef} id="timeline" className="border-b border-neutral-800 py-24">
      <div ref={titleRef} className="pb-2 w-full text-center" style={{ opacity: 0 }}>
        <h1 className="my-2 text-center text-4xl">Timeline</h1>
        <div ref={lineRef} className="h-1 w-24 bg-gray-500 mx-auto mt-2 origin-left" style={{ transform: "scaleX(0)" }} />
      </div>

      <p ref={subtitleRef} className="text-gray-400 text-center mb-10" style={{ opacity: 0 }}>
        My professional journey and experience in the field of software development.
      </p>

      <div className="container mx-auto px-4 md:px-6">
        {/* Mobile / Tablet: vertical layout */}
        <div className="block xl:hidden max-w-lg mx-auto">
          {careerData.map((job, index) => (
            <VerticalJobItem key={index} job={job} index={index} />
          ))}
        </div>

        {/* Desktop: horizontal bar chart */}
        <div className="hidden xl:block">
          <div className="relative w-full max-w-5xl flex flex-col gap-6 mx-auto">
            {careerData.map((job, index) => (
              <HorizontalJobItem key={index} job={job} index={index} />
            ))}
          </div>

          {/* Year axis */}
          <div className="relative w-full max-w-5xl mt-12 mx-auto">
            <div
              ref={yearAxisRef}
              className="w-full h-0.5 bg-white origin-left"
              style={{ transform: "scaleX(0)" }}
            />
            <div className="flex justify-between text-sm text-gray-300 mt-2">
              {years.map((year, i) => (
                <span
                  key={i}
                  ref={(el) => (yearsRef.current[i] = el)}
                  className="w-1/6 text-center opacity-0"
                >
                  {year}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
