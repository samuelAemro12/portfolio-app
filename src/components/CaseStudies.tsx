import { motion } from 'framer-motion';
import { ChevronRightIcon, CodeBracketIcon, CogIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-Commerce Platform Redesign",
      client: "TechCorp Inc.",
      duration: "6 months",
      role: "Lead Full-Stack Developer",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      overview: "Complete redesign and rebuild of a legacy e-commerce platform serving 100K+ users, resulting in 40% increase in conversion rates and 60% improvement in page load times.",
      challenge: {
        title: "The Challenge",
        description: "The existing platform was built on outdated technology, had poor performance, and couldn't handle peak traffic loads during sales events.",
        problems: [
          "Legacy PHP codebase with no modern framework",
          "Database queries taking 3-5 seconds",
          "Mobile experience causing 70% bounce rate",
          "No real-time inventory management"
        ]
      },
      solution: {
        title: "My Approach",
        description: "I led a complete architectural overhaul using modern technologies while ensuring zero downtime during migration.",
        steps: [
          {
            phase: "Research & Planning",
            description: "Conducted user research, analyzed performance bottlenecks, and designed new system architecture",
            duration: "2 weeks"
          },
          {
            phase: "Backend Migration",
            description: "Built new REST APIs using Node.js and Express, implemented Redis caching, and optimized database queries",
            duration: "8 weeks"
          },
          {
            phase: "Frontend Rebuild",
            description: "Created responsive React application with TypeScript, implemented real-time features using WebSockets",
            duration: "10 weeks"
          },
          {
            phase: "Testing & Deployment",
            description: "Comprehensive testing, gradual rollout with A/B testing, and performance monitoring setup",
            duration: "4 weeks"
          }
        ]
      },
      techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker"],
      results: [
        { metric: "Page Load Time", before: "4.2s", after: "1.1s", improvement: "74%" },
        { metric: "Conversion Rate", before: "2.3%", after: "3.2%", improvement: "40%" },
        { metric: "Mobile Bounce Rate", before: "70%", after: "35%", improvement: "50%" },
        { metric: "Server Response Time", before: "800ms", after: "120ms", improvement: "85%" }
      ],
      learnings: [
        "Importance of gradual migration strategies for zero-downtime deployments",
        "Real-time features significantly improve user engagement",
        "Performance optimization should be considered from day one, not as an afterthought"
      ]
    },
    {
      title: "Real-Time Analytics Dashboard",
      client: "DataFlow Analytics",
      duration: "4 months",
      role: "Full-Stack Developer & System Architect",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      overview: "Built a real-time analytics dashboard processing 1M+ events per minute, providing instant insights for business decision-making across multiple data sources.",
      challenge: {
        title: "The Challenge",
        description: "The client needed a system to process massive amounts of real-time data from multiple sources and present actionable insights instantly.",
        problems: [
          "Processing 1M+ events per minute from various APIs",
          "Real-time visualization of complex data relationships",
          "Scalable architecture for growing data volume",
          "Sub-second query response times required"
        ]
      },
      solution: {
        title: "My Approach",
        description: "Designed a microservices architecture with event-driven processing and real-time data streaming.",
        steps: [
          {
            phase: "Architecture Design",
            description: "Designed event-driven microservices architecture with Apache Kafka for data streaming",
            duration: "1 week"
          },
          {
            phase: "Data Pipeline",
            description: "Built data ingestion services, implemented stream processing with Apache Kafka, and set up time-series database",
            duration: "6 weeks"
          },
          {
            phase: "Dashboard Development",
            description: "Created interactive dashboard with React and D3.js, implemented WebSocket connections for real-time updates",
            duration: "8 weeks"
          },
          {
            phase: "Optimization & Scaling",
            description: "Performance tuning, horizontal scaling setup, and comprehensive monitoring implementation",
            duration: "3 weeks"
          }
        ]
      },
      techStack: ["React", "D3.js", "Node.js", "Apache Kafka", "InfluxDB", "Docker", "Kubernetes", "AWS"],
      results: [
        { metric: "Data Processing Speed", before: "5 min delay", after: "Real-time", improvement: "100%" },
        { metric: "Query Response Time", before: "3-5s", after: "200ms", improvement: "95%" },
        { metric: "System Uptime", before: "94%", after: "99.9%", improvement: "6%" },
        { metric: "Concurrent Users", before: "50", after: "500+", improvement: "900%" }
      ],
      learnings: [
        "Event-driven architecture is crucial for handling high-volume real-time data",
        "Proper database selection (time-series) can dramatically improve query performance",
        "WebSocket connections need careful management to prevent memory leaks at scale"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const caseVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="case-studies" className="min-h-screen bg-[#161B22] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E6EDF3] mb-4">
            Case <span className="text-[#3B82F6]">Studies</span>
          </h2>
          <p className="text-lg text-[#E6EDF3]/80 max-w-3xl mx-auto">
            Deep dives into complex projects showcasing my problem-solving approach, technical decisions, and the impact of my solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-20"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={caseVariants}
              className="bg-[#0D1117] rounded-2xl overflow-hidden border border-[#30363D] hover:border-[#3B82F6]/50 transition-all duration-300"
            >
              {/* Header */}
              <div className="relative">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#E6EDF3] mb-2">
                    {study.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-[#E6EDF3]/80">
                    <span>Client: {study.client}</span>
                    <span>Duration: {study.duration}</span>
                    <span>Role: {study.role}</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Overview */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-[#E6EDF3] mb-3">Project Overview</h4>
                  <p className="text-[#E6EDF3]/80 leading-relaxed">{study.overview}</p>
                </div>

                {/* Challenge */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <CogIcon className="w-6 h-6 text-[#3B82F6]" />
                    <h4 className="text-xl font-semibold text-[#E6EDF3]">{study.challenge.title}</h4>
                  </div>
                  <p className="text-[#E6EDF3]/80 mb-4">{study.challenge.description}</p>
                  <ul className="space-y-2">
                    {study.challenge.problems.map((problem, problemIndex) => (
                      <li key={problemIndex} className="flex items-start gap-3 text-[#E6EDF3]/70">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        {problem}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <CodeBracketIcon className="w-6 h-6 text-[#3B82F6]" />
                    <h4 className="text-xl font-semibold text-[#E6EDF3]">{study.solution.title}</h4>
                  </div>
                  <p className="text-[#E6EDF3]/80 mb-6">{study.solution.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {study.solution.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="bg-[#161B22] rounded-lg p-4 border border-[#30363D]">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-semibold text-[#3B82F6]">{step.phase}</h5>
                          <span className="text-xs text-[#E6EDF3]/60">{step.duration}</span>
                        </div>
                        <p className="text-sm text-[#E6EDF3]/80">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-[#E6EDF3] mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm rounded-full border border-[#3B82F6]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <ChartBarIcon className="w-6 h-6 text-[#3B82F6]" />
                    <h4 className="text-xl font-semibold text-[#E6EDF3]">Results & Impact</h4>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="bg-[#161B22] rounded-lg p-4 border border-[#30363D] text-center">
                        <h5 className="text-sm font-medium text-[#E6EDF3]/80 mb-2">{result.metric}</h5>
                        <div className="space-y-1">
                          <div className="text-xs text-[#E6EDF3]/60">Before: {result.before}</div>
                          <div className="text-xs text-[#E6EDF3]/60">After: {result.after}</div>
                          <div className="text-lg font-bold text-green-400">+{result.improvement}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Learnings */}
                <div>
                  <h4 className="text-lg font-semibold text-[#E6EDF3] mb-3">Key Learnings</h4>
                  <ul className="space-y-2">
                    {study.learnings.map((learning, learningIndex) => (
                      <li key={learningIndex} className="flex items-start gap-3 text-[#E6EDF3]/80">
                        <ChevronRightIcon className="w-4 h-4 text-[#3B82F6] mt-1 flex-shrink-0" />
                        {learning}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
            Interested in discussing your complex project challenges? Let's explore solutions together.
          </p>
          <a
            href="mailto:samuel@example.com"
            className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 group"
          >
            <CodeBracketIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;