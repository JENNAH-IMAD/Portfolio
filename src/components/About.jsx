import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const About = () => {
  const controls = useAnimation();
  const aboutRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const currentRef = aboutRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          setVisible(true);
          controls.start("visible");
        } else {
          setVisible(false);
          controls.start("hidden");
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.2,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
        duration: 0.6,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
        duration: 0.4,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const pageVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      ref={aboutRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="border-b border-neutral-800 py-24"
      id="about"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        className="pb-2 w-full text-center"
      >
        <h1 className="my-2 text-center text-4xl">About me</h1>
        <motion.div
          className="h-1 w-24 bg-gray-500 mx-auto mt-2"
          initial={{ width: 0 }}
          animate={visible ? { width: "6rem" } : { width: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.3,
          }}
        />
      </motion.div>

      <motion.p
        className="text-gray-400 text-center mb-8"
        initial={{ opacity: 0, y: 15 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{
          duration: 0.6,
          delay: 0.15,
          ease: "easeOut",
        }}
      >
        Computer Engineering and Networks specialist, with a focus on MIAGE (IT
        Methods Applied to Business Management)
      </motion.p>

      <div className="max-w-4xl mx-auto px-4 mt-10">
        <motion.div
          className="code-like-content text-base leading-relaxed space-y-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
              },
            },
          }}
        >
          <motion.div 
            className="p-6 rounded-lg border border-neutral-700 bg-neutral-900/40 backdrop-blur-sm shadow-lg"
            variants={textVariants}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <p className="text-gray-200">
              I&apos;m an{" "}
              <span className="text-black bg-white px-1 rounded font-semibold">Computer and Network Engineer</span>, 
              specializing in MIAGE (IT Methods Applied to Business Management). My profile 
              combines <span className="text-black bg-white px-1 rounded font-semibold">technical expertise</span> with a strategic business-oriented vision.
            </p>
          </motion.div>

          <motion.div 
            className="p-6 rounded-lg border border-neutral-700 bg-neutral-900/40 backdrop-blur-sm shadow-lg"
            variants={textVariants}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <p className="text-gray-200">
              My journey began at{" "}
              <motion.a
                href="https://emsi.ma/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block relative"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-[#008D36] bg-white px-1 rounded font-semibold bg-white px-1 rounded font-semibold relative z-10  font-medium px-1">
                  École Marocaine Des Sciences de L&apos;ingénierie (EMSI)
                </span>
                <motion.span 
                  className="absolute inset-0 bg-gray-700/30 rounded"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>{" "}
              in Casablanca, where I pursued my engineering degree from 2019 to 2024. Prior to that, I completed 
              two preparatory years and obtained my{" "}
              <span className="text-black bg-white px-1 rounded font-semibold">Baccalauréat in Physical Sciences</span> from Institut MAJORELLE.
            </p>
          </motion.div>

          <motion.div 
            className="p-6 rounded-lg border border-neutral-700 bg-neutral-900/40 backdrop-blur-sm shadow-lg"
            variants={textVariants}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <p className="text-gray-200">
              During my academic journey, I&apos;ve developed a{" "}
              <span className="text-black bg-white px-1 rounded font-semibold">versatile skill set</span> spanning from 
              software development to data science and machine learning. This diversity allows me to approach 
              IT challenges from various perspectives, combining{" "}
              <span className="text-black bg-white px-1 rounded font-semibold">technical understanding</span> with 
              business management vision.
            </p>
          </motion.div>

          <motion.div 
            className="p-6 rounded-lg border border-neutral-700 bg-neutral-900/40 backdrop-blur-sm shadow-lg"
            variants={textVariants}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <p className="text-gray-200">
              Most recently, I completed an internship at{" "}
              <motion.a
                href="https://www.munisys.net.ma/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block relative"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-[#25658F] bg-white px-1 rounded font-semibold relative z-10  font-medium px-1">
                  MUNISYS
                </span>
                <motion.span 
                  className="absolute inset-0 bg-gray-700/30 rounded"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>{" "}
              (March to September 2024), where I designed and developed a module for managing IT equipment requests, using{" "}
              <span className="bg-[#6DB33F]/20 text-white px-1 rounded">Spring</span>, <span className="bg-[#61DAFB]/20 text-white px-1 rounded">React.js</span>, <span className="bg-[#0170FE]/20 text-white px-1 rounded">AntDesign</span>, and <span className="bg-[#CC2927]/20 text-white px-1 rounded">SQL Server</span>.
            </p>
          </motion.div>

          <motion.div 
            className="p-6 rounded-lg border border-neutral-700 bg-neutral-900/40 backdrop-blur-sm shadow-lg"
            variants={textVariants}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <p className="text-gray-200">
              Before that, I interned at{" "}
              <motion.a
                href="https://www.eurafric-information.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block relative"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-[#00406E] bg-white px-1 rounded font-semibold relative z-10  font-medium px-1">
                  EURAFRIC
                </span>
                <motion.span 
                  className="absolute inset-0 bg-gray-700/30 rounded"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>{" "}
              (July to September 2023) as a full-stack web developer, creating an application to evaluate 
              the maturity of DevOps and Agile teams using{" "}
              <span className="bg-[#6DB33F]/20 text-white px-1 rounded">Spring</span>, <span className="bg-[#DD0031]/20 text-white px-1 rounded">Angular</span>, <span className="bg-[#7952B3]/20 text-white px-1 rounded">Bootstrap</span>, and <span className="bg-[#4479A1]/20 text-white px-1 rounded">MySQL</span>.
            </p>
          </motion.div>

          <motion.div 
            className="p-6 rounded-lg border border-neutral-700 bg-neutral-900/40 backdrop-blur-sm shadow-lg"
            variants={textVariants}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <p className="text-gray-200">
              My academic projects include developing a{" "}
              <span className="text-black bg-white px-1 rounded font-semibold">stock management web application</span>, an IT park management system, 
              and an insect detection application using{" "}
              <span className="bg-[#FF6F00]/20 text-white px-1 rounded">CNN (Convolutional Neural Network)</span> with<span className="bg-[#61DAFB]/20 text-white px-1 rounded">Flutter</span> and <span className="bg-[#3776AB]/20 text-white px-1 rounded">Python</span>.
            </p>
          </motion.div>

          <motion.div 
            className="p-6 rounded-lg border border-neutral-700 bg-neutral-900/40 backdrop-blur-sm shadow-lg"
            variants={textVariants}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <p className="text-gray-200">
              I&apos;m proficient in multiple{" "}
              <span className="text-black bg-white px-1 rounded font-semibold">programming languages and frameworks</span> including 
              <span className="bg-[#00599C]/20 text-white px-1 rounded"> C/C++</span>, <span className="bg-[#239120]/20 text-white px-1 rounded">C#/ADO.net</span>, <span className="bg-[#ED8B00]/20 text-white px-1 rounded">Java</span>/<span className="bg-[#6DB33F]/20 text-white px-1 rounded">Spring</span>, <span className="bg-[#3776AB]/20 text-white px-1 rounded">Python</span> with <span className="bg-[#092E20]/20 text-white px-1 rounded">Django</span>/<span className="bg-[#000000]/20 text-white px-1 rounded">Flask</span>/<span className="bg-[#FF6F00]/20 text-white px-1 rounded">TensorFlow</span>, and <span className="bg-[#F7DF1E]/20 text-white px-1 rounded">JavaScript</span> with <span className="bg-[#339933]/20 text-white px-1 rounded">Node.js</span>, <span className="bg-[#61DAFB]/20 text-white px-1 rounded">React</span>, and <span className="bg-[#DD0031]/20 text-white px-1 rounded">Angular</span>. 
              My database expertise spans <span className="bg-[#4479A1]/20 text-white px-1 rounded">MySQL</span>, <span className="bg-[#CC2927]/20 text-white px-1 rounded">SQL</span>, <span className="bg-[#F80000]/20 text-white px-1 rounded">PL/SQL</span>, <span className="bg-[#4DB33D]/20 text-white px-1 rounded">NoSQL</span>, <span className="bg-[#336791]/20 text-white px-1 rounded">PostgreSQL</span>, and <span className="bg-[#47A248]/20 text-white px-1 rounded">MongoDB</span>.
            </p>
          </motion.div>

          <motion.div 
            className="p-6 rounded-lg border border-neutral-700 bg-neutral-900/40 backdrop-blur-sm shadow-lg"
            variants={textVariants}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <p className="text-gray-200">
              I&apos;m currently seeking new{" "}
              <span className="text-black bg-white px-1 rounded font-semibold">professional challenges</span> where I can fully utilize my 
              diverse skills and significantly contribute to{" "}
              <span className="text-black bg-white px-1 rounded font-semibold">innovative projects</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
