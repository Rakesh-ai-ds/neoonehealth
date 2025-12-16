import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Apple, Brain, Shield, Dumbbell, Salad, Smile, Stethoscope, ChevronRight, ArrowRight } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import TopicQueryForm from '@/components/TopicQueryForm';
import BMICalculator from '@/components/BMICalculator';

const PersonalWellness = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [quizStep, setQuizStep] = useState(0);
    const [quizAnswers, setQuizAnswers] = useState({});
    const [quizComplete, setQuizComplete] = useState(false);

    const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
    const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
    const fadeInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };

    const wellnessQuestions = [
        { question: "How many days per week do you exercise?", options: ["0-1 days", "2-3 days", "4-5 days", "6-7 days"] },
        { question: "How would you describe your daily diet?", options: ["Mostly fast food", "Mixed healthy and unhealthy", "Mostly home-cooked", "Balanced & nutritious"] },
        { question: "How many hours of sleep do you get on average?", options: ["Less than 5 hours", "5-6 hours", "7-8 hours", "More than 8 hours"] },
        { question: "How often do you feel stressed?", options: ["Almost always", "Often", "Sometimes", "Rarely"] },
        { question: "When was your last health check-up?", options: ["Over 2 years ago", "1-2 years ago", "6-12 months ago", "Within 6 months"] }
    ];

    const handleQuizAnswer = (answer) => {
        setQuizAnswers(prev => ({ ...prev, [quizStep]: answer }));
        if (quizStep < wellnessQuestions.length - 1) setQuizStep(quizStep + 1);
        else setQuizComplete(true);
    };

    const getWellnessScore = () => {
        const scores = Object.values(quizAnswers).map(answer => {
            const index = wellnessQuestions[Object.keys(quizAnswers).find(k => quizAnswers[k] === answer)]?.options.indexOf(answer);
            return index !== undefined ? index : 0;
        });
        return Math.round((scores.reduce((a, b) => a + b, 0) / (wellnessQuestions.length * 3)) * 100);
    };

    const sections = [
        { id: "fitness", title: "Fitness & Exercise", icon: Dumbbell, image: "/images/fitness.png", description: "Physical fitness involves regular movement and exercise tailored to your body's needs. A well-rounded fitness routine includes cardiovascular health, strength training, flexibility, and endurance.", benefits: ["Reduces risk of heart disease and diabetes", "Improves mental health and reduces anxiety", "Increases energy levels and productivity", "Builds stronger bones and muscles", "Enhances sleep quality"] },
        { id: "nutrition", title: "Nutrition & Diet", icon: Salad, image: "/images/nutrition.png", description: "Nutrition is about fueling your body with the right balance of proteins, carbohydrates, healthy fats, vitamins, and minerals. Good nutrition isn't about strict diets—it's about making informed food choices.", benefits: ["Boosts immune system function", "Maintains healthy body weight", "Provides sustained energy throughout the day", "Improves mental clarity and focus", "Reduces risk of diet-related diseases"] },
        { id: "mental-health", title: "Mental Health", icon: Brain, image: "/images/mental-health.png", description: "Mental health encompasses your emotional, psychological, and social well-being. It affects how you think, feel, and act. Good mental health involves practicing mindfulness and maintaining social connections.", benefits: ["Better stress management", "Improved relationships and communication", "Enhanced decision-making abilities", "Greater resilience to challenges", "Overall improved quality of life"] },
        { id: "preventive-care", title: "Preventive Care", icon: Stethoscope, image: "/images/preventive-care.png", description: "Preventive care focuses on maintaining health and catching potential issues early through regular check-ups, screenings, and vaccinations. Being proactive rather than reactive with your health saves lives.", benefits: ["Early detection of health issues", "Lower healthcare costs long-term", "Extended lifespan and quality of life", "Peace of mind about your health", "Better management of chronic conditions"] }
    ];

    const faqs = [
        { question: "What is personal wellness and why should I care?", answer: "Personal wellness is a holistic approach to health that includes physical fitness, nutrition, mental health, and preventive care. It's about making conscious decisions to live a healthier, more fulfilling life." },
        { question: "How do I start my personal wellness journey?", answer: "Start small! Choose one area to focus on—maybe adding a 20-minute walk to your day or cooking one more meal at home each week. Set realistic goals, track your progress, and gradually build healthy habits." },
        { question: "How much exercise do I really need?", answer: "The recommended amount is 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity per week, plus strength training twice weekly." },
        { question: "Can I improve my mental health without therapy?", answer: "Yes, many self-care practices help: regular exercise, adequate sleep, mindfulness, social connections, and limiting stress. However, if you're struggling persistently, professional help is valuable." },
        { question: "What preventive screenings do I need?", answer: "It depends on your age, gender, and risk factors. Generally: regular blood pressure and cholesterol checks, diabetes screening, cancer screenings, and age-appropriate vaccinations." }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-white via-[#F0FDF4] to-[#DCFCE7]" ref={heroRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div className="max-w-4xl mx-auto text-center" initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={fadeInUp}>
                        <span className="inline-block bg-[#22C55E]/10 border border-[#22C55E]/20 px-4 py-2 rounded-full text-[#22C55E] text-sm font-medium mb-6">Personal Wellness</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-6 leading-tight">
                            Your Journey to a <span className="bg-gradient-to-r from-[#22C55E] to-[#38BDF8] bg-clip-text text-transparent">Healthier, Happier You</span>
                        </h1>
                        <p className="text-lg text-[#64748B] mb-8 max-w-2xl mx-auto">Discover personalized wellness solutions for fitness, nutrition, mental health, and preventive care.</p>
                        <Link to="/contact">
                            <motion.button className="px-8 py-4 bg-gradient-to-r from-[#22C55E] to-[#38BDF8] text-white rounded-xl font-bold flex items-center gap-2 mx-auto" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                Start Your Journey <ArrowRight size={20} />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="py-6 bg-white border-y border-gray-100 sticky top-20 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {sections.map((section, index) => (
                            <a key={index} href={`#${section.id}`} className="px-6 py-3 bg-[#F8FAFC] text-[#64748B] rounded-xl font-medium hover:bg-[#2563EB]/10 hover:text-[#2563EB] transition-all">
                                {section.title.split(' ')[0]}
                            </a>
                        ))}
                        <a href="#wellness-quiz" className="px-6 py-3 bg-[#22C55E]/10 text-[#22C55E] rounded-xl font-medium hover:bg-[#22C55E]/20 transition-all">Take Quiz</a>
                    </div>
                </div>
            </section>

            {/* Why Personal Wellness Section */}
            <section className="py-20 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-[#2563EB] font-medium text-sm uppercase tracking-wider">The Foundation</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mt-2 mb-4">Why Personal Wellness Matters</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[{ icon: Heart, title: "Live Longer", desc: "Healthy habits add years to your life" }, { icon: Smile, title: "Feel Better", desc: "More energy, better mood daily" }, { icon: Shield, title: "Prevent Disease", desc: "Reduce risk of chronic conditions" }, { icon: Brain, title: "Think Clearer", desc: "Improved focus and mental sharpness" }].map((item, index) => (
                            <motion.div key={index} className="bg-white border border-gray-100 p-6 rounded-2xl text-center shadow-sm hover:shadow-lg transition-all" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5 }}>
                                <div className="w-14 h-14 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mx-auto mb-4"><item.icon className="text-[#2563EB]" size={28} /></div>
                                <h3 className="font-bold text-[#1E293B] text-lg mb-2">{item.title}</h3>
                                <p className="text-[#94A3B8] text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Wellness Sections */}
            {sections.map((section, index) => (
                <section key={index} id={section.id} className={`py-20 scroll-mt-32 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div className={index % 2 === 1 ? 'order-1 lg:order-2' : ''} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={index % 2 === 0 ? fadeInLeft : fadeInRight}>
                                <div className="w-14 h-14 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-6"><section.icon size={28} className="text-[#2563EB]" /></div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-6">{section.title}</h2>
                                <p className="text-[#64748B] text-lg leading-relaxed mb-8">{section.description}</p>
                                <div className="space-y-3">
                                    <h4 className="text-[#1E293B] font-semibold mb-3">Key Benefits:</h4>
                                    {section.benefits.map((benefit, idx) => (
                                        <motion.div key={idx} className="flex items-center gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                                            <div className="w-6 h-6 bg-[#22C55E]/10 rounded-full flex items-center justify-center flex-shrink-0"><ChevronRight className="text-[#22C55E]" size={14} /></div>
                                            <span className="text-[#64748B]">{benefit}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div className={index % 2 === 1 ? 'order-2 lg:order-1' : ''} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={index % 2 === 0 ? fadeInRight : fadeInLeft}>
                                <motion.div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg" whileHover={{ scale: 1.02 }}>
                                    <img src={section.image} alt={section.title} className="w-full h-80 object-cover" onError={(e) => { e.target.src = `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80`; }} />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Wellness Quiz */}
            <section id="wellness-quiz" className="py-20 bg-[#F8FAFC] scroll-mt-32">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="text-center mb-8">
                            <span className="text-[#22C55E] font-medium text-sm uppercase tracking-wider">Self Assessment</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mt-2 mb-4">Test Your Wellness Score</h2>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                            {!quizComplete ? (
                                <>
                                    <div className="mb-6">
                                        <div className="flex justify-between text-sm text-[#64748B] mb-2"><span>Question {quizStep + 1} of {wellnessQuestions.length}</span><span>{Math.round(((quizStep + 1) / wellnessQuestions.length) * 100)}%</span></div>
                                        <div className="h-2 bg-[#F1F5F9] rounded-full overflow-hidden"><motion.div className="h-full bg-gradient-to-r from-[#2563EB] to-[#38BDF8]" initial={{ width: 0 }} animate={{ width: `${((quizStep + 1) / wellnessQuestions.length) * 100}%` }} /></div>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1E293B] mb-6 text-center">{wellnessQuestions[quizStep].question}</h3>
                                    <div className="space-y-3">
                                        {wellnessQuestions[quizStep].options.map((option, index) => (
                                            <motion.button key={index} onClick={() => handleQuizAnswer(option)} className="w-full p-4 border border-gray-200 rounded-xl text-left text-[#1E293B] hover:border-[#2563EB] hover:bg-[#2563EB]/5 transition-all" whileHover={{ x: 10 }} whileTap={{ scale: 0.98 }}>{option}</motion.button>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <motion.div className="text-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                                    <div className="w-32 h-32 mx-auto mb-6 relative">
                                        <svg className="w-full h-full transform -rotate-90"><circle cx="64" cy="64" r="56" stroke="#F1F5F9" strokeWidth="12" fill="none" /><motion.circle cx="64" cy="64" r="56" stroke={getWellnessScore() >= 70 ? "#22C55E" : getWellnessScore() >= 40 ? "#FACC15" : "#EF4444"} strokeWidth="12" fill="none" strokeLinecap="round" initial={{ strokeDasharray: "0 352" }} animate={{ strokeDasharray: `${(getWellnessScore() / 100) * 352} 352` }} transition={{ duration: 1, delay: 0.5 }} /></svg>
                                        <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-[#1E293B]">{getWellnessScore()}%</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#1E293B] mb-2">Your Wellness Score</h3>
                                    <p className="text-[#64748B] mb-6">{getWellnessScore() >= 70 ? "Excellent! You're on the right track!" : getWellnessScore() >= 40 ? "Good progress! There's room for improvement." : "Let us help you get started!"}</p>
                                    <div className="flex gap-4 justify-center">
                                        <button onClick={() => { setQuizStep(0); setQuizAnswers({}); setQuizComplete(false); }} className="px-6 py-3 border border-[#2563EB] text-[#2563EB] rounded-xl font-semibold hover:bg-[#2563EB]/5">Retake Quiz</button>
                                        <Link to="/contact"><button className="px-6 py-3 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white rounded-xl font-semibold">Get Personalized Plan</button></Link>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            <BMICalculator />
            <FAQSection faqs={faqs} title="Personal Wellness FAQs" />
            <TopicQueryForm topic="Personal Wellness" subtitle="Have questions about your wellness journey? We're here to guide you." />

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#2563EB] to-[#38BDF8]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Your Healthier Life Starts Today</h2>
                    <p className="text-xl text-white/80 mb-8">Take the first step towards a healthier, happier you.</p>
                    <Link to="/contact"><motion.button className="px-10 py-4 bg-white text-[#2563EB] rounded-xl font-bold text-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Book a Consultation</motion.button></Link>
                </div>
            </section>
        </div>
    );
};

export default PersonalWellness;
