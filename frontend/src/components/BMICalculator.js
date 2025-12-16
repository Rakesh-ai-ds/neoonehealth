import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, RefreshCw, Heart, AlertCircle, CheckCircle, TrendingUp, Scale, Ruler } from 'lucide-react';

const BMICalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [unit, setUnit] = useState('metric'); // metric or imperial
    const [bmi, setBmi] = useState(null);
    const [showResult, setShowResult] = useState(false);

    const calculateBMI = () => {
        if (!weight || !height) return;

        let weightKg = parseFloat(weight);
        let heightM = parseFloat(height) / 100; // cm to m

        if (unit === 'imperial') {
            weightKg = parseFloat(weight) * 0.453592; // lbs to kg
            heightM = parseFloat(height) * 0.0254; // inches to m
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
        if (value < 18.5) return { category: 'Underweight', color: '#3B82F6', icon: AlertCircle, advice: 'You may need to gain some weight. Consider consulting a nutritionist.' };
        if (value < 25) return { category: 'Normal Weight', color: '#20BF55', icon: CheckCircle, advice: 'Great job! Maintain your healthy lifestyle with balanced diet and regular exercise.' };
        if (value < 30) return { category: 'Overweight', color: '#F59E0B', icon: TrendingUp, advice: 'Consider increasing physical activity and making dietary adjustments.' };
        return { category: 'Obese', color: '#EF4444', icon: AlertCircle, advice: 'We recommend consulting a healthcare professional for personalized guidance.' };
    };

    const bmiInfo = bmi ? getBMICategory(bmi) : null;

    return (
        <div className="py-16 bg-gradient-to-br from-[#0B4F6C] to-[#01BAEF]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calculator className="text-white" size={40} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">BMI Calculator</h2>
                    <p className="text-gray-100">Calculate your Body Mass Index and understand your health status</p>
                </motion.div>

                <motion.div
                    className="bg-white rounded-2xl shadow-2xl overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {/* Unit Toggle */}
                    <div className="bg-gray-50 p-4 flex justify-center gap-4">
                        <button
                            onClick={() => setUnit('metric')}
                            className={`px-6 py-2 rounded-lg font-medium transition-all ${unit === 'metric'
                                    ? 'bg-[#0B4F6C] text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            Metric (kg, cm)
                        </button>
                        <button
                            onClick={() => setUnit('imperial')}
                            className={`px-6 py-2 rounded-lg font-medium transition-all ${unit === 'imperial'
                                    ? 'bg-[#0B4F6C] text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            Imperial (lbs, in)
                        </button>
                    </div>

                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {/* Weight Input */}
                            <div>
                                <label className="block text-sm font-semibold text-[#0B4F6C] mb-2 flex items-center gap-2">
                                    <Scale size={18} />
                                    Weight ({unit === 'metric' ? 'kg' : 'lbs'})
                                </label>
                                <input
                                    type="number"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    placeholder={unit === 'metric' ? 'e.g., 70' : 'e.g., 154'}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#20BF55] text-lg"
                                />
                            </div>

                            {/* Height Input */}
                            <div>
                                <label className="block text-sm font-semibold text-[#0B4F6C] mb-2 flex items-center gap-2">
                                    <Ruler size={18} />
                                    Height ({unit === 'metric' ? 'cm' : 'inches'})
                                </label>
                                <input
                                    type="number"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    placeholder={unit === 'metric' ? 'e.g., 175' : 'e.g., 69'}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#20BF55] text-lg"
                                />
                            </div>

                            {/* Age Input */}
                            <div>
                                <label className="block text-sm font-semibold text-[#0B4F6C] mb-2">
                                    Age (optional)
                                </label>
                                <input
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    placeholder="e.g., 30"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#20BF55] text-lg"
                                />
                            </div>

                            {/* Gender Select */}
                            <div>
                                <label className="block text-sm font-semibold text-[#0B4F6C] mb-2">
                                    Gender
                                </label>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setGender('male')}
                                        className={`flex-1 py-3 rounded-xl font-medium transition-all ${gender === 'male'
                                                ? 'bg-[#0B4F6C] text-white'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        Male
                                    </button>
                                    <button
                                        onClick={() => setGender('female')}
                                        className={`flex-1 py-3 rounded-xl font-medium transition-all ${gender === 'female'
                                                ? 'bg-[#0B4F6C] text-white'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
                                className="flex-1 bg-gradient-to-r from-[#20BF55] to-[#01BAEF] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Calculator size={20} />
                                Calculate BMI
                            </motion.button>
                            <motion.button
                                onClick={resetCalculator}
                                className="px-6 bg-gray-100 text-gray-600 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-200"
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
                                <div className="bg-gray-50 p-8 border-t">
                                    <div className="text-center mb-6">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                                            className="inline-block"
                                        >
                                            <div
                                                className="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4"
                                                style={{ backgroundColor: `${bmiInfo.color}20` }}
                                            >
                                                <span className="text-5xl font-bold" style={{ color: bmiInfo.color }}>{bmi}</span>
                                            </div>
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-[#0B4F6C] mb-2">Your BMI: {bmi}</h3>
                                        <div className="flex items-center justify-center gap-2">
                                            <bmiInfo.icon size={24} style={{ color: bmiInfo.color }} />
                                            <span className="text-xl font-semibold" style={{ color: bmiInfo.color }}>
                                                {bmiInfo.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* BMI Scale */}
                                    <div className="mb-6">
                                        <div className="flex justify-between text-xs text-gray-500 mb-2">
                                            <span>Underweight</span>
                                            <span>Normal</span>
                                            <span>Overweight</span>
                                            <span>Obese</span>
                                        </div>
                                        <div className="h-4 rounded-full overflow-hidden flex">
                                            <div className="bg-blue-400 flex-1"></div>
                                            <div className="bg-green-400 flex-1"></div>
                                            <div className="bg-yellow-400 flex-1"></div>
                                            <div className="bg-red-400 flex-1"></div>
                                        </div>
                                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                                            <span>&lt;18.5</span>
                                            <span>18.5-24.9</span>
                                            <span>25-29.9</span>
                                            <span>&gt;30</span>
                                        </div>
                                    </div>

                                    {/* Advice */}
                                    <div className="bg-white p-4 rounded-xl border border-gray-200">
                                        <div className="flex items-start gap-3">
                                            <Heart className="text-[#20BF55] flex-shrink-0 mt-1" size={20} />
                                            <div>
                                                <h4 className="font-semibold text-[#0B4F6C] mb-1">Health Advice</h4>
                                                <p className="text-gray-600 text-sm">{bmiInfo.advice}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Disclaimer */}
                <p className="text-center text-white/70 text-sm mt-6">
                    *BMI is a general indicator and may not be accurate for athletes, pregnant women, or the elderly.
                    Consult a healthcare professional for personalized advice.
                </p>
            </div>
        </div>
    );
};

export default BMICalculator;
