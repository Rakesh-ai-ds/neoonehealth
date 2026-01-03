import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Users, Baby, Heart, Activity, Dumbbell, ClipboardList, ArrowRight, MapPin, Clock, CheckCircle, Phone, Mail, ChevronRight } from 'lucide-react';

const Workshops = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [workshopsRef, workshopsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [eventsRef, eventsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', workshop: '', message: '' });

    const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
    const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

    const workshops = [
        {
            id: 'children-health',
            title: "Children's Health Assessment",
            subtitle: "School & Pediatric Programs",
            description: "Comprehensive health screening for children including growth assessment, posture evaluation, and physical fitness testing. Perfect for schools and parents.",
            icon: Baby,
            color: '#38BDF8',
            features: ["Growth & Development Screening", "Posture Assessment", "Physical Fitness Testing", "Nutritional Guidance"],
            image: '/images/workshop-children.png'
        },
        {
            id: 'general-awareness',
            title: "General Health Awareness",
            subtitle: "Community Seminars",
            description: "Educational seminars covering essential health topics including disease prevention, healthy lifestyle habits, and early warning signs to watch for.",
            icon: Heart,
            color: '#EF4444',
            features: ["Disease Prevention", "Lifestyle Education", "Early Warning Signs", "Q&A Sessions"],
            image: '/images/hero-2.png'
        },
        {
            id: 'physical-wellness',
            title: "Physical Health & Wellness",
            subtitle: "Fitness Assessments",
            description: "Complete physical wellness evaluation including cardiovascular health, flexibility assessment, strength testing, and personalized recommendations.",
            icon: Activity,
            color: '#22C55E',
            features: ["Cardiovascular Assessment", "Flexibility Testing", "Strength Evaluation", "Wellness Reports"],
            image: '/images/workshop-fitness.png'
        },
        {
            id: 'hep-fitness',
            title: "HEP & Fitness Training",
            subtitle: "Home Exercise Program",
            description: "Learn how to create and follow a personalized Home Exercise Program (HEP) tailored to your specific health conditions and fitness goals.",
            icon: Dumbbell,
            color: '#7C3AED',
            features: ["Personalized Exercise Plans", "Proper Technique Training", "Progress Tracking", "Video Demonstrations"],
            image: '/images/hero-1.png'
        },
        {
            id: 'home-exercise',
            title: "Home Exercise Protocols",
            subtitle: "Tailored for Your Conditions",
            description: "Structured exercise protocols designed for specific health conditions like back pain, joint issues, post-surgery recovery, and chronic conditions.",
            icon: ClipboardList,
            color: '#D97706',
            features: ["Condition-Specific Programs", "Safe Exercise Techniques", "Recovery Protocols", "Home Equipment Guidance"],
            image: '/images/hero-5.png'
        },
        {
            id: 'elderly-wellness',
            title: "Senior Wellness Programs",
            subtitle: "Active Aging Workshops",
            description: "Specialized programs for seniors focusing on fall prevention, flexibility maintenance, strength building, and maintaining independence.",
            icon: Users,
            color: '#2563EB',
            features: ["Fall Prevention", "Balance Training", "Gentle Strength Exercises", "Social Wellness"],
            image: '/images/hero-4.png'
        }
    ];

    const upcomingEvents = [
        { title: "Children's Health Camp", date: "Jan 15, 2025", time: "9:00 AM - 4:00 PM", location: "NeoOne Health Center", spots: 25 },
        { title: "HEP Training Workshop", date: "Jan 22, 2025", time: "10:00 AM - 1:00 PM", location: "Community Hall", spots: 40 },
        { title: "Senior Wellness Day", date: "Feb 5, 2025", time: "9:00 AM - 12:00 PM", location: "NeoOne Health Center", spots: 30 }
    ];

    const howItWorks = [
        { step: 1, title: "Choose Workshop", desc: "Select a workshop that matches your health goals" },
        { step: 2, title: "Register", desc: "Fill out the inquiry form or call us to reserve your spot" },
        { step: 3, title: "Attend", desc: "Join the session and learn from our expert physiotherapists" },
        { step: 4, title: "Apply at Home", desc: "Use your new knowledge and protocols for lasting health" }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry! We will contact you within 24 hours.');
        setFormData({ name: '', email: '', phone: '', workshop: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-[#2563EB]/5 via-white to-[#38BDF8]/5" ref={heroRef}>
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial="hidden"
                        animate={heroInView ? "visible" : "hidden"}
                        variants={fadeInUp}
                    >
                        <span className="inline-block bg-[#2563EB]/10 border border-[#2563EB]/20 px-4 py-2 rounded-full text-[#2563EB] text-sm font-medium mb-6">
                            <Calendar className="inline w-4 h-4 mr-2" />
                            Health Awareness Programs
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B] mb-6 leading-tight">
                            Workshops & <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">Events</span>
                        </h1>
                        <p className="text-lg md:text-xl text-[#64748B] mb-8 max-w-2xl mx-auto">
                            Join our expert-led workshops on children's health, fitness, home exercise protocols, and wellness awareness. Learn practical skills for lasting health.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#workshops">
                                <motion.button
                                    className="px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    View Workshops <ArrowRight size={18} />
                                </motion.button>
                            </a>
                            <a href="#inquiry">
                                <motion.button
                                    className="px-8 py-4 border-2 border-[#2563EB] text-[#2563EB] rounded-xl font-bold"
                                    whileHover={{ backgroundColor: '#2563EB', color: 'white' }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Register Interest
                                </motion.button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Workshops Grid */}
            <section id="workshops" className="py-16 md:py-24 bg-[#F8FAFC] scroll-mt-20" ref={workshopsRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        animate={workshopsInView ? "visible" : "hidden"}
                        variants={fadeInUp}
                    >
                        <span className="text-[#2563EB] font-medium text-sm uppercase tracking-wider">Our Programs</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mt-2 mb-4">Workshop Categories</h2>
                        <p className="text-[#64748B] max-w-2xl mx-auto">Choose from our range of health awareness and fitness workshops designed for all ages and needs.</p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                        initial="hidden"
                        animate={workshopsInView ? "visible" : "hidden"}
                        variants={staggerContainer}
                    >
                        {workshops.map((workshop, index) => (
                            <motion.div
                                key={workshop.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                                variants={fadeInUp}
                                whileHover={{ y: -8 }}
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={workshop.image}
                                        alt={workshop.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute top-4 left-4">
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                                            style={{ backgroundColor: `${workshop.color}20` }}
                                        >
                                            <workshop.icon size={20} style={{ color: workshop.color }} />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <span className="text-white/80 text-xs font-medium">{workshop.subtitle}</span>
                                        <h3 className="text-white font-bold text-lg">{workshop.title}</h3>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <p className="text-[#64748B] text-sm mb-4 line-clamp-2">{workshop.description}</p>

                                    <div className="space-y-2 mb-4">
                                        {workshop.features.slice(0, 3).map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm">
                                                <CheckCircle size={14} style={{ color: workshop.color }} />
                                                <span className="text-[#64748B]">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a href="#inquiry">
                                        <button
                                            className="w-full py-2.5 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all"
                                            style={{ backgroundColor: `${workshop.color}10`, color: workshop.color }}
                                        >
                                            Learn More <ChevronRight size={16} />
                                        </button>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why Attend Our Workshops */}
            <section className="py-16 md:py-24 bg-white" ref={eventsRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial="hidden"
                        animate={eventsInView ? "visible" : "hidden"}
                        variants={fadeInUp}
                    >
                        <span className="text-[#22C55E] font-medium text-sm uppercase tracking-wider">Benefits</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mt-2 mb-4">Why Attend Our Workshops</h2>
                        <p className="text-[#64748B] max-w-2xl mx-auto">Gain practical knowledge and skills from certified professionals</p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        initial="hidden"
                        animate={eventsInView ? "visible" : "hidden"}
                        variants={staggerContainer}
                    >
                        <motion.div
                            className="bg-gradient-to-br from-white to-[#F8FAFC] border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all"
                            variants={fadeInUp}
                        >
                            <div className="w-14 h-14 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Users className="text-[#2563EB]" size={28} />
                            </div>
                            <h3 className="text-[#1E293B] font-bold text-lg mb-2">Expert-Led Sessions</h3>
                            <p className="text-[#64748B] text-sm">Learn directly from certified physiotherapists and health professionals with years of experience.</p>
                        </motion.div>

                        <motion.div
                            className="bg-gradient-to-br from-white to-[#F8FAFC] border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all"
                            variants={fadeInUp}
                        >
                            <div className="w-14 h-14 bg-[#22C55E]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <ClipboardList className="text-[#22C55E]" size={28} />
                            </div>
                            <h3 className="text-[#1E293B] font-bold text-lg mb-2">Personalized Plans</h3>
                            <p className="text-[#64748B] text-sm">Receive tailored exercise protocols and health recommendations based on your specific conditions.</p>
                        </motion.div>

                        <motion.div
                            className="bg-gradient-to-br from-white to-[#F8FAFC] border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all"
                            variants={fadeInUp}
                        >
                            <div className="w-14 h-14 bg-[#7C3AED]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Heart className="text-[#7C3AED]" size={28} />
                            </div>
                            <h3 className="text-[#1E293B] font-bold text-lg mb-2">Lasting Health Skills</h3>
                            <p className="text-[#64748B] text-sm">Take home practical knowledge and techniques you can apply daily for long-term wellness.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-[#2563EB] to-[#38BDF8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
                        <p className="text-white/80 max-w-xl mx-auto">Simple steps to join our health workshops</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {howItWorks.map((item, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                    {item.step}
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-white/70 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Inquiry Form */}
            <section id="inquiry" className="py-16 md:py-24 bg-[#F8FAFC] scroll-mt-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-[#2563EB] font-medium text-sm uppercase tracking-wider">Get Started</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mt-2 mb-4">Register Your Interest</h2>
                        <p className="text-[#64748B]">Fill out the form below and we'll contact you with workshop details.</p>
                    </div>

                    <motion.div
                        className="bg-white rounded-2xl p-6 md:p-10 shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[#1E293B] font-medium text-sm mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[#1E293B] font-medium text-sm mb-2">Phone Number *</label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[#1E293B] font-medium text-sm mb-2">Email Address</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-[#1E293B] font-medium text-sm mb-2">Interested Workshop *</label>
                                <select
                                    required
                                    value={formData.workshop}
                                    onChange={(e) => setFormData({ ...formData, workshop: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all bg-white"
                                >
                                    <option value="">Select a workshop</option>
                                    {workshops.map(w => (
                                        <option key={w.id} value={w.id}>{w.title}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-[#1E293B] font-medium text-sm mb-2">Additional Message</label>
                                <textarea
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="Any specific questions or requirements..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white rounded-xl font-bold text-lg shadow-lg"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Submit Inquiry
                            </motion.button>
                        </form>

                        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
                            <a href="tel:+919876543210" className="flex items-center gap-2 text-[#64748B] hover:text-[#2563EB]">
                                <Phone size={16} /> +91 98765 43210
                            </a>
                            <a href="mailto:neoonehealth@gmail.com" className="flex items-center gap-2 text-[#64748B] hover:text-[#2563EB]">
                                <Mail size={16} /> neoonehealth@gmail.com
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Workshops;
