import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';

const Projects = () => {
  const { isDark } = useTheme();

  // Remove all useState and useEffect for theme

  const projects = [
    {
      title: "AdeyBloom E-commerce Platform",
      description: "Multilingual full-stack e-commerce platform with Stripe/Chapa payments, real-time inventory, FastAPI microservices, and Telegram bot integration for customer engagement.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "FastAPI", "Tailwind CSS", "Chapa API", "JWT", "Cloudinary", "Bcrypt", "Telegram"],
      liveDemo: "https://adeybloom-ecommerce-client.netlify.app/",
      github: "https://github.com/samuelAemro12/AdeyBloom-ecommerce-clientSide"
    },
    {
      title: "Amazon Clone",
      description: "Fully functional Amazon clone with user authentication, shopping cart, payment processing via Stripe, and Firebase integration. Features complete e-commerce functionality with modern React architecture.",
      technologies: ["React", "Firebase", "Stripe API", "Express.js", "Node.js", "User Authentication", "FakeStore API"],
      liveDemo: "https://samuel-amazon-clone-deploy.netlify.app/",
      github: "https://github.com/samuelAemro12/amazon-clone"
    },
    {
      title: "Netflix Clone",
      description: "Netflix-inspired streaming platform clone with Firebase authentication, movie trailers integration, and responsive design. Showcases advanced frontend development skills with API integration.",
      technologies: ["React", "Firebase Auth", "YouTube trailer Integration", "TMDB API", "CSS3", "User Authentication"],
      liveDemo: "https://samuelaemro-netflx-clone.netlify.app/",
      github: "https://github.com/samuelAemro12/netflix-clone"
    },
    {
      title: "Breast Cancer Prediction System",
      description: "Machine learning project for breast cancer recurrence prediction using Naive Bayes and SVM classifiers. Developed on Google Colab with comprehensive data analysis and model evaluation.",
      technologies: ["Python", "Jupyter Notebook", "Scikit-learn", "Naive Bayes", "SVM", "Healthcare ML"],
      github: "https://github.com/samuelAemro12/MachineLeraning_SchoolProject-"
    },
    {
      title: "CinemaStash API",
      description: "Secure and scalable backend API for movie management with TMDB integration, user authentication, reviews, wishlists, and personalized recommendations. Built with modern REST principles.",
      technologies: ["Node.js", "Express.js", "MongoDB", "TMDB API", "JWT", "RESTful API"],
      liveDemo: "https://cinemastash.onrender.com/",
      github: "https://github.com/samuelAemro12/CinemaStash"
    },
    {
      title: "BloodLink Platform",
      description: "Collaborative blood donation platform connecting donors with recipients. Features real-time matching, user profiles, and emergency request system to save lives through technology.",
      technologies: ["Next.js", "Prisma", "SQLite", "Real-time Updates", "Healthcare Tech"],
      github: "https://github.com/samuelAemro12/bloodlink"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={`min-h-screen ${isDark ? 'bg-[#161B22]' : 'bg-gray-50'} py-12 px-6`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'} mb-4`}>
            Featured <span className="text-[#3B82F6]">Projects</span>
          </h2>
          <p className={`text-lg ${isDark ? 'text-[#E6EDF3]/80' : 'text-gray-700'} max-w-3xl mx-auto`}>
            A showcase of my recent work, demonstrating expertise in full-stack development, modern frameworks, and user-centered design
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`${isDark ? 'bg-[#161B22] border-[#30363D] hover:border-[#3B82F6]/50 hover:shadow-[#3B82F6]/10' : 'bg-white border-gray-200 hover:border-[#3B82F6]/50 hover:shadow-blue-100'} rounded-xl p-6 border transition-all duration-300 group hover:shadow-xl`}
            >
              <h3 className={`text-xl font-semibold ${isDark ? 'text-[#E6EDF3] group-hover:text-[#3B82F6]' : 'text-gray-900 group-hover:text-[#3B82F6]'} mb-3 transition-colors`}>
                {project.title}
              </h3>
              
              <p className={`${isDark ? 'text-[#E6EDF3]/80' : 'text-gray-700'} mb-4 leading-relaxed`}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 ${isDark ? 'bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/20' : 'bg-blue-50 text-blue-700 border-blue-200'} text-sm rounded-full border`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 group/btn"
                  >
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    Live Demo
                  </a>
                )}
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 ${isDark ? 'bg-[#21262D] hover:bg-[#30363D] text-[#E6EDF3] border-[#30363D]' : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border-gray-300'} px-4 py-2 rounded-lg font-medium transition-all duration-300 border group/btn`}
                >
                  <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View Code
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
