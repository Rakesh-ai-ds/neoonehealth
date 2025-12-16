import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Baby, Stethoscope, Syringe, TrendingUp, Apple, Heart, Shield, BookOpen, CheckCircle } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import TopicQueryForm from '@/components/TopicQueryForm';

const ChildHealth = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [pediatricRef, pediatricInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [vaccinationRef, vaccinationInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [growthRef, growthInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [nutritionRef, nutritionInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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

    const sections = [
        {
            id: "pediatric-care",
            title: "Pediatric Care",
            icon: Stethoscope,
            color: "#FF6B6B",
            image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
            what: "Pediatric care is specialized healthcare for infants, children, and adolescents up to age 18. It covers all aspects of physical, mental, and emotional health, tailored to the unique needs of growing bodies and developing minds.",
            when: "Schedule regular well-child visits: monthly for infants, quarterly for toddlers, and annually for older children. Visit immediately if your child has high fever, difficulty breathing, unusual behavior, or any injury. Don't wait when something seems wrong.",
            how: "Our pediatricians conduct comprehensive examinations, track growth milestones, provide vaccinations, address concerns, and offer guidance on nutrition, sleep, and development. We create a comfortable, child-friendly environment.",
            why: "Children aren't just small adults—their bodies and health needs are fundamentally different. Specialized pediatric care ensures proper development, early detection of issues, and builds a foundation for lifelong health."
        },
        {
            id: "vaccination",
            title: "Vaccination Programs",
            icon: Syringe,
            color: "#20BF55",
            image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
            what: "Vaccinations protect children from serious, potentially life-threatening diseases by building immunity before exposure. Our vaccination programs follow national and international immunization schedules to provide complete protection.",
            when: "Vaccinations begin at birth and continue through adolescence according to a recommended schedule. Some vaccines require multiple doses at specific intervals. We provide timely reminders so you never miss a vaccine.",
            how: "We administer vaccines in a gentle, child-friendly manner, explain expected reactions to parents, provide post-vaccination care guidance, and maintain detailed immunization records. We use only WHO-approved vaccines.",
            why: "Vaccines are one of the most effective ways to protect children. They prevent outbreaks of deadly diseases, protect vulnerable individuals who can't be vaccinated, and have saved millions of lives worldwide."
        },
        {
            id: "growth-development",
            title: "Growth & Development",
            icon: TrendingUp,
            color: "#01BAEF",
            image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=800&q=80",
            what: "Growth and development monitoring tracks a child's physical growth (height, weight, head circumference) and developmental milestones (motor skills, language, cognition, social skills) to ensure they're progressing normally.",
            when: "Monitor at every well-child visit. Be alert for delays in sitting, walking, speaking, or social interaction. Early detection (before age 3) of developmental delays significantly improves outcomes with intervention.",
            how: "We use standardized growth charts, developmental screening tools, and observation. Parents receive guidance on age-appropriate activities that promote development. If concerns arise, we provide early intervention referrals.",
            why: "Every child develops at their own pace, but some delays may indicate underlying issues. Early identification allows for timely intervention, helping children reach their full potential."
        },
        {
            id: "child-nutrition",
            title: "Child Nutrition",
            icon: Apple,
            color: "#F59E0B",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
            what: "Child nutrition focuses on providing the right balance of nutrients needed for healthy growth and development. It covers breastfeeding support, introduction of solids, managing picky eating, and addressing nutritional deficiencies.",
            when: "Nutrition guidance starts from birth (breastfeeding/formula), continues through weaning (around 6 months), and adapts as children grow. Address concerns early if you notice poor weight gain, persistent fatigue, or unusual eating behaviors.",
            how: "Our nutritionists assess dietary intake, identify deficiencies, create personalized meal plans, and provide practical tips for healthy eating habits. We address common challenges like picky eating, food allergies, and obesity prevention.",
            why: "Proper nutrition in childhood builds strong bones, healthy organs, sharp minds, and good immune function. Eating habits formed early tend to persist into adulthood, making childhood the critical time to establish healthy patterns."
        }
    ];

    const faqs = [
        {
            question: "When should I bring my child for their first doctor's visit?",
            answer: "The first pediatric visit should happen within 3-5 days after birth, followed by regular check-ups at 1, 2, 4, 6, 9, and 12 months in the first year. These visits are crucial for monitoring growth, development, and administering timely vaccinations."
        },
        {
            question: "How do I know if my child's development is normal?",
            answer: "Every child develops at their own pace, but there are general milestones to watch for. At each well-child visit, we assess development. Warning signs include not responding to sounds, limited eye contact, delays in sitting/walking/talking, or loss of previously acquired skills. When in doubt, consult us."
        },
        {
            question: "Are vaccines safe for my child?",
            answer: "Yes, vaccines are extensively tested and monitored for safety. The benefits far outweigh the minimal risks. Common side effects like mild fever or soreness are temporary. We're happy to discuss any specific concerns you have about vaccination."
        },
        {
            question: "My child is a picky eater. Should I be worried?",
            answer: "Picky eating is common, especially between ages 2-6. It usually resolves with time. However, if your child is losing weight, refusing entire food groups, or showing signs of nutritional deficiency (fatigue, poor concentration), consult our nutritionist for personalized guidance."
        },
        {
            question: "How much screen time is appropriate for children?",
            answer: "Guidelines recommend no screen time for children under 18 months (except video calls), up to 1 hour daily for ages 2-5, and consistent limits for older children. Quality matters—educational content is preferable. Ensure screens don't replace physical play, reading, and social interaction."
        },
        {
            question: "When should I be concerned about my child's weight?",
            answer: "If your child's growth pattern changes significantly (crossing percentile lines on growth charts), they seem noticeably heavier or lighter than peers, or if they have difficulty with physical activities, it's worth discussing with us. Both underweight and overweight have health implications."
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
                            Child Health Services
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Nurturing Healthy Futures for Your Little Ones
                        </h1>
                        <p className="text-xl text-gray-100 mb-8">
                            Comprehensive pediatric care, vaccinations, growth monitoring, and nutrition guidance for children from birth to adolescence.
                        </p>
                        <Link to="/contact">
                            <motion.button
                                className="px-8 py-4 bg-white text-[#FF6B6B] rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Book a Pediatric Appointment
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
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-[#0B4F6C] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {[
                            { number: "10,000+", label: "Children Cared For" },
                            { number: "98%", label: "Parent Satisfaction" },
                            { number: "15+", label: "Years Experience" },
                            { number: "24/7", label: "Emergency Support" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <p className="text-3xl md:text-4xl font-bold text-[#20BF55] mb-2">{stat.number}</p>
                                <p className="text-gray-300 text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Service Sections */}
            {sections.map((section, index) => (
                <section
                    key={index}
                    id={section.id}
                    className={`py-20 scroll-mt-32 ${index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-gray-50 to-pink-50'}`}
                    ref={index === 0 ? pediatricRef : index === 1 ? vaccinationRef : index === 2 ? growthRef : nutritionRef}
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
                                            className="bg-gray-50 p-4 rounded-xl border-l-4"
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

            {/* Why Choose Us for Child Health */}
            <section className="py-20 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Parents Trust Us</h2>
                        <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                            We understand that choosing healthcare for your child is one of the most important decisions you'll make
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Heart, title: "Child-Friendly Care", desc: "Gentle approach that puts children at ease" },
                            { icon: Shield, title: "Safe Environment", desc: "Strict hygiene and safety protocols" },
                            { icon: BookOpen, title: "Parent Education", desc: "We empower you with knowledge" },
                            { icon: Baby, title: "Holistic Approach", desc: "Physical, mental, and emotional health" }
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
            <FAQSection faqs={faqs} title="Child Health FAQs" />

            {/* Query Form */}
            <TopicQueryForm topic="Child Health" subtitle="Have questions about your child's health? We're here to help." />

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#FF6B6B] to-[#FFB4B4] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Give Your Child the Best Start in Life</h2>
                    <p className="text-xl text-gray-100 mb-8">
                        Book a consultation with our pediatric specialists today and ensure your child's healthy development.
                    </p>
                    <Link to="/contact">
                        <motion.button
                            className="px-10 py-4 bg-white text-[#FF6B6B] rounded-lg font-bold text-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Schedule an Appointment
                        </motion.button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ChildHealth;
