import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Shield, Zap, Heart } from 'lucide-react';
import Button from '@/components/ui/Button';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#082C4A] to-[#0a3d5f] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Future of Corporate Wellness is Proactive
            </h1>
            <p className="text-xl text-gray-200">
              We're on a mission to eliminate preventable illness in the workplace and secure a healthier, more productive global workforce.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#082C4A] mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Traditional reactive healthcare is failing corporate America and organizations worldwide. Employees suffer from preventable chronic diseases, productivity plummets, and healthcare costs spiral out of control.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                NeoOne Health was founded on a simple but powerful belief: <strong>prevention is better than cure</strong>. By combining cutting-edge health screening technology with an engaging digital platform, we empower organizations to take a proactive approach to employee health.
              </p>
              <p className="text-lg text-gray-700">
                We don't just detect problems—we prevent them from happening in the first place.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
                alt="Healthcare technology"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="mt-16 bg-[#F5F7FA] p-12 rounded-lg">
            <h3 className="text-3xl font-bold text-[#082C4A] mb-6 text-center">Our Vision</h3>
            <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto">
              "To eliminate preventable illness in the workplace and secure a healthier, more productive global workforce."
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#082C4A] mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#20BF55] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-[#20BF55]" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-[#082C4A] mb-4">Integrity & Security</h3>
              <p className="text-gray-600">
                Protecting patient data is our highest priority. We maintain the strictest standards for data privacy and security, ensuring complete trust.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#20BF55] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="text-[#20BF55]" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-[#082C4A] mb-4">Empowerment</h3>
              <p className="text-gray-600">
                Giving employees and HR managers the data they need to make positive choices. Knowledge is power, and we put it in the hands of those who need it most.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#20BF55] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-[#20BF55]" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-[#082C4A] mb-4">Proactive Innovation</h3>
              <p className="text-gray-600">
                Never settling for reactive healthcare. We're constantly optimizing for prevention, using the latest technology and medical science.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#082C4A] mb-4">Leadership & Expertise</h2>
            <p className="text-xl text-gray-600">Backed by clinical excellence and tech innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1562935345-5080389daccd"
                alt="Dr. Sarah Mitchell"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-[#082C4A] mb-2">Dr. Sarah Mitchell</h3>
              <p className="text-[#20BF55] font-semibold mb-4">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm">
                Former Chief Medical Officer at a Fortune 500 healthcare company. 20+ years experience in preventative medicine and corporate wellness.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1562935345-5080389daccd"
                alt="Dr. James Chen"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-[#082C4A] mb-2">Dr. James Chen</h3>
              <p className="text-[#20BF55] font-semibold mb-4">Chief Medical Officer</p>
              <p className="text-gray-600 text-sm">
                Board-certified physician specializing in occupational health. Published researcher in workplace wellness and preventative care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1562935345-5080389daccd"
                alt="Michael Rodriguez"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-[#082C4A] mb-2">Michael Rodriguez</h3>
              <p className="text-[#20BF55] font-semibold mb-4">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm">
                Former VP of Engineering at leading health tech startup. Expert in HIPAA-compliant systems and scalable healthcare platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#20BF55] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner With Us</h2>
          <p className="text-xl mb-8">
            Join hundreds of forward-thinking organizations that have made employee health their strategic advantage.
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#20BF55]" data-testid="partner-with-us-button">
              Schedule a Strategic Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
