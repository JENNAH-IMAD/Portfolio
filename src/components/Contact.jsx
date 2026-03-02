import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { CONTACT } from "../constants/index";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import PropTypes from 'prop-types';

const ContactItem = ({ icon, label, value, link, isVisible, index }) => {
  const itemControls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        itemControls.start({
          opacity: 1,
          x: 0,
          transition: { 
            duration: 0.8, 
            type: "spring",
            stiffness: 70,
            damping: 12
          }
        });
      }, index * 250);
    } else {
      setTimeout(() => {
        itemControls.start({
          opacity: 0,
          x: -100,
          transition: { 
            duration: 0.5
          }
        });
      }, index * 100);
    }
  }, [isVisible, index, itemControls]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={itemControls}
      className="mb-4"
    >
      <div className="flex justify-between items-center">
        <motion.span 
          className="text-gray-300 font-semibold flex items-center"
          whileHover={{ color: "#38b2ac", scale: 1.02 }}
        >
          <span className="mr-2">{icon}</span>
          {label}
        </motion.span>
        {link ? (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            whileHover={{ 
              color: "#38b2ac",
              scale: 1.05
            }}
          >
            {value}
          </motion.a>
        ) : (
          <motion.span 
            className="text-gray-400"
            whileHover={{ color: "#ffffff" }}
          >
            {value}
          </motion.span>
        )}
      </div>
    </motion.div>
  );
};

// Ajout de la validation des props pour résoudre les erreurs ESLint
ContactItem.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  link: PropTypes.string,
  isVisible: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired
};

// Valeurs par défaut
ContactItem.defaultProps = {
  link: null
};

const Contact = () => {
  const controls = useAnimation();
  const [visible, setVisible] = useState(false);
  const contactRef = useRef(null);
  
  // Adresse email spécifiée
  const emailAddress = "imad.jennah.pro@gmail.com";
  
  useEffect(() => {
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
        threshold: 0.2
      }
    );

    const currentRef = contactRef.current;

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

  // Title animation variants (left to right)
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  // Contact items avec les icônes de react-icons/fa
  const contactItems = [
    { 
      icon: <FaMapMarkerAlt />, 
      label: "Address", 
      value: CONTACT.address 
    },
    { 
      icon: <FaPhone />, 
      label: "Phone", 
      value: CONTACT.phoneNo 
    },
    { 
      icon: <FaEnvelope />, 
      label: "Email", 
      value: emailAddress, 
      link: `mailto:${emailAddress}?subject=Hello%20Imad&body=Hi%20Imad,`
    },
    { 
      icon: <FaLinkedin />, 
      label: "LinkedIn", 
      value: "LinkedIn Profile", 
      link: CONTACT.linkedin 
    }
  ];

  return (
    <motion.div 
      ref={contactRef}
      id="contact"
      className="border-b border-neutral-800 py-24"
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Title with left-to-right animation */}
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={titleVariants} 
        className="pb-2 w-full text-center"
      >
        <h1 className="my-2 text-center text-4xl">Contact</h1>
        <motion.div
          className="h-1 w-24 bg-gray-500 mx-auto mt-2"
          initial={{ width: 0 }}
          animate={visible ? { width: "6rem" } : { width: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>
      
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.p 
          className="text-gray-400 text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I am always on the lookout for new challenges and opportunities to learn and grow. 
          If you have a project or idea that you think I could help with, I would love to hear from you. 
          Please feel free to get in touch through any of the contact methods below.
        </motion.p>

        {contactItems.map((item, index) => (
          <ContactItem
            key={index}
            icon={item.icon}
            label={item.label}
            value={item.value}
            link={item.link}
            isVisible={visible}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Contact;