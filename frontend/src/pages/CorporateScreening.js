import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Shield, Clock, Users, TrendingUp, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';

const CorporateScreening = () => {
  const [activeTab, setActiveTab] = useState('biometric');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#082C4A] to-[#0a3d5f] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Proactive Health Screening: Data You Can Trust, Results That Matter
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Comprehensive health assessments—from biometric screenings to personalized risk profiles—designed to empower your employees and safeguard your organization's future.
            </p>
            <Link to="/contact">
              <Button size="lg" data-testid="request-custom-screening-button">Request a Custom Screening Plan</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition - 3 Pillars */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <Clock className="text-[#20BF55]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#082C4A] mb-4">Unmatched Convenience</h3>
              <p className="text-gray-600">
                On-site, pop-up screening clinics deployed at your office with flexible hours (before/after work) to minimize disruption. No long clinic waits.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-[#20BF55]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#082C4A] mb-4">Data Security & Privacy</h3>
              <p className="text-gray-600">
                Strict confidentiality protocols. Employee data remains private. Company-level reports are aggregated and anonymized to protect individual identity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-[#20BF55]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#082C4A] mb-4">Holistic Insight</h3>
              <p className="text-gray-600">
                Our screening covers physical, mental (stress/burnout), and lifestyle risk assessments to give a true 360-degree view of your workforce health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Components */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#082C4A] mb-4">What We Test</h2>
            <p className="text-xl text-gray-600">Comprehensive screening programs tailored to your organization's needs</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Tab Headers */}
            <div className="flex flex-wrap border-b">
              <button
                onClick={() => setActiveTab('biometric')}
                className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                  activeTab === 'biometric'
                    ? 'bg-[#20BF55] text-white'
                    : 'bg-gray-100 text-[#082C4A] hover:bg-gray-200'
                }`}
              >
                Biometric & Pathology
              </button>
              <button
                onClick={() => setActiveTab('advanced')}
                className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                  activeTab === 'advanced'
                    ? 'bg-[#20BF55] text-white'
                    : 'bg-gray-100 text-[#082C4A] hover:bg-gray-200'
                }`}
              >
                Advanced Screening
              </button>
              <button
                onClick={() => setActiveTab('lifestyle')}
                className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                  activeTab === 'lifestyle'
                    ? 'bg-[#20BF55] text-white'
                    : 'bg-gray-100 text-[#082C4A] hover:bg-gray-200'
                }`}
              >
                Lifestyle Assessment
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === 'biometric' && (
                <div>
                  <h3 className="text-2xl font-bold text-[#082C4A] mb-6">The Essentials</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-[#082C4A] mb-3">Blood Panel:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle2 className="text-[#20BF55] mr-2 mt-1 flex-shrink-0" size={20} />
                          Complete Hemogram
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="text-[#20BF55] mr-2 mt-1 flex-shrink-0" size={20} />
                          Liver & Kidney Function Tests
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#082C4A] mb-3">Cardio-Metabolic:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle2 className="text-[#20BF55] mr-2 mt-1 flex-shrink-0" size={20} />
                          Comprehensive Lipid Profile
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="text-[#20BF55] mr-2 mt-1 flex-shrink-0" size={20} />
                          Fasting Glucose/HbA1c
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#082C4A] mb-3">Vitals:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle2 className="text-[#20BF55] mr-2 mt-1 flex-shrink-0" size={20} />
                          Blood Pressure Monitoring
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="text-[#20BF55] mr-2 mt-1 flex-shrink-0" size={20} />
                          BMI & Waist Circumference
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'advanced' && (
                <div>
                  <h3 className="text-2xl font-bold text-[#082C4A] mb-6">Proactive & Executive Screening</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-[#082C4A] mb-3">Risk Profiling:</h4>
                      <p className="text-gray-600 mb-3">
                        Early detection markers for prevalent NCDs including Diabetes, Hypertension, and Cardiovascular Disease.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#082C4A] mb-3">Advanced Diagnostics (Executive Tiers):</h4>
                      <p className="text-gray-600">
                        Options for specialized scans including Cardiac Assessments, Advanced Cancer Markers, and comprehensive imaging for senior leadership and premium packages.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'lifestyle' && (
                <div>
                  <h3 className="text-2xl font-bold text-[#082C4A] mb-6">Psycho-Social & Lifestyle</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-[#082C4A] mb-3">Mental Health:</h4>
                      <p className="text-gray-600">
                        Confidential Burnout and Stress Assessment using validated psychological scales to identify at-risk employees.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#082C4A] mb-3">Lifestyle Factors:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle2 className="text-[#20BF55] mr-2 mt-1 flex-shrink-0" size={20} />
                          Nutrition and Dietary Habits
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="text-[#20BF55] mr-2 mt-1 flex-shrink-0" size={20} />
                          Physical Fitness Level Assessment
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="text-[#20BF55] mr-2 mt-1 flex-shrink-0" size={20} />
                          Sleep Quality Evaluation
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* NeoOne Difference */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#082C4A] mb-4">The NeoOne Difference</h2>
            <p className="text-xl text-gray-600">What makes our screening superior</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <CheckCircle2 className="text-[#20BF55] mr-4 mt-1 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-[#082C4A] mb-2">Personalized Digital Reports</h3>
                <p className="text-gray-600">Employees get clear, visual reports instantly on the NeoOne App, empowering them to take immediate action.</p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle2 className="text-[#20BF55] mr-4 mt-1 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-[#082C4A] mb-2">Customized Action Plans</h3>
                <p className="text-gray-600">Aggregate data translates into targeted, high-ROI wellness interventions.</p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle2 className="text-[#20BF55] mr-4 mt-1 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-[#082C4A] mb-2">Dedicated Clinical Team</h3>
                <p className="text-gray-600">On-site screening teams are highly trained Registered Nurses and Paramedics, ensuring clinical accuracy.</p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle2 className="text-[#20BF55] mr-4 mt-1 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold text-[#082C4A] mb-2">Scalable Deployment</h3>
                <p className="text-gray-600">Services are easily scalable across multi-city or multi-national locations with standardized protocol adherence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border-l-4 border-[#20BF55]">
            <p className="text-2xl text-gray-700 mb-6 italic">
              "Since implementing NeoOne Health's screening program, our absenteeism has dropped by 22%—a clear ROI that has exceeded our expectations."
            </p>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1562935345-5080389daccd"
                alt="HR Manager"
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-bold text-[#082C4A]">Sarah Johnson</p>
                <p className="text-gray-600">HR Director, TechCorp Global</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-600 font-semibold">15,000+ Employees Screened to Date</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#20BF55] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Corporate Health Strategy?</h2>
          <p className="text-xl mb-8">
            Stop managing illness and start investing in prevention. Get a no-obligation quote tailored specifically to your organizational size and needs.
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#20BF55]" data-testid="request-quote-button">
              Request a Quote in 5 Minutes
            </Button>
          </Link>
          <p className="mt-6 text-sm">
            <Link to="/digital-platform" className="underline hover:text-gray-200">View our Digital Platform Features</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default CorporateScreening;
