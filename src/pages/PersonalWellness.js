import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Apple, Brain, Shield, Activity, Dumbbell, Salad, Smile } from 'lucide-react';

const PersonalWellness = () => {
    const location = useLocation();

    const [fitnessRef, fitnessInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [nutritionRef, nutritionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [mentalRef, mentalInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [preventiveRef, preventiveInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
            <section className="relative bg-gradient-to-br from-[#20BF55] to-[#01BAEF] text-white pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Personal Wellness Programs
                        </h1>
                        <p className="text-xl text-gray-100 mb-8">
                            Transform your health with personalized wellness solutions designed for your unique lifestyle
                        </p>
                        <Link to="/contact">
                            <motion.button
                                className="px-8 py-4 bg-white text-[#20BF55] rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Your Wellness Journey
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="py-6 bg-white border-b sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#fitness" className="px-6 py-3 bg-[#20BF55]/10 text-[#0B4F6C] rounded-lg font-semibold hover:bg-[#20BF55] hover:text-white transition-colors">
                            Fitness & Exercise
                        </a>
                        <a href="#nutrition" className="px-6 py-3 bg-[#20BF55]/10 text-[#0B4F6C] rounded-lg font-semibold hover:bg-[#20BF55] hover:text-white transition-colors">
                            Nutrition & Diet
                        </a>
                        <a href="#mental-health" className="px-6 py-3 bg-[#20BF55]/10 text-[#0B4F6C] rounded-lg font-semibold hover:bg-[#20BF55] hover:text-white transition-colors">
                            Mental Health
                        </a>
                        <a href="#preventive-care" className="px-6 py-3 bg-[#20BF55]/10 text-[#0B4F6C] rounded-lg font-semibold hover:bg-[#20BF55] hover:text-white transition-colors">
                            Preventive Care
                        </a>
                    </div>
                </div>
            </section>

            {/* Fitness & Exercise Section */}
            <section id="fitness" className="py-20 bg-white scroll-mt-32" ref={fitnessRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            animate={fitnessInView ? "visible" : "hidden"}
                            variants={fadeInUp}
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#20BF55] to-[#01BAEF] rounded-full flex items-center justify-center mb-6">
                                <Dumbbell className="text-white" size={32} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] mb-4">Fitness & Exercise</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Our customized fitness programs are designed to help you achieve your health goals, whether you're just starting or looking to enhance your current routine.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-700">
                                    <Activity className="text-[#20BF55] mr-3" size={20} />
                                    Personalized workout plans
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Activity className="text-[#20BF55] mr-3" size={20} />
                                    Home & gym exercise routines
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Activity className="text-[#20BF55] mr-3" size={20} />
                                    Yoga & flexibility training
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Activity className="text-[#20BF55] mr-3" size={20} />
                                    Progress tracking & monitoring
                                </li>
                            </ul>
                            <Link to="/contact">
                                <button className="px-6 py-3 bg-[#20BF55] text-white rounded-lg font-semibold hover:bg-[#1aa548] transition-colors">
                                    Get Started
                                </button>
                            </Link>
                        </motion.div>
                        <motion.div
                            className="rounded-2xl overflow-hidden shadow-2xl"
                            initial="hidden"
                            animate={fitnessInView ? "visible" : "hidden"}
                            variants={fadeInUp}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80"
                                alt="Fitness and Exercise"
                                className="w-full h-80 object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Nutrition & Diet Section */}
            <section id="nutrition" className="py-20 bg-gradient-to-br from-gray-50 to-green-50 scroll-mt-32" ref={nutritionRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
                            initial="hidden"
                            animate={nutritionInView ? "visible" : "hidden"}
                            variants={fadeInUp}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80"
                                alt="Nutrition and Healthy Diet"
                                className="w-full h-80 object-cover"
                            />
                        </motion.div>
                        <motion.div
                            className="order-1 lg:order-2"
                            initial="hidden"
                            animate={nutritionInView ? "visible" : "hidden"}
                            variants={fadeInUp}
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#FF7F11] to-[#FFD700] rounded-full flex items-center justify-center mb-6">
                                <Salad className="text-white" size={32} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] mb-4">Nutrition & Diet</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Fuel your body with the right nutrition. Our expert dieticians create personalized meal plans tailored to your health needs and goals.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-700">
                                    <Apple className="text-[#FF7F11] mr-3" size={20} />
                                    Customized meal planning
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Apple className="text-[#FF7F11] mr-3" size={20} />
                                    Nutritional counseling
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Apple className="text-[#FF7F11] mr-3" size={20} />
                                    Weight management programs
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Apple className="text-[#FF7F11] mr-3" size={20} />
                                    Diet for specific conditions
                                </li>
                            </ul>
                            <Link to="/contact">
                                <button className="px-6 py-3 bg-[#FF7F11] text-white rounded-lg font-semibold hover:bg-[#e56e0e] transition-colors">
                                    Consult a Dietician
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mental Health Section */}
            <section id="mental-health" className="py-20 bg-white scroll-mt-32" ref={mentalRef}>
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
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] mb-4">Mental Health</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Your mental well-being is just as important as your physical health. We provide comprehensive mental health support to help you thrive.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-700">
                                    <Smile className="text-[#9B59B6] mr-3" size={20} />
                                    Stress management techniques
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Smile className="text-[#9B59B6] mr-3" size={20} />
                                    Anxiety & depression support
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Smile className="text-[#9B59B6] mr-3" size={20} />
                                    Mindfulness & meditation
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Smile className="text-[#9B59B6] mr-3" size={20} />
                                    Counseling sessions
                                </li>
                            </ul>
                            <Link to="/contact">
                                <button className="px-6 py-3 bg-[#9B59B6] text-white rounded-lg font-semibold hover:bg-[#8e44ad] transition-colors">
                                    Talk to an Expert
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
                                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
                                alt="Mental Health and Meditation"
                                className="w-full h-80 object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Preventive Care Section */}
            <section id="preventive-care" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 scroll-mt-32" ref={preventiveRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
                            initial="hidden"
                            animate={preventiveInView ? "visible" : "hidden"}
                            variants={fadeInUp}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                                alt="Preventive Healthcare"
                                className="w-full h-80 object-cover"
                            />
                        </motion.div>
                        <motion.div
                            className="order-1 lg:order-2"
                            initial="hidden"
                            animate={preventiveInView ? "visible" : "hidden"}
                            variants={fadeInUp}
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#01BAEF] to-[#0B4F6C] rounded-full flex items-center justify-center mb-6">
                                <Shield className="text-white" size={32} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] mb-4">Preventive Care</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Prevention is better than cure. Our preventive care programs help you identify and address health risks before they become serious issues.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-700">
                                    <Heart className="text-[#01BAEF] mr-3" size={20} />
                                    Regular health check-ups
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Heart className="text-[#01BAEF] mr-3" size={20} />
                                    Screening for chronic diseases
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Heart className="text-[#01BAEF] mr-3" size={20} />
                                    Lifestyle risk assessment
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Heart className="text-[#01BAEF] mr-3" size={20} />
                                    Vaccination & immunization
                                </li>
                            </ul>
                            <Link to="/contact">
                                <button className="px-6 py-3 bg-[#01BAEF] text-white rounded-lg font-semibold hover:bg-[#00a8d9] transition-colors">
                                    Book a Check-up
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#20BF55] to-[#01BAEF] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Wellness Journey Today</h2>
                    <p className="text-xl text-gray-100 mb-8">
                        Take the first step towards a healthier, happier you. Our experts are ready to guide you.
                    </p>
                    <Link to="/contact">
                        <motion.button
                            className="px-10 py-4 bg-white text-[#20BF55] rounded-lg font-bold text-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started Now
                        </motion.button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default PersonalWellness;
