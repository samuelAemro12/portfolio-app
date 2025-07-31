import { motion } from 'framer-motion';
import { AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline';

const Certifications = () => {
  const certifications = [
    {
      title: "Machine Learning Engineer Nanodegree",
      provider: "Udacity",
      year: "2023",
      logo: "https://logos-world.net/wp-content/uploads/2021/11/Udacity-Logo.png",
      description: "Advanced machine learning algorithms, deep learning, and deployment strategies",
      skills: ["TensorFlow", "PyTorch", "MLOps", "Model Deployment"]
    },
    {
      title: "AWS Certified Solutions Architect",
      provider: "Amazon Web Services",
      year: "2023",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      description: "Cloud architecture design and implementation on AWS platform",
      skills: ["EC2", "S3", "Lambda", "CloudFormation"]
    },
    {
      title: "React Developer Certification",
      provider: "Meta",
      year: "2022",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      description: "Advanced React concepts, hooks, and modern development practices",
      skills: ["React", "Redux", "Context API", "Testing"]
    },
    {
      title: "Full Stack Web Development",
      provider: "freeCodeCamp",
      year: "2022",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png",
      description: "Comprehensive full-stack development curriculum",
      skills: ["HTML/CSS", "JavaScript", "Node.js", "MongoDB"]
    },
    {
      title: "Google Cloud Professional",
      provider: "Google Cloud",
      year: "2023",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
      description: "Cloud infrastructure and application development on GCP",
      skills: ["GKE", "Cloud Functions", "BigQuery", "Pub/Sub"]
    },
    {
      title: "Docker Certified Associate",
      provider: "Docker",
      year: "2022",
      logo: "https://logos-world.net/wp-content/uploads/2021/02/Docker-Logo.png",
      description: "Container orchestration and deployment strategies",
      skills: ["Docker", "Kubernetes", "Container Security", "CI/CD"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      year: "2019 - 2023",
      gpa: "3.8/4.0",
      description: "Specialized in Software Engineering and Data Structures",
      coursework: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering"]
    },
    {
      degree: "Associate Degree in Information Technology",
      institution: "Community College",
      year: "2017 - 2019",
      gpa: "3.9/4.0",
      description: "Foundation in programming and computer systems",
      coursework: ["Programming Fundamentals", "Web Development", "Network Security", "Database Design"]
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
            Continuous learning and professional development through formal education and industry certifications
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
                className="bg-[#161B22] rounded-xl p-6 border border-[#30363D] hover:border-[#3B82F6]/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-[#E6EDF3] mb-1">{edu.degree}</h4>
                    <p className="text-[#3B82F6] font-medium">{edu.institution}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-[#E6EDF3]/80">{edu.year}</p>
                    <p className="text-[#3B82F6] font-semibold">GPA: {edu.gpa}</p>
                  </div>
                </div>
                
                <p className="text-[#E6EDF3]/80 mb-4">{edu.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm rounded-full border border-[#3B82F6]/20"
                    >
                      {course}
                    </span>
                  ))}
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
          <div className="flex items-center gap-3 mb-8">
            <TrophyIcon className="w-8 h-8 text-[#3B82F6]" />
            <h3 className="text-2xl font-semibold text-[#E6EDF3]">Professional Certifications</h3>
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
                {/* Logo and Year */}
                <div className="flex items-center justify-between mb-4">
                  <img
                    src={cert.logo}
                    alt={cert.provider}
                    className="h-8 w-auto object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="text-[#3B82F6] text-sm font-semibold">{cert.year}</span>
                </div>

                {/* Title and Provider */}
                <h4 className="text-lg font-semibold text-[#E6EDF3] mb-2 group-hover:text-[#3B82F6] transition-colors">
                  {cert.title}
                </h4>
                <p className="text-[#E6EDF3]/60 text-sm mb-3">{cert.provider}</p>

                {/* Description */}
                <p className="text-[#E6EDF3]/80 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-xs rounded-full border border-[#3B82F6]/20"
                    >
                      {skill}
                    </span>
                  ))}
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
            Interested in working with a certified professional? Let's connect!
          </p>
          <a
            href="mailto:samuel@example.com"
            className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 group"
          >
            <AcademicCapIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            View Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;