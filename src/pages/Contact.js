import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import Button from '@/components/ui/Button';

const Contact = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    role: '',
    phone: '',
    companyName: '',
    industry: '',
    employeeCount: '',
    primaryChallenge: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (value) => {
    setFormData(prev => {
      const challenges = prev.primaryChallenge.includes(value)
        ? prev.primaryChallenge.filter(c => c !== value)
        : [...prev.primaryChallenge, value];
      return { ...prev, primaryChallenge: challenges };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Use local server for development, Vercel API for production
      const apiUrl = process.env.NODE_ENV === 'development'
        ? 'http://localhost:3001/api/send-email'
        : '/api/send-email';

      console.log('Sending to:', apiUrl);

      // Send email via Resend API
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.workEmail,
          phone: formData.phone,
          company: formData.companyName,
          message: `
Role: ${formData.role}
Industry: ${formData.industry}
Employee Count: ${formData.employeeCount}
Primary Challenges: ${formData.primaryChallenge.join(', ')}
          `,
          subject: `New Demo Request from ${formData.companyName}`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
      }

      console.log('Email sent successfully:', data);
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
      <div className="min-h-screen flex items-center justify-center bg-[#F5F7FA]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-lg shadow-xl">
            <div className="w-20 h-20 bg-[#20BF55] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-[#20BF55]" size={48} />
            </div>
            <h2 className="text-3xl font-bold text-[#082C4A] mb-4">Thank You! We're Already Preparing Your Custom Projection.</h2>
            <p className="text-lg text-gray-600 mb-8">
              A specialist will contact you via email within 24 hours to confirm your consultation time.
            </p>
            <div className="bg-[#F5F7FA] p-6 rounded-lg">
              <h3 className="font-bold text-[#082C4A] mb-3">While You Wait...</h3>
              <p className="text-gray-600">
                Download our free white paper: <span className="text-[#FF7F11] font-semibold cursor-pointer hover:underline">The Financial Case for Preventative Wellness</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1">
            <h1 className="text-4xl font-bold text-[#082C4A] mb-6">Let's Secure Your Workforce's Health</h1>
            <p className="text-lg text-gray-600 mb-8">
              Ready to transform your corporate health strategy? Get in touch with our team.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#20BF55] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="text-[#20BF55]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#082C4A] mb-1">Email</h3>
                  <p className="text-gray-600">contact@neoonehealth.in</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#20BF55] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="text-[#20BF55]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#082C4A] mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#20BF55] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="text-[#20BF55]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#082C4A] mb-1">Address</h3>
                  <p className="text-gray-600">
                    123 Wellness Drive<br />
                    San Francisco, CA 94102<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Multi-Step Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#082C4A] mb-2">Ready to Build a Healthier Business?</h2>
                <p className="text-gray-600 mb-4">
                  Tell us a little about your organization, and we'll connect you with a Corporate Wellness Specialist within one business day.
                </p>
                <p className="text-sm text-gray-500">(2 Minutes to Complete)</p>
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center justify-center mb-8">
                <div className={`flex items-center ${step >= 1 ? 'text-[#20BF55]' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-[#20BF55] text-white' : 'bg-gray-300 text-gray-600'}`}>
                    1
                  </div>
                  <span className="ml-2 font-semibold hidden md:inline">Your Info</span>
                </div>
                <div className={`h-1 w-16 md:w-24 mx-2 ${step >= 2 ? 'bg-[#20BF55]' : 'bg-gray-300'}`}></div>
                <div className={`flex items-center ${step >= 2 ? 'text-[#20BF55]' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-[#20BF55] text-white' : 'bg-gray-300 text-gray-600'}`}>
                    2
                  </div>
                  <span className="ml-2 font-semibold hidden md:inline">Company</span>
                </div>
                <div className={`h-1 w-16 md:w-24 mx-2 ${step >= 3 ? 'bg-[#20BF55]' : 'bg-gray-300'}`}></div>
                <div className={`flex items-center ${step >= 3 ? 'text-[#20BF55]' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-[#20BF55] text-white' : 'bg-gray-300 text-gray-600'}`}>
                    3
                  </div>
                  <span className="ml-2 font-semibold hidden md:inline">Submit</span>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Your Info */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-[#082C4A] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Jane Doe"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#20BF55]"
                        data-testid="full-name-input"
                      />
                    </div>

                    <div>
                      <label htmlFor="workEmail" className="block text-sm font-semibold text-[#082C4A] mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="workEmail"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleInputChange}
                        placeholder="your.name@company.com"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#20BF55]"
                        data-testid="work-email-input"
                      />
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-sm font-semibold text-[#082C4A] mb-2">
                        Role/Title *
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        placeholder="HR Manager, CEO, Benefits Director"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#20BF55]"
                        data-testid="role-input"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[#082C4A] mb-2">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#20BF55]"
                        data-testid="phone-input"
                      />
                    </div>

                    <Button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full"
                      data-testid="next-to-step-2-button"
                    >
                      Next Step
                    </Button>
                  </div>
                )}

                {/* Step 2: Company Info */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-semibold text-[#082C4A] mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="NeoCorp Global, Inc."
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#20BF55]"
                        data-testid="company-name-input"
                      />
                    </div>

                    <div>
                      <label htmlFor="industry" className="block text-sm font-semibold text-[#082C4A] mb-2">
                        Industry *
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#20BF55]"
                        data-testid="industry-select"
                      >
                        <option value="">Select your industry</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Technology">Technology</option>
                        <option value="Finance">Finance</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Retail">Retail</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="employeeCount" className="block text-sm font-semibold text-[#082C4A] mb-2">
                        Number of Employees *
                      </label>
                      <select
                        id="employeeCount"
                        name="employeeCount"
                        value={formData.employeeCount}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#20BF55]"
                        data-testid="employee-count-select"
                      >
                        <option value="">Select employee range</option>
                        <option value="<100">Less than 100</option>
                        <option value="100-500">100-500</option>
                        <option value="501-2000">501-2,000</option>
                        <option value="2000+">2,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#082C4A] mb-2">
                        Primary Challenge (Select one or two) *
                      </label>
                      <div className="space-y-2">
                        {['Reduce costs', 'Boost engagement', 'Improve retention', 'Meet compliance'].map((challenge) => (
                          <label key={challenge} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={formData.primaryChallenge.includes(challenge)}
                              onChange={() => handleCheckboxChange(challenge)}
                              className="mr-3 w-5 h-5 text-[#20BF55] focus:ring-[#20BF55]"
                              data-testid={`challenge-${challenge.toLowerCase().replace(' ', '-')}`}
                            />
                            <span className="text-gray-700">{challenge}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <Button
                        type="button"
                        onClick={() => setStep(1)}
                        variant="ghost"
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex-1"
                        data-testid="next-to-step-3-button"
                      >
                        Next Step
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Submit */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="bg-[#F5F7FA] p-6 rounded-lg">
                      <h3 className="font-bold text-[#082C4A] mb-4">Review Your Information</h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>Name:</strong> {formData.fullName}</p>
                        <p><strong>Email:</strong> {formData.workEmail}</p>
                        <p><strong>Role:</strong> {formData.role}</p>
                        <p><strong>Company:</strong> {formData.companyName}</p>
                        <p><strong>Industry:</strong> {formData.industry}</p>
                        <p><strong>Employees:</strong> {formData.employeeCount}</p>
                        <p><strong>Challenges:</strong> {formData.primaryChallenge.join(', ')}</p>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">
                      <p>
                        We will use this information to customize your demo. Your data is protected by our stringent{' '}
                        <a href="#" className="text-[#FF7F11] hover:underline">HIPAA/GDPR-compliant Privacy Policy</a>.
                      </p>
                    </div>

                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                        <p className="text-sm">{error}</p>
                      </div>
                    )}

                    <div className="flex space-x-4">
                      <Button
                        type="button"
                        onClick={() => setStep(2)}
                        variant="ghost"
                        className="flex-1"
                        disabled={loading}
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1"
                        data-testid="schedule-demo-submit-button"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <Loader2 className="animate-spin mr-2" size={20} />
                            Sending...
                          </>
                        ) : (
                          'Schedule My Demo'
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
