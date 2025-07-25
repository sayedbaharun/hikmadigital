import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Clock, DollarSign, Users, BarChart3, Download, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface BusinessData {
  industry: string;
  monthlyRevenue: number;
  employeeCount: number;
  currentChallenges: string[];
  location: string;
}

interface ROIResults {
  timeSavings: number;
  costReduction: number;
  revenueIncrease: number;
  totalSavings: number;
  netSavings: number;
  roi: number;
  paybackPeriod: number;
  customerSatisfaction: number;
}

const BusinessROICalculator: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [businessData, setBusinessData] = useState<BusinessData>({
    industry: '',
    monthlyRevenue: 0,
    employeeCount: 0,
    currentChallenges: [],
    location: 'dubai'
  });
  const [results, setResults] = useState<ROIResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const industries = [
    { 
      value: 'restaurant', 
      label: language === 'ar' ? 'مطاعم وضيافة' : 'Restaurant & Hospitality',
      multiplier: { time: 0.45, cost: 0.35, revenue: 0.25 }
    },
    { 
      value: 'retail', 
      label: language === 'ar' ? 'تجارة التجزئة' : 'Retail & E-commerce',
      multiplier: { time: 0.40, cost: 0.30, revenue: 0.20 }
    },
    { 
      value: 'logistics', 
      label: language === 'ar' ? 'لوجستيات ونقل' : 'Logistics & Transportation',
      multiplier: { time: 0.50, cost: 0.40, revenue: 0.30 }
    },
    { 
      value: 'healthcare', 
      label: language === 'ar' ? 'صحة وعافية' : 'Healthcare & Wellness',
      multiplier: { time: 0.35, cost: 0.25, revenue: 0.15 }
    },
    { 
      value: 'realestate', 
      label: language === 'ar' ? 'عقارات' : 'Real Estate',
      multiplier: { time: 0.42, cost: 0.32, revenue: 0.28 }
    },
    { 
      value: 'consulting', 
      label: language === 'ar' ? 'خدمات مهنية' : 'Professional Services',
      multiplier: { time: 0.55, cost: 0.45, revenue: 0.35 }
    }
  ];

  const challenges = [
    { value: 'customer-service', label: language === 'ar' ? 'خدمة العملاء' : 'Customer Service' },
    { value: 'inventory', label: language === 'ar' ? 'إدارة المخزون' : 'Inventory Management' },
    { value: 'staffing', label: language === 'ar' ? 'إدارة الموظفين' : 'Staff Management' },
    { value: 'marketing', label: language === 'ar' ? 'التسويق' : 'Marketing' },
    { value: 'operations', label: language === 'ar' ? 'العمليات' : 'Operations' },
    { value: 'finance', label: language === 'ar' ? 'المالية' : 'Finance' }
  ];

  const calculateROI = (): ROIResults => {
    const industry = industries.find(i => i.value === businessData.industry);
    if (!industry || !businessData.monthlyRevenue) {
      return {
        timeSavings: 0,
        costReduction: 0,
        revenueIncrease: 0,
        totalSavings: 0,
        netSavings: 0,
        roi: 0,
        paybackPeriod: 0,
        customerSatisfaction: 0
      };
    }

    const { multiplier } = industry;
    const challengeBonus = businessData.currentChallenges.length * 0.05;
    const employeeBonus = Math.min(businessData.employeeCount / 50, 0.2);
    
    // Base calculations with Dubai market adjustments
    const dubaiMultiplier = 1.15; // Dubai premium market factor
    
    const timeSavings = Math.round(
      businessData.monthlyRevenue * multiplier.time * dubaiMultiplier * (1 + challengeBonus + employeeBonus)
    );
    
    const costReduction = Math.round(
      businessData.monthlyRevenue * multiplier.cost * dubaiMultiplier * (1 + challengeBonus)
    );
    
    const revenueIncrease = Math.round(
      businessData.monthlyRevenue * multiplier.revenue * dubaiMultiplier * (1 + employeeBonus)
    );
    
    const totalSavings = timeSavings + costReduction + revenueIncrease;
    const hikmaSubscription = 1499; // AED per month
    const netSavings = totalSavings - hikmaSubscription;
    const roi = ((netSavings / hikmaSubscription) * 100);
    const paybackPeriod = Math.max(1, Math.round(hikmaSubscription / (totalSavings / 12)));
    const customerSatisfaction = Math.min(98, Math.round(85 + (multiplier.time * 20) + challengeBonus * 10));

    return {
      timeSavings,
      costReduction,
      revenueIncrease,
      totalSavings,
      netSavings,
      roi,
      paybackPeriod,
      customerSatisfaction
    };
  };

  const handleCalculate = async () => {
    if (!businessData.industry || !businessData.monthlyRevenue) return;
    
    setIsCalculating(true);
    
    // Simulate calculation time for better UX
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const calculatedResults = calculateROI();
    setResults(calculatedResults);
    setIsCalculating(false);
  };

  const handleChallengeToggle = (challenge: string) => {
    setBusinessData(prev => ({
      ...prev,
      currentChallenges: prev.currentChallenges.includes(challenge)
        ? prev.currentChallenges.filter(c => c !== challenge)
        : [...prev.currentChallenges, challenge]
    }));
  };

  const downloadReport = () => {
    if (!results) return;
    
    const reportData = {
      business: businessData,
      results: results,
      timestamp: new Date().toISOString(),
      platform: 'Hikma Digital - UAE Charter Certified'
    };
    
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hikma-roi-analysis-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calculator Input */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 bg-primary-500/20 rounded-lg mr-4 rtl:ml-4 rtl:mr-0">
              <Calculator className="w-6 h-6 text-primary-400" />
            </div>
            <h3 className={`text-2xl font-medium text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'احسب عائد الاستثمار' : 'Calculate Your ROI'}
            </h3>
          </div>

          <div className="space-y-6">
            {/* Industry Selection */}
            <div>
              <label className={`block text-sm font-medium text-gray-300 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'نوع العمل' : 'Business Type'}
              </label>
              <select
                value={businessData.industry}
                onChange={(e) => setBusinessData(prev => ({ ...prev, industry: e.target.value }))}
                className={`w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}
              >
                <option value="">
                  {language === 'ar' ? 'اختر نوع العمل' : 'Select Business Type'}
                </option>
                {industries.map((industry) => (
                  <option key={industry.value} value={industry.value}>
                    {industry.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Monthly Revenue */}
            <div>
              <label className={`block text-sm font-medium text-gray-300 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'الإيرادات الشهرية (درهم)' : 'Monthly Revenue (AED)'}
              </label>
              <div className="relative">
                <DollarSign className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} w-5 h-5 text-gray-400`} />
                <input
                  type="number"
                  value={businessData.monthlyRevenue || ''}
                  onChange={(e) => setBusinessData(prev => ({ ...prev, monthlyRevenue: Number(e.target.value) }))}
                  className={`w-full ${isRTL ? 'pr-10' : 'pl-10'} py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white`}
                  placeholder="50000"
                  min="1000"
                  max="10000000"
                />
              </div>
              <input
                type="range"
                value={businessData.monthlyRevenue}
                onChange={(e) => setBusinessData(prev => ({ ...prev, monthlyRevenue: Number(e.target.value) }))}
                min="10000"
                max="1000000"
                step="5000"
                className="w-full mt-2 accent-primary-600"
              />
            </div>

            {/* Employee Count */}
            <div>
              <label className={`block text-sm font-medium text-gray-300 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'عدد الموظفين' : 'Number of Employees'}
              </label>
              <div className="relative">
                <Users className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} w-5 h-5 text-gray-400`} />
                <input
                  type="number"
                  value={businessData.employeeCount || ''}
                  onChange={(e) => setBusinessData(prev => ({ ...prev, employeeCount: Number(e.target.value) }))}
                  className={`w-full ${isRTL ? 'pr-10' : 'pl-10'} py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white`}
                  placeholder="10"
                  min="1"
                  max="1000"
                />
              </div>
              <input
                type="range"
                value={businessData.employeeCount}
                onChange={(e) => setBusinessData(prev => ({ ...prev, employeeCount: Number(e.target.value) }))}
                min="1"
                max="100"
                className="w-full mt-2 accent-primary-600"
              />
            </div>

            {/* Current Challenges */}
            <div>
              <label className={`block text-sm font-medium text-gray-300 mb-3 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'التحديات الحالية' : 'Current Challenges'}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {challenges.map((challenge) => (
                  <button
                    key={challenge.value}
                    onClick={() => handleChallengeToggle(challenge.value)}
                    className={`p-3 rounded-lg text-sm transition-all ${
                      businessData.currentChallenges.includes(challenge.value)
                        ? 'bg-primary-500/20 border border-primary-500/50 text-primary-300'
                        : 'bg-gray-800/50 border border-gray-700 text-gray-400 hover:bg-gray-700/50'
                    } ${isRTL ? 'font-arabic' : 'font-inter'}`}
                  >
                    {challenge.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Calculate Button */}
            <button
              onClick={handleCalculate}
              disabled={!businessData.industry || !businessData.monthlyRevenue || isCalculating}
              className={`w-full py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-medium rounded-lg shadow-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed ${isRTL ? 'font-arabic' : 'font-inter'}`}
            >
              {isCalculating ? (
                <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>{language === 'ar' ? 'جاري الحساب...' : 'Calculating...'}</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                  <BarChart3 className="w-5 h-5" />
                  <span>{language === 'ar' ? 'احسب العائد على الاستثمار' : 'Calculate ROI'}</span>
                </div>
              )}
            </button>
          </div>
        </motion.div>

        {/* Results Display */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: results ? 1 : 0.3, x: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-2xl font-medium text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'نتائج التوقعات' : 'Projected Results'}
            </h3>
            {results && (
              <button
                onClick={downloadReport}
                className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-accent-500/20 text-accent-400 rounded-lg hover:bg-accent-500/30 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span className={`text-sm ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'تحميل التقرير' : 'Download Report'}
                </span>
              </button>
            )}
          </div>

          {results ? (
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Clock className="w-5 h-5 text-green-400" />
                    <span className="text-2xl font-bold text-green-400">
                      {results.timeSavings.toLocaleString()} AED
                    </span>
                  </div>
                  <p className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'توفير الوقت شهرياً' : 'Monthly Time Savings'}
                  </p>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <DollarSign className="w-5 h-5 text-blue-400" />
                    <span className="text-2xl font-bold text-blue-400">
                      {results.costReduction.toLocaleString()} AED
                    </span>
                  </div>
                  <p className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'تقليل التكاليف شهرياً' : 'Monthly Cost Reduction'}
                  </p>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                    <span className="text-2xl font-bold text-purple-400">
                      {results.revenueIncrease.toLocaleString()} AED
                    </span>
                  </div>
                  <p className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'زيادة الإيرادات شهرياً' : 'Monthly Revenue Increase'}
                  </p>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Users className="w-5 h-5 text-yellow-400" />
                    <span className="text-2xl font-bold text-yellow-400">
                      {results.customerSatisfaction}%
                    </span>
                  </div>
                  <p className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'رضا العملاء' : 'Customer Satisfaction'}
                  </p>
                </div>
              </div>

              {/* Total ROI */}
              <div className="bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-lg p-6">
                <div className="text-center">
                  <div className={`text-sm font-medium mb-2 text-primary-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'إجمالي العائد الشهري' : 'Total Monthly ROI'}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {results.netSavings.toLocaleString()} AED
                  </div>
                  <div className="text-2xl font-medium text-accent-400 mb-3">
                    {results.roi.toFixed(1)}% ROI
                  </div>
                  <div className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' 
                      ? `استرداد الاستثمار في ${results.paybackPeriod} شهر`
                      : `Payback in ${results.paybackPeriod} months`
                    }
                  </div>
                </div>
              </div>

              {/* UAE Charter Compliance */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <div className="flex items-center space-x-2 rtl:space-x-reverse mb-3">
                  <Sparkles className="w-5 h-5 text-green-400" />
                  <span className={`font-medium text-green-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'ضمان ميثاق الإمارات' : 'UAE Charter Guarantee'}
                  </span>
                </div>
                <p className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar'
                    ? 'جميع النتائج محققة مع الامتثال الكامل لمبادئ ميثاق الإمارات للذكاء الاصطناعي'
                    : 'All results achieved with full compliance to UAE AI Charter principles'
                  }
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-12">
              <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className={`text-lg ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' 
                  ? 'أدخل بيانات عملك لرؤية النتائج المتوقعة'
                  : 'Enter your business details to see projected results'
                }
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessROICalculator;