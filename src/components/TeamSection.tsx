import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LinkedinIcon, Mail, Brain, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useContent } from '../hooks/useContent';
import OptimizedImage from './ui/OptimizedImage';

interface TeamMember {
  id: string;
  name: { en: string; ar: string };
  role: { en: string; ar: string };
  type: 'ai' | 'human';
  expertise: { en: string[]; ar: string[] };
  image?: {
    src: string;
    alt: { en: string; ar: string };
  };
  linkedin?: string;
  email?: string;
}

const TeamSection: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [selectedType, setSelectedType] = useState<'all' | 'ai' | 'human'>('all');
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  // Mock team data - would come from content system
  const team: TeamMember[] = [
    {
      id: 'hikma-ai',
      name: { en: 'Hikma AI', ar: 'حكمة الذكي' },
      role: { en: 'Lead AI Agent', ar: 'وكيل الذكاء الاصطناعي الرئيسي' },
      type: 'ai',
      expertise: {
        en: ['Customer Service', 'Data Analysis', 'Process Automation'],
        ar: ['خدمة العملاء', 'تحليل البيانات', 'أتمتة العمليات']
      }
    },
    {
      id: 'sarah-johnson',
      name: { en: 'Sarah Johnson', ar: 'سارة جونسون' },
      role: { en: 'AI Strategy Coach', ar: 'مدرب استراتيجية الذكاء الاصطناعي' },
      type: 'human',
      expertise: {
        en: ['Digital Transformation', 'Business Strategy', 'AI Implementation'],
        ar: ['التحول الرقمي', 'استراتيجية الأعمال', 'تطبيق الذكاء الاصطناعي']
      },
      linkedin: '#',
      email: 'sarah@hikmadigital.ae'
    },
    {
      id: 'analytics-ai',
      name: { en: 'Analytics Expert', ar: 'خبير التحليلات' },
      role: { en: 'Data Analysis AI', ar: 'ذكاء تحليل البيانات' },
      type: 'ai',
      expertise: {
        en: ['Business Intelligence', 'Predictive Analytics', 'Reporting'],
        ar: ['ذكاء الأعمال', 'التحليلات التنبؤية', 'إعداد التقارير']
      }
    },
    {
      id: 'ahmed-rashid',
      name: { en: 'Ahmed Al-Rashid', ar: 'أحمد الراشد' },
      role: { en: 'Business Coach', ar: 'مدرب الأعمال' },
      type: 'human',
      expertise: {
        en: ['SME Growth', 'Local Market', 'Operations'],
        ar: ['نمو الشركات الصغيرة', 'السوق المحلي', 'العمليات']
      },
      linkedin: '#',
      email: 'ahmed@hikmadigital.ae'
    }
  ];

  const filteredTeam = selectedType === 'all' 
    ? team 
    : team.filter(member => member.type === selectedType);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-5xl font-light text-primary-950 mb-6 ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {language === 'ar' ? 'فريقنا من الذكاء الاصطناعي والبشر' : 'Our AI & Human Team'}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-lg text-text-secondary max-w-2xl mx-auto ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {language === 'ar' 
              ? 'مزيج فريد من وكلاء الذكاء الاصطناعي والخبراء البشريين يعملون معاً لتحويل عملك'
              : 'A unique blend of AI agents and human experts working together to transform your business'}
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-neutral-100 rounded-full p-1">
            {[
              { value: 'all', label: { en: 'All Team', ar: 'الفريق الكامل' }, icon: null },
              { value: 'ai', label: { en: 'AI Agents', ar: 'وكلاء الذكاء' }, icon: Brain },
              { value: 'human', label: { en: 'Human Coaches', ar: 'المدربون البشريون' }, icon: Users }
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedType(tab.value as any)}
                className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedType === tab.value 
                    ? 'text-white' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {selectedType === tab.value && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {tab.icon && <tab.icon className="w-4 h-4 relative z-10" />}
                <span className={`relative z-10 ${isRTL ? 'font-arabic' : ''}`}>
                  {tab.label[language]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredTeam.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                layout
                exit={{ opacity: 0, scale: 0.9 }}
                onHoverStart={() => setHoveredMember(member.id)}
                onHoverEnd={() => setHoveredMember(null)}
                className="group"
              >
                <div className="relative">
                  {/* Member Card */}
                  <div className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
                    member.type === 'ai' 
                      ? 'bg-gradient-to-br from-primary-50 to-primary-100' 
                      : 'bg-white shadow-sm hover:shadow-xl'
                  }`}>
                    {/* Image/Avatar */}
                    <div className="aspect-[3/4] relative overflow-hidden">
                      {member.type === 'ai' ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary to-primary-700">
                          <Brain className="w-24 h-24 text-white/80" />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 to-transparent" />
                        </div>
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300">
                          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 to-transparent" />
                        </div>
                      )}
                      
                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredMember === member.id ? 1 : 0 }}
                        className="absolute inset-0 bg-primary-950/90 flex items-center justify-center"
                      >
                        <div className="text-center px-6">
                          <p className={`text-sm text-white/80 mb-3 ${isRTL ? 'font-arabic' : ''}`}>
                            {language === 'ar' ? 'الخبرات:' : 'Expertise:'}
                          </p>
                          <div className="space-y-2">
                            {member.expertise[language].map((skill, idx) => (
                              <div key={idx} className="text-white text-sm">
                                {skill}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className={`text-xl font-semibold text-primary-950 mb-1 ${
                        isRTL ? 'font-arabic' : ''
                      }`}>
                        {member.name[language]}
                      </h3>
                      <p className={`text-text-secondary mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                        {member.role[language]}
                      </p>
                      
                      {/* Contact Links (for humans) */}
                      {member.type === 'human' && (
                        <div className="flex gap-3">
                          {member.linkedin && (
                            <a 
                              href={member.linkedin}
                              className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                            >
                              <LinkedinIcon className="w-5 h-5" />
                            </a>
                          )}
                          {member.email && (
                            <a 
                              href={`mailto:${member.email}`}
                              className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                            >
                              <Mail className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      )}
                      
                      {/* AI Badge */}
                      {member.type === 'ai' && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          <Brain className="w-4 h-4" />
                          <span>AI Agent</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className={`text-lg text-text-secondary mb-6 ${isRTL ? 'font-arabic' : ''}`}>
            {language === 'ar' 
              ? 'دع فريقنا يساعدك في تحويل عملك' 
              : 'Let our team help transform your business'}
          </p>
          <button className="px-8 py-4 bg-primary text-white rounded-full hover:bg-primary-700 transition-colors duration-300 font-medium">
            {language === 'ar' ? 'ابدأ محادثة' : 'Start a Conversation'}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;