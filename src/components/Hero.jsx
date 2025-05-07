import { InfoHero } from "../constants";
import { HERO_CONTENT } from "../constants";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="pd-4 lg:-mb-36">
      <div className="flex flex-col lg:flex-row-reverse">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:mt-12">
            <motion.img 
              src={InfoHero.photo} 
              alt={InfoHero.fullName} 
              className="border border-stone-900 rounded-3xl w-3/4 lg:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <motion.div 
            className="flex flex-col items-center lg:items-start mt-10"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3
                }
              }
            }}
          >
            <motion.h2 
              className="pd-2 text-4xl tracking-tighter lg:text-8xl"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              Jennah Imad
            </motion.h2>
            
            <motion.span 
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent relative"
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <TypeAnimation
                sequence={[
                  "Software Engineer", 1000,
                  "Full-Stack Web Developer", 1000,
                  "Project Study & Conception ", 1000,
                  "Machine learning", 1000,
                  "Data Scientist & Analyst ", 1000
                ]}
                wrapper="span"
                repeat={Infinity}
              />
              <motion.span 
                className="absolute right-[-12px] text-stone-500"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                |
              </motion.span>
            </motion.span>
            
            <motion.p 
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.a
              href={InfoHero.resume}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full px-6 py-4 text-sm text-stone-800 mb-10 shadow-lg transition-all duration-300"
              whileHover={{ backgroundColor: "#878282" }}
              whileTap={{ scale: 0.95 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="border-b border-neutral-800 w-full mt-10 mb-16"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </div>
  );
};

export default Hero;
