import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle2, User, Mail, Phone, MessageSquare } from 'lucide-react';

const TopicQueryForm = ({ topic, subtitle = "Have questions? We're here to help!" }) => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
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
            const apiUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3001/api/send-email' : '/api/send-email';
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
            <div className="py-12 md:py-20 bg-white">
                <div className="max-w-md mx-auto px-4 text-center">
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-[#F8FAFC] border border-gray-100 p-8 md:p-12 rounded-2xl">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-[#22C55E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 className="text-[#22C55E]" size={28} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#1E293B] mb-2">Thank You!</h3>
                        <p className="text-[#64748B] text-sm md:text-base">We've received your query. Our team will contact you within 24 hours.</p>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className="py-12 md:py-20 bg-white">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div className="text-center mb-6 md:mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <span className="text-[#2563EB] font-medium text-xs md:text-sm uppercase tracking-wider">Get In Touch</span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E293B] mt-2 mb-2">Ask About {topic}</h2>
                    <p className="text-[#64748B] text-sm md:text-base">{subtitle}</p>
                </motion.div>

                <motion.form onSubmit={handleSubmit} className="bg-[#F8FAFC] border border-gray-100 p-4 md:p-8 rounded-2xl" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <div className="space-y-4 md:space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-[#1E293B] mb-2 flex items-center gap-2">
                                <User size={14} className="text-[#2563EB]" /> Your Name *
                            </label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB]" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-[#1E293B] mb-2 flex items-center gap-2">
                                    <Mail size={14} className="text-[#2563EB]" /> Email *
                                </label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB]" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-[#1E293B] mb-2 flex items-center gap-2">
                                    <Phone size={14} className="text-[#2563EB]" /> Phone
                                </label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB]" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#1E293B] mb-2 flex items-center gap-2">
                                <MessageSquare size={14} className="text-[#2563EB]" /> Your Question *
                            </label>
                            <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder={`Ask us anything about ${topic}...`} className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] resize-none" />
                        </div>
                    </div>

                    {error && (<div className="mt-4 bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#EF4444] px-4 py-3 rounded-xl text-sm">{error}</div>)}

                    <motion.button type="submit" disabled={loading} className="w-full mt-6 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 disabled:opacity-50" whileTap={{ scale: 0.98 }}>
                        {loading ? (<><Loader2 className="animate-spin" size={20} />Sending...</>) : (<><Send size={20} />Submit Query</>)}
                    </motion.button>
                </motion.form>
            </div>
        </div>
    );
};

export default TopicQueryForm;
