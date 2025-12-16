import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Shield, Activity, Brain, Eye, Ear, Monitor, HardHat, CheckCircle } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import TopicQueryForm from '@/components/TopicQueryForm';

const OccupationalHealth = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [workplaceRef, workplaceInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ergonomicsRef, ergonomicsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [mentalRef, mentalInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [screeningRef, screeningInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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

    const services = [
        {
            id: "workplace-safety",
            title: "Workplace Safety Assessment",
            icon: HardHat,
            color: "#FF7F11",
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
            what: "A comprehensive evaluation of your workplace environment to identify potential health hazards, safety risks, and areas for improvement. We assess physical, chemical, biological, and ergonomic factors that could impact employee health.",
            when: "Conduct assessments annually, after any workplace incidents, when introducing new processes or equipment, or when employees report health concerns. Regular monitoring ensures ongoing safety compliance.",
            how: "Our experts visit your workplace, observe work processes, measure environmental factors (noise, air quality, lighting), interview employees, review safety protocols, and provide detailed reports with actionable recommendations.",
            why: "A safe workplace reduces injuries, lowers insurance costs, improves productivity, ensures legal compliance, and creates a positive work culture where employees feel valued and protected."
        },
        {
            id: "ergonomics",
            title: "Ergonomics & Posture",
            icon: Monitor,
            color: "#20BF55",
            image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=800&q=80",
            what: "The science of designing workstations and tasks to fit the worker. Proper ergonomics prevents musculoskeletal disorders, reduces fatigue, and improves comfort and productivity for desk workers and manual laborers alike.",
            when: "Assess ergonomics when setting up new workstations, when employees report discomfort, during annual health reviews, and whenever work tasks or equipment change. Prevention is always better than treatment.",
            how: "We evaluate workstation setup, monitor positioning, chair height, keyboard placement, and work habits. We provide personalized adjustments, recommend equipment, and teach proper posture techniques.",
            why: "Poor ergonomics leads to chronic pain, carpal tunnel syndrome, back problems, and reduced productivity. Investing in ergonomics reduces sick days, workers' compensation claims, and improves employee satisfaction."
        },
        {
            id: "mental-wellness",
            title: "Workplace Mental Wellness",
            icon: Brain,
            color: "#9B59B6",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
            what: "A holistic approach to supporting mental health in the workplace. We address stress, burnout, anxiety, and depression through prevention programs, counseling services, and organizational culture improvements.",
            when: "Mental wellness should be an ongoing priority, not just during crises. Implement programs proactively, conduct regular check-ins, and provide resources before problems escalate. Watch for signs of burnout and disengagement.",
            how: "We offer stress management workshops, Employee Assistance Programs (EAP), confidential counseling, mindfulness training, work-life balance initiatives, and manager training on recognizing mental health concerns.",
            why: "Mental health issues are the leading cause of disability worldwide. Addressing workplace mental wellness reduces absenteeism, improves focus and creativity, and creates a supportive environment where employees thrive."
        },
        {
            id: "health-screening",
            title: "Occupational Health Screening",
            icon: Activity,
            color: "#01BAEF",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
            what: "Pre-employment and periodic health screenings tailored to job requirements. We assess physical fitness for specific roles, monitor exposure to occupational hazards, and ensure workers are healthy enough for their duties.",
            when: "Conduct screenings before employment, annually for high-risk roles, after extended sick leave, and when job requirements change. Specific roles may require more frequent monitoring (hearing tests for noisy environments, lung function for dusty conditions).",
            how: "Our screenings include vision and hearing tests, lung function tests, blood pressure monitoring, fitness assessments, drug and alcohol testing (where permitted), and role-specific evaluations based on job hazards.",
            why: "Health screenings protect both employers and employees. They ensure workers are fit for their roles, detect early signs of occupational diseases, and demonstrate your commitment to employee welfare."
        }
    ];

    const faqs = [
        {
            question: "What is occupational health and why is it important?",
            answer: "Occupational health focuses on the physical and mental well-being of employees in the workplace. It's important because it prevents work-related injuries and illnesses, improves productivity, reduces absenteeism, and ensures legal compliance with health and safety regulations."
        },
        {
            question: "How often should workplace health assessments be conducted?",
            answer: "We recommend annual comprehensive assessments for most workplaces. However, high-risk industries (construction, manufacturing, healthcare) may need more frequent evaluations. Additionally, assessments should be done after any incidents or when introducing new processes."
        },
        {
            question: "What are the most common occupational health hazards?",
            answer: "Common hazards include ergonomic issues (poor posture, repetitive strain), environmental factors (noise, air quality), psychological stressors (workload, workplace conflict), and physical hazards (falls, machinery). Our assessments identify and address all these risks."
        },
        {
            question: "How can small businesses implement occupational health programs?",
            answer: "We offer scalable solutions for businesses of all sizes. Small businesses can start with basic ergonomic assessments, mental health resources, and periodic health screenings. We'll help you prioritize based on your specific risks and budget."
        },
        {
            question: "What's included in pre-employment health screening?",
            answer: "Pre-employment screenings typically include a general health questionnaire, vision and hearing tests, blood pressure check, and role-specific assessments based on job requirements. We ensure screenings are non-discriminatory and compliant with regulations."
        },
        {
            question: "How do you help with workplace stress and burnout?",
            answer: "We offer multiple approaches including stress management workshops, confidential counseling services, workload assessments, manager training, and organizational culture consulting. We also help implement work-life balance policies and flexible working arrangements."
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#FF7F11] via-[#FFB347] to-[#FF7F11] text-white pt-32 pb-20 overflow-hidden" ref={heroRef}>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial="hidden"
                        animate={heroInView ? "visible" : "hidden"}
                        variants={fadeInUp}
                    >
                        <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                            Occupational Health Services
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Healthy Workplace, Thriving Business
                        </h1>
                        <p className="text-xl text-gray-100 mb-8">
                            Comprehensive occupational health solutions that protect your employees and optimize your workplace for safety, productivity, and well-being.
                        </p>
                        <Link to="/contact">
                            <motion.button
                                className="px-8 py-4 bg-white text-[#FF7F11] rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get Workplace Assessment
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="py-6 bg-white border-b sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {services.map((service, index) => (
                            <a
                                key={index}
                                href={`#${service.id}`}
                                className="px-6 py-3 bg-gray-100 text-[#0B4F6C] rounded-lg font-semibold hover:bg-[#FF7F11] hover:text-white transition-colors"
                            >
                                {service.title.split(' ')[0]}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Sections */}
            {services.map((service, index) => (
                <section
                    key={index}
                    id={service.id}
                    className={`py-20 scroll-mt-32 ${index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-gray-50 to-orange-50'}`}
                    ref={index === 0 ? workplaceRef : index === 1 ? ergonomicsRef : index === 2 ? mentalRef : screeningRef}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                            {/* Content */}
                            <motion.div
                                className={index % 2 === 1 ? 'order-1 lg:order-2' : ''}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                            >
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: `${service.color}20` }}>
                                    <service.icon size={32} style={{ color: service.color }} />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] mb-6">{service.title}</h2>

                                {/* What, When, How, Why */}
                                <div className="space-y-4">
                                    {[
                                        { label: "What", emoji: "❓", content: service.what },
                                        { label: "When", emoji: "🕐", content: service.when },
                                        { label: "How", emoji: "🔧", content: service.how },
                                        { label: "Why", emoji: "💡", content: service.why }
                                    ].map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            className="bg-gray-50 p-4 rounded-xl border-l-4"
                                            style={{ borderLeftColor: service.color }}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                        >
                                            <h4 className="font-bold text-[#0B4F6C] flex items-center gap-2 mb-1">
                                                <span>{item.emoji}</span> {item.label}
                                            </h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Image */}
                            <motion.div
                                className={`${index % 2 === 1 ? 'order-2 lg:order-1' : ''}`}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                            >
                                <motion.div
                                    className="rounded-2xl overflow-hidden shadow-2xl"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-96 object-cover"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Statistics Section */}
            <section className="py-16 bg-[#0B4F6C] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {[
                            { number: "95%", label: "Reduction in Workplace Injuries" },
                            { number: "40%", label: "Decrease in Sick Leave" },
                            { number: "3x", label: "ROI on Health Programs" },
                            { number: "500+", label: "Companies Served" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <p className="text-4xl md:text-5xl font-bold text-[#20BF55] mb-2">{stat.number}</p>
                                <p className="text-gray-300 text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection faqs={faqs} title="Occupational Health FAQs" />

            {/* Query Form */}
            <TopicQueryForm topic="Occupational Health" subtitle="Have questions about workplace health? Our experts are ready to help." />

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#FF7F11] to-[#FFB347] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect Your Most Valuable Asset — Your People</h2>
                    <p className="text-xl text-gray-100 mb-8">
                        Start building a healthier, safer workplace today. Our occupational health experts are ready to help.
                    </p>
                    <Link to="/contact">
                        <motion.button
                            className="px-10 py-4 bg-white text-[#FF7F11] rounded-lg font-bold text-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Request a Free Consultation
                        </motion.button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default OccupationalHealth;
