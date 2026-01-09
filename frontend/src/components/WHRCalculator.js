import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ruler, ArrowRight, Info, CheckCircle, X } from 'lucide-react';

const WHRCalculator = () => {
    const [waist, setWaist] = useState('');
    const [hip, setHip] = useState('');
    const [gender, setGender] = useState('male');
    const [result, setResult] = useState(null);
    const [showGuide, setShowGuide] = useState(false);

    const calculateWHR = () => {
        if (!waist || !hip) return;

        const waistValue = parseFloat(waist);
        const hipValue = parseFloat(hip);

        if (waistValue <= 0 || hipValue <= 0) return;

        const whr = waistValue / hipValue;

        let category, risk, color;

        if (gender === 'male') {
            if (whr < 0.90) {
                category = 'Low Risk';
                risk = 'Healthy range. Keep maintaining your lifestyle!';
                color = '#22C55E';
            } else if (whr < 0.95) {
                category = 'Moderate Risk';
                risk = 'Slightly elevated. Consider dietary improvements.';
                color = '#F59E0B';
            } else {
                category = 'High Risk';
                risk = 'Increased health risk. Consult a nutritionist.';
                color = '#EF4444';
            }
        } else {
            if (whr < 0.80) {
                category = 'Low Risk';
                risk = 'Healthy range. Keep maintaining your lifestyle!';
                color = '#22C55E';
            } else if (whr < 0.85) {
                category = 'Moderate Risk';
                risk = 'Slightly elevated. Consider dietary improvements.';
                color = '#F59E0B';
            } else {
                category = 'High Risk';
                risk = 'Increased health risk. Consult a nutritionist.';
                color = '#EF4444';
            }
        }

        setResult({ whr: whr.toFixed(2), category, risk, color });
    };

    const resetCalculator = () => {
        setWaist('');
        setHip('');
        setResult(null);
    };

    return (
        <section id="whr-calculator" className="py-16 md:py-20 bg-gradient-to-br from-[#F8FAFC] to-white scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#7C3AED] font-medium text-xs md:text-sm uppercase tracking-wider">Health Assessment</span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E293B] mt-2 mb-3 flex items-center justify-center gap-3">
                        Waist-Hip Ratio <span className="bg-gradient-to-r from-[#7C3AED] to-[#38BDF8] bg-clip-text text-transparent">Calculator</span>
                        <button
                            onClick={() => setShowGuide(true)}
                            className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#7C3AED]/10 hover:bg-[#7C3AED]/20 transition-colors"
                            aria-label="How to measure"
                        >
                            <Info className="text-[#7C3AED]" size={20} />
                        </button>
                    </h2>
                    <p className="text-sm md:text-base text-[#64748B] max-w-xl mx-auto">
                        WHR is a key indicator of health risk. Calculate yours to understand your body fat distribution.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Input Section */}
                            <div className="p-6 md:p-8 bg-gradient-to-br from-[#7C3AED]/5 to-[#38BDF8]/5">
                                <h3 className="text-lg font-bold text-[#1E293B] mb-6 flex items-center gap-2">
                                    <Ruler className="text-[#7C3AED]" size={20} />
                                    Enter Your Measurements
                                </h3>

                                {/* Gender Selection */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-[#64748B] mb-3">Gender</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            onClick={() => setGender('male')}
                                            className={`py-3 rounded-xl font-medium transition-all ${gender === 'male'
                                                ? 'bg-[#7C3AED] text-white'
                                                : 'bg-gray-100 text-[#64748B] hover:bg-gray-200'
                                                }`}
                                        >
                                            Male
                                        </button>
                                        <button
                                            onClick={() => setGender('female')}
                                            className={`py-3 rounded-xl font-medium transition-all ${gender === 'female'
                                                ? 'bg-[#7C3AED] text-white'
                                                : 'bg-gray-100 text-[#64748B] hover:bg-gray-200'
                                                }`}
                                        >
                                            Female
                                        </button>
                                    </div>
                                </div>

                                {/* Waist Input */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-[#64748B] mb-2">
                                        Waist Circumference (cm)
                                    </label>
                                    <input
                                        type="number"
                                        value={waist}
                                        onChange={(e) => setWaist(e.target.value)}
                                        placeholder="e.g., 80"
                                        className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                                    />
                                    <p className="text-xs text-[#94A3B8] mt-1">Measure at the narrowest point</p>
                                </div>

                                {/* Hip Input */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-[#64748B] mb-2">
                                        Hip Circumference (cm)
                                    </label>
                                    <input
                                        type="number"
                                        value={hip}
                                        onChange={(e) => setHip(e.target.value)}
                                        placeholder="e.g., 95"
                                        className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                                    />
                                    <p className="text-xs text-[#94A3B8] mt-1">Measure at the widest point</p>
                                </div>

                                {/* Calculate Button */}
                                <motion.button
                                    onClick={calculateWHR}
                                    className="w-full py-4 bg-gradient-to-r from-[#7C3AED] to-[#38BDF8] text-white rounded-xl font-bold flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Calculate WHR
                                    <ArrowRight size={18} />
                                </motion.button>
                            </div>

                            {/* Result Section */}
                            <div className="p-6 md:p-8 flex flex-col justify-center">
                                {result ? (
                                    <motion.div
                                        className="text-center"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                    >
                                        <div
                                            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 flex items-center justify-center"
                                            style={{ backgroundColor: `${result.color}15`, border: `4px solid ${result.color}` }}
                                        >
                                            <div>
                                                <p className="text-3xl md:text-4xl font-bold" style={{ color: result.color }}>{result.whr}</p>
                                                <p className="text-xs text-[#64748B] mt-1">WHR</p>
                                            </div>
                                        </div>

                                        <div
                                            className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-4"
                                            style={{ backgroundColor: `${result.color}15`, color: result.color }}
                                        >
                                            {result.category}
                                        </div>

                                        <p className="text-[#64748B] text-sm mb-6">{result.risk}</p>

                                        <button
                                            onClick={resetCalculator}
                                            className="text-[#7C3AED] font-medium text-sm hover:underline"
                                        >
                                            Calculate Again
                                        </button>
                                    </motion.div>
                                ) : (
                                    <div className="text-center">
                                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 bg-gray-100 flex items-center justify-center">
                                            <Ruler className="text-[#94A3B8]" size={40} />
                                        </div>
                                        <p className="text-[#64748B] text-sm">Enter your measurements to see your WHR result</p>

                                        {/* Reference Table */}
                                        <div className="mt-6 p-4 bg-[#F8FAFC] rounded-xl">
                                            <p className="text-xs font-semibold text-[#1E293B] mb-3 flex items-center justify-center gap-1">
                                                <Info size={14} className="text-[#7C3AED]" />
                                                WHR Health Ranges
                                            </p>
                                            <div className="grid grid-cols-2 gap-4 text-xs">
                                                <div>
                                                    <p className="font-medium text-[#64748B] mb-1">Men</p>
                                                    <p className="text-[#22C55E]">Low: &lt; 0.90</p>
                                                    <p className="text-[#F59E0B]">Mod: 0.90-0.95</p>
                                                    <p className="text-[#EF4444]">High: &gt; 0.95</p>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-[#64748B] mb-1">Women</p>
                                                    <p className="text-[#22C55E]">Low: &lt; 0.80</p>
                                                    <p className="text-[#F59E0B]">Mod: 0.80-0.85</p>
                                                    <p className="text-[#EF4444]">High: &gt; 0.85</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Info Section */}
                    <motion.div
                        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {[
                            { title: "Why WHR?", desc: "WHR indicates where fat is stored - around the waist (apple shape) vs hips (pear shape)." },
                            { title: "Health Impact", desc: "Higher WHR is linked to increased risk of heart disease, diabetes, and metabolic disorders." },
                            { title: "Improve WHR", desc: "Regular exercise, balanced nutrition, and stress management can help improve your ratio." }
                        ].map((item, index) => (
                            <div key={index} className="bg-white border border-gray-100 p-4 rounded-xl">
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="text-[#22C55E] flex-shrink-0 mt-0.5" size={16} />
                                    <div>
                                        <p className="font-semibold text-[#1E293B] text-sm">{item.title}</p>
                                        <p className="text-[#64748B] text-xs mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Measurement Guide Modal */}
                <AnimatePresence>
                    {showGuide && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            onClick={() => setShowGuide(false)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                            >
                                {/* Header */}
                                <div className="sticky top-0 bg-gradient-to-r from-[#7C3AED] to-[#38BDF8] p-6 flex items-center justify-between">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white">How to Measure Waist & Hips</h3>
                                        <p className="text-white/90 text-sm mt-1">Get accurate measurements for WHR calculation</p>
                                    </div>
                                    <button
                                        onClick={() => setShowGuide(false)}
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                                    >
                                        <X className="text-white" size={20} />
                                    </button>
                                </div>

                                <div className="p-6 space-y-6">
                                    {/* Visual Guide Image */}
                                    <div className="rounded-xl overflow-hidden border-2 border-[#7C3AED]/20">
                                        <img
                                            src="/images/whr-measurement-guide.png"
                                            alt="Waist and Hip Measurement Guide"
                                            className="w-full"
                                        />
                                    </div>

                                    {/* Step-by-Step Instructions */}
                                    <div className="bg-[#F8FAFC] rounded-xl p-5">
                                        <h4 className="font-bold text-[#1E293B] mb-4 flex items-center gap-2">
                                            <Ruler className="text-[#7C3AED]" size={18} />
                                            Step-by-Step Measurement Guide
                                        </h4>

                                        <div className="space-y-4">
                                            {/* Waist */}
                                            <div>
                                                <p className="font-semibold text-[#7C3AED] mb-2">📏 Waist Measurement</p>
                                                <ol className="list-decimal list-inside space-y-1.5 text-sm text-[#64748B]">
                                                    <li>Stand straight with feet together, relax your abdomen</li>
                                                    <li>Find the midpoint between your lowest rib and top of hip bone (usually ~1 inch above belly button)</li>
                                                    <li>Wrap measuring tape around waist, keeping it level and parallel to floor</li>
                                                    <li>Exhale naturally (don't suck in or push out)</li>
                                                    <li>Tape should be snug but not tight - you should fit one finger under it</li>
                                                    <li>Read the measurement and record in centimeters</li>
                                                </ol>
                                            </div>

                                            {/* Hips */}
                                            <div>
                                                <p className="font-semibold text-[#38BDF8] mb-2">📏 Hip Measurement</p>
                                                <ol className="list-decimal list-inside space-y-1.5 text-sm text-[#64748B]">
                                                    <li>Stand straight with feet together</li>
                                                    <li>Find the widest part of your buttocks/hips</li>
                                                    <li>Wrap measuring tape around hips, keeping it level</li>
                                                    <li>Make sure tape is parallel to floor all the way around</li>
                                                    <li>Tape should be snug against body without compressing</li>
                                                    <li>Read the measurement and record in centimeters</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>

                                    {/* String Alternative */}
                                    <div className="bg-[#7C3AED]/5 border border-[#7C3AED]/20 rounded-xl p-5">
                                        <h4 className="font-bold text-[#1E293B] mb-3 flex items-center gap-2">
                                            <Info className="text-[#7C3AED]" size={18} />
                                            Don't Have a Measuring Tape?
                                        </h4>
                                        <p className="text-sm text-[#64748B] mb-3">Use a <strong>non-stretchy string or yarn</strong> as an alternative:</p>
                                        <ol className="list-decimal list-inside space-y-1.5 text-sm text-[#64748B]">
                                            <li>Wrap string around waist/hips following steps above</li>
                                            <li>Mark where the string overlaps with a pen or make a knot</li>
                                            <li>Lay the string flat on a ruler or straight edge</li>
                                            <li>Measure the marked length in centimeters</li>
                                            <li>Record the measurement</li>
                                        </ol>
                                    </div>

                                    {/* Important Tips */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                        {[
                                            { icon: "🧍", title: "Stand Straight", desc: "Feet together, weight evenly distributed" },
                                            { icon: "😮‍💨", title: "Breathe Normally", desc: "Exhale naturally, don't hold breath" },
                                            { icon: "📏", title: "Keep Level", desc: "Tape parallel to floor, not tilted" }
                                        ].map((tip, idx) => (
                                            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-3 text-center">
                                                <div className="text-2xl mb-1">{tip.icon}</div>
                                                <p className="font-semibold text-[#1E293B] text-xs mb-1">{tip.title}</p>
                                                <p className="text-[#64748B] text-xs">{tip.desc}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Why It Matters */}
                                    <div className="bg-gradient-to-r from-[#7C3AED]/10 to-[#38BDF8]/10 rounded-xl p-5">
                                        <h4 className="font-bold text-[#1E293B] mb-2">Why Accurate Measurements Matter</h4>
                                        <p className="text-sm text-[#64748B] mb-2">
                                            WHR is calculated by dividing waist measurement by hip measurement. Even small errors can affect your result.
                                        </p>
                                        <p className="text-sm text-[#64748B]">
                                            <strong>High WHR ({'>'}0.85 women, {'>'}0.90 men)</strong> indicates more abdominal fat, which is linked to increased risk of heart disease, stroke, and diabetes - even if your BMI is healthy.
                                        </p>
                                    </div>

                                    {/* Close Button */}
                                    <button
                                        onClick={() => setShowGuide(false)}
                                        className="w-full py-3 bg-gradient-to-r from-[#7C3AED] to-[#38BDF8] text-white rounded-xl font-bold hover:opacity-90 transition-opacity"
                                    >
                                        Got It! Let's Calculate
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default WHRCalculator;
