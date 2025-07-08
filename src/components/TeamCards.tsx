import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User, MessageCircle, Star, CheckCircle, Award, Globe, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TeamCards: React.FC = () => {
  const { isRTL, language } = useLanguage();

  const teamMembers = [
    // Human Coaches
    {
      id: 1,
      type: 'human',
      name: language === 'ar' ? 'سارة الراشد' : 'Sarah Al-Rashid',
      role: language === 'ar' ? 'كبيرة مدربي الأعمال' : 'Lead Business Coach',
      expertise: language === 'ar' ? 'استراتيجية السوق الإماراتي، الشراكات الحكومية' : 'Dubai market strategy, government partnerships',
      experience: '15+ Years',
      clients: '200+',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      specialties: language === 'ar' ? ['استراتيجية الأعمال', 'الشراكات الحكومية', 'التوسع الإقليمي'] : ['Business Strategy', 'Government Partnerships', 'Regional Expansion'],
      languages: ['Arabic', 'English', 'French']
    },
    {
      id: 2,
      type: 'human',
      name: language === 'ar' ? 'أحمد حسن' : 'Ahmed Hassan',
      role: language === 'ar' ? 'أخصائي العمليات' : 'Operations Specialist',
      expertise: language === 'ar' ? 'أتمتة العمليات، تحسين اللوجستيات' : 'Process automation, logistics optimization',
      experience: '12+ Years',
      clients: '180+',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      specialties: language === 'ar' ? ['التصنيع', 'اللوجستيات', 'سلسلة التوريد'] : ['Manufacturing', 'Logistics', 'Supply Chain'],
      certifications: ['Dubai SME Certified Mentor']
    },
    {
      id: 3,
      type: 'human',
      name: language === 'ar' ? 'فاطمة الزهراء' : 'Fatima Al-Zahra',
      role: language === 'ar' ? 'قائدة التحول الرقمي' : 'Digital Transformation Lead',
      expertise: language === 'ar' ? 'اعتماد التكنولوجيا، إدارة التغيير الثقافي' : 'Technology adoption, cultural change management',
      experience: '10+ Years',
      clients: '150+',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      specialties: language === 'ar' ? ['رؤى السوق العربي', 'التمويل الإسلامي', 'التحول الرقمي'] : ['Arabic Market Insights', 'Islamic Finance', 'Digital Transformation'],
      background: language === 'ar' ? 'استراتيجية رقمية سابقة في حكومة دبي' : 'Former Dubai Government digital strategist'
    },
    // AI Agents
    {
      id: 4,
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
      id: 5,
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
      id: 6,
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

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
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
              
              {member.type === 'human' && (
                <div className="flex items-center justify-center space-x-1 rtl:space-x-reverse">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-300">{member.rating}</span>
                </div>
              )}
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
  );
};

export default TeamCards;