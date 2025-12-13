import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, ClipboardCheck, Brain, BarChart3, Heart, Users, Shield, TrendingUp } from 'lucide-react';

const CorporateHealth = () => {
    const location = useLocation();

    const [screeningRef, screeningInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [wellnessRef, wellnessInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [mentalRef, mentalInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [auditsRef, auditsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    // Scroll to section when hash changes
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    const navbarHeight = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#0B4F6C] to-[#01BAEF] text-white pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Corporate Health Solutions
                        </h1>
                        <p className="text-xl text-gray-100 mb-8">
                            Empower your workforce with comprehensive health programs that boost productivity and employee well-being
                        </p>
                        <Link to="/contact">
                            <motion.button
                                className="px-8 py-4 bg-white text-[#0B4F6C] rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get a Corporate Quote
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="py-6 bg-white border-b sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#screening" className="px-6 py-3 bg-[#0B4F6C]/10 text-[#0B4F6C] rounded-lg font-semibold hover:bg-[#0B4F6C] hover:text-white transition-colors">
                            Health Screening
                        </a>
                        <a href="#wellness-programs" className="px-6 py-3 bg-[#0B4F6C]/10 text-[#0B4F6C] rounded-lg font-semibold hover:bg-[#0B4F6C] hover:text-white transition-colors">
                            Wellness Programs
                        </a>
                        <a href="#mental-wellness" className="px-6 py-3 bg-[#0B4F6C]/10 text-[#0B4F6C] rounded-lg font-semibold hover:bg-[#0B4F6C] hover:text-white transition-colors">
                            Mental Wellness
                        </a>
                        <a href="#health-audits" className="px-6 py-3 bg-[#0B4F6C]/10 text-[#0B4F6C] rounded-lg font-semibold hover:bg-[#0B4F6C] hover:text-white transition-colors">
                            Health Audits
                        </a>
                    </div>
                </div>
            </section>

            {/* Health Screening Section */}
            <section id="screening" className="py-20 bg-white scroll-mt-32" ref={screeningRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            animate={screeningInView ? "visible" : "hidden"}
                            variants={fadeInUp}
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#0B4F6C] to-[#01BAEF] rounded-full flex items-center justify-center mb-6">
                                <ClipboardCheck className="text-white" size={32} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] mb-4">Health Screening</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Comprehensive health screening programs for your employees to identify health risks early and promote preventive care.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-700">
                                    <Shield className="text-[#0B4F6C] mr-3" size={20} />
                                    Full body health check-ups
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Shield className="text-[#0B4F6C] mr-3" size={20} />
                                    Blood work & lab tests
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Shield className="text-[#0B4F6C] mr-3" size={20} />
                                    Cardiac health assessment
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Shield className="text-[#0B4F6C] mr-3" size={20} />
                                    Executive health packages
                                </li>
                            </ul>
                            <Link to="/contact">
                                <button className="px-6 py-3 bg-[#0B4F6C] text-white rounded-lg font-semibold hover:bg-[#0a4560] transition-colors">
                                    Schedule Screening
                                </button>
                            </Link>
                        </motion.div>
                        <motion.div
                            className="rounded-2xl overflow-hidden shadow-2xl"
                            initial="hidden"
                            animate={screeningInView ? "visible" : "hidden"}
                            variants={fadeInUp}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                                alt="Corporate Health Screening"
                                className="w-full h-80 object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Wellness Programs Section */}
            <section id="wellness-programs" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 scroll-mt-32" ref={wellnessRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
                            initial="hidden"
                            animate={wellnessInView ? "visible" : "hidden"}
                            variants={fadeInUp}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80"
                                alt="Corporate Wellness Programs"
                                className="w-full h-80 object-cover"
                            />
                        </motion.div>
                        <motion.div
                            className="order-1 lg:order-2"
                            initial="hidden"
                            animate={wellnessInView ? "visible" : "hidden"}
                            variants={fadeInUp}
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#20BF55] to-[#01BAEF] rounded-full flex items-center justify-center mb-6">
                                <Users className="text-white" size={32} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] mb-4">Wellness Programs</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Customized wellness initiatives designed to improve employee health, engagement, and workplace productivity.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-700">
                                    <Heart className="text-[#20BF55] mr-3" size={20} />
                                    Fitness & exercise programs
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Heart className="text-[#20BF55] mr-3" size={20} />
                                    Nutrition workshops
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Heart className="text-[#20BF55] mr-3" size={20} />
                                    Health awareness campaigns
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Heart className="text-[#20BF55] mr-3" size={20} />
                                    Workplace ergonomics
                                </li>
                            </ul>
                            <Link to="/contact">
                                <button className="px-6 py-3 bg-[#20BF55] text-white rounded-lg font-semibold hover:bg-[#1aa548] transition-colors">
                                    Design Your Program
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mental Wellness Section */}
            <section id="mental-wellness" className="py-20 bg-white scroll-mt-32" ref={mentalRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            animate={mentalInView ? "visible" : "hidden"}
                            variants={fadeInUp}
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#9B59B6] to-[#E91E63] rounded-full flex items-center justify-center mb-6">
                                <Brain className="text-white" size={32} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] mb-4">Mental Wellness</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Support your employees' mental health with our comprehensive workplace mental wellness programs.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-700">
                                    <TrendingUp className="text-[#9B59B6] mr-3" size={20} />
                                    Employee Assistance Programs (EAP)
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <TrendingUp className="text-[#9B59B6] mr-3" size={20} />
                                    Stress management workshops
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <TrendingUp className="text-[#9B59B6] mr-3" size={20} />
                                    Work-life balance counseling
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <TrendingUp className="text-[#9B59B6] mr-3" size={20} />
                                    Mindfulness & meditation sessions
                                </li>
                            </ul>
                            <Link to="/contact">
                                <button className="px-6 py-3 bg-[#9B59B6] text-white rounded-lg font-semibold hover:bg-[#8e44ad] transition-colors">
                                    Get Support
                                </button>
                            </Link>
                        </motion.div>
                        <motion.div
                            className="rounded-2xl overflow-hidden shadow-2xl"
                            initial="hidden"
                            animate={mentalInView ? "visible" : "hidden"}
                            variants={fadeInUp}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80"
                                alt="Workplace Mental Wellness"
                                className="w-full h-80 object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Health Audits Section */}
            <section id="health-audits" className="py-20 bg-gradient-to-br from-gray-50 to-green-50 scroll-mt-32" ref={auditsRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
                            initial="hidden"
                            animate={auditsInView ? "visible" : "hidden"}
                            variants={fadeInUp}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                                alt="Health Audits and Reporting"
                                className="w-full h-80 object-cover"
                            />
                        </motion.div>
                        <motion.div
                            className="order-1 lg:order-2"
                            initial="hidden"
                            animate={auditsInView ? "visible" : "hidden"}
                            variants={fadeInUp}
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#FF7F11] to-[#FFD700] rounded-full flex items-center justify-center mb-6">
                                <BarChart3 className="text-white" size={32} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] mb-4">Health Audits</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Data-driven health audits to assess your organization's wellness status and develop targeted improvement strategies.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-700">
                                    <Building2 className="text-[#FF7F11] mr-3" size={20} />
                                    Organization health assessment
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Building2 className="text-[#FF7F11] mr-3" size={20} />
                                    Risk analysis & reporting
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Building2 className="text-[#FF7F11] mr-3" size={20} />
                                    ROI measurement
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Building2 className="text-[#FF7F11] mr-3" size={20} />
                                    Benchmarking & recommendations
                                </li>
                            </ul>
                            <Link to="/contact">
                                <button className="px-6 py-3 bg-[#FF7F11] text-white rounded-lg font-semibold hover:bg-[#e56e0e] transition-colors">
                                    Request Audit
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#0B4F6C] to-[#01BAEF] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Workplace Health</h2>
                    <p className="text-xl text-gray-100 mb-8">
                        Partner with NeoOne Health to create a healthier, more productive workforce.
                    </p>
                    <Link to="/contact">
                        <motion.button
                            className="px-10 py-4 bg-white text-[#0B4F6C] rounded-lg font-bold text-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Us Today
                        </motion.button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default CorporateHealth;
