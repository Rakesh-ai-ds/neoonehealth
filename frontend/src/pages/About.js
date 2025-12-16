import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Shield, Zap, Heart, Award, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
  const fadeInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

  const values = [
    { icon: Shield, title: 'Integrity & Security', desc: 'Protecting patient data with the strictest standards for privacy and security.' },
    { icon: Zap, title: 'Empowerment', desc: 'Giving you the knowledge and tools to make informed health decisions.' },
    { icon: Target, title: 'Proactive Innovation', desc: 'Using the latest technology and science for prevention-focused care.' }
  ];

  const team = [
    { name: 'Dr. Sarah Mitchell', role: 'Chief Executive Officer', desc: 'Former Chief Medical Officer with 20+ years in preventative medicine.', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80' },
    { name: 'Dr. James Chen', role: 'Chief Medical Officer', desc: 'Board-certified physician specializing in occupational health.', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80' },
    { name: 'Michael Rodriguez', role: 'Chief Technology Officer', desc: 'Expert in HIPAA-compliant systems and healthcare platforms.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-white via-[#F8FAFC] to-[#EFF6FF]" ref={heroRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="max-w-4xl" initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={fadeInUp}>
            <span className="inline-block bg-[#2563EB]/10 border border-[#2563EB]/20 px-4 py-2 rounded-full text-[#2563EB] text-sm font-medium mb-6">About NeoOne Health</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-6 leading-tight">Your Health, <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">Our Priority</span></h1>
            <p className="text-lg text-[#64748B]">We're on a mission to provide accessible, affordable, and quality healthcare to everyone. From individual wellness to corporate health programs, we've got you covered.</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" initial="hidden" animate="visible" variants={staggerContainer}>
            {[{ number: '15+', label: 'Years Experience', icon: Award }, { number: '50,000+', label: 'Happy Patients', icon: Users }, { number: '100+', label: 'Expert Doctors', icon: Heart }, { number: '24/7', label: 'Support Available', icon: Clock }].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex flex-col items-center">
                <stat.icon className="text-[#2563EB] mb-2" size={28} />
                <p className="text-2xl md:text-3xl font-bold text-[#1E293B]">{stat.number}</p>
                <p className="text-[#64748B] text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story & Vision */}
      <section className="py-20 bg-white" ref={storyRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate={storyInView ? "visible" : "hidden"} variants={fadeInLeft}>
              <h2 className="text-4xl font-bold text-[#1E293B] mb-6">Our Story</h2>
              <p className="text-lg text-[#64748B] mb-6">NeoOne Health was founded with a simple belief: <strong className="text-[#1E293B]">everyone deserves access to quality healthcare</strong>. We started as a small clinic and have grown into a comprehensive healthcare provider serving thousands of families.</p>
              <p className="text-lg text-[#64748B] mb-6">Today, we offer a wide range of services from personal wellness programs to corporate health solutions, all powered by modern technology and delivered with compassion.</p>
              <p className="text-lg text-[#64748B]">Our team of experienced doctors, nutritionists, and wellness experts work together to provide holistic care that addresses your physical, mental, and emotional well-being.</p>
            </motion.div>
            <motion.div initial="hidden" animate={storyInView ? "visible" : "hidden"} variants={fadeInRight}>
              <motion.img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80" alt="Modern Healthcare" className="rounded-2xl border border-gray-100 shadow-lg" whileHover={{ scale: 1.02 }} />
            </motion.div>
          </div>
          <motion.div className="mt-16 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] p-12 rounded-2xl text-center" initial="hidden" animate={storyInView ? "visible" : "hidden"} variants={fadeInUp}>
            <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
            <p className="text-xl text-white/90 max-w-4xl mx-auto">"To be the most trusted healthcare partner for individuals, families, and organizations - making quality healthcare accessible to everyone."</p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#F8FAFC]" ref={valuesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial="hidden" animate={valuesInView ? "visible" : "hidden"} variants={fadeInUp}>
            <span className="text-[#2563EB] font-medium text-sm uppercase tracking-wider">What We Believe</span>
            <h2 className="text-4xl font-bold text-[#1E293B] mt-2 mb-4">Our Core Values</h2>
            <p className="text-xl text-[#64748B]">The principles that guide everything we do</p>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" initial="hidden" animate={valuesInView ? "visible" : "hidden"} variants={staggerContainer}>
            {values.map((value, index) => (
              <motion.div key={index} className="bg-white border border-gray-100 p-8 rounded-2xl text-center shadow-sm hover:shadow-lg transition-all" variants={fadeInUp} whileHover={{ y: -10 }}>
                <div className="w-16 h-16 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center mx-auto mb-6"><value.icon className="text-[#2563EB]" size={32} /></div>
                <h3 className="text-2xl font-bold text-[#1E293B] mb-4">{value.title}</h3>
                <p className="text-[#64748B]">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white" ref={teamRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial="hidden" animate={teamInView ? "visible" : "hidden"} variants={fadeInUp}>
            <span className="text-[#2563EB] font-medium text-sm uppercase tracking-wider">Meet Our Team</span>
            <h2 className="text-4xl font-bold text-[#1E293B] mt-2 mb-4">Leadership & Expertise</h2>
            <p className="text-xl text-[#64748B]">Backed by clinical excellence and dedication</p>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" initial="hidden" animate={teamInView ? "visible" : "hidden"} variants={staggerContainer}>
            {team.map((member, index) => (
              <motion.div key={index} className="bg-[#F8FAFC] border border-gray-100 p-8 rounded-2xl text-center group hover:shadow-lg transition-all" variants={fadeInUp} whileHover={{ y: -10 }}>
                <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gray-200"><img src={member.img} alt={member.name} className="w-full h-full object-cover" /></div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-2">{member.name}</h3>
                <p className="text-[#2563EB] font-semibold mb-4">{member.role}</p>
                <p className="text-[#64748B] text-sm">{member.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2563EB] to-[#38BDF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Health?</h2>
            <p className="text-xl text-white/80 mb-8">Join thousands of satisfied patients who have made NeoOne Health their trusted healthcare partner.</p>
            <Link to="/contact"><motion.button className="px-10 py-4 bg-white text-[#2563EB] rounded-xl font-bold text-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Book an Appointment</motion.button></Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
