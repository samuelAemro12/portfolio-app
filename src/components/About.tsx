import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { isDark } = useTheme();

  return (
    <section className={`${isDark ? 'bg-[#161B22]' : 'bg-gray-50'} py-12 px-6`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'} mb-4`}>
            About <span className="text-[#3B82F6]">Me</span>
          </h2>
          <p className={`text-lg ${isDark ? 'text-[#E6EDF3]/80' : 'text-gray-700'} leading-relaxed mb-4`}> 
            <span className="font-semibold text-[#3B82F6]">Builder. Problem Solver. Tech Enthusiast.</span> <br />
            I thrive on transforming ideas into digital reality—designing and building full-stack web and software solutions that are fast, scalable, and user-focused. My toolkit includes <span className="font-semibold">React</span>, <span className="font-semibold">Next.js</span>, and <span className="font-semibold">Tailwind CSS</span> for beautiful frontends, paired with robust backends using <span className="font-semibold">Node.js</span>, <span className="font-semibold">Express</span>, <span className="font-semibold">MongoDB</span>, and <span className="font-semibold">FastAPI</span>.
          </p>
          <p className={`text-lg ${isDark ? 'text-[#E6EDF3]/80' : 'text-gray-700'} leading-relaxed mb-4`}>
            I love building things that make a difference—from e-commerce platforms with seamless payment integration to automation tools, bots, and microservices. My curiosity drives me to explore <span className="font-semibold">API integrations</span>, <span className="font-semibold">automation</span>, and the world of <span className="font-semibold">machine learning</span>.
          </p>
          <p className={`text-lg ${isDark ? 'text-[#E6EDF3]/80' : 'text-gray-700'} leading-relaxed`}>
            With a BSc in Information Systems from the University of Gondar, I’ve led and contributed to high-impact projects that blend engineering precision with practical usability. My mission: <span className="italic">build clean, reliable, and delightful digital experiences that solve real-world problems</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
