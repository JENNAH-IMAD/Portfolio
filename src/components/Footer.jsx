import { motion } from 'framer-motion';
import logoImg from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-transparent py-8 px-4">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        {/* Logo à gauche */}
        <div className="mb-4 md:mb-0">
          <img 
            src={logoImg} 
            alt="Logo" 
            className="h-10" 
          />
        </div>
        
        {/* Credits à droite */}
        <div className="text-right">
          <h3 className="text-white text-sm font-bold uppercase mb-4">CREDITS</h3>
          <motion.a
            href="https://stormix.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-400 hover:text-white transition-colors duration-300 mb-2"
            whileHover={{ x: -5 }}
          >
            Anas Mazouni
          </motion.a>
        </div>
      </div>
      
      {/* Copyright en bas */}
      <div className="container mx-auto mt-12 text-center text-gray-500 text-sm">
        © 2024-{new Date().getFullYear()} | ImFix
      </div>
    </footer>
  );
};

export default Footer;