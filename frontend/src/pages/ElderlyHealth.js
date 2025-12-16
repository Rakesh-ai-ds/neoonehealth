import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Shield, Activity, Users, Hand, Footprints, StretchHorizontal, Clock, CheckCircle } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import TopicQueryForm from '@/components/TopicQueryForm';

const ElderlyHealth = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [feelRef, feelInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [fallRef, fallInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [flexRef, flexInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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

    const the3Fs = [
        {
            title: "Feel",
            icon: Hand,
            color: "#FF6B6B",
            image: "https://images.unsplash.com/photo-1447005497901-b3e9ee359928?auto=format&fit=crop&w=800&q=80",
            what: "The 'Feel' component focuses on emotional and sensory well-being in elderly individuals. It encompasses how seniors experience their daily life, their emotional health, and their ability to sense and respond to their environment.",
            when: "Monitor 'Feel' aspects daily. Pay attention to mood changes, sleep patterns, and how they respond to touch, temperature, and other sensory inputs. Regular check-ins help identify early signs of depression or sensory decline.",
            how: "Encourage regular social interactions, engage in meaningful conversations, practice mindfulness, and ensure proper lighting and comfortable environments. Use gentle massage and sensory activities to maintain sensitivity.",
            why: "Emotional and sensory well-being directly impacts quality of life. Seniors who feel connected, valued, and comfortable are more likely to remain active and engaged in their health care."
        },
        {
            title: "Fall Prevention",
            icon: Footprints,
            color: "#20BF55",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
            what: "Fall prevention is a critical component of elderly health care. Falls are the leading cause of injury among seniors, often resulting in fractures, head injuries, and loss of independence.",
            when: "Fall risk should be assessed regularly, especially after any illness, medication change, or decline in mobility. Environmental assessments should be done seasonally and after any home modifications.",
            how: "Remove tripping hazards, install grab bars, ensure proper lighting, use non-slip mats, wear appropriate footwear, and practice balance exercises daily. Regular vision and hearing check-ups are essential.",
            why: "Preventing falls preserves independence, prevents costly medical interventions, and significantly improves quality of life. A single fall can lead to fear of falling, which reduces activity and accelerates decline."
        },
        {
            title: "Flexibility",
            icon: StretchHorizontal,
            color: "#01BAEF",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
            what: "Flexibility refers to the range of motion in joints and muscles. For elderly individuals, maintaining flexibility is crucial for performing daily activities safely and comfortably.",
            when: "Flexibility exercises should be performed daily, ideally in the morning after muscles are warm. Stretching before and after any physical activity is important. Regular mobility assessments should be done monthly.",
            how: "Gentle stretching exercises, yoga for seniors, tai chi, range-of-motion exercises, and warm water exercises. Start slowly and gradually increase duration and intensity. Never stretch to the point of pain.",
            why: "Good flexibility reduces the risk of injuries, improves posture, decreases joint pain, and makes daily activities like dressing, bathing, and walking easier and safer."
        }
    ];

    const faqs = [
        {
            question: "What is the best age to start focusing on elderly health programs?",
            answer: "It's never too early to start! While our elderly health programs are designed for those 60 and above, preventive measures can begin in your 50s. Early intervention leads to better outcomes and helps maintain independence longer."
        },
        {
            question: "How often should elderly individuals have health check-ups?",
            answer: "We recommend comprehensive health check-ups every 3-6 months for seniors, with more frequent monitoring for those with chronic conditions. Regular assessments help catch issues early and adjust care plans accordingly."
        },
        {
            question: "What is the 3F approach to elderly health?",
            answer: "The 3F approach focuses on three critical aspects of elderly wellness: Feel (emotional and sensory well-being), Fall Prevention (reducing risk of falls and injuries), and Flexibility (maintaining mobility and range of motion). Together, these form a holistic approach to healthy aging."
        },
        {
            question: "Can elderly people improve their flexibility?",
            answer: "Absolutely! With proper guidance and regular practice, seniors can significantly improve their flexibility at any age. Our programs use gentle, progressive exercises designed specifically for elderly individuals to safely increase range of motion."
        },
        {
            question: "How can family members support elderly health at home?",
            answer: "Family members can help by ensuring a safe home environment, encouraging regular physical activity, providing emotional support through regular visits, helping with medication management, and being attentive to any changes in behavior or health status."
        },
        {
            question: "What makes your elderly health program different?",
            answer: "Our program is unique because it combines the 3F approach with personalized care plans, regular monitoring, family involvement, and holistic wellness strategies. We focus on maintaining independence and quality of life, not just treating symptoms."
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#8B5CF6] via-[#A78BFA] to-[#C4B5FD] text-white pt-32 pb-20 overflow-hidden" ref={heroRef}>
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
                            Elderly Health & Wellness
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            The 3F Approach to Healthy Aging
                        </h1>
                        <p className="text-xl text-gray-100 mb-8">
                            Feel better, prevent falls, and stay flexible. Our comprehensive elderly health program focuses on what matters most for a fulfilling life.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {the3Fs.map((f, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl flex items-center gap-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                    <f.icon size={24} />
                                    <span className="font-semibold">{f.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="py-6 bg-white border-b sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#feel" className="px-6 py-3 bg-[#FF6B6B]/10 text-[#0B4F6C] rounded-lg font-semibold hover:bg-[#FF6B6B] hover:text-white transition-colors">
                            Feel
                        </a>
                        <a href="#fall" className="px-6 py-3 bg-[#20BF55]/10 text-[#0B4F6C] rounded-lg font-semibold hover:bg-[#20BF55] hover:text-white transition-colors">
                            Fall Prevention
                        </a>
                        <a href="#flexibility" className="px-6 py-3 bg-[#01BAEF]/10 text-[#0B4F6C] rounded-lg font-semibold hover:bg-[#01BAEF] hover:text-white transition-colors">
                            Flexibility
                        </a>
                    </div>
                </div>
            </section>

            {/* 3F Sections */}
            {the3Fs.map((section, index) => (
                <section
                    key={index}
                    id={section.title.toLowerCase().replace(' ', '-').replace(' prevention', '')}
                    className={`py-20 scroll-mt-32 ${index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-gray-50 to-purple-50'}`}
                    ref={index === 0 ? feelRef : index === 1 ? fallRef : flexRef}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Content */}
                            <motion.div
                                className={index % 2 === 1 ? 'order-1 lg:order-2' : ''}
                                initial="hidden"
                                animate={index === 0 ? (feelInView ? "visible" : "hidden") : index === 1 ? (fallInView ? "visible" : "hidden") : (flexInView ? "visible" : "hidden")}
                                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                            >
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: `${section.color}20` }}>
                                    <section.icon size={32} style={{ color: section.color }} />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] mb-6">{section.title}</h2>

                                {/* What, When, How, Why */}
                                <div className="space-y-6">
                                    {[
                                        { label: "What", icon: "❓", content: section.what },
                                        { label: "When", icon: "🕐", content: section.when },
                                        { label: "How", icon: "🔧", content: section.how },
                                        { label: "Why", icon: "💡", content: section.why }
                                    ].map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            className="bg-gray-50 p-4 rounded-xl"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                        >
                                            <h4 className="font-bold text-[#0B4F6C] flex items-center gap-2 mb-2">
                                                <span>{item.icon}</span> {item.label} is {section.title}?
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
                                animate={index === 0 ? (feelInView ? "visible" : "hidden") : index === 1 ? (fallInView ? "visible" : "hidden") : (flexInView ? "visible" : "hidden")}
                                variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                            >
                                <motion.div
                                    className="rounded-2xl overflow-hidden shadow-2xl"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={section.image}
                                        alt={section.title}
                                        className="w-full h-96 object-cover"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Why Elderly Health Matters */}
            <section className="py-20 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Focus on Elderly Health?</h2>
                        <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                            Aging gracefully is about maintaining independence, dignity, and quality of life
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Heart, title: "Quality of Life", desc: "Maintain independence and enjoy daily activities" },
                            { icon: Shield, title: "Prevent Injuries", desc: "Reduce risk of falls and related complications" },
                            { icon: Users, title: "Stay Connected", desc: "Remain socially active and emotionally healthy" },
                            { icon: Clock, title: "Early Detection", desc: "Catch health issues before they become serious" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <item.icon className="mx-auto mb-4" size={40} />
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-200 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection faqs={faqs} title="Elderly Health FAQs" />

            {/* Query Form */}
            <TopicQueryForm topic="Elderly Health" subtitle="Questions about elderly care? Our specialists are here to help." />

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#8B5CF6] to-[#C4B5FD] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Give Your Loved Ones the Care They Deserve</h2>
                    <p className="text-xl text-gray-100 mb-8">
                        Book a consultation to learn how our 3F approach can help your elderly family members live healthier, happier lives.
                    </p>
                    <Link to="/contact">
                        <motion.button
                            className="px-10 py-4 bg-white text-[#8B5CF6] rounded-lg font-bold text-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Schedule a Consultation
                        </motion.button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ElderlyHealth;
