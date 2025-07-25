import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";
import { toast } from "sonner";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addMessage = (text: string, isUser: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    if (!apiKey) {
      toast.error("Please enter your OpenAI API key first");
      return;
    }

    const userMessage = inputMessage;
    setInputMessage("");
    addMessage(userMessage, true);
    setIsLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful AI assistant for Hikma Digital, an AI agency in Dubai. Direct users to book a consultation or contact form if they show interest in AI services. Keep responses concise and professional.'
            },
            {
              role: 'user',
              content: userMessage
            }
          ],
          max_tokens: 150,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      const aiMessage = data.choices[0]?.message?.content || "I'm sorry, I couldn't process that request.";
      
      addMessage(aiMessage, false);
      
      // If user shows interest in services, suggest form
      if (userMessage.toLowerCase().includes('interested') || userMessage.toLowerCase().includes('book') || userMessage.toLowerCase().includes('consultation')) {
        setTimeout(() => {
          addMessage("I'd be happy to help! Would you like me to direct you to our contact form to book a consultation?", false);
        }, 1000);
      }
    } catch (error) {
      console.error('Error:', error);
      addMessage("I'm sorry, there was an error processing your request. Please try again or contact us directly.", false);
      toast.error("Failed to send message. Please check your API key.");
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const redirectToForm = () => {
    window.location.href = '/contact';
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-50"
        variant="gold"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-background border border-border rounded-lg shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold">AI Assistant</span>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* API Key Input */}
          {!apiKey && (
            <div className="p-4 bg-secondary/30 border-b border-border">
              <p className="text-sm text-muted-foreground mb-2">Enter your OpenAI API key to start chatting:</p>
              <Input
                type="password"
                placeholder="sk-..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="text-sm"
              />
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!message.isUser && (
                  <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3 h-3 text-primary-foreground" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.isUser
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  {message.text}
                </div>
                {message.isUser && (
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-3 h-3 text-secondary-foreground" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2 justify-start">
                <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-3 h-3 text-primary-foreground" />
                </div>
                <div className="bg-secondary text-secondary-foreground p-3 rounded-lg text-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.1s]"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2 mb-3">
              <Button variant="outline" size="sm" onClick={redirectToForm} className="text-xs">
                📅 Book Consultation
              </Button>
              <Button variant="outline" size="sm" onClick={() => window.open('https://wa.me/971501234567', '_blank')} className="text-xs">
                💬 WhatsApp
              </Button>
            </div>
            
            {/* Input */}
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={!apiKey || isLoading}
                className="text-sm"
              />
              <Button onClick={sendMessage} disabled={!apiKey || isLoading || !inputMessage.trim()} size="sm">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;