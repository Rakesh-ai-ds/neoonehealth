import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Activity, Droplet, Eye, Stethoscope, Brain, CheckCircle2, ArrowRight, Shield, Clock, Users, Award } from 'lucide-react';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CorporateScreening = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [packagesRef, packagesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [testsRef, testsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
      transition: { staggerChildren: 0.15 }
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
      <section className="relative bg-gradient-to-br from-[#0B4F6C] to-[#01BAEF] text-white pt-32 pb-20" ref={heroRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Health Screening Programs
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Early detection saves lives. Our advanced health screening packages help identify potential health risks before they become serious problems.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-[#0B4F6C] hover:bg-gray-100 hover-lift">
                Schedule Corporate Screening
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Health Screening */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B4F6C] mb-4">Why Regular Health Screening?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Preventive healthcare is the key to a healthy workforce
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#01BAEF]/10 to-[#0B4F6C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-[#01BAEF]" size={32} />
              </div>
              <h3 className="text-lg font-bold text-[#0B4F6C] mb-2">Early Detection</h3>
              <p className="text-gray-600 text-sm">Identify health issues before symptoms appear</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#01BAEF]/10 to-[#0B4F6C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-[#01BAEF]" size={32} />
              </div>
              <h3 className="text-lg font-bold text-[#0B4F6C] mb-2">Disease Prevention</h3>
              <p className="text-gray-600 text-sm">Reduce risk of chronic diseases through early intervention</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#01BAEF]/10 to-[#0B4F6C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#01BAEF]" size={32} />
              </div>
              <h3 className="text-lg font-bold text-[#0B4F6C] mb-2">Healthier Workforce</h3>
              <p className="text-gray-600 text-sm">Improve employee productivity and reduce absenteeism</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#01BAEF]/10 to-[#0B4F6C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-[#01BAEF]" size={32} />
              </div>
              <h3 className="text-lg font-bold text-[#0B4F6C] mb-2">Peace of Mind</h3>
              <p className="text-gray-600 text-sm">Know your health status with confidence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Screening Packages */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={packagesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={packagesInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-[#0B4F6C] mb-4">Our Screening Packages</h2>
            <p className="text-xl text-gray-600">Choose the package that best fits your needs</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate={packagesInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Basic Package */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-r from-[#01BAEF] to-[#0B4F6C] text-white p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Basic Screening</h3>
                <p className="text-gray-100">Essential Health Check</p>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="font-bold text-[#0B4F6C] mb-4 text-lg">Includes:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#20E3B2] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">Complete Blood Count (CBC)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#20E3B2] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">Blood Pressure Monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#20E3B2] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">Blood Sugar (Fasting)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#20E3B2] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">BMI & Weight Assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#20E3B2] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">General Physical Examination</span>
                    </li>
                  </ul>
                </div>
                <Link to="/contact">
                  <Button className="w-full bg-[#01BAEF] hover:bg-[#0B4F6C]">
                    Book Now
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Advanced Package */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift border-4 border-[#20E3B2] relative"
              variants={itemVariants}
            >
              <div className="absolute top-0 right-0 bg-[#20E3B2] text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                POPULAR
              </div>
              <div className="bg-gradient-to-r from-[#20E3B2] to-[#01BAEF] text-white p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Advanced Screening</h3>
                <p className="text-gray-100">Comprehensive Health Analysis</p>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="font-bold text-[#0B4F6C] mb-4 text-lg">Everything in Basic, plus:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#20E3B2] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">Lipid Profile (Cholesterol)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#20E3B2] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">Liver Function Tests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#20E3B2] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">Kidney Function Tests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#20E3B2] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">Thyroid Profile (TSH)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#20E3B2] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">ECG (Electrocardiogram)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#20E3B2] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">Chest X-Ray</span>
                    </li>
                  </ul>
                </div>
                <Link to="/contact">
                  <Button className="w-full bg-[#20E3B2] hover:bg-[#01BAEF]">
                    Book Now
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Premium Package */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-r from-[#0B4F6C] to-[#082C4A] text-white p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Premium Screening</h3>
                <p className="text-gray-100">Complete Health Package</p>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="font-bold text-[#0B4F6C] mb-4 text-lg">Everything in Advanced, plus:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#20E3B2] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">Vitamin D & B12 Levels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#20E3B2] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">HbA1c (Diabetes Screening)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#20E3B2] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">Ultrasound Abdomen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#20E3B2] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">Eye Examination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#20E3B2] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">Dental Check-up</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#20E3B2] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">Consultation with Specialist</span>
                    </li>
                  </ul>
                </div>
                <Link to="/contact">
                  <Button className="w-full bg-[#0B4F6C] hover:bg-[#082C4A]">
                    Book Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Tests Information */}
      <section className="py-20 bg-white" ref={testsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={testsInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-[#0B4F6C] mb-4">What We Screen For</h2>
            <p className="text-xl text-gray-600">Comprehensive health assessment across multiple parameters</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={testsInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Blood Tests */}
            <motion.div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg" variants={itemVariants}>
              <div className="w-14 h-14 bg-[#01BAEF]/10 rounded-lg flex items-center justify-center mb-4">
                <Droplet className="text-[#01BAEF]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0B4F6C] mb-3">Blood Panel</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#01BAEF] rounded-full"></div>
                  Complete Hemogram
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#01BAEF] rounded-full"></div>
                  Lipid Profile
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#01BAEF] rounded-full"></div>
                  Blood Sugar Levels
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#01BAEF] rounded-full"></div>
                  HbA1c Testing
                </li>
              </ul>
            </motion.div>

            {/* Cardio Tests */}
            <motion.div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg" variants={itemVariants}>
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-red-500" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0B4F6C] mb-3">Cardio-Metabolic</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  Blood Pressure Monitoring
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  ECG Analysis
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  Cholesterol Screening
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  Heart Risk Assessment
                </li>
              </ul>
            </motion.div>

            {/* Organ Function */}
            <motion.div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg" variants={itemVariants}>
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Activity className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0B4F6C] mb-3">Organ Function</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  Liver Function Tests
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  Kidney Function Tests
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  Thyroid Profile
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  Pancreatic Enzymes
                </li>
              </ul>
            </motion.div>

            {/* Physical Assessment */}
            <motion.div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg" variants={itemVariants}>
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Stethoscope className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0B4F6C] mb-3">Physical Assessment</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                  BMI & Body Composition
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                  Waist Circumference
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                  General Examination
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                  Vital Signs Check
                </li>
              </ul>
            </motion.div>

            {/* Vision & Dental */}
            <motion.div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-xl shadow-lg" variants={itemVariants}>
              <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Eye className="text-yellow-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0B4F6C] mb-3">Vision & Dental</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div>
                  Eye Examination
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div>
                  Vision Acuity Test
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div>
                  Dental Check-up
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div>
                  Oral Health Assessment
                </li>
              </ul>
            </motion.div>

            {/* Lifestyle Assessment */}
            <motion.div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-xl shadow-lg" variants={itemVariants}>
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="text-indigo-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#0B4F6C] mb-3">Lifestyle Assessment</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                  Nutrition Counseling
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                  Stress Evaluation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                  Exercise Recommendations
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                  Health Risk Assessment
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={processRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-[#0B4F6C] mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple, efficient, and hassle-free screening process</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#01BAEF] to-[#0B4F6C] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-[#0B4F6C] mb-2">Book Appointment</h3>
              <p className="text-gray-600">Schedule your screening at your convenience</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#01BAEF] to-[#0B4F6C] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-[#0B4F6C] mb-2">Visit Our Facility</h3>
              <p className="text-gray-600">Come to our modern, well-equipped center</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#01BAEF] to-[#0B4F6C] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-[#0B4F6C] mb-2">Complete Tests</h3>
              <p className="text-gray-600">Quick and comfortable screening process</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#01BAEF] to-[#0B4F6C] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-[#0B4F6C] mb-2">Get Results</h3>
              <p className="text-gray-600">Receive detailed reports with doctor consultation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#01BAEF] to-[#0B4F6C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Charge of Your Health?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Book your comprehensive health screening today and get a complete picture of your health status
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-[#0B4F6C] hover:bg-gray-100 hover-lift">
                Schedule Screening Now
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#0B4F6C] hover-lift">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateScreening;
