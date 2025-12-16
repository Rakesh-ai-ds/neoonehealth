import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, RefreshCw, Heart, AlertCircle, CheckCircle, TrendingUp, Scale, Ruler } from 'lucide-react';

const BMICalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [unit, setUnit] = useState('metric');
    const [bmi, setBmi] = useState(null);
    const [showResult, setShowResult] = useState(false);

    const calculateBMI = () => {
        if (!weight || !height) return;
        let weightKg = parseFloat(weight);
        let heightM = parseFloat(height) / 100;
        if (unit === 'imperial') {
            weightKg = parseFloat(weight) * 0.453592;
            heightM = parseFloat(height) * 0.0254;
        }
        const bmiValue = weightKg / (heightM * heightM);
        setBmi(bmiValue.toFixed(1));
        setShowResult(true);
    };

    const resetCalculator = () => { setWeight(''); setHeight(''); setBmi(null); setShowResult(false); };

    const getBMICategory = (bmiValue) => {
        const value = parseFloat(bmiValue);
        if (value < 18.5) return { category: 'Underweight', color: '#38BDF8', icon: AlertCircle, advice: 'Consider consulting a nutritionist.' };
        if (value < 25) return { category: 'Normal', color: '#22C55E', icon: CheckCircle, advice: 'Maintain your healthy lifestyle!' };
        if (value < 30) return { category: 'Overweight', color: '#FACC15', icon: TrendingUp, advice: 'Consider more exercise and diet changes.' };
        return { category: 'Obese', color: '#EF4444', icon: AlertCircle, advice: 'Consult a healthcare professional.' };
    };

    const bmiInfo = bmi ? getBMICategory(bmi) : null;

    return (
        <div id="bmi-calculator" className="py-12 md:py-20 bg-[#F8FAFC]">
            <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div className="text-center mb-6 md:mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2563EB]/10 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                        <Calculator className="text-[#2563EB]" size={24} />
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E293B] mb-2">BMI Calculator</h2>
                    <p className="text-[#64748B] text-sm md:text-base">Check your Body Mass Index</p>
                </motion.div>

                <motion.div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    {/* Unit Toggle */}
                    <div className="bg-[#F8FAFC] p-3 md:p-4 flex gap-2 border-b border-gray-100">
                        {['metric', 'imperial'].map((u) => (
                            <button key={u} onClick={() => setUnit(u)} className={`flex-1 px-4 py-2.5 rounded-lg font-medium text-sm transition-all ${unit === u ? 'bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white' : 'bg-white border border-gray-200 text-[#64748B]'}`}>
                                {u === 'metric' ? 'kg / cm' : 'lbs / in'}
                            </button>
                        ))}
                    </div>

                    <div className="p-4 md:p-6">
                        <div className="space-y-4 mb-6">
                            <div>
                                <label className="block text-sm font-semibold text-[#1E293B] mb-2 flex items-center gap-2">
                                    <Scale size={16} className="text-[#2563EB]" />
                                    Weight ({unit === 'metric' ? 'kg' : 'lbs'})
                                </label>
                                <input type="number" inputMode="decimal" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={unit === 'metric' ? 'e.g., 70' : 'e.g., 154'} className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-xl text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] text-base" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-[#1E293B] mb-2 flex items-center gap-2">
                                    <Ruler size={16} className="text-[#2563EB]" />
                                    Height ({unit === 'metric' ? 'cm' : 'inches'})
                                </label>
                                <input type="number" inputMode="decimal" value={height} onChange={(e) => setHeight(e.target.value)} placeholder={unit === 'metric' ? 'e.g., 175' : 'e.g., 69'} className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-xl text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] text-base" />
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <motion.button onClick={calculateBMI} disabled={!weight || !height} className="flex-1 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 disabled:opacity-50" whileTap={{ scale: 0.98 }}>
                                <Calculator size={18} /> Calculate
                            </motion.button>
                            <motion.button onClick={resetCalculator} className="px-4 bg-[#F1F5F9] text-[#64748B] py-4 rounded-xl font-bold flex items-center justify-center" whileTap={{ scale: 0.98 }}>
                                <RefreshCw size={18} />
                            </motion.button>
                        </div>
                    </div>

                    {/* Result */}
                    <AnimatePresence>
                        {showResult && bmi && bmiInfo && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                <div className="bg-[#F8FAFC] p-4 md:p-6 border-t border-gray-100">
                                    <div className="text-center mb-4">
                                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-block">
                                            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center mx-auto mb-3 border-4" style={{ borderColor: bmiInfo.color, backgroundColor: `${bmiInfo.color}15` }}>
                                                <span className="text-3xl md:text-4xl font-bold" style={{ color: bmiInfo.color }}>{bmi}</span>
                                            </div>
                                        </motion.div>
                                        <div className="flex items-center justify-center gap-2">
                                            <bmiInfo.icon size={20} style={{ color: bmiInfo.color }} />
                                            <span className="text-lg font-semibold" style={{ color: bmiInfo.color }}>{bmiInfo.category}</span>
                                        </div>
                                    </div>

                                    {/* BMI Scale */}
                                    <div className="mb-4">
                                        <div className="h-3 rounded-full overflow-hidden flex">
                                            <div className="bg-[#38BDF8] flex-1"></div>
                                            <div className="bg-[#22C55E] flex-1"></div>
                                            <div className="bg-[#FACC15] flex-1"></div>
                                            <div className="bg-[#EF4444] flex-1"></div>
                                        </div>
                                        <div className="flex justify-between text-xs text-[#64748B] mt-1">
                                            <span>&lt;18.5</span><span>18.5-24.9</span><span>25-29.9</span><span>&gt;30</span>
                                        </div>
                                    </div>

                                    <div className="bg-white p-3 rounded-xl border border-gray-100">
                                        <div className="flex items-start gap-2">
                                            <Heart className="text-[#2563EB] flex-shrink-0 mt-0.5" size={16} />
                                            <p className="text-[#64748B] text-sm">{bmiInfo.advice}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <p className="text-center text-[#94A3B8] text-xs mt-4">
                    *BMI is a general indicator. Consult a professional for personalized advice.
                </p>
            </div>
        </div>
    );
};

export default BMICalculator;
