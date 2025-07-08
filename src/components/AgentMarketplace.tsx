import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Users, 
  TrendingUp, 
  Calculator, 
  Truck,
  Zap,
  Network,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Agent {
  id: string;
  name: string;
  nameAr: string;
  icon: React.ReactNode;
  specialization: string;
  specializationAr: string;
  capabilities: string[];
  capabilitiesAr: string[];
  performance: {
    accuracy: number;
    responseTime: string;
    tasksCompleted: number;
    satisfaction: number;
  };
  status: 'active' | 'busy' | 'learning';
  gradient: string;
}

const AgentMarketplace: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [showCollaboration, setShowCollaboration] = useState(false);

  const agents: Agent[] = [
    {
      id: 'sales',
      name: 'Majid',
      nameAr: 'ماجد',
      icon: <TrendingUp className="w-6 h-6" />,
      specialization: 'Sales & Customer Engagement',
      specializationAr: 'المبيعات وإشراك العملاء',
      capabilities: [
        'Lead qualification & scoring',
        'Customer inquiry handling',
        'Product recommendations',
        'Price negotiations',
        'Follow-up automation'
      ],
      capabilitiesAr: [
        'تأهيل وتسجيل العملاء المحتملين',
        'التعامل مع استفسارات العملاء',
        'توصيات المنتجات',
        'مفاوضات الأسعار',
        'أتمتة المتابعة'
      ],
      performance: {
        accuracy: 94,
        responseTime: '< 1s',
        tasksCompleted: 2847,
        satisfaction: 96
      },
      status: 'active',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'hr',
      name: 'Layla',
      nameAr: 'ليلى',
      icon: <Users className="w-6 h-6" />,
      specialization: 'HR & Employee Management',
      specializationAr: 'الموارد البشرية وإدارة الموظفين',
      capabilities: [
        'Employee onboarding',
        'Leave management',
        'Performance tracking',
        'Payroll assistance',
        'Training coordination'
      ],
      capabilitiesAr: [
        'إعداد الموظفين الجدد',
        'إدارة الإجازات',
        'تتبع الأداء',
        'المساعدة في كشوف المرتبات',
        'تنسيق التدريب'
      ],
      performance: {
        accuracy: 97,
        responseTime: '< 2s',
        tasksCompleted: 1523,
        satisfaction: 94
      },
      status: 'active',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'marketing',
      name: 'Yasmin',
      nameAr: 'ياسمين',
      icon: <Zap className="w-6 h-6" />,
      specialization: 'Marketing & Content Creation',
      specializationAr: 'التسويق وإنشاء المحتوى',
      capabilities: [
        'Social media content generation',
        'Campaign management',
        'SEO optimization',
        'Email marketing',
        'Analytics reporting'
      ],
      capabilitiesAr: [
        'إنشاء محتوى وسائل التواصل الاجتماعي',
        'إدارة الحملات',
        'تحسين محركات البحث',
        'التسويق عبر البريد الإلكتروني',
        'تقارير التحليلات'
      ],
      performance: {
        accuracy: 92,
        responseTime: '< 3s',
        tasksCompleted: 3156,
        satisfaction: 95
      },
      status: 'busy',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'finance',
      name: 'Omar',
      nameAr: 'عمر',
      icon: <Calculator className="w-6 h-6" />,
      specialization: 'Finance & Accounting',
      specializationAr: 'المالية والمحاسبة',
      capabilities: [
        'Invoice generation',
        'Expense tracking',
        'Financial reporting',
        'Budget planning',
        'Tax compliance assistance'
      ],
      capabilitiesAr: [
        'إنشاء الفواتير',
        'تتبع المصروفات',
        'التقارير المالية',
        'تخطيط الميزانية',
        'المساعدة في الامتثال الضريبي'
      ],
      performance: {
        accuracy: 99,
        responseTime: '< 2s',
        tasksCompleted: 1892,
        satisfaction: 98
      },
      status: 'active',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'operations',
      name: 'Rashid',
      nameAr: 'راشد',
      icon: <Truck className="w-6 h-6" />,
      specialization: 'Operations & Logistics',
      specializationAr: 'العمليات واللوجستيات',
      capabilities: [
        'Inventory management',
        'Supply chain optimization',
        'Delivery scheduling',
        'Warehouse automation',
        'Quality control'
      ],
      capabilitiesAr: [
        'إدارة المخزون',
        'تحسين سلسلة التوريد',
        'جدولة التسليم',
        'أتمتة المستودعات',
        'مراقبة الجودة'
      ],
      performance: {
        accuracy: 95,
        responseTime: '< 1s',
        tasksCompleted: 2134,
        satisfaction: 93
      },
      status: 'learning',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const collaborationExamples = [
    {
      title: language === 'ar' ? 'حملة رمضان المتكاملة' : 'Integrated Ramadan Campaign',
      agents: ['marketing', 'sales', 'operations'],
      description: language === 'ar' 
        ? 'ياسمين تنشئ محتوى رمضاني، ماجد يستهدف العملاء، وراشد يضمن توفر المخزون'
        : 'Yasmin creates Ramadan content, Majid targets customers, and Rashid ensures inventory availability'
    },
    {
      title: language === 'ar' ? 'إعداد موظف جديد' : 'New Employee Onboarding',
      agents: ['hr', 'finance', 'operations'],
      description: language === 'ar'
        ? 'ليلى تدير الإعداد، عمر يعد كشوف المرتبات، وراشد يوفر الأدوات المطلوبة'
        : 'Layla manages onboarding, Omar sets up payroll, and Rashid provides required tools'
    },
    {
      title: language === 'ar' ? 'توسع الأعمال' : 'Business Expansion',
      agents: ['finance', 'marketing', 'sales'],
      description: language === 'ar'
        ? 'عمر يحلل الجدوى المالية، ياسمين تطور استراتيجية السوق، وماجد يقود المبيعات'
        : 'Omar analyzes financial feasibility, Yasmin develops market strategy, and Majid leads sales efforts'
    }
  ];

  return (
    <div className="py-12">
      {/* Agent Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {agents.map((agent, index) => (
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            onClick={() => setSelectedAgent(agent)}
            className={`glass-card p-6 cursor-pointer hover:bg-white/10 transition-all duration-300 relative overflow-hidden`}
          >
            {/* Status Indicator */}
            <div className="absolute top-4 right-4">
              <div className={`flex items-center space-x-1 rtl:space-x-reverse text-xs ${
                agent.status === 'active' ? 'text-green-400' : 
                agent.status === 'busy' ? 'text-yellow-400' : 'text-blue-400'
              }`}>
                <div className={`w-2 h-2 rounded-full ${
                  agent.status === 'active' ? 'bg-green-400' : 
                  agent.status === 'busy' ? 'bg-yellow-400' : 'bg-blue-400'
                } animate-pulse`} />
                <span>{
                  agent.status === 'active' ? (language === 'ar' ? 'نشط' : 'Active') :
                  agent.status === 'busy' ? (language === 'ar' ? 'مشغول' : 'Busy') :
                  (language === 'ar' ? 'يتعلم' : 'Learning')
                }</span>
              </div>
            </div>

            {/* Agent Header */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <div className={`p-3 bg-gradient-to-r ${agent.gradient} rounded-lg`}>
                {agent.icon}
              </div>
              <div>
                <h3 className={`text-lg font-medium text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? agent.nameAr : agent.name}
                </h3>
                <p className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? agent.specializationAr : agent.specialization}
                </p>
              </div>
            </div>

            {/* Capabilities Preview */}
            <div className="space-y-2 mb-4">
              {(language === 'ar' ? agent.capabilitiesAr : agent.capabilities).slice(0, 3).map((capability, idx) => (
                <div key={idx} className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                  <span className={`text-xs text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {capability}
                  </span>
                </div>
              ))}
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-700">
              <div>
                <p className="text-xs text-gray-400">{language === 'ar' ? 'الدقة' : 'Accuracy'}</p>
                <p className="text-lg font-medium text-white">{agent.performance.accuracy}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">{language === 'ar' ? 'الاستجابة' : 'Response'}</p>
                <p className="text-lg font-medium text-white">{agent.performance.responseTime}</p>
              </div>
            </div>

            {/* Try Me Button */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedAgent(agent);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`mt-4 w-full py-2 px-4 bg-gradient-to-r ${agent.gradient} text-white font-medium rounded-lg flex items-center justify-center space-x-2 rtl:space-x-reverse hover:shadow-lg transition-all duration-300`}
            >
              <Sparkles className="w-4 h-4" />
              <span className={`${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'جرّبني' : 'Try Me'}
              </span>
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Agent Collaboration Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mb-16"
      >
        <h3 className={`text-2xl font-medium text-white mb-8 text-center ${isRTL ? 'font-arabic' : 'font-inter'}`}>
          {language === 'ar' ? 'شبكة التعاون بين الوكلاء' : 'Agent Collaboration Network'}
        </h3>

        {/* Network Visualization */}
        <div className="relative h-64 mb-8 glass-card p-8 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full">
            {/* Connection lines */}
            <motion.line
              x1="20%" y1="50%" x2="50%" y2="50%"
              stroke="url(#gradient1)" strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.line
              x1="50%" y1="50%" x2="80%" y2="50%"
              stroke="url(#gradient2)" strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
            />
            <motion.line
              x1="50%" y1="20%" x2="50%" y2="50%"
              stroke="url(#gradient3)" strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1, repeat: Infinity }}
            />
            <motion.line
              x1="50%" y1="50%" x2="50%" y2="80%"
              stroke="url(#gradient4)" strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
            />
            
            <defs>
              <linearGradient id="gradient1">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
              <linearGradient id="gradient2">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
              <linearGradient id="gradient3">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#34D399" />
              </linearGradient>
              <linearGradient id="gradient4">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#EF4444" />
              </linearGradient>
            </defs>
          </svg>

          {/* Agent Nodes */}
          <div className="absolute left-[20%] top-1/2 -translate-y-1/2 -translate-x-1/2">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="absolute right-[20%] top-1/2 -translate-y-1/2 translate-x-1/2">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="absolute left-1/2 top-[20%] -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="absolute left-1/2 bottom-[20%] -translate-x-1/2 translate-y-1/2">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
              <Calculator className="w-8 h-8 text-white" />
            </div>
          </div>
          
          {/* Central Hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Network className="w-10 h-10 text-white" />
            </motion.div>
          </div>
        </div>

        {/* Collaboration Examples */}
        <div className="grid md:grid-cols-3 gap-6">
          {collaborationExamples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="glass-card p-6 hover:bg-white/10 transition-all duration-300"
            >
              <h4 className={`text-lg font-medium text-white mb-3 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {example.title}
              </h4>
              <p className={`text-sm text-gray-300 mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {example.description}
              </p>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                {example.agents.map((agentId) => {
                  const agent = agents.find(a => a.id === agentId);
                  return agent ? (
                    <div key={agentId} className={`p-2 bg-gradient-to-r ${agent.gradient} rounded-lg`}>
                      {agent.icon}
                    </div>
                  ) : null;
                })}
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Agent Detail Modal */}
      {selectedAgent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedAgent(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-900 border border-gray-800 rounded-xl p-8 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className={`p-4 bg-gradient-to-r ${selectedAgent.gradient} rounded-lg`}>
                  {selectedAgent.icon}
                </div>
                <div>
                  <h2 className={`text-2xl font-medium text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? selectedAgent.nameAr : selectedAgent.name}
                  </h2>
                  <p className={`text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? selectedAgent.specializationAr : selectedAgent.specialization}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedAgent(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className={`text-lg font-medium text-white mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'القدرات' : 'Capabilities'}
                </h3>
                <div className="space-y-2">
                  {(language === 'ar' ? selectedAgent.capabilitiesAr : selectedAgent.capabilities).map((capability, idx) => (
                    <div key={idx} className="flex items-center space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {capability}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className={`text-lg font-medium text-white mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'مقاييس الأداء' : 'Performance Metrics'}
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-400">{language === 'ar' ? 'الدقة' : 'Accuracy'}</span>
                      <span className="text-sm text-white">{selectedAgent.performance.accuracy}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${selectedAgent.gradient} h-2 rounded-full`}
                        style={{ width: `${selectedAgent.performance.accuracy}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-400">{language === 'ar' ? 'رضا العملاء' : 'Satisfaction'}</span>
                      <span className="text-sm text-white">{selectedAgent.performance.satisfaction}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${selectedAgent.gradient} h-2 rounded-full`}
                        style={{ width: `${selectedAgent.performance.satisfaction}%` }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="text-center">
                      <p className="text-2xl font-medium text-white">{selectedAgent.performance.tasksCompleted}</p>
                      <p className="text-xs text-gray-400">{language === 'ar' ? 'المهام المكتملة' : 'Tasks Completed'}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-medium text-white">{selectedAgent.performance.responseTime}</p>
                      <p className="text-xs text-gray-400">{language === 'ar' ? 'وقت الاستجابة' : 'Response Time'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default AgentMarketplace;