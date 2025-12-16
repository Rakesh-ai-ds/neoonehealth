import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Apple, Brain, Shield, Dumbbell, Salad, Smile, Stethoscope, CheckCircle, ArrowRight } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import TopicQueryForm from '@/components/TopicQueryForm';
import BMICalculator from '@/components/BMICalculator';

const PersonalWellness = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [fitnessRef, fitnessInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [nutritionRef, nutritionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [mentalRef, mentalInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [preventiveRef, preventiveInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [quizRef, quizInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    // Wellness Quiz State
    const [quizStep, setQuizStep] = useState(0);
    const [quizAnswers, setQuizAnswers] = useState({});
    const [quizComplete, setQuizComplete] = useState(false);

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

    const wellnessQuestions = [
        { question: "How many days per week do you exercise?", options: ["0-1 days", "2-3 days", "4-5 days", "6-7 days"] },
        { question: "How would you describe your daily diet?", options: ["Mostly fast food", "Mixed healthy and unhealthy", "Mostly home-cooked", "Balanced & nutritious"] },
        { question: "How many hours of sleep do you get on average?", options: ["Less than 5 hours", "5-6 hours", "7-8 hours", "More than 8 hours"] },
        { question: "How often do you feel stressed?", options: ["Almost always", "Often", "Sometimes", "Rarely"] },
        { question: "When was your last health check-up?", options: ["Over 2 years ago", "1-2 years ago", "6-12 months ago", "Within 6 months"] }
    ];

    const handleQuizAnswer = (answer) => {
        setQuizAnswers(prev => ({ ...prev, [quizStep]: answer }));
        if (quizStep < wellnessQuestions.length - 1) {
            setQuizStep(quizStep + 1);
        } else {
            setQuizComplete(true);
        }
    };

    const getWellnessScore = () => {
        const scores = Object.values(quizAnswers).map(answer => {
            const index = wellnessQuestions[Object.keys(quizAnswers).find(k => quizAnswers[k] === answer)]?.options.indexOf(answer);
            return index !== undefined ? index : 0;
        });
        const total = scores.reduce((a, b) => a + b, 0);
        const percentage = (total / (wellnessQuestions.length * 3)) * 100;
        return Math.round(percentage);
    };

    const sections = [
        {
            id: "fitness",
            title: "Fitness & Exercise",
            icon: Dumbbell,
            color: "#FF6B6B",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
            what: "Physical fitness involves regular movement and exercise tailored to your body's needs. It includes cardiovascular health, strength training, flexibility, and endurance. A well-rounded fitness routine helps maintain healthy body weight and improves overall energy levels.",
            when: "Aim for at least 150 minutes of moderate exercise per week. Morning workouts boost metabolism, while evening exercises help release daily stress. Listen to your body—rest when needed, and gradually increase intensity over time.",
            how: "Start with activities you enjoy—walking, swimming, cycling, or dancing. Mix cardio with strength training. Use apps to track progress. Consider working with a fitness coach for personalized guidance. Consistency matters more than intensity.",
            why: "Regular exercise reduces risk of chronic diseases, improves mood through endorphin release, enhances sleep quality, boosts confidence, and increases longevity. It's the foundation of personal wellness."
        },
        {
            id: "nutrition",
            title: "Nutrition & Diet",
            icon: Salad,
            color: "#20BF55",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
            what: "Nutrition is about fueling your body with the right balance of nutrients—proteins, carbohydrates, healthy fats, vitamins, and minerals. Good nutrition isn't about strict diets; it's about making informed food choices that support your health goals.",
            when: "Eat regular meals—don't skip breakfast. Have smaller, frequent meals if that suits you. Hydrate throughout the day. Plan meals ahead to avoid unhealthy choices. Adjust portions based on your activity level.",
            how: "Fill half your plate with vegetables, quarter with lean protein, quarter with whole grains. Limit processed foods and added sugars. Read nutrition labels. Cook more at home. Consider consulting a nutritionist for personalized plans.",
            why: "Proper nutrition boosts immunity, maintains healthy weight, provides sustained energy, improves mental clarity, and reduces risk of diet-related diseases like diabetes and heart disease."
        },
        {
            id: "mental-health",
            title: "Mental Health",
            icon: Brain,
            color: "#9B59B6",
            image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80",
            what: "Mental health encompasses your emotional, psychological, and social well-being. It affects how you think, feel, and act. Good mental health isn't just the absence of mental illness—it's about thriving, coping with stress, and maintaining positive relationships.",
            when: "Prioritize mental health daily, not just during crises. Take breaks when overwhelmed. Seek help when feelings persist for weeks. Regular self-check-ins help catch issues early. Don't wait until you're 'broken' to seek support.",
            how: "Practice mindfulness and meditation. Maintain social connections. Set healthy boundaries. Limit screen time. Exercise regularly (it boosts mood). Journal your thoughts. Seek professional help when needed—therapy is self-care, not weakness.",
            why: "Mental health affects every aspect of life—relationships, work performance, physical health, and quality of life. Investing in mental wellness leads to better decision-making, resilience, and overall happiness."
        },
        {
            id: "preventive-care",
            title: "Preventive Care",
            icon: Stethoscope,
            color: "#01BAEF",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
            what: "Preventive care focuses on maintaining health and catching potential issues early through regular check-ups, screenings, and vaccinations. It's about being proactive rather than reactive with your health.",
            when: "Schedule annual health check-ups. Get age-appropriate screenings (blood pressure, cholesterol, cancer screenings). Stay up-to-date on vaccinations. Don't ignore warning signs—early detection saves lives.",
            how: "Build a relationship with a primary care provider. Keep track of your health records. Know your family health history. Follow recommended screening schedules. Take preventive measures like wearing sunscreen and practicing safe habits.",
            why: "Prevention is always better (and cheaper) than cure. Regular screenings detect issues before symptoms appear. Preventive care extends lifespan, reduces healthcare costs, and gives peace of mind."
        }
    ];

    const faqs = [
        {
            question: "What is personal wellness and why should I care?",
            answer: "Personal wellness is a holistic approach to health that includes physical fitness, nutrition, mental health, and preventive care. It's about making conscious decisions to live a healthier, more fulfilling life. When you invest in your wellness, you have more energy, better mood, and reduced risk of chronic diseases."
        },
        {
            question: "How do I start my personal wellness journey?",
            answer: "Start small! Choose one area to focus on—maybe adding a 20-minute walk to your day or cooking one more meal at home each week. Set realistic goals, track your progress, and gradually build healthy habits. Remember, consistency beats perfection."
        },
        {
            question: "How much exercise do I really need?",
            answer: "The recommended amount is 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity per week, plus strength training twice weekly. But any movement is better than none! Start where you are and gradually increase."
        },
        {
            question: "Can I improve my mental health without therapy?",
            answer: "Yes, many self-care practices help: regular exercise, adequate sleep, mindfulness, social connections, and limiting stress. However, if you're struggling persistently, professional help is valuable. Therapy is a tool for growth, not just crisis management."
        },
        {
            question: "What preventive screenings do I need?",
            answer: "It depends on your age, gender, and risk factors. Generally: regular blood pressure and cholesterol checks, diabetes screening, cancer screenings (breast, cervical, colon, prostate based on guidelines), and age-appropriate vaccinations. Consult your healthcare provider for personalized recommendations."
        },
        {
            question: "How does stress affect my physical health?",
            answer: "Chronic stress triggers inflammation, weakens immune function, raises blood pressure, disrupts sleep, and can lead to weight gain. It's linked to heart disease, digestive issues, and mental health problems. Managing stress isn't luxury—it's essential for physical health."
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#FF6B6B] via-[#FF8E8E] to-[#FFB4B4] text-white pt-32 pb-20 overflow-hidden" ref={heroRef}>
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
                            Personal Wellness
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Your Journey to a Healthier, Happier You
                        </h1>
                        <p className="text-xl text-gray-100 mb-8">
                            Discover personalized wellness solutions for fitness, nutrition, mental health, and preventive care. Start your transformation today.
                        </p>
                        <Link to="/contact">
                            <motion.button
                                className="px-8 py-4 bg-white text-[#FF6B6B] rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Your Wellness Journey
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="py-6 bg-white border-b sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {sections.map((section, index) => (
                            <a
                                key={index}
                                href={`#${section.id}`}
                                className="px-6 py-3 bg-gray-100 text-[#0B4F6C] rounded-lg font-semibold hover:bg-[#FF6B6B] hover:text-white transition-colors"
                            >
                                {section.title.split(' ')[0]}
                            </a>
                        ))}
                        <a href="#wellness-quiz" className="px-6 py-3 bg-[#20BF55]/10 text-[#20BF55] rounded-lg font-semibold hover:bg-[#20BF55] hover:text-white transition-colors">
                            Take Quiz
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Personal Wellness is Important */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#FF6B6B] font-semibold text-sm uppercase tracking-wider">The Foundation of a Good Life</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] mt-2 mb-4">Why Personal Wellness is Important</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Heart, title: "Live Longer", desc: "Healthy habits add years to your life and life to your years" },
                            { icon: Smile, title: "Feel Better", desc: "More energy, better mood, and greater confidence daily" },
                            { icon: Shield, title: "Prevent Disease", desc: "Reduce risk of chronic conditions through proactive care" },
                            { icon: Brain, title: "Think Clearer", desc: "Improved focus, memory, and mental sharpness" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-pink-50 p-6 rounded-xl text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="w-16 h-16 bg-[#FF6B6B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="text-[#FF6B6B]" size={32} />
                                </div>
                                <h3 className="font-bold text-[#0B4F6C] text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Wellness Sections */}
            {sections.map((section, index) => (
                <section
                    key={index}
                    id={section.id}
                    className={`py-20 scroll-mt-32 ${index % 2 === 0 ? 'bg-gradient-to-br from-gray-50 to-pink-50' : 'bg-white'}`}
                    ref={index === 0 ? fitnessRef : index === 1 ? nutritionRef : index === 2 ? mentalRef : preventiveRef}
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
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: `${section.color}20` }}>
                                    <section.icon size={32} style={{ color: section.color }} />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] mb-6">{section.title}</h2>

                                <div className="space-y-4">
                                    {[
                                        { label: "What", emoji: "❓", content: section.what },
                                        { label: "When", emoji: "🕐", content: section.when },
                                        { label: "How", emoji: "🔧", content: section.how },
                                        { label: "Why", emoji: "💡", content: section.why }
                                    ].map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            className="bg-white p-4 rounded-xl shadow-sm border-l-4"
                                            style={{ borderLeftColor: section.color }}
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

            {/* Wellness Quiz */}
            <section id="wellness-quiz" className="py-20 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] scroll-mt-32" ref={quizRef}>
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        animate={quizInView ? "visible" : "hidden"}
                        variants={fadeInUp}
                    >
                        <div className="text-center text-white mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Test Your Personal Wellness</h2>
                            <p className="text-gray-100">Answer a few questions to get your wellness score</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            {!quizComplete ? (
                                <>
                                    <div className="mb-6">
                                        <div className="flex justify-between text-sm text-gray-500 mb-2">
                                            <span>Question {quizStep + 1} of {wellnessQuestions.length}</span>
                                            <span>{Math.round(((quizStep + 1) / wellnessQuestions.length) * 100)}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-[#FF6B6B]"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${((quizStep + 1) / wellnessQuestions.length) * 100}%` }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-[#0B4F6C] mb-6 text-center">
                                        {wellnessQuestions[quizStep].question}
                                    </h3>

                                    <div className="space-y-3">
                                        {wellnessQuestions[quizStep].options.map((option, index) => (
                                            <motion.button
                                                key={index}
                                                onClick={() => handleQuizAnswer(option)}
                                                className="w-full p-4 border-2 border-gray-200 rounded-xl text-left hover:border-[#FF6B6B] hover:bg-[#FF6B6B]/5 transition-all"
                                                whileHover={{ x: 10 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <span className="text-[#0B4F6C] font-medium">{option}</span>
                                            </motion.button>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <motion.div
                                    className="text-center"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <div className="w-32 h-32 mx-auto mb-6 relative">
                                        <svg className="w-full h-full transform -rotate-90">
                                            <circle cx="64" cy="64" r="56" stroke="#E5E7EB" strokeWidth="12" fill="none" />
                                            <motion.circle
                                                cx="64" cy="64" r="56"
                                                stroke={getWellnessScore() >= 70 ? "#20BF55" : getWellnessScore() >= 40 ? "#FFB347" : "#FF6B6B"}
                                                strokeWidth="12"
                                                fill="none"
                                                strokeLinecap="round"
                                                initial={{ strokeDasharray: "0 352" }}
                                                animate={{ strokeDasharray: `${(getWellnessScore() / 100) * 352} 352` }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                            />
                                        </svg>
                                        <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-[#0B4F6C]">
                                            {getWellnessScore()}%
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#0B4F6C] mb-2">Your Wellness Score</h3>
                                    <p className="text-gray-600 mb-6">
                                        {getWellnessScore() >= 70
                                            ? "Excellent! You're on the right track. Keep up the great work!"
                                            : getWellnessScore() >= 40
                                                ? "Good progress! There's room for improvement in some areas."
                                                : "There's significant room for improvement. Let us help you get started!"}
                                    </p>
                                    <div className="flex gap-4 justify-center">
                                        <button
                                            onClick={() => { setQuizStep(0); setQuizAnswers({}); setQuizComplete(false); }}
                                            className="px-6 py-3 border-2 border-[#FF6B6B] text-[#FF6B6B] rounded-lg font-semibold hover:bg-[#FF6B6B] hover:text-white transition-colors"
                                        >
                                            Retake Quiz
                                        </button>
                                        <Link to="/contact">
                                            <button className="px-6 py-3 bg-[#FF6B6B] text-white rounded-lg font-semibold hover:bg-[#e55555] transition-colors">
                                                Get Personalized Plan
                                            </button>
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* BMI Calculator */}
            <BMICalculator />

            {/* FAQ Section */}
            <FAQSection faqs={faqs} title="Personal Wellness FAQs" />

            {/* Query Form */}
            <TopicQueryForm topic="Personal Wellness" subtitle="Have questions about your wellness journey? We're here to guide you." />

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Healthier Life Starts Today</h2>
                    <p className="text-xl text-gray-100 mb-8">
                        Don't wait for tomorrow. Take the first step towards a healthier, happier you.
                    </p>
                    <Link to="/contact">
                        <motion.button
                            className="px-10 py-4 bg-white text-[#FF6B6B] rounded-lg font-bold text-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Book a Consultation
                        </motion.button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default PersonalWellness;
