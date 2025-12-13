import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';
import Button from '@/components/ui/Button';

const Footer = () => {
  return (
    <footer className="bg-[#082C4A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#20BF55] to-[#082C4A] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-white font-bold text-xl">NeoOne Health</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Future-proof your workforce with data-driven corporate wellness solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#20BF55] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#20BF55] transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#20BF55] transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#20BF55] transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-bold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/corporate-screening" className="text-gray-300 hover:text-[#20BF55] transition-colors text-sm">Corporate Screening</Link></li>
              <li><Link to="/digital-platform" className="text-gray-300 hover:text-[#20BF55] transition-colors text-sm">Digital Wellness Platform</Link></li>
              <li><Link to="/health-audits" className="text-gray-300 hover:text-[#20BF55] transition-colors text-sm">Health Audits & Reporting</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-[#20BF55] transition-colors text-sm">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-[#20BF55] transition-colors text-sm">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-[#20BF55] transition-colors text-sm">Partnerships</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#20BF55] transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">Subscribe to our newsletter for health insights and updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 rounded-l-md text-[#082C4A] focus:outline-none focus:ring-2 focus:ring-[#20BF55]"
                data-testid="newsletter-email-input"
              />
              <Button className="rounded-l-none" data-testid="newsletter-subscribe-button">
                <Mail size={20} />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2025 NeoOne Health. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-300 hover:text-[#20BF55] transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-300 hover:text-[#20BF55] transition-colors text-sm">Terms of Service</Link>
            <Link to="/sitemap" className="text-gray-300 hover:text-[#20BF55] transition-colors text-sm">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
