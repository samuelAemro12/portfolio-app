import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#0D1117] flex items-center justify-center px-6">
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
            className="text-4xl md:text-6xl font-bold text-[#E6EDF3] mb-4"
          >
            Hi, I'm <span className="text-[#3B82F6]">Samuel</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold text-[#E6EDF3] mb-6"
          >
            Full Stack Web Developer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-[#E6EDF3]/80 mb-8 max-w-lg leading-relaxed"
          >
            I specialize in building modern web applications with React, Node.js, and cloud technologies. 
            Passionate about creating seamless user experiences and scalable backend solutions.
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
              href="/resume.pdf"
              download="Samuel_Aemro_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#21262D] text-[#E6EDF3] px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-[#30363D] hover:border-[#3B82F6]/50 group"
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
          className="hidden lg:flex items-center justify-center"
        >
          <div className="w-80 h-80 bg-gradient-to-br from-[#3B82F6]/20 to-[#1E40AF]/20 rounded-full flex items-center justify-center">
            <div className="w-64 h-64 bg-[#161B22] rounded-full flex items-center justify-center border border-[#3B82F6]/30">
              <span className="text-6xl text-[#3B82F6]">👨‍💻</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

