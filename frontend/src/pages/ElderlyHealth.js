import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Shield, Users, Hand, Footprints, StretchHorizontal, Clock, ChevronRight } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import TopicQueryForm from '@/components/TopicQueryForm';

const ElderlyHealth = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
    const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
    const fadeInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };

    const the3Fs = [
        { id: "feel", title: "Feel", subtitle: "Emotional & Sensory Wellness", icon: Hand, color: "#22C55E", image: "/images/elderly-health.png", description: "The 'Feel' component focuses on emotional and sensory well-being in elderly individuals. It encompasses how seniors experience their daily life, their emotional health, and their ability to sense and respond to their environment.", benefits: ["Improved emotional well-being", "Better quality of life", "Reduced risk of depression", "Enhanced social connections", "Maintained sensory awareness"] },
        { id: "fall", title: "Fall Prevention", subtitle: "Safety & Injury Prevention", icon: Footprints, color: "#38BDF8", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80", description: "Falls are the leading cause of injury among seniors. Our fall prevention program includes environmental assessments, balance exercises, vision and hearing check-ups, and medication reviews.", benefits: ["Reduced risk of falls", "Safer home environment", "Improved balance and strength", "Preserved independence", "Peace of mind for families"] },
        { id: "flexibility", title: "Flexibility", subtitle: "Mobility & Range of Motion", icon: StretchHorizontal, color: "#A78BFA", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80", description: "Flexibility refers to the range of motion in joints and muscles. For elderly individuals, maintaining flexibility is crucial for performing daily activities safely.", benefits: ["Increased range of motion", "Easier daily activities", "Reduced joint pain", "Better posture", "Enhanced mobility"] }
    ];

    const faqs = [
        { question: "What is the best age to start focusing on elderly health programs?", answer: "It's never too early to start! While our programs are designed for those 60 and above, preventive measures can begin in your 50s." },
        { question: "How often should elderly individuals have health check-ups?", answer: "We recommend comprehensive check-ups every 3-6 months for seniors, with more frequent monitoring for those with chronic conditions." },
        { question: "What is the 3F approach to elderly health?", answer: "The 3F approach focuses on Feel (emotional wellness), Fall Prevention (safety), and Flexibility (mobility). Together, these form a holistic approach to healthy aging." },
        { question: "Can elderly people improve their flexibility?", answer: "Absolutely! With proper guidance and regular practice, seniors can significantly improve their flexibility at any age." }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-white via-[#FAF5FF] to-[#F3E8FF]" ref={heroRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div className="max-w-4xl mx-auto text-center" initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={fadeInUp}>
                        <span className="inline-block bg-[#A78BFA]/10 border border-[#A78BFA]/20 px-4 py-2 rounded-full text-[#7C3AED] text-sm font-medium mb-6">Elderly Health & Wellness</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-6 leading-tight">The 3F Approach to <span className="bg-gradient-to-r from-[#7C3AED] to-[#22C55E] bg-clip-text text-transparent">Healthy Aging</span></h1>
                        <p className="text-lg text-[#64748B] mb-8 max-w-2xl mx-auto">Feel better, prevent falls, and stay flexible. Our comprehensive elderly health program focuses on what matters most for a fulfilling life.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {the3Fs.map((f, index) => (
                                <motion.div key={index} className="bg-white border border-gray-100 px-6 py-3 rounded-xl flex items-center gap-2 shadow-sm" initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 + index * 0.1 }}>
                                    <f.icon size={20} style={{ color: f.color }} />
                                    <span className="text-[#1E293B] font-medium">{f.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="py-6 bg-white border-y border-gray-100 sticky top-20 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {the3Fs.map((section, index) => (<a key={index} href={`#${section.id}`} className="px-6 py-3 bg-[#F8FAFC] text-[#64748B] rounded-xl font-medium hover:bg-[#7C3AED]/10 hover:text-[#7C3AED] transition-all">{section.title}</a>))}
                    </div>
                </div>
            </section>

            {/* 3F Sections */}
            {the3Fs.map((section, index) => (
                <section key={index} id={section.id} className={`py-20 scroll-mt-32 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div className={index % 2 === 1 ? 'order-1 lg:order-2' : ''} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={index % 2 === 0 ? fadeInLeft : fadeInRight}>
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: `${section.color}15` }}>
                                    <section.icon size={28} style={{ color: section.color }} />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-2">{section.title}</h2>
                                <p className="text-[#7C3AED] font-medium mb-6">{section.subtitle}</p>
                                <p className="text-[#64748B] text-lg leading-relaxed mb-8">{section.description}</p>
                                <div className="space-y-3">
                                    <h4 className="text-[#1E293B] font-semibold mb-3">Key Benefits:</h4>
                                    {section.benefits.map((benefit, idx) => (
                                        <motion.div key={idx} className="flex items-center gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                                            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${section.color}15` }}>
                                                <ChevronRight size={14} style={{ color: section.color }} />
                                            </div>
                                            <span className="text-[#64748B]">{benefit}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div className={index % 2 === 1 ? 'order-2 lg:order-1' : ''} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={index % 2 === 0 ? fadeInRight : fadeInLeft}>
                                <motion.div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg" whileHover={{ scale: 1.02 }}>
                                    <img src={section.image} alt={section.title} className="w-full h-80 object-cover" onError={(e) => { e.target.src = `https://images.unsplash.com/photo-1447005497901-b3e9ee359928?auto=format&fit=crop&w=800&q=80`; }} />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Why Elderly Health Matters */}
            <section className="py-20 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-[#7C3AED] font-medium text-sm uppercase tracking-wider">Why It Matters</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mt-2 mb-4">Focus on Elderly Health</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[{ icon: Heart, title: "Quality of Life", desc: "Maintain independence and enjoy daily activities" }, { icon: Shield, title: "Prevent Injuries", desc: "Reduce risk of falls and complications" }, { icon: Users, title: "Stay Connected", desc: "Remain socially active and emotionally healthy" }, { icon: Clock, title: "Early Detection", desc: "Catch health issues before they become serious" }].map((item, index) => (
                            <motion.div key={index} className="bg-white border border-gray-100 p-6 rounded-2xl text-center shadow-sm hover:shadow-lg transition-all" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5 }}>
                                <div className="w-14 h-14 bg-[#7C3AED]/10 rounded-xl flex items-center justify-center mx-auto mb-4"><item.icon className="text-[#7C3AED]" size={28} /></div>
                                <h3 className="font-bold text-[#1E293B] text-lg mb-2">{item.title}</h3>
                                <p className="text-[#94A3B8] text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} title="Elderly Health FAQs" />
            <TopicQueryForm topic="Elderly Health" subtitle="Questions about elderly care? Our specialists are here to help." />

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#7C3AED] to-[#38BDF8]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Give Your Loved Ones the Care They Deserve</h2>
                    <p className="text-xl text-white/80 mb-8">Book a consultation to learn how our 3F approach can help.</p>
                    <Link to="/contact"><motion.button className="px-10 py-4 bg-white text-[#7C3AED] rounded-xl font-bold text-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Schedule a Consultation</motion.button></Link>
                </div>
            </section>
        </div>
    );
};

export default ElderlyHealth;
