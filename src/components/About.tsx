import { motion } from 'framer-motion';

const About = () => {
  const highlights = [
    {
      number: "3+",
      label: "Years Experience",
      description: "Building modern web applications"
    },
    {
      number: "50+",
      label: "Projects Completed",
      description: "From startups to enterprise solutions"
    },
    {
      number: "15+",
      label: "Technologies Mastered",
      description: "Full-stack development expertise"
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      description: "Delivering quality solutions on time"
    }
  ];

  const philosophyPoints = [
    {
      title: "Clean Code Philosophy",
      description: "I believe in writing code that's not just functional, but readable, maintainable, and scalable. Every line should tell a story."
    },
    {
      title: "User-Centric Approach",
      description: "Technology should serve people, not the other way around. I prioritize user experience in every decision I make."
    },
    {
      title: "Continuous Learning",
      description: "The tech world evolves rapidly, and so do I. I'm constantly exploring new technologies and best practices."
    },
    {
      title: "Collaborative Spirit",
      description: "Great software is built by great teams. I thrive in collaborative environments and believe in knowledge sharing."
    }
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
            Passionate developer with a love for creating innovative solutions that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-[#E6EDF3] mb-6">
              My Journey as a Developer
            </h3>
            
            <p className="text-[#E6EDF3]/80 leading-relaxed">
              My journey into software development began with a simple curiosity about how websites work. 
              What started as tinkering with HTML and CSS quickly evolved into a deep passion for creating 
              digital experiences that solve real-world problems.
            </p>
            
            <p className="text-[#E6EDF3]/80 leading-relaxed">
              Over the past 3+ years, I've had the privilege of working with startups, established companies, 
              and individual clients, helping them bring their visions to life through code. Each project has 
              taught me something new and reinforced my belief that technology should be accessible, intuitive, 
              and impactful.
            </p>
            
            <p className="text-[#E6EDF3]/80 leading-relaxed">
              Based in Addis Ababa, Ethiopia, I'm passionate about contributing to the growing tech ecosystem 
              in Africa while collaborating with clients and teams worldwide. When I'm not coding, you'll find 
              me exploring new technologies, mentoring aspiring developers, or contributing to open-source projects.
            </p>

            <div className="pt-6">
              <h4 className="text-lg font-semibold text-[#E6EDF3] mb-4">Core Strengths</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#3B82F6] rounded-full"></div>
                  <span className="text-[#E6EDF3]/80 text-sm">Problem Solving</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#3B82F6] rounded-full"></div>
                  <span className="text-[#E6EDF3]/80 text-sm">Team Leadership</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#3B82F6] rounded-full"></div>
                  <span className="text-[#E6EDF3]/80 text-sm">Quick Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#3B82F6] rounded-full"></div>
                  <span className="text-[#E6EDF3]/80 text-sm">Communication</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#3B82F6] rounded-full"></div>
                  <span className="text-[#E6EDF3]/80 text-sm">Attention to Detail</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#3B82F6] rounded-full"></div>
                  <span className="text-[#E6EDF3]/80 text-sm">Adaptability</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
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
          </motion.div>
        </div>

        {/* Development Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-[#E6EDF3] mb-8 text-center">
            My Development Philosophy
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {philosophyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0D1117] p-6 rounded-xl border border-[#30363D] hover:border-[#3B82F6]/50 transition-all duration-300 group"
              >
                <h4 className="text-lg font-semibold text-[#E6EDF3] mb-3 group-hover:text-[#3B82F6] transition-colors">
                  {point.title}
                </h4>
                <p className="text-[#E6EDF3]/80 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

