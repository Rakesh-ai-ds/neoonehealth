import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Baby, Syringe, TrendingUp, Apple, Heart, Stethoscope, Scale, Star } from 'lucide-react';

const ChildHealth = () => {
    const location = useLocation();

    const [pediatricRef, pediatricInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [vaccinationRef, vaccinationInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [growthRef, growthInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [nutritionRef, nutritionInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
            <section className="relative bg-gradient-to-br from-[#FF6B6B] to-[#FFE66D] text-white pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Child Health & Care
                        </h1>
                        <p className="text-xl text-gray-100 mb-8">
                            Comprehensive healthcare solutions for your little ones - from infancy through adolescence
                        </p>
                        <Link to="/contact">
                            <motion.button
                                className="px-8 py-4 bg-white text-[#FF6B6B] rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Book a Consultation
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="py-6 bg-white border-b sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#pediatric-care" className="px-6 py-3 bg-[#FF6B6B]/10 text-[#0B4F6C] rounded-lg font-semibold hover:bg-[#FF6B6B] hover:text-white transition-colors">
                            Pediatric Care
                        </a>
                        <a href="#vaccination" className="px-6 py-3 bg-[#FF6B6B]/10 text-[#0B4F6C] rounded-lg font-semibold hover:bg-[#FF6B6B] hover:text-white transition-colors">
                            Vaccination Programs
                        </a>
                        <a href="#growth-development" className="px-6 py-3 bg-[#FF6B6B]/10 text-[#0B4F6C] rounded-lg font-semibold hover:bg-[#FF6B6B] hover:text-white transition-colors">
                            Growth & Development
                        </a>
                        <a href="#child-nutrition" className="px-6 py-3 bg-[#FF6B6B]/10 text-[#0B4F6C] rounded-lg font-semibold hover:bg-[#FF6B6B] hover:text-white transition-colors">
                            Child Nutrition
                        </a>
                    </div>
                </div>
            </section>

            {/* Pediatric Care Section */}
            <section id="pediatric-care" className="py-20 bg-white scroll-mt-32" ref={pediatricRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            animate={pediatricInView ? "visible" : "hidden"}
                            variants={fadeInUp}
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B6B] to-[#FFE66D] rounded-full flex items-center justify-center mb-6">
                                <Stethoscope className="text-white" size={32} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] mb-4">Pediatric Care</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Our team of experienced pediatricians provides comprehensive healthcare for children of all ages, ensuring your child's health and happiness.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-700">
                                    <Heart className="text-[#FF6B6B] mr-3" size={20} />
                                    Regular health check-ups
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Heart className="text-[#FF6B6B] mr-3" size={20} />
                                    Childhood illness treatment
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Heart className="text-[#FF6B6B] mr-3" size={20} />
                                    Emergency pediatric care
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Heart className="text-[#FF6B6B] mr-3" size={20} />
                                    Specialist referrals
                                </li>
                            </ul>
                            <Link to="/contact">
                                <button className="px-6 py-3 bg-[#FF6B6B] text-white rounded-lg font-semibold hover:bg-[#e55555] transition-colors">
                                    Book Appointment
                                </button>
                            </Link>
                        </motion.div>
                        <motion.div
                            className="rounded-2xl overflow-hidden shadow-2xl"
                            initial="hidden"
                            animate={pediatricInView ? "visible" : "hidden"}
                            variants={fadeInUp}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80"
                                alt="Pediatric Care for Children"
                                className="w-full h-80 object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vaccination Programs Section */}
            <section id="vaccination" className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50 scroll-mt-32" ref={vaccinationRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
                            initial="hidden"
                            animate={vaccinationInView ? "visible" : "hidden"}
                            variants={fadeInUp}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&w=800&q=80"
                                alt="Child Vaccination"
                                className="w-full h-80 object-cover"
                            />
                        </motion.div>
                        <motion.div
                            className="order-1 lg:order-2"
                            initial="hidden"
                            animate={vaccinationInView ? "visible" : "hidden"}
                            variants={fadeInUp}
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#4ECDC4] to-[#556270] rounded-full flex items-center justify-center mb-6">
                                <Syringe className="text-white" size={32} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] mb-4">Vaccination Programs</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Keep your child protected with our comprehensive vaccination programs following the national immunization schedule.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-700">
                                    <Star className="text-[#4ECDC4] mr-3" size={20} />
                                    Complete immunization schedule
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Star className="text-[#4ECDC4] mr-3" size={20} />
                                    Vaccination reminders
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Star className="text-[#4ECDC4] mr-3" size={20} />
                                    Booster dose tracking
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Star className="text-[#4ECDC4] mr-3" size={20} />
                                    Digital vaccination records
                                </li>
                            </ul>
                            <Link to="/contact">
                                <button className="px-6 py-3 bg-[#4ECDC4] text-white rounded-lg font-semibold hover:bg-[#3dbdb5] transition-colors">
                                    Schedule Vaccination
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Growth & Development Section */}
            <section id="growth-development" className="py-20 bg-white scroll-mt-32" ref={growthRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            animate={growthInView ? "visible" : "hidden"}
                            variants={fadeInUp}
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full flex items-center justify-center mb-6">
                                <TrendingUp className="text-white" size={32} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] mb-4">Growth & Development</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Monitor your child's growth milestones and developmental progress with our specialized tracking and assessment programs.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-700">
                                    <Scale className="text-[#667eea] mr-3" size={20} />
                                    Height & weight monitoring
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Scale className="text-[#667eea] mr-3" size={20} />
                                    Developmental milestone tracking
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Scale className="text-[#667eea] mr-3" size={20} />
                                    Learning & cognitive assessment
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Scale className="text-[#667eea] mr-3" size={20} />
                                    Early intervention programs
                                </li>
                            </ul>
                            <Link to="/contact">
                                <button className="px-6 py-3 bg-[#667eea] text-white rounded-lg font-semibold hover:bg-[#5568d9] transition-colors">
                                    Track Growth
                                </button>
                            </Link>
                        </motion.div>
                        <motion.div
                            className="rounded-2xl overflow-hidden shadow-2xl"
                            initial="hidden"
                            animate={growthInView ? "visible" : "hidden"}
                            variants={fadeInUp}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80"
                                alt="Child Growth and Development"
                                className="w-full h-80 object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Child Nutrition Section */}
            <section id="child-nutrition" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 scroll-mt-32" ref={nutritionRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
                            initial="hidden"
                            animate={nutritionInView ? "visible" : "hidden"}
                            variants={fadeInUp}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=800&q=80"
                                alt="Child Nutrition and Healthy Food"
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
                                <Apple className="text-white" size={32} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] mb-4">Child Nutrition</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Ensure your child gets the right nutrition for optimal growth and development with our expert dietary guidance.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-700">
                                    <Baby className="text-[#FF7F11] mr-3" size={20} />
                                    Age-appropriate diet plans
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Baby className="text-[#FF7F11] mr-3" size={20} />
                                    Infant feeding guidance
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Baby className="text-[#FF7F11] mr-3" size={20} />
                                    Allergy management
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <Baby className="text-[#FF7F11] mr-3" size={20} />
                                    Healthy eating habits
                                </li>
                            </ul>
                            <Link to="/contact">
                                <button className="px-6 py-3 bg-[#FF7F11] text-white rounded-lg font-semibold hover:bg-[#e56e0e] transition-colors">
                                    Consult Nutritionist
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#FF6B6B] to-[#FFE66D] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Child's Health is Our Priority</h2>
                    <p className="text-xl text-gray-100 mb-8">
                        Schedule a health check-up for your little one today and give them the best start in life.
                    </p>
                    <Link to="/contact">
                        <motion.button
                            className="px-10 py-4 bg-white text-[#FF6B6B] rounded-lg font-bold text-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Book an Appointment
                        </motion.button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ChildHealth;
