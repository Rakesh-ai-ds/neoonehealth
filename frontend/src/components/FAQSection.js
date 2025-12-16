import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQSection = ({ faqs, title = "Frequently Asked Questions" }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="py-12 md:py-20 bg-[#F8FAFC]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-8 md:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#2563EB] font-medium text-xs md:text-sm uppercase tracking-wider">Got Questions?</span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E293B] mt-2">{title}</h2>
                </motion.div>

                <div className="space-y-3 md:space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-4 py-4 md:px-6 md:py-5 flex items-center justify-between text-left active:bg-[#F8FAFC]"
                            >
                                <span className="font-semibold text-[#1E293B] text-sm md:text-base lg:text-lg pr-4 leading-tight">{faq.question}</span>
                                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#F8FAFC] flex items-center justify-center">
                                    {openIndex === index ? (
                                        <Minus className="text-[#2563EB]" size={18} />
                                    ) : (
                                        <Plus className="text-[#64748B]" size={18} />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-4 pb-4 md:px-6 md:pb-5 text-[#64748B] text-sm md:text-base leading-relaxed border-t border-gray-50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
