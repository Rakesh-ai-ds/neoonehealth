import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Loader2, User, Building2, Baby, Heart, Briefcase, MessageSquare, Send, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [selectedPurpose, setSelectedPurpose] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    purpose: '',
    message: '',
    companyName: '',
    employeeCount: '',
    childAge: '',
    preferredDate: '',
    preferredTime: '',
  });

  const purposes = [
    { id: 'personal-wellness', icon: Heart, label: 'Personal Wellness', color: '#22C55E', desc: 'Health check-ups, fitness, nutrition' },
    { id: 'child-health', icon: Baby, label: 'Child Health', color: '#38BDF8', desc: 'Pediatric care, vaccination' },
    { id: 'occupational-health', icon: Briefcase, label: 'Occupational Health', color: '#FACC15', desc: 'Workplace wellness programs' },
    { id: 'elderly-health', icon: User, label: 'Elderly Health', color: '#A78BFA', desc: '3F approach, senior care' },
    { id: 'general-inquiry', icon: MessageSquare, label: 'General Inquiry', color: '#38BDF8', desc: 'Questions, feedback' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handlePurposeSelect = (purposeId) => {
    setSelectedPurpose(purposeId);
    setFormData(prev => ({ ...prev, purpose: purposeId }));
    if (validationErrors.purpose) {
      setValidationErrors(prev => ({ ...prev, purpose: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!selectedPurpose) {
      errors.purpose = 'Please select an inquiry type';
    }

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[\+]?[\d\s-]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (selectedPurpose === 'occupational-health' && !formData.companyName.trim()) {
      errors.companyName = 'Company name is required';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      const apiUrl = process.env.NODE_ENV === 'development'
        ? 'http://localhost:3001/api/send-email'
        : '/api/send-email';

      let messageContent = `Purpose: ${selectedPurpose}\n\n`;

      if (formData.companyName) messageContent += `Company: ${formData.companyName}\n`;
      if (formData.employeeCount) messageContent += `Employees: ${formData.employeeCount}\n`;
      if (formData.childAge) messageContent += `Child Age: ${formData.childAge}\n`;
      if (formData.preferredDate) messageContent += `Preferred Date: ${formData.preferredDate}\n`;
      if (formData.preferredTime) messageContent += `Preferred Time: ${formData.preferredTime}\n`;
      if (formData.message) messageContent += `\nMessage:\n${formData.message}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.companyName || 'Individual',
          message: messageContent,
          subject: `${selectedPurpose.replace('-', ' ').toUpperCase()} Inquiry - ${formData.fullName}`
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to send');

      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#020617] pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#0F172A] border border-white/5 p-12 rounded-2xl"
          >
            <div className="w-20 h-20 bg-[#22C55E]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-[#22C55E]" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-[#E5E7EB] mb-4">Thank You!</h2>
            <p className="text-[#94A3B8] text-lg mb-8">
              We've received your message and will get back to you within 24 hours.
            </p>
            <button
              onClick={() => { setSubmitted(false); setFormData({ fullName: '', email: '', phone: '', purpose: '', message: '', companyName: '', employeeCount: '', childAge: '', preferredDate: '', preferredTime: '' }); setSelectedPurpose(''); }}
              className="px-8 py-3 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white rounded-xl font-bold"
            >
              Send Another Message
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block bg-[#2563EB]/20 border border-[#2563EB]/30 px-4 py-2 rounded-full text-[#38BDF8] text-sm font-medium mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] mb-6">
              Get in <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-lg text-[#94A3B8]">
              Have questions or ready to start your health journey? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Contact Info Sidebar */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-[#0F172A] border border-white/5 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-[#E5E7EB] mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {[
                    { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                    { icon: Mail, label: "Email", value: "contact@neoonehealth.in" },
                    { icon: MapPin, label: "Address", value: "Chennai, Tamil Nadu, India" },
                    { icon: Clock, label: "Hours", value: "Mon-Sat: 9AM - 8PM" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#2563EB]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-[#38BDF8]" size={18} />
                      </div>
                      <div>
                        <p className="text-[#64748B] text-sm">{item.label}</p>
                        <p className="text-[#E5E7EB]">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#2563EB] to-[#38BDF8] p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-2">Need Urgent Help?</h3>
                <p className="text-white/80 text-sm mb-4">For emergency consultations, call our 24/7 helpline.</p>
                <a href="tel:+919876543210" className="inline-block bg-white text-[#2563EB] px-6 py-3 rounded-xl font-bold">
                  Call Now
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-[#0F172A] border border-white/5 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-[#E5E7EB] mb-6">Send us a Message</h3>

                <form onSubmit={handleSubmit}>
                  {/* Purpose Selection */}
                  <div className="mb-8">
                    <label className="block text-[#E5E7EB] font-semibold mb-3">What can we help you with?</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {purposes.map((purpose) => (
                        <motion.button
                          key={purpose.id}
                          type="button"
                          onClick={() => handlePurposeSelect(purpose.id)}
                          className={`p-4 rounded-xl border transition-all text-left ${selectedPurpose === purpose.id
                              ? 'border-[#2563EB] bg-[#2563EB]/10'
                              : 'border-white/10 bg-[#020617] hover:border-white/20'
                            }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <purpose.icon
                            size={24}
                            style={{ color: selectedPurpose === purpose.id ? purpose.color : '#64748B' }}
                            className="mb-2"
                          />
                          <p className="text-[#E5E7EB] font-medium text-sm">{purpose.label}</p>
                          <p className="text-[#64748B] text-xs mt-1">{purpose.desc}</p>
                        </motion.button>
                      ))}
                    </div>
                    {validationErrors.purpose && (
                      <p className="text-[#EF4444] text-sm mt-2">{validationErrors.purpose}</p>
                    )}
                  </div>

                  {/* Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-[#E5E7EB] text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 bg-[#020617] border rounded-xl text-[#E5E7EB] placeholder-[#64748B] focus:outline-none focus:border-[#38BDF8] ${validationErrors.fullName ? 'border-[#EF4444]' : 'border-white/10'
                          }`}
                      />
                      {validationErrors.fullName && (
                        <p className="text-[#EF4444] text-sm mt-1">{validationErrors.fullName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[#E5E7EB] text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 bg-[#020617] border rounded-xl text-[#E5E7EB] placeholder-[#64748B] focus:outline-none focus:border-[#38BDF8] ${validationErrors.email ? 'border-[#EF4444]' : 'border-white/10'
                          }`}
                      />
                      {validationErrors.email && (
                        <p className="text-[#EF4444] text-sm mt-1">{validationErrors.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[#E5E7EB] text-sm font-medium mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 bg-[#020617] border rounded-xl text-[#E5E7EB] placeholder-[#64748B] focus:outline-none focus:border-[#38BDF8] ${validationErrors.phone ? 'border-[#EF4444]' : 'border-white/10'
                          }`}
                      />
                      {validationErrors.phone && (
                        <p className="text-[#EF4444] text-sm mt-1">{validationErrors.phone}</p>
                      )}
                    </div>

                    {/* Conditional Fields */}
                    {selectedPurpose === 'occupational-health' && (
                      <>
                        <div>
                          <label className="block text-[#E5E7EB] text-sm font-medium mb-2">Company Name *</label>
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            placeholder="Your Company"
                            className={`w-full px-4 py-3 bg-[#020617] border rounded-xl text-[#E5E7EB] placeholder-[#64748B] focus:outline-none focus:border-[#38BDF8] ${validationErrors.companyName ? 'border-[#EF4444]' : 'border-white/10'
                              }`}
                          />
                          {validationErrors.companyName && (
                            <p className="text-[#EF4444] text-sm mt-1">{validationErrors.companyName}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-[#E5E7EB] text-sm font-medium mb-2">Number of Employees</label>
                          <select
                            name="employeeCount"
                            value={formData.employeeCount}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-[#020617] border border-white/10 rounded-xl text-[#E5E7EB] focus:outline-none focus:border-[#38BDF8]"
                          >
                            <option value="">Select</option>
                            <option value="1-50">1-50</option>
                            <option value="51-200">51-200</option>
                            <option value="201-500">201-500</option>
                            <option value="500+">500+</option>
                          </select>
                        </div>
                      </>
                    )}

                    {selectedPurpose === 'child-health' && (
                      <div>
                        <label className="block text-[#E5E7EB] text-sm font-medium mb-2">Child's Age</label>
                        <input
                          type="text"
                          name="childAge"
                          value={formData.childAge}
                          onChange={handleInputChange}
                          placeholder="e.g., 5 years"
                          className="w-full px-4 py-3 bg-[#020617] border border-white/10 rounded-xl text-[#E5E7EB] placeholder-[#64748B] focus:outline-none focus:border-[#38BDF8]"
                        />
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-[#E5E7EB] text-sm font-medium mb-2">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us more about your needs..."
                      className="w-full px-4 py-3 bg-[#020617] border border-white/10 rounded-xl text-[#E5E7EB] placeholder-[#64748B] focus:outline-none focus:border-[#38BDF8] resize-none"
                    />
                  </div>

                  {error && (
                    <div className="mb-6 bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#EF4444] px-4 py-3 rounded-xl">
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
                        Send Message
                      </>
                    )}
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
