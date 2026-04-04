import { useEffect, useRef } from "react";
import { useTranslation, Trans } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { t } = useTranslation();
  const aboutRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: aboutRef.current, start: "top 80%", toggleActions: "play none none none" }
        }
      );
      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, delay: 0.2, ease: "power2.out",
          scrollTrigger: { trigger: aboutRef.current, start: "top 80%", toggleActions: "play none none none" }
        }
      );
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.3, ease: "power2.out",
          scrollTrigger: { trigger: aboutRef.current, start: "top 80%", toggleActions: "play none none none" }
        }
      );

      // Cards staggered reveal
      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(card,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6, delay: i * 0.1, ease: "power2.out",
              scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none none" }
            }
          );
        }
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  const components = {
    highlight: <span className="text-black bg-white px-1 rounded font-semibold" />,
    emsiLink: <a href="https://emsi.ma/" target="_blank" rel="noopener noreferrer" className="inline-block" />,
    emsi: <span className="text-[#008D36] bg-white px-1 rounded font-semibold" />,
    munisysLink: <a href="https://www.munisys.net.ma/" target="_blank" rel="noopener noreferrer" className="inline-block" />,
    munisys: <span className="text-[#25658F] bg-white px-1 rounded font-semibold" />,
    eurafricLink: <a href="https://www.eurafric-information.com/" target="_blank" rel="noopener noreferrer" className="inline-block" />,
    eurafric: <span className="text-[#00406E] bg-white px-1 rounded font-semibold" />,
    spring: <span className="bg-[#6DB33F]/20 text-white px-1 rounded" />,
    react: <span className="bg-[#61DAFB]/20 text-white px-1 rounded" />,
    ant: <span className="bg-[#0170FE]/20 text-white px-1 rounded" />,
    sqlServer: <span className="bg-[#CC2927]/20 text-white px-1 rounded" />,
    angular: <span className="bg-[#DD0031]/20 text-white px-1 rounded" />,
    bootstrap: <span className="bg-[#7952B3]/20 text-white px-1 rounded" />,
    mysql: <span className="bg-[#4479A1]/20 text-white px-1 rounded" />,
    cnn: <span className="bg-[#FF6F00]/20 text-white px-1 rounded" />,
    flutter: <span className="bg-[#61DAFB]/20 text-white px-1 rounded" />,
    python: <span className="bg-[#3776AB]/20 text-white px-1 rounded" />,
    cpp: <span className="bg-[#00599C]/20 text-white px-1 rounded" />,
    csharp: <span className="bg-[#239120]/20 text-white px-1 rounded" />,
    java: <span className="bg-[#ED8B00]/20 text-white px-1 rounded" />,
    django: <span className="bg-[#092E20]/20 text-white px-1 rounded" />,
    flask: <span className="bg-[#000000]/20 text-white px-1 rounded" />,
    tensorflow: <span className="bg-[#FF6F00]/20 text-white px-1 rounded" />,
    javascript: <span className="bg-[#F7DF1E]/20 text-white px-1 rounded" />,
    node: <span className="bg-[#339933]/20 text-white px-1 rounded" />,
    sql: <span className="bg-[#CC2927]/20 text-white px-1 rounded" />,
    plsql: <span className="bg-[#F80000]/20 text-white px-1 rounded" />,
    nosql: <span className="bg-[#4DB33D]/20 text-white px-1 rounded" />,
    postgres: <span className="bg-[#336791]/20 text-white px-1 rounded" />,
    mongo: <span className="bg-[#47A248]/20 text-white px-1 rounded" />,
  };

  const sections = [
    <p className="text-gray-200">
      <Trans i18nKey="about.sections.0" components={components} />
    </p>,
    <p className="text-gray-200">
      <Trans i18nKey="about.sections.1" components={components} />
    </p>,
    <p className="text-gray-200">
      <Trans i18nKey="about.sections.2" components={components} />
    </p>,
    <p className="text-gray-200">
      <Trans i18nKey="about.sections.3" components={components} />
    </p>,
    <p className="text-gray-200">
      <Trans i18nKey="about.sections.4" components={components} />
    </p>,
    <p className="text-gray-200">
      <Trans i18nKey="about.sections.5" components={components} />
    </p>,
    <p className="text-gray-200">
      <Trans i18nKey="about.sections.6" components={components} />
    </p>,
    <p className="text-gray-200">
      <Trans i18nKey="about.sections.7" components={components} />
    </p>,
  ];

  return (
    <div
      ref={aboutRef}
      className="border-b border-neutral-800 py-24"
      id="about"
    >
      <div ref={titleRef} className="pb-2 w-full text-center" style={{ opacity: 0 }}>
        <h1 className="my-2 text-center text-4xl">{t("about.title")}</h1>
        <div ref={lineRef} className="h-1 w-24 bg-gray-500 mx-auto mt-2 origin-left" style={{ transform: "scaleX(0)" }} />
      </div>

      <p ref={subtitleRef} className="text-gray-400 text-center mb-8" style={{ opacity: 0 }}>
        {t("about.subtitle")}
      </p>

      <div className="max-w-4xl mx-auto px-4 mt-10">
        <div className="code-like-content text-base leading-relaxed space-y-8">
          {sections.map((content, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="p-6 rounded-lg border border-neutral-700 bg-neutral-900/40 backdrop-blur-sm shadow-lg hover:scale-[1.01] transition-transform duration-200"
              style={{ opacity: 0 }}
            >
              {content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

