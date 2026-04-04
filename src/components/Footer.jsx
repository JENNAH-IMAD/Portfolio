import { useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";
import { InfoHero } from "../constants";
import useMagnetic from "../hooks/useMagnetic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MagneticLink = ({ href, children, ...props }) => {
  const ref = useMagnetic(0.3);
  return <a ref={ref} href={href} {...props}>{children}</a>;
};

const Footer = () => {
  const { t } = useTranslation();
  const footerRef = useRef(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(footerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: footerRef.current, start: "top 95%", toggleActions: "play none none reverse" }
        }
      );
    }
  }, []);

  return (
    <footer ref={footerRef} className="bg-transparent py-8 px-4 relative opacity-0">
      {/* Glow decorative */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at center bottom, rgba(255,255,255,0.03) 0%, transparent 70%)"
      }} />

      <div className="container mx-auto flex flex-wrap justify-between items-start relative z-10">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <img src={InfoHero.logo} alt="Logo" className="h-10" />
        </div>

        {/* Credits */}
        <div className="text-right">
          <h3 className="text-white text-sm font-bold uppercase mb-4">{t("footer.credits")}</h3>
          <MagneticLink
            href="https://stormix.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-400 hover:text-white transition-colors duration-300 mb-2"
          >
            Anas Mazouni
          </MagneticLink>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto mt-12 text-center text-gray-500 text-sm relative z-10">
        {t("footer.copyright", { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
};

export default Footer;
