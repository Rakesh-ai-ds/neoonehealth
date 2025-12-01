import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake, Shield, Globe, TrendingUp } from 'lucide-react';
import Button from '@/components/ui/Button';

const Partnerships = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#082C4A] to-[#0a3d5f] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Clinical Strength. Digital Reach. Strategic Alliances.
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              We collaborate with industry leaders to deliver world-class wellness solutions. Our partnerships ensure quality, security, and innovation at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Value Proposition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#082C4A] mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-gray-600">Together, we're stronger</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-[#20BF55]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#082C4A] mb-2">Market Leadership</h3>
              <p className="text-gray-600">Access to a rapidly growing corporate wellness market</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-[#20BF55]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#082C4A] mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous clinical standards and data security protocols</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-[#20BF55]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#082C4A] mb-2">Global Reach</h3>
              <p className="text-gray-600">Expanding network across multiple countries and industries</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="text-[#20BF55]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#082C4A] mb-2">Collaborative Innovation</h3>
              <p className="text-gray-600">Co-development opportunities for cutting-edge solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Partners */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#082C4A] mb-4">Clinical Partners</h2>
            <p className="text-xl text-gray-600">Accredited labs, hospital systems, and medical associations</p>
          </div>

          <div className="bg-white p-12 rounded-lg shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {/* Placeholder Partner Logos */}
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Partner 1</span>
              </div>
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Partner 2</span>
              </div>
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Partner 3</span>
              </div>
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Partner 4</span>
              </div>
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Partner 5</span>
              </div>
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Partner 6</span>
              </div>
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Partner 7</span>
              </div>
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Partner 8</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#082C4A] mb-4">Technology Partners</h2>
            <p className="text-xl text-gray-600">Integration platforms, security providers, and development specialists</p>
          </div>

          <div className="bg-white p-12 rounded-lg shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {/* Placeholder Tech Partner Logos */}
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Tech 1</span>
              </div>
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Tech 2</span>
              </div>
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Tech 3</span>
              </div>
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Tech 4</span>
              </div>
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Tech 5</span>
              </div>
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Tech 6</span>
              </div>
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Tech 7</span>
              </div>
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Tech 8</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#082C4A] mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-gray-600">Multiple ways to collaborate</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#082C4A] mb-4">Clinical Partners</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Accredited diagnostic laboratories</li>
                <li>• Hospital networks</li>
                <li>• Occupational health providers</li>
                <li>• Medical device manufacturers</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#082C4A] mb-4">Technology Partners</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• HRIS/HRMS platforms</li>
                <li>• Cloud infrastructure providers</li>
                <li>• Security and compliance solutions</li>
                <li>• AI/ML health analytics</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#082C4A] mb-4">Distribution Partners</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Employee benefits brokers</li>
                <li>• Insurance carriers</li>
                <li>• HR consulting firms</li>
                <li>• Corporate wellness consultants</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Success Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-lg shadow-xl border-l-4 border-[#20BF55]">
            <h3 className="text-2xl font-bold text-[#082C4A] mb-6">Partner Success Story</h3>
            <p className="text-lg text-gray-700 mb-6 italic">
              "Partnering with NeoOne Health has allowed us to expand our reach to Fortune 500 companies. Their platform seamlessly integrates with our diagnostic services, and the shared commitment to data security makes collaboration effortless."
            </p>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1562935345-5080389daccd"
                alt="Partner representative"
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-bold text-[#082C4A]">Dr. Jennifer Martinez</p>
                <p className="text-gray-600">Chief Partnership Officer, HealthLabs International</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#20BF55] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore Partnership Opportunities</h2>
          <p className="text-xl mb-8">
            Let's discuss how we can collaborate to improve employee health and build a better future together.
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#20BF55]" data-testid="explore-partnership-button">
              Contact Our Partnership Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;
