import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';
import profileImage from '../assets/photo_2025-08-01_01-15-06.jpg';

const Hero = () => {
  const { isDark } = useTheme();

  return (
    <section className={`min-h-screen ${isDark ? 'bg-[#0D1117]' : 'bg-white'} flex items-center justify-center px-6 pt-24 sm:pt-20 md:pt-16 lg:pt-0`}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 items-center justify-center min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center items-start text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-4xl md:text-6xl font-bold ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'} mb-4`}
          >
            Selam, I'm <span className="text-[#3B82F6]">Samuel</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold text-[#E6EDF3] dark:text-[#E6EDF3] text-gray-800 mb-6"
          >
            Full Stack Web and Software Builder
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-lg md:text-xl ${isDark ? 'text-[#E6EDF3]/80' : 'text-gray-700'} mb-4 leading-relaxed`}
          >
          I design and develop fast, scalable, and user-friendly applications - 
          blending frontend craftsmanship with backend efficiency. 
          Driven by modern and legacy technology and a builder’s mindset,
          I focus on clean code, smooth user experiences, and real-world problem solving.
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
              href="https://drive.google.com/uc?export=download&id=1ueX9pyAuxNBUYUI9vQHnXY18h-GPDRMZ"
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
          <div className="relative flex items-center justify-center" style={{ width: 480, height: 480 }}>
            {/* Spinning Elements in a Wider Circle Around the Image */}
            <motion.div
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: 440,
                height: 440,
                marginLeft: -220,
                marginTop: -220,
                pointerEvents: 'none',
              }}
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: 0,
                  translateX: '-50%'
                }}
                className="w-16 h-16 bg-[#3B82F6]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#3B82F6]/30"
              >
                <span className="text-2xl">💻</span>
              </motion.div>
              <motion.div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  translateY: '-50%'
                }}
                className="w-16 h-16 bg-[#3B82F6]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#3B82F6]/30"
              >
                <span className="text-2xl">🌐</span>
              </motion.div>
              <motion.div
                style={{
                  position: 'absolute',
                  left: '50%',
                  bottom: 0,
                  translateX: '-50%'
                }}
                className="w-16 h-16 bg-[#3B82F6]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#3B82F6]/30"
              >
                <span className="text-2xl">⚡</span>
              </motion.div>
              <motion.div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  translateY: '-50%'
                }}
                className="w-16 h-16 bg-[#3B82F6]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#3B82F6]/30"
              >
                <span className="text-2xl">🛠️</span>
              </motion.div>
            </motion.div>
            {/* Profile Image (untouched) */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-[#3B82F6]/30 shadow-2xl"
            >
              <img
                src={profileImage}
                alt="Samuel Aemro"
                className="w-full h-full object-cover rotate-0"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B82F6]/20 to-transparent"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

