import { useEffect, useRef } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiSpring, SiMicrosoftsqlserver, SiMysql, SiPostgresql, SiAngular, SiPython, SiJavascript, SiMongodb, SiDotnet, SiPhp, SiGit, SiFigma, SiTailwindcss } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techItems = [
  { icon: SiSpring, color: "text-green-500", name: "Spring" },
  { icon: SiMicrosoftsqlserver, color: "text-red-600", name: "SQL Server" },
  { icon: RiReactjsLine, color: "text-cyan-400", name: "React" },
  { icon: SiAngular, color: "text-red-500", name: "Angular" },
  { icon: SiPython, color: "", name: "Python", custom: true },
  { icon: TbBrandNextjs, color: "", name: "Next.js" },
  { icon: SiMysql, color: "text-blue-700", name: "MySQL" },
  { icon: SiPostgresql, color: "text-cyan-400", name: "PostgreSQL" },
  { icon: SiJavascript, color: "text-yellow-500", name: "JavaScript" },
  { icon: SiMongodb, color: "text-green-600", name: "MongoDB" },
  { icon: SiDotnet, color: "text-purple-500", name: ".NET" },
  { icon: SiPhp, color: "text-indigo-500", name: "PHP" },
  { icon: SiGit, color: "text-orange-500", name: "Git" },
  { icon: SiTailwindcss, color: "text-cyan-400", name: "Tailwind" },
  { icon: SiFigma, color: "text-pink-500", name: "Figma" },
];

const Technologies = () => {
  const sectionRef = useRef(null);
  const iconsRef = useRef([]);
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" }
        }
      );

      // Underline
      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1, duration: 0.8, delay: 0.2, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" }
        }
      );

      // Subtitle
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 12 },
        {
          opacity: 1, y: 0, duration: 0.5, delay: 0.3, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" }
        }
      );

      // Icons stagger
      gsap.fromTo(iconsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none none" },
          onComplete: () => {
            // Add floating class after all icons appeared
            iconsRef.current.forEach((el, i) => {
              if (el) {
                el.classList.add("tech-float");
                el.style.animationDelay = `${i * 0.2}s`;
              }
            });
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="border-b border-neutral-800 py-24">
      <div ref={titleRef} className="pb-2 w-full text-center" style={{ opacity: 0 }}>
        <h1 className="my-2 text-center text-4xl">Technologies</h1>
        <div
          ref={lineRef}
          className="h-1 w-24 bg-gray-500 mx-auto mt-2 origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <p ref={subtitleRef} className="text-gray-400 text-center mb-8" style={{ opacity: 0 }}>
        Here are some of the technologies I&apos;m proficient with and use in my development projects.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {techItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => (iconsRef.current[index] = el)}
            className="tech-card rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center gap-2"
            style={{ opacity: 0 }}
          >
            {item.custom ? (
              <div className="relative w-16 h-16 tech-icon-inner">
                <SiPython className="absolute text-7xl text-blue-500" style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0% 100%)" }} />
                <SiPython className="absolute text-7xl text-yellow-500" style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }} />
              </div>
            ) : (
              <item.icon className={`text-7xl ${item.color} tech-icon-inner`} />
            )}
            <span className="text-xs text-stone-500">{item.name}</span>
          </div>
        ))}
      </div>

      <style>{`
        .tech-card {
          transition: transform 0.3s ease-out, border-color 0.3s ease-out, box-shadow 0.3s ease-out;
        }
        .tech-card:hover {
          transform: translateY(-8px) scale(1.08) !important;
          border-color: rgba(163, 163, 163, 0.5) !important;
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.06);
        }
        .tech-card .tech-icon-inner {
          transition: transform 0.3s ease-out;
        }
        .tech-card:hover .tech-icon-inner {
          transform: scale(1.1);
        }
        .tech-float {
          animation: techBreath 3s ease-in-out infinite;
        }
        @keyframes techBreath {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .tech-float { animation: none !important; }
          .tech-card { transition: none !important; }
        }
      `}</style>
    </div>
  );
};

export default Technologies;
