import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, ExternalLink, Stethoscope, Apple } from 'lucide-react';

const Associates = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
    const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

    const associates = [
        {
            name: "Sai Physiotherapy & Nutrition Clinic",
            specialist: "K. Karthikayan",
            qualifications: "M.P.T Physiotherapist",
            experience: "Govt M.K.M.C. Hospital, Hemophilia Society, R.K. Mission Hospital",
            icon: Stethoscope,
            color: "#2563EB",
            phone: "+91 90477 34110",
            email: "neoonehealth@gmail.com",
            mapLink: "https://maps.app.goo.gl/xEHbQKCFRosT8GXm6?g_st=aw"
        },
        {
            name: "Sai Physiotherapy & Diet Clinic",
            specialist: "Sangeetha R",
            qualifications: "MSc Foods & Nutrition",
            experience: "Director cum Chief Nutritionist, 20+ Years Experience",
            icon: Apple,
            color: "#22C55E",
            phone: "+91 90477 34110",
            email: "neoonehealth@gmail.com",
            mapLink: "https://maps.app.goo.gl/xEHbQKCFRosT8GXm6?g_st=aw"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-white via-[#F8FAFC] to-[#EFF6FF]" ref={heroRef}>
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div className="max-w-4xl mx-auto text-center" initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={fadeInUp}>
                        <span className="inline-block bg-[#2563EB]/10 border border-[#2563EB]/20 px-4 py-2 rounded-full text-[#2563EB] text-sm font-medium mb-6">Our Associates</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-6 leading-tight">
                            Trusted <span className="bg-gradient-to-r from-[#2563EB] to-[#22C55E] bg-clip-text text-transparent">Healthcare Partners</span>
                        </h1>
                        <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
                            Our network of expert clinics and specialists providing comprehensive health care services.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Associates Cards */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {associates.map((associate, index) => (
                            <motion.div
                                key={index}
                                className="bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                            >
                                {/* Header */}
                                <div className="p-6 md:p-8" style={{ background: `linear-gradient(135deg, ${associate.color}10, ${associate.color}05)` }}>
                                    <div className="flex items-start gap-4">
                                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${associate.color}15` }}>
                                            <associate.icon size={32} style={{ color: associate.color }} />
                                        </div>
                                        <div>
                                            <h2 className="text-xl md:text-2xl font-bold text-[#1E293B] mb-1">{associate.name}</h2>
                                            <p className="text-[#64748B] text-sm">{associate.specialist}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="p-6 md:p-8 pt-0 md:pt-0">
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-[#94A3B8] text-xs uppercase tracking-wider mb-1">Qualifications</p>
                                            <p className="text-[#1E293B] font-medium">{associate.qualifications}</p>
                                        </div>
                                        <div>
                                            <p className="text-[#94A3B8] text-xs uppercase tracking-wider mb-1">Experience</p>
                                            <p className="text-[#64748B] text-sm">{associate.experience}</p>
                                        </div>
                                    </div>

                                    {/* Contact Info */}
                                    <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                                        <a href={`tel:${associate.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-[#64748B] hover:text-[#2563EB] transition-colors">
                                            <div className="w-10 h-10 bg-[#F8FAFC] rounded-lg flex items-center justify-center">
                                                <Phone size={18} className="text-[#2563EB]" />
                                            </div>
                                            <span className="font-medium">{associate.phone}</span>
                                        </a>
                                        <a href={`mailto:${associate.email}`} className="flex items-center gap-3 text-[#64748B] hover:text-[#2563EB] transition-colors">
                                            <div className="w-10 h-10 bg-[#F8FAFC] rounded-lg flex items-center justify-center">
                                                <Mail size={18} className="text-[#2563EB]" />
                                            </div>
                                            <span className="font-medium">{associate.email}</span>
                                        </a>
                                    </div>

                                    {/* Map Link */}
                                    <a
                                        href={associate.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white rounded-xl font-bold hover:shadow-lg transition-all"
                                    >
                                        <MapPin size={20} />
                                        View Location on Map
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Map Embed Section */}
            <section className="py-16 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1E293B] mb-4">Find Us</h2>
                        <p className="text-[#64748B]">Visit our clinic for personalized healthcare services</p>
                    </motion.div>
                    <motion.div
                        className="rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.123456789!2d78.123456789!3d11.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA0JzAwLjAiTiA3OMKwMDcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Clinic Location"
                            className="w-full"
                        ></iframe>
                    </motion.div>
                    <div className="text-center mt-6">
                        <a
                            href="https://maps.app.goo.gl/xEHbQKCFRosT8GXm6?g_st=aw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white rounded-xl font-bold hover:shadow-lg transition-all"
                        >
                            <MapPin size={20} />
                            Open in Google Maps
                            <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Associates;
