import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const TechnicalSkills = () => {
  const { isDark } = useTheme();

  // Remove all useState and useEffect for theme

  const skillCategories = [
    {
      category: "Frontend Development",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: [
        { name: 'React', level: 95 },
        { name: 'TailwindCSS', level: 92 },
        { name: 'Next.js', level: 88 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'React Router', level: 88 },
        { name: 'UI/UX Design', level: 85 }
      ]
    },
    {
      category: "Backend & APIs",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'JWT', level: 80 },
        { name: 'Stripe', level: 75 },
        { name: 'TMDB API', level: 78 }
      ]
    },
    {
      category: "Dev Tools & Platforms",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Postman', level: 85 },
        { name: 'Thunder Client', level: 80 },
        { name: 'Vercel', level: 85 },
        { name: 'Netlify', level: 82 },
        { name: 'Render', level: 80 },
        { name: 'Cloudinary', level: 75 }
      ]
    },
    {
      category: "Languages & ML",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      skills: [
        { name: 'TypeScript', level: 90 },
        { name: 'Python', level: 78 },
        { name: 'Java', level: 75 },
        { name: 'C++', level: 70 },
        { name: 'Go', level: 65 },
        { name: 'NumPy', level: 75 },
        { name: 'Pandas', level: 78 },
        { name: 'scikit-learn', level: 72 }
      ]
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
    <section className={`min-h-screen ${isDark ? 'bg-[#0D1117]' : 'bg-white'} py-20 px-6`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'} mb-4`}>
            Technical <span className="text-[#3B82F6]">Skills</span>
          </h2>
          <p className={`text-lg ${isDark ? 'text-[#E6EDF3]/80' : 'text-gray-700'} max-w-3xl mx-auto`}>
            A comprehensive overview of my technical expertise and the tools I use to build exceptional digital experiences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={cardVariants}
              className={`${isDark ? 'bg-[#161B22] border-[#30363D] hover:border-[#3B82F6]/50' : 'bg-gray-50 border-gray-200 hover:border-[#3B82F6]/50'} rounded-xl p-6 border transition-all duration-300 shadow-lg`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 ${isDark ? 'bg-[#3B82F6]/10' : 'bg-blue-50'} rounded-lg flex items-center justify-center text-[#3B82F6]`}>
                  {category.icon}
                </div>
                <h3 className={`text-lg font-semibold ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'}`}>
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm font-medium ${isDark ? 'text-[#E6EDF3]' : 'text-gray-800'}`}>
                        {skill.name}
                      </span>
                      <span className={`text-xs ${isDark ? 'text-[#E6EDF3]/60' : 'text-gray-600'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full ${isDark ? 'bg-[#30363D]' : 'bg-gray-200'} rounded-full h-2`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-[#3B82F6] h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
