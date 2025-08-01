import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../contexts/ThemeContext';

const Testimonials = () => {
  const { isDark } = useTheme();

  // Remove all useState and useEffect for theme

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "Samuel delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise made our project a huge success.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "StartupXYZ",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Working with Samuel was a game-changer for our startup. He built our entire frontend from scratch and delivered beyond our expectations.",
    },
    {
      name: "David Wilson",
      role: "Founder",
      company: "InnovateLab",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Samuel's full-stack development skills are outstanding. He seamlessly integrated our ML models with a beautiful, responsive frontend.",
    },
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
    <section className={`min-h-screen ${isDark ? 'bg-[#0D1117]' : 'bg-white'} py-20 px-6`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'} mb-4`}>
            Client <span className="text-[#3B82F6]">Testimonials</span>
          </h2>
          <p className={`text-lg ${isDark ? 'text-[#E6EDF3]/80' : 'text-gray-700'} max-w-2xl mx-auto`}>
            What clients say about working with me and the results we've achieved together
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`${isDark ? 'bg-[#161B22] border-[#30363D] hover:border-[#3B82F6]/50 hover:shadow-[#3B82F6]/10' : 'bg-gray-50 border-gray-200 hover:border-[#3B82F6]/50 hover:shadow-blue-100'} rounded-xl p-6 border transition-all duration-300 group hover:shadow-xl`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              <p className={`${isDark ? 'text-[#E6EDF3]/80' : 'text-gray-700'} leading-relaxed mb-6 italic`}>
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className={`font-semibold ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'}`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-sm ${isDark ? 'text-[#E6EDF3]/70' : 'text-gray-600'}`}>
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
