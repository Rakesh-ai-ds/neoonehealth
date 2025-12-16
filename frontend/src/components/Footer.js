import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const [footerRef, footerInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Personal Wellness', path: '/personal-wellness' },
    { label: 'Child Health', path: '/child-health' },
    { label: 'Occupational Health', path: '/occupational-health' },
    { label: 'Elderly Health', path: '/elderly-health' },
    { label: 'Contact Us', path: '/contact' }
  ];

  const services = [
    { label: 'Fitness & Exercise', path: '/personal-wellness#fitness' },
    { label: 'Nutrition & Diet', path: '/personal-wellness#nutrition' },
    { label: 'Mental Wellness', path: '/personal-wellness#mental-health' },
    { label: 'Pediatric Care', path: '/child-health#pediatric-care' },
    { label: 'Workplace Safety', path: '/occupational-health#workplace-safety' },
    { label: '3F Elderly Care', path: '/elderly-health' }
  ];

  return (
    <footer className="bg-[#0B4F6C] text-white" ref={footerRef}>
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        initial="hidden"
        animate={footerInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-2 mb-4">
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-[#01BAEF] via-[#20BF55] to-[#0B4F6C] rounded-full flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-white font-bold text-xl">N</span>
              </motion.div>
              <span className="text-white font-bold text-xl">NeoOne Health</span>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Your trusted healthcare partner. Comprehensive wellness solutions for individuals, families, workplaces, and elderly care.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#20BF55] hover:text-white transition-all"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link to={link.path} className="text-gray-300 hover:text-[#20BF55] transition-colors text-sm">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link to={link.path} className="text-gray-300 hover:text-[#20BF55] transition-colors text-sm">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              {[
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { icon: Mail, label: "Email", value: "contact@neoonehealth.in" },
                { icon: MapPin, label: "Address", value: "Chennai, Tamil Nadu, India" }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(32, 191, 85, 0.3)" }}
                  >
                    <item.icon className="text-[#20BF55]" size={16} />
                  </motion.div>
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="text-gray-200 text-sm">{item.value}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 NeoOne Health. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service"].map((text, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }}>
                <Link to={index === 0 ? "/privacy" : "/terms"} className="text-gray-400 hover:text-[#20BF55] transition-colors text-sm">
                  {text}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
