import { useEffect, useRef, useState } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiSpring, SiMicrosoftsqlserver, SiMysql, SiPostgresql, SiAngular, SiPython, SiJavascript, SiMongodb, SiDotnet, SiPhp, SiGit, SiFigma } from "react-icons/si"; // Ajout de SiFigma
import { motion, useAnimation } from "framer-motion";

// Maintain the original floating animation for the boxes
const iconVariants = (duration) => ({
  initial: { y: -10, opacity: 0 },
  animate: {
    y: [10, -10],
    opacity: [0, 1],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const pageVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Technologies = () => {
  const controls = useAnimation();
  const [visible, setVisible] = useState(false);
  const techRef = useRef(null);
  
  useEffect(() => {
    // Create the intersection observer
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
        rootMargin: "0px 0px -10% 0px", // Adjust when the animation triggers
        threshold: 0.2, // How much of the element needs to be visible
      }
    );
  
    // Copy the current value of techRef to a variable
    const currentRef = techRef.current;
  
    // Observe the technologies element
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls]);

  // Container animation variants
  const containerVariants = {
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.6
      }
    },
    hidden: { 
      opacity: 0, 
      y: 50,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
        duration: 0.4
      }
    }
  };

  const techItems = [
    { icon: SiSpring, color: "text-green-500", duration: 2.5 },
    { icon: SiMicrosoftsqlserver, color: "text-red-600", duration: 3 },
    { icon: RiReactjsLine, color: "text-cyan-400", duration: 5 },
    { icon: SiAngular, color: "text-red-500", duration: 2 },
    { icon: SiPython, color: "", duration: 6, custom: true },
    { icon: TbBrandNextjs, color: "", duration: 4 },
    { icon: SiMysql, color: "text-blue-700", duration: 3.5 },
    { icon: SiPostgresql, color: "text-cyan-400", duration: 5 },
    { icon: SiJavascript, color: "text-yellow-500", duration: 4.5 },
    { icon: SiMongodb, color: "text-green-600", duration: 3.5 }, // MongoDB
    { icon: SiDotnet, color: "text-purple-500", duration: 4 }, // .NET
    { icon: SiPhp, color: "text-indigo-500", duration: 3 }, // PHP
    { icon: SiGit, color: "text-orange-500", duration: 2.5 }, // Git
    { icon: SiFigma, color: "text-pink-500", duration: 3 }, // Figma
  ];

  return (
    <motion.div 
      ref={techRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="border-b border-neutral-800 py-24"
    >
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={pageVariants} 
        className="pb-2 w-full text-center"
      >
        <h1 className="my-2 text-center text-4xl">Technologies</h1>
        <motion.div
          className="h-1 w-24 bg-gray-500 mx-auto mt-2"
          initial={{ width: 0 }}
          animate={visible ? { width: "6rem" } : { width: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 0.3
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
          ease: "easeOut"
        }}
      >
        Here are some of the technologies I&apos;m proficient with and use in my development projects.
      </motion.p>
      
      <div className="flex flex-wrap items-center justify-center gap-4">
        {techItems.map((item, index) => (
          <motion.div 
            key={index}
            variants={iconVariants(item.duration)}
            initial="initial"
            animate="animate"
            whileHover={{ 
              scale: 1.1, 
              transition: { duration: 0.3 }
            }}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)'
            }}
            transition={{ 
              duration: 0.5,
              delay: visible ? index * 0.1 : 0
            }}
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            {item.custom ? (
              <div className="relative w-16 h-16">
                <SiPython className="absolute text-7xl text-blue-500" style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0% 100%)" }} />
                <SiPython className="absolute text-7xl text-yellow-500" style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }} />
              </div>
            ) : (
              <item.icon className={`text-7xl ${item.color}`} />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Technologies;