import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../contexts/ThemeContext';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Dr. Worku Abebe",
      role: "Dean, College of Informatics",
      company: "University of Gondar",
      content: "He demonstrates strong software development skills, especially in web design with modern frameworks. His portfolio reflects solid technical knowledge and creative thinking.",
      rating: 5
    },
    {
      name: "Eshete Gizachew Addisu",
      role: "Department Head",
      company: "University of Gondar",
      content: "In my classes, he showed exceptional programming aptitude, attention to detail, and the ability to understand and implement core software engineering concepts.",
      rating: 5
    },
    {
      name: "Gashaw D. Wubneh",
      role: "Academic Advisor & Instructor",
      company: "University of Gondar",
      content: "His ability to handle pressure situations and come out on top is extremely commendable.",
      rating: 5
    },
    {
      name: "Alexander Takele",
      role: "ML Instructor",
      company: "University of Gondar",
      content: "His full-stack expertise with the MERN stack enables him to build and deploy complete data-driven applications.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`min-h-screen ${isDark ? 'bg-[#0D1117]' : 'bg-white'} py-12 px-6`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'} mb-4`}>
             <span className="text-[#3B82F6]">Testimonials</span>
          </h2>
          <p className={`text-lg ${isDark ? 'text-[#E6EDF3]/80' : 'text-gray-700'} max-w-2xl mx-auto`}>
            What clients say about working with me and the results we've achieved together
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 ${isDark ? 'bg-[#161B22] hover:bg-[#21262D] text-[#E6EDF3] border-[#30363D]' : 'bg-white hover:bg-gray-50 text-gray-900 border-gray-200'} p-3 rounded-full border shadow-lg transition-all duration-300 hover:scale-110`}
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 ${isDark ? 'bg-[#161B22] hover:bg-[#21262D] text-[#E6EDF3] border-[#30363D]' : 'bg-white hover:bg-gray-50 text-gray-900 border-gray-200'} p-3 rounded-full border shadow-lg transition-all duration-300 hover:scale-110`}
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`${isDark ? 'bg-[#161B22] border-[#30363D]' : 'bg-gray-50 border-gray-200'} rounded-2xl p-8 md:p-12 border shadow-xl text-center max-w-3xl mx-auto`}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className={`text-xl md:text-2xl ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'} leading-relaxed mb-8 italic font-light`}>
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className={`w-16 h-16 rounded-full ${isDark ? 'bg-[#3B82F6]/20' : 'bg-blue-100'} flex items-center justify-center`}>
                  <span className={`text-xl font-bold ${isDark ? 'text-[#3B82F6]' : 'text-blue-600'}`}>
                    {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <div className="text-left">
                  <h4 className={`text-lg font-semibold ${isDark ? 'text-[#E6EDF3]' : 'text-gray-900'}`}>
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className={`${isDark ? 'text-[#E6EDF3]/70' : 'text-gray-600'}`}>
                    {testimonials[currentIndex].role}
                  </p>
                  <p className={`text-sm ${isDark ? 'text-[#E6EDF3]/60' : 'text-gray-500'}`}>
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#3B82F6] scale-125' 
                    : isDark ? 'bg-[#30363D] hover:bg-[#3B82F6]/50' : 'bg-gray-300 hover:bg-[#3B82F6]/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
