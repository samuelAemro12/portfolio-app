import { motion } from 'framer-motion';
import { AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline';

const Certifications = () => {
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
        staggerChildren: 0.1
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
    <section id="certifications" className="min-h-screen bg-[#0D1117] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E6EDF3] mb-4">
            Education & <span className="text-[#3B82F6]">Certifications</span>
          </h2>
          <p className="text-lg text-[#E6EDF3]/80 max-w-2xl mx-auto">
            Academic excellence and continuous professional development through industry-recognized certifications
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <AcademicCapIcon className="w-8 h-8 text-[#3B82F6]" />
            <h3 className="text-2xl font-semibold text-[#E6EDF3]">Education</h3>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-[#161B22] rounded-xl p-8 border border-[#30363D] hover:border-[#3B82F6]/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="text-2xl font-semibold text-[#E6EDF3] mb-2">{edu.degree}</h4>
                    <p className="text-[#3B82F6] font-medium text-lg mb-2">{edu.institution}</p>
                    <p className="text-[#E6EDF3]/80 text-lg">{edu.year}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:text-right">
                    <div className="inline-flex items-center gap-2 bg-[#3B82F6]/10 text-[#3B82F6] px-4 py-2 rounded-full border border-[#3B82F6]/20">
                      <TrophyIcon className="w-5 h-5" />
                      <span className="font-semibold">{edu.honor}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <TrophyIcon className="w-8 h-8 text-[#3B82F6]" />
              <h3 className="text-2xl font-semibold text-[#E6EDF3]">Professional Certifications</h3>
            </div>
            
            {/* See Certifications Button */}
            <a
              href="https://drive.google.com/drive/folders/169BD0ekBB3WTfQW-hRBdJhNdHhfqVSu2?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              See Certifications
            </a>
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
                className="bg-[#161B22] rounded-xl p-6 border border-[#30363D] hover:border-[#3B82F6]/50 transition-all duration-300 group hover:shadow-xl hover:shadow-[#3B82F6]/10"
              >
                {/* Year Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#3B82F6] text-sm font-semibold bg-[#3B82F6]/10 px-3 py-1 rounded-full border border-[#3B82F6]/20">
                    {cert.year}
                  </span>
                  {cert.highlight && (
                    <div className="flex items-center gap-1">
                      <TrophyIcon className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400 text-xs font-medium">Featured</span>
                    </div>
                  )}
                </div>

                {/* Title and Provider */}
                <h4 className="text-lg font-semibold text-[#E6EDF3] mb-2 group-hover:text-[#3B82F6] transition-colors">
                  {cert.title}
                </h4>
                <p className="text-[#E6EDF3]/60 text-sm mb-3">{cert.provider}</p>

                {/* Highlight if exists */}
                {cert.highlight && (
                  <div className="mt-4 p-3 bg-[#3B82F6]/5 rounded-lg border border-[#3B82F6]/20">
                    <p className="text-[#3B82F6] text-sm font-medium">{cert.highlight}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
