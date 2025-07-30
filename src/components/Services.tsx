import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Next.js, and TypeScript for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Cross-browser Compatibility"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: "Backend Development",
      description: "Robust server-side solutions using Node.js, Python, and cloud services to power your applications with scalable architecture.",
      features: ["API Development", "Database Design", "Cloud Integration", "Security Implementation"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Mobile Development",
      description: "Cross-platform mobile applications using React Native and modern frameworks to reach users on both iOS and Android.",
      features: ["Cross-platform Apps", "Native Performance", "App Store Deployment", "Push Notifications"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality to create engaging and intuitive user experiences.",
      features: ["Wireframing", "Prototyping", "User Research", "Design Systems"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Consulting",
      description: "Technical consulting and code reviews to help optimize your existing projects and guide technology decisions.",
      features: ["Code Review", "Architecture Planning", "Technology Selection", "Performance Optimization"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support to keep your applications running smoothly and securely.",
      features: ["Bug Fixes", "Security Updates", "Feature Enhancements", "24/7 Support"]
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
    <section id="services" className="min-h-screen bg-[#161B22] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E6EDF3] mb-4">
            My <span className="text-[#3B82F6]">Services</span>
          </h2>
          <p className="text-lg text-[#E6EDF3]/80 max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life with cutting-edge technology
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-[#0D1117] rounded-xl p-6 border border-[#30363D] hover:border-[#3B82F6]/50 transition-all duration-300 group hover:shadow-xl hover:shadow-[#3B82F6]/10"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#3B82F6]/20 transition-colors">
                <div className="text-[#3B82F6] group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#E6EDF3] mb-3 group-hover:text-[#3B82F6] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#E6EDF3]/80 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-[#E6EDF3]/70">
                    <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
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
            Ready to start your project? Let's discuss how I can help you achieve your goals.
          </p>
          <a
            href="mailto:samuel@example.com"
            className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;