import React, { useState, useEffect, useRef } from 'react';
import { Phone, MoreVertical, Paperclip, Mic, Send, Check, CheckCheck, Play, Pause, ShoppingCart, Calendar, CreditCard, Globe } from 'lucide-react';

interface Message {
  id: string;
  text?: string;
  sender: 'user' | 'bot';
  timestamp: string;
  isVoice?: boolean;
  duration?: string;
  isTyping?: boolean;
  quickReplies?: string[];
  isRead?: boolean;
  products?: Product[];
  paymentLink?: string;
  language?: 'ar' | 'en';
}

interface Product {
  id: string;
  name: string;
  nameAr: string;
  price: string;
  image: string;
}

interface Metrics {
  responseTime: number;
  satisfaction: number;
  ordersProcessed: number;
  languagesSupported: number;
}

const WhatsAppBotDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentScenario, setCurrentScenario] = useState<'restaurant' | 'appointment' | 'product' | null>(null);
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
  const [metrics, setMetrics] = useState<Metrics>({
    responseTime: 0,
    satisfaction: 0,
    ordersProcessed: 0,
    languagesSupported: 2
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (message: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...message,
      id: Date.now().toString(),
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, newMessage]);

    // Simulate read receipts
    if (message.sender === 'user') {
      setTimeout(() => {
        setMessages(prev => 
          prev.map(msg => 
            msg.id === newMessage.id ? { ...msg, isRead: true } : msg
          )
        );
      }, 1000);
    }

    // Update metrics
    if (message.sender === 'bot') {
      setMetrics(prev => ({
        ...prev,
        responseTime: prev.responseTime + 2.5
      }));
    }
  };

  const showTypingIndicator = () => {
    const typingMessage: Message = {
      id: 'typing',
      sender: 'bot',
      isTyping: true,
      timestamp: ''
    };
    setMessages(prev => [...prev, typingMessage]);
  };

  const removeTypingIndicator = () => {
    setMessages(prev => prev.filter(msg => msg.id !== 'typing'));
  };

  const simulateBotResponse = (response: Omit<Message, 'id' | 'timestamp' | 'sender'>, delay = 1500) => {
    showTypingIndicator();
    setTimeout(() => {
      removeTypingIndicator();
      addMessage({ ...response, sender: 'bot' });
    }, delay);
  };

  const startRestaurantScenario = () => {
    setCurrentScenario('restaurant');
    setMessages([]);
    
    addMessage({
      text: "السلام عليكم، أريد أن أطلب طعام",
      sender: 'user',
      language: 'ar'
    });

    simulateBotResponse({
      text: "وعليكم السلام! أهلاً بك في مطعم النجمة ⭐\nيسعدني مساعدتك في طلبك اليوم",
      language: 'ar'
    });

    setTimeout(() => {
      simulateBotResponse({
        text: "ما الذي تود طلبه؟",
        quickReplies: ['🍕 بيتزا', '🍔 برجر', '🥗 سلطات', '🍝 باستا'],
        language: 'ar'
      }, 3000);
    }, 2000);

    setMetrics(prev => ({
      ...prev,
      ordersProcessed: prev.ordersProcessed + 1,
      satisfaction: 95
    }));
  };

  const startAppointmentScenario = () => {
    setCurrentScenario('appointment');
    setMessages([]);
    
    addMessage({
      text: "I need to book an appointment",
      sender: 'user',
      language: 'en'
    });

    simulateBotResponse({
      text: "Welcome to Al-Shifa Clinic! 🏥\nI'll help you book an appointment.",
      language: 'en'
    });

    setTimeout(() => {
      simulateBotResponse({
        text: "Please note: We schedule appointments around prayer times.\nOur available slots today are:\n⏰ 9:00 AM - 11:30 AM\n⏰ 2:00 PM - 4:30 PM\n⏰ 6:00 PM - 8:00 PM",
        quickReplies: ['Morning', 'Afternoon', 'Evening'],
        language: 'en'
      }, 3000);
    }, 2000);
  };

  const startProductScenario = () => {
    setCurrentScenario('product');
    setMessages([]);
    
    addMessage({
      text: "Show me your latest smartphones",
      sender: 'user',
      language: 'en'
    });

    simulateBotResponse({
      text: "Great choice! Here are our featured smartphones:",
      products: [
        {
          id: '1',
          name: 'iPhone 15 Pro',
          nameAr: 'آيفون 15 برو',
          price: 'SAR 4,399',
          image: '📱'
        },
        {
          id: '2',
          name: 'Samsung Galaxy S24',
          nameAr: 'سامسونج جالكسي S24',
          price: 'SAR 3,799',
          image: '📱'
        }
      ],
      language: 'en'
    });

    setTimeout(() => {
      simulateBotResponse({
        text: "Would you like to:\n💳 Get a payment link\n📦 Check availability\n🚚 Arrange delivery",
        quickReplies: ['Payment Link', 'Check Stock', 'Delivery Info'],
        language: 'en'
      }, 3000);
    }, 2000);
  };

  const handleQuickReply = (reply: string) => {
    addMessage({
      text: reply,
      sender: 'user'
    });

    // Handle different quick reply scenarios
    if (reply === 'Payment Link') {
      simulateBotResponse({
        text: "I've generated a secure payment link for you:",
        paymentLink: 'https://pay.whatsapp.business/order/12345',
        language: 'en'
      });
    } else if (reply.includes('بيتزا')) {
      simulateBotResponse({
        text: "ممتاز! لدينا أنواع مختلفة من البيتزا:\n🍕 مارجريتا - 45 ريال\n🍕 بيبروني - 55 ريال\n🍕 خضروات - 50 ريال",
        quickReplies: ['مارجريتا', 'بيبروني', 'خضروات'],
        language: 'ar'
      });
    }
  };

  const handleVoicePlay = (messageId: string) => {
    setIsPlaying(isPlaying === messageId ? null : messageId);
  };

  const VoiceMessage: React.FC<{ id: string; duration: string }> = ({ id, duration }) => {
    const isCurrentlyPlaying = isPlaying === id;
    
    return (
      <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-2 min-w-[200px]">
        <button
          onClick={() => handleVoicePlay(id)}
          className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors"
        >
          {isCurrentlyPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <div className="flex-1">
          <div className="h-6 flex items-center space-x-0.5">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`w-0.5 bg-gray-400 rounded-full transition-all duration-300 ${
                  isCurrentlyPlaying ? 'animate-pulse' : ''
                }`}
                style={{
                  height: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.05}s`
                }}
              />
            ))}
          </div>
        </div>
        <span className="text-xs text-gray-600">{duration}</span>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="flex h-[700px]">
        {/* Chat Section */}
        <div className="flex-1 flex flex-col">
          {/* WhatsApp Header */}
          <div className="bg-green-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">WB</span>
              </div>
              <div>
                <h3 className="font-semibold">WhatsApp Business</h3>
                <p className="text-xs">Online</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone size={20} />
              <MoreVertical size={20} />
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 bg-gray-50 p-4 overflow-y-auto">
            {messages.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-6">Choose a demo scenario to start</p>
                <div className="space-y-2">
                  <button
                    onClick={startRestaurantScenario}
                    className="block w-full max-w-xs mx-auto bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    🍽️ Restaurant Order (Arabic)
                  </button>
                  <button
                    onClick={startAppointmentScenario}
                    className="block w-full max-w-xs mx-auto bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    📅 Appointment Booking
                  </button>
                  <button
                    onClick={startProductScenario}
                    className="block w-full max-w-xs mx-auto bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    🛍️ Product Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-green-500 text-white'
                          : 'bg-white border border-gray-200'
                      }`}
                      dir={message.language === 'ar' ? 'rtl' : 'ltr'}
                    >
                      {message.isTyping ? (
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      ) : message.isVoice ? (
                        <VoiceMessage id={message.id} duration={message.duration || '0:30'} />
                      ) : (
                        <>
                          {message.text && <p className="text-sm">{message.text}</p>}
                          
                          {message.products && (
                            <div className="mt-2 space-y-2">
                              {message.products.map(product => (
                                <div key={product.id} className="bg-gray-50 p-2 rounded flex items-center space-x-2">
                                  <span className="text-2xl">{product.image}</span>
                                  <div className="flex-1">
                                    <p className="font-semibold text-sm">{product.name}</p>
                                    <p className="text-xs text-gray-600">{product.nameAr}</p>
                                    <p className="text-sm font-bold text-green-600">{product.price}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {message.paymentLink && (
                            <div className="mt-2 bg-blue-50 p-2 rounded">
                              <p className="text-xs text-blue-600 mb-1">Secure Payment Link:</p>
                              <a href={message.paymentLink} className="text-blue-500 underline text-xs break-all">
                                {message.paymentLink}
                              </a>
                            </div>
                          )}

                          {message.quickReplies && (
                            <div className="mt-2 flex flex-wrap gap-2">
                              {message.quickReplies.map((reply, index) => (
                                <button
                                  key={index}
                                  onClick={() => handleQuickReply(reply)}
                                  className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                                >
                                  {reply}
                                </button>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                      
                      {!message.isTyping && (
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs opacity-70">{message.timestamp}</span>
                          {message.sender === 'user' && message.isRead && (
                            <CheckCheck size={16} className="text-blue-400" />
                          )}
                          {message.sender === 'user' && !message.isRead && (
                            <Check size={16} className="opacity-70" />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Input Area */}
          <div className="bg-white border-t border-gray-200 p-4 flex items-center space-x-2">
            <Paperclip className="text-gray-500 cursor-pointer" size={20} />
            <input
              type="text"
              placeholder="Type a message"
              className="flex-1 px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              disabled
            />
            <Mic className="text-gray-500 cursor-pointer" size={20} />
            <Send className="text-gray-500 cursor-pointer" size={20} />
          </div>
        </div>

        {/* Metrics Sidebar */}
        <div className="w-80 bg-gray-50 p-6 border-l border-gray-200">
          <h3 className="text-lg font-semibold mb-6">Bot Performance Metrics</h3>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Response Time Saved</span>
                <span className="text-2xl font-bold text-green-600">{metrics.responseTime.toFixed(1)}s</span>
              </div>
              <div className="text-xs text-gray-500">Average human response: 45s</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Customer Satisfaction</span>
                <span className="text-2xl font-bold text-blue-600">{metrics.satisfaction}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${metrics.satisfaction}%` }}
                />
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Orders Processed</span>
                <span className="text-2xl font-bold text-purple-600">{metrics.ordersProcessed}</span>
              </div>
              <div className="text-xs text-gray-500">In this demo session</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Languages Supported</span>
                <span className="text-2xl font-bold text-orange-600">{metrics.languagesSupported}</span>
              </div>
              <div className="flex space-x-2 mt-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">🇸🇦 Arabic</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">🇬🇧 English</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-sm font-semibold mb-3">Features Demonstrated</h4>
            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCheck size={16} className="text-green-500" />
                <span>Multilingual Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-green-500" />
                <span>Prayer Time Awareness</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShoppingCart size={16} className="text-green-500" />
                <span>Product Catalog</span>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCard size={16} className="text-green-500" />
                <span>Payment Integration</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe size={16} className="text-green-500" />
                <span>24/7 Availability</span>
              </div>
            </div>
          </div>

          <button className="w-full mt-8 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
            <span>Connect Your WhatsApp</span>
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppBotDemo;