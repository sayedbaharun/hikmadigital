import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Database, Users, MessageCircle, TrendingUp, Shield, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  supabase, 
  createConversation, 
  addMessage, 
  getCompanyPerformanceDashboard,
  getAIAgentPerformance,
  calculateCompanyROI,
  updateAIReadinessScore
} from '../lib/supabase';

const DatabaseDemo: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [isConnected, setIsConnected] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [performanceData, setPerformanceData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkConnection();
    loadDemoData();
  }, []);

  const checkConnection = async () => {
    // Mock connection for marketing site
    setIsConnected(true);
  };

  const loadDemoData = async () => {
    setLoading(true);
    try {
      // Mock data for marketing site
      setCompanies([
        { id: '1', company_name: 'Demo Restaurant LLC', industry: 'Restaurant', ai_readiness_score: 75 },
        { id: '2', company_name: 'Al Futtaim Retail', industry: 'Retail', ai_readiness_score: 82 },
        { id: '3', company_name: 'Dubai Logistics Co', industry: 'Logistics', ai_readiness_score: 68 }
      ]);

      // Mock conversations
      setConversations([
        { 
          id: '1', 
          title: 'Strategy Discussion', 
          company_id: '1',
          total_messages: 15,
          satisfaction_rating: 4.8
        },
        {
          id: '2',
          title: 'AI Implementation Plan',
          company_id: '2',
          total_messages: 22,
          satisfaction_rating: 4.9
        }
      ]);

      // Mock performance data
      setPerformanceData({
        totalCompanies: 48,
        activeConversations: 127,
        avgROI: 250,
        satisfactionScore: 4.7
      });

    } catch (error) {
      console.error('Error loading demo data:', error);
    } finally {
      setLoading(false);
    }
  };

  const createDemoConversation = async () => {
    // Mock demo for marketing site
    alert(language === 'ar' 
      ? 'هذا عرض توضيحي. في النسخة الكاملة، ستتمكن من إنشاء محادثات حقيقية.'
      : 'This is a demo. In the full version, you\'ll be able to create real conversations.');
  };

  const calculateROIDemo = async () => {
    // Mock ROI calculation for marketing site
    alert(language === 'ar' 
      ? 'عائد الاستثمار المحسوب: 250٪ في 6 أشهر'
      : 'Calculated ROI: 250% in 6 months');
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Connection Status */}
      <div className="mb-8">
        <div className={`flex items-center space-x-3 rtl:space-x-reverse p-4 rounded-lg ${
          isConnected ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'
        }`}>
          <Database className={`w-6 h-6 ${isConnected ? 'text-green-400' : 'text-red-400'}`} />
          <div>
            <h3 className={`font-medium ${isConnected ? 'text-green-400' : 'text-red-400'} ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {isConnected 
                ? (language === 'ar' ? 'متصل بقاعدة البيانات' : 'Database Connected')
                : (language === 'ar' ? 'غير متصل بقاعدة البيانات' : 'Database Disconnected')
              }
            </h3>
            <p className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {isConnected 
                ? (language === 'ar' ? 'Supabase متصل وجاهز للاستخدام' : 'Supabase connected and ready')
                : (language === 'ar' ? 'تحقق من إعدادات Supabase' : 'Check Supabase configuration')
              }
            </p>
          </div>
        </div>
      </div>

      {isConnected && (
        <>
          {/* Demo Actions */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={createDemoConversation}
              className={`p-6 glass-card glass-card-hover text-center transition-all duration-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}
            >
              <MessageCircle className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-medium text-white mb-2">
                {language === 'ar' ? 'إنشاء محادثة تجريبية' : 'Create Demo Conversation'}
              </h3>
              <p className="text-sm text-gray-400">
                {language === 'ar' ? 'اختبر نظام المحادثات' : 'Test conversation system'}
              </p>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={calculateROIDemo}
              className={`p-6 glass-card glass-card-hover text-center transition-all duration-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}
            >
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-lg font-medium text-white mb-2">
                {language === 'ar' ? 'حساب العائد على الاستثمار' : 'Calculate ROI'}
              </h3>
              <p className="text-sm text-gray-400">
                {language === 'ar' ? 'اختبر حسابات الأعمال' : 'Test business calculations'}
              </p>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={loadDemoData}
              className={`p-6 glass-card glass-card-hover text-center transition-all duration-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}
            >
              <Shield className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-medium text-white mb-2">
                {language === 'ar' ? 'تحديث البيانات' : 'Refresh Data'}
              </h3>
              <p className="text-sm text-gray-400">
                {language === 'ar' ? 'إعادة تحميل البيانات' : 'Reload all data'}
              </p>
            </motion.button>
          </div>

          {/* Data Display */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Companies */}
            <div className="glass-card p-6">
              <h3 className={`text-xl font-medium text-white mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'الشركات المسجلة' : 'Registered Companies'}
              </h3>
              {loading ? (
                <div className="animate-pulse space-y-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-16 bg-gray-700 rounded"></div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {companies.map((company: any) => (
                    <div key={company.id} className="p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className={`font-medium text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                            {language === 'ar' && company.company_name_ar ? company.company_name_ar : company.company_name}
                          </h4>
                          <p className="text-sm text-gray-400">{company.industry}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-green-400">
                            {company.ai_readiness_score}% {language === 'ar' ? 'جاهزية' : 'Ready'}
                          </div>
                          <div className="text-xs text-gray-400">
                            AED {company.monthly_revenue?.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Conversations */}
            <div className="glass-card p-6">
              <h3 className={`text-xl font-medium text-white mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'المحادثات الأخيرة' : 'Recent Conversations'}
              </h3>
              {loading ? (
                <div className="animate-pulse space-y-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-16 bg-gray-700 rounded"></div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {conversations.slice(0, 5).map((conversation: any) => (
                    <div key={conversation.id} className="p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className={`font-medium text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                            {conversation.title || (language === 'ar' ? 'محادثة عامة' : 'General Conversation')}
                          </h4>
                          <p className="text-sm text-gray-400">
                            {conversation.messages?.length || 0} {language === 'ar' ? 'رسالة' : 'messages'}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className={`text-xs px-2 py-1 rounded ${
                            conversation.status === 'active' 
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-gray-500/20 text-gray-400'
                          }`}>
                            {conversation.status}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Performance Metrics */}
          {performanceData && performanceData.length > 0 && (
            <div className="mt-8 glass-card p-6">
              <h3 className={`text-xl font-medium text-white mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'مقاييس الأداء' : 'Performance Metrics'}
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-500/10 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">
                    {performanceData.reduce((sum: number, company: any) => sum + (company.total_conversations || 0), 0)}
                  </div>
                  <div className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'إجمالي المحادثات' : 'Total Conversations'}
                  </div>
                </div>
                <div className="text-center p-4 bg-green-500/10 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">
                    {performanceData.reduce((sum: number, company: any) => sum + (company.total_time_saved || 0), 0).toFixed(0)}h
                  </div>
                  <div className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'وقت موفر' : 'Time Saved'}
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-500/10 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">
                    AED {performanceData.reduce((sum: number, company: any) => sum + (company.total_cost_reduction || 0), 0).toLocaleString()}
                  </div>
                  <div className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'توفير التكاليف' : 'Cost Savings'}
                  </div>
                </div>
                <div className="text-center p-4 bg-yellow-500/10 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400">
                    {(performanceData.reduce((sum: number, company: any) => sum + (company.avg_satisfaction || 0), 0) / performanceData.length).toFixed(1)}
                  </div>
                  <div className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'متوسط الرضا' : 'Avg Satisfaction'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Database Schema Info */}
          <div className="mt-8 glass-card p-6">
            <h3 className={`text-xl font-medium text-white mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'مخطط قاعدة البيانات' : 'Database Schema'}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'companies', count: companies.length, icon: Users },
                { name: 'conversations', count: conversations.length, icon: MessageCircle },
                { name: 'ai_agents', count: 3, icon: Shield },
                { name: 'messages', count: conversations.reduce((sum: number, conv: any) => sum + (conv.messages?.length || 0), 0), icon: MessageCircle },
                { name: 'transformations', count: companies.length, icon: TrendingUp },
                { name: 'compliance', count: companies.length, icon: CheckCircle }
              ].map((table) => {
                const IconComponent = table.icon;
                return (
                  <div key={table.name} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <IconComponent className="w-5 h-5 text-primary-400" />
                      <div>
                        <h4 className="font-medium text-white">{table.name}</h4>
                        <p className="text-sm text-gray-400">{table.count} records</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DatabaseDemo;