import { motion } from 'framer-motion';
import { CodeBracketIcon, TrophyIcon, ClockIcon, UsersIcon, StarIcon } from '@heroicons/react/24/outline';

const OpenSource = () => {
  const openSourceContributions = [
    {
      project: "React Router",
      description: "Added TypeScript support for nested route configurations and improved error handling",
      repository: "https://github.com/remix-run/react-router",
      prNumber: "#10234",
      status: "Merged",
      impact: "Used by 15M+ developers",
      techStack: ["TypeScript", "React", "Jest"],
      contributions: [
        "Fixed critical bug in nested routing",
        "Added comprehensive TypeScript definitions",
        "Improved documentation with examples"
      ]
    },
    {
      project: "Next.js",
      description: "Optimized image loading performance and added support for WebP format in production builds",
      repository: "https://github.com/vercel/next.js",
      prNumber: "#45678",
      status: "Merged",
      impact: "20% faster image loading",
      techStack: ["JavaScript", "Node.js", "Webpack"],
      contributions: [
        "Implemented WebP format support",
        "Reduced bundle size by 15%",
        "Added performance benchmarks"
      ]
    },
    {
      project: "Material-UI",
      description: "Created new accessibility features for form components and improved screen reader support",
      repository: "https://github.com/mui/material-ui",
      prNumber: "#28901",
      status: "Under Review",
      impact: "Better accessibility for 5M+ users",
      techStack: ["React", "TypeScript", "ARIA"],
      contributions: [
        "Enhanced ARIA attributes",
        "Added keyboard navigation",
        "Created accessibility tests"
      ]
    },
    {
      project: "Tailwind CSS",
      description: "Added new utility classes for container queries and improved responsive design capabilities",
      repository: "https://github.com/tailwindlabs/tailwindcss",
      prNumber: "#12345",
      status: "Merged",
      impact: "New responsive features",
      techStack: ["CSS", "PostCSS", "JavaScript"],
      contributions: [
        "Implemented container query utilities",
        "Updated documentation",
        "Added usage examples"
      ]
    }
  ];

  const hackathons = [
    {
      name: "TechCrunch Disrupt Hackathon",
      year: "2023",
      duration: "48 hours",
      placement: "1st Place",
      prize: "$10,000",
      project: "EcoTrack",
      description: "AI-powered carbon footprint tracker that helps users reduce their environmental impact through personalized recommendations",
      teamSize: 4,
      role: "Full-Stack Developer & Team Lead",
      techStack: ["React Native", "Python", "TensorFlow", "Firebase"],
      features: [
        "Real-time carbon footprint calculation",
        "AI-powered recommendations",
        "Social sharing and challenges",
        "Integration with IoT devices"
      ],
      achievements: [
        "Built complete MVP in 48 hours",
        "Integrated 3 different APIs",
        "Achieved 95% user satisfaction in testing",
        "Secured follow-up investor meetings"
      ]
    },
    {
      name: "NASA Space Apps Challenge",
      year: "2023",
      duration: "48 hours",
      placement: "2nd Place",
      prize: "Global Recognition",
      project: "Mars Weather Station",
      description: "Interactive visualization platform for Mars weather data with predictive analytics for mission planning",
      teamSize: 5,
      role: "Frontend Developer",
      techStack: ["React", "D3.js", "Python", "NASA APIs"],
      features: [
        "Real-time Mars weather visualization",
        "Predictive weather modeling",
        "Mission planning tools",
        "3D terrain mapping"
      ],
      achievements: [
        "Processed 10GB+ of NASA data",
        "Created stunning 3D visualizations",
        "Built predictive ML models",
        "Featured on NASA's official blog"
      ]
    },
    {
      name: "AngelHack Global",
      year: "2022",
      duration: "24 hours",
      placement: "3rd Place",
      prize: "$2,500",
      project: "HealthBridge",
      description: "Telemedicine platform connecting rural patients with urban doctors through AI-assisted diagnosis",
      teamSize: 3,
      role: "Full-Stack Developer",
      techStack: ["Vue.js", "Node.js", "WebRTC", "MongoDB"],
      features: [
        "Video consultation platform",
        "AI symptom checker",
        "Electronic health records",
        "Multi-language support"
      ],
      achievements: [
        "Implemented real-time video calls",
        "Built AI diagnosis assistant",
        "Created secure patient data system",
        "Designed for low-bandwidth areas"
      ]
    },
    {
      name: "MLH Local Hack Day",
      year: "2022",
      duration: "12 hours",
      placement: "Winner",
      prize: "Best Use of API",
      project: "CodeMentor AI",
      description: "AI-powered code review tool that provides instant feedback and suggestions for junior developers",
      teamSize: 2,
      role: "Solo Developer",
      techStack: ["Python", "OpenAI API", "Flask", "React"],
      features: [
        "Automated code review",
        "Learning recommendations",
        "Performance optimization tips",
        "Integration with GitHub"
      ],
      achievements: [
        "Built working prototype in 12 hours",
        "Integrated OpenAI GPT-3",
        "Created intuitive UI/UX",
        "Received mentor recognition"
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
    <section id="opensource" className="min-h-screen bg-[#0D1117] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E6EDF3] mb-4">
            Open Source & <span className="text-[#3B82F6]">Competitions</span>
          </h2>
          <p className="text-lg text-[#E6EDF3]/80 max-w-3xl mx-auto">
            Contributing to the developer community through open source projects and showcasing innovation under pressure in hackathons
          </p>
        </motion.div>

        {/* Open Source Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <CodeBracketIcon className="w-8 h-8 text-[#3B82F6]" />
            <h3 className="text-2xl font-semibold text-[#E6EDF3]">Open Source Contributions</h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {openSourceContributions.map((contribution, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-[#161B22] rounded-xl p-6 border border-[#30363D] hover:border-[#3B82F6]/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-[#E6EDF3] group-hover:text-[#3B82F6] transition-colors">
                      {contribution.project}
                    </h4>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm text-[#3B82F6]">{contribution.prNumber}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        contribution.status === 'Merged' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {contribution.status}
                      </span>
                    </div>
                  </div>
                  <StarIcon className="w-5 h-5 text-[#3B82F6]" />
                </div>

                <p className="text-[#E6EDF3]/80 mb-4 leading-relaxed">
                  {contribution.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm font-medium text-[#3B82F6] mb-2">Impact: {contribution.impact}</p>
                  <ul className="space-y-1">
                    {contribution.contributions.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-[#E6EDF3]/70 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {contribution.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-xs rounded-full border border-[#3B82F6]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={contribution.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#3B82F6] hover:text-[#2563EB] transition-colors text-sm font-medium"
                >
                  View Repository
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hackathons & Competitions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <TrophyIcon className="w-8 h-8 text-[#3B82F6]" />
            <h3 className="text-2xl font-semibold text-[#E6EDF3]">Hackathons & Competitions</h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-[#161B22] rounded-xl p-8 border border-[#30363D] hover:border-[#3B82F6]/50 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left Column - Event Info */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <TrophyIcon className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-400 font-semibold">{hackathon.placement}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-[#E6EDF3] mb-2">{hackathon.name}</h4>
                    <div className="space-y-2 text-sm text-[#E6EDF3]/80">
                      <div className="flex items-center gap-2">
                        <ClockIcon className="w-4 h-4" />
                        {hackathon.duration} • {hackathon.year}
                      </div>
                      <div className="flex items-center gap-2">
                        <UsersIcon className="w-4 h-4" />
                        Team of {hackathon.teamSize} • {hackathon.role}
                      </div>
                      <div className="text-[#3B82F6] font-medium">{hackathon.prize}</div>
                    </div>
                  </div>

                  {/* Middle Column - Project Details */}
                  <div>
                    <h5 className="text-lg font-semibold text-[#3B82F6] mb-2">{hackathon.project}</h5>
                    <p className="text-[#E6EDF3]/80 mb-4 leading-relaxed">{hackathon.description}</p>
                    
                    <div className="mb-4">
                      <h6 className="text-sm font-medium text-[#E6EDF3] mb-2">Key Features:</h6>
                      <ul className="space-y-1">
                        {hackathon.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-[#E6EDF3]/70 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {hackathon.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-xs rounded-full border border-[#3B82F6]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Achievements */}
                  <div>
                    <h6 className="text-sm font-medium text-[#E6EDF3] mb-3">Achievements:</h6>
                    <ul className="space-y-2">
                      {hackathon.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-sm text-[#E6EDF3]/80 flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
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
          <p className="text-[#E6EDF3]/80 mb-6">
            Want to collaborate on open source projects or discuss hackathon experiences?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/samuelAemro12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#21262D] hover:bg-[#30363D] text-[#E6EDF3] px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-[#30363D] group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View GitHub Profile
            </a>
            <a
              href="mailto:samuel@example.com"
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