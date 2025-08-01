import { motion } from 'framer-motion';
import { AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';

const Certifications = () => {
  const { isDark } = useTheme();

  // Remove all useState and useEffect for theme

  const certifications = [
    {
      title: "Data Science Nanodegree",
      provider: "Udacity",
      year: "2023"
    },
    {
      title: "Programming Fundamentals",
      provider: "Udacity", 
      year: "2022"
    },
    {
      title: "ML & Employability Training",
      provider: "[Org Name]",
      year: "2024"
    },
    {
      title: "AdeyBloom: Final Year Project",
      provider: "University of Gondar",
      year: "2025",
      highlight: "Ranked 5th University-wide"
    },
    {
      title: "Full Stack Web Development",
      provider: "freeCodeCamp",
      year: "2022"
    }
  ];

  const education = [
    {
      degree: "BSc in Information Systems",
      institution: "University of Gondar",
      year: "2020 – 2025",
      honor: "Graduated with Great Distinction (Top 2 in Department)"
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
    <section id="certifications" className={`min-h-screen ${isDark ? 'bg-[#0D1117]' : 'bg-white'} py-20 px-6`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'} mb-4`}>
            Education & <span className="text-[#3B82F6]">Certifications</span>
          </h2>
          <p className={`text-lg ${isDark ? 'text-[#E6EDF3]/80' : 'text-gray-700'} max-w-2xl mx-auto`}>
            Academic excellence and continuous professional development through industry-recognized certifications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <AcademicCapIcon className="w-8 h-8 text-[#3B82F6]" />
              <h3 className={`text-2xl font-semibold ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'}`}>Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`${isDark ? 'bg-[#161B22] border-[#30363D] hover:border-[#3B82F6]/50' : 'bg-gray-50 border-gray-200 hover:border-[#3B82F6]/50'} rounded-xl p-8 border transition-all duration-300`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className={`text-2xl font-semibold ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'} mb-2`}>{edu.degree}</h4>
                      <p className="text-[#3B82F6] font-medium text-lg mb-2">{edu.institution}</p>
                      <p className={`${isDark ? 'text-[#E6EDF3]/80' : 'text-gray-700'} text-lg`}>{edu.year}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:text-right">
                      <div className={`inline-flex items-center gap-2 ${isDark ? 'bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/20' : 'bg-blue-50 text-blue-700 border-blue-200'} px-4 py-2 rounded-full border`}>
                        <TrophyIcon className="w-5 h-5" />
                        <span className="font-medium">{edu.honor}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <a
              href="https://drive.google.com/drive/folders/169BD0ekBB3WTfQW-hRBdJhNdHhfqVSu2?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 group mt-6"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Certificates
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <TrophyIcon className="w-8 h-8 text-[#3B82F6]" />
              <h3 className={`text-2xl font-semibold ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'}`}>Certifications</h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className={`${isDark ? 'bg-[#161B22] border-[#30363D] hover:border-[#3B82F6]/50 hover:shadow-[#3B82F6]/10' : 'bg-gray-50 border-gray-200 hover:border-[#3B82F6]/50 hover:shadow-blue-100'} rounded-xl p-6 border transition-all duration-300 group hover:shadow-xl`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[#3B82F6] text-sm font-semibold ${isDark ? 'bg-[#3B82F6]/10 border-[#3B82F6]/20' : 'bg-blue-50 border-blue-200'} px-3 py-1 rounded-full border`}>
                      {cert.year}
                    </span>
                    {cert.highlight && (
                      <div className="flex items-center gap-1">
                        <TrophyIcon className="w-4 h-4 text-yellow-400" />
                        <span className={`text-xs ${isDark ? 'text-[#E6EDF3]/70' : 'text-gray-600'}`}>Featured</span>
                      </div>
                    )}
                  </div>

                  <h4 className={`text-lg font-semibold ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'} mb-2 group-hover:text-[#3B82F6] transition-colors`}>
                    {cert.title}
                  </h4>
                  
                  <p className={`${isDark ? 'text-[#E6EDF3]/70' : 'text-gray-600'} text-sm mb-3`}>
                    {cert.provider}
                  </p>

                  {cert.highlight && (
                    <div className={`${isDark ? 'bg-[#3B82F6]/10 border-[#3B82F6]/20' : 'bg-blue-50 border-blue-200'} p-3 rounded-lg border mt-3`}>
                      <p className={`text-sm ${isDark ? 'text-[#3B82F6]' : 'text-blue-700'} font-medium`}>
                        🏆 {cert.highlight}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
