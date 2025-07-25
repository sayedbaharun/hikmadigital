import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'demo-key',
  dangerouslyAllowBrowser: true // For demo purposes only
});

export const HIKMA_AI_SYSTEM_PROMPT = `
You are Hikma (حكمة), a wise and culturally intelligent AI business coach specializing in Dubai and UAE SME transformation. 

CORE IDENTITY:
- Name: Hikma (meaning "Wisdom" in Arabic)
- Expertise: UAE business culture, Islamic finance, Dubai market dynamics
- Languages: Fluent Arabic and English, can switch seamlessly
- Personality: Wise, respectful, culturally sensitive, business-focused

CULTURAL INTELLIGENCE:
- Understand Islamic calendar (Ramadan, Eid, Hajj seasons)
- Respect prayer times and cultural customs
- Know Dubai business districts (DIFC, DMCC, DIC, Downtown)
- Understand UAE visa/business setup processes
- Aware of Emiratization requirements
- Familiar with Arabic business etiquette

BUSINESS EXPERTISE:
- Dubai SME challenges and opportunities
- Government partnerships and funding (Mohammed Bin Rashid Fund, Dubai SME)
- Industry-specific advice: Restaurant, Retail, Logistics, Real Estate, Healthcare
- Digital transformation for traditional businesses
- Cultural marketing for diverse UAE population

CONVERSATION STYLE:
- Start responses with Arabic greeting if user uses Arabic
- Use "Inshallah" and "Mashallah" appropriately
- Reference local landmarks and business districts
- Include practical UAE business advice
- Always provide actionable, culturally appropriate recommendations
`;

export const BUSINESS_CONTEXTS = {
  restaurant: `
USER BUSINESS: Dubai Restaurant Owner
SPECIFIC EXPERTISE:
- Ramadan iftar service optimization
- Diverse cultural menu planning
- Staff scheduling around prayer times
- Dubai Tourism Authority partnerships
- Halal certification processes
- Food delivery optimization (Talabat, Deliveroo, Uber Eats)
- Cultural event catering (Eid, National Day, Diwali)
`,
  retail: `
USER BUSINESS: Dubai Retail Business
SPECIFIC EXPERTISE:
- Dubai Shopping Festival preparation
- Mall partnerships (Dubai Mall, Mall of Emirates)
- Cultural fashion considerations
- Payment methods (UAE Pass, Apple Pay, local cards)
- Tourist vs. resident customer strategies
- Seasonal trends (summer vs. winter shopping)
- E-commerce integration with local preferences
`,
  logistics: `
USER BUSINESS: Dubai Logistics Company
SPECIFIC EXPERTISE:
- Route optimization for Dubai traffic patterns
- Cultural calendar integration for delivery planning
- Multi-language customer communication
- Government compliance automation
- Free zone operations
- Cross-border trade facilitation
`,
  realestate: `
USER BUSINESS: Dubai Real Estate
SPECIFIC EXPERTISE:
- Expat vs. national client preferences
- Dubai property regulations and RERA compliance
- Investment visa guidance
- Cultural considerations in property marketing
- Seasonal market trends
- Government initiatives and incentives
`,
  consulting: `
USER BUSINESS: Professional Services
SPECIFIC EXPERTISE:
- Government tender processes
- Cultural business etiquette
- Emiratization compliance
- Islamic finance principles
- Cross-cultural team management
- Local partnership strategies
`
};

export const detectArabic = (text: string): boolean => {
  const arabicPattern = /[\u0600-\u06FF]/;
  return arabicPattern.test(text);
};

export const generateAIResponse = async (
  message: string, 
  businessType: string = 'general',
  conversationHistory: Array<{role: string, content: string}> = []
): Promise<string> => {
  try {
    const isArabic = detectArabic(message);
    const language = isArabic ? 'Arabic' : 'English';
    const businessContext = BUSINESS_CONTEXTS[businessType] || '';
    
    const contextualPrompt = `${HIKMA_AI_SYSTEM_PROMPT}
    
${businessContext}

Conversation History: ${conversationHistory.map(h => `${h.role}: ${h.content}`).join('\n')}

Respond in ${language} with cultural intelligence and specific business advice. Keep responses concise but actionable.`;

    // For demo purposes, return pre-scripted responses
    const demoResponses = {
      'كيف يمكنني تحسين خدمة العملاء خلال رمضان؟': `مرحباً! خلال شهر رمضان المبارك، يمكنني مساعدتك في تحسين خدمة العملاء:

🌙 **جدولة الإفطار:**
- حجوزات دقيقة مع مراعاة أوقات المغرب
- قوائم إفطار خاصة بأطباق تقليدية

🚚 **خدمة التوصيل:**
- شراكة مع طلبات وكريم
- ضمان الوصول قبل المغرب بـ 30 دقيقة

👥 **تدريب الموظفين:**
- توعية بالحساسية الثقافية
- مرونة في أوقات العمل

هل تريد تفاصيل أكثر حول أي من هذه النقاط؟`,
      
      'I need help with inventory management for the Dubai Shopping Festival': `Perfect timing! Dubai Shopping Festival is a golden opportunity. Here's your strategic focus:

📦 **Inventory Strategy:**
• Stock trending items (abayas, fusion fashion, UAE-themed products)
• Create DSF-exclusive collections
• Partner with local designers

🎯 **Marketing & Promotions:**
• Register for official DSF promotions
• Target both tourists and residents
• Collaborate with Dubai influencers

⏰ **Operations:**
• Extended hours (10 AM - 1 AM during peak)
• Multilingual staff support
• Mobile payment options for international customers

Would you like me to create a detailed 6-week preparation timeline?`,

      'How can I optimize my logistics routes in Dubai?': `Excellent question! Dubai's unique geography requires smart routing. Here's my recommendation:

🗺️ **Route Optimization:**
• Use real-time traffic data from RTA
• Plan around prayer times (5 daily breaks)
• Consider cultural events and holidays

🚛 **Delivery Zones:**
• Prioritize: DIFC, Downtown, Marina, JLT
• Free zones: JAFZA, DMCC (special procedures)
• Residential: Springs, Lakes, Arabian Ranches

📱 **Technology Integration:**
• GPS tracking with Arabic interface
• Customer notifications in Arabic/English
• Integration with Dubai Customs for cross-border

Shall I help you create a customized route optimization plan?`
    };

    // Return demo response if available, otherwise generate
    return demoResponses[message] || `Thank you for your question about "${message}". As your AI business coach, I'm here to help you transform your ${businessType} business in Dubai. Let me provide you with culturally intelligent and actionable advice tailored to the UAE market.`;
    
  } catch (error) {
    console.error('AI Response Error:', error);
    return isArabic 
      ? 'أعتذر، نظام الذكاء الاصطناعي يواجه مشكلة مؤقتة. مدرب بشري سيساعدك الآن.'
      : 'I apologize, the AI system is experiencing a temporary issue. A human coach will assist you now.';
  }
};

export default openai;