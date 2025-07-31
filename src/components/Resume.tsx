import { motion } from 'framer-motion';
import { 
  DocumentArrowDownIcon, 
  EyeIcon, 
  UserIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const Resume = () => {
  const resumeStats = [
    {
      icon: <BriefcaseIcon className="w-6 h-6" />,
      label: "Years Experience",
      value: "3+"
    },
    {
      icon: <StarIcon className="w-6 h-6" />,
      label: "Projects Completed",
      value: "50+"
    },
    {
      icon: <AcademicCapIcon className="w-6 h-6" />,
      label: "Certifications",
      value: "5+"
    },
    {
      icon: <UserIcon className="w-6 h-6" />,
      label: "Happy Clients",
      value: "25+"
    }
  ];

  const resumeHighlights = [
    "Full-Stack Development Expertise",
    "Modern JavaScript Frameworks",
    "Cloud & DevOps Experience", 
    "Open Source Contributions",
    "Team Leadership Skills",
    "Agile Development Practices"
  ];

  const professionalLinks = [
    {
      name: "LinkedIn Profile",
      description: "Connect with me professionally",
      url: "https://linkedin.com/in/samuelaemro",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      buttonText: "View Profile",
      buttonStyle: "bg-[#0077B5] hover:bg-[#005885] text-white"
    },
    {
      name: "GitHub Portfolio",
      description: "Explore my code repositories",
      url: "https://github.com/samuelAemro12",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      buttonText: "View Code",
      buttonStyle: "bg-[#24292e] hover:bg-[#1a1e22] text-white"
    }
  ];

  return (
    <section id="resume" className="min-h-screen bg-[#161B22] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E6EDF3] mb-4">
            My <span className="text-[#3B82F6]">Resume</span>
          </h2>
          <p className="text-lg text-[#E6EDF3]/80 max-w-3xl mx-auto">
            Download my complete resume or connect with me on professional platforms to learn more about my experience and skills
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Resume Preview & Download */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-[#0D1117] rounded-2xl p-8 border border-[#30363D] hover:border-[#3B82F6]/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#3B82F6]/10 rounded-xl flex items-center justify-center">
                  <DocumentArrowDownIcon className="w-8 h-8 text-[#3B82F6]" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#E6EDF3] mb-2">
                    Professional Resume
                  </h3>
                  <p className="text-[#E6EDF3]/80">
                    Complete overview of my experience, skills, and achievements
                  </p>
                </div>
              </div>

              {/* Resume Highlights */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-[#E6EDF3] mb-4">What's Inside:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {resumeHighlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-2 h-2 bg-[#3B82F6] rounded-full flex-shrink-0"></div>
                      <span className="text-[#E6EDF3]/80 text-sm">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/resume.pdf"
                  download="Samuel_Aemro_Resume.pdf"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 group"
                >
                  <DocumentArrowDownIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Download Resume
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#21262D] text-[#E6EDF3] px-6 py-4 rounded-lg font-semibold transition-all duration-300 border border-[#30363D] hover:border-[#3B82F6]/50 group"
                >
                  <EyeIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Preview Online
                </a>
              </div>

              <p className="text-[#E6EDF3]/60 text-sm mt-4 text-center">
                Last updated: December 2024 • PDF Format • 2 pages
              </p>
            </div>
          </motion.div>

          {/* Professional Stats & Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {resumeStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#0D1117] p-6 rounded-xl border border-[#30363D] hover:border-[#3B82F6]/50 transition-all duration-300 text-center group"
                >
                  <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center text-[#3B82F6] mx-auto mb-3 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-[#3B82F6] mb-1">{stat.value}</div>
                  <div className="text-[#E6EDF3]/80 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Professional Links */}
            <div className="space-y-4">
              {professionalLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-[#0D1117] rounded-xl p-6 border border-[#30363D] hover:border-[#3B82F6]/50 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center text-[#3B82F6] group-hover:scale-110 transition-transform">
                        {link.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#E6EDF3] group-hover:text-[#3B82F6] transition-colors">
                          {link.name}
                        </h4>
                        <p className="text-[#E6EDF3]/80 text-sm">{link.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-full ${link.buttonStyle} group/btn`}
                  >
                    {link.buttonText}
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center bg-[#0D1117] rounded-2xl p-8 border border-[#30363D]"
        >
          <h3 className="text-2xl font-semibold text-[#E6EDF3] mb-4">
            Ready to Work Together?
          </h3>
          <p className="text-[#E6EDF3]/80 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:samuel@example.com"
              className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </a>
            <a
              href="tel:+251-902329031"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-[#21262D] text-[#E6EDF3] px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-[#30363D] hover:border-[#3B82F6]/50 group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Schedule Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;