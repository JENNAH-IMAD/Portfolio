import { useEffect, useRef } from "react";
import { EXPERIENCES, SKILLS } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experiences = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);
  const skillsPanelRef = useRef(null);
  const categoriesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" }
        }
      );
      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, delay: 0.2, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" }
        }
      );
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.3, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" }
        }
      );

      // Experience cards — slide from left
      cardsRef.current.forEach((card) => {
        if (!card) return;
        const borderEl = card.querySelector(".exp-border-line");
        const badges = card.querySelectorAll(".exp-badge");

        gsap.fromTo(card,
          { opacity: 0, x: -60 },
          { opacity: 1, x: 0, duration: 0.7, ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" }
          }
        );

        if (borderEl) {
          gsap.fromTo(borderEl,
            { scaleY: 0 },
            { scaleY: 1, duration: 0.5, delay: 0.3, ease: "power2.out",
              scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" }
            }
          );
        }

        if (badges.length) {
          gsap.fromTo(badges,
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.3, stagger: 0.06, delay: 0.4, ease: "back.out(2)",
              scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" }
            }
          );
        }
      });

      // Skills panel — slide from right
      if (skillsPanelRef.current) {
        gsap.fromTo(skillsPanelRef.current,
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power2.out",
            scrollTrigger: { trigger: skillsPanelRef.current, start: "top 80%", toggleActions: "play none none none" }
          }
        );
      }

      // Skill categories stagger
      categoriesRef.current.forEach((cat, i) => {
        if (!cat) return;
        const badges = cat.querySelectorAll(".skill-badge");

        gsap.fromTo(cat,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, delay: 0.2 + i * 0.12, ease: "power2.out",
            scrollTrigger: { trigger: skillsPanelRef.current, start: "top 80%", toggleActions: "play none none none" }
          }
        );

        if (badges.length) {
          gsap.fromTo(badges,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.25, stagger: 0.03, delay: 0.4 + i * 0.12, ease: "power2.out",
              scrollTrigger: { trigger: skillsPanelRef.current, start: "top 80%", toggleActions: "play none none none" }
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillEntries = Object.entries(SKILLS);

  return (
    <div ref={sectionRef} id="experiences" className="border-b border-neutral-800 py-24">
      {/* Title */}
      <div ref={titleRef} className="pb-2 w-full text-center" style={{ opacity: 0 }}>
        <h1 className="my-2 text-center text-4xl">Experience</h1>
        <div ref={lineRef} className="h-1 w-24 bg-gray-500 mx-auto mt-2 origin-left" style={{ transform: "scaleX(0)" }} />
      </div>
      <p ref={subtitleRef} className="text-gray-400 text-center mb-12 container mx-auto px-6" style={{ opacity: 0 }}>
        My professional journey and the roles that shaped my expertise in software development.
      </p>

      {/* 2-column layout */}
      <div className="container mx-auto px-6">
        <div className="exp-grid">
          {/* Left — Experience cards */}
          <div className="exp-left">
            {EXPERIENCES.map((exp, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="exp-card group"
                style={{ opacity: 0 }}
              >
                <div className="exp-border-line" />
                <div className="exp-card-inner">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <h2 className="text-lg font-bold text-white leading-snug">{exp.role}</h2>
                    <span className="exp-date shrink-0">{exp.year}</span>
                  </div>
                  <p className="exp-company">{exp.company}</p>
                  <div className="mt-3 mb-4">
                    {Array.isArray(exp.description)
                      ? exp.description.map((line, j) => (
                          <p key={j} className="exp-desc">{line}</p>
                        ))
                      : <p className="exp-desc">{exp.description}</p>
                    }
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, j) => (
                      <span key={j} className="exp-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Skills panel (sticky) */}
          <div className="exp-right">
            <div
              ref={skillsPanelRef}
              className="exp-skills-panel"
              style={{ opacity: 0 }}
            >
              <h3 className="exp-skills-title">Skills</h3>

              <div className="exp-skills-list">
                {skillEntries.map(([category, skills], i) => (
                  <div
                    key={category}
                    ref={(el) => (categoriesRef.current[i] = el)}
                    className="exp-skill-category"
                    style={{ opacity: 0 }}
                  >
                    <p className="exp-cat-label">
                      <span className="exp-cat-slash">//</span> {category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, j) => (
                        <span key={j} className="skill-badge">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Grid ── */
        .exp-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        @media (min-width: 1024px) {
          .exp-grid {
            grid-template-columns: 3fr 2fr;
            gap: 48px;
          }
        }

        /* ── Left column ── */
        .exp-left {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* ── Card ── */
        .exp-card {
          position: relative;
          padding-left: 20px;
          transition: transform 0.3s ease-out;
        }
        .exp-card:hover {
          transform: translateY(-4px);
        }
        .exp-border-line {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: #555;
          border-radius: 2px;
          transform-origin: top;
          transition: background 0.3s ease-out;
        }
        .exp-card:hover .exp-border-line {
          background: #999;
        }
        .exp-card-inner {
          background: rgba(23, 23, 23, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          padding: 20px 22px;
          transition: box-shadow 0.3s ease-out, border-color 0.3s ease-out;
        }
        .exp-card:hover .exp-card-inner {
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.1);
        }
        .exp-date {
          font-size: 13px;
          color: #777;
          white-space: nowrap;
        }
        .exp-company {
          font-size: 14px;
          color: #888;
        }
        .exp-desc {
          font-size: 14px;
          color: #aaa;
          line-height: 1.7;
        }
        .exp-badge {
          font-size: 12px;
          padding: 4px 12px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.06);
          color: #ccc;
          transition: transform 0.2s ease-out, background 0.2s ease-out;
        }
        .exp-badge:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
        }

        /* ── Right column ── */
        .exp-right {
          position: relative;
        }
        @media (min-width: 1024px) {
          .exp-right {
            position: sticky;
            top: 100px;
            align-self: start;
          }
        }

        /* ── Skills panel ── */
        .exp-skills-panel {
          background: rgba(23, 23, 23, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 24px 26px;
        }
        .exp-skills-title {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 22px;
        }
        .exp-skills-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .exp-cat-label {
          font-size: 13px;
          font-weight: 600;
          color: #aaa;
          margin-bottom: 8px;
          font-family: "JetBrains Mono", "Fira Code", "Consolas", monospace;
        }
        .exp-cat-slash {
          color: #666;
        }
        .skill-badge {
          font-size: 12px;
          padding: 5px 14px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.08);
          color: #ccc;
          transition: transform 0.2s ease-out, background 0.2s ease-out;
        }
        .skill-badge:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.15);
          color: #fff;
        }

        /* ── Mobile badges ── */
        @media (max-width: 767px) {
          .skill-badge {
            font-size: 11px;
            padding: 4px 10px;
          }
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .exp-card, .exp-card-inner, .exp-border-line,
          .exp-badge, .skill-badge { transition: none !important; }
        }
      `}</style>
    </div>
  );
};

export default Experiences;
