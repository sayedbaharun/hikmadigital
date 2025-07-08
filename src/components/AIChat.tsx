import React, { useState, useEffect, useRef } from 'react';
import { Send, Mic, Bot, User, Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { generateAIResponse, detectArabic } from '../lib/openai';

interface Message {
  id: number;
  sender: 'user' | 'ai' | 'human';
  content: string;
  timestamp: Date;
  language?: 'ar' | 'en';
}

interface AIChatProps {
  businessType?: string;
  className?: string;
}

const AIChat: React.FC<AIChatProps> = ({ businessType = 'general', className = '' }) => {
  const { language, isRTL } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'ai',
      content: language === 'ar' 
        ? 'مرحباً! أنا حكمة، مدربك في الأعمال بالذكاء الاصطناعي. كيف يمكنني مساعدتك في تحويل عملك اليوم؟'
        : 'Hello! I\'m Hikma, your AI business coach. How can I help transform your business today?',
      timestamp: new Date(),
      language: language
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      content: newMessage,
      timestamp: new Date(),
      language: detectArabic(newMessage) ? 'ar' : 'en'
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));
      
      const aiResponse = await generateAIResponse(
        newMessage, 
        businessType, 
        messages.slice(-5).map(m => ({ role: m.sender, content: m.content }))
      );

      const aiMessage: Message = {
        id: messages.length + 2,
        sender: 'ai',
        content: aiResponse,
        timestamp: new Date(),
        language: detectArabic(aiResponse) ? 'ar' : 'en'
      };

      setMessages(prev => [...prev, aiMessage]);
      
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const startVoiceRecording = () => {
    setIsRecording(true);
    setTimeout(() => {
      setIsRecording(false);
      setNewMessage(language === 'ar' 
        ? 'كيف يمكنني تحسين خدمة العملاء؟'
        : 'How can I improve customer service?'
      );
    }, 3000);
  };

  const speakMessage = (content: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(content);
      utterance.lang = detectArabic(content) ? 'ar-AE' : 'en-US';
      utterance.onend = () => setIsSpeaking(false);
      speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <div className={`flex flex-col h-full bg-white border border-neutral-200 rounded-xl shadow-sm ${className}`}>
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-neutral-200">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className={`font-medium text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'حكمة' : 'Hikma'}
            </h3>
            <p className={`text-sm text-secondary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'مساعدك في الأعمال' : 'Your business assistant'}
            </p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
              message.sender === 'user' 
                ? 'bg-primary text-white' 
                : 'bg-neutral-100 text-primary'
            }`}>
              <div className="flex items-start space-x-2 rtl:space-x-reverse">
                {message.sender !== 'user' && (
                  <div className="flex-shrink-0 mt-1">
                    {message.sender === 'ai' ? (
                      <Bot className="w-4 h-4" />
                    ) : (
                      <User className="w-4 h-4" />
                    )}
                  </div>
                )}
                <div className="flex-1">
                  <p className={`text-sm ${isRTL ? 'font-arabic' : 'font-inter'} ${
                    message.language === 'ar' ? 'text-right' : 'text-left'
                  }`}>
                    {message.content}
                  </p>
                  <p className={`text-xs opacity-60 mt-1 ${
                    message.language === 'ar' ? 'text-right' : 'text-left'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                {message.sender !== 'user' && (
                  <button
                    onClick={() => isSpeaking ? stopSpeaking() : speakMessage(message.content)}
                    className="p-1 rounded-full hover:bg-neutral-200 transition-colors duration-200"
                  >
                    {isSpeaking ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-neutral-100 text-primary max-w-xs lg:max-w-md px-4 py-2 rounded-2xl">
              <div className="flex items-center space-x-2">
                <Bot className="w-4 h-4" />
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-neutral-400 rounded-full opacity-60"></div>
                  <div className="w-2 h-2 bg-neutral-400 rounded-full opacity-40"></div>
                  <div className="w-2 h-2 bg-neutral-400 rounded-full opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-neutral-200">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <button
            onClick={startVoiceRecording}
            disabled={isRecording}
            className={`p-2 rounded-full transition-colors duration-200 ${
              isRecording 
                ? 'bg-error text-white' 
                : 'bg-neutral-100 text-secondary hover:bg-neutral-200'
            }`}
          >
            <Mic className="w-5 h-5" />
          </button>
          
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={language === 'ar' ? 'اكتب رسالتك...' : 'Type your message...'}
            className={`flex-1 px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-full focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${
              isRTL ? 'text-right font-arabic' : 'text-left font-inter'
            }`}
            dir={isRTL ? 'rtl' : 'ltr'}
          />
          
          <button
            onClick={handleSendMessage}
            disabled={!newMessage.trim() || isTyping}
            className="p-2 bg-primary text-white rounded-full hover:opacity-80 transition-opacity duration-200 disabled:opacity-50"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;