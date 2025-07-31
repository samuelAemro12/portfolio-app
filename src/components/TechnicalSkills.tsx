import { motion } from 'framer-motion';

const TechnicalSkills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: [
        { name: 'React', level: 95, experience: '3+ years' },
        { name: 'TypeScript', level: 90, experience: '2+ years' },
        { name: 'Next.js', level: 88, experience: '2+ years' },
        { name: 'Vue.js', level: 85, experience: '1+ year' },
        { name: 'Tailwind CSS', level: 92, experience: '2+ years' },
        { name: 'SASS/SCSS', level: 88, experience: '3+ years' }
      ]
    },
    {
      category: "Backend Development",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: [
        { name: 'Node.js', level: 90, experience: '3+ years' },
        { name: 'Express.js', level: 88, experience: '3+ years' },
        { name: 'Python', level: 85, experience: '2+ years' },
        { name: 'Django', level: 82, experience: '1+ year' },
        { name: 'GraphQL', level: 78, experience: '1+ year' },
        { name: 'REST APIs', level: 92, experience: '3+ years' }
      ]
    },
    {
      category: "Database & Cloud",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      skills: [
        { name: 'MongoDB', level: 88, experience: '3+ years' },
        { name: 'PostgreSQL', level: 85, experience: '2+ years' },
        { name: 'Redis', level: 80, experience: '1+ year' },
        { name: 'AWS', level: 78, experience: '2+ years' },
        { name: 'Docker', level: 82, experience: '2+ years' },
        { name: 'Firebase', level: 85, experience: '2+ years' }
      ]
    },
    {
      category: "Tools & Others",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: [
        { name: 'Git & GitHub', level: 95, experience: '3+ years' },
        { name: 'Jest/Testing', level: 85, experience: '2+ years' },
        { name: 'Webpack', level: 80, experience: '2+ years' },
        { name: 'Linux/Unix', level: 82, experience: '2+ years' },
        { name: 'Figma', level: 78, experience: '2+ years' },
        { name: 'Agile/Scrum', level: 88, experience: '3+ years' }
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023",
      status: "Active"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      year: "2022",
      status: "Active"
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      year: "2023",
      status: "Active"
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
    <section id="technical-skills" className="min-h-screen bg-[#0D1117] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E6EDF3] mb-4">
            Technical <span className="text-[#3B82F6]">Skills</span>
          </h2>
          <p className="text-lg text-[#E6EDF3]/80 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={cardVariants}
              className="bg-[#161B22] rounded-xl p-8 border border-[#30363D] hover:border-[#3B82F6]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center text-[#3B82F6]">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#E6EDF3]">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-[#E6EDF3] font-medium">{skill.name}</span>
                        <span className="text-[#E6EDF3]/60 text-sm ml-2">({skill.experience})</span>
                      </div>
                      <span className="text-[#3B82F6] text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#0D1117] rounded-full h-2 border border-[#30363D]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] h-2 rounded-full relative overflow-hidden"
                      >
                        <motion.div
                          initial={{ x: '-100%' }}
                          whileInView={{ x: '100%' }}
                          transition={{ duration: 1.5, delay: skillIndex * 0.1 + 0.5 }}
                          viewport={{ once: true }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-[#E6EDF3] mb-8">
            Certifications & Achievements
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#161B22] p-6 rounded-xl border border-[#30363D] hover:border-[#3B82F6]/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center text-[#3B82F6] mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-[#E6EDF3] mb-2 group-hover:text-[#3B82F6] transition-colors">
                  {cert.name}
                </h4>
                <p className="text-[#E6EDF3]/80 text-sm mb-2">{cert.issuer}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#E6EDF3]/60 text-sm">{cert.year}</span>
                  <span className="text-green-400 text-xs px-2 py-1 bg-green-400/10 rounded-full">
                    {cert.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSkills;