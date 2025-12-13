import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [benefitsOpen, setBenefitsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white shadow-md'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 md:space-x-3">
              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#01BAEF] via-[#20BF55] to-[#0B4F6C] rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <span className="text-white font-bold text-xl md:text-2xl">N</span>
              </motion.div>
              <span className="text-[#082C4A] font-bold text-lg md:text-xl">NeoOne Health</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className={`text-[#082C4A] hover:text-[#20BF55] font-medium transition-colors ${isActive('/') ? 'text-[#20BF55]' : ''}`}>Home</Link>

              {/* Solutions Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-[#082C4A] hover:text-[#20BF55] font-medium transition-colors">
                  Solutions <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/corporate-screening" className="block px-4 py-2 text-[#082C4A] hover:bg-[#F5F7FA] hover:text-[#20BF55]">Corporate Screening</Link>
                  <Link to="/digital-platform" className="block px-4 py-2 text-[#082C4A] hover:bg-[#F5F7FA] hover:text-[#20BF55]">Digital Wellness Platform</Link>
                  <Link to="/health-audits" className="block px-4 py-2 text-[#082C4A] hover:bg-[#F5F7FA] hover:text-[#20BF55]">Health Audits & Reporting</Link>
                </div>
              </div>

              {/* Benefits Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-[#082C4A] hover:text-[#20BF55] font-medium transition-colors">
                  Benefits <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/benefits#roi" className="block px-4 py-2 text-[#082C4A] hover:bg-[#F5F7FA] hover:text-[#20BF55]">ROI & Financial Savings</Link>
                  <Link to="/benefits#productivity" className="block px-4 py-2 text-[#082C4A] hover:bg-[#F5F7FA] hover:text-[#20BF55]">Productivity & Performance</Link>
                  <Link to="/benefits#retention" className="block px-4 py-2 text-[#082C4A] hover:bg-[#F5F7FA] hover:text-[#20BF55]">Employee Retention</Link>
                </div>
              </div>

              <Link to="/about" className={`text-[#082C4A] hover:text-[#20BF55] font-medium transition-colors ${isActive('/about') ? 'text-[#20BF55]' : ''}`}>About</Link>
              <Link to="/partnerships" className={`text-[#082C4A] hover:text-[#20BF55] font-medium transition-colors ${isActive('/partnerships') ? 'text-[#20BF55]' : ''}`}>Partnerships</Link>
              <Link to="/careers" className={`text-[#082C4A] hover:text-[#20BF55] font-medium transition-colors ${isActive('/careers') ? 'text-[#20BF55]' : ''}`}>Careers</Link>
              <Link to="/contact" className={`text-[#082C4A] hover:text-[#20BF55] font-medium transition-colors ${isActive('/contact') ? 'text-[#20BF55]' : ''}`}>Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#082C4A] p-2"
              data-testid="mobile-menu-button"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-y-0 right-0 z-50 w-80 bg-white shadow-2xl lg:hidden"
            data-testid="mobile-sidebar"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <span className="text-[#082C4A] font-bold text-xl">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-[#082C4A]">
                  <X size={24} />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-4">
                  <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block text-[#082C4A] font-medium py-2">Home</Link>

                  {/* Solutions */}
                  <div>
                    <button
                      onClick={() => setSolutionsOpen(!solutionsOpen)}
                      className="flex items-center justify-between w-full text-[#082C4A] font-medium py-2"
                    >
                      Solutions <ChevronDown className={`h-4 w-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {solutionsOpen && (
                        <motion.div
                          className="ml-4 mt-2 space-y-2"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <Link to="/corporate-screening" onClick={() => setMobileMenuOpen(false)} className="block text-[#082C4A] py-2">Corporate Screening</Link>
                          <Link to="/digital-platform" onClick={() => setMobileMenuOpen(false)} className="block text-[#082C4A] py-2">Digital Wellness Platform</Link>
                          <Link to="/health-audits" onClick={() => setMobileMenuOpen(false)} className="block text-[#082C4A] py-2">Health Audits & Reporting</Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Benefits */}
                  <div>
                    <button
                      onClick={() => setBenefitsOpen(!benefitsOpen)}
                      className="flex items-center justify-between w-full text-[#082C4A] font-medium py-2"
                    >
                      Benefits <ChevronDown className={`h-4 w-4 transition-transform ${benefitsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {benefitsOpen && (
                        <motion.div
                          className="ml-4 mt-2 space-y-2"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <Link to="/benefits#roi" onClick={() => setMobileMenuOpen(false)} className="block text-[#082C4A] py-2">ROI & Financial Savings</Link>
                          <Link to="/benefits#productivity" onClick={() => setMobileMenuOpen(false)} className="block text-[#082C4A] py-2">Productivity & Performance</Link>
                          <Link to="/benefits#retention" onClick={() => setMobileMenuOpen(false)} className="block text-[#082C4A] py-2">Employee Retention</Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block text-[#082C4A] font-medium py-2">About</Link>
                  <Link to="/partnerships" onClick={() => setMobileMenuOpen(false)} className="block text-[#082C4A] font-medium py-2">Partnerships</Link>
                  <Link to="/careers" onClick={() => setMobileMenuOpen(false)} className="block text-[#082C4A] font-medium py-2">Careers</Link>
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-[#082C4A] font-medium py-2">Contact</Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
