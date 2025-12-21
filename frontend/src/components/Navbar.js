import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); setActiveDropdown(null); }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    {
      label: 'Personal Wellness', path: '/personal-wellness', shortLabel: 'Wellness', submenu: [
        { label: 'Fitness', path: '/personal-wellness#fitness' },
        { label: 'Nutrition', path: '/personal-wellness#nutrition' },
        { label: 'Mental Health', path: '/personal-wellness#mental-health' },
        { label: 'BMI Calculator', path: '/personal-wellness#bmi-calculator' }
      ]
    },
    {
      label: 'Child Health', path: '/child-health', shortLabel: 'Child', submenu: [
        { label: 'Pediatric Care', path: '/child-health#pediatric-care' },
        { label: 'Vaccination', path: '/child-health#vaccination' },
        { label: 'Growth', path: '/child-health#growth-development' }
      ]
    },
    {
      label: 'Occupational', path: '/occupational-health', submenu: [
        { label: 'Workplace Safety', path: '/occupational-health#workplace-safety' },
        { label: 'Ergonomics', path: '/occupational-health#ergonomics' },
        { label: 'Mental Wellness', path: '/occupational-health#mental-wellness' }
      ]
    },
    {
      label: 'Elderly', path: '/elderly-health', submenu: [
        { label: 'Feel', path: '/elderly-health#feel' },
        { label: 'Fall Prevention', path: '/elderly-health#fall' },
        { label: 'Flexibility', path: '/elderly-health#flexibility' }
      ]
    },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <motion.nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <motion.img
                src="/images/logo.png"
                alt="NeoOne Health"
                className="h-10 md:h-12 w-auto"
                whileTap={{ scale: 0.95 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.submenu ? (
                    <>
                      <button className={`flex items-center px-2.5 py-2 text-sm text-[#64748B] hover:text-[#2563EB] font-medium ${isActive(item.path) ? 'text-[#2563EB]' : ''}`}>
                        {item.shortLabel || item.label}
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                      </button>
                      <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-100 shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                        <Link to={item.path} className="block px-4 py-2 text-[#1E293B] hover:bg-[#F1F5F9] font-medium text-sm border-b border-gray-50">View All</Link>
                        {item.submenu.map((subItem, subIndex) => (
                          <Link key={subIndex} to={subItem.path} className="block px-4 py-2 text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#2563EB] text-sm">{subItem.label}</Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link to={item.path} className={`px-2.5 py-2 text-sm text-[#64748B] hover:text-[#2563EB] font-medium ${isActive(item.path) ? 'text-[#2563EB]' : ''}`}>
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              {/* Call Button - Desktop */}
              <a href="tel:+919876543210" className="ml-2">
                <button className="px-4 py-2 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white rounded-lg font-medium text-sm flex items-center gap-1.5">
                  <Phone size={14} /> Call
                </button>
              </a>
            </div>

            {/* Mobile: Call + Menu */}
            <div className="flex items-center gap-2 lg:hidden">
              <a href="tel:+919876543210">
                <motion.button className="p-2.5 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white rounded-lg" whileTap={{ scale: 0.95 }}>
                  <Phone size={18} />
                </motion.button>
              </a>
              <button className="p-2.5 rounded-lg bg-[#F1F5F9]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="text-[#1E293B]" size={20} /> : <Menu className="text-[#1E293B]" size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav >

      {/* Mobile Menu - Full Screen */}
      < AnimatePresence >
        {mobileMenuOpen && (
          <>
            <motion.div className="fixed inset-0 bg-black/40 z-40 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileMenuOpen(false)} />
            <motion.div
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white z-50 lg:hidden overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="p-4">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                  <span className="text-lg font-bold text-[#1E293B]">Menu</span>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-lg bg-[#F1F5F9]">
                    <X size={20} className="text-[#1E293B]" />
                  </button>
                </div>

                <div className="space-y-1">
                  {menuItems.map((item, index) => (
                    <div key={index}>
                      {item.submenu ? (
                        <>
                          <button
                            onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                            className="w-full flex items-center justify-between py-3 px-3 text-[#1E293B] hover:bg-[#F8FAFC] rounded-lg font-medium text-base"
                          >
                            {item.label}
                            <ChevronRight className={`transition-transform text-[#94A3B8] ${activeDropdown === index ? 'rotate-90' : ''}`} size={18} />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === index && (
                              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                <div className="pl-4 pb-2 space-y-1">
                                  <Link to={item.path} className="block py-2 px-3 text-[#2563EB] font-medium text-sm rounded-lg" onClick={() => setMobileMenuOpen(false)}>View All</Link>
                                  {item.submenu.map((subItem, subIndex) => (
                                    <Link key={subIndex} to={subItem.path} className="block py-2 px-3 text-[#64748B] hover:text-[#2563EB] text-sm rounded-lg" onClick={() => setMobileMenuOpen(false)}>{subItem.label}</Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link to={item.path} className={`block py-3 px-3 rounded-lg font-medium text-base ${isActive(item.path) ? 'bg-[#2563EB]/10 text-[#2563EB]' : 'text-[#1E293B] hover:bg-[#F8FAFC]'}`} onClick={() => setMobileMenuOpen(false)}>{item.label}</Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-6 pt-4 border-t border-gray-100 space-y-3">
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <button className="w-full bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white py-3.5 rounded-xl font-bold">
                      Book Appointment
                    </button>
                  </Link>
                  <a href="tel:+919876543210" className="block">
                    <button className="w-full border-2 border-[#2563EB] text-[#2563EB] py-3 rounded-xl font-bold flex items-center justify-center gap-2">
                      <Phone size={18} /> +91 98765 43210
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )
        }
      </AnimatePresence >
    </>
  );
};

export default Navbar;
