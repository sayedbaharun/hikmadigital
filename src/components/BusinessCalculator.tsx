import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Clock, DollarSign, Users, BarChart3 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BusinessCalculator: React.FC = () => {
  const { t, isRTL, language } = useLanguage();
  const [businessType, setBusinessType] = useState('restaurant');
  const [employees, setEmployees] = useState(10);
  const [revenue, setRevenue] = useState(50000);
  const [showResults, setShowResults] = useState(false);

  const businessTypes = [
    { value: 'restaurant', label: t('business.restaurant'), multiplier: 1.2 },
    { value: 'retail', label: t('business.retail'), multiplier: 1.1 },
    { value: 'logistics', label: t('business.logistics'), multiplier: 1.4 },
    { value: 'realestate', label: t('business.realestate'), multiplier: 1.3 },
    { value: 'consulting', label: t('business.consulting'), multiplier: 1.5 },
    { value: 'hospitality', label: t('business.hospitality'), multiplier: 1.2 }
  ];

  const calculateROI = () => {
    const selectedBusiness = businessTypes.find(b => b.value === businessType);
    const multiplier = selectedBusiness?.multiplier || 1;
    
    // Base calculations
    const timeSavings = Math.round((employees * 8 * multiplier)); // Hours per month
    const costReduction = Math.round((revenue * 0.15 * multiplier)); // AED per month
    const revenueIncrease = Math.round((revenue * 0.25 * multiplier)); // AED per month
    const customerSatisfaction = Math.min(95, Math.round(75 + (multiplier * 10))); // Percentage
    
    return {
      timeSavings,
      costReduction,
      revenueIncrease,
      customerSatisfaction,
      totalROI: costReduction + revenueIncrease,
      paybackPeriod: Math.max(1, Math.round(6 / multiplier))
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const results = calculateROI();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calculator Input */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 bg-primary-50 rounded-lg mr-4 rtl:ml-4 rtl:mr-0">
              <Calculator className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className={`text-2xl font-bold text-gray-900 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'احسب عائد الاستثمار' : 'Calculate Your ROI'}
            </h3>
          </div>

          <div className="space-y-6">
            {/* Business Type */}
            <div>
              <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {t('calc.business-type')}
              </label>
              <select
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${isRTL ? 'font-arabic' : 'font-inter'}`}
              >
                {businessTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Number of Employees */}
            <div>
              <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {t('calc.employees')}
              </label>
              <div className="relative">
                <Users className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} w-5 h-5 text-gray-400`} />
                <input
                  type="number"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className={`w-full ${isRTL ? 'pr-10' : 'pl-10'} py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                  min="1"
                  max="1000"
                />
              </div>
              <input
                type="range"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                min="1"
                max="100"
                className="w-full mt-2 accent-primary-600"
              />
            </div>

            {/* Monthly Revenue */}
            <div>
              <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {t('calc.revenue')}
              </label>
              <div className="relative">
                <DollarSign className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} w-5 h-5 text-gray-400`} />
                <input
                  type="number"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className={`w-full ${isRTL ? 'pr-10' : 'pl-10'} py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                  min="1000"
                  max="1000000"
                  step="1000"
                />
              </div>
              <input
                type="range"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                min="10000"
                max="500000"
                step="5000"
                className="w-full mt-2 accent-primary-600"
              />
            </div>

            {/* Calculate Button */}
            <button
              onClick={handleCalculate}
              className={`w-full py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition-opacity ${isRTL ? 'font-arabic' : 'font-inter'}`}
            >
              <BarChart3 className={`w-5 h-5 inline ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('calc.calculate')}
            </button>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showResults ? 1 : 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl shadow-xl p-8"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 bg-success-100 rounded-lg mr-4 rtl:ml-4 rtl:mr-0">
              <TrendingUp className="w-6 h-6 text-success-600" />
            </div>
            <h3 className={`text-2xl font-bold text-gray-900 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'نتائج التوقعات' : 'Projected Results'}
            </h3>
          </div>

          {showResults ? (
            <div className="space-y-6">
              {/* Time Savings */}
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-primary-600 mr-2 rtl:ml-2 rtl:mr-0" />
                    <span className={`font-medium text-gray-700 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'توفير الوقت' : 'Time Savings'}
                    </span>
                  </div>
                  <span className="text-2xl font-bold text-primary-600">
                    {results.timeSavings}h
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  {language === 'ar' ? 'ساعة شهرياً' : 'hours per month'}
                </div>
              </div>

              {/* Cost Reduction */}
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-success-600 mr-2 rtl:ml-2 rtl:mr-0" />
                    <span className={`font-medium text-gray-700 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'تقليل التكاليف' : 'Cost Reduction'}
                    </span>
                  </div>
                  <span className="text-2xl font-bold text-success-600">
                    {results.costReduction.toLocaleString()} AED
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  {language === 'ar' ? 'درهم شهرياً' : 'per month'}
                </div>
              </div>

              {/* Revenue Increase */}
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-accent-600 mr-2 rtl:ml-2 rtl:mr-0" />
                    <span className={`font-medium text-gray-700 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {language === 'ar' ? 'زيادة الإيرادات' : 'Revenue Increase'}
                    </span>
                  </div>
                  <span className="text-2xl font-bold text-accent-600">
                    {results.revenueIncrease.toLocaleString()} AED
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  {language === 'ar' ? 'درهم شهرياً' : 'per month'}
                </div>
              </div>

              {/* Total ROI */}
              <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg p-4 text-white">
                <div className="text-center">
                  <div className={`text-sm font-medium mb-1 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'إجمالي العائد الشهري' : 'Total Monthly ROI'}
                  </div>
                  <div className="text-4xl font-bold">
                    {results.totalROI.toLocaleString()} AED
                  </div>
                  <div className={`text-sm opacity-90 mt-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? `استرداد الاستثمار في ${results.paybackPeriod} أشهر` : `Payback in ${results.paybackPeriod} months`}
                  </div>
                </div>
              </div>

              {/* Customer Satisfaction */}
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-medium text-gray-700 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'رضا العملاء' : 'Customer Satisfaction'}
                  </span>
                  <span className="text-2xl font-bold text-primary-600">
                    {results.customerSatisfaction}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary-600 h-2 rounded-full"
                    style={{ width: `${results.customerSatisfaction}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-12">
              <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className={`text-lg ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'أدخل بيانات عملك لرؤية النتائج' : 'Enter your business details to see results'}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessCalculator;