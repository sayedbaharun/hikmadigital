import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Users, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Download,
  Sparkles,
  Building,
  Mail,
  Phone,
  MapPin,
  Shield
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '../lib/supabase';

interface AssessmentData {
  // Business Information
  industry: string;
  monthlyRevenue: string;
  employeeCount: string;
  yearsInBusiness: string;
  
  // Digital Maturity
  digitalTools: number;
  automationLevel: number;
  aiFamiliarity: number;
  
  // Business Challenges
  painPoints: string[];
  customerServiceChannels: string[];
  
  // Goals and Priorities
  primaryGoals: string[];
  timeframe: string;
  budget: string;
}

interface LeadData {
  companyName: string;
  companyNameAr?: string;
  contactName: string;
  email: string;
  phone: string;
  whatsappNumber?: string;
  emirates: string;
  tradeLicense?: string;
  preferredLanguage: string;
}

interface AssessmentResults {
  aiReadinessScore: number;
  recommendations: Array<{
    priority: 'URGENT' | 'HIGH' | 'MEDIUM' | 'LOW';
    phase: string;
    title: string;
    titleAr: string;
    description: string;
    descriptionAr: string;
    timeline: string;
    expectedROI: string;
    investmentRange: string;
    features?: string[];
  }>;
  projectedMetrics: {
    timeSavings: string;
    costReduction: string;
    revenueIncrease: string;
    customerSatisfaction: string;
    paybackPeriod: number;
  };
}

const Assessment: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [assessmentData, setAssessmentData] = useState<Partial<AssessmentData>>({});
  const [leadData, setLeadData] = useState<Partial<LeadData>>({});
  const [results, setResults] = useState<AssessmentResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [leadCounter, setLeadCounter] = useState(1247); // Demo counter

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  // Assessment questions structure
  const assessmentSteps = [
    {
      id: 'business_basics',
      title: language === 'ar' ? 'معلومات العمل الأساسية' : 'Business Basics',
      questions: [
        {
          name: 'industry',
          label: language === 'ar' ? 'في أي صناعة يعمل عملك؟' : 'What industry is your business in?',
          type: 'select',
          options: [
            { value: 'restaurant', label: language === 'ar' ? 'مطاعم وضيافة' : 'Restaurant & Hospitality' },
            { value: 'retail', label: language === 'ar' ? 'تجارة التجزئة' : 'Retail & E-commerce' },
            { value: 'logistics', label: language === 'ar' ? 'لوجستيات ونقل' : 'Logistics & Transportation' },
            { value: 'healthcare', label: language === 'ar' ? 'صحة وعافية' : 'Healthcare & Wellness' },
            { value: 'realestate', label: language === 'ar' ? 'عقارات' : 'Real Estate' },
            { value: 'consulting', label: language === 'ar' ? 'خدمات مهنية' : 'Professional Services' },
            { value: 'manufacturing', label: language === 'ar' ? 'تصنيع' : 'Manufacturing' },
            { value: 'technology', label: language === 'ar' ? 'تكنولوجيا' : 'Technology' },
            { value: 'finance', label: language === 'ar' ? 'مالية' : 'Finance' },
            { value: 'education', label: language === 'ar' ? 'تعليم' : 'Education' }
          ],
          required: true
        },
        {
          name: 'monthlyRevenue',
          label: language === 'ar' ? 'ما هو إيرادك الشهري التقريبي؟ (درهم إماراتي)' : 'What is your approximate monthly revenue? (AED)',
          type: 'select',
          options: [
            { value: 'under_50k', label: language === 'ar' ? 'أقل من 50,000' : 'Under 50,000' },
            { value: '50k_100k', label: '50,000 - 100,000' },
            { value: '100k_200k', label: '100,000 - 200,000' },
            { value: '200k_500k', label: '200,000 - 500,000' },
            { value: '500k_1m', label: '500,000 - 1,000,000' },
            { value: 'over_1m', label: language === 'ar' ? 'أكثر من 1,000,000' : 'Over 1,000,000' }
          ],
          required: true
        },
        {
          name: 'employeeCount',
          label: language === 'ar' ? 'كم عدد الموظفين في عملك؟' : 'How many employees does your business have?',
          type: 'select',
          options: [
            { value: '1_5', label: '1-5' },
            { value: '6_15', label: '6-15' },
            { value: '16_50', label: '16-50' },
            { value: '51_100', label: '51-100' },
            { value: 'over_100', label: language === 'ar' ? 'أكثر من 100' : 'Over 100' }
          ],
          required: true
        }
      ]
    },
    {
      id: 'digital_maturity',
      title: language === 'ar' ? 'النضج الرقمي' : 'Digital Maturity',
      questions: [
        {
          name: 'digitalTools',
          label: language === 'ar' ? 'كم عدد الأدوات الرقمية التي يستخدمها عملك حالياً؟' : 'How many digital tools does your business currently use?',
          type: 'scale',
          min: 1,
          max: 10,
          labels: [language === 'ar' ? 'قليل جداً (1-2)' : 'Very Few (1-2)', language === 'ar' ? 'أدوات كثيرة (8-10)' : 'Many Tools (8-10)'],
          required: true
        },
        {
          name: 'automationLevel',
          label: language === 'ar' ? 'ما هي النسبة المئوية لعمليات عملك المؤتمتة؟' : 'What percentage of your business processes are automated?',
          type: 'percentage',
          required: true
        },
        {
          name: 'aiFamiliarity',
          label: language === 'ar' ? 'ما مدى إلمام فريقك بتكنولوجيا الذكاء الاصطناعي؟' : 'How familiar is your team with AI technology?',
          type: 'scale',
          min: 1,
          max: 5,
          labels: [language === 'ar' ? 'غير مألوف على الإطلاق' : 'Not at all familiar', language === 'ar' ? 'مألوف جداً' : 'Very familiar'],
          required: true
        }
      ]
    },
    {
      id: 'challenges',
      title: language === 'ar' ? 'التحديات والأهداف' : 'Challenges & Goals',
      questions: [
        {
          name: 'painPoints',
          label: language === 'ar' ? 'ما هي أكبر تحديات عملك؟ (اختر كل ما ينطبق)' : 'What are your biggest business challenges? (Select all that apply)',
          type: 'multiple',
          options: [
            { value: 'customer_service', label: language === 'ar' ? 'تأخير خدمة العملاء' : 'Customer service delays' },
            { value: 'inventory', label: language === 'ar' ? 'إدارة المخزون' : 'Inventory management' },
            { value: 'marketing', label: language === 'ar' ? 'فعالية التسويق' : 'Marketing effectiveness' },
            { value: 'staff_efficiency', label: language === 'ar' ? 'كفاءة الموظفين' : 'Staff efficiency' },
            { value: 'cost_control', label: language === 'ar' ? 'التحكم في التكاليف' : 'Cost control' },
            { value: 'language_barriers', label: language === 'ar' ? 'حواجز اللغة' : 'Language barriers' },
            { value: 'competition', label: language === 'ar' ? 'المنافسة' : 'Competition' },
            { value: 'technology', label: language === 'ar' ? 'اعتماد التكنولوجيا' : 'Technology adoption' }
          ],
          required: true
        },
        {
          name: 'customerServiceChannels',
          label: language === 'ar' ? 'كيف تتعامل حالياً مع استفسارات العملاء؟' : 'How do you currently handle customer inquiries?',
          type: 'multiple',
          options: [
            { value: 'phone', label: language === 'ar' ? 'مكالمات هاتفية' : 'Phone calls' },
            { value: 'whatsapp', label: language === 'ar' ? 'واتساب' : 'WhatsApp' },
            { value: 'email', label: language === 'ar' ? 'بريد إلكتروني' : 'Email' },
            { value: 'in_person', label: language === 'ar' ? 'شخصياً' : 'In-person' },
            { value: 'website', label: language === 'ar' ? 'دردشة الموقع' : 'Website chat' },
            { value: 'social_media', label: language === 'ar' ? 'وسائل التواصل الاجتماعي' : 'Social media' }
          ],
          required: true
        }
      ]
    },
    {
      id: 'contact_info',
      title: language === 'ar' ? 'معلومات الاتصال' : 'Contact Information',
      questions: [
        {
          name: 'companyName',
          label: language === 'ar' ? 'اسم الشركة' : 'Company Name',
          type: 'text',
          required: true
        },
        {
          name: 'companyNameAr',
          label: language === 'ar' ? 'اسم الشركة (بالعربية)' : 'Company Name (Arabic)',
          type: 'text',
          required: false
        },
        {
          name: 'contactName',
          label: language === 'ar' ? 'اسمك الكامل' : 'Your Full Name',
          type: 'text',
          required: true
        },
        {
          name: 'email',
          label: language === 'ar' ? 'البريد الإلكتروني للعمل' : 'Business Email',
          type: 'email',
          required: true
        },
        {
          name: 'phone',
          label: language === 'ar' ? 'رقم الهاتف' : 'Phone Number',
          type: 'tel',
          required: true
        },
        {
          name: 'whatsappNumber',
          label: language === 'ar' ? 'رقم الواتساب' : 'WhatsApp Number',
          type: 'tel',
          required: false
        },
        {
          name: 'emirates',
          label: language === 'ar' ? 'الإمارة' : 'Emirate',
          type: 'select',
          options: [
            { value: 'dubai', label: language === 'ar' ? 'دبي' : 'Dubai' },
            { value: 'abu_dhabi', label: language === 'ar' ? 'أبوظبي' : 'Abu Dhabi' },
            { value: 'sharjah', label: language === 'ar' ? 'الشارقة' : 'Sharjah' },
            { value: 'ajman', label: language === 'ar' ? 'عجمان' : 'Ajman' },
            { value: 'fujairah', label: language === 'ar' ? 'الفجيرة' : 'Fujairah' },
            { value: 'rak', label: language === 'ar' ? 'رأس الخيمة' : 'Ras Al Khaimah' },
            { value: 'uaq', label: language === 'ar' ? 'أم القيوين' : 'Umm Al Quwain' }
          ],
          required: true
        },
        {
          name: 'preferredLanguage',
          label: language === 'ar' ? 'اللغة المفضلة' : 'Preferred Language',
          type: 'select',
          options: [
            { value: 'en', label: language === 'ar' ? 'الإنجليزية' : 'English' },
            { value: 'ar', label: language === 'ar' ? 'العربية' : 'Arabic' },
            { value: 'both', label: language === 'ar' ? 'كلاهما' : 'Both' }
          ],
          required: true
        }
      ]
    }
  ];

  // Calculate AI Readiness Score
  const calculateAIReadiness = (data: AssessmentData): number => {
    let score = 0;
    
    // Digital maturity scoring (40 points)
    score += (data.digitalTools || 0) * 2;
    score += (data.automationLevel || 0) * 0.2;
    score += (data.aiFamiliarity || 0) * 6;
    
    // Business size and revenue scoring (30 points)
    const revenueScores = {
      'under_50k': 5,
      '50k_100k': 10,
      '100k_200k': 15,
      '200k_500k': 20,
      '500k_1m': 25,
      'over_1m': 30
    };
    score += revenueScores[data.monthlyRevenue] || 0;
    
    // Industry readiness scoring (20 points)
    const industryScores = {
      'technology': 20,
      'finance': 18,
      'retail': 15,
      'logistics': 15,
      'consulting': 18,
      'restaurant': 12,
      'healthcare': 12,
      'realestate': 15,
      'manufacturing': 10,
      'education': 8
    };
    score += industryScores[data.industry] || 5;
    
    // Pain points that AI can solve (10 points)
    const aiSolvablePains = ['customer_service', 'staff_efficiency', 'marketing', 'inventory'];
    const painScore = (data.painPoints || []).filter(pain => aiSolvablePains.includes(pain)).length * 2.5;
    score += painScore;
    
    return Math.min(Math.round(score), 100);
  };

  // Generate personalized recommendations
  const generateRecommendations = (data: AssessmentData, score: number) => {
    const recommendations = [];
    
    // Score-based recommendations
    if (score < 30) {
      recommendations.push({
        priority: 'URGENT' as const,
        phase: language === 'ar' ? 'بناء الأساس' : 'Foundation Building',
        title: language === 'ar' ? 'ابدأ بالأساسيات الرقمية' : 'Start with Digital Basics',
        titleAr: 'ابدأ بالأساسيات الرقمية',
        description: language === 'ar' 
          ? 'تنفيذ الأدوات الرقمية الأساسية مثل إدارة علاقات العملاء وبرامج المحاسبة قبل الذكاء الاصطناعي'
          : 'Implement basic digital tools like CRM and accounting software before AI',
        descriptionAr: 'تنفيذ الأدوات الرقمية الأساسية مثل إدارة علاقات العملاء وبرامج المحاسبة قبل الذكاء الاصطناعي',
        timeline: language === 'ar' ? '2-3 أشهر' : '2-3 months',
        expectedROI: language === 'ar' ? 'تحسن الكفاءة بنسبة 15-20%' : '15-20% efficiency improvement',
        investmentRange: 'AED 5,000 - 15,000'
      });
    } else if (score < 60) {
      recommendations.push({
        priority: 'HIGH' as const,
        phase: language === 'ar' ? 'تنفيذ الذكاء الاصطناعي' : 'AI Implementation',
        title: language === 'ar' ? 'نشر أول حل ذكاء اصطناعي' : 'Deploy First AI Solution',
        titleAr: 'نشر أول حل ذكاء اصطناعي',
        description: language === 'ar'
          ? 'ابدأ بروبوت الدردشة لخدمة العملاء أو الجدولة الآلية'
          : 'Start with customer service chatbot or automated scheduling',
        descriptionAr: 'ابدأ بروبوت الدردشة لخدمة العملاء أو الجدولة الآلية',
        timeline: language === 'ar' ? '1-2 شهر' : '1-2 months',
        expectedROI: language === 'ar' ? 'تقليل التكاليف بنسبة 25-40% في خدمة العملاء' : '25-40% cost reduction in customer service',
        investmentRange: 'AED 10,000 - 25,000'
      });
    } else {
      recommendations.push({
        priority: 'MEDIUM' as const,
        phase: language === 'ar' ? 'تحسين الذكاء الاصطناعي' : 'AI Optimization',
        title: language === 'ar' ? 'تكامل متقدم للذكاء الاصطناعي' : 'Advanced AI Integration',
        titleAr: 'تكامل متقدم للذكاء الاصطناعي',
        description: language === 'ar'
          ? 'تنفيذ التحليلات التنبؤية والأتمتة المتقدمة'
          : 'Implement predictive analytics and advanced automation',
        descriptionAr: 'تنفيذ التحليلات التنبؤية والأتمتة المتقدمة',
        timeline: language === 'ar' ? '3-6 أشهر' : '3-6 months',
        expectedROI: language === 'ar' ? 'مكاسب كفاءة تشغيلية بنسبة 40-60%' : '40-60% operational efficiency gains',
        investmentRange: 'AED 25,000 - 75,000'
      });
    }
    
    // Industry-specific recommendations
    if (data.industry === 'restaurant') {
      recommendations.push({
        priority: 'HIGH' as const,
        phase: language === 'ar' ? 'ذكاء اصطناعي خاص بالصناعة' : 'Industry-Specific AI',
        title: language === 'ar' ? 'حلول الذكاء الاصطناعي للمطاعم' : 'Restaurant AI Solutions',
        titleAr: 'حلول الذكاء الاصطناعي للمطاعم',
        description: language === 'ar'
          ? 'تنفيذ نظام طلب يتحدث العربية وإدارة المخزون'
          : 'Implement Arabic-speaking ordering system and inventory management',
        descriptionAr: 'تنفيذ نظام طلب يتحدث العربية وإدارة المخزون',
        timeline: language === 'ar' ? '6-8 أسابيع' : '6-8 weeks',
        expectedROI: language === 'ar' ? 'تقليل أخطاء الطلبات بنسبة 30%، خدمة أسرع بنسبة 25%' : '30% reduction in order errors, 25% faster service',
        investmentRange: 'AED 15,000 - 35,000',
        features: [
          language === 'ar' ? 'طلب صوتي بالعربية' : 'Arabic voice ordering',
          language === 'ar' ? 'تحسين قائمة رمضان' : 'Ramadan menu optimization',
          language === 'ar' ? 'تخطيط الأحداث الثقافية' : 'Cultural event planning'
        ]
      });
    }
    
    // Pain point specific solutions
    if (data.painPoints?.includes('customer_service')) {
      recommendations.push({
        priority: 'URGENT' as const,
        phase: language === 'ar' ? 'مكاسب سريعة' : 'Quick Wins',
        title: language === 'ar' ? 'أتمتة خدمة العملاء بالذكاء الاصطناعي' : 'AI Customer Service Automation',
        titleAr: 'أتمتة خدمة العملاء بالذكاء الاصطناعي',
        description: language === 'ar'
          ? 'نشر روبوت دردشة ثنائي اللغة للتعامل مع 80% من استفسارات العملاء فوراً'
          : 'Deploy bilingual chatbot to handle 80% of customer inquiries instantly',
        descriptionAr: 'نشر روبوت دردشة ثنائي اللغة للتعامل مع 80% من استفسارات العملاء فوراً',
        timeline: language === 'ar' ? '2-3 أسابيع' : '2-3 weeks',
        expectedROI: language === 'ar' ? 'تقليل وقت الاستجابة بنسبة 60%، توفير التكاليف بنسبة 40%' : '60% reduction in response time, 40% cost savings',
        investmentRange: 'AED 8,000 - 18,000',
        features: [
          language === 'ar' ? 'دعم عربي 24/7' : '24/7 Arabic support',
          language === 'ar' ? 'تكامل واتساب' : 'WhatsApp integration',
          language === 'ar' ? 'تصعيد بشري' : 'Human escalation'
        ]
      });
    }
    
    return recommendations;
  };

  // Calculate projected metrics
  const calculateProjectedMetrics = (data: AssessmentData, score: number) => {
    const revenueMultipliers = {
      'under_50k': 25000,
      '50k_100k': 75000,
      '100k_200k': 150000,
      '200k_500k': 350000,
      '500k_1m': 750000,
      'over_1m': 1200000
    };
    
    const baseRevenue = revenueMultipliers[data.monthlyRevenue] || 50000;
    const industryMultiplier = {
      'technology': 1.4,
      'finance': 1.3,
      'consulting': 1.5,
      'retail': 1.1,
      'logistics': 1.4,
      'restaurant': 1.2,
      'healthcare': 1.0,
      'realestate': 1.3,
      'manufacturing': 1.2,
      'education': 0.9
    }[data.industry] || 1.0;
    
    const timeSavings = Math.round(baseRevenue * 0.3 * industryMultiplier * (score / 100));
    const costReduction = Math.round(baseRevenue * 0.25 * industryMultiplier * (score / 100));
    const revenueIncrease = Math.round(baseRevenue * 0.2 * industryMultiplier * (score / 100));
    const customerSatisfaction = Math.min(98, Math.round(75 + (score * 0.2)));
    const paybackPeriod = Math.max(1, Math.round(6 - (score * 0.05)));
    
    return {
      timeSavings: `AED ${timeSavings.toLocaleString()}`,
      costReduction: `AED ${costReduction.toLocaleString()}`,
      revenueIncrease: `AED ${revenueIncrease.toLocaleString()}`,
      customerSatisfaction: `${customerSatisfaction}%`,
      paybackPeriod
    };
  };

  // Save lead to database
  const saveLead = async (assessmentData: AssessmentData, leadData: LeadData, results: AssessmentResults) => {
    try {
      const { data, error } = await supabase
        .from('sme_leads')
        .insert({
          company_name: leadData.companyName,
          company_name_ar: leadData.companyNameAr,
          contact_name: leadData.contactName,
          email: leadData.email,
          phone: leadData.phone,
          whatsapp_number: leadData.whatsappNumber,
          industry: assessmentData.industry,
          emirates: leadData.emirates,
          monthly_revenue_range: assessmentData.monthlyRevenue,
          employee_count_range: assessmentData.employeeCount,
          preferred_language: leadData.preferredLanguage,
          ai_readiness_score: results.aiReadinessScore,
          assessment_responses: assessmentData,
          personalized_plan: results.recommendations,
          lead_source: 'ai_readiness_assessment',
          lead_status: 'new',
          follow_up_priority: results.aiReadinessScore > 70 ? 'HIGH' : results.aiReadinessScore > 40 ? 'MEDIUM' : 'LOW',
          conversion_probability: Math.min(95, Math.max(10, results.aiReadinessScore + 10))
        });

      if (error) throw error;
      
      // Increment lead counter
      setLeadCounter(prev => prev + 1);
      
      toast.success(
        language === 'ar' 
          ? 'تم حفظ تقييمك بنجاح! سنتواصل معك قريباً.'
          : 'Assessment saved successfully! We\'ll contact you soon.'
      );
      
      return data;
    } catch (error) {
      console.error('Error saving lead:', error);
      toast.error(
        language === 'ar'
          ? 'حدث خطأ في حفظ التقييم. يرجى المحاولة مرة أخرى.'
          : 'Error saving assessment. Please try again.'
      );
      return null;
    }
  };

  // Handle form submission
  const onSubmit = async (data: any) => {
    if (currentStep < assessmentSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
      setAssessmentData(prev => ({ ...prev, ...data }));
    } else {
      setIsCalculating(true);
      
      // Combine all data
      const fullAssessmentData = { ...assessmentData, ...data } as AssessmentData;
      const fullLeadData = data as LeadData;
      
      // Calculate results
      const aiReadinessScore = calculateAIReadiness(fullAssessmentData);
      const recommendations = generateRecommendations(fullAssessmentData, aiReadinessScore);
      const projectedMetrics = calculateProjectedMetrics(fullAssessmentData, aiReadinessScore);
      
      const assessmentResults: AssessmentResults = {
        aiReadinessScore,
        recommendations,
        projectedMetrics
      };
      
      // Save to database
      await saveLead(fullAssessmentData, fullLeadData, assessmentResults);
      
      setResults(assessmentResults);
      setLeadData(fullLeadData);
      setIsCalculating(false);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const downloadReport = () => {
    if (!results) return;
    
    const reportData = {
      company: leadData.companyName,
      aiReadinessScore: results.aiReadinessScore,
      recommendations: results.recommendations,
      projectedMetrics: results.projectedMetrics,
      timestamp: new Date().toISOString(),
      platform: 'Hikma Digital - UAE Charter Certified'
    };
    
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hikma-ai-readiness-report-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const initiateWhatsAppConsultation = () => {
    const message = encodeURIComponent(
      language === 'ar'
        ? `السلام عليكم! أكملت للتو تقييم الجاهزية للذكاء الاصطناعي لشركة ${leadData.companyName}. نقاط الجاهزية: ${results?.aiReadinessScore}%. أريد جدولة استشارة مجانية.`
        : `Hello! I just completed the AI Readiness Assessment for ${leadData.companyName}. Readiness Score: ${results?.aiReadinessScore}%. I'd like to schedule a free consultation.`
    );
    const whatsappURL = `https://wa.me/971501234567?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  // Live lead counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setLeadCounter(prev => prev + 1);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  if (results) {
    return (
      <div className="min-h-screen bg-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mb-6 relative">
              <span className="text-4xl font-light text-white">{results.aiReadinessScore}</span>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
            </div>
            <h1 className={`text-3xl lg:text-4xl font-light mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              <span className="gradient-text font-bold">
                {language === 'ar' ? 'نقاط جاهزية الذكاء الاصطناعي' : 'Your AI Readiness Score'}
              </span>
            </h1>
            <p className={`text-xl text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {results.aiReadinessScore < 30 
                ? (language === 'ar' ? 'مرحلة بناء الأساس' : 'Foundation Building Phase')
                : results.aiReadinessScore < 60 
                ? (language === 'ar' ? 'جاهز لتنفيذ الذكاء الاصطناعي' : 'Ready for AI Implementation')
                : (language === 'ar' ? 'جاهز للتكامل المتقدم للذكاء الاصطناعي' : 'Advanced AI Integration Ready')
              }
            </p>
          </motion.div>

          {/* Projected Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {Object.entries(results.projectedMetrics).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="text-2xl font-bold gradient-text mb-2">
                  {key === 'paybackPeriod' ? `${value} ${language === 'ar' ? 'شهر' : 'months'}` : value}
                </div>
                <div className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {key === 'timeSavings' && (language === 'ar' ? 'توفير الوقت شهرياً' : 'Monthly Time Savings')}
                  {key === 'costReduction' && (language === 'ar' ? 'تقليل التكاليف شهرياً' : 'Monthly Cost Reduction')}
                  {key === 'revenueIncrease' && (language === 'ar' ? 'زيادة الإيرادات شهرياً' : 'Monthly Revenue Increase')}
                  {key === 'customerSatisfaction' && (language === 'ar' ? 'رضا العملاء' : 'Customer Satisfaction')}
                  {key === 'paybackPeriod' && (language === 'ar' ? 'فترة الاسترداد' : 'Payback Period')}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Personalized Recommendations */}
          <div className="mb-12">
            <h2 className={`text-2xl font-light mb-8 text-center text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'توصيات مخصصة لعملك' : 'Personalized Recommendations for Your Business'}
            </h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {results.recommendations.map((recommendation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      recommendation.priority === 'URGENT' ? 'bg-red-500/20 text-red-400' :
                      recommendation.priority === 'HIGH' ? 'bg-orange-500/20 text-orange-400' :
                      recommendation.priority === 'MEDIUM' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {recommendation.priority} {language === 'ar' ? 'أولوية' : 'PRIORITY'}
                    </span>
                    <span className="text-sm text-gray-400">{recommendation.timeline}</span>
                  </div>
                  
                  <h3 className={`text-xl font-medium text-white mb-3 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? recommendation.titleAr : recommendation.title}
                  </h3>
                  <p className={`text-gray-300 mb-4 font-light ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? recommendation.descriptionAr : recommendation.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? 'العائد المتوقع:' : 'Expected ROI:'}
                      </span>
                      <span className="text-sm text-green-400">{recommendation.expectedROI}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? 'الاستثمار:' : 'Investment:'}
                      </span>
                      <span className="text-sm text-blue-400">{recommendation.investmentRange}</span>
                    </div>
                  </div>

                  {recommendation.features && (
                    <div className="mt-4">
                      <p className={`text-sm text-gray-400 mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {language === 'ar' ? 'الميزات المتضمنة:' : 'Included Features:'}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {recommendation.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-primary-500/20 text-primary-300 rounded text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="glass-card p-8 text-center">
            <h3 className={`text-2xl font-light mb-4 text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'هل أنت مستعد لبدء تحولك؟' : 'Ready to Start Your Transformation?'}
            </h3>
            <p className={`text-gray-300 mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar'
                ? 'احجز استشارة مجانية مدتها 30 دقيقة مع خبراء الذكاء الاصطناعي في دبي'
                : 'Schedule a free 30-minute consultation with our Dubai AI specialists'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={initiateWhatsAppConsultation}
                className={`bg-green-600 text-white font-medium rounded-lg px-6 py-3 hover:bg-green-700 transition-all duration-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}
              >
                {language === 'ar' ? 'استشارة فورية عبر واتساب' : 'Instant WhatsApp Consultation'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadReport}
                className={`bg-white text-black font-medium rounded-lg px-6 py-3 hover:bg-gray-100 transition-all duration-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}
              >
                <Download className={`w-4 h-4 inline ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {language === 'ar' ? 'تحميل التقرير الكامل' : 'Download Full Report'}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse mb-6">
              <div className="flex items-center px-4 py-2 glass-card">
                <TrendingUp className="w-4 h-4 text-green-400 mr-2 rtl:ml-2 rtl:mr-0" />
                <span className={`text-sm font-light text-green-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {leadCounter.toLocaleString()} {language === 'ar' ? 'شركة تم تقييمها' : 'SMEs Assessed'}
                </span>
              </div>
              <div className="flex items-center px-4 py-2 glass-card">
                <Sparkles className="w-4 h-4 text-primary-400 mr-2 rtl:ml-2 rtl:mr-0" />
                <span className={`text-sm font-light text-primary-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {language === 'ar' ? 'مجاني 100%' : '100% Free'}
                </span>
              </div>
            </div>
            
            <h1 className={`text-4xl lg:text-6xl font-extralight tracking-tight mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              <span className="gradient-text font-bold">
                {language === 'ar' ? 'تقييم جاهزية الذكاء الاصطناعي' : 'Dubai SME AI Readiness'}
              </span>
              <br />
              <span className="text-white font-light">
                {language === 'ar' ? 'للشركات الصغيرة والمتوسطة في دبي' : 'Assessment'}
              </span>
            </h1>
            <p className={`text-xl font-light text-gray-300 max-w-3xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar'
                ? 'اكتشف إمكانات عملك للتحول بالذكاء الاصطناعي واحصل على خطة مخصصة للنجاح في السوق الإماراتي'
                : 'Discover your business potential for AI transformation and get a personalized roadmap for success in the UAE market'
              }
            </p>
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'التقدم' : 'Progress'}
            </span>
            <span className="text-sm text-primary-400">
              {currentStep + 1} / {assessmentSteps.length}
            </span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / assessmentSteps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Assessment Form */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-8"
          >
            <h2 className={`text-2xl font-medium text-white mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {assessmentSteps[currentStep].title}
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {assessmentSteps[currentStep].questions.map((question, index) => (
                <div key={question.name}>
                  <label className={`block text-sm font-medium text-gray-300 mb-3 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {question.label}
                    {question.required && <span className="text-red-400 ml-1">*</span>}
                  </label>

                  {question.type === 'select' && (
                    <select
                      {...register(question.name, { required: question.required })}
                      className={`w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}
                    >
                      <option value="">
                        {language === 'ar' ? 'اختر خياراً' : 'Select an option'}
                      </option>
                      {question.options?.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )}

                  {question.type === 'text' && (
                    <input
                      type="text"
                      {...register(question.name, { required: question.required })}
                      className={`w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400 ${isRTL ? 'font-arabic text-right' : 'font-inter'}`}
                      dir="auto"
                    />
                  )}

                  {question.type === 'email' && (
                    <input
                      type="email"
                      {...register(question.name, { 
                        required: question.required,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: language === 'ar' ? 'بريد إلكتروني غير صحيح' : 'Invalid email address'
                        }
                      })}
                      className={`w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400 ${isRTL ? 'font-arabic text-right' : 'font-inter'}`}
                    />
                  )}

                  {question.type === 'tel' && (
                    <input
                      type="tel"
                      {...register(question.name, { required: question.required })}
                      className={`w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400 ${isRTL ? 'font-arabic text-right' : 'font-inter'}`}
                      placeholder="+971 50 123 4567"
                    />
                  )}

                  {question.type === 'scale' && (
                    <div className="space-y-4">
                      <input
                        type="range"
                        {...register(question.name, { required: question.required })}
                        min={question.min}
                        max={question.max}
                        className="w-full accent-primary-600"
                      />
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>{question.labels?.[0]}</span>
                        <span>{question.labels?.[1]}</span>
                      </div>
                    </div>
                  )}

                  {question.type === 'percentage' && (
                    <div className="space-y-4">
                      <input
                        type="range"
                        {...register(question.name, { required: question.required })}
                        min="0"
                        max="100"
                        className="w-full accent-primary-600"
                      />
                      <div className="text-center">
                        <span className="text-primary-400 font-medium">
                          {watch(question.name) || 0}%
                        </span>
                      </div>
                    </div>
                  )}

                  {question.type === 'multiple' && (
                    <div className="grid grid-cols-2 gap-3">
                      {question.options?.map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center space-x-3 rtl:space-x-reverse p-3 border border-gray-700 rounded-lg hover:bg-white/5 cursor-pointer transition-colors"
                        >
                          <input
                            type="checkbox"
                            value={option.value}
                            {...register(question.name, { required: question.required })}
                            className="w-4 h-4 text-primary-600 bg-gray-700 border-gray-600 rounded focus:ring-primary-500"
                          />
                          <span className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}

                  {errors[question.name] && (
                    <p className="text-red-400 text-sm mt-1">
                      {language === 'ar' ? 'هذا الحقل مطلوب' : 'This field is required'}
                    </p>
                  )}
                </div>
              ))}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={currentStep === 0}
                  className={`flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 glass-card glass-card-hover text-gray-300 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${isRTL ? 'font-arabic' : 'font-inter'}`}
                >
                  <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  <span>{language === 'ar' ? 'السابق' : 'Previous'}</span>
                </button>

                <button
                  type="submit"
                  disabled={isCalculating}
                  className={`flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${isRTL ? 'font-arabic' : 'font-inter'}`}
                >
                  {isCalculating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>{language === 'ar' ? 'جاري الحساب...' : 'Calculating...'}</span>
                    </>
                  ) : currentStep === assessmentSteps.length - 1 ? (
                    <>
                      <BarChart3 className="w-4 h-4" />
                      <span>{language === 'ar' ? 'احصل على النتائج' : 'Get Results'}</span>
                    </>
                  ) : (
                    <>
                      <span>{language === 'ar' ? 'التالي' : 'Next'}</span>
                      <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </AnimatePresence>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center space-x-8 rtl:space-x-reverse">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Shield className="w-5 h-5 text-green-400" />
              <span className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'معتمد من ميثاق الإمارات' : 'UAE Charter Certified'}
              </span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Users className="w-5 h-5 text-blue-400" />
              <span className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? 'إشراف بشري 100%' : '100% Human Oversight'}
              </span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Clock className="w-5 h-5 text-purple-400" />
              <span className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {language === 'ar' ? '5 دقائق فقط' : 'Only 5 Minutes'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;