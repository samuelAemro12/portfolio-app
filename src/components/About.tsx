import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { isDark } = useTheme();

  // Keep only the component logic
  const highlights = [
    {
      number: "Top 5",
      label: "University Ranking",
      description: "Final Year Project recognition"
    },
    {
      number: "5+",
      label: "Team Members Led",
      description: "85% implementation completion"
    },
    {
      number: "6+",
      label: "Full-Stack Apps",
      description: "Including Netflix & Amazon clones"
    },
    {
      number: "3+",
      label: "Years Experience",
      description: "Building modern web applications"
    }
  ];

  const whatIDo = [
    {
      icon: "🎨",
      title: "Frontend Development",
      description: "Build responsive, accessible frontend apps with React + TypeScript"
    },
    {
      icon: "⚙️",
      title: "Backend APIs",
      description: "Design seamless backend APIs using Node.js, Express, and MongoDB"
    },
    {
      icon: "🤖",
      title: "ML & API Integration",
      description: "Integrate third-party APIs and ML models into real-world applications"
    },
    {
      icon: "🚀",
      title: "Deployment & UI",
      description: "Deliver clean UI with Tailwind, deploy with Vercel/Render"
    }
  ];

  const techStack = [
    "React", "Next.js", "Node.js", "MongoDB", "TypeScript", 
    "Tailwind CSS", "Prisma", "Python (ML)", "Git"
  ];

  return (
    <section className={`min-h-screen ${isDark ? 'bg-[#161B22]' : 'bg-gray-50'} py-20 px-6`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'} mb-4`}>
            About <span className="text-[#3B82F6]">Me</span>
          </h2>
          <p className={`text-lg ${isDark ? 'text-[#E6EDF3]/80' : 'text-gray-700'} leading-relaxed mb-6`}>
          I'm a frontend-focused Full-Stack Developer with a solid foundation in backend integration and
          a growing passion for data science and machine learning. I recently earned my BSc in Information Systems
          from the University of Gondar, where I led multiple projects and honed my skills in building fast,
          responsive, and scalable web applications.
          </p>
          
          <p className={`text-lg ${isDark ? 'text-[#E6EDF3]/80' : 'text-gray-700'} leading-relaxed`}>
          I specialize in modern frontend stacks like React, Next.js, and Tailwind CSS as — 
          with a strong eye for clean UI/UX — while also being comfortable working across 
          the stack when needed, I have also a working experince with nodeJS, ExpressJs, MongoDb and Python.
          My curiosity drives me to explore machine learning and external API integrations, 
          and I'm always pushing to solve real-world problems through thoughtful, practical engineering.
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* What I Do Section - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-3xl font-bold ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'} mb-8 text-center`}>What I Do</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatIDo.map((item, index) => (
                <div key={index} className={`flex flex-col items-center text-center gap-4 p-8 rounded-xl ${isDark ? 'bg-[#161B22] border-[#30363D] hover:border-[#3B82F6]/50' : 'bg-gray-50 border-gray-200 hover:border-[#3B82F6]/50'} border transition-all duration-300 hover:shadow-lg min-h-[200px]`}>
                  <span className="text-4xl mb-3">{item.icon}</span>
                  <div className="space-y-3">
                    <h5 className={`font-semibold ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'} text-base leading-tight`}>{item.title}</h5>
                    <p className={`text-sm ${isDark ? 'text-[#E6EDF3]/70' : 'text-gray-600'} leading-relaxed`}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`${isDark ? 'bg-[#0D1117]' : 'bg-white'} rounded-2xl p-8 border ${isDark ? 'border-[#30363D]' : 'border-gray-200'} shadow-lg h-full`}
            >

              <div className="mt-8">
                <h4 className={`text-lg font-semibold ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'} mb-4`}>Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-2 ${isDark ? 'bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/20' : 'bg-blue-50 text-blue-700 border-blue-200'} text-sm font-medium rounded-full border transition-all duration-200 hover:scale-105`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <h4 className={`text-lg font-semibold ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'} mb-4`}>What I'm Looking For</h4>
                <p className={`${isDark ? 'text-[#E6EDF3]/80' : 'text-gray-700'} leading-relaxed text-base`}>
                  Currently seeking opportunities in <span className="text-[#3B82F6] font-semibold">frontend engineering</span> or 
                  <span className="text-[#3B82F6] font-semibold"> full-stack roles</span> with API integration challenges.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center h-full"
            >
              <div className="grid grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`${isDark ? 'bg-[#0D1117] border-[#30363D] hover:border-[#3B82F6]/50' : 'bg-white border-gray-200 hover:border-[#3B82F6]/50'} p-6 rounded-xl border transition-all duration-300 text-center group shadow-lg hover:shadow-xl`}
                  >
                    <div className="text-3xl font-bold text-[#3B82F6] mb-3 group-hover:scale-110 transition-transform">
                      {highlight.number}
                    </div>
                    <div className={`${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'} font-semibold mb-2 text-sm`}>
                      {highlight.label}
                    </div>
                    <div className={`${isDark ? 'text-[#E6EDF3]/60' : 'text-gray-600'} text-xs leading-relaxed`}>
                      {highlight.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

