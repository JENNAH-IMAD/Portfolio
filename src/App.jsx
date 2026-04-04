import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Experiences from "./components/Experiences";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Marquee from "./components/Marquee";
import useSmoothScroll from "./hooks/useSmoothScroll";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t, i18n } = useTranslation();
  useSmoothScroll();

  useEffect(() => {
    const lang = i18n.resolvedLanguage || i18n.language || "fr";
    document.documentElement.lang = lang;

    const setMeta = (attr, attrValue, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attr}="${attrValue}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    document.title = t("meta.title");
    setMeta("name", "description", t("meta.description"));
    setMeta("property", "og:title", t("meta.ogTitle"));
    setMeta("property", "og:description", t("meta.ogDescription"));
  }, [i18n.language, t]);

  const marqueePrimary = t("marquee.primary", { returnObjects: true });
  const marqueeSecondary = t("marquee.secondary", { returnObjects: true });
  const marqueePrimaryItems = Array.isArray(marqueePrimary) ? marqueePrimary : [];
  const marqueeSecondaryItems = Array.isArray(marqueeSecondary) ? marqueeSecondary : [];

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <CustomCursor />
      <div className="overflow-x-hidden text-stone-300 antialiased">
        <div className="fixed inset-0 -z-10">
          <div className="relative h-full w-full bg-black">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
          </div>
        </div>

        <Navbar />

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-24">
          <section id="hero">
            <Hero />
          </section>

          <Marquee items={marqueePrimaryItems} />

          <section id="about">
            <About />
          </section>

          <section id="technologies">
            <Technologies />
          </section>

          <section id="timeline">
            <Timeline />
          </section>

          <section id="experiences">
            <Experiences />
          </section>

          <Marquee items={marqueeSecondaryItems} reverse />

          <section id="projects">
            <Projects />
          </section>

          <section id="certification">
            <Certification />
          </section>

          <section id="contact">
            <Contact />
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
