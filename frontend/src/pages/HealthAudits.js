import React from 'react';
import { Link } from 'react-router-dom';
import { FileCheck, Shield, BarChart3, CheckCircle2, TrendingUp } from 'lucide-react';
import Button from '@/components/ui/Button';

const HealthAudits = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#082C4A] to-[#0a3d5f] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Data Integrity & Compliance: The Foundation of Corporate Health
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Transform complex health metrics into actionable business intelligence. Our auditing and reporting services ensure compliance while driving strategic decision-making.
            </p>
            <Link to="/contact">
              <Button size="lg" data-testid="book-audit-consultation-button">Book an Audit Consultation</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#082C4A] mb-4">Comprehensive Health Auditing Services</h2>
            <p className="text-xl text-gray-600">From baseline assessments to strategic reporting</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <FileCheck className="text-[#20BF55]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#082C4A] mb-4">Baseline Health Audit</h3>
              <p className="text-gray-600 mb-6">
                Anonymous organizational risk assessment derived from screening data. Identify population health trends, high-risk segments, and areas requiring immediate intervention.
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#20BF55] mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-sm text-gray-600">Population-level health metrics</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#20BF55] mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-sm text-gray-600">Risk stratification by department</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#20BF55] mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-sm text-gray-600">Benchmarking against industry standards</span>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-[#20BF55]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#082C4A] mb-4">Compliance Check</h3>
              <p className="text-gray-600 mb-6">
                Ensuring your wellness programs meet local and global data privacy standards (HIPAA/GDPR). We audit your processes, identify vulnerabilities, and provide remediation roadmaps.
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#20BF55] mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-sm text-gray-600">HIPAA compliance verification</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#20BF55] mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-sm text-gray-600">GDPR data handling assessment</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#20BF55] mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-sm text-gray-600">Local regulatory compliance</span>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="text-[#20BF55]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#082C4A] mb-4">Strategic Reporting</h3>
              <p className="text-gray-600 mb-6">
                Quarterly reports translating complex health metrics into actionable business intelligence for the C-suite. Connect wellness data directly to financial outcomes.
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#20BF55] mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-sm text-gray-600">Executive dashboards</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#20BF55] mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-sm text-gray-600">ROI and cost-benefit analysis</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#20BF55] mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-sm text-gray-600">Trend analysis and predictions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#082C4A] mb-4">Our Audit Process</h2>
            <p className="text-xl text-gray-600">Rigorous, transparent, and actionable</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-[#20BF55] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-[#082C4A] mb-3">Data Collection</h3>
              <p className="text-gray-600 text-sm">
                Gather health screening data, utilization metrics, and organizational information
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-[#20BF55] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-[#082C4A] mb-3">Analysis</h3>
              <p className="text-gray-600 text-sm">
                Apply advanced analytics to identify trends, risks, and opportunities
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-[#20BF55] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-[#082C4A] mb-3">Reporting</h3>
              <p className="text-gray-600 text-sm">
                Deliver comprehensive reports with clear visualizations and executive summaries
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-[#20BF55] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold text-[#082C4A] mb-3">Action Plan</h3>
              <p className="text-gray-600 text-sm">
                Work with your team to implement recommendations and track outcomes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Health Audits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="Health data analytics"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#082C4A] mb-6">Why Health Audits Matter</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <TrendingUp className="text-[#20BF55] mr-4 mt-1 flex-shrink-0" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-[#082C4A] mb-2">Data-Driven Decision Making</h3>
                    <p className="text-gray-600">
                      Stop guessing and start knowing. Our audits provide the hard data you need to make informed investments in employee health.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield className="text-[#20BF55] mr-4 mt-1 flex-shrink-0" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-[#082C4A] mb-2">Risk Mitigation</h3>
                    <p className="text-gray-600">
                      Identify compliance gaps and health liabilities before they become costly problems. Protect your organization proactively.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <BarChart3 className="text-[#20BF55] mr-4 mt-1 flex-shrink-0" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-[#082C4A] mb-2">ROI Validation</h3>
                    <p className="text-gray-600">
                      Demonstrate the financial impact of your wellness programs with clear metrics and benchmarks against industry standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Report Preview */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#082C4A] mb-4">What You'll Receive</h2>
            <p className="text-xl text-gray-600">Comprehensive insights, clearly presented</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-[#082C4A] mb-6">Sample Report Includes:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-[#082C4A] mb-3 flex items-center">
                  <CheckCircle2 className="text-[#20BF55] mr-2" size={20} />
                  Executive Summary
                </h4>
                <p className="text-gray-600 text-sm ml-7">High-level findings and recommendations for leadership</p>
              </div>

              <div>
                <h4 className="font-bold text-[#082C4A] mb-3 flex items-center">
                  <CheckCircle2 className="text-[#20BF55] mr-2" size={20} />
                  Population Health Metrics
                </h4>
                <p className="text-gray-600 text-sm ml-7">Prevalence of chronic conditions, risk factors, and health behaviors</p>
              </div>

              <div>
                <h4 className="font-bold text-[#082C4A] mb-3 flex items-center">
                  <CheckCircle2 className="text-[#20BF55] mr-2" size={20} />
                  Department Breakdown
                </h4>
                <p className="text-gray-600 text-sm ml-7">Anonymized health trends by business unit</p>
              </div>

              <div>
                <h4 className="font-bold text-[#082C4A] mb-3 flex items-center">
                  <CheckCircle2 className="text-[#20BF55] mr-2" size={20} />
                  Compliance Status
                </h4>
                <p className="text-gray-600 text-sm ml-7">Assessment of regulatory adherence and data protection</p>
              </div>

              <div>
                <h4 className="font-bold text-[#082C4A] mb-3 flex items-center">
                  <CheckCircle2 className="text-[#20BF55] mr-2" size={20} />
                  Cost-Benefit Analysis
                </h4>
                <p className="text-gray-600 text-sm ml-7">Projected ROI and cost savings from wellness interventions</p>
              </div>

              <div>
                <h4 className="font-bold text-[#082C4A] mb-3 flex items-center">
                  <CheckCircle2 className="text-[#20BF55] mr-2" size={20} />
                  Action Roadmap
                </h4>
                <p className="text-gray-600 text-sm ml-7">Prioritized recommendations with implementation timelines</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#20BF55] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Understand Your Workforce Health?</h2>
          <p className="text-xl mb-8">
            Schedule a consultation to discuss your organization's unique needs and discover how our auditing services can drive strategic value.
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#20BF55]" data-testid="schedule-audit-consultation-button">
              Schedule an Audit Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HealthAudits;
