import { useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { PROJECTS_META } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useMagnetic from "../hooks/useMagnetic";

gsap.registerPlugin(ScrollTrigger);

const MagneticButton = ({ children, ...props }) => {
  const ref = useMagnetic(0.2);
  return <a ref={ref} {...props}>{children}</a>;
};

MagneticButton.propTypes = {
  children: PropTypes.node.isRequired,
};

const ProjectCard = ({ project, index, labels }) => {
  const cardRef = useRef(null);
  const badgesRef = useRef([]);
  const imageRef = useRef(null);

  // 3D tilt effect
  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card || window.innerWidth < 768) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 12;
    const rotateX = ((centerY - y) / centerY) * 12;

    gsap.to(card, {
      rotateY,
      rotateX,
      scale: 1.03,
      duration: 0.3,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    if (!cardRef.current) return;

    // Scroll reveal
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 60, scale: 0.8 },
      {
        opacity: 1, y: 0, scale: 1, duration: 0.8,
        delay: index * 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: cardRef.current, start: "top 90%", toggleActions: "play none none none" }
      }
    );

    // Badges bounce-in
    badgesRef.current.forEach((badge, i) => {
      if (badge) {
        gsap.fromTo(badge,
          { opacity: 0, scale: 0 },
          {
            opacity: 1, scale: 1, duration: 0.3,
            delay: index * 0.2 + 0.4 + i * 0.06,
            ease: "back.out(2)",
            scrollTrigger: { trigger: cardRef.current, start: "top 90%", toggleActions: "play none none none" }
          }
        );
      }
    });
  }, [index]);

  const handleCardClick = () => {
    const target = project.previewLink || project.link;
    if (target && target !== "#") window.open(target, '_blank');
  };

  return (
    <div
      ref={cardRef}
      className="flex flex-col p-5 rounded-xl shadow-lg backdrop-blur-lg bg-gray-900 bg-opacity-20 border border-neutral-800 transition-all duration-500 cursor-pointer group"
      style={{ opacity: 0, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      {/* Glow on hover via CSS */}
      <style>{`
        .group:hover {
          border-color: rgba(255,255,255,0.2) !important;
          box-shadow: 0 0 30px rgba(255,255,255,0.08), 0 20px 60px rgba(0,0,0,0.3) !important;
        }
      `}</style>

      {/* Image with overlay */}
      <div className="overflow-hidden rounded-lg mb-4 relative">
        <img
          ref={imageRef}
          src={project.image}
          alt={project.title}
          className="w-full h-44 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-lg" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-300">
        {project.title}
      </h3>

      {/* Description */}
      <ul className="text-gray-400 mb-4 list-disc list-inside space-y-1 text-sm flex-1">
        {project.description.map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ul>

      {/* Technologies - animated badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            ref={(el) => (badgesRef.current[techIndex] = el)}
            className="text-xs px-3 py-1 rounded-md text-gray-300 opacity-0 hover:text-white transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons with magnetic effect */}
      <div className="flex gap-3 mt-auto pt-3 border-t border-neutral-700" onClick={(e) => e.stopPropagation()}>
        {project.link && project.link !== "#" && (
          <MagneticButton
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs bg-neutral-800 hover:bg-neutral-700 text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-200"
          >
            <FaGithub className="text-base" />
            {labels.github}
          </MagneticButton>
        )}
        {project.previewLink && (
          <MagneticButton
            href={project.previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs border border-neutral-600 hover:border-neutral-400 text-gray-300 hover:text-white px-3 py-2 rounded-lg font-medium transition-all duration-200"
          >
            <FaExternalLinkAlt className="text-base" />
            {labels.live}
          </MagneticButton>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
    previewLink: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  labels: PropTypes.shape({
    github: PropTypes.string.isRequired,
    live: PropTypes.string.isRequired,
  }).isRequired,
};

const Projects = () => {
  const { t } = useTranslation();
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const subtitleRef = useRef(null);

  const projectTexts = t("projects.items", { returnObjects: true });
  const projects = Array.isArray(projectTexts)
    ? PROJECTS_META.map((meta, index) => ({ ...meta, ...projectTexts[index] }))
    : PROJECTS_META;

  const labels = {
    github: t("projects.buttons.github"),
    live: t("projects.buttons.live"),
  };

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 80%", toggleActions: "play none none none" }
      }
    );
    gsap.fromTo(lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.8, delay: 0.2, ease: "power2.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 80%", toggleActions: "play none none none" }
      }
    );
    gsap.fromTo(subtitleRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, delay: 0.3, ease: "power2.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 80%", toggleActions: "play none none none" }
      }
    );
  }, []);

  return (
    <div id="projects" className="border-b border-neutral-800 py-24">
      <div ref={titleRef} className="pb-2 w-full text-center" style={{ opacity: 0 }}>
        <h1 className="my-2 text-center text-4xl">{t("projects.title")}</h1>
        <div ref={lineRef} className="h-1 w-24 bg-gray-500 mx-auto mt-2 origin-left" style={{ transform: "scaleX(0)" }} />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <p ref={subtitleRef} className="text-gray-400 text-center mb-10" style={{ opacity: 0 }}>
          {t("projects.subtitle")}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} labels={labels} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
