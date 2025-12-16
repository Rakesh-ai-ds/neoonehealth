import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, RefreshCw, Heart, AlertCircle, CheckCircle, TrendingUp, Scale, Ruler } from 'lucide-react';

const BMICalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
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

    const resetCalculator = () => {
        setWeight('');
        setHeight('');
        setAge('');
        setBmi(null);
        setShowResult(false);
    };

    const getBMICategory = (bmiValue) => {
        const value = parseFloat(bmiValue);
        if (value < 18.5) return { category: 'Underweight', color: '#38BDF8', icon: AlertCircle, advice: 'You may need to gain some weight. Consider consulting a nutritionist.' };
        if (value < 25) return { category: 'Normal Weight', color: '#22C55E', icon: CheckCircle, advice: 'Great job! Maintain your healthy lifestyle with balanced diet and regular exercise.' };
        if (value < 30) return { category: 'Overweight', color: '#FACC15', icon: TrendingUp, advice: 'Consider increasing physical activity and making dietary adjustments.' };
        return { category: 'Obese', color: '#EF4444', icon: AlertCircle, advice: 'We recommend consulting a healthcare professional for personalized guidance.' };
    };

    const bmiInfo = bmi ? getBMICategory(bmi) : null;

    return (
        <div id="bmi-calculator" className="py-20 bg-[#F8FAFC]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="w-16 h-16 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Calculator className="text-[#2563EB]" size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-2">BMI Calculator</h2>
                    <p className="text-[#64748B]">Calculate your Body Mass Index and understand your health status</p>
                </motion.div>

                <motion.div
                    className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {/* Unit Toggle */}
                    <div className="bg-[#F8FAFC] p-4 flex justify-center gap-4 border-b border-gray-100">
                        <button
                            onClick={() => setUnit('metric')}
                            className={`px-6 py-2 rounded-xl font-medium transition-all ${unit === 'metric'
                                    ? 'bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white'
                                    : 'bg-white border border-gray-200 text-[#64748B] hover:text-[#1E293B]'
                                }`}
                        >
                            Metric (kg, cm)
                        </button>
                        <button
                            onClick={() => setUnit('imperial')}
                            className={`px-6 py-2 rounded-xl font-medium transition-all ${unit === 'imperial'
                                    ? 'bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white'
                                    : 'bg-white border border-gray-200 text-[#64748B] hover:text-[#1E293B]'
                                }`}
                        >
                            Imperial (lbs, in)
                        </button>
                    </div>

                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {/* Weight Input */}
                            <div>
                                <label className="block text-sm font-semibold text-[#1E293B] mb-2 flex items-center gap-2">
                                    <Scale size={18} className="text-[#2563EB]" />
                                    Weight ({unit === 'metric' ? 'kg' : 'lbs'})
                                </label>
                                <input
                                    type="number"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    placeholder={unit === 'metric' ? 'e.g., 70' : 'e.g., 154'}
                                    className="w-full px-4 py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] text-lg"
                                />
                            </div>

                            {/* Height Input */}
                            <div>
                                <label className="block text-sm font-semibold text-[#1E293B] mb-2 flex items-center gap-2">
                                    <Ruler size={18} className="text-[#2563EB]" />
                                    Height ({unit === 'metric' ? 'cm' : 'inches'})
                                </label>
                                <input
                                    type="number"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    placeholder={unit === 'metric' ? 'e.g., 175' : 'e.g., 69'}
                                    className="w-full px-4 py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] text-lg"
                                />
                            </div>

                            {/* Age Input */}
                            <div>
                                <label className="block text-sm font-semibold text-[#1E293B] mb-2">
                                    Age (optional)
                                </label>
                                <input
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    placeholder="e.g., 30"
                                    className="w-full px-4 py-3 bg-[#F8FAFC] border border-gray-200 rounded-xl text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] text-lg"
                                />
                            </div>

                            {/* Gender Select */}
                            <div>
                                <label className="block text-sm font-semibold text-[#1E293B] mb-2">
                                    Gender
                                </label>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setGender('male')}
                                        className={`flex-1 py-3 rounded-xl font-medium transition-all ${gender === 'male'
                                                ? 'bg-[#2563EB] text-white'
                                                : 'bg-[#F8FAFC] border border-gray-200 text-[#64748B] hover:text-[#1E293B]'
                                            }`}
                                    >
                                        Male
                                    </button>
                                    <button
                                        onClick={() => setGender('female')}
                                        className={`flex-1 py-3 rounded-xl font-medium transition-all ${gender === 'female'
                                                ? 'bg-[#2563EB] text-white'
                                                : 'bg-[#F8FAFC] border border-gray-200 text-[#64748B] hover:text-[#1E293B]'
                                            }`}
                                    >
                                        Female
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4">
                            <motion.button
                                onClick={calculateBMI}
                                disabled={!weight || !height}
                                className="flex-1 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Calculator size={20} />
                                Calculate BMI
                            </motion.button>
                            <motion.button
                                onClick={resetCalculator}
                                className="px-6 bg-[#F1F5F9] text-[#64748B] py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:text-[#1E293B]"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <RefreshCw size={20} />
                            </motion.button>
                        </div>
                    </div>

                    {/* Result Section */}
                    <AnimatePresence>
                        {showResult && bmi && bmiInfo && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="overflow-hidden"
                            >
                                <div className="bg-[#F8FAFC] p-8 border-t border-gray-100">
                                    <div className="text-center mb-6">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                                            className="inline-block"
                                        >
                                            <div
                                                className="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4 border-4"
                                                style={{ borderColor: bmiInfo.color, backgroundColor: `${bmiInfo.color}15` }}
                                            >
                                                <span className="text-5xl font-bold" style={{ color: bmiInfo.color }}>{bmi}</span>
                                            </div>
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-[#1E293B] mb-2">Your BMI: {bmi}</h3>
                                        <div className="flex items-center justify-center gap-2">
                                            <bmiInfo.icon size={24} style={{ color: bmiInfo.color }} />
                                            <span className="text-xl font-semibold" style={{ color: bmiInfo.color }}>
                                                {bmiInfo.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* BMI Scale */}
                                    <div className="mb-6">
                                        <div className="flex justify-between text-xs text-[#64748B] mb-2">
                                            <span>Underweight</span>
                                            <span>Normal</span>
                                            <span>Overweight</span>
                                            <span>Obese</span>
                                        </div>
                                        <div className="h-3 rounded-full overflow-hidden flex">
                                            <div className="bg-[#38BDF8] flex-1"></div>
                                            <div className="bg-[#22C55E] flex-1"></div>
                                            <div className="bg-[#FACC15] flex-1"></div>
                                            <div className="bg-[#EF4444] flex-1"></div>
                                        </div>
                                        <div className="flex justify-between text-xs text-[#64748B] mt-1">
                                            <span>&lt;18.5</span>
                                            <span>18.5-24.9</span>
                                            <span>25-29.9</span>
                                            <span>&gt;30</span>
                                        </div>
                                    </div>

                                    {/* Advice */}
                                    <div className="bg-white p-4 rounded-xl border border-gray-100">
                                        <div className="flex items-start gap-3">
                                            <Heart className="text-[#2563EB] flex-shrink-0 mt-1" size={20} />
                                            <div>
                                                <h4 className="font-semibold text-[#1E293B] mb-1">Health Advice</h4>
                                                <p className="text-[#64748B] text-sm">{bmiInfo.advice}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <p className="text-center text-[#94A3B8] text-sm mt-6">
                    *BMI is a general indicator and may not be accurate for athletes, pregnant women, or the elderly.
                    Consult a healthcare professional for personalized advice.
                </p>
            </div>
        </div>
    );
};

export default BMICalculator;
