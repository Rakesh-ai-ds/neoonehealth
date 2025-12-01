import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, TrendingUp, Users, Award, CheckCircle2, BarChart3 } from 'lucide-react';
import Button from '@/components/ui/Button';

const Benefits = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#082C4A] to-[#0a3d5f] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Beyond Wellness: Translating Employee Health into Corporate ROI
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              See how data-driven health strategies reduce long-term medical costs, slash absenteeism, and secure your most critical asset—your people.
            </p>
            <Link to="/contact">
              <Button size="lg" data-testid="request-roi-projection-button">Request a Custom ROI Projection</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Three Pillars of Business Value */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#082C4A] mb-4">The Three Pillars of Business Value</h2>
            <p className="text-xl text-gray-600">Proven returns on your wellness investment</p>
          </div>

          {/* Pillar 1: Financial ROI */}
          <div className="mb-20" id="roi">
            <div className="bg-gradient-to-br from-[#20BF55] to-[#1aa849] text-white p-12 rounded-lg shadow-xl">
              <div className="flex items-center mb-6">
                <DollarSign size={48} className="mr-4" />
                <h3 className="text-3xl font-bold">Financial Return on Investment (ROI)</h3>
              </div>
              <p className="text-xl mb-8">From Cost Center to Profit Driver</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">15-30%</div>
                  <h4 className="font-bold mb-2">Reduced Healthcare Spend</h4>
                  <p className="text-sm">
                    Proactive management of NCDs leads to lower catastrophic claims and reduced insurance premiums over time.
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">$1,685</div>
                  <h4 className="font-bold mb-2">Cost of Presenteeism</h4>
                  <p className="text-sm">
                    Per employee annually. Healthier employees are more focused, reducing costs associated with unproductive presence.
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">Tax+</div>
                  <h4 className="font-bold mb-2">Tax/Incentive Benefits</h4>
                  <p className="text-sm">
                    Potential local or national tax advantages for investing in certified employee wellness programs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2: Productivity */}
          <div className="mb-20" id="productivity">
            <div className="bg-gradient-to-br from-[#082C4A] to-[#0a3d5f] text-white p-12 rounded-lg shadow-xl">
              <div className="flex items-center mb-6">
                <TrendingUp size={48} className="mr-4" />
                <h3 className="text-3xl font-bold">Increased Productivity & Performance</h3>
              </div>
              <p className="text-xl mb-8">Maximize Output, Minimize Absence</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">22-28%</div>
                  <h4 className="font-bold mb-2">Decreased Absenteeism</h4>
                  <p className="text-sm">
                    Comprehensive screening catches issues early, dramatically cutting unscheduled sick days.
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">35%</div>
                  <h4 className="font-bold mb-2">Better Focus & Energy</h4>
                  <p className="text-sm">
                    Wellness programs (sleep, nutrition, mental health) boost sustained daily energy and cognitive function.
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">40%</div>
                  <h4 className="font-bold mb-2">Improved Safety</h4>
                  <p className="text-sm">
                    For high-risk industrial roles, health audits and proactive screening can reduce workplace accidents and liabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 3: Retention */}
          <div id="retention">
            <div className="bg-gradient-to-br from-[#FF7F11] to-[#e67410] text-white p-12 rounded-lg shadow-xl">
              <div className="flex items-center mb-6">
                <Users size={48} className="mr-4" />
                <h3 className="text-3xl font-bold">Employee Retention & Culture</h3>
              </div>
              <p className="text-xl mb-8">The Ultimate Retention Tool for Top Talent</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">89%</div>
                  <h4 className="font-bold mb-2">Talent Attraction</h4>
                  <p className="text-sm">
                    Offering a world-class digital health benefit positions the company as an Employer of Choice in a competitive market.
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">18%</div>
                  <h4 className="font-bold mb-2">Reduced Turnover</h4>
                  <p className="text-sm">
                    Employees who feel valued by their employer's investment in their health are more loyal and less likely to seek new opportunities.
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">92%</div>
                  <h4 className="font-bold mb-2">Positive Culture</h4>
                  <p className="text-sm">
                    Wellness challenges and group programs boost morale, collaboration, and psychological safety within the organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Formula Visual */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#082C4A] mb-4">The NeoOne ROI Cycle</h2>
            <p className="text-xl text-gray-600">Our data-driven approach to measurable returns</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-4">
              <div className="flex-1 text-center">
                <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="text-[#20BF55]" size={32} />
                </div>
                <h4 className="font-bold text-[#082C4A] mb-2">1. Screening Data</h4>
                <p className="text-sm text-gray-600">Comprehensive health assessments</p>
              </div>
              <div className="hidden md:block text-[#20BF55] text-3xl font-bold">→</div>
              
              <div className="flex-1 text-center">
                <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-[#20BF55]" size={32} />
                </div>
                <h4 className="font-bold text-[#082C4A] mb-2">2. Personalized Intervention</h4>
                <p className="text-sm text-gray-600">Targeted wellness programs</p>
              </div>
              <div className="hidden md:block text-[#20BF55] text-3xl font-bold">→</div>
              
              <div className="flex-1 text-center">
                <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-[#20BF55]" size={32} />
                </div>
                <h4 className="font-bold text-[#082C4A] mb-2">3. Behavior Change</h4>
                <p className="text-sm text-gray-600">Long-term habit formation</p>
              </div>
              <div className="hidden md:block text-[#20BF55] text-3xl font-bold">→</div>
              
              <div className="flex-1 text-center">
                <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="text-[#20BF55]" size={32} />
                </div>
                <h4 className="font-bold text-[#082C4A] mb-2">4. $$$ Savings</h4>
                <p className="text-sm text-gray-600">Reduced claims & increased productivity</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 font-semibold">Focus: Long-term, compounding effect of preventative health</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#082C4A] mb-4">Evidence and Validation</h2>
            <p className="text-xl text-gray-600">Real results from real organizations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#20BF55]">
              <p className="text-lg text-gray-700 mb-4 italic">
                "22% reduction in major chronic condition risk within the first year."
              </p>
              <p className="font-bold text-[#082C4A]">Client A</p>
              <p className="text-gray-600">Technology & Finance Sector</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#20BF55]">
              <p className="text-lg text-gray-700 mb-4 italic">
                "Our insurance premium increase was minimal compared to industry average due to our proactive wellness investment."
              </p>
              <p className="font-bold text-[#082C4A]">Client B</p>
              <p className="text-gray-600">Manufacturing & Logistics Sector</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact" className="text-[#FF7F11] font-semibold text-lg hover:underline">
              View Full Case Studies and White Papers →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#082C4A] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stop Guessing. Start Measuring Your Wellness Return.</h2>
          <p className="text-xl mb-8">
            Let our experts build a data model to project your company's potential savings and productivity gains over the next three years.
          </p>
          <Link to="/contact">
            <Button size="lg" data-testid="request-custom-roi-button">Request Your Custom ROI Projection</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
