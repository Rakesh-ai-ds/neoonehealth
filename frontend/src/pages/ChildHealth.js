import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Baby, Stethoscope, Syringe, TrendingUp, Apple, Heart, Shield, BookOpen, ChevronRight } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import TopicQueryForm from '@/components/TopicQueryForm';

const ChildHealth = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
    const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
    const fadeInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };

    const sections = [
        { id: "pediatric-care", title: "Pediatric Care", icon: Stethoscope, image: "/images/child-antigravity.png", description: "Specialized healthcare for infants, children, and adolescents covering all aspects of physical, mental, and emotional health. Our pediatricians conduct comprehensive examinations, track growth milestones, and offer guidance.", benefits: ["Age-appropriate medical examinations", "Growth and development tracking", "Early detection of health issues", "Child-friendly environment", "Parent education and guidance"] },
        { id: "vaccination", title: "Vaccination Programs", icon: Syringe, image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80", description: "Protect children from serious diseases through our comprehensive vaccination programs. We follow national and international immunization schedules and use only WHO-approved vaccines.", benefits: ["Complete immunization coverage", "Timely vaccine reminders", "Safe, WHO-approved vaccines", "Minimal discomfort techniques", "Detailed immunization records"] },
        { id: "growth-development", title: "Growth & Development", icon: TrendingUp, image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=800&q=80", description: "Monitor your child's physical growth and developmental milestones to ensure they're progressing normally. We use standardized growth charts and developmental screening tools.", benefits: ["Regular milestone tracking", "Standardized growth assessments", "Early delay detection", "Development-promoting activities", "Intervention referrals when needed"] },
        { id: "child-nutrition", title: "Child Nutrition", icon: Apple, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80", description: "Proper nutrition for healthy growth and development. We provide guidance from breastfeeding through weaning and beyond, addressing picky eating, food allergies, and obesity prevention.", benefits: ["Personalized nutrition plans", "Breastfeeding support", "Picky eating solutions", "Allergy management", "Healthy eating habits"] }
    ];

    const faqs = [
        { question: "When should I bring my child for their first doctor's visit?", answer: "The first pediatric visit should happen within 3-5 days after birth, followed by regular check-ups at 1, 2, 4, 6, 9, and 12 months in the first year." },
        { question: "How do I know if my child's development is normal?", answer: "Every child develops at their own pace, but there are general milestones to watch for. We assess development at each well-child visit." },
        { question: "Are vaccines safe for my child?", answer: "Yes, vaccines are extensively tested and monitored for safety. The benefits far outweigh the minimal risks." },
        { question: "My child is a picky eater. Should I be worried?", answer: "Picky eating is common, especially between ages 2-6. However, if your child is losing weight or showing signs of nutritional deficiency, consult our nutritionist." }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-white via-[#F0F9FF] to-[#E0F2FE]" ref={heroRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div className="max-w-4xl mx-auto text-center" initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={fadeInUp}>
                        <span className="inline-block bg-[#38BDF8]/10 border border-[#38BDF8]/20 px-4 py-2 rounded-full text-[#38BDF8] text-sm font-medium mb-6">Child Health Services</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-6 leading-tight">Nurturing <span className="bg-gradient-to-r from-[#38BDF8] to-[#22C55E] bg-clip-text text-transparent">Healthy Futures</span></h1>
                        <p className="text-lg text-[#64748B] mb-8 max-w-2xl mx-auto">Comprehensive pediatric care, vaccinations, growth monitoring, and nutrition guidance for children from birth to adolescence.</p>
                    </motion.div>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="py-6 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {sections.map((section, index) => (<a key={index} href={`#${section.id}`} className="px-6 py-3 bg-[#F8FAFC] text-[#64748B] rounded-xl font-medium hover:bg-[#2563EB]/10 hover:text-[#2563EB] transition-all">{section.title.split(' ')[0]}</a>))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gradient-to-r from-[#2563EB] to-[#38BDF8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[{ number: "10,000+", label: "Children Cared For" }, { number: "98%", label: "Parent Satisfaction" }, { number: "15+", label: "Years Experience" }, { number: "24/7", label: "Emergency Support" }].map((stat, index) => (
                            <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                                <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</p>
                                <p className="text-white/80 text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Sections */}
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
                                    <img src={section.image} alt={section.title} className="w-full h-80 object-cover" onError={(e) => { e.target.src = `https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80`; }} />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Why Parents Trust Us */}
            <section className="py-20 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-[#2563EB] font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mt-2 mb-4">Why Parents Trust Us</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[{ icon: Heart, title: "Child-Friendly Care", desc: "Gentle approach that puts children at ease" }, { icon: Shield, title: "Safe Environment", desc: "Strict hygiene and safety protocols" }, { icon: BookOpen, title: "Parent Education", desc: "We empower you with knowledge" }, { icon: Baby, title: "Holistic Approach", desc: "Physical, mental, and emotional health" }].map((item, index) => (
                            <motion.div key={index} className="bg-white border border-gray-100 p-6 rounded-2xl text-center shadow-sm hover:shadow-lg transition-all" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5 }}>
                                <div className="w-14 h-14 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mx-auto mb-4"><item.icon className="text-[#2563EB]" size={28} /></div>
                                <h3 className="font-bold text-[#1E293B] text-lg mb-2">{item.title}</h3>
                                <p className="text-[#94A3B8] text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} title="Child Health FAQs" />
            <TopicQueryForm topic="Child Health" subtitle="Have questions about your child's health? We're here to help." />

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#2563EB] to-[#38BDF8]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Give Your Child the Best Start in Life</h2>
                    <p className="text-xl text-white/80 mb-8">Book a consultation with our pediatric specialists today.</p>
                    <Link to="/contact"><motion.button className="px-10 py-4 bg-white text-[#2563EB] rounded-xl font-bold text-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Schedule an Appointment</motion.button></Link>
                </div>
            </section>
        </div>
    );
};

export default ChildHealth;
