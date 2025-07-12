import { HomepageContent } from '../types';

export const homepageContent: HomepageContent = {
  hero: {
    badge: {
      en: 'Hikma Digital',
      ar: 'حكمة ديجيتال'
    },
    headline: {
      en: 'Grow Revenue 30% in 90 Days',
      ar: 'زد إيراداتك 30% في 90 يوماً'
    },
    subheadline: {
      en: 'Cut operational costs by 50% while scaling 3x faster - Built for Dubai\'s unique business environment',
      ar: 'خفض التكاليف التشغيلية بنسبة 50% مع النمو 3 أضعاف أسرع - مصمم لبيئة الأعمال الفريدة في دبي'
    },
    cta: {
      primary: {
        label: {
          en: 'Get Free Assessment',
          ar: 'احصل على تقييم مجاني'
        },
        action: 'assessment'
      },
      secondary: {
        label: {
          en: 'Watch Film',
          ar: 'شاهد الفيديو'
        },
        action: 'video'
      }
    },
    video: {
      url: '/videos/ai-visualization.mp4',
      poster: '/images/hero/video-poster.svg',
      autoplay: false
    },
    backgroundPattern: {
      type: 'pattern',
      value: '/images/patterns/geometric-pattern.svg',
      opacity: 0.05,
      position: 'center'
    }
  },
  
  trust: {
    items: [
      {
        icon: 'Shield',
        text: {
          en: 'UAE Charter Certified',
          ar: 'معتمد من ميثاق الإمارات'
        }
      },
      {
        icon: 'Users',
        text: {
          en: '500+ Dubai Companies',
          ar: '500+ شركة في دبي'
        }
      },
      {
        icon: 'MessageCircle',
        text: {
          en: '24/7 Arabic Support',
          ar: 'دعم 24/7 بالعربية'
        }
      }
    ]
  },
  
  problems: {
    intro: {
      en: 'Dubai SMEs lose AED 2.4M yearly to inefficiency.',
      ar: 'الشركات الصغيرة والمتوسطة في دبي تخسر 2.4 مليون درهم سنوياً بسبب عدم الكفاءة.'
    },
    problems: [
      {
        en: 'Owners spend 14 hours daily on operations instead of growth.',
        ar: 'يقضي المالكون 14 ساعة يومياً في العمليات بدلاً من النمو.'
      },
      {
        en: 'WhatsApp orders lost, inventory mismatched, staff overwhelmed.',
        ar: 'طلبات واتساب مفقودة، مخزون غير متطابق، موظفون مرهقون.'
      },
      {
        en: 'Competitors using AI are winning 3x more customers.',
        ar: 'المنافسون الذين يستخدمون الذكاء الاصطناعي يكسبون 3 أضعاف العملاء.'
      }
    ],
    solution: {
      en: 'What if AI could solve this?',
      ar: 'ماذا لو استطاع الذكاء الاصطناعي حل هذا؟'
    },
    solutionSubtext: {
      en: 'With a human touch?',
      ar: 'مع لمسة إنسانية؟'
    }
  },
  
  solutions: {
    cards: [
      {
        id: 'ai-agents',
        icon: 'Bot',
        title: {
          en: 'AI Agents',
          ar: 'وكلاء الذكاء الاصطناعي'
        },
        description: {
          en: '24/7 Arabic/English support, order management, inventory tracking',
          ar: 'دعم 24/7 بالعربية/الإنجليزية، إدارة الطلبات، تتبع المخزون'
        },
        link: '/ai-agents',
        gradient: 'from-primary-500 to-primary-600',
        illustration: {
          src: '/images/illustrations/ai-agent.svg',
          alt: {
            en: 'AI Agent Illustration',
            ar: 'رسم توضيحي لوكيل الذكاء الاصطناعي'
          },
          loading: 'eager'
        }
      },
      {
        id: 'human-coaches',
        icon: 'Users',
        title: {
          en: 'Human Coaches',
          ar: 'المدربون البشريون'
        },
        description: {
          en: 'Dubai market experts, growth strategies, compliance guidance',
          ar: 'خبراء سوق دبي، استراتيجيات النمو، إرشادات الامتثال'
        },
        link: '/team',
        gradient: 'from-gold to-gold-light',
        illustration: {
          src: '/images/illustrations/human-coach.svg',
          alt: {
            en: 'Human Coach Illustration',
            ar: 'رسم توضيحي للمدرب البشري'
          },
          loading: 'eager'
        }
      }
    ]
  },
  
  metrics: {
    items: [
      {
        id: 'manual-work',
        value: 80,
        suffix: '%',
        label: {
          en: 'Automation Rate Achieved',
          ar: 'معدل الأتمتة المحقق'
        }
      },
      {
        id: 'roi',
        value: 312,
        suffix: '%',
        label: {
          en: 'Average ROI',
          ar: 'متوسط العائد على الاستثمار'
        }
      },
      {
        id: 'rating',
        value: 4.9,
        suffix: '/5',
        label: {
          en: 'Customer Rating',
          ar: 'تقييم العملاء'
        },
        decimals: 1
      }
    ]
  },
  
  successStories: {
    title: {
      en: 'Success Stories',
      ar: 'قصص النجاح'
    },
    viewAll: {
      en: 'View All Stories',
      ar: 'عرض جميع القصص'
    }
  }
};