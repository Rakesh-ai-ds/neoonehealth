import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    {
      label: 'Personal Wellness',
      path: '/personal-wellness',
      submenu: [
        { label: 'Fitness & Exercise', path: '/personal-wellness#fitness' },
        { label: 'Nutrition & Diet', path: '/personal-wellness#nutrition' },
        { label: 'Mental Health', path: '/personal-wellness#mental-health' },
        { label: 'Preventive Care', path: '/personal-wellness#preventive-care' },
        { label: 'BMI Calculator', path: '/personal-wellness#bmi-calculator' }
      ]
    },
    {
      label: 'Child Health',
      path: '/child-health',
      submenu: [
        { label: 'Pediatric Care', path: '/child-health#pediatric-care' },
        { label: 'Vaccination Programs', path: '/child-health#vaccination' },
        { label: 'Growth & Development', path: '/child-health#growth-development' },
        { label: 'Child Nutrition', path: '/child-health#child-nutrition' }
      ]
    },
    {
      label: 'Occupational Health',
      path: '/occupational-health',
      submenu: [
        { label: 'Workplace Safety', path: '/occupational-health#workplace-safety' },
        { label: 'Ergonomics & Posture', path: '/occupational-health#ergonomics' },
        { label: 'Mental Wellness', path: '/occupational-health#mental-wellness' },
        { label: 'Health Screening', path: '/occupational-health#health-screening' }
      ]
    },
    {
      label: 'Elderly Health',
      path: '/elderly-health',
      submenu: [
        { label: 'Feel - Emotional Wellness', path: '/elderly-health#feel' },
        { label: 'Fall Prevention', path: '/elderly-health#fall' },
        { label: 'Flexibility & Mobility', path: '/elderly-health#flexibility' }
      ]
    },
    { label: 'Contact Us', path: '/contact' }
  ];

  return (
    <>
      <motion.nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-white shadow-lg'
            : 'bg-white/95 backdrop-blur-sm'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#2563EB] to-[#38BDF8] rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white font-bold text-xl md:text-2xl">N</span>
              </motion.div>
              <span className="text-[#1E293B] font-bold text-lg md:text-xl">NeoOne Health</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.submenu ? (
                    <>
                      <button
                        className={`flex items-center px-3 py-2 text-[#64748B] hover:text-[#2563EB] font-medium transition-colors ${isActive(item.path) ? 'text-[#2563EB]' : ''
                          }`}
                      >
                        {item.label}
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                      </button>
                      <div className="absolute left-0 mt-0 w-64 bg-white border border-gray-100 shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                        <Link
                          to={item.path}
                          className="block px-4 py-3 text-[#1E293B] hover:bg-[#F1F5F9] hover:text-[#2563EB] font-medium border-b border-gray-100"
                        >
                          View All {item.label}
                        </Link>
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className="block px-4 py-2.5 text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#2563EB] text-sm"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-3 py-2 text-[#64748B] hover:text-[#2563EB] font-medium transition-colors ${isActive(item.path) ? 'text-[#2563EB]' : ''
                        }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg bg-[#F1F5F9] hover:bg-[#E2E8F0] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="text-[#1E293B]" size={24} />
              ) : (
                <Menu className="text-[#1E293B]" size={24} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 h-full w-80 bg-white border-l border-gray-100 shadow-2xl z-50 lg:hidden overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-bold text-[#1E293B]">Menu</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg bg-[#F1F5F9] hover:bg-[#E2E8F0]"
                  >
                    <X size={24} className="text-[#1E293B]" />
                  </button>
                </div>

                <div className="space-y-2">
                  {menuItems.map((item, index) => (
                    <div key={index}>
                      {item.submenu ? (
                        <>
                          <button
                            onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                            className="w-full flex items-center justify-between py-3 px-4 text-[#1E293B] hover:bg-[#F1F5F9] rounded-lg font-medium"
                          >
                            {item.label}
                            <ChevronRight
                              className={`transition-transform text-[#64748B] ${activeDropdown === index ? 'rotate-90' : ''}`}
                              size={20}
                            />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 pb-2">
                                  <Link
                                    to={item.path}
                                    className="block py-2 px-4 text-[#2563EB] font-medium"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    View All
                                  </Link>
                                  {item.submenu.map((subItem, subIndex) => (
                                    <Link
                                      key={subIndex}
                                      to={subItem.path}
                                      className="block py-2 px-4 text-[#64748B] hover:text-[#2563EB] text-sm"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={item.path}
                          className={`block py-3 px-4 rounded-lg font-medium ${isActive(item.path)
                              ? 'bg-[#2563EB]/10 text-[#2563EB]'
                              : 'text-[#1E293B] hover:bg-[#F1F5F9]'
                            }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <button className="w-full bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white py-3 rounded-xl font-bold">
                      Book Appointment
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
