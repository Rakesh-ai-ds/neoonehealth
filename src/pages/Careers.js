import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Code, Users, TrendingUp, MapPin, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';

const Careers = () => {
  const jobListings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      category: 'Technology & Data',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      description: 'Build scalable healthcare platforms using React, Node.js, and cloud technologies.',
    },
    {
      id: 2,
      title: 'Data Scientist - Health Analytics',
      category: 'Technology & Data',
      location: 'Remote / New York',
      type: 'Full-time',
      description: 'Analyze health data to drive insights and improve preventative care programs.',
    },
    {
      id: 3,
      title: 'Registered Nurse - Corporate Screening',
      category: 'Clinical & Wellness',
      location: 'Multiple Locations',
      type: 'Full-time',
      description: 'Conduct on-site health screenings at corporate offices nationwide.',
    },
    {
      id: 4,
      title: 'Wellness Coach',
      category: 'Clinical & Wellness',
      location: 'Remote',
      type: 'Full-time',
      description: 'Guide employees through personalized wellness journeys via our digital platform.',
    },
    {
      id: 5,
      title: 'Enterprise Account Manager',
      category: 'Sales & Corporate Relations',
      location: 'Chicago / Remote',
      type: 'Full-time',
      description: 'Manage relationships with Fortune 500 clients and drive wellness program adoption.',
    },
    {
      id: 6,
      title: 'Business Development Representative',
      category: 'Sales & Corporate Relations',
      location: 'Remote',
      type: 'Full-time',
      description: 'Identify and engage with potential corporate clients seeking wellness solutions.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#082C4A] to-[#0a3d5f] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Build a Career That Changes Lives
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Join our mission to revolutionize corporate wellness. Work with cutting-edge technology, world-class medical professionals, and passionate colleagues who believe in the power of prevention.
            </p>
          </div>
        </div>
      </section>

      {/* Culture & Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#082C4A] mb-4">Why Work at NeoOne Health?</h2>
            <p className="text-xl text-gray-600">More than just a job—it's a mission</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-[#20BF55]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#082C4A] mb-2">Meaningful Impact</h3>
              <p className="text-gray-600">Improve the lives of thousands of employees and their families every day</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-[#20BF55]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#082C4A] mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">Continuous learning and career advancement in a high-growth sector</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#20BF55]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#082C4A] mb-2">Collaborative Culture</h3>
              <p className="text-gray-600">Work alongside passionate experts in medicine, technology, and business</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#20BF55] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-[#20BF55]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#082C4A] mb-2">Work-Life Balance</h3>
              <p className="text-gray-600">Flexible work options, generous PTO, and comprehensive health benefits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#082C4A] mb-4">Perks & Benefits</h2>
            <p className="text-xl text-gray-600">We practice what we preach</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#082C4A] mb-4">Health & Wellness</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Comprehensive health, dental, and vision insurance</li>
                <li>• Free access to NeoOne Health platform</li>
                <li>• Annual health screenings</li>
                <li>• Mental health support and counseling</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#082C4A] mb-4">Work-Life Balance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Flexible remote work options</li>
                <li>• Unlimited PTO policy</li>
                <li>• Parental leave (16 weeks)</li>
                <li>• Flexible working hours</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#082C4A] mb-4">Financial & Growth</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Competitive salary and equity</li>
                <li>• 401(k) with company match</li>
                <li>• Professional development budget</li>
                <li>• Conference and training opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#082C4A] mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600">Where Science Meets Software</p>
          </div>

          <div className="space-y-6">
            {jobListings.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-[#082C4A]">{job.title}</h3>
                      <span className="px-3 py-1 bg-[#20BF55] bg-opacity-10 text-[#20BF55] rounded-full text-sm font-semibold">
                        {job.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <MapPin size={16} className="mr-1" /> {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock size={16} className="mr-1" /> {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <Button data-testid={`apply-button-${job.id}`}>Apply Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#082C4A] mb-4">What Our Team Says</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-6 italic">
                "Working at NeoOne Health has been incredibly fulfilling. Every day, I know my work is making a real difference in people's lives. The team is supportive, and the mission is inspiring."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1562935345-5080389daccd"
                  alt="Emily Chen"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-bold text-[#082C4A]">Emily Chen</p>
                  <p className="text-gray-600 text-sm">Senior Data Scientist</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-6 italic">
                "The work-life balance here is exceptional. I can focus on building cutting-edge technology while also having time for my family. Plus, the health benefits actually work—I use our platform daily!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1562935345-5080389daccd"
                  alt="Marcus Johnson"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-bold text-[#082C4A]">Marcus Johnson</p>
                  <p className="text-gray-600 text-sm">Lead Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#20BF55] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Can't Find Your Role?</h2>
          <p className="text-xl mb-8">
            We're always looking for talented individuals who share our passion for preventative health. Send us your CV anyway!
          </p>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#20BF55]" data-testid="send-cv-button">
            Send Us Your CV
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
