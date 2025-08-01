import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';
import profileImage from '../assets/photo_2025-08-01_01-15-06.jpg';

const Hero = () => {
  const { isDark } = useTheme();

  return (
    <section className={`min-h-screen ${isDark ? 'bg-[#0D1117]' : 'bg-white'} flex items-center justify-center px-6`}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-4xl md:text-6xl font-bold ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'} mb-4`}
          >
            Hi, I'm <span className="text-[#3B82F6]">Samuel</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold text-[#E6EDF3] dark:text-[#E6EDF3] text-gray-800 mb-6"
          >
            Full Stack Web Developer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-lg md:text-xl ${isDark ? 'text-[#E6EDF3]/80' : 'text-gray-700'} mb-8 leading-relaxed`}
          >
            Full-Stack Developer & Data Science Enthusiast passionate about creating 
            innovative web solutions and leveraging data to drive meaningful insights.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="projects"
              smooth={true}
              duration={800}
              className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer group"
            >
              View My Work
              <ChevronDownIcon className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Link>
            
            <a
              href="https://drive.google.com/uc?export=download&id=1fY6uEfic8TqG6dESlCijscNuop7C1rqZ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#21262D] dark:hover:bg-[#21262D] hover:bg-gray-100 text-[#E6EDF3] dark:text-[#E6EDF3] text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-[#30363D] dark:border-[#30363D] border-gray-300 hover:border-[#3B82F6]/50 group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center justify-center"
        >
          <div className="relative">
            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-[#3B82F6]/30 shadow-2xl"
            >
              <img
                src={profileImage}
                alt="Samuel Aemro"
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B82F6]/20 to-transparent"></div>
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-[#3B82F6]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#3B82F6]/30"
            >
              <span className="text-2xl">⚡</span>
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#3B82F6]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#3B82F6]/30"
            >
              <span className="text-lg">💻</span>
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, -8, 0],
                x: [0, 5, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute top-1/2 -left-8 w-10 h-10 bg-[#3B82F6]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#3B82F6]/30"
            >
              <span className="text-sm">🚀</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

