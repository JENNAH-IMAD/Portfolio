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
              <span className="text-[#3c3ce8] font-semibold">Computer and Network Engineer</span>, 
              specializing in MIAGE (IT Methods Applied to Business Management). My profile 
              combines <span className="text-[#3c3ce8] font-semibold">technical expertise</span> with a strategic business-oriented vision.
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
                <span className="relative z-10 text-[#3c3ce8] font-medium px-1">
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
              <span className="text-[#3c3ce8] font-semibold">Baccalauréat in Physical Sciences</span> from Institut MAJORELLE.
            </p>
          </motion.div>

          <motion.div 
            className="p-6 rounded-lg border border-neutral-700 bg-neutral-900/40 backdrop-blur-sm shadow-lg"
            variants={textVariants}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <p className="text-gray-200">
              During my academic journey, I&apos;ve developed a{" "}
              <span className="text-[#3c3ce8] font-semibold">versatile skill set</span> spanning from 
              software development to data science and machine learning. This diversity allows me to approach 
              IT challenges from various perspectives, combining{" "}
              <span className="text-[#3c3ce8] font-semibold">technical understanding</span> with 
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
                <span className="relative z-10 text-[#3c3ce8] font-medium px-1">
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
              <span className="text-[#3c3ce8] font-semibold">Spring, React.js, AntDesign, and SQL Server</span>.
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
                <span className="relative z-10 text-[#3c3ce8] font-medium px-1">
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
              <span className="text-[#3c3ce8] font-semibold">Spring, Angular, Bootstrap, and MySQL</span>.
            </p>
          </motion.div>

          <motion.div 
            className="p-6 rounded-lg border border-neutral-700 bg-neutral-900/40 backdrop-blur-sm shadow-lg"
            variants={textVariants}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <p className="text-gray-200">
              My academic projects include developing a{" "}
              <span className="text-[#3c3ce8] font-semibold">stock management web application</span>, an IT park management system, 
              and an insect detection application using{" "}
              <span className="text-[#3c3ce8] font-semibold">CNN (Convolutional Neural Network)</span> with Flutter and Python.
            </p>
          </motion.div>

          <motion.div 
            className="p-6 rounded-lg border border-neutral-700 bg-neutral-900/40 backdrop-blur-sm shadow-lg"
            variants={textVariants}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <p className="text-gray-200">
              I&apos;m proficient in multiple{" "}
              <span className="text-[#3c3ce8] font-semibold">programming languages and frameworks</span> including 
              C/C++, C#/ADO.net, Java/Spring, Python with Django/Flask/TensorFlow, and JavaScript with Node.js, React, and Angular. 
              My database expertise spans MySQL, SQL, PL/SQL, NoSQL, PostgreSQL, and MongoDB.
            </p>
          </motion.div>

          <motion.div 
            className="p-6 rounded-lg border border-neutral-700 bg-neutral-900/40 backdrop-blur-sm shadow-lg"
            variants={textVariants}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <p className="text-gray-200">
              I&apos;m currently seeking new{" "}
              <span className="text-[#3c3ce8] font-semibold">professional challenges</span> where I can fully utilize my 
              diverse skills and significantly contribute to{" "}
              <span className="text-[#3c3ce8] font-semibold">innovative projects</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;