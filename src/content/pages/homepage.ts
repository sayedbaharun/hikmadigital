import { HomepageContent } from '../types';

export const homepageContent: HomepageContent = {
  hero: {
    badge: {
      en: 'Hikma Digital',
      ar: 'حكمة ديجيتال'
    },
    headline: {
      en: 'Your AI Partner. Human Touch.',
      ar: 'شريكك في الذكاء الاصطناعي. بلمسة إنسانية.'
    },
    subheadline: {
      en: 'Transform Dubai Business in 30 Days',
      ar: 'حوّل أعمالك في دبي خلال 30 يوماً'
    },
    cta: {
      primary: {
        label: {
          en: 'Start Free',
          ar: 'ابدأ مجاناً'
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
      poster: '/images/video-poster.jpg',
      autoplay: false
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
      en: 'Every Dubai business faces the same challenge.',
      ar: 'كل عمل في دبي يواجه نفس التحدي.'
    },
    problems: [
      {
        en: 'Manual processes eating profits.',
        ar: 'العمليات اليدوية تلتهم الأرباح.'
      },
      {
        en: 'Lost customers to slow response.',
        ar: 'خسارة العملاء بسبب البطء في الاستجابة.'
      },
      {
        en: 'Data everywhere, insights nowhere.',
        ar: 'البيانات في كل مكان، والرؤى في لا مكان.'
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
          en: 'Custom-built for your needs',
          ar: 'مصممة خصيصاً لاحتياجاتك'
        },
        link: '/ai-agents',
        gradient: 'from-blue-500 to-purple-500'
      },
      {
        id: 'human-coaches',
        icon: 'Users',
        title: {
          en: 'Human Coaches',
          ar: 'المدربون البشريون'
        },
        description: {
          en: 'Expert guidance when you need it',
          ar: 'إرشاد خبير عندما تحتاجه'
        },
        link: '/team',
        gradient: 'from-purple-500 to-pink-500'
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
          en: 'Less Manual Work',
          ar: 'أقل عمل يدوي'
        }
      },
      {
        id: 'roi',
        value: 250,
        suffix: '%',
        label: {
          en: 'Average ROI',
          ar: 'متوسط العائد على الاستثمار'
        }
      },
      {
        id: 'rating',
        value: 4.8,
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