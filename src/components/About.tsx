import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { isDark } = useTheme();

  return (
    <section className={`min-h-screen ${isDark ? 'bg-[#161B22]' : 'bg-gray-50'} pt-20 pb-10 px-6`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'} mb-4`}>
            About <span className="text-[#3B82F6]">Me</span>
          </h2>
          <p className={`text-lg ${isDark ? 'text-[#E6EDF3]/80' : 'text-gray-700'} leading-relaxed mb-6`}>
           I’m a Frontend Developer driven by real-world impact — building fast, scalable, 
           and beautiful web interfaces with a backend-aware mindset. I specialize in React 
           and TailwindCSS, with a strong foundation in backend technologies and a growing interest 
           in machine learning and data-driven solutions. I recently earned my BSc in Information 
           Systems from the University of Gondar, where I led multiple high-impact projects that blended
           performance, usability, and clean code.
          </p>
          
          <p className={`text-lg ${isDark ? 'text-[#E6EDF3]/80' : 'text-gray-700'} leading-relaxed`}>
          I specialize in modern frontend stacks like React, Next.js, and Tailwind CSS — with a strong eye for
          clean UI/UX and performance. While frontend is my focus, I'm equally comfortable diving into backend
          work with Node.js, Express, and MongoDB. I also have hands-on experience with Python. My curiosity drives 
          me to explore machine learning and external API integrations, always aiming to solve real-world problems through 
          practical, well-engineered solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
