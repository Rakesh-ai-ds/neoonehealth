import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const [footerRef, footerInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Personal Wellness', path: '/personal-wellness' },
    { label: 'Child Health', path: '/child-health' },
    { label: 'Occupational', path: '/occupational-health' },
    { label: 'Elderly', path: '/elderly-health' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-[#1E293B] text-white" ref={footerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">

          {/* Company Info */}
          <motion.div
            className="col-span-2 md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={footerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white shadow-md overflow-hidden flex items-center justify-center p-1">
                <img src="/images/logo.png" alt="NeoOne Health" className="w-full h-full object-contain scale-125" />
              </div>
              <span className="text-white font-bold text-lg">NeoOne Health</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Your trusted healthcare partner for comprehensive wellness solutions.
            </p>
            <div className="flex space-x-2">
              <a href="https://www.facebook.com/profile.php?id=61585766368576" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#1877F2] hover:text-white transition-all">
                <Facebook size={16} />
              </a>
              <a href="https://in.linkedin.com/in/neoonehealth-undefined-9685863a3" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#0A66C2] hover:text-white transition-all">
                <Linkedin size={16} />
              </a>
              <a href="https://www.instagram.com/neoonehealth/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:text-white transition-all">
                <Instagram size={16} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={footerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-sm md:text-base mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.slice(0, 4).map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-400 hover:text-[#38BDF8] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={footerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-sm md:text-base mb-3 md:mb-4">Services</h3>
            <ul className="space-y-2">
              {quickLinks.slice(2).map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-400 hover:text-[#38BDF8] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={footerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-sm md:text-base mb-3 md:mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="text-[#38BDF8] flex-shrink-0 mt-0.5" size={14} />
                <a href="tel:+919876543210" className="text-gray-300 text-sm">+91 98765 43210</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="text-[#38BDF8] flex-shrink-0 mt-0.5" size={14} />
                <span className="text-gray-300 text-sm break-all">neoonehealth@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="text-[#38BDF8] flex-shrink-0 mt-0.5" size={14} />
                <span className="text-gray-300 text-sm">Chennai, India</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
            © 2025 NeoOne Health. All rights reserved.
          </p>
          <div className="flex space-x-4 md:space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-[#38BDF8] text-xs md:text-sm">Privacy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-[#38BDF8] text-xs md:text-sm">Terms</Link>
          </div>
        </div>
      </div>

      {/* Safe area padding for iOS */}
      <div className="h-[env(safe-area-inset-bottom)] bg-[#1E293B]"></div>
    </footer>
  );
};

export default Footer;
