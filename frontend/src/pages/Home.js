import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, Users, Activity, Baby, Briefcase, UserCheck, ChevronRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Hero background images with topics
  const heroSlides = [
    { image: '/images/hero-1.png', title: 'Personal Wellness', subtitle: 'Yoga & Fitness for a healthier you' },
    { image: '/images/hero-2.png', title: 'Family Health', subtitle: 'Caring for your entire family' },
    { image: '/images/hero-3.png', title: 'Nutrition & Diet', subtitle: 'Fuel your body right' },
    { image: '/images/hero-4.png', title: 'Mental Wellness', subtitle: 'Peace of mind matters' },
    { image: '/images/hero-5.png', title: 'Active Aging', subtitle: 'Stay healthy at every age' }
  ];

  // Auto-transition with shuffle
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        // Random next slide (not same as current)
        let next = Math.floor(Math.random() * heroSlides.length);
        while (next === prev) {
          next = Math.floor(Math.random() * heroSlides.length);
        }
        return next;
      });
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const services = [
    { icon: Heart, title: 'Personal Wellness', desc: 'Fitness, nutrition, and mental health programs.', path: '/personal-wellness', color: '#22C55E' },
    { icon: Baby, title: 'Child Health', desc: 'Pediatric care and vaccinations.', path: '/child-health', color: '#38BDF8' },
    { icon: Briefcase, title: 'Occupational Health', desc: 'Workplace safety and wellness.', path: '/occupational-health', color: '#D97706' },
    { icon: UserCheck, title: 'Elderly Health', desc: '3F approach for healthy aging.', path: '/elderly-health', color: '#7C3AED' }
  ];

  const stats = [
    { number: '15+', label: 'Years' },
    { number: '50K+', label: 'Patients' },
    { number: '98%', label: 'Satisfaction' },
    { number: '24/7', label: 'Support' }
  ];

  const whyChooseUs = [
    { icon: Shield, title: 'Trusted', desc: 'Certified professionals' },
    { icon: Activity, title: 'Science-Based', desc: 'Research-backed care' },
    { icon: Users, title: 'Personalized', desc: 'Tailored solutions' },
    { icon: Heart, title: 'Holistic', desc: 'Complete wellness' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Slider */}
      <section className="relative min-h-[100svh] flex items-center pt-16 md:pt-20 overflow-hidden">
        {/* Background Image Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40 md:from-white/90 md:via-white/70 md:to-transparent"></div>
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-8 md:py-0">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Dynamic Topic Badge */}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentSlide}
                  className="inline-block bg-[#2563EB]/10 border border-[#2563EB]/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[#2563EB] text-xs md:text-sm font-medium mb-4 md:mb-6"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.span>
              </AnimatePresence>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B] mb-4 md:mb-6 leading-tight">
                Your Health, <br />
                <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">Our Priority</span>
              </h1>
              <p className="text-base md:text-lg text-[#64748B] mb-6 md:mb-8 leading-relaxed">
                Comprehensive wellness solutions for you and your family. Science-backed approaches for lasting health.
              </p>

              {/* CTA Buttons - Mobile optimized */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link to="/contact" className="w-full sm:w-auto">
                  <motion.button
                    className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white rounded-xl font-bold flex items-center justify-center gap-2 text-sm md:text-base shadow-lg"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started <ArrowRight size={18} />
                  </motion.button>
                </Link>
                <a href="tel:+919876543210" className="w-full sm:w-auto">
                  <motion.button
                    className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 border-2 border-[#2563EB] text-[#2563EB] rounded-xl font-bold flex items-center justify-center gap-2 text-sm md:text-base"
                    whileHover={{ backgroundColor: '#2563EB', color: 'white' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone size={18} /> Call Now
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slide Indicators - Tiny dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-1">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-[5px] h-[5px] rounded-full transition-all duration-300 ${currentSlide === index
                ? 'bg-[#2563EB]'
                : 'bg-[#94A3B8]/50 hover:bg-[#64748B]'
                }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Services Section - Mobile Cards */}
      <section className="py-12 md:py-20 bg-[#F8FAFC]" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 md:mb-16"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <span className="text-[#2563EB] font-medium text-xs md:text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E293B] mt-2 mb-3 md:mb-4">Health Solutions</h2>
            <p className="text-sm md:text-base text-[#64748B] max-w-2xl mx-auto">Comprehensive care for every stage of life.</p>
          </motion.div>

          {/* Mobile: 2 columns, Desktop: 4 columns */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link to={service.path}>
                  <motion.div
                    className="bg-white border border-gray-100 p-4 md:p-6 rounded-xl md:rounded-2xl h-full shadow-sm active:scale-[0.98] transition-all"
                    whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                  >
                    <div
                      className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <service.icon size={20} className="md:hidden" style={{ color: service.color }} />
                      <service.icon size={28} className="hidden md:block" style={{ color: service.color }} />
                    </div>
                    <h3 className="text-[#1E293B] font-bold text-sm md:text-lg mb-1 md:mb-2">{service.title}</h3>
                    <p className="text-[#94A3B8] text-xs md:text-sm hidden sm:block">{service.desc}</p>
                    <div className="flex items-center text-[#2563EB] text-xs md:text-sm font-medium mt-2 md:mt-4">
                      Learn More <ChevronRight size={14} className="ml-1" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Compact for mobile */}
      <section className="py-10 md:py-16 bg-gradient-to-r from-[#2563EB] to-[#38BDF8]" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-4 gap-2 md:gap-8"
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} className="text-center" variants={fadeInUp}>
                <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-0.5 md:mb-2">{stat.number}</p>
                <p className="text-white/80 text-xs md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Mobile Grid */}
      <section className="py-12 md:py-20 bg-white" ref={whyRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 md:mb-16"
            initial="hidden"
            animate={whyInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <span className="text-[#2563EB] font-medium text-xs md:text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E293B] mt-2 mb-3 md:mb-4">Trusted by Thousands</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            initial="hidden"
            animate={whyInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} className="text-center p-4 md:p-6" variants={fadeInUp}>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2563EB]/10 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <item.icon className="text-[#2563EB]" size={24} />
                </div>
                <h3 className="text-[#1E293B] font-bold text-sm md:text-lg mb-1 md:mb-2">{item.title}</h3>
                <p className="text-[#94A3B8] text-xs md:text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Mobile optimized */}
      <section className="py-12 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E293B] mb-4 md:mb-6">Ready to Transform Your Health?</h2>
            <p className="text-sm md:text-lg text-[#64748B] mb-6 md:mb-8">Take the first step towards a healthier life.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact">
                <motion.button
                  className="w-full sm:w-auto px-8 py-3.5 md:px-10 md:py-4 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white rounded-xl font-bold text-sm md:text-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a Consultation
                </motion.button>
              </Link>
              <a href="tel:+919876543210">
                <motion.button
                  className="w-full sm:w-auto px-8 py-3.5 md:px-10 md:py-4 border-2 border-[#2563EB] text-[#2563EB] rounded-xl font-bold text-sm md:text-lg flex items-center justify-center gap-2"
                  whileHover={{ backgroundColor: '#2563EB', color: 'white' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone size={18} /> Call Us
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
