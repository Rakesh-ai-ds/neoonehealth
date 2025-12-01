import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Shield, Users, TrendingUp, Heart, BarChart3, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#082C4A] to-[#0a3d5f] text-white pt-32 pb-20" data-testid="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Future-Proof Your Workforce: Data-Driven Corporate Wellness
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Unlock measurable ROI. Reduce sick days, boost productivity, and secure long-term health savings by integrating the leading secure screening and digital wellness platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" data-testid="hero-request-demo-button">Request a Demo</Button>
                </Link>
                <Link to="/benefits">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#082C4A]" data-testid="hero-view-roi-button">
                    See Our ROI Case Studies
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b"
                alt="Diverse professionals collaborating"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signal Strip */}
      <section className="bg-[#F5F7FA] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Shield className="text-[#20BF55]" size={24} />
              <span className="text-[#082C4A] font-semibold">ISO Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="text-[#20BF55]" size={24} />
              <span className="text-[#082C4A] font-semibold">HIPAA & GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="text-[#20BF55]" size={24} />
              <span className="text-[#082C4A] font-semibold">Enterprise-Grade Security</span>
            </div>
          </div>
          <div className="mt-6 text-center text-[#082C4A]">
            <p className="text-lg font-semibold">15,000+ Employees Onboarded | 98% Employee Adoption Rate</p>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20" data-testid="three-pillars-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#082C4A] mb-4">Comprehensive Wellness Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From screening to digital engagement, we provide end-to-end corporate health solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow" data-testid="pillar-screening">
              <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <Heart className="text-[#20BF55]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#082C4A] mb-4">Corporate Screening</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive health assessments with on-site clinics, biometric testing, and personalized risk profiles. Zero disruption to your business operations.
              </p>
              <Link to="/corporate-screening" className="text-[#FF7F11] font-semibold flex items-center hover:gap-2 transition-all">
                Learn More <ArrowRight className="ml-1" size={20} />
              </Link>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow" data-testid="pillar-digital-platform">
              <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-[#20BF55]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#082C4A] mb-4">Digital Wellness Platform</h3>
              <p className="text-gray-600 mb-6">
                Secure mobile app for employees with personalized health scores, tele-consults, and AI-driven wellness journeys. Available 24/7.
              </p>
              <Link to="/digital-platform" className="text-[#FF7F11] font-semibold flex items-center hover:gap-2 transition-all">
                Learn More <ArrowRight className="ml-1" size={20} />
              </Link>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow" data-testid="pillar-health-audits">
              <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="text-[#20BF55]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#082C4A] mb-4">Health Audits & Reporting</h3>
              <p className="text-gray-600 mb-6">
                Data-driven insights and compliance reporting. Translate complex health metrics into actionable business intelligence for leadership.
              </p>
              <Link to="/health-audits" className="text-[#FF7F11] font-semibold flex items-center hover:gap-2 transition-all">
                Learn More <ArrowRight className="ml-1" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="bg-[#082C4A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Proven Results That Matter</h2>
            <p className="text-xl text-gray-300">Real data from organizations that prioritize employee health</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#FF7F11] mb-2">25%</div>
              <p className="text-gray-300">Reduction in Sick Days</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#FF7F11] mb-2">4:1</div>
              <p className="text-gray-300">Average ROI</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#FF7F11] mb-2">98%</div>
              <p className="text-gray-300">Employee Adoption</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#FF7F11] mb-2">35%</div>
              <p className="text-gray-300">Boost in Productivity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Platform Showcase */}
      <section className="py-20" data-testid="digital-platform-showcase">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
                alt="Person using health monitoring on Apple Watch"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#082C4A] mb-6">Your Team's Wellness, Always in Hand</h2>
              <p className="text-xl text-gray-600 mb-8">
                A secure, mobile-first platform that seamlessly integrates screening data, personal coaching, and preventative resources.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#20BF55] mr-3 mt-1 flex-shrink-0" size={24} />
                  <span className="text-gray-700"><strong>Personalized Health Scores:</strong> Dynamic metrics driving motivation and behavior change</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#20BF55] mr-3 mt-1 flex-shrink-0" size={24} />
                  <span className="text-gray-700"><strong>Integrated Tele-Consults:</strong> Direct access to certified health professionals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#20BF55] mr-3 mt-1 flex-shrink-0" size={24} />
                  <span className="text-gray-700"><strong>AI-Driven Wellness Journeys:</strong> Recommendations based on individual risks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#20BF55] mr-3 mt-1 flex-shrink-0" size={24} />
                  <span className="text-gray-700"><strong>Enterprise-Grade Security:</strong> HIPAA/GDPR compliant data protection</span>
                </li>
              </ul>
              <Link to="/digital-platform">
                <Button size="lg" data-testid="see-employee-experience-button">See the Employee Experience</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#20BF55] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Corporate Health Strategy?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Stop managing illness and start investing in prevention. Get a no-obligation quote tailored to your organization.
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#20BF55]" data-testid="final-cta-button">
              Request a Quote in 5 Minutes
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
