import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Shield, Activity, Brain, Monitor, HardHat, ChevronRight } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import TopicQueryForm from '@/components/TopicQueryForm';

const OccupationalHealth = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
    const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
    const fadeInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };

    const services = [
        { id: "workplace-safety", title: "Workplace Safety Assessment", icon: HardHat, image: "/images/occupational-health.png", description: "Comprehensive evaluation of your workplace environment to identify health hazards, safety risks, and areas for improvement. We assess physical, chemical, biological, and ergonomic factors.", benefits: ["Hazard identification and mitigation", "Compliance with safety regulations", "Reduced workplace injuries", "Improved employee confidence", "Lower insurance costs"] },
        { id: "ergonomics", title: "Ergonomics & Posture", icon: Monitor, image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=800&q=80", description: "The science of designing workstations and tasks to fit the worker. Proper ergonomics prevents musculoskeletal disorders, reduces fatigue, and improves comfort and productivity.", benefits: ["Reduced repetitive strain injuries", "Improved posture and comfort", "Increased productivity", "Lower absenteeism rates", "Better employee satisfaction"] },
        { id: "mental-wellness", title: "Workplace Mental Wellness", icon: Brain, image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80", description: "A holistic approach to supporting mental health in the workplace. We address stress, burnout, anxiety, and depression through prevention programs, counseling services, and culture improvements.", benefits: ["Stress management programs", "Confidential counseling services", "Work-life balance initiatives", "Manager training on mental health", "Reduced burnout and turnover"] },
        { id: "health-screening", title: "Occupational Health Screening", icon: Activity, image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80", description: "Pre-employment and periodic health screenings tailored to job requirements. We assess physical fitness for specific roles and monitor exposure to occupational hazards.", benefits: ["Role-specific fitness assessments", "Early disease detection", "Regulatory compliance", "Return-to-work evaluations", "Drug and alcohol testing"] }
    ];

    const faqs = [
        { question: "What is occupational health and why is it important?", answer: "Occupational health focuses on employee well-being in the workplace. It prevents work-related injuries, improves productivity, reduces absenteeism, and ensures legal compliance." },
        { question: "How often should workplace health assessments be conducted?", answer: "We recommend annual comprehensive assessments for most workplaces. High-risk industries may need more frequent evaluations." },
        { question: "What are the most common occupational health hazards?", answer: "Common hazards include ergonomic issues, environmental factors (noise, air quality), psychological stressors, and physical hazards like falls." },
        { question: "How can small businesses implement occupational health programs?", answer: "We offer scalable solutions for all business sizes. Start with basic ergonomic assessments, mental health resources, and periodic screenings." }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-white via-[#FFFBEB] to-[#FEF3C7]" ref={heroRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div className="max-w-4xl mx-auto text-center" initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={fadeInUp}>
                        <span className="inline-block bg-[#FACC15]/10 border border-[#FACC15]/20 px-4 py-2 rounded-full text-[#D97706] text-sm font-medium mb-6">Occupational Health Services</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-6 leading-tight">Healthy Workplace, <span className="bg-gradient-to-r from-[#D97706] to-[#38BDF8] bg-clip-text text-transparent">Thriving Business</span></h1>
                        <p className="text-lg text-[#64748B] mb-8 max-w-2xl mx-auto">Comprehensive occupational health solutions that protect your employees and optimize your workplace for safety, productivity, and well-being.</p>
                    </motion.div>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="py-6 bg-white border-y border-gray-100 sticky top-20 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {services.map((service, index) => (<a key={index} href={`#${service.id}`} className="px-6 py-3 bg-[#F8FAFC] text-[#64748B] rounded-xl font-medium hover:bg-[#2563EB]/10 hover:text-[#2563EB] transition-all">{service.title.split(' ')[0]}</a>))}
                    </div>
                </div>
            </section>

            {/* Service Sections */}
            {services.map((service, index) => (
                <section key={index} id={service.id} className={`py-20 scroll-mt-32 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div className={index % 2 === 1 ? 'order-1 lg:order-2' : ''} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={index % 2 === 0 ? fadeInLeft : fadeInRight}>
                                <div className="w-14 h-14 bg-[#D97706]/10 rounded-xl flex items-center justify-center mb-6"><service.icon size={28} className="text-[#D97706]" /></div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-6">{service.title}</h2>
                                <p className="text-[#64748B] text-lg leading-relaxed mb-8">{service.description}</p>
                                <div className="space-y-3">
                                    <h4 className="text-[#1E293B] font-semibold mb-3">Key Benefits:</h4>
                                    {service.benefits.map((benefit, idx) => (
                                        <motion.div key={idx} className="flex items-center gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                                            <div className="w-6 h-6 bg-[#22C55E]/10 rounded-full flex items-center justify-center flex-shrink-0"><ChevronRight className="text-[#22C55E]" size={14} /></div>
                                            <span className="text-[#64748B]">{benefit}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div className={index % 2 === 1 ? 'order-2 lg:order-1' : ''} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={index % 2 === 0 ? fadeInRight : fadeInLeft}>
                                <motion.div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg" whileHover={{ scale: 1.02 }}>
                                    <img src={service.image} alt={service.title} className="w-full h-80 object-cover" onError={(e) => { e.target.src = `https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80`; }} />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Statistics Section */}
            <section className="py-16 bg-gradient-to-r from-[#2563EB] to-[#38BDF8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[{ number: "95%", label: "Reduction in Injuries" }, { number: "40%", label: "Decrease in Sick Leave" }, { number: "3x", label: "ROI on Health Programs" }, { number: "500+", label: "Companies Served" }].map((stat, index) => (
                            <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</p>
                                <p className="text-white/80 text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} title="Occupational Health FAQs" />
            <TopicQueryForm topic="Occupational Health" subtitle="Have questions about workplace health? Our experts are ready to help." />

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#D97706] to-[#38BDF8]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Protect Your Most Valuable Asset</h2>
                    <p className="text-xl text-white/80 mb-8">Start building a healthier, safer workplace today.</p>
                    <Link to="/contact"><motion.button className="px-10 py-4 bg-white text-[#D97706] rounded-xl font-bold text-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Request a Free Consultation</motion.button></Link>
                </div>
            </section>
        </div>
    );
};

export default OccupationalHealth;
