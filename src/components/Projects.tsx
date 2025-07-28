import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      liveDemo: "https://demo.example.com",
      github: "https://github.com/username/ecommerce"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
      techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      liveDemo: "https://tasks.example.com",
      github: "https://github.com/username/task-manager"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts, interactive maps, and weather alerts.",
      techStack: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
      liveDemo: "https://weather.example.com",
      github: "https://github.com/username/weather-app"
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with data visualization and automated reporting features.",
      techStack: ["Vue.js", "Python", "FastAPI", "Redis"],
      liveDemo: "https://analytics.example.com",
      github: "https://github.com/username/social-analytics"
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
    <section id="projects" className="min-h-screen bg-[#0D1117] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E6EDF3] mb-4">
            Featured <span className="text-[#3B82F6]">Projects</span>
          </h2>
          <p className="text-lg text-[#E6EDF3]/80 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-[#161B22] rounded-xl p-6 border border-[#30363D] hover:border-[#3B82F6]/50 transition-all duration-300 group hover:shadow-xl hover:shadow-[#3B82F6]/10"
            >
              <h3 className="text-xl font-semibold text-[#E6EDF3] mb-3 group-hover:text-[#3B82F6] transition-colors">
                {project.title}
              </h3>
              
              <p className="text-[#E6EDF3]/80 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm rounded-full border border-[#3B82F6]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 group/btn"
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  Live Demo
                </a>
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#21262D] hover:bg-[#30363D] text-[#E6EDF3] px-4 py-2 rounded-lg font-medium transition-all duration-300 border border-[#30363D] group/btn"
                >
                  <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
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
