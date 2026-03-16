import { useEffect, useRef, lazy, Suspense } from "react";
import { InfoHero } from "../constants";
import { HERO_CONTENT } from "../constants";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import gsap from "gsap";

const HeroCanvas = lazy(() => import("./HeroCanvas"));

const Hero = () => {
  const nameRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // GSAP text reveal for name
    if (nameRef.current) {
      const chars = nameRef.current.querySelectorAll(".hero-char");
      gsap.fromTo(
        chars,
        { opacity: 0, y: 40, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.04,
          duration: 0.8,
          ease: "power3.out",
          delay: 2.5, // After preloader
        }
      );
    }

    // CTA button animation
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)", delay: 3.2 }
      );
    }
  }, []);

  const nameText = "Jennah Imad";

  return (
    <div className="py-4 lg:-mb-20 relative">
      {/* 3D Background */}
      <Suspense fallback={null}>
        <HeroCanvas />
      </Suspense>

      <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-8 lg:gap-0">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:mt-8">
          <motion.img
            src={InfoHero.photo}
            alt="Jennah Imad"
            className="border border-stone-900 rounded-3xl w-48 sm:w-56 md:w-64 lg:w-5/12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            whileHover={{ scale: 1.04, boxShadow: "0px 12px 28px rgba(0,0,0,0.35)" }}
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <motion.div
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.2, delayChildren: 0.3 }
              }
            }}
          >
            {/* Name - GSAP letter-by-letter reveal */}
            <h2
              ref={nameRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-tight"
              style={{ perspective: "600px" }}
            >
              {nameText.split("").map((char, i) => (
                <span
                  key={i}
                  className="hero-char inline-block opacity-0"
                  style={{ display: "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h2>

            {/* Animated role */}
            <motion.div
              className="relative mt-2 mb-4"
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <span className="bg-gradient-to-r from-stone-300 to-stone-500 bg-clip-text text-xl sm:text-2xl md:text-3xl tracking-tight text-transparent">
                <TypeAnimation
                  sequence={[
                    "Software Engineer", 1200,
                    "Full-Stack Web Developer", 1200,
                    "Project Study & Conception", 1200,
                    "Machine Learning", 1200,
                    "Data Scientist & Analyst", 1200
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="my-2 max-w-lg py-4 text-sm sm:text-base md:text-lg leading-relaxed tracking-tight text-stone-400 line-clamp-5 md:line-clamp-none"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
            >
              {HERO_CONTENT}
            </motion.p>

            {/* CTA Button */}
            <a
              ref={ctaRef}
              href={InfoHero.resume}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 mb-10 bg-white rounded-full px-7 py-3 text-sm font-medium text-stone-800 shadow-lg transition-all duration-300 hover:bg-stone-200 active:scale-95 opacity-0"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="flex flex-col items-center mt-8 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-stone-500 rounded-full flex justify-center p-1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <span className="text-stone-500 text-xs mt-2 tracking-widest uppercase">Scroll</span>
      </motion.div>

      {/* Divider */}
      <motion.div
        className="border-b border-neutral-800 w-full mt-6 mb-16"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </div>
  );
};

export default Hero;
