import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mic, Send, Bot, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhatsAppIntegration: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      content: language === 'ar' 
        ? 'مرحباً! أنا حكمة من فريق حكمة ديجيتال. هل تريد تحويل عملك بالذكاء الاصطناعي؟'
        : 'Hello! I\'m Hikma from Hikma Digital team. Would you like to transform your business with AI?',
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const initiateWhatsAppChat = () => {
    const message = encodeURIComponent(
      language === 'ar'
        ? 'مرحباً! أنا مهتم بمعرفة المزيد عن خدمات حكمة ديجيتال للتحول الرقمي لعملي في دبي.'
        : 'Hello! I\'m interested in learning more about Hikma Digital\'s AI transformation services for my Dubai business.'
    );
    const whatsappURL = `https://wa.me/971501234567?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      content: newMessage,
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        sender: 'ai',
        content: language === 'ar'
          ? 'شكراً لاهتمامك! نحن نساعد الشركات الصغيرة والمتوسطة في دبي على التحول باستخدام الذكاء الاصطناعي. هل يمكنك إخباري عن نوع عملك؟'
          : 'Thank you for your interest! We help Dubai SMEs transform using AI. Can you tell me about your business type?',
        timestamp: new Date(),
        type: 'text'
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1500);
  };

  const sendVoiceMessage = () => {
    const voiceMessage = {
      id: messages.length + 1,
      sender: 'user',
      content: language === 'ar' ? 'رسالة صوتية - 15 ثانية' : 'Voice message - 15 seconds',
      timestamp: new Date(),
      type: 'voice'
    };

    setMessages(prev => [...prev, voiceMessage]);

    // Simulate AI voice response
    setTimeout(() => {
      const aiVoiceResponse = {
        id: messages.length + 2,
        sender: 'ai',
        content: language === 'ar'
          ? 'تم استلام رسالتك الصوتية. أفهم أنك تريد تحسين خدمة العملاء في مطعمك. سأرسل لك رابط التقييم المجاني الخاص بنا.'
          : 'Voice message received. I understand you want to improve customer service in your restaurant. I\'ll send you our free assessment link.',
        timestamp: new Date(),
        type: 'text'
      };
      setMessages(prev => [...prev, aiVoiceResponse]);
    }, 2000);
  };

  return (
    <>
      {/* Floating WhatsApp Button - SME Friendly */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <MessageCircle className="w-6 h-6 relative z-10" />
          </motion.button>
          
          {/* Notification Badge */}
          <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">1</span>
          </div>
          
          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        </div>
      </motion.div>

      {/* WhatsApp Chat Interface */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl z-50 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-green-500 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`font-medium ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {language === 'ar' ? 'حكمة ديجيتال' : 'Hikma Digital'}
                  </h3>
                  <p className="text-xs opacity-90">
                    {language === 'ar' ? 'متاح الآن' : 'Online now'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white"
              >
                ×
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto h-64 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs px-3 py-2 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-green-500 text-white'
                    : 'bg-white border shadow-sm'
                } ${isRTL && message.sender === 'ai' ? 'font-arabic' : 'font-inter'}`}>
                  {message.type === 'voice' ? (
                    <div className="flex items-center space-x-2">
                      <Mic className="w-4 h-4" />
                      <span className="text-sm">{message.content}</span>
                    </div>
                  ) : (
                    <p className="text-sm">{message.content}</p>
                  )}
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t bg-white">
            <div className="flex items-center space-x-2">
              <button
                onClick={sendVoiceMessage}
                className="p-2 text-gray-500 hover:text-green-500 transition-colors"
              >
                <Mic className="w-4 h-4" />
              </button>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder={language === 'ar' ? 'اكتب رسالة...' : 'Type a message...'}
                className={`flex-1 px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  isRTL ? 'font-arabic text-right' : 'font-inter'
                }`}
                dir="auto"
              />
              <button
                onClick={sendMessage}
                className="p-2 text-green-500 hover:text-green-600 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            
            <div className="mt-2 text-center">
              <button
                onClick={initiateWhatsAppChat}
                className={`text-xs text-green-600 hover:text-green-700 transition-colors ${isRTL ? 'font-arabic' : 'font-inter'}`}
              >
                {language === 'ar' ? 'فتح في واتساب' : 'Open in WhatsApp'}
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* WhatsApp Business Card */}
      <div className="glass-card p-6 max-w-md mx-auto">
        <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className={`text-lg font-medium text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'واتساب بزنس' : 'WhatsApp Business'}
            </h3>
            <p className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'دعم فوري بالعربية والإنجليزية' : 'Instant support in Arabic & English'}
            </p>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'رسائل صوتية بالعربية' : 'Arabic voice messages'}
            </span>
          </div>
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'استجابة فورية من الذكاء الاصطناعي' : 'Instant AI responses'}
            </span>
          </div>
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className={`text-sm text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'تحويل للمدرب البشري عند الحاجة' : 'Human coach escalation when needed'}
            </span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={initiateWhatsAppChat}
          className={`w-full flex items-center justify-center space-x-3 rtl:space-x-reverse py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-300 ${isRTL ? 'font-arabic' : 'font-inter'}`}
        >
          <Phone className="w-5 h-5" />
          <span>{language === 'ar' ? 'ابدأ المحادثة الآن' : 'Start Chat Now'}</span>
        </motion.button>

        <p className={`text-xs text-gray-400 text-center mt-3 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
          {language === 'ar' 
            ? 'متاح 24/7 • استجابة خلال دقائق'
            : 'Available 24/7 • Response within minutes'
          }
        </p>
      </div>
    </>
  );
};

export default WhatsAppIntegration;