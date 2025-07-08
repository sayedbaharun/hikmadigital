import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Bot, User, MessageCircle, CheckCircle, Award, Globe, Clock } from 'lucide-react';

interface TeamProps {
  openContactForm?: (type: 'general' | 'assessment' | 'partnership' | 'licensing') => void;
}

const Team: React.FC<TeamProps> = ({ openContactForm }) => {
  const { t, isRTL, language } = useLanguage();

  const teamMembers = [
    // Human Coach
    {
      id: 1,
      type: 'human',
      name: language === 'ar' ? 'سيد بهارون' : 'Sayed Baharun',
      role: language === 'ar' ? 'الرئيس التنفيذي' : 'CEO',
      expertise: language === 'ar' ? 'أتمتة العمليات، تحسين اللوجستيات' : 'Process automation, logistics optimization',
      experience: '12+ Years',
      clients: '180+',
      image: 'https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      specialties: language === 'ar' ? ['التصنيع', 'اللوجستيات', 'سلسلة التوريد'] : ['Manufacturing', 'Logistics', 'Supply Chain'],
      certifications: ['Dubai SME Certified Mentor']
    },
    // AI Agents
    {
      id: 2,
      type: 'ai',
      name: language === 'ar' ? 'حكمة الذكية' : 'Hikma AI',
      role: language === 'ar' ? 'كبيرة مستشاري الأعمال بالذكاء الاصطناعي' : 'Chief AI Business Advisor',
      expertise: language === 'ar' ? 'التخطيط الاستراتيجي، تحليل السوق' : 'Strategic planning, market analysis',
      languages: ['Arabic', 'English'],
      availability: '24/7',
      responses: '50,000+',
      image: '/ai-avatar-1.png',
      capabilities: language === 'ar' ? ['الحكمة', 'الذكاء الثقافي', 'ثنائية اللغة'] : ['Wisdom', 'Cultural Intelligence', 'Bilingual'],
      personality: language === 'ar' ? 'حكيمة، ذكية ثقافياً، ثنائية اللغة' : 'Wise, culturally intelligent, bilingual',
      culturalIntelligence: language === 'ar' ? 'عادات الأعمال الإماراتية، وعي التقويم الإسلامي' : 'UAE business customs, Islamic calendar awareness'
    },
    {
      id: 3,
      type: 'ai',
      name: language === 'ar' ? 'عمر المحلل' : 'Omar AI',
      role: language === 'ar' ? 'وكيل تحسين العمليات' : 'Operations Optimization Agent',
      expertise: language === 'ar' ? 'تحسين العمليات، تقليل التكاليف' : 'Process improvement, cost reduction',
      dataPoints: '10M+',
      accuracy: '97%',
      insights: '1,000+',
      image: '/ai-avatar-2.png',
      capabilities: language === 'ar' ? ['تحليلي', 'مركز على الكفاءة', 'مهتم بالتفاصيل'] : ['Analytical', 'Efficiency-focused', 'Detail-oriented'],
      personality: language === 'ar' ? 'تحليلي، مركز على الكفاءة، مهتم بالتفاصيل' : 'Analytical, efficiency-focused, detail-oriented',
      dataProcessing: language === 'ar' ? 'تحليلات في الوقت الفعلي، نمذجة تنبؤية' : 'Real-time analytics, predictive modeling'
    },
    {
      id: 4,
      type: 'ai',
      name: language === 'ar' ? 'ليلى الإبداعية' : 'Layla AI',
      role: language === 'ar' ? 'أخصائية تجربة العملاء' : 'Customer Experience Specialist',
      expertise: language === 'ar' ? 'أتمتة خدمة العملاء، استراتيجيات المشاركة' : 'Customer service automation, engagement strategies',
      campaigns: '5,000+',
      conversion: '45%',
      reach: '2M+',
      image: '/ai-avatar-3.png',
      capabilities: language === 'ar' ? ['متعاطفة', 'مركزة على العملاء', 'إبداعية'] : ['Empathetic', 'Customer-focused', 'Creative'],
      personality: language === 'ar' ? 'متعاطفة، مركزة على العملاء، إبداعية' : 'Empathetic, customer-focused, creative',
      features: language === 'ar' ? 'معالجة الصوت، تحليل المشاعر' : 'Voice processing, sentiment analysis'
    }
  ];

  // Reorder team members to put human first
  const humanMembers = teamMembers.filter(member => member.type === 'human');
  const aiMembers = teamMembers.filter(member => member.type === 'ai');
  const orderedTeamMembers = [...humanMembers, ...aiMembers];

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 border-b border-gray-800 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={`text-4xl lg:text-6xl font-extralight tracking-tight mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              <span className="gradient-text font-bold">
                {language === 'ar' ? 'تعرف على فريق دبي الأول المعتمد' : 'Meet Dubai\'s First Certified'}
              </span>
              <br />
              <span className="text-white font-light">
                {language === 'ar' ? 'للأعمال بالذكاء الاصطناعي والخبراء البشريين' : 'Human-AI Business Team'}
              </span>
            </h1>
            <p className={`text-xl font-light text-gray-300 max-w-3xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' 
                ? '4 أعضاء فريق يعملون معاً: 1 مدرب بشري + 3 وكلاء ذكاء اصطناعي، جميعهم معتمدون من ميثاق الإمارات'
                : '4 team members working together: 1 human coach + 3 AI agents, all UAE Charter certified'
              }
            </p>
          </motion.div>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-800 pb-20 mb-20">
          {orderedTeamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              className="glass-card glass-card-hover p-6 transition-all duration-300 overflow-hidden group"
            >
              {/* Card Header */}
              <div className={`mb-6 ${member.type === 'human' ? 'bg-gradient-to-br from-blue-500/10 to-indigo-500/10' : 'bg-gradient-to-br from-purple-500/10 to-pink-500/10'} -m-6 p-6 mb-6`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full ${member.type === 'human' ? 'bg-blue-500/20' : 'bg-purple-500/20'}`}>
                    {member.type === 'human' ? (
                      <User className={`w-6 h-6 ${member.type === 'human' ? 'text-blue-400' : 'text-purple-400'}`} />
                    ) : (
                      <Bot className={`w-6 h-6 ${member.type === 'human' ? 'text-blue-400' : 'text-purple-400'}`} />
                    )}
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    member.type === 'human' 
                      ? 'bg-blue-500/20 text-blue-300' 
                      : 'bg-purple-500/20 text-purple-300'
                  }`}>
                    {member.type === 'human' ? 'Human Coach' : 'AI Agent'}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gray-700">
                    {member.type === 'human' ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
                        <Bot className="w-10 h-10 text-white" />
                      </div>
                    )}
                  </div>
                  <h3 className={`text-lg font-medium text-white mb-1 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {member.name}
                  </h3>
                  <p className={`text-sm text-gray-300 mb-3 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Card Content */}
              <div className="space-y-4">
                <div>
                  <h4 className={`text-sm font-medium text-white mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'التخصص' : 'Expertise'}
                  </h4>
                  <p className={`text-sm text-gray-300 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {member.expertise}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {member.type === 'human' ? (
                    <>
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary-400">{member.experience}</div>
                        <div className={`text-xs text-gray-400 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                          {language === 'ar' ? 'خبرة' : 'Experience'}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-accent-400">{member.clients}</div>
                        <div className={`text-xs text-gray-400 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                          {language === 'ar' ? 'عميل' : 'Clients'}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-400">{member.availability}</div>
                        <div className={`text-xs text-gray-400 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                          {language === 'ar' ? 'متاح' : 'Available'}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-accent-400">{member.responses || member.accuracy || member.conversion}</div>
                        <div className={`text-xs text-gray-400 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                          {language === 'ar' ? 'نجاح' : 'Success Rate'}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Specialties/Capabilities */}
                <div>
                  <h4 className={`text-sm font-medium text-white mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {member.type === 'human' 
                      ? (language === 'ar' ? 'التخصصات' : 'Specialties')
                      : (language === 'ar' ? 'القدرات' : 'Capabilities')
                    }
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {(member.specialties || member.capabilities)?.map((item, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 text-xs rounded-full font-light ${
                          member.type === 'human' 
                            ? 'bg-blue-500/20 text-blue-300' 
                            : 'bg-purple-500/20 text-purple-300'
                        } ${isRTL ? 'font-arabic' : 'font-inter'}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 ${
                    member.type === 'human'
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/25'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25'
                  } ${isRTL ? 'font-arabic' : 'font-inter'}`}
                >
                  <MessageCircle className={`w-4 h-4 inline ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {member.type === 'human' 
                    ? (language === 'ar' ? 'احجز جلسة' : 'Book Session')
                    : (language === 'ar' ? 'ابدأ المحادثة' : 'Start Chat')
                  }
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Collaboration Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card p-8 lg:p-12">
            <h2 className={`text-3xl font-light tracking-tight mb-6 text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'كيف نعمل معاً' : 'How We Work Together'}
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className={`font-medium text-white mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'استقبال العميل' : 'Client Intake'}
                </h3>
                <p className={`text-sm text-gray-300 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'الذكاء الاصطناعي يجري التقييم الأولي' : 'AI conducts initial assessment'}
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className={`font-medium text-white mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'التحليل المشترك' : 'Joint Analysis'}
                </h3>
                <p className={`text-sm text-gray-300 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'المدرب البشري يضيف السياق الثقافي' : 'Human coach adds cultural context'}
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className={`font-medium text-white mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'وضع الاستراتيجية' : 'Strategy Development'}
                </h3>
                <p className={`text-sm text-gray-300 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'تعاون في الوقت الفعلي لوضع الحلول' : 'Real-time collaboration on solutions'}
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <h3 className={`font-medium text-white mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'التنفيذ والمتابعة' : 'Implementation'}
                </h3>
                <p className={`text-sm text-gray-300 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'مراقبة مستمرة وتحسينات' : 'Continuous monitoring and improvements'}
                </p>
              </div>
            </div>

            {/* Workflow Visualization */}
            <div className="mt-8 flex items-center justify-center">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-purple-500/20 rounded-lg">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className={`text-sm text-purple-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'ذكاء اصطناعي نشط' : 'AI Active'}
                  </span>
                </div>
                <div className="w-8 h-px bg-gray-600"></div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-blue-500/20 rounded-lg">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className={`text-sm text-blue-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'مدرب بشري' : 'Human Coach'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <motion.button
                onClick={() => openContactForm && openContactForm('general')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-medium rounded-lg transition-all duration-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}
              >
                {language === 'ar' ? 'تواصل مع فريقنا' : 'Connect with Our Team'}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;