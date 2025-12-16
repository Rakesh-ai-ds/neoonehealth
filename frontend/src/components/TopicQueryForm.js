import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle2, User, Mail, Phone, MessageSquare } from 'lucide-react';

const TopicQueryForm = ({ topic, subtitle = "Have questions? We're here to help!" }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const apiUrl = process.env.NODE_ENV === 'development'
                ? 'http://localhost:3001/api/send-email'
                : '/api/send-email';

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    company: 'Individual',
                    message: `Topic: ${topic}\n\nMessage:\n${formData.message}`,
                    subject: `Query about ${topic} - ${formData.name}`
                }),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Failed to send');

            setSubmitted(true);
        } catch (err) {
            setError(err.message || 'Failed to send. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="py-20 bg-[#020617]">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-[#0F172A] border border-white/5 p-12 rounded-2xl"
                    >
                        <div className="w-16 h-16 bg-[#22C55E]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 className="text-[#22C55E]" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-[#E5E7EB] mb-2">Thank You!</h3>
                        <p className="text-[#94A3B8]">We've received your query about {topic}. Our team will contact you within 24 hours.</p>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className="py-20 bg-[#020617]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#38BDF8] font-medium text-sm uppercase tracking-wider">Get In Touch</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB] mt-2 mb-2">
                        Ask About {topic}
                    </h2>
                    <p className="text-[#94A3B8]">{subtitle}</p>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    className="bg-[#0F172A] border border-white/5 p-8 rounded-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-semibold text-[#E5E7EB] mb-2 flex items-center gap-2">
                                <User size={16} className="text-[#38BDF8]" /> Your Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                                className="w-full px-4 py-3 bg-[#020617] border border-white/10 rounded-xl text-[#E5E7EB] placeholder-[#64748B] focus:outline-none focus:border-[#38BDF8] transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#E5E7EB] mb-2 flex items-center gap-2">
                                <Mail size={16} className="text-[#38BDF8]" /> Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 bg-[#020617] border border-white/10 rounded-xl text-[#E5E7EB] placeholder-[#64748B] focus:outline-none focus:border-[#38BDF8] transition-colors"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-[#E5E7EB] mb-2 flex items-center gap-2">
                                <Phone size={16} className="text-[#38BDF8]" /> Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+91 98765 43210"
                                className="w-full px-4 py-3 bg-[#020617] border border-white/10 rounded-xl text-[#E5E7EB] placeholder-[#64748B] focus:outline-none focus:border-[#38BDF8] transition-colors"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-[#E5E7EB] mb-2 flex items-center gap-2">
                                <MessageSquare size={16} className="text-[#38BDF8]" /> Your Question *
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                placeholder={`Ask us anything about ${topic}...`}
                                className="w-full px-4 py-3 bg-[#020617] border border-white/10 rounded-xl text-[#E5E7EB] placeholder-[#64748B] focus:outline-none focus:border-[#38BDF8] transition-colors resize-none"
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="mb-4 bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#EF4444] px-4 py-3 rounded-xl text-sm">
                            {error}
                        </div>
                    )}

                    <motion.button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-50"
                        whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(37, 99, 235, 0.3)' }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {loading ? (
                            <>
                                <Loader2 className="animate-spin" size={20} />
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send size={20} />
                                Submit Your Query
                            </>
                        )}
                    </motion.button>
                </motion.form>
            </div>
        </div>
    );
};

export default TopicQueryForm;
