import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Shield, Users, TrendingUp, Heart, Smartphone, Lock, BarChart3, Zap, Globe } from 'lucide-react';
import Button from '@/components/ui/Button';

const DigitalPlatform = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#082C4A] to-[#0a3d5f] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Wellness in Your Hand: Personalized Health for Every Employee
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                A secure, mobile-first platform that seamlessly integrates screening data, personal coaching, and preventative resources to drive long-term habit change.
              </p>
              <Link to="/contact">
                <Button size="lg" data-testid="see-employee-experience-button">See the Employee Experience</Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
                alt="Person using health monitoring on mobile device"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#082C4A] mb-4">Powerful Features for Employee Engagement</h2>
            <p className="text-xl text-gray-600">Everything your employees need to take control of their health</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="text-[#20BF55]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#082C4A] mb-4">Personalized Health Score</h3>
              <p className="text-gray-600 mb-4">
                A single, dynamic metric derived from screening and app activity, driving motivation and behavior change.
              </p>
              <div className="bg-[#F5F7FA] p-4 rounded-lg">
                <p className="text-sm text-gray-600 font-semibold">Corporate Appeal:</p>
                <p className="text-sm text-gray-600">Provides a quantifiable benchmark for tracking workforce health trends over time.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <Lock className="text-[#20BF55]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#082C4A] mb-4">Secure Data Vault</h3>
              <p className="text-gray-600 mb-4">
                Employees can view all their screening results, reports, and medical history in one place, protected by enterprise-grade encryption.
              </p>
              <div className="bg-[#F5F7FA] p-4 rounded-lg">
                <p className="text-sm text-gray-600 font-semibold">Corporate Appeal:</p>
                <p className="text-sm text-gray-600">Ensures regulatory compliance and positions the platform as a secure, trusted resource.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-[#20BF55]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#082C4A] mb-4">Integrated Tele-Consults</h3>
              <p className="text-gray-600 mb-4">
                Direct, secure video/chat access to certified health professionals for immediate advice and follow-up on screening results.
              </p>
              <div className="bg-[#F5F7FA] p-4 rounded-lg">
                <p className="text-sm text-gray-600 font-semibold">Corporate Appeal:</p>
                <p className="text-sm text-gray-600">Reduces employee time away from work and provides immediate, private support.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-[#20BF55]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#082C4A] mb-4">Curated Wellness Journeys</h3>
              <p className="text-gray-600 mb-4">
                AI-driven recommendations for habit changes (e.g., better sleep, stress management) based on individual screening risks and lifestyle input.
              </p>
              <div className="bg-[#F5F7FA] p-4 rounded-lg">
                <p className="text-sm text-gray-600 font-semibold">Corporate Appeal:</p>
                <p className="text-sm text-gray-600">Focuses resources where they are most needed, maximizing the effectiveness of the wellness budget.</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <Heart className="text-[#20BF55]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#082C4A] mb-4">Gamification & Challenges</h3>
              <p className="text-gray-600 mb-4">
                Team-based step counts, meditation streaks, and friendly corporate challenges with leaderboards (optional).
              </p>
              <div className="bg-[#F5F7FA] p-4 rounded-lg">
                <p className="text-sm text-gray-600 font-semibold">Corporate Appeal:</p>
                <p className="text-sm text-gray-600">Boosts engagement and fosters a positive, supportive workplace culture.</p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="text-[#20BF55]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#082C4A] mb-4">E-Resource Library</h3>
              <p className="text-gray-600 mb-4">
                Access to educational articles, webinars, and mental health tools vetted by NeoOne's clinical team.
              </p>
              <div className="bg-[#F5F7FA] p-4 rounded-lg">
                <p className="text-sm text-gray-600 font-semibold">Corporate Appeal:</p>
                <p className="text-sm text-gray-600">A trusted source of information, reducing the spread of misinformation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backend Advantage - For HR */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#082C4A] mb-4">The Backend Advantage for HR</h2>
            <p className="text-xl text-gray-600">Enterprise-grade tools for administrators</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Enterprise Security */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Shield className="text-[#20BF55] mr-4" size={48} />
                <h3 className="text-2xl font-bold text-[#082C4A]">Enterprise-Grade Security</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#20BF55] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-[#082C4A]">WCAG 2.1 AA & HIPAA/GDPR Compliance</p>
                    <p className="text-gray-600 text-sm">Explicitly adheres to global data privacy and accessibility standards</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#20BF55] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-[#082C4A]">Anonymized Reporting</p>
                    <p className="text-gray-600 text-sm">Individual data is segmented from corporate aggregated reports. HR only sees trends, never personal results.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Administrator Dashboard */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <BarChart3 className="text-[#20BF55] mr-4" size={48} />
                <h3 className="text-2xl font-bold text-[#082C4A]">Administrator Dashboard</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#20BF55] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-[#082C4A]">Real-Time Utilization Data</p>
                    <p className="text-gray-600 text-sm">HR teams get visibility into app usage, top content consumed, and engagement rates by department</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#20BF55] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-[#082C4A]">Targeted Communication</p>
                    <p className="text-gray-600 text-sm">Ability for HR to push approved, relevant health advisories or challenge invitations directly through the platform</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration & Onboarding */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="Health data analytics dashboard"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#082C4A] mb-6">Seamless Integration & Onboarding</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#082C4A] mb-2 flex items-center">
                    <Globe className="text-[#20BF55] mr-3" size={24} />
                    Integration
                  </h3>
                  <p className="text-gray-600">
                    Showcase compatibility with existing corporate HRIS/HRMS systems for easy employee roster management.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#082C4A] mb-2 flex items-center">
                    <Smartphone className="text-[#20BF55] mr-3" size={24} />
                    Simple Three-Step Deployment
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                    <li>Setup: Configure your organization's profile and preferences</li>
                    <li>Employee Sync: Import your employee roster from existing systems</li>
                    <li>Launch: Activate the platform and notify your team</li>
                  </ol>
                  <p className="text-gray-600 mt-4 font-semibold">
                    Emphasizing low internal burden - typically completed within 48 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#20BF55] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Employee Benefits Package?</h2>
          <p className="text-xl mb-8">
            Schedule a live, guided walkthrough of the NeoOne Health Digital Platform and see how powerful, personalized health engagement can be.
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#20BF55]" data-testid="request-platform-demo-button">
              Request a Platform Demo
            </Button>
          </Link>
          <p className="mt-6 text-sm">
            Need Screening First? <Link to="/corporate-screening" className="underline hover:text-gray-200">See Our Full Health Assessment Solutions</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default DigitalPlatform;
