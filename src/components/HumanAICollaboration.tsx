import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, User, CheckCircle, Clock, AlertCircle, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface AIRecommendation {
  id: number;
  agent: string;
  recommendation: string;
  confidence: number;
  timestamp: Date;
  status: 'pending' | 'approved' | 'modified' | 'rejected';
  humanFeedback?: string;
}

interface HumanCoach {
  id: number;
  name: string;
  role: string;
  avatar: string;
  status: 'online' | 'busy' | 'offline';
  expertise: string[];
}

const HumanAICollaboration: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [aiRecommendations, setAiRecommendations] = useState<AIRecommendation[]>([
    {
      id: 1,
      agent: 'Hikma AI',
      recommendation: language === 'ar' 
        ? 'أنصح بتحسين جدولة الموظفين خلال رمضان مع مراعاة أوقات الإفطار وزيادة الطاقم بنسبة 30% خلال ساعات الذروة'
        : 'Recommend optimizing staff scheduling during Ramadan considering Iftar times and increasing staff by 30% during peak hours',
      confidence: 94,
      timestamp: new Date(Date.now() - 2 * 60 * 1000),
      status: 'pending'
    },
    {
      id: 2,
      agent: 'Omar AI',
      recommendation: language === 'ar'
        ? 'تحليل البيانات يظهر إمكانية تقليل تكاليف التوصيل بنسبة 25% من خلال تحسين المسارات وتجميع الطلبات'
        : 'Data analysis shows potential 25% delivery cost reduction through route optimization and order batching',
      confidence: 87,
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      status: 'approved',
      humanFeedback: language === 'ar' 
        ? 'موافق مع إضافة شراكة مع شركات التوصيل المحلية'
        : 'Approved with addition of local delivery company partnerships'
    }
  ]);

  const [humanCoaches] = useState<HumanCoach[]>([
    {
      id: 1,
      name: language === 'ar' ? 'سارة الراشد' : 'Sarah Al-Rashid',
      role: language === 'ar' ? 'كبيرة مدربي الأعمال' : 'Lead Business Coach',
      avatar: 'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      status: 'online',
      expertise: ['Dubai Market', 'Government Relations', 'Cultural Intelligence']
    },
    {
      id: 2,
      name: language === 'ar' ? 'أحمد حسن' : 'Ahmed Hassan',
      role: language === 'ar' ? 'أخصائي العمليات' : 'Operations Specialist',
      avatar: 'https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      status: 'online',
      expertise: ['Process Optimization', 'Logistics', 'Supply Chain']
    }
  ]);

  const handleRecommendationAction = (id: number, action: 'approved' | 'modified' | 'rejected', feedback?: string) => {
    setAiRecommendations(prev => prev.map(rec => 
      rec.id === id 
        ? { ...rec, status: action, humanFeedback: feedback }
        : rec
    ));
  };

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const newRecommendation: AIRecommendation = {
          id: Date.now(),
          agent: ['Hikma AI', 'Omar AI', 'Layla AI'][Math.floor(Math.random() * 3)],
          recommendation: language === 'ar'
            ? 'توصية جديدة من الذكاء الاصطناعي بناءً على تحليل البيانات الحديثة'
            : 'New AI recommendation based on latest data analysis',
          confidence: Math.floor(Math.random() * 20) + 80,
          timestamp: new Date(),
          status: 'pending'
        };
        setAiRecommendations(prev => [newRecommendation, ...prev.slice(0, 4)]);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, [language]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* AI Recommendations Panel */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className={`text-xl font-medium text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'توصيات الذكاء الاصطناعي' : 'AI Recommendations'}
          </h3>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-purple-400">
              {language === 'ar' ? 'نشط' : 'Active'}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {aiRecommendations.map((recommendation) => (
            <motion.div
              key={recommendation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`border rounded-lg p-4 ${
                recommendation.status === 'pending' 
                  ? 'bg-purple-500/10 border-purple-500/30'
                  : recommendation.status === 'approved'
                  ? 'bg-green-500/10 border-green-500/30'
                  : recommendation.status === 'modified'
                  ? 'bg-yellow-500/10 border-yellow-500/30'
                  : 'bg-red-500/10 border-red-500/30'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Bot className="w-4 h-4 text-purple-400" />
                  <span className={`text-sm font-medium text-purple-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {recommendation.agent}
                  </span>
                  <span className="text-xs text-gray-400">
                    {recommendation.confidence}% {language === 'ar' ? 'ثقة' : 'confidence'}
                  </span>
                </div>
                <span className="text-xs text-gray-400">
                  {recommendation.timestamp.toLocaleTimeString()}
                </span>
              </div>

              <p className={`text-gray-300 mb-4 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {recommendation.recommendation}
              </p>

              {recommendation.status === 'pending' ? (
                <div className="flex space-x-2 rtl:space-x-reverse">
                  <button
                    onClick={() => handleRecommendationAction(recommendation.id, 'approved')}
                    className={`bg-green-600/20 text-green-400 px-3 py-1 rounded text-sm hover:bg-green-600/30 transition-colors ${isRTL ? 'font-arabic' : 'font-inter'}`}
                  >
                    {language === 'ar' ? 'موافق' : 'Approve'}
                  </button>
                  <button
                    onClick={() => handleRecommendationAction(recommendation.id, 'modified', 'Modified with local market insights')}
                    className={`bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded text-sm hover:bg-yellow-600/30 transition-colors ${isRTL ? 'font-arabic' : 'font-inter'}`}
                  >
                    {language === 'ar' ? 'تعديل' : 'Modify'}
                  </button>
                  <button
                    onClick={() => handleRecommendationAction(recommendation.id, 'rejected')}
                    className={`bg-red-600/20 text-red-400 px-3 py-1 rounded text-sm hover:bg-red-600/30 transition-colors ${isRTL ? 'font-arabic' : 'font-inter'}`}
                  >
                    {language === 'ar' ? 'رفض' : 'Reject'}
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  {recommendation.status === 'approved' && <CheckCircle className="w-4 h-4 text-green-400" />}
                  {recommendation.status === 'modified' && <AlertCircle className="w-4 h-4 text-yellow-400" />}
                  {recommendation.status === 'rejected' && <AlertCircle className="w-4 h-4 text-red-400" />}
                  <span className={`text-sm ${
                    recommendation.status === 'approved' ? 'text-green-400' :
                    recommendation.status === 'modified' ? 'text-yellow-400' : 'text-red-400'
                  } ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {recommendation.status === 'approved' && (language === 'ar' ? 'تمت الموافقة' : 'Approved')}
                    {recommendation.status === 'modified' && (language === 'ar' ? 'تم التعديل' : 'Modified')}
                    {recommendation.status === 'rejected' && (language === 'ar' ? 'تم الرفض' : 'Rejected')}
                  </span>
                </div>
              )}

              {recommendation.humanFeedback && (
                <div className="mt-3 p-3 bg-blue-500/10 border border-blue-500/30 rounded">
                  <p className={`text-sm text-blue-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {recommendation.humanFeedback}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Human Coach Oversight Panel */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className={`text-xl font-medium text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'إشراف المدربين البشريين' : 'Human Coach Oversight'}
          </h3>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Eye className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-blue-400">
              {language === 'ar' ? 'مراقبة مستمرة' : 'Live Monitoring'}
            </span>
          </div>
        </div>

        <div className="space-y-6">
          {humanCoaches.map((coach) => (
            <div key={coach.id} className="border border-gray-700 rounded-lg p-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                <img 
                  src={coach.avatar} 
                  alt={coach.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className={`font-medium text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {coach.name}
                  </h4>
                  <p className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {coach.role}
                  </p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  coach.status === 'online' 
                    ? 'bg-green-500/20 text-green-400'
                    : coach.status === 'busy'
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : 'bg-gray-500/20 text-gray-400'
                }`}>
                  {coach.status === 'online' && (language === 'ar' ? 'متاح' : 'Online')}
                  {coach.status === 'busy' && (language === 'ar' ? 'مشغول' : 'Busy')}
                  {coach.status === 'offline' && (language === 'ar' ? 'غير متاح' : 'Offline')}
                </span>
              </div>

              <div className="mb-4">
                <p className={`text-sm text-gray-400 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'مجالات الخبرة:' : 'Expertise Areas:'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {coach.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded p-3">
                <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className={`text-sm font-medium text-green-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'آخر مراجعة' : 'Latest Review'}
                  </span>
                </div>
                <p className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar'
                    ? 'تمت مراجعة توصيات الذكاء الاصطناعي وإضافة السياق الثقافي المحلي والشراكات الحكومية المناسبة.'
                    : 'Reviewed AI recommendations and added local cultural context and appropriate government partnerships.'
                  }
                </p>
                <span className="text-xs text-gray-400 mt-2 block">
                  {language === 'ar' ? 'منذ 3 دقائق' : '3 minutes ago'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Collaboration Stats */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-blue-500/10 rounded-lg">
            <div className="text-2xl font-bold text-blue-400">94%</div>
            <div className={`text-xs text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'دقة الذكاء الاصطناعي' : 'AI Accuracy'}
            </div>
          </div>
          <div className="text-center p-3 bg-green-500/10 rounded-lg">
            <div className="text-2xl font-bold text-green-400">2.3s</div>
            <div className={`text-xs text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'وقت الاستجابة' : 'Response Time'}
            </div>
          </div>
          <div className="text-center p-3 bg-purple-500/10 rounded-lg">
            <div className="text-2xl font-bold text-purple-400">100%</div>
            <div className={`text-xs text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'إشراف بشري' : 'Human Oversight'}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HumanAICollaboration;