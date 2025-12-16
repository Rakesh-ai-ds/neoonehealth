import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, Users, Activity, Baby, Briefcase, UserCheck, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const services = [
    {
      icon: Heart,
      title: 'Personal Wellness',
      desc: 'Comprehensive health programs for individuals including fitness, nutrition, and mental wellness.',
      path: '/personal-wellness',
      color: '#22C55E'
    },
    {
      icon: Baby,
      title: 'Child Health',
      desc: 'Pediatric care, vaccinations, growth monitoring, and nutritional guidance for children.',
      path: '/child-health',
      color: '#38BDF8'
    },
    {
      icon: Briefcase,
      title: 'Occupational Health',
      desc: 'Workplace safety, ergonomics, mental wellness, and health screening for organizations.',
      path: '/occupational-health',
      color: '#FACC15'
    },
    {
      icon: UserCheck,
      title: 'Elderly Health',
      desc: 'The 3F approach: Feel, Fall Prevention, and Flexibility for healthy aging.',
      path: '/elderly-health',
      color: '#A78BFA'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '50,000+', label: 'Patients Served' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Support Available' }
  ];

  const whyChooseUs = [
    { icon: Shield, title: 'Trusted Experts', desc: 'Board-certified professionals with decades of experience' },
    { icon: Activity, title: 'Science-Based', desc: 'Evidence-based approaches backed by research' },
    { icon: Users, title: 'Personalized Care', desc: 'Tailored solutions for your unique needs' },
    { icon: Heart, title: 'Holistic Approach', desc: 'Mind, body, and lifestyle integration' }
  ];

  return (
    <div className="min-h-screen bg-[#020617]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20" ref={heroRef}>
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#020617]"></div>
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <motion.span
                className="inline-block bg-[#2563EB]/20 border border-[#2563EB]/30 px-4 py-2 rounded-full text-[#38BDF8] text-sm font-medium mb-6"
                variants={fadeInUp}
              >
                Medical-Grade Wellness Solutions
              </motion.span>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E5E7EB] mb-6 leading-tight"
                variants={fadeInUp}
              >
                Your Health, <br />
                <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
                  Our Priority
                </span>
              </motion.h1>
              <motion.p
                className="text-lg text-[#94A3B8] mb-8 max-w-lg"
                variants={fadeInUp}
              >
                Comprehensive wellness solutions for individuals, families, and organizations.
                Science-backed approaches for lasting health improvements.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                variants={fadeInUp}
              >
                <Link to="/contact">
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white rounded-xl font-bold flex items-center gap-2"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(37, 99, 235, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started <ArrowRight size={20} />
                  </motion.button>
                </Link>
                <Link to="/about">
                  <motion.button
                    className="px-8 py-4 border border-[#38BDF8] text-[#38BDF8] rounded-xl font-bold"
                    whileHover={{ backgroundColor: 'rgba(56, 189, 248, 0.1)' }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right - Feature Cards */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#0F172A] border border-white/5 p-6 rounded-2xl hover:border-[#2563EB]/30 transition-all"
                    whileHover={{ y: -5, boxShadow: '0 0 30px rgba(37, 99, 235, 0.1)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <service.icon size={24} style={{ color: service.color }} />
                    </div>
                    <h3 className="text-[#E5E7EB] font-bold mb-2">{service.title}</h3>
                    <p className="text-[#64748B] text-sm">{service.desc.substring(0, 60)}...</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#0F172A]" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <span className="text-[#38BDF8] font-medium text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB] mt-2 mb-4">
              Comprehensive Health Solutions
            </h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto">
              From personal wellness to corporate health programs, we provide end-to-end solutions for every stage of life.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <Link to={service.path}>
                  <div className="bg-[#020617] border border-white/5 p-6 rounded-2xl h-full hover:border-[#2563EB]/30 transition-all group">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <service.icon size={28} style={{ color: service.color }} />
                    </div>
                    <h3 className="text-[#E5E7EB] font-bold text-lg mb-2 group-hover:text-[#38BDF8] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#64748B] text-sm mb-4">{service.desc}</p>
                    <div className="flex items-center text-[#38BDF8] text-sm font-medium">
                      Learn More <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#2563EB] to-[#38BDF8]" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#020617]" ref={whyRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={whyInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <span className="text-[#38BDF8] font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB] mt-2 mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto">
              We combine medical expertise with technology to deliver results that matter.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate={whyInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                variants={fadeInUp}
              >
                <div className="w-16 h-16 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-[#38BDF8]" size={32} />
                </div>
                <h3 className="text-[#E5E7EB] font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-[#64748B] text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB] mb-6">
              Ready to Transform Your Health?
            </h2>
            <p className="text-[#94A3B8] text-lg mb-8">
              Take the first step towards a healthier, more fulfilling life. Our experts are ready to guide you.
            </p>
            <Link to="/contact">
              <motion.button
                className="px-10 py-4 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white rounded-xl font-bold text-lg"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(37, 99, 235, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
