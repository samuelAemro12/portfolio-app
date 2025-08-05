import { motion } from 'framer-motion';
import { CodeBracketIcon, StarIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';

interface Contribution {
  project: string;
  description: string;
  repository: string;
  role: string;
  impact: string;
  techStack: string[];
  type: string;
  prLink?: string;
  prNumber?: string;
}

const OpenSource = () => {
  const { isDark } = useTheme();

  // Remove all useState and useEffect for theme

  const openSourceContributions: Contribution[] = [
    {
      project: "CinemaStash API",
      description: "Secure and scalable backend API for movie management with TMDB integration, user authentication, reviews, wishlists, and personalized recommendations. Built with modern REST principles.",
      repository: "https://github.com/samuelAemro12/CinemaStash",
      role: "Creator & Maintainer",
      impact: "Providing users with a complete movie management solution",
      techStack: ["Node.js", "Express.js", "MongoDB", "TMDB API", "JWT", "RESTful API"],
      type: "own-project"
    },
    {
      project: "School Management System",
      description: "Comprehensive school management platform for student records, grades, and administrative tasks. Contributed features and bug fixes during collaborative development.",
      repository: "https://github.com/akimmk/school-management-system",
      prLink: "https://github.com/akimmk/school-management-system/pulls?q=is%3Apr+author%3AsamuelAemro12+is%3Aclosed",
      role: "Contributor",
      impact: "Enhanced user experience and functionality, frontend logic",
      techStack: ["JavaScript", "React.js", "UI/UX", "TailwindCss", "ExpressJs", "NodeJs", "MongoDB"],
      type: "contribution"
    },
    {
      project: "BloodLink Platform",
      description: "Life-saving blood donation platform connecting donors with recipients. Contributed during hackathon with real-time matching and emergency request features.",
      repository: "https://github.com/Issmuth/bloodlink",
      prLink: "https://github.com/Issmuth/bloodlink/pulls?q=is%3Apr+author%3AsamuelAemro12+is%3Aclosed",
      role: "Hackathon Contributor, and Frontend team leader",
      impact: "Helping save lives through technology",
      techStack: ["JavaScript", "NextJs", "Real-time Updates", "UI/UX", "Prisma", "SQLite"],
      type: "contribution"
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
    <section id="opensource" className={`min-h-screen ${isDark ? 'bg-[#0D1117]' : 'bg-white'} py-20 px-6`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'} mb-4`}>
            Open Source <span className="text-[#3B82F6]">Contributions</span>
          </h2>
          <p className={`text-lg ${isDark ? 'text-[#E6EDF3]/80' : 'text-gray-700'} max-w-3xl mx-auto`}>
            Contributing to the developer community through open source projects and caring about code quality
          </p>
        </motion.div>

        {/* Open Source Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <CodeBracketIcon className="w-8 h-8 text-[#3B82F6]" />
            <h3 className={`text-2xl font-semibold ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'}`}>Open Source Contributions</h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {openSourceContributions.map((contribution, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`${isDark ? 'bg-[#161B22] border-[#30363D] hover:border-[#3B82F6]/50' : 'bg-gray-50 border-gray-200 hover:border-[#3B82F6]/50'} rounded-xl p-6 border transition-all duration-300 group`}
              >
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <a
                      href={contribution.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-[#3B82F6] hover:text-[#2563EB] transition-colors flex items-center gap-2"
                    >
                      {contribution.type === 'own-project' ? '💡' : '📦'} {contribution.project}
                    </a>
                  </div>
                  {'prNumber' in contribution && contribution.prNumber && (
                    <span className="text-blue-400 text-sm">
                      PR {contribution.prNumber}
                    </span>
                  )}
                </div>

                <p className={`${isDark ? 'text-[#E6EDF3]/80' : 'text-gray-700'} text-sm leading-relaxed mb-4`}>
                  {contribution.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div>
                    <span className={`text-xs font-medium ${isDark ? 'text-[#E6EDF3]/70' : 'text-gray-600'} uppercase tracking-wide`}>
                      Role
                    </span>
                    <p className={`text-sm ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'} font-medium`}>
                      {contribution.role}
                    </p>
                  </div>
                  
                  <div>
                    <span className={`text-xs font-medium ${isDark ? 'text-[#E6EDF3]/70' : 'text-gray-600'} uppercase tracking-wide`}>
                      Impact
                    </span>
                    <p className={`text-sm ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'}`}>
                      {contribution.impact}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {contribution.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 ${isDark ? 'bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/20' : 'bg-blue-50 text-blue-700 border-blue-200'} text-xs rounded-full border`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-start mt-4">
                  <div className="flex gap-2">
                    <a
                      href={contribution.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 ${isDark ? 'bg-[#21262D] hover:bg-[#30363D] text-[#E6EDF3] border-[#30363D]' : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border-gray-300'} px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 border group/btn`}
                    >
                      <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Repo
                    </a>
                    
                    {contribution.type === "contribution" && (
                      <a
                        href={contribution.prLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 group/btn"
                      >
                        <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        View PRs
                      </a>
                    )}
                  </div>
                  
                  <StarIcon className="w-5 h-5 text-[#3B82F6]" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className={`${isDark ? 'text-[#E6EDF3]/80' : 'text-gray-700'} mb-6`}>
            Want to collaborate on open source projects?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/samuelAemro12"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 ${isDark ? 'bg-[#21262D] hover:bg-[#30363D] text-[#E6EDF3] border-[#30363D]' : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border-gray-300'} px-8 py-4 rounded-lg font-semibold transition-all duration-300 border group`}
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View GitHub Profile
            </a>
            <a
              href="mailto:samuelaemrowork12@gmail.com"
              className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 group"
            >
              <CodeBracketIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Let's Collaborate
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSource;
