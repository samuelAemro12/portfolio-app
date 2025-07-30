import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 88 },
    { name: 'Python', level: 82 },
    { name: 'MongoDB', level: 80 },
    { name: 'PostgreSQL', level: 78 },
    { name: 'AWS', level: 75 },
    { name: 'Docker', level: 70 }
  ];

  return (
    <section id="about" className="min-h-screen bg-[#161B22] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E6EDF3] mb-4">
            About <span className="text-[#3B82F6]">Me</span>
          </h2>
          <p className="text-lg text-[#E6EDF3]/80 max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-[#E6EDF3] mb-4">
              Full Stack Developer & Problem Solver
            </h3>
            
            <p className="text-[#E6EDF3]/80 leading-relaxed">
              I'm a passionate full-stack developer with over 3 years of experience building 
              modern web applications. I specialize in React, Node.js, and cloud technologies, 
              with a strong focus on creating scalable and user-friendly solutions.
            </p>
            
            <p className="text-[#E6EDF3]/80 leading-relaxed">
              My journey in software development started with a curiosity about how things work 
              behind the scenes. Today, I enjoy tackling complex problems and turning ideas into 
              reality through clean, efficient code.
            </p>
            
            <p className="text-[#E6EDF3]/80 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-[#0D1117] px-4 py-2 rounded-lg border border-[#30363D]">
                <span className="text-[#3B82F6] font-semibold">3+</span>
                <span className="text-[#E6EDF3]/80 ml-2">Years Experience</span>
              </div>
              <div className="bg-[#0D1117] px-4 py-2 rounded-lg border border-[#30363D]">
                <span className="text-[#3B82F6] font-semibold">50+</span>
                <span className="text-[#E6EDF3]/80 ml-2">Projects Completed</span>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-[#E6EDF3] mb-6">
              Technical Skills
            </h3>
            
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[#E6EDF3] font-medium">{skill.name}</span>
                    <span className="text-[#3B82F6] text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#0D1117] rounded-full h-2 border border-[#30363D]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;