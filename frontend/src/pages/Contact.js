import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Loader2, User, Building2, Baby, Heart, Briefcase, MessageSquare } from 'lucide-react';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedPurpose, setSelectedPurpose] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    purpose: '',
    message: '',
    // Purpose-specific fields
    companyName: '',
    employeeCount: '',
    childAge: '',
    preferredDate: '',
    preferredTime: '',
  });

  const purposes = [
    { id: 'personal-wellness', icon: Heart, label: 'Personal Wellness', color: '#20BF55', desc: 'Health check-ups, fitness, nutrition consultations' },
    { id: 'child-health', icon: Baby, label: 'Child Health', color: '#FF6B6B', desc: 'Pediatric care, vaccination, child development' },
    { id: 'corporate-health', icon: Building2, label: 'Corporate Health', color: '#0B4F6C', desc: 'Employee wellness programs, health audits' },
    { id: 'general-inquiry', icon: MessageSquare, label: 'General Inquiry', color: '#9B59B6', desc: 'Questions, feedback, partnership inquiries' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePurposeSelect = (purposeId) => {
    setSelectedPurpose(purposeId);
    setFormData(prev => ({ ...prev, purpose: purposeId }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const apiUrl = process.env.NODE_ENV === 'development'
        ? 'http://localhost:3001/api/send-email'
        : '/api/send-email';

      // Build message based on purpose
      let messageContent = `
Purpose: ${purposes.find(p => p.id === selectedPurpose)?.label || 'General Inquiry'}
Phone: ${formData.phone}
`;

      if (selectedPurpose === 'corporate-health') {
        messageContent += `
Company: ${formData.companyName}
Employee Count: ${formData.employeeCount}
`;
      }

      if (selectedPurpose === 'child-health') {
        messageContent += `
Child's Age: ${formData.childAge}
`;
      }

      if (formData.preferredDate) {
        messageContent += `
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime}
`;
      }

      messageContent += `
Message:
${formData.message}
`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.companyName || 'Individual',
          message: messageContent,
          subject: `${purposes.find(p => p.id === selectedPurpose)?.label || 'New Inquiry'} - ${formData.fullName}`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Error:', err);
      setError(err.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
        <motion.div
          className="max-w-lg mx-auto px-4 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white p-12 rounded-2xl shadow-xl">
            <div className="w-20 h-20 bg-[#20BF55]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-[#20BF55]" size={48} />
            </div>
            <h2 className="text-3xl font-bold text-[#0B4F6C] mb-4">Thank You!</h2>
            <p className="text-lg text-gray-600 mb-6">
              We've received your inquiry. Our team will contact you within 24 hours.
            </p>
            <p className="text-sm text-gray-500">
              Check your email ({formData.email}) for confirmation.
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B4F6C] mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us how we can help you. Select your purpose and we'll connect you with the right team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Contact Info Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#0B4F6C] text-white rounded-2xl p-8 sticky top-28">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#20BF55]" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Phone</p>
                    <p className="font-semibold">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#20BF55]" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Email</p>
                    <p className="font-semibold">contact@neoonehealth.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#20BF55]" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Address</p>
                    <p className="font-semibold">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              <hr className="border-white/20 my-8" />

              <div>
                <h4 className="font-semibold mb-4">Working Hours</h4>
                <p className="text-gray-300 text-sm">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                <p className="text-gray-300 text-sm">Sunday: 9:00 AM - 2:00 PM</p>
                <p className="text-[#20BF55] text-sm mt-2 font-semibold">Emergency: 24/7</p>
              </div>
            </div>
          </motion.div>

          {/* Main Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <form onSubmit={handleSubmit}>

                {/* Purpose Selection */}
                <div className="mb-8">
                  <label className="block text-lg font-semibold text-[#0B4F6C] mb-4">
                    What can we help you with?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {purposes.map((purpose) => (
                      <div
                        key={purpose.id}
                        onClick={() => handlePurposeSelect(purpose.id)}
                        className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 ${selectedPurpose === purpose.id
                            ? 'border-[#20BF55] bg-[#20BF55]/5'
                            : 'border-gray-200 hover:border-gray-300'
                          }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${purpose.color}15` }}
                          >
                            <purpose.icon size={20} style={{ color: purpose.color }} />
                          </div>
                          <div>
                            <p className="font-semibold text-[#0B4F6C]">{purpose.label}</p>
                            <p className="text-sm text-gray-500">{purpose.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0B4F6C] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20BF55] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0B4F6C] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20BF55] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0B4F6C] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20BF55] focus:border-transparent"
                    />
                  </div>

                  {/* Corporate Health Fields */}
                  {selectedPurpose === 'corporate-health' && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-[#0B4F6C] mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="Your Company"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20BF55] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#0B4F6C] mb-2">
                          Number of Employees
                        </label>
                        <select
                          name="employeeCount"
                          value={formData.employeeCount}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20BF55] focus:border-transparent"
                        >
                          <option value="">Select range</option>
                          <option value="1-50">1-50</option>
                          <option value="51-200">51-200</option>
                          <option value="201-500">201-500</option>
                          <option value="500+">500+</option>
                        </select>
                      </div>
                    </>
                  )}

                  {/* Child Health Fields */}
                  {selectedPurpose === 'child-health' && (
                    <div>
                      <label className="block text-sm font-semibold text-[#0B4F6C] mb-2">
                        Child's Age
                      </label>
                      <select
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20BF55] focus:border-transparent"
                      >
                        <option value="">Select age range</option>
                        <option value="0-1 years">0-1 years (Infant)</option>
                        <option value="1-3 years">1-3 years (Toddler)</option>
                        <option value="3-6 years">3-6 years (Preschool)</option>
                        <option value="6-12 years">6-12 years (School age)</option>
                        <option value="12-18 years">12-18 years (Teenager)</option>
                      </select>
                    </div>
                  )}

                  {/* Appointment Fields for Personal Wellness & Child Health */}
                  {(selectedPurpose === 'personal-wellness' || selectedPurpose === 'child-health') && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-[#0B4F6C] mb-2">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20BF55] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#0B4F6C] mb-2">
                          Preferred Time
                        </label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20BF55] focus:border-transparent"
                        >
                          <option value="">Select time</option>
                          <option value="Morning (8AM-12PM)">Morning (8AM-12PM)</option>
                          <option value="Afternoon (12PM-4PM)">Afternoon (12PM-4PM)</option>
                          <option value="Evening (4PM-8PM)">Evening (4PM-8PM)</option>
                        </select>
                      </div>
                    </>
                  )}
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-[#0B4F6C] mb-2">
                    Message / Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your requirements..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20BF55] focus:border-transparent resize-none"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    <p className="text-sm">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#20BF55] hover:bg-[#1aa548] text-white py-4 text-lg"
                  disabled={loading || !selectedPurpose}
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin mr-2" size={20} />
                      Sending...
                    </>
                  ) : (
                    'Submit Inquiry'
                  )}
                </Button>

                {!selectedPurpose && (
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Please select a purpose above to continue
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
