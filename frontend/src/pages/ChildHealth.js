import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Baby, Bone, Apple, Activity, Shield, Heart, Eye, Dumbbell, CheckCircle, ChevronRight, Leaf, Target } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import TopicQueryForm from '@/components/TopicQueryForm';

const ChildHealth = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
    const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
    const fadeInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
    const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

    const assessmentPoints = [
        "Growth stage and age-related needs",
        "Dietary patterns and nutrient intake",
        "Muscle strength and endurance (functional observation)",
        "Posture during sitting, standing and movement",
        "Activity level and screen-time habits",
        "Fatigue, weakness and recovery after play"
    ];

    const whatWeLookFor = [
        { title: "Poor Bone Nourishment", icon: Bone, desc: "Signs of inadequate bone nutrition affecting growth" },
        { title: "Muscle Weakness", icon: Dumbbell, desc: "Muscle weakness or imbalance affecting movement" },
        { title: "Postural Issues", icon: Activity, desc: "Postural deviations due to modern lifestyle habits" },
        { title: "Nutritional Gaps", icon: Apple, desc: "Nutritional gaps affecting growth and energy" },
        { title: "Joint Stress", icon: Shield, desc: "Early stress on joints from poor habits" }
    ];

    const planningAreas = [
        "Nutrition strategies for bone and muscle development",
        "Age-appropriate protein, calcium and micronutrient balance",
        "Food-based solutions (no unnecessary supplements)",
        "Lifestyle correction to support posture and movement",
        "Daily habit changes that fit school and home routines"
    ];

    const focusAreas = [
        { title: "Bone Strength", desc: "Building strong bones during growing years", icon: Bone, color: "#2563EB" },
        { title: "Muscle Endurance", desc: "Endurance for play and sports activities", icon: Dumbbell, color: "#22C55E" },
        { title: "Posture Correction", desc: "Through nutrition and movement balance", icon: Activity, color: "#7C3AED" },
        { title: "Joint Protection", desc: "During critical growth spurts", icon: Shield, color: "#F97316" },
        { title: "Fatigue Prevention", desc: "Prevention of weakness and early aches", icon: Heart, color: "#EF4444" }
    ];

    const whyChooseUs = [
        { title: "Growth-Focused", desc: "Not disease-focused approach" },
        { title: "Nutrition-First", desc: "Musculoskeletal care priority" },
        { title: "Simple Guidance", desc: "Clear explanations for parents" },
        { title: "Child-Friendly", desc: "Comfortable for children" },
        { title: "Long-Term Health", desc: "Movement health mindset" }
    ];

    const faqs = [
        { question: "What age group is this program suitable for?", answer: "Our nutrition-led musculoskeletal care is designed for children from early childhood through adolescence, with age-appropriate assessments and plans for each developmental stage." },
        { question: "Do you prescribe supplements?", answer: "We focus on food-based solutions first. Supplements are only recommended when absolutely necessary based on specific deficiencies, and always in consultation with parents." },
        { question: "How often should my child be assessed?", answer: "We recommend assessments every 3-6 months during active growth phases, with regular follow-ups to track progress and adjust plans as needed." },
        { question: "Can this help with my child's posture problems?", answer: "Yes, our approach addresses posture through a combination of nutrition optimization, lifestyle corrections, and movement guidance tailored to your child's specific needs." }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-white via-[#F0F9FF] to-[#E0F2FE]" ref={heroRef}>
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div className="max-w-4xl mx-auto text-center" initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={fadeInUp}>
                        <span className="inline-block bg-[#22C55E]/10 border border-[#22C55E]/20 px-4 py-2 rounded-full text-[#22C55E] text-sm font-medium mb-6">
                            <Leaf className="inline w-4 h-4 mr-2" />
                            Nutrition-Led Care
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-6 leading-tight">
                            Nutrition-Led <span className="bg-gradient-to-r from-[#22C55E] to-[#38BDF8] bg-clip-text text-transparent">Musculoskeletal Care</span> for Children
                        </h1>
                        <p className="text-xl text-[#64748B] mb-4 max-w-2xl mx-auto font-medium">
                            We don't just treat symptoms.
                        </p>
                        <p className="text-lg text-[#64748B] mb-8 max-w-2xl mx-auto">
                            We support growth, strength and movement — the right way.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <motion.button className="px-8 py-4 bg-gradient-to-r from-[#22C55E] to-[#38BDF8] text-white rounded-xl font-bold shadow-lg" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                                    Support Your Child's Growth
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <p className="text-lg text-[#64748B] leading-relaxed mb-6">
                            Children's bones, muscles and posture are shaped daily by nutrition, lifestyle and movement habits.
                        </p>
                        <p className="text-lg text-[#1E293B] font-medium">
                            Our approach focuses on <span className="text-[#22C55E]">assessment</span>, <span className="text-[#2563EB]">planning</span> and <span className="text-[#7C3AED]">long-term support</span> to help children grow strong and move confidently.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* How We Assess */}
            <section className="py-20 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}>
                            <span className="text-[#2563EB] font-medium text-sm uppercase tracking-wider">Assessment</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mt-2 mb-6">How We Assess Your Child</h2>
                            <p className="text-[#64748B] text-lg mb-6">
                                We use a non-invasive, child-friendly approach focused on daily habits and growth patterns.
                            </p>
                            <p className="text-[#1E293B] font-semibold mb-4">We assess:</p>
                            <div className="space-y-3">
                                {assessmentPoints.map((point, idx) => (
                                    <motion.div key={idx} className="flex items-start gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                                        <div className="w-6 h-6 bg-[#22C55E]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircle className="text-[#22C55E]" size={14} />
                                        </div>
                                        <span className="text-[#64748B]">{point}</span>
                                    </motion.div>
                                ))}
                            </div>
                            <p className="text-[#64748B] mt-6 italic">
                                This helps us understand how nutrition and lifestyle affect your child's musculoskeletal health.
                            </p>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}>
                            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
                                <img src="/images/child-antigravity.png" alt="Child Assessment" className="w-full h-80 object-cover" onError={(e) => { e.target.src = `https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80`; }} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What We Look For */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-[#F97316] font-medium text-sm uppercase tracking-wider">Early Detection</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mt-2 mb-4">What We Look For</h2>
                        <p className="text-[#64748B] max-w-2xl mx-auto">Early identification helps prevent future pain, poor posture and movement limitations.</p>
                    </motion.div>

                    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        {whatWeLookFor.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#F8FAFC] border border-gray-100 p-6 rounded-2xl text-center hover:shadow-lg transition-all"
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                            >
                                <div className="w-14 h-14 bg-[#F97316]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="text-[#F97316]" size={28} />
                                </div>
                                <h3 className="font-bold text-[#1E293B] text-sm mb-2">{item.title}</h3>
                                <p className="text-[#94A3B8] text-xs">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* How We Plan */}
            <section className="py-20 bg-gradient-to-r from-[#2563EB] to-[#38BDF8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Plan for Your Child</h2>
                            <p className="text-white/80 text-lg mb-2">Every child is different.</p>
                            <p className="text-white/80 text-lg mb-8">Our plans are individualised, practical and parent-friendly.</p>
                            <p className="text-white font-semibold mb-4">We plan:</p>
                            <div className="space-y-3">
                                {planningAreas.map((area, idx) => (
                                    <motion.div key={idx} className="flex items-start gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <ChevronRight className="text-white" size={14} />
                                        </div>
                                        <span className="text-white/90">{area}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                            {focusAreas.map((area, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-sm border border-white/20 p-5 rounded-xl"
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${area.color}30` }}>
                                        <area.icon size={20} style={{ color: area.color }} />
                                    </div>
                                    <h3 className="text-white font-bold mb-1">{area.title}</h3>
                                    <p className="text-white/70 text-sm">{area.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Parents Choose Us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-[#22C55E] font-medium text-sm uppercase tracking-wider">Our Approach</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mt-2 mb-4">Why Parents Choose Us</h2>
                    </motion.div>

                    <motion.div className="grid grid-cols-2 md:grid-cols-5 gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        {whyChooseUs.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-[#22C55E]/5 to-white border border-[#22C55E]/20 p-5 rounded-xl text-center"
                                variants={fadeInUp}
                            >
                                <div className="w-10 h-10 bg-[#22C55E]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <CheckCircle className="text-[#22C55E]" size={20} />
                                </div>
                                <h3 className="font-bold text-[#1E293B] text-sm mb-1">{item.title}</h3>
                                <p className="text-[#94A3B8] text-xs">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#F8FAFC]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-6">Supporting Today's Children for Tomorrow's Strength</h2>
                        <div className="space-y-2 text-lg text-[#64748B] mb-8">
                            <p>Healthy nutrition builds <span className="text-[#22C55E] font-semibold">strong bones</span>.</p>
                            <p>Balanced habits build <span className="text-[#2563EB] font-semibold">confident movement</span>.</p>
                            <p>Early guidance creates <span className="text-[#7C3AED] font-semibold">lifelong musculoskeletal health</span>.</p>
                        </div>
                        <Link to="/contact">
                            <motion.button className="px-10 py-4 bg-gradient-to-r from-[#22C55E] to-[#38BDF8] text-white rounded-xl font-bold text-lg shadow-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                👉 Support Your Child's Growth with Structured Planning
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <FAQSection faqs={faqs} title="Frequently Asked Questions" />
            <TopicQueryForm topic="Child Nutrition & Musculoskeletal Health" subtitle="Questions about your child's health? Our specialists are here to help." />
        </div>
    );
};

export default ChildHealth;
