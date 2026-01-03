import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Loader2, Baby, Heart, Briefcase, MessageSquare, Send, Clock, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [selectedPurpose, setSelectedPurpose] = useState('');
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', message: '', companyName: '', employeeCount: '', childAge: '' });

  const purposes = [
    { id: 'personal-wellness', icon: Heart, label: 'Personal', color: '#22C55E' },
    { id: 'child-health', icon: Baby, label: 'Child', color: '#38BDF8' },
    { id: 'occupational-health', icon: Briefcase, label: 'Workplace', color: '#D97706' },
    { id: 'elderly-health', icon: User, label: 'Elderly', color: '#7C3AED' },
    { id: 'general-inquiry', icon: MessageSquare, label: 'General', color: '#2563EB' },
  ];

  const handleInputChange = (e) => { const { name, value } = e.target; setFormData(prev => ({ ...prev, [name]: value })); if (validationErrors[name]) setValidationErrors(prev => ({ ...prev, [name]: '' })); };
  const handlePurposeSelect = (purposeId) => { setSelectedPurpose(purposeId); setFormData(prev => ({ ...prev, purpose: purposeId })); if (validationErrors.purpose) setValidationErrors(prev => ({ ...prev, purpose: '' })); };

  const validateForm = () => {
    const errors = {};
    if (!selectedPurpose) errors.purpose = 'Please select a topic';
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Invalid email';
    if (!formData.phone.trim()) errors.phone = 'Phone is required';
    if (selectedPurpose === 'occupational-health' && !formData.companyName.trim()) errors.companyName = 'Company name is required';
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true); setError('');
    try {
      const apiUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3001/api/send-email' : '/api/send-email';
      let messageContent = `Purpose: ${selectedPurpose}\n\n`;
      if (formData.companyName) messageContent += `Company: ${formData.companyName}\n`;
      if (formData.employeeCount) messageContent += `Employees: ${formData.employeeCount}\n`;
      if (formData.childAge) messageContent += `Child Age: ${formData.childAge}\n`;
      if (formData.message) messageContent += `\nMessage:\n${formData.message}`;
      const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: formData.fullName, email: formData.email, phone: formData.phone, company: formData.companyName || 'Individual', message: messageContent, subject: `${selectedPurpose} - ${formData.fullName}` }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to send');
      setSubmitted(true);
    } catch (err) { setError(err.message || 'Failed to send. Please try again.'); } finally { setLoading(false); }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="max-w-md mx-auto px-4 text-center">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-[#F8FAFC] border border-gray-100 p-8 md:p-12 rounded-2xl">
            <div className="w-16 h-16 bg-[#22C55E]/10 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle2 className="text-[#22C55E]" size={32} /></div>
            <h2 className="text-2xl font-bold text-[#1E293B] mb-3">Thank You!</h2>
            <p className="text-[#64748B] text-sm md:text-base mb-6">We'll get back to you within 24 hours.</p>
            <button onClick={() => { setSubmitted(false); setFormData({ fullName: '', email: '', phone: '', message: '', companyName: '', employeeCount: '', childAge: '' }); setSelectedPurpose(''); }} className="w-full px-6 py-3.5 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white rounded-xl font-bold">Send Another</button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-8 md:pb-12 bg-gradient-to-br from-white via-[#F8FAFC] to-[#EFF6FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-[#2563EB]/10 px-3 py-1.5 rounded-full text-[#2563EB] text-xs font-medium mb-4">Contact Us</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mb-3">Get in <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">Touch</span></h1>
            <p className="text-sm md:text-base text-[#64748B]">We're here to help with your health questions.</p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact - Mobile */}
      <section className="py-4 md:hidden bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex gap-3">
          <a href="tel:+919876543210" className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white rounded-xl font-bold text-sm">
            <Phone size={16} /> Call Now
          </a>
          <a href="mailto:neoonehealth@gmail.com" className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-[#2563EB] text-[#2563EB] rounded-xl font-bold text-sm">
            <Mail size={16} /> Email
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

            {/* Contact Info - Desktop sidebar, Mobile cards */}
            <motion.div className="hidden lg:block space-y-6" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="bg-[#F8FAFC] border border-gray-100 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-[#1E293B] mb-4">Contact Info</h3>
                <div className="space-y-4">
                  {[{ icon: Phone, label: "Phone", value: "+91 98765 43210" }, { icon: Mail, label: "Email", value: "neoonehealth@gmail.com" }, { icon: MapPin, label: "Address", value: "Chennai, Tamil Nadu" }, { icon: Clock, label: "Hours", value: "Mon-Sat: 9AM - 8PM" }].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-[#2563EB]/10 rounded-lg flex items-center justify-center flex-shrink-0"><item.icon className="text-[#2563EB]" size={16} /></div>
                      <div><p className="text-[#94A3B8] text-xs">{item.label}</p><p className="text-[#1E293B] text-sm">{item.value}</p></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#2563EB] to-[#38BDF8] p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-white mb-2">Urgent Help?</h3>
                <p className="text-white/80 text-sm mb-4">24/7 helpline available.</p>
                <a href="tel:+919876543210" className="inline-block bg-white text-[#2563EB] px-5 py-2.5 rounded-lg font-bold text-sm">Call Now</a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div className="lg:col-span-2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <div className="bg-[#F8FAFC] border border-gray-100 p-4 md:p-6 lg:p-8 rounded-2xl">
                <h3 className="text-lg font-bold text-[#1E293B] mb-4 md:mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit}>
                  {/* Purpose Selection */}
                  <div className="mb-6">
                    <label className="block text-[#1E293B] font-semibold text-sm mb-3">What can we help you with?</label>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                      {purposes.map((purpose) => (
                        <motion.button key={purpose.id} type="button" onClick={() => handlePurposeSelect(purpose.id)} className={`p-3 md:p-4 rounded-xl border transition-all text-center ${selectedPurpose === purpose.id ? 'border-[#2563EB] bg-[#2563EB]/5' : 'border-gray-200 bg-white'}`} whileTap={{ scale: 0.95 }}>
                          <purpose.icon size={20} style={{ color: selectedPurpose === purpose.id ? purpose.color : '#94A3B8' }} className="mx-auto mb-1.5" />
                          <p className="text-[#1E293B] font-medium text-xs">{purpose.label}</p>
                        </motion.button>
                      ))}
                    </div>
                    {validationErrors.purpose && <p className="text-[#EF4444] text-xs mt-2">{validationErrors.purpose}</p>}
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[#1E293B] text-sm font-medium mb-2">Full Name *</label>
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="John Doe" className={`w-full px-4 py-3.5 bg-white border rounded-xl text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] ${validationErrors.fullName ? 'border-[#EF4444]' : 'border-gray-200'}`} />
                      {validationErrors.fullName && <p className="text-[#EF4444] text-xs mt-1">{validationErrors.fullName}</p>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#1E293B] text-sm font-medium mb-2">Email *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" className={`w-full px-4 py-3.5 bg-white border rounded-xl text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] ${validationErrors.email ? 'border-[#EF4444]' : 'border-gray-200'}`} />
                        {validationErrors.email && <p className="text-[#EF4444] text-xs mt-1">{validationErrors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-[#1E293B] text-sm font-medium mb-2">Phone *</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 98765 43210" className={`w-full px-4 py-3.5 bg-white border rounded-xl text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] ${validationErrors.phone ? 'border-[#EF4444]' : 'border-gray-200'}`} />
                        {validationErrors.phone && <p className="text-[#EF4444] text-xs mt-1">{validationErrors.phone}</p>}
                      </div>
                    </div>

                    {selectedPurpose === 'occupational-health' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[#1E293B] text-sm font-medium mb-2">Company *</label>
                          <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} placeholder="Your Company" className={`w-full px-4 py-3.5 bg-white border rounded-xl text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] ${validationErrors.companyName ? 'border-[#EF4444]' : 'border-gray-200'}`} />
                        </div>
                        <div>
                          <label className="block text-[#1E293B] text-sm font-medium mb-2">Employees</label>
                          <select name="employeeCount" value={formData.employeeCount} onChange={handleInputChange} className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-[#1E293B] focus:outline-none focus:border-[#2563EB]"><option value="">Select</option><option value="1-50">1-50</option><option value="51-200">51-200</option><option value="201-500">201-500</option><option value="500+">500+</option></select>
                        </div>
                      </div>
                    )}

                    {selectedPurpose === 'child-health' && (
                      <div>
                        <label className="block text-[#1E293B] text-sm font-medium mb-2">Child's Age</label>
                        <input type="text" name="childAge" value={formData.childAge} onChange={handleInputChange} placeholder="e.g., 5 years" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB]" />
                      </div>
                    )}

                    <div>
                      <label className="block text-[#1E293B] text-sm font-medium mb-2">Message</label>
                      <textarea name="message" value={formData.message} onChange={handleInputChange} rows={3} placeholder="Tell us more..." className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] resize-none" />
                    </div>
                  </div>

                  {error && <div className="mt-4 bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#EF4444] px-4 py-3 rounded-xl text-sm">{error}</div>}

                  <motion.button type="submit" disabled={loading} className="w-full mt-6 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 disabled:opacity-50" whileTap={{ scale: 0.98 }}>
                    {loading ? (<><Loader2 className="animate-spin" size={20} />Sending...</>) : (<><Send size={20} />Send Message</>)}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
