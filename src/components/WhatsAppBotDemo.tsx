import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone,
  Video,
  Search,
  MoreVertical,
  Paperclip,
  Mic,
  Send,
  Check,
  CheckCheck,
  Clock,
  Play,
  Pause,
  ShoppingBag,
  Calendar,
  CreditCard,
  Bot,
  User,
  Sparkles,
  Globe
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Message {
  id: number;
  type: 'text' | 'voice' | 'product' | 'payment' | 'appointment';
  sender: 'user' | 'bot';
  content?: string;
  contentAr?: string;
  timestamp: Date;
  status: 'sent' | 'delivered' | 'read';
  voiceDuration?: number;
  products?: Array<{
    name: string;
    nameAr: string;
    price: number;
    image: string;
  }>;
  paymentLink?: string;
  appointmentDate?: string;
  quickReplies?: Array<{
    text: string;
    textAr: string;
  }>;
}

interface WhatsAppBotDemoProps {
  openContactForm?: () => void;
}

const WhatsAppBotDemo: React.FC<WhatsAppBotDemoProps> = ({ openContactForm }) => {
  const { language, isRTL } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [activeDemo, setActiveDemo] = useState<'restaurant' | 'appointment' | 'product' | null>(null);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Demo scenarios
  const demoScenarios = {
    restaurant: {
      title: language === 'ar' ? 'طلب طعام بالعربية' : 'Arabic Food Order',
      messages: [
        {
          id: 1,
          type: 'text' as const,
          sender: 'user' as const,
          content: 'السلام عليكم، أريد أن أطلب طعاماً',
          contentAr: 'السلام عليكم، أريد أن أطلب طعاماً',
          timestamp: new Date(),
          status: 'read' as const
        },
        {
          id: 2,
          type: 'text' as const,
          sender: 'bot' as const,
          content: 'وعليكم السلام! أهلاً بك في مطعم البيت العربي 🍽️\n\nكيف يمكنني مساعدتك اليوم؟',
          contentAr: 'وعليكم السلام! أهلاً بك في مطعم البيت العربي 🍽️\n\nكيف يمكنني مساعدتك اليوم؟',
          timestamp: new Date(),
          status: 'read' as const,
          quickReplies: [
            { text: 'View Menu', textAr: 'عرض القائمة' },
            { text: 'Today\'s Special', textAr: 'طبق اليوم' },
            { text: 'Book Table', textAr: 'حجز طاولة' }
          ]
        },
        {
          id: 3,
          type: 'voice' as const,
          sender: 'user' as const,
          voiceDuration: 3,
          timestamp: new Date(),
          status: 'read' as const
        },
        {
          id: 4,
          type: 'text' as const,
          sender: 'bot' as const,
          content: 'شكراً لرسالتك الصوتية! سمعت أنك تريد طلب وجبة عائلية. إليك أفضل عروضنا:',
          contentAr: 'شكراً لرسالتك الصوتية! سمعت أنك تريد طلب وجبة عائلية. إليك أفضل عروضنا:',
          timestamp: new Date(),
          status: 'read' as const
        },
        {
          id: 5,
          type: 'product' as const,
          sender: 'bot' as const,
          products: [
            { name: 'Family Feast', nameAr: 'الوليمة العائلية', price: 199, image: '🍖' },
            { name: 'Arabic Mixed Grill', nameAr: 'مشاوي مشكلة عربية', price: 249, image: '🥘' },
            { name: 'Iftar Special', nameAr: 'عرض الإفطار الخاص', price: 179, image: '🌙' }
          ],
          timestamp: new Date(),
          status: 'read' as const
        }
      ]
    },
    appointment: {
      title: language === 'ar' ? 'حجز موعد مع مراعاة أوقات الصلاة' : 'Prayer-Aware Appointment Booking',
      messages: [
        {
          id: 1,
          type: 'text' as const,
          sender: 'user' as const,
          content: 'I need to schedule a consultation',
          contentAr: 'أحتاج إلى جدولة استشارة',
          timestamp: new Date(),
          status: 'read' as const
        },
        {
          id: 2,
          type: 'text' as const,
          sender: 'bot' as const,
          content: 'I\'d be happy to help you schedule a consultation! 📅\n\nI\'ll make sure to avoid prayer times. Which day works best for you?',
          contentAr: 'يسعدني مساعدتك في جدولة استشارة! 📅\n\nسأتأكد من تجنب أوقات الصلاة. ما هو اليوم المناسب لك؟',
          timestamp: new Date(),
          status: 'read' as const,
          quickReplies: [
            { text: 'Tomorrow', textAr: 'غداً' },
            { text: 'This Week', textAr: 'هذا الأسبوع' },
            { text: 'Next Week', textAr: 'الأسبوع القادم' }
          ]
        },
        {
          id: 3,
          type: 'appointment' as const,
          sender: 'bot' as const,
          appointmentDate: 'Tomorrow, November 15',
          content: 'Available slots (avoiding prayer times):',
          contentAr: 'المواعيد المتاحة (مع تجنب أوقات الصلاة):',
          timestamp: new Date(),
          status: 'read' as const,
          quickReplies: [
            { text: '9:00 AM', textAr: '9:00 صباحاً' },
            { text: '10:30 AM', textAr: '10:30 صباحاً' },
            { text: '2:30 PM', textAr: '2:30 مساءً' },
            { text: '4:00 PM', textAr: '4:00 مساءً' }
          ]
        }
      ]
    },
    product: {
      title: language === 'ar' ? 'استفسار عن المنتج' : 'Product Inquiry',
      messages: [
        {
          id: 1,
          type: 'text' as const,
          sender: 'user' as const,
          content: 'Do you have the new iPhone in stock?',
          contentAr: 'هل لديكم الآيفون الجديد في المخزون؟',
          timestamp: new Date(),
          status: 'read' as const
        },
        {
          id: 2,
          type: 'text' as const,
          sender: 'bot' as const,
          content: 'Yes! We have the iPhone 15 Pro in stock. Here are the available options:',
          contentAr: 'نعم! لدينا آيفون 15 برو في المخزون. إليك الخيارات المتاحة:',
          timestamp: new Date(),
          status: 'read' as const
        },
        {
          id: 3,
          type: 'product' as const,
          sender: 'bot' as const,
          products: [
            { name: 'iPhone 15 Pro 128GB', nameAr: 'آيفون 15 برو 128 جيجا', price: 4299, image: '📱' },
            { name: 'iPhone 15 Pro 256GB', nameAr: 'آيفون 15 برو 256 جيجا', price: 4799, image: '📱' },
            { name: 'iPhone 15 Pro Max 256GB', nameAr: 'آيفون 15 برو ماكس 256 جيجا', price: 5299, image: '📱' }
          ],
          timestamp: new Date(),
          status: 'read' as const
        },
        {
          id: 4,
          type: 'payment' as const,
          sender: 'bot' as const,
          content: 'Would you like to place an order? I can generate a secure payment link for you.',
          contentAr: 'هل تود تقديم طلب؟ يمكنني إنشاء رابط دفع آمن لك.',
          paymentLink: 'https://pay.example.com/secure/abc123',
          timestamp: new Date(),
          status: 'read' as const
        }
      ]
    }
  };

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Start demo
  const startDemo = (demo: 'restaurant' | 'appointment' | 'product') => {
    setActiveDemo(demo);
    setMessages([]);
    
    // Simulate conversation
    const scenario = demoScenarios[demo];
    scenario.messages.forEach((msg, index) => {
      setTimeout(() => {
        if (msg.sender === 'bot') {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, msg]);
          }, 1000);
        } else {
          setMessages(prev => [...prev, msg]);
        }
      }, index * 2000);
    });
  };

  // Metrics based on active demo
  const getMetrics = () => {
    switch (activeDemo) {
      case 'restaurant':
        return {
          responseTime: '< 1 sec',
          satisfaction: '98%',
          ordersProcessed: '2,847',
          languages: ['Arabic', 'English']
        };
      case 'appointment':
        return {
          responseTime: '< 2 sec',
          satisfaction: '96%',
          ordersProcessed: '1,523',
          languages: ['Arabic', 'English', 'Hindi']
        };
      case 'product':
        return {
          responseTime: '< 1 sec',
          satisfaction: '94%',
          ordersProcessed: '3,892',
          languages: ['Arabic', 'English', 'Urdu']
        };
      default:
        return {
          responseTime: '< 2 sec',
          satisfaction: '95%',
          ordersProcessed: '10,000+',
          languages: ['Arabic', 'English', 'Hindi', 'Urdu']
        };
    }
  };

  const metrics = getMetrics();

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
          <span className="gradient-text">
            {language === 'ar' ? 'عرض واتساب للأعمال' : 'WhatsApp Business Bot Demo'}
          </span>
        </h2>
        <p className={`text-lg text-gray-300 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : 'font-inter'}`}>
          {language === 'ar'
            ? 'شاهد كيف يتعامل بوت واتساب الذكي مع العملاء بالعربية والإنجليزية'
            : 'See how our intelligent WhatsApp bot handles customers in Arabic and English'}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* WhatsApp Interface */}
        <div className="lg:col-span-2">
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            {/* WhatsApp Header */}
            <div className="bg-[#075e54] p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium">
                    {language === 'ar' ? 'حكمة للأعمال' : 'Hikma Business'}
                  </h3>
                  <p className="text-xs text-green-200 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse" />
                    {language === 'ar' ? 'نشط الآن' : 'Active now'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <Video className="w-5 h-5 text-white/80 cursor-pointer hover:text-white" />
                <Phone className="w-5 h-5 text-white/80 cursor-pointer hover:text-white" />
                <Search className="w-5 h-5 text-white/80 cursor-pointer hover:text-white" />
                <MoreVertical className="w-5 h-5 text-white/80 cursor-pointer hover:text-white" />
              </div>
            </div>

            {/* Chat Area */}
            <div 
              className="h-96 overflow-y-auto p-4 space-y-4"
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundColor: '#0b141a'
              }}
            >
              {messages.length === 0 ? (
                <div className="text-center py-20">
                  <Bot className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className={`text-gray-500 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'اختر عرضاً توضيحياً للبدء' : 'Select a demo to start'}
                  </p>
                </div>
              ) : (
                <>
                  <AnimatePresence>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-xs lg:max-w-md ${
                          message.sender === 'user' 
                            ? 'bg-[#25d366] text-white' 
                            : 'bg-white text-gray-900'
                        } rounded-lg px-4 py-2 relative`}>
                          {/* Message Content */}
                          {message.type === 'text' && (
                            <p className={`text-sm ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                              {language === 'ar' ? message.contentAr || message.content : message.content}
                            </p>
                          )}

                          {/* Voice Message */}
                          {message.type === 'voice' && (
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                              <button
                                onClick={() => setIsPlaying(isPlaying === message.id ? null : message.id)}
                                className="p-2 hover:bg-black/10 rounded-full transition-colors"
                              >
                                {isPlaying === message.id ? (
                                  <Pause className="w-4 h-4" />
                                ) : (
                                  <Play className="w-4 h-4" />
                                )}
                              </button>
                              <div className="flex-1">
                                <div className="h-8 flex items-center space-x-1">
                                  {Array.from({ length: 20 }, (_, i) => (
                                    <div
                                      key={i}
                                      className="w-1 bg-current rounded-full"
                                      style={{
                                        height: `${Math.random() * 20 + 10}px`,
                                        opacity: isPlaying === message.id ? 1 : 0.5
                                      }}
                                    />
                                  ))}
                                </div>
                              </div>
                              <span className="text-xs opacity-70">
                                0:{message.voiceDuration?.toString().padStart(2, '0')}
                              </span>
                            </div>
                          )}

                          {/* Product Catalog */}
                          {message.type === 'product' && message.products && (
                            <div className="space-y-3">
                              <p className={`text-sm mb-3 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                                {language === 'ar' ? message.contentAr || message.content : message.content}
                              </p>
                              {message.products.map((product, idx) => (
                                <div key={idx} className="bg-gray-100 rounded-lg p-3 flex items-center justify-between">
                                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <div className="text-2xl">{product.image}</div>
                                    <div>
                                      <p className={`font-medium text-sm ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                                        {language === 'ar' ? product.nameAr : product.name}
                                      </p>
                                      <p className="text-green-600 font-bold">
                                        {product.price} AED
                                      </p>
                                    </div>
                                  </div>
                                  <ShoppingBag className="w-4 h-4 text-gray-500" />
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Payment Link */}
                          {message.type === 'payment' && (
                            <div className="space-y-2">
                              <p className={`text-sm ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                                {language === 'ar' ? message.contentAr || message.content : message.content}
                              </p>
                              <a
                                href={message.paymentLink}
                                className="flex items-center justify-center space-x-2 rtl:space-x-reverse bg-green-500 text-white rounded-lg py-2 px-4 hover:bg-green-600 transition-colors"
                              >
                                <CreditCard className="w-4 h-4" />
                                <span className={`text-sm font-medium ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                                  {language === 'ar' ? 'ادفع بأمان' : 'Pay Securely'}
                                </span>
                              </a>
                            </div>
                          )}

                          {/* Appointment */}
                          {message.type === 'appointment' && (
                            <div className="space-y-2">
                              <p className={`text-sm ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                                {language === 'ar' ? message.contentAr || message.content : message.content}
                              </p>
                              <div className="flex items-center space-x-2 rtl:space-x-reverse text-blue-600">
                                <Calendar className="w-4 h-4" />
                                <span className="font-medium">{message.appointmentDate}</span>
                              </div>
                            </div>
                          )}

                          {/* Quick Replies */}
                          {message.quickReplies && (
                            <div className="mt-3 space-x-2 rtl:space-x-reverse">
                              {message.quickReplies.map((reply, idx) => (
                                <button
                                  key={idx}
                                  className="inline-block bg-white border border-gray-300 rounded-full px-3 py-1 text-xs text-gray-700 hover:bg-gray-100 transition-colors"
                                >
                                  {language === 'ar' ? reply.textAr : reply.text}
                                </button>
                              ))}
                            </div>
                          )}

                          {/* Message Status */}
                          <div className="flex items-center justify-end space-x-1 mt-1">
                            <span className="text-xs opacity-60">
                              {message.timestamp.toLocaleTimeString('en-US', { 
                                hour: 'numeric', 
                                minute: '2-digit' 
                              })}
                            </span>
                            {message.sender === 'user' && (
                              <div className="text-blue-500">
                                {message.status === 'read' ? (
                                  <CheckCheck className="w-4 h-4" />
                                ) : message.status === 'delivered' ? (
                                  <CheckCheck className="w-4 h-4 text-gray-400" />
                                ) : (
                                  <Check className="w-4 h-4 text-gray-400" />
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white rounded-lg px-4 py-2">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="bg-[#1e2c33] p-3 flex items-center space-x-3 rtl:space-x-reverse">
              <Paperclip className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-300" />
              <div className="flex-1 bg-[#2a3942] rounded-3xl px-4 py-2 flex items-center">
                <input
                  type="text"
                  placeholder={language === 'ar' ? 'اكتب رسالة...' : 'Type a message...'}
                  className={`flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-sm ${
                    isRTL ? 'font-arabic text-right' : 'font-inter'
                  }`}
                  dir="auto"
                />
              </div>
              <Mic className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-300" />
            </div>
          </div>
        </div>

        {/* Controls & Metrics */}
        <div className="space-y-6">
          {/* Demo Scenarios */}
          <div className="glass-card p-6">
            <h3 className={`text-lg font-semibold text-white mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'سيناريوهات العرض' : 'Demo Scenarios'}
            </h3>
            <div className="space-y-3">
              {Object.entries(demoScenarios).map(([key, scenario]) => (
                <motion.button
                  key={key}
                  onClick={() => startDemo(key as any)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full glass-card p-4 text-left rtl:text-right transition-all ${
                    activeDemo === key ? 'ring-2 ring-primary-500' : ''
                  }`}
                >
                  <h4 className={`font-medium text-white mb-1 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {scenario.title}
                  </h4>
                  <p className={`text-xs text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {key === 'restaurant' 
                      ? (language === 'ar' ? 'معالجة الطلبات بالصوت والنص' : 'Voice & text order processing')
                      : key === 'appointment'
                      ? (language === 'ar' ? 'جدولة ذكية مع مراعاة الصلاة' : 'Smart scheduling with prayer awareness')
                      : (language === 'ar' ? 'كتالوج المنتجات والدفع' : 'Product catalog & payment')
                    }
                  </p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="glass-card p-6">
            <h3 className={`text-lg font-semibold text-white mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'مقاييس الأداء' : 'Performance Metrics'}
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'وقت الاستجابة' : 'Response Time'}
                  </span>
                  <span className="text-sm font-medium text-primary-400">{metrics.responseTime}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full" style={{ width: '95%' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'رضا العملاء' : 'Customer Satisfaction'}
                  </span>
                  <span className="text-sm font-medium text-green-400">{metrics.satisfaction}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: metrics.satisfaction }} />
                </div>
              </div>

              <div className="pt-4 border-t border-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'الطلبات المعالجة' : 'Orders Processed'}
                  </span>
                  <span className="text-lg font-bold text-white">{metrics.ordersProcessed}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'اللغات المدعومة' : 'Languages Supported'}
                  </span>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    {metrics.languages.map((lang, idx) => (
                      <span key={idx} className="text-xs bg-primary-500/20 text-primary-400 px-2 py-1 rounded">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="glass-card p-6">
            <h3 className={`text-lg font-semibold text-white mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'الميزات الرئيسية' : 'Key Features'}
            </h3>
            <div className="space-y-3">
              {[
                { 
                  icon: <Globe className="w-4 h-4" />, 
                  text: 'Multi-language Support',
                  textAr: 'دعم متعدد اللغات'
                },
                { 
                  icon: <Clock className="w-4 h-4" />, 
                  text: '24/7 Availability',
                  textAr: 'متاح 24/7'
                },
                { 
                  icon: <Sparkles className="w-4 h-4" />, 
                  text: 'AI-Powered Responses',
                  textAr: 'ردود مدعومة بالذكاء الاصطناعي'
                },
                { 
                  icon: <CreditCard className="w-4 h-4" />, 
                  text: 'Secure Payment Links',
                  textAr: 'روابط دفع آمنة'
                },
                { 
                  icon: <Calendar className="w-4 h-4" />, 
                  text: 'Smart Scheduling',
                  textAr: 'جدولة ذكية'
                }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="p-2 bg-primary-500/20 rounded-lg text-primary-400">
                    {feature.icon}
                  </div>
                  <span className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? feature.textAr : feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.button
            onClick={openContactForm}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium py-4 rounded-xl flex items-center justify-center space-x-2 rtl:space-x-reverse hover:shadow-lg hover:shadow-green-500/25 transition-all ${
              isRTL ? 'font-arabic' : 'font-inter'
            }`}
          >
            <Phone className="w-5 h-5" />
            <span>{language === 'ar' ? 'ربط واتساب الخاص بك' : 'Connect Your WhatsApp'}</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppBotDemo;