import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Brain, 
  Users, 
  TrendingUp, 
  MessageSquare, 
  Shield, 
  Zap,
  Plus,
  ArrowRight,
  CheckCircle,
  Star,
  Code,
  Sparkles,
  Workflow,
  Building,
  ShoppingBag,
  Heart,
  Truck,
  DollarSign,
  Clock,
  BarChart3,
  Play,
  Pause,
  RefreshCw,
  Globe,
  Database,
  Link,
  Settings,
  FileText,
  Calendar,
  Mail,
  Phone,
  ChevronRight,
  Award,
  Target,
  Layers,
  GitBranch,
  Activity,
  X
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AgentMarketplace from '../components/AgentMarketplace';

interface AIAgentsProps {
  openContactForm?: (type: 'general' | 'assessment' | 'partnership' | 'licensing') => void;
}

const AIAgents: React.FC<AIAgentsProps> = ({ openContactForm }) => {
  const { isRTL, language } = useLanguage();
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  // Live performance metrics
  const [performanceMetrics, setPerformanceMetrics] = useState({
    activeAgents: 1247,
    tasksCompleted: 45832,
    timeSaved: 2456,
    customerSatisfaction: 94.5
  });

  // Simulate live metrics updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPerformanceMetrics(prev => ({
        activeAgents: prev.activeAgents + Math.floor(Math.random() * 5),
        tasksCompleted: prev.tasksCompleted + Math.floor(Math.random() * 20),
        timeSaved: prev.timeSaved + Math.floor(Math.random() * 3),
        customerSatisfaction: Math.min(100, prev.customerSatisfaction + (Math.random() * 0.1 - 0.05))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Workflow templates
  const workflowTemplates = [
    {
      id: 'customer-journey',
      name: language === 'ar' ? 'رحلة العميل' : 'Customer Journey',
      description: language === 'ar' 
        ? 'أتمتة كاملة لرحلة العميل من الاستفسار إلى الشراء'
        : 'Complete automation of customer journey from inquiry to purchase',
      steps: 4,
      agents: ['customer-service', 'sales-assistant', 'finance-manager'],
      icon: Users,
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 'operations-flow',
      name: language === 'ar' ? 'تدفق العمليات' : 'Operations Flow',
      description: language === 'ar'
        ? 'تحسين العمليات اليومية وإدارة المهام'
        : 'Optimize daily operations and task management',
      steps: 3,
      agents: ['operations-optimizer', 'analytics-expert'],
      icon: Workflow,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'hr-workflow',
      name: language === 'ar' ? 'عملية التوظيف' : 'Recruitment Process',
      description: language === 'ar'
        ? 'أتمتة عملية التوظيف من البداية إلى النهاية'
        : 'Automate recruitment process from start to finish',
      steps: 5,
      agents: ['hr-assistant', 'operations-optimizer'],
      icon: Building,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: language === 'ar' ? 'مطعم البيت العربي' : 'Al Bait Al Arabi Restaurant',
      role: language === 'ar' ? 'دبي مارينا' : 'Dubai Marina',
      content: language === 'ar'
        ? 'وكيل خدمة العملاء من حكمة ديجيتال غيّر طريقة تعاملنا مع الحجوزات. نوفر الآن 15 ساعة أسبوعياً ورضا العملاء وصل إلى 95%'
        : 'Hikma Digital\'s customer service agent transformed how we handle reservations. We now save 15 hours weekly and customer satisfaction reached 95%',
      rating: 5,
      avatar: '🏪'
    },
    {
      name: language === 'ar' ? 'شركة الإمارات للخدمات اللوجستية' : 'Emirates Logistics Services',
      role: language === 'ar' ? 'مدينة دبي الصناعية' : 'Dubai Industrial City',
      content: language === 'ar'
        ? 'محسن العمليات ساعدنا في تقليل وقت التسليم بنسبة 30% وزيادة كفاءة الفريق بشكل ملحوظ'
        : 'The operations optimizer helped us reduce delivery time by 30% and significantly increased team efficiency',
      rating: 5,
      avatar: '🚚'
    },
    {
      name: language === 'ar' ? 'مجموعة النور للتجزئة' : 'Al Noor Retail Group',
      role: language === 'ar' ? 'دبي مول' : 'Dubai Mall',
      content: language === 'ar'
        ? 'مساعد المبيعات الذكي زاد من معدل التحويل لدينا بنسبة 40% وأصبح جزءاً لا يتجزأ من فريق المبيعات'
        : 'The sales AI assistant increased our conversion rate by 40% and became an integral part of our sales team',
      rating: 5,
      avatar: '🛍️'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-black to-accent-900/20" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className={`text-2xl lg:text-3xl font-semibold mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                <span className="gradient-text">
                  {language === 'ar' ? 'نظام الوكلاء الذكي المتعدد' : 'Multi-Agent Intelligence System'}
                </span>
              </h1>
              <p className={`text-lg lg:text-xl text-secondary max-w-3xl mx-auto mb-8 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'وكلاء ذكاء اصطناعي متخصصون يعملون معاً لتحويل عملك. جاهزون للاستخدام أو قم ببناء وكيلك الخاص.'
                  : 'Specialized AI agents working together to transform your business. Ready to use or build your own.'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={() => document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`btn-primary inline-flex items-center group ${isRTL ? 'font-arabic' : 'font-inter'}`}
                >
                  <Bot className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {language === 'ar' ? 'ابدأ مع وكلاء جاهزين' : 'Start with Pre-built Agents'}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1 transition-transform`} />
                </motion.button>
                
                <motion.button
                  onClick={() => setIsBuilderOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center px-8 py-4 glass-card glass-card-hover text-primary-400 font-medium rounded-lg transition-all duration-300 group ${isRTL ? 'font-arabic' : 'font-inter'}`}
                >
                  <Code className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {language === 'ar' ? 'ابنِ وكيلك الخاص' : 'Build Your Own Agent'}
                </motion.button>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-16 relative"
            >
              <div className="glass-card p-8 lg:p-12">
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { icon: Brain, label: language === 'ar' ? 'ذكاء متقدم' : 'Advanced Intelligence', value: '6 AI Models' },
                    { icon: Globe, label: language === 'ar' ? 'دعم متعدد اللغات' : 'Multilingual Support', value: 'AR + EN' },
                    { icon: Shield, label: language === 'ar' ? 'معتمد من الإمارات' : 'UAE Certified', value: '100% Compliant' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="p-4 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg w-fit mx-auto mb-4">
                        <item.icon className="w-8 h-8 text-primary-400" />
                      </div>
                      <h3 className={`text-base font-semibold text-primary mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {item.label}
                      </h3>
                      <p className="text-accent-400 font-bold">{item.value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Agent Marketplace Section */}
        <section id="marketplace" className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className={`text-xl lg:text-2xl font-semibold mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                <span className="gradient-text">
                  {language === 'ar' ? 'سوق الوكلاء الذكي' : 'AI Agent Marketplace'}
                </span>
              </h2>
              <p className={`text-base text-secondary max-w-2xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'اختر من وكلائنا المدربين مسبقاً أو امزج عدة وكلاء لإنشاء فريقك المثالي'
                  : 'Choose from our pre-trained agents or combine multiple agents to create your perfect team'}
              </p>
            </motion.div>

            {/* Using the AgentMarketplace component */}
            <AgentMarketplace />
          </div>
        </section>

        {/* Visual Workflow Builder */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-black via-primary-900/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className={`text-xl lg:text-2xl font-semibold mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                <span className="gradient-text">
                  {language === 'ar' ? 'منشئ سير العمل المرئي' : 'Visual Workflow Builder'}
                </span>
              </h2>
              <p className={`text-base text-secondary max-w-2xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'اسحب وأفلت لإنشاء سير عمل معقد. لا حاجة للبرمجة.'
                  : 'Drag and drop to create complex workflows. No coding required.'}
              </p>
            </motion.div>

            {/* Workflow Builder Interface Mock */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-8 lg:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500" />
              
              {/* Builder Header */}
              <div className="flex items-center justify-between mb-8">
                <h3 className={`text-lg font-semibold text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'منشئ سير العمل' : 'Workflow Builder'}
                </h3>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <button className="p-2 glass-card glass-card-hover rounded-lg">
                    <Play className="w-5 h-5 text-primary-400" />
                  </button>
                  <button className="p-2 glass-card glass-card-hover rounded-lg">
                    <Pause className="w-5 h-5 text-neutral-400" />
                  </button>
                  <button className="p-2 glass-card glass-card-hover rounded-lg">
                    <RefreshCw className="w-5 h-5 text-neutral-400" />
                  </button>
                </div>
              </div>

              {/* Canvas Area */}
              <div className="bg-neutral-100 rounded-lg p-8 min-h-[400px] relative">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="h-full w-full" style={{
                    backgroundImage: 'radial-gradient(circle, #666 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                </div>

                {/* Workflow Nodes */}
                <div className="relative">
                  {/* Start Node */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-8 left-8 glass-card p-4 rounded-lg"
                  >
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className="p-2 bg-green-500/20 rounded-lg">
                        <Play className="w-5 h-5 text-green-400" />
                      </div>
                      <span className={`text-primary font-semibold ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? 'البداية' : 'Start'}
                      </span>
                    </div>
                  </motion.div>

                  {/* Agent Nodes */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="absolute top-8 left-48 glass-card p-4 rounded-lg border-2 border-primary-500/50"
                  >
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <MessageSquare className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <span className={`text-primary font-semibold block ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                          {language === 'ar' ? 'حكمة' : 'Hikma'}
                        </span>
                        <span className={`text-xs text-neutral-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                          {language === 'ar' ? 'خدمة العملاء' : 'Customer Service'}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="absolute top-32 left-64 glass-card p-4 rounded-lg border-2 border-green-500/50"
                  >
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className="p-2 bg-green-500/20 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <span className={`text-primary font-semibold block ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                          {language === 'ar' ? 'رشيد' : 'Rashid'}
                        </span>
                        <span className={`text-xs text-neutral-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                          {language === 'ar' ? 'المبيعات' : 'Sales'}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <motion.path
                      d="M 120 40 L 180 40"
                      stroke="url(#gradient1)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    />
                    <motion.path
                      d="M 280 40 L 320 100"
                      stroke="url(#gradient2)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    />
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#10B981" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Templates Sidebar */}
                <div className="absolute right-8 top-8 w-64">
                  <h4 className={`text-sm font-medium text-neutral-400 mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'قوالب جاهزة' : 'Pre-built Templates'}
                  </h4>
                  <div className="space-y-3">
                    {workflowTemplates.map((template) => (
                      <motion.button
                        key={template.id}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedTemplate(template.id)}
                        className={`w-full glass-card p-4 text-left rtl:text-right transition-all duration-300 ${
                          selectedTemplate === template.id ? 'ring-2 ring-primary-500' : ''
                        }`}
                      >
                        <div className="flex items-center space-x-3 rtl:space-x-reverse">
                          <div className={`p-2 bg-gradient-to-br ${template.color} rounded-lg bg-opacity-20`}>
                            <template.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h5 className={`text-sm font-semibold text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                              {template.name}
                            </h5>
                            <p className={`text-xs text-neutral-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                              {template.steps} {language === 'ar' ? 'خطوات' : 'steps'}
                            </p>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Builder Footer */}
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <button className={`btn-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'حفظ كمسودة' : 'Save Draft'}
                  </button>
                  <button className={`btn-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'معاينة' : 'Preview'}
                  </button>
                </div>
                <motion.button
                  onClick={() => openContactForm && openContactForm('general')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`btn-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}
                >
                  {language === 'ar' ? 'نشر سير العمل' : 'Deploy Workflow'}
                </motion.button>
              </div>
            </motion.div>

            {/* CTA for Custom Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className={`text-neutral-400 mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' 
                  ? 'تحتاج إلى حل مخصص أكثر تعقيداً؟'
                  : 'Need a more complex custom solution?'}
              </p>
              <motion.button
                onClick={() => openContactForm && openContactForm('partnership')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center px-6 py-3 glass-card glass-card-hover text-primary-400 font-medium rounded-lg ${isRTL ? 'font-arabic' : 'font-inter'}`}
              >
                <Code className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {language === 'ar' ? 'تطوير وكيل مخصص' : 'Custom Agent Development'}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Live Performance Metrics */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className={`text-xl lg:text-2xl font-semibold mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                <span className="gradient-text">
                  {language === 'ar' ? 'أداء الوكلاء المباشر' : 'Live Agent Performance'}
                </span>
              </h2>
              <p className={`text-base text-secondary max-w-2xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'شاهد تأثير وكلائنا الذكيين في الوقت الفعلي'
                  : 'Watch the real-time impact of our AI agents'}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  label: language === 'ar' ? 'الوكلاء النشطون' : 'Active Agents',
                  value: performanceMetrics.activeAgents.toLocaleString(),
                  icon: Bot,
                  color: 'from-blue-500 to-cyan-500',
                  suffix: ''
                },
                {
                  label: language === 'ar' ? 'المهام المكتملة' : 'Tasks Completed',
                  value: performanceMetrics.tasksCompleted.toLocaleString(),
                  icon: CheckCircle,
                  color: 'from-green-500 to-emerald-500',
                  suffix: language === 'ar' ? '/اليوم' : '/today'
                },
                {
                  label: language === 'ar' ? 'الوقت الموفر' : 'Time Saved',
                  value: performanceMetrics.timeSaved.toLocaleString(),
                  icon: Clock,
                  color: 'from-purple-500 to-pink-500',
                  suffix: language === 'ar' ? ' ساعة' : ' hrs'
                },
                {
                  label: language === 'ar' ? 'رضا العملاء' : 'Customer Satisfaction',
                  value: performanceMetrics.customerSatisfaction.toFixed(1),
                  icon: Heart,
                  color: 'from-yellow-500 to-orange-500',
                  suffix: '%'
                }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 relative overflow-hidden group"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${metric.color}`} />
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-br ${metric.color} rounded-lg bg-opacity-20`}>
                      <metric.icon className="w-6 h-6 text-white" />
                    </div>
                    <Activity className="w-4 h-4 text-primary-400 animate-pulse" />
                  </div>

                  <h3 className={`text-3xl font-bold text-white mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {metric.value}{metric.suffix}
                  </h3>
                  <p className={`text-neutral-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {metric.label}
                  </p>

                  <div className="absolute bottom-0 left-0 w-full h-16 opacity-20">
                    <svg className="w-full h-full" preserveAspectRatio="none">
                      <motion.path
                        d="M0,40 Q50,20 100,35 T200,30 T300,38 T400,32"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="text-primary-400"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-black via-accent-900/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className={`text-xl lg:text-2xl font-semibold mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                <span className="gradient-text">
                  {language === 'ar' ? 'قصص نجاح عملائنا' : 'Client Success Stories'}
                </span>
              </h2>
              <p className={`text-base text-secondary max-w-2xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar'
                  ? 'شركات في دبي تحولت بفضل وكلائنا الذكيين'
                  : 'Dubai businesses transformed by our AI agents'}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-8"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-2xl">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className={`font-semibold text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                          {testimonial.name}
                        </h4>
                        <p className={`text-sm text-neutral-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-1 rtl:space-x-reverse">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className={`text-secondary italic ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    "{testimonial.content}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-12 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-accent-900/20" />
              
              <div className="relative">
                <h2 className={`text-xl lg:text-2xl font-semibold mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  <span className="gradient-text">
                    {language === 'ar' ? 'ابدأ رحلة التحول الذكي' : 'Start Your AI Transformation Journey'}
                  </span>
                </h2>
                <p className={`text-lg text-secondary mb-8 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar'
                    ? 'انضم إلى مئات الشركات في دبي التي تستخدم وكلاء حكمة الذكيين لتحسين أعمالهم'
                    : 'Join hundreds of Dubai businesses using Hikma\'s AI agents to enhance their operations'}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    onClick={() => openContactForm && openContactForm('general')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`btn-primary inline-flex items-center group ${isRTL ? 'font-arabic' : 'font-inter'}`}
                  >
                    <Sparkles className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {language === 'ar' ? 'احجز عرضاً توضيحياً' : 'Book Agent Demo'}
                    <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1 transition-transform`} />
                  </motion.button>
                  
                  <motion.button
                    onClick={() => openContactForm && openContactForm('assessment')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center px-8 py-4 glass-card glass-card-hover text-primary-400 font-medium rounded-lg transition-all duration-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}
                  >
                    <Target className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {language === 'ar' ? 'تقييم احتياجاتك' : 'Assess Your Needs'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
  );
};

export default AIAgents;