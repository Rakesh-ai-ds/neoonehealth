import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B4F6C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#01BAEF] via-[#20BF55] to-[#0B4F6C] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-white font-bold text-xl">NeoOne Health</span>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Your trusted healthcare partner. Comprehensive wellness solutions for individuals, children, and corporate organizations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#20BF55] hover:text-white transition-all" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#20BF55] hover:text-white transition-all" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#20BF55] hover:text-white transition-all" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#20BF55] hover:text-white transition-all" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links - Matching Header */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-[#20BF55] transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#20BF55] transition-colors text-sm">About Us</Link></li>
              <li><Link to="/personal-wellness" className="text-gray-300 hover:text-[#20BF55] transition-colors text-sm">Personal Wellness</Link></li>
              <li><Link to="/child-health" className="text-gray-300 hover:text-[#20BF55] transition-colors text-sm">Child Health</Link></li>
              <li><Link to="/corporate-health" className="text-gray-300 hover:text-[#20BF55] transition-colors text-sm">Corporate Health</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#20BF55] transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/personal-wellness#fitness" className="text-gray-300 hover:text-[#20BF55] transition-colors text-sm">Fitness & Exercise</Link></li>
              <li><Link to="/personal-wellness#nutrition" className="text-gray-300 hover:text-[#20BF55] transition-colors text-sm">Nutrition & Diet</Link></li>
              <li><Link to="/child-health#pediatric-care" className="text-gray-300 hover:text-[#20BF55] transition-colors text-sm">Pediatric Care</Link></li>
              <li><Link to="/child-health#vaccination" className="text-gray-300 hover:text-[#20BF55] transition-colors text-sm">Vaccination Programs</Link></li>
              <li><Link to="/corporate-health#screening" className="text-gray-300 hover:text-[#20BF55] transition-colors text-sm">Health Screening</Link></li>
              <li><Link to="/corporate-health#wellness-programs" className="text-gray-300 hover:text-[#20BF55] transition-colors text-sm">Wellness Programs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="text-[#20BF55]" size={16} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-gray-200 text-sm">+91 98765 43210</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="text-[#20BF55]" size={16} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-gray-200 text-sm">contact@neoonehealth.in</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="text-[#20BF55]" size={16} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="text-gray-200 text-sm">Chennai, Tamil Nadu, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 NeoOne Health. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-[#20BF55] transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-[#20BF55] transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
