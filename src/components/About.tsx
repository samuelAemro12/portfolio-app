import { motion } from 'framer-motion';

const About = () => {
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
        </motion.div>

        {/* Professional Title & Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xl md:text-2xl text-[#E6EDF3] leading-relaxed max-w-4xl mx-auto">
            I'm a <span className="text-[#3B82F6] font-semibold">Full Stack Web Developer</span> with a frontend focus, 
            strong backend experience, and a growing interest in <span className="text-[#3B82F6] font-semibold">Machine Learning</span> and API integrations.
          </p>
        </motion.div>

        {/* What I Do */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-[#E6EDF3] mb-8 text-center">
            What I Do
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {whatIDo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0D1117] p-6 rounded-xl border border-[#30363D] hover:border-[#3B82F6]/50 transition-all duration-300 group"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-[#E6EDF3] mb-3 group-hover:text-[#3B82F6] transition-colors">
                  {item.title}
                </h4>
                <p className="text-[#E6EDF3]/80 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Technical Stack */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-[#E6EDF3] mb-6">
              Technical Stack
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-[#0D1117] border border-[#30363D] rounded-lg text-[#E6EDF3] hover:border-[#3B82F6]/50 hover:text-[#3B82F6] transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Career Goals */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-[#E6EDF3] mb-4">What I'm Looking For</h4>
              <p className="text-[#E6EDF3]/80 leading-relaxed">
                Currently seeking opportunities in <span className="text-[#3B82F6] font-medium">frontend engineering</span> or 
                <span className="text-[#3B82F6] font-medium"> full-stack roles</span> with ML/API integration challenges.
              </p>
            </div>

            {/* Personal Touch */}
            <div className="pt-6 border-t border-[#30363D]">
              <p className="text-[#E6EDF3]/70 italic">
                When I'm not coding, I enjoy reading sci-fi, working out, and testing weird Python scripts.
              </p>
            </div>
          </motion.div>

          {/* Career Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-[#E6EDF3] mb-8">
              Career Highlights
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#0D1117] p-6 rounded-xl border border-[#30363D] hover:border-[#3B82F6]/50 transition-all duration-300 text-center group"
                >
                  <div className="text-3xl font-bold text-[#3B82F6] mb-2 group-hover:scale-110 transition-transform">
                    {highlight.number}
                  </div>
                  <div className="text-[#E6EDF3] font-semibold mb-1">
                    {highlight.label}
                  </div>
                  <div className="text-[#E6EDF3]/60 text-sm">
                    {highlight.description}
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

