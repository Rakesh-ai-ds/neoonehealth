import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DollarSign, TrendingUp, Users, Award, CheckCircle2, BarChart3, Heart, Target, Briefcase } from 'lucide-react';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Benefits = () => {
  const location = useLocation();
  const [roiRef, roiInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [productivityRef, productivityInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [retentionRef, retentionInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Scroll to section when hash changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const navbarHeight = 80; // Height of fixed navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B4F6C] to-[#01BAEF] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Benefits of Corporate Wellness Programs
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Discover how investing in employee health translates to measurable business success
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-[#0B4F6C] hover:bg-gray-100 hover-lift">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#roi" className="px-6 py-3 bg-[#01BAEF]/10 text-[#0B4F6C] rounded-lg font-semibold hover:bg-[#01BAEF] hover:text-white transition-colors">
              ROI & Financial Savings
            </a>
            <a href="#productivity" className="px-6 py-3 bg-[#01BAEF]/10 text-[#0B4F6C] rounded-lg font-semibold hover:bg-[#01BAEF] hover:text-white transition-colors">
              Productivity & Performance
            </a>
            <a href="#retention" className="px-6 py-3 bg-[#01BAEF]/10 text-[#0B4F6C] rounded-lg font-semibold hover:bg-[#01BAEF] hover:text-white transition-colors">
              Employee Retention
            </a>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section id="roi" className="py-20 bg-white scroll-mt-32" ref={roiRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Image Header */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
              alt="Business professionals analyzing financial data"
              className="w-full h-64 md:h-80 object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={roiInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-[#20E3B2] to-[#01BAEF] rounded-full flex items-center justify-center mx-auto mb-6">
              <DollarSign className="text-white" size={40} />
            </div>
            <h2 className="text-4xl font-bold text-[#0B4F6C] mb-4">ROI & Financial Savings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform employee wellness into measurable financial returns
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial="hidden"
            animate={roiInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-[#20E3B2]"
              variants={itemVariants}
            >
              <div className="text-5xl font-bold text-[#20E3B2] mb-3">15-30%</div>
              <h3 className="text-xl font-bold text-[#0B4F6C] mb-3">Reduced Healthcare Costs</h3>
              <p className="text-gray-600">
                Proactive health management leads to lower medical claims and reduced insurance premiums over time
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-[#01BAEF]"
              variants={itemVariants}
            >
              <div className="text-5xl font-bold text-[#01BAEF] mb-3">4:1</div>
              <h3 className="text-xl font-bold text-[#0B4F6C] mb-3">Average ROI</h3>
              <p className="text-gray-600">
                For every ₹1 invested in wellness programs, companies see ₹4 in returns through reduced costs and increased productivity
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-purple-600"
              variants={itemVariants}
            >
              <div className="text-5xl font-bold text-purple-600 mb-3">₹1,685</div>
              <h3 className="text-xl font-bold text-[#0B4F6C] mb-3">Presenteeism Cost Saved</h3>
              <p className="text-gray-600">
                Per employee annually. Healthier employees are more focused and productive at work
              </p>
            </motion.div>
          </motion.div>

          <div className="bg-gradient-to-r from-[#20E3B2] to-[#01BAEF] text-white p-10 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Key Financial Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Lower Insurance Premiums</h4>
                  <p className="text-sm text-gray-100">Healthier workforce leads to fewer claims and better rates</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Reduced Absenteeism Costs</h4>
                  <p className="text-sm text-gray-100">Fewer sick days mean maintained productivity levels</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Tax Benefits</h4>
                  <p className="text-sm text-gray-100">Potential tax advantages for wellness program investments</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Decreased Turnover Costs</h4>
                  <p className="text-sm text-gray-100">Save on recruitment and training expenses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productivity Section */}
      <section id="productivity" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 scroll-mt-32" ref={productivityRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Image Header */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Productive team working together"
              className="w-full h-64 md:h-80 object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={productivityInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-[#01BAEF] to-[#0B4F6C] rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="text-white" size={40} />
            </div>
            <h2 className="text-4xl font-bold text-[#0B4F6C] mb-4">Productivity & Performance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Boost workplace efficiency and employee output through better health
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial="hidden"
            animate={productivityInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover-lift"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-[#01BAEF]/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-[#01BAEF]" size={32} />
              </div>
              <div className="text-5xl font-bold text-[#01BAEF] mb-3">22-28%</div>
              <h3 className="text-xl font-bold text-[#0B4F6C] mb-3">Decreased Absenteeism</h3>
              <p className="text-gray-600">
                Comprehensive health screening catches issues early, dramatically reducing unscheduled sick days
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover-lift"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-[#20E3B2]/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-[#20E3B2]" size={32} />
              </div>
              <div className="text-5xl font-bold text-[#20E3B2] mb-3">35%</div>
              <h3 className="text-xl font-bold text-[#0B4F6C] mb-3">Better Focus & Energy</h3>
              <p className="text-gray-600">
                Wellness programs improve sleep, nutrition, and mental health, boosting daily energy and cognitive function
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover-lift"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-orange-600" size={32} />
              </div>
              <div className="text-5xl font-bold text-orange-600 mb-3">40%</div>
              <h3 className="text-xl font-bold text-[#0B4F6C] mb-3">Improved Safety</h3>
              <p className="text-gray-600">
                Health audits and proactive screening reduce workplace accidents and safety incidents
              </p>
            </motion.div>
          </motion.div>

          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-[#0B4F6C] mb-6">Performance Improvements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-[#0B4F6C] mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-[#20E3B2]" size={24} />
                  Enhanced Work Quality
                </h4>
                <p className="text-gray-600 ml-8">
                  Healthier employees demonstrate better attention to detail, fewer errors, and higher quality output in their daily tasks
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#0B4F6C] mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-[#20E3B2]" size={24} />
                  Increased Engagement
                </h4>
                <p className="text-gray-600 ml-8">
                  Employees who feel cared for show higher levels of engagement, motivation, and commitment to organizational goals
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#0B4F6C] mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-[#20E3B2]" size={24} />
                  Better Team Collaboration
                </h4>
                <p className="text-gray-600 ml-8">
                  Wellness programs foster positive workplace culture, improving teamwork and interpersonal relationships
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#0B4F6C] mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-[#20E3B2]" size={24} />
                  Reduced Presenteeism
                </h4>
                <p className="text-gray-600 ml-8">
                  Employees are fully present and productive rather than working while sick or distracted by health concerns
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retention Section */}
      <section id="retention" className="py-20 bg-white scroll-mt-32" ref={retentionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Image Header */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
              alt="Happy team celebrating success together"
              className="w-full h-64 md:h-80 object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={retentionInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-white" size={40} />
            </div>
            <h2 className="text-4xl font-bold text-[#0B4F6C] mb-4">Employee Retention & Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build loyalty and attract top talent through comprehensive wellness benefits
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial="hidden"
            animate={retentionInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500"
              variants={itemVariants}
            >
              <div className="text-5xl font-bold text-orange-500 mb-3">89%</div>
              <h3 className="text-xl font-bold text-[#0B4F6C] mb-3">Talent Attraction</h3>
              <p className="text-gray-600">
                Offering world-class health benefits positions your company as an Employer of Choice in competitive markets
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-red-500"
              variants={itemVariants}
            >
              <div className="text-5xl font-bold text-red-500 mb-3">18%</div>
              <h3 className="text-xl font-bold text-[#0B4F6C] mb-3">Reduced Turnover</h3>
              <p className="text-gray-600">
                Employees who feel valued through health investments are more loyal and less likely to seek new opportunities
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-pink-500"
              variants={itemVariants}
            >
              <div className="text-5xl font-bold text-pink-500 mb-3">92%</div>
              <h3 className="text-xl font-bold text-[#0B4F6C] mb-3">Positive Culture</h3>
              <p className="text-gray-600">
                Wellness programs boost morale, collaboration, and psychological safety within the organization
              </p>
            </motion.div>
          </motion.div>

          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-10 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Culture & Retention Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Employer Brand Strength</h4>
                  <p className="text-sm text-gray-100">Stand out in the job market with comprehensive wellness offerings</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Employee Satisfaction</h4>
                  <p className="text-sm text-gray-100">Higher job satisfaction leads to better retention rates</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Team Bonding</h4>
                  <p className="text-sm text-gray-100">Wellness challenges create camaraderie and strengthen relationships</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Reduced Recruitment Costs</h4>
                  <p className="text-sm text-gray-100">Lower turnover means significant savings on hiring and training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#01BAEF] to-[#0B4F6C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to See These Benefits in Your Organization?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Let us show you how our wellness programs can transform your workplace
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[#0B4F6C] hover:bg-gray-100 hover-lift">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
