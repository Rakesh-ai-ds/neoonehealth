import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Shield, Zap, Heart, Award, Users, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const values = [
    { icon: Shield, title: 'Integrity & Security', desc: 'Protecting patient data is our highest priority. We maintain the strictest standards for data privacy and security, ensuring complete trust.' },
    { icon: Zap, title: 'Empowerment', desc: 'Giving employees and HR managers the data they need to make positive choices. Knowledge is power, and we put it in the hands of those who need it most.' },
    { icon: Target, title: 'Proactive Innovation', desc: "Never settling for reactive healthcare. We're constantly optimizing for prevention, using the latest technology and medical science." }
  ];

  const team = [
    { name: 'Dr. Sarah Mitchell', role: 'Chief Executive Officer', desc: 'Former Chief Medical Officer at a Fortune 500 healthcare company. 20+ years experience in preventative medicine and corporate wellness.', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80' },
    { name: 'Dr. James Chen', role: 'Chief Medical Officer', desc: 'Board-certified physician specializing in occupational health. Published researcher in workplace wellness and preventative care.', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80' },
    { name: 'Michael Rodriguez', role: 'Chief Technology Officer', desc: 'Former VP of Engineering at leading health tech startup. Expert in HIPAA-compliant systems and scalable healthcare platforms.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B4F6C] via-[#01BAEF] to-[#0B4F6C] text-white pt-32 pb-20 overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <motion.span
              className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4"
              variants={fadeInUp}
            >
              About NeoOne Health
            </motion.span>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              Your Health, Our Priority
            </motion.h1>
            <motion.p
              className="text-xl text-gray-100"
              variants={fadeInUp}
            >
              We're on a mission to provide accessible, affordable, and quality healthcare to everyone. From individual wellness to corporate health programs, we've got you covered.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {[
              { number: '15+', label: 'Years Experience', icon: Award },
              { number: '50,000+', label: 'Happy Patients', icon: Users },
              { number: '100+', label: 'Expert Doctors', icon: Heart },
              { number: '24/7', label: 'Support Available', icon: Clock }
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex flex-col items-center">
                <stat.icon className="text-[#20BF55] mb-2" size={28} />
                <p className="text-2xl md:text-3xl font-bold text-[#0B4F6C]">{stat.number}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story & Vision */}
      <section className="py-20" ref={storyRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
              variants={fadeInLeft}
            >
              <h2 className="text-4xl font-bold text-[#0B4F6C] mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                NeoOne Health was founded with a simple belief: <strong>everyone deserves access to quality healthcare</strong>. We started as a small clinic and have grown into a comprehensive healthcare provider serving thousands of families.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Today, we offer a wide range of services from personal wellness programs to corporate health solutions, all powered by modern technology and delivered with compassion.
              </p>
              <p className="text-lg text-gray-700">
                Our team of experienced doctors, nutritionists, and wellness experts work together to provide holistic care that addresses your physical, mental, and emotional well-being.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
              variants={fadeInRight}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80"
                alt="Modern Healthcare"
                className="rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>

          <motion.div
            className="mt-16 bg-gradient-to-r from-[#0B4F6C] to-[#01BAEF] p-12 rounded-2xl text-center text-white"
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-xl max-w-4xl mx-auto">
              "To be the most trusted healthcare partner for individuals, families, and organizations - making quality healthcare accessible to everyone."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={valuesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <span className="text-[#20BF55] font-semibold text-sm uppercase tracking-wider">What We Believe</span>
            <h2 className="text-4xl font-bold text-[#0B4F6C] mt-2 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-[#20BF55] to-[#01BAEF] rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <value.icon className="text-white" size={36} />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#0B4F6C] mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white" ref={teamRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <span className="text-[#20BF55] font-semibold text-sm uppercase tracking-wider">Meet Our Team</span>
            <h2 className="text-4xl font-bold text-[#0B4F6C] mt-2 mb-4">Leadership & Expertise</h2>
            <p className="text-xl text-gray-600">Backed by clinical excellence and dedication</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B4F6C]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
                <h3 className="text-xl font-bold text-[#0B4F6C] mb-2">{member.name}</h3>
                <p className="text-[#20BF55] font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#20BF55] to-[#01BAEF] text-white py-20" ref={ctaRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Health?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Join thousands of satisfied patients who have made NeoOne Health their trusted healthcare partner.
            </p>
            <Link to="/contact">
              <motion.button
                className="px-10 py-4 bg-white text-[#0B4F6C] rounded-lg font-bold text-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book an Appointment
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
