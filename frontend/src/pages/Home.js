import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Activity, Shield, Award, Clock, Phone, MapPin, Mail, CheckCircle2, ArrowRight, Stethoscope, Microscope, Ambulance } from 'lucide-react';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [programsRef, programsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B4F6C] via-[#01BAEF] to-[#0B4F6C] text-white pt-32 pb-20 overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <motion.div className="inline-block mb-4" variants={itemVariants}>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  Trusted Healthcare Partner
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                variants={itemVariants}
              >
                Your Health, Our Priority
              </motion.h1>

              <motion.p
                className="text-xl text-gray-100 mb-8 leading-relaxed"
                variants={itemVariants}
              >
                Comprehensive healthcare services with compassionate care. Experience world-class medical treatment with our team of expert doctors and modern facilities.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-[#0B4F6C] hover:bg-gray-100 hover-lift">
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
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-[#20E3B2]" size={24} />
                  <span className="text-sm">24/7 Emergency Care</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-[#20E3B2]" size={24} />
                  <span className="text-sm">Expert Doctors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-[#20E3B2]" size={24} />
                  <span className="text-sm">Modern Equipment</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={process.env.PUBLIC_URL + '/indian_hospital_reception.png'}
                  alt="Modern Healthcare Facility"
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B4F6C]/50 to-transparent"></div>
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
                  src={process.env.PUBLIC_URL + '/indian_medical_team.png'}
                  alt="Our Medical Team"
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800';
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <span className="text-[#01BAEF] font-semibold text-sm uppercase tracking-wide">About NeoOne Health</span>
                <h2 className="text-4xl font-bold text-[#0B4F6C] mt-2 mb-6">
                  Committed to Excellence in Healthcare
                </h2>
              </motion.div>

              <motion.p className="text-gray-600 text-lg mb-6 leading-relaxed" variants={itemVariants}>
                NeoOne Health is dedicated to providing comprehensive healthcare services with a focus on patient-centered care. Our state-of-the-art facilities and experienced medical professionals ensure you receive the best treatment possible.
              </motion.p>

              <motion.p className="text-gray-600 text-lg mb-8 leading-relaxed" variants={itemVariants}>
                With years of experience in delivering quality healthcare, we combine advanced medical technology with compassionate care to serve our community better.
              </motion.p>

              <motion.div className="grid grid-cols-2 gap-6" variants={itemVariants}>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-[#01BAEF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="text-[#01BAEF]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B4F6C] mb-1">Certified Excellence</h4>
                    <p className="text-sm text-gray-600">Accredited healthcare facility</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-[#01BAEF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="text-[#01BAEF]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B4F6C] mb-1">Patient Safety</h4>
                    <p className="text-sm text-gray-600">Highest safety standards</p>
                  </div>
                </div>
              </motion.div>
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
            <span className="text-[#01BAEF] font-semibold text-sm uppercase tracking-wide">Our Services</span>
            <h2 className="text-4xl font-bold text-[#0B4F6C] mt-2 mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From preventive care to specialized treatments, we offer a full range of medical services
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Service 1 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover-lift group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#01BAEF] to-[#0B4F6C] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Stethoscope className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0B4F6C] mb-4">General Health Checkups</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive health screenings and preventive care to keep you healthy. Regular checkups help detect potential health issues early.
              </p>
              <Link to="/corporate-screening" className="text-[#01BAEF] font-semibold flex items-center group">
                Learn More <ArrowRight className="ml-2 group-hover:ml-3 transition-all" size={20} />
              </Link>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover-lift group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#01BAEF] to-[#0B4F6C] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Microscope className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0B4F6C] mb-4">Specialized Treatments</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Expert care across multiple specialties including cardiology, orthopedics, and more with advanced treatment options.
              </p>
              <Link to="/digital-platform" className="text-[#01BAEF] font-semibold flex items-center group">
                Learn More <ArrowRight className="ml-2 group-hover:ml-3 transition-all" size={20} />
              </Link>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover-lift group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#01BAEF] to-[#0B4F6C] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Ambulance className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0B4F6C] mb-4">Emergency Services</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                24/7 emergency care with rapid response team and state-of-the-art emergency facilities for critical situations.
              </p>
              <Link to="/health-audits" className="text-[#01BAEF] font-semibold flex items-center group">
                Learn More <ArrowRight className="ml-2 group-hover:ml-3 transition-all" size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Health Awareness Programs */}
      <section className="py-20 bg-white" ref={programsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={programsInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <span className="text-[#01BAEF] font-semibold text-sm uppercase tracking-wide">Community Outreach</span>
                <h2 className="text-4xl font-bold text-[#0B4F6C] mt-2 mb-6">
                  Health Awareness Programs
                </h2>
              </motion.div>

              <motion.p className="text-gray-600 text-lg mb-6 leading-relaxed" variants={itemVariants}>
                We believe in empowering our community through education and awareness. Our health programs are designed to promote preventive care and healthy living.
              </motion.p>

              <motion.ul className="space-y-4 mb-8" variants={containerVariants}>
                <motion.li className="flex items-start gap-3" variants={itemVariants}>
                  <CheckCircle2 className="text-[#20E3B2] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-[#0B4F6C] mb-1">Free Health Camps</h4>
                    <p className="text-gray-600">Regular community health screening camps in various locations</p>
                  </div>
                </motion.li>
                <motion.li className="flex items-start gap-3" variants={itemVariants}>
                  <CheckCircle2 className="text-[#20E3B2] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-[#0B4F6C] mb-1">Wellness Workshops</h4>
                    <p className="text-gray-600">Educational sessions on nutrition, fitness, and disease prevention</p>
                  </div>
                </motion.li>
                <motion.li className="flex items-start gap-3" variants={itemVariants}>
                  <CheckCircle2 className="text-[#20E3B2] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-[#0B4F6C] mb-1">School Health Programs</h4>
                    <p className="text-gray-600">Health education and screening programs for students</p>
                  </div>
                </motion.li>
              </motion.ul>

              <motion.div variants={itemVariants}>
                <Link to="/partnerships">
                  <Button size="lg" className="bg-[#01BAEF] hover:bg-[#0B4F6C] hover-lift">
                    Join Our Programs
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={programsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={process.env.PUBLIC_URL + '/indian_health_awareness.png'}
                  alt="Health Awareness Program"
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800';
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#0B4F6C] to-[#01BAEF] text-white" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-100">Trusted by thousands for quality healthcare</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl font-bold text-[#20E3B2] mb-2">50K+</div>
              <p className="text-gray-100">Patients Served</p>
            </motion.div>
            <motion.div
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl font-bold text-[#20E3B2] mb-2">100+</div>
              <p className="text-gray-100">Expert Doctors</p>
            </motion.div>
            <motion.div
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl font-bold text-[#20E3B2] mb-2">25+</div>
              <p className="text-gray-100">Specialties</p>
            </motion.div>
            <motion.div
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl font-bold text-[#20E3B2] mb-2">15+</div>
              <p className="text-gray-100">Years Experience</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#01BAEF] font-semibold text-sm uppercase tracking-wide">Why Choose Us</span>
            <h2 className="text-4xl font-bold text-[#0B4F6C] mt-2 mb-4">
              Excellence in Every Aspect of Care
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#01BAEF]/10 to-[#0B4F6C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-[#01BAEF]" size={36} />
              </div>
              <h3 className="text-xl font-bold text-[#0B4F6C] mb-3">Compassionate Care</h3>
              <p className="text-gray-600">Patient-centered approach with empathy and understanding</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#01BAEF]/10 to-[#0B4F6C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="text-[#01BAEF]" size={36} />
              </div>
              <h3 className="text-xl font-bold text-[#0B4F6C] mb-3">Advanced Technology</h3>
              <p className="text-gray-600">State-of-the-art medical equipment and facilities</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#01BAEF]/10 to-[#0B4F6C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#01BAEF]" size={36} />
              </div>
              <h3 className="text-xl font-bold text-[#0B4F6C] mb-3">Expert Team</h3>
              <p className="text-gray-600">Highly qualified and experienced medical professionals</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#01BAEF]/10 to-[#0B4F6C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-[#01BAEF]" size={36} />
              </div>
              <h3 className="text-xl font-bold text-[#0B4F6C] mb-3">24/7 Availability</h3>
              <p className="text-gray-600">Round-the-clock emergency and support services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#01BAEF] to-[#0B4F6C] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Quality Healthcare?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Book your appointment today and take the first step towards better health
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white bg-white text-[#0B4F6C] hover:bg-gray-100 hover-lift">
                <Phone className="mr-2" size={20} />
                Book Appointment
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#0B4F6C] hover-lift">
                <Mail className="mr-2" size={20} />
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#20E3B2] flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold mb-1">Visit Us</h4>
                <p className="text-sm text-gray-100">123 Healthcare Avenue, Medical District</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-[#20E3B2] flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold mb-1">Call Us</h4>
                <p className="text-sm text-gray-100">+91 1800-XXX-XXXX</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-[#20E3B2] flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold mb-1">Email Us</h4>
                <p className="text-sm text-gray-100">info@neoonehealth.com</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
