import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, Users, Activity, Baby, Briefcase, UserCheck, ChevronRight, Phone, Calculator } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BMICalculator from '../components/BMICalculator';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [bmiRef, bmiInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Hero background images
  const heroSlides = [
    { image: '/images/hero-1.png', title: 'HEP', subtitle: 'Home Exercise Program - Tailored for You' },
    { image: '/images/hero-2.png', title: 'Family Health', subtitle: 'Caring for your entire family' },
    { image: '/images/hero-3.png', title: 'Nutrition', subtitle: 'Fuel your body right' },
    { image: '/images/hero-4.png', title: 'Mental Wellness', subtitle: 'Peace of mind matters' },
    { image: '/images/hero-5.png', title: 'Active Aging', subtitle: 'Stay healthy at every age' }
  ];

  // Auto-transition with shuffle
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        let next = Math.floor(Math.random() * heroSlides.length);
        while (next === prev) {
          next = Math.floor(Math.random() * heroSlides.length);
        }
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Smooth scroll to BMI section
  const scrollToBMI = () => {
    const bmiSection = document.getElementById('bmi-section');
    if (bmiSection) {
      bmiSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for text readability - no bright flash */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
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
                  className="inline-block bg-white/90 border border-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[#2563EB] text-xs md:text-sm font-medium mb-4 md:mb-6 shadow-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.span>
              </AnimatePresence>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
                Your Health, <br />
                <span className="bg-gradient-to-r from-[#38BDF8] to-[#22C55E] bg-clip-text text-transparent">Our Priority</span>
              </h1>
              <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 leading-relaxed drop-shadow-md">
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
                <motion.button
                  onClick={scrollToBMI}
                  className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 border-2 border-[#22C55E] text-[#22C55E] rounded-xl font-bold flex items-center justify-center gap-2 text-sm md:text-base bg-white/80 backdrop-blur-sm"
                  whileHover={{ backgroundColor: '#22C55E', color: 'white' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Calculator size={18} /> Check Your BMI
                </motion.button>
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

      {/* Stats Section */}
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

      {/* Health Numbers Dashboard */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#2563EB] font-medium text-xs md:text-sm uppercase tracking-wider">Your Health Dashboard</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E293B] mt-2 mb-3">Key <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">Health Numbers</span> & What They Mean</h2>
            <p className="text-sm md:text-base text-[#64748B] max-w-3xl mx-auto">These numbers help identify risks for serious conditions like heart disease, stroke, and diabetes, allowing for early intervention.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

            {/* Blood Pressure Card */}
            <motion.div
              className="bg-white border border-gray-200 p-5 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center">
                  <Activity className="text-[#2563EB]" size={24} />
                </div>
                <div>
                  <h3 className="text-[#1E293B] font-bold text-lg">Blood Pressure</h3>
                  <p className="text-[#94A3B8] text-xs">Force of blood against artery walls</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                  <span className="text-[#64748B]">Normal</span>
                  <span className="font-semibold text-[#22C55E]">&lt;120/80 mmHg</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                  <span className="text-[#64748B]">Elevated</span>
                  <span className="font-semibold text-[#D97706]">120-129/&lt;80</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                  <span className="text-[#64748B]">Stage 1 Hypertension</span>
                  <span className="font-semibold text-[#F97316]">130-139/80-89</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-[#64748B]">Crisis (Seek Care!)</span>
                  <span className="font-semibold text-[#EF4444]">&gt;180/&gt;120</span>
                </div>
              </div>
            </motion.div>

            {/* Cholesterol Card */}
            <motion.div
              className="bg-white border border-gray-200 p-5 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#7C3AED]/10 rounded-xl flex items-center justify-center">
                  <Shield className="text-[#7C3AED]" size={24} />
                </div>
                <div>
                  <h3 className="text-[#1E293B] font-bold text-lg">Cholesterol</h3>
                  <p className="text-[#94A3B8] text-xs">Fats in your blood (mg/dL)</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                  <span className="text-[#64748B]">Total Cholesterol</span>
                  <span className="font-semibold text-[#22C55E]">&lt;200 mg/dL</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                  <span className="text-[#64748B]">HDL (Good)</span>
                  <span className="font-semibold text-[#22C55E]">M&gt;40, W&gt;50</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                  <span className="text-[#64748B]">LDL (Bad)</span>
                  <span className="font-semibold text-[#22C55E]">&lt;100 mg/dL</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-[#64748B]">Triglycerides</span>
                  <span className="font-semibold text-[#22C55E]">&lt;150 mg/dL</span>
                </div>
              </div>
            </motion.div>

            {/* Blood Sugar Card */}
            <motion.div
              className="bg-white border border-gray-200 p-5 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#F97316]/10 rounded-xl flex items-center justify-center">
                  <Activity className="text-[#F97316]" size={24} />
                </div>
                <div>
                  <h3 className="text-[#1E293B] font-bold text-lg">Blood Sugar</h3>
                  <p className="text-[#94A3B8] text-xs">Glucose - crucial for diabetes</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                  <span className="text-[#64748B]">Fasting Normal</span>
                  <span className="font-semibold text-[#22C55E]">&lt;100 mg/dL</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                  <span className="text-[#64748B]">Pre-diabetic</span>
                  <span className="font-semibold text-[#D97706]">100-125 mg/dL</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-[#64748B]">Diabetic</span>
                  <span className="font-semibold text-[#EF4444]">&gt;126 mg/dL</span>
                </div>
              </div>
            </motion.div>

            {/* BMI Card */}
            <motion.div
              className="bg-gradient-to-br from-[#22C55E]/5 to-white border border-[#22C55E]/20 p-5 md:p-6 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#22C55E]/20 rounded-xl flex items-center justify-center">
                  <Calculator className="text-[#22C55E]" size={24} />
                </div>
                <div>
                  <h3 className="text-[#1E293B] font-bold text-lg">BMI</h3>
                  <p className="text-[#94A3B8] text-xs">Weight-to-height ratio (kg/m²)</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                  <span className="text-[#64748B]">Healthy Weight</span>
                  <span className="font-semibold text-[#22C55E]">18.5 - 24.9</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                  <span className="text-[#64748B]">Overweight</span>
                  <span className="font-semibold text-[#D97706]">25 - 29.9</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-[#64748B]">Obese</span>
                  <span className="font-semibold text-[#EF4444]">30+</span>
                </div>
              </div>
              <button onClick={scrollToBMI} className="mt-4 w-full px-4 py-2 bg-[#22C55E] text-white rounded-lg font-medium text-sm hover:bg-[#16A34A] transition-colors">
                Calculate Your BMI
              </button>
            </motion.div>

            {/* Heart Rate Card */}
            <motion.div
              className="bg-gradient-to-br from-[#EF4444]/5 to-white border border-[#EF4444]/20 p-5 md:p-6 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#EF4444]/20 rounded-xl flex items-center justify-center">
                  <Heart className="text-[#EF4444]" size={24} />
                </div>
                <div>
                  <h3 className="text-[#1E293B] font-bold text-lg">Resting Heart Rate</h3>
                  <p className="text-[#94A3B8] text-xs">Beats per minute when calm</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                  <span className="text-[#64748B]">Normal Adults</span>
                  <span className="font-semibold text-[#22C55E]">60-100 bpm</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                  <span className="text-[#64748B]">Athletes</span>
                  <span className="font-semibold text-[#2563EB]">40-60 bpm</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-[#64748B]">Elevated</span>
                  <span className="font-semibold text-[#D97706]">&gt;100 bpm</span>
                </div>
              </div>
            </motion.div>

            {/* Waist-to-Hip Ratio Card */}
            <motion.div
              className="bg-white border border-gray-200 p-5 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#38BDF8]/10 rounded-xl flex items-center justify-center">
                  <Users className="text-[#38BDF8]" size={24} />
                </div>
                <div>
                  <h3 className="text-[#1E293B] font-bold text-lg">Waist-to-Hip Ratio</h3>
                  <p className="text-[#94A3B8] text-xs">Better predictor than BMI</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                  <span className="text-[#64748B]">Women (Normal)</span>
                  <span className="font-semibold text-[#22C55E]">≤0.80</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                  <span className="text-[#64748B]">Men (Normal)</span>
                  <span className="font-semibold text-[#22C55E]">≤0.95</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-[#64748B]">High Risk</span>
                  <span className="font-semibold text-[#EF4444]">Above limits</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Why They Matter */}
          <motion.div
            className="mt-8 md:mt-12 bg-gradient-to-r from-[#2563EB]/5 to-[#38BDF8]/5 border border-[#2563EB]/10 rounded-2xl p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[#1E293B] font-bold text-lg mb-2">Why These Numbers Matter</h3>
            <p className="text-[#64748B] text-sm max-w-2xl mx-auto">Regular monitoring helps identify risks for heart disease, stroke, and diabetes early—allowing for intervention through diet, exercise, or medication before serious complications develop.</p>
            <Link to="/contact" className="inline-block mt-4 px-6 py-2.5 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white rounded-lg font-medium text-sm hover:shadow-lg transition-all">
              Get a Health Checkup
            </Link>
          </motion.div>
        </div>
      </section>

      {/* BMI Calculator Section */}
      <section id="bmi-section" className="scroll-mt-20" ref={bmiRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={bmiInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <BMICalculator />
        </motion.div>
      </section>

      {/* Why Choose Us */}
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

      {/* CTA Section */}
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
