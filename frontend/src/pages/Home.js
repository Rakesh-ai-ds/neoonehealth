import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Activity, Shield, Award, Clock, Phone, MapPin, Mail, CheckCircle2, ArrowRight, Stethoscope, Microscope, Ambulance } from 'lucide-react';
import Button from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [programsRef, programsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Background image slider state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1920&q=80',
      alt: 'Modern Hospital'
    },
    {
      url: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1920&q=80',
      alt: 'Medical Team'
    },
    {
      url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1920&q=80',
      alt: 'Healthcare Technology'
    },
    {
      url: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1920&q=80',
      alt: 'Patient Care'
    }
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image Slider */}
      <section className="relative min-h-screen flex items-center overflow-hidden" ref={heroRef}>
        {/* Static Dark Overlay - Always visible to prevent flash */}
        <div className="absolute inset-0 bg-[#0B4F6C] z-0"></div>

        {/* Background Image Slider */}
        <div className="absolute inset-0 z-[1]">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Dark overlay for text readability - Always on top of images */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B4F6C]/85 via-[#0B4F6C]/70 to-[#0B4F6C]/50 z-[2]"></div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/70'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <motion.div className="inline-block mb-4" variants={itemVariants}>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white">
                  Trusted Healthcare Partner
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
                variants={itemVariants}
              >
                Your Health, Our Priority
              </motion.h1>

              <motion.p
                className="text-xl text-gray-200 mb-8 leading-relaxed"
                variants={itemVariants}
              >
                Comprehensive healthcare services with compassionate care. Experience world-class medical treatment with our team of expert doctors and modern facilities.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <Link to="/contact">
                  <Button size="lg" className="bg-[#20BF55] text-white hover:bg-[#1aa548] hover-lift shadow-lg">
                    <Phone className="mr-2" size={20} />
                    Book Appointment
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#0B4F6C] hover-lift">
                    Learn More
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                className="mt-8 flex flex-wrap gap-6"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="text-[#20BF55]" size={24} />
                  <span className="text-sm">24/7 Emergency Care</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="text-[#20BF55]" size={24} />
                  <span className="text-sm">Expert Doctors</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="text-[#20BF55]" size={24} />
                  <span className="text-sm">Modern Equipment</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Feature Cards (visible on desktop) */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <Heart className="text-[#20BF55] mb-4" size={40} />
                  <h3 className="text-white font-bold text-lg mb-2">Personal Wellness</h3>
                  <p className="text-gray-200 text-sm">Personalized health programs for your lifestyle</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <Users className="text-[#FFE66D] mb-4" size={40} />
                  <h3 className="text-white font-bold text-lg mb-2">Child Health</h3>
                  <p className="text-gray-200 text-sm">Complete pediatric care for your little ones</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <Shield className="text-[#01BAEF] mb-4" size={40} />
                  <h3 className="text-white font-bold text-lg mb-2">Corporate Health</h3>
                  <p className="text-gray-200 text-sm">Comprehensive wellness for organizations</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <Activity className="text-[#FF6B6B] mb-4" size={40} />
                  <h3 className="text-white font-bold text-lg mb-2">Diagnostics</h3>
                  <p className="text-gray-200 text-sm">Advanced testing and health assessments</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white" ref={aboutRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=80"
                  alt="Our Medical Team"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <span className="text-[#20BF55] font-semibold text-sm uppercase tracking-wider">About NeoOne Health</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] mt-2 mb-6">
                Committed to Excellence in Healthcare
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At NeoOne Health, we believe in providing accessible, affordable, and quality healthcare to everyone. Our state-of-the-art facilities combined with our compassionate medical professionals ensure you receive the best care possible.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With years of experience serving communities across India, we understand the unique healthcare needs of our patients and strive to exceed their expectations every day.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#0B4F6C]/10 rounded-lg flex items-center justify-center">
                    <Award className="text-[#0B4F6C]" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-[#0B4F6C]">15+ Years</p>
                    <p className="text-sm text-gray-500">Experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#0B4F6C]/10 rounded-lg flex items-center justify-center">
                    <Users className="text-[#0B4F6C]" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-[#0B4F6C]">50,000+</p>
                    <p className="text-sm text-gray-500">Happy Patients</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <span className="text-[#20BF55] font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] mt-2 mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From preventive care to specialized treatments, we offer a wide range of healthcare services tailored to your needs.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {[
              { icon: Stethoscope, title: 'General Checkups', desc: 'Regular health assessments to keep you in optimal condition', color: '#20BF55', link: '/personal-wellness' },
              { icon: Heart, title: 'Personal Wellness', desc: 'Customized wellness programs for a healthier lifestyle', color: '#FF6B6B', link: '/personal-wellness' },
              { icon: Users, title: 'Child Health', desc: 'Complete pediatric care from infancy to adolescence', color: '#FFE66D', link: '/child-health' },
              { icon: Shield, title: 'Corporate Health', desc: 'Workplace health solutions for organizations', color: '#0B4F6C', link: '/corporate-health' },
              { icon: Microscope, title: 'Diagnostics', desc: 'Advanced laboratory testing and imaging services', color: '#9B59B6', link: '/contact' },
              { icon: Ambulance, title: 'Emergency Care', desc: '24/7 emergency medical services when you need them most', color: '#E74C3C', link: '/contact' }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Link to={service.link}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${service.color}15` }}>
                      <service.icon size={32} style={{ color: service.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B4F6C] mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#0B4F6C] text-white" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '50,000+', label: 'Happy Patients' },
              { number: '100+', label: 'Expert Doctors' },
              { number: '24/7', label: 'Emergency Service' }
            ].map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <p className="text-4xl md:text-5xl font-bold text-[#20BF55] mb-2">{stat.number}</p>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white" ref={teamRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <span className="text-[#20BF55] font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] mt-2 mb-4">
              What Makes Us Different
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {[
              { icon: Heart, title: 'Compassionate Care', desc: 'We treat every patient with empathy and understanding' },
              { icon: Award, title: 'Quality Excellence', desc: 'Highest standards of medical care and service' },
              { icon: Clock, title: '24/7 Availability', desc: 'Round the clock medical support for emergencies' },
              { icon: Shield, title: 'Patient Safety', desc: 'Your health and safety is our top priority' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#20BF55] to-[#01BAEF] rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-white" size={36} />
                </div>
                <h3 className="text-xl font-bold text-[#0B4F6C] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#20BF55] to-[#01BAEF] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Control of Your Health?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Book an appointment today and experience healthcare the way it should be.
          </p>
          <Link to="/contact">
            <motion.button
              className="px-10 py-4 bg-white text-[#0B4F6C] rounded-lg font-bold text-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Appointment
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Contact Info Strip */}
      <section className="py-12 bg-[#0B4F6C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                <Phone className="text-[#20BF55]" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-300">Call Us</p>
                <p className="font-bold">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                <Mail className="text-[#20BF55]" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-300">Email Us</p>
                <p className="font-bold">contact@neoonehealth.in</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                <MapPin className="text-[#20BF55]" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-300">Visit Us</p>
                <p className="font-bold">Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
