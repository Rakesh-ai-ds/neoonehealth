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
            <div className="py-16 bg-white">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-[#20BF55]/10 to-[#01BAEF]/10 p-12 rounded-2xl"
                    >
                        <CheckCircle2 className="text-[#20BF55] mx-auto mb-4" size={64} />
                        <h3 className="text-2xl font-bold text-[#0B4F6C] mb-2">Thank You!</h3>
                        <p className="text-gray-600">We've received your query about {topic}. Our team will contact you within 24 hours.</p>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#20BF55] font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] mt-2 mb-2">
                        Ask About {topic}
                    </h2>
                    <p className="text-gray-600">{subtitle}</p>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-semibold text-[#0B4F6C] mb-2 flex items-center gap-2">
                                <User size={16} /> Your Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20BF55] focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#0B4F6C] mb-2 flex items-center gap-2">
                                <Mail size={16} /> Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20BF55] focus:border-transparent"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-[#0B4F6C] mb-2 flex items-center gap-2">
                                <Phone size={16} /> Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+91 98765 43210"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20BF55] focus:border-transparent"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-[#0B4F6C] mb-2 flex items-center gap-2">
                                <MessageSquare size={16} /> Your Question *
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                placeholder={`Ask us anything about ${topic}...`}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20BF55] focus:border-transparent resize-none"
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                            {error}
                        </div>
                    )}

                    <motion.button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-[#20BF55] to-[#01BAEF] text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
                        whileHover={{ scale: 1.02 }}
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
