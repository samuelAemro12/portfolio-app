import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-[#161B22] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E6EDF3] mb-4">
            Get In <span className="text-[#3B82F6]">Touch</span>
          </h2>
          <p className="text-lg text-[#E6EDF3]/80 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#0D1117] rounded-2xl p-8 border border-[#30363D] max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#E6EDF3] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-[#161B22] border rounded-lg text-[#E6EDF3] placeholder-[#E6EDF3]/50 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition-colors ${
                    errors.name ? 'border-red-500' : 'border-[#30363D] focus:border-[#3B82F6]'
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#E6EDF3] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-[#161B22] border rounded-lg text-[#E6EDF3] placeholder-[#E6EDF3]/50 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition-colors ${
                    errors.email ? 'border-red-500' : 'border-[#30363D] focus:border-[#3B82F6]'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#E6EDF3] mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-[#161B22] border rounded-lg text-[#E6EDF3] placeholder-[#E6EDF3]/50 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition-colors resize-none ${
                  errors.message ? 'border-red-500' : 'border-[#30363D] focus:border-[#3B82F6]'
                }`}
                placeholder="Tell me about your project..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                  <ExclamationCircleIcon className="w-4 h-4" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Status */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircleIcon className="w-5 h-5" />
                  <span className="font-medium">Message sent successfully!</span>
                </div>
                <p className="text-sm text-green-400/80 mt-1">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <div className="flex items-center gap-2 text-red-400">
                  <ExclamationCircleIcon className="w-5 h-5" />
                  <span className="font-medium">Failed to send message</span>
                </div>
                <p className="text-sm text-red-400/80 mt-1">
                  Please try again or contact me directly via email.
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#3B82F6] hover:bg-[#2563EB] disabled:bg-[#3B82F6]/50 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <PaperAirplaneIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Simple Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[#E6EDF3]/60 mb-4">
            Or reach me directly at
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:samuelaemrowork12@gmail.com"
              className="text-[#3B82F6] hover:text-[#2563EB] transition-colors font-medium"
            >
              samuelaemrowork12@gmail.com
            </a>
            <span className="hidden sm:block text-[#E6EDF3]/40">•</span>
            <a
              href="tel:+251-902329031"
              className="text-[#3B82F6] hover:text-[#2563EB] transition-colors font-medium"
            >
              +251-902329031
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
