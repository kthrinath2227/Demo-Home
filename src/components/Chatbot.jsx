
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const initialMessage = {
    id: 1,
    text: "Hello! I'm your HomeSowCase AI assistant. How can I help you today?",
    sender: 'bot',
    timestamp: new Date()
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages([initialMessage]);
        setIsTyping(false);
      }, 1000);
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const quickReplies = [
    "Show me door designs",
    "Marble art options",
    "Wooden art ideas",
    "Tell me about your process",
    "Get a quote",
    "Contact information"
  ];

  const botResponses = {
    "door designs": "I'd love to show you our door designs! We have single doors, double doors, and custom designs. You can check out our Door Designs section on the website. Would you like me to help you with specific requirements?",
    "marble art": "Our marble art collection includes exquisite Pietra Dura inlays, wall panels, and sculptures. Each piece is a timeless masterpiece. What kind of marble art are you interested in?",
    "wooden art": "We create masterful wooden art, from 3D wall maps to hand-carved panels and abstract sculptures. Let me know if you have a specific style in mind!",
    "your process": "Our process is simple: Consultation, Design & Concept, Execution, and The Reveal. We work closely with you at every step to ensure perfection. You can find more details in the 'Our Process' section.",
    "get a quote": "I can help you get a quote! Please let me know what products you're interested in, and I'll guide you on how to connect with our sales team.",
    "contact": "You can reach us at +91 98765 43210 or email info@homesowcase.com. Our showroom is located at 123 Design Street, Gurgaon. We're open Mon-Sat: 9AM-7PM.",
    "default": "I'm here to help with your home design needs. You can ask me about our products like doors, marble art, or our design process. How can I assist you?"
  };

  const getBotResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();
    for (const [key, response] of Object.entries(botResponses)) {
      if (key !== 'default' && lowerCaseMessage.includes(key)) {
        return response;
      }
    }
    return botResponses.default;
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply) => {
    setInputMessage(reply);
    const newMessage = {
      id: Date.now(),
      text: reply,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);
    setTimeout(() => {
      const botResponse = getBotResponse(reply);
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  };
   const tooltipVariants = {
    hidden: { opacity: 0, x: 12, transition: { duration: 0.18 } },
    visible: { opacity: 1, x: 0, transition: { duration: 0.18 } },
  };
  const [hovered, setHovered] = useState(null);

  return (
    <>
     {!isOpen && (
  <div className="fixed bottom-[130px] right-1 z-50">
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative"
    >
      <Button
        onClick={() => setIsOpen(true)}
        className="w-16 h-16 rounded-full chatbot-gradient shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <Bot className="h-8 w-8 text-white" />
      </Button>

      <motion.span
        className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg shadow-md whitespace-nowrap pointer-events-none z-50"
        variants={tooltipVariants}
        initial="hidden"
        animate={hovered ? 'visible' : 'hidden'}
      >
        AI-powered help desk 🤖
      </motion.span>
    </motion.div>
  </div>
)}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1, height: isMinimized ? 60 : 'clamp(400px, 70vh, 600px)' }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="fixed bottom-6 right-6 w-[350px] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            <div className="chatbot-gradient text-white p-3 flex items-center justify-between cursor-pointer" onClick={() => setIsMinimized(!isMinimized)}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <span className="font-semibold">HomeSowCase AI</span>
                  <p className="text-xs text-white/80">Online</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 h-8 w-8" onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }}>
                  {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 h-8 w-8" onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-2 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${message.sender === 'user' ? 'bg-green-700 text-white' : 'bg-stone-200 text-stone-600'}`}>
                          {message.sender === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                        </div>
                        <div className={`rounded-2xl px-4 py-2 ${message.sender === 'user' ? 'bg-green-700 text-white rounded-br-none' : 'bg-stone-100 text-stone-800 rounded-bl-none'}`}>
                          <p className="text-sm">{message.text}</p>
                          <p className={`text-xs mt-1 text-right ${message.sender === 'user' ? 'text-green-200' : 'text-stone-500'}`}>{formatTime(message.timestamp)}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center"><Bot className="h-4 w-4 text-stone-600" /></div>
                        <div className="bg-stone-100 rounded-2xl px-4 py-3 flex space-x-1">
                          <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {messages.length <= 1 && !isTyping && (
                  <div className="px-4 pb-2">
                    <p className="text-xs text-stone-500 mb-2">Or try one of these:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.map((reply, index) => (
                        <Button key={index} variant="outline" size="sm" onClick={() => handleQuickReply(reply)} className="text-xs h-7 px-2">{reply}</Button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-3 border-t border-stone-200 bg-white">
                  <div className="flex items-center space-x-2">
                    <input type="text" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} onKeyPress={handleKeyPress} placeholder="Type your message..." className="flex-1 px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent text-sm" />
                    <Button onClick={handleSendMessage} disabled={!inputMessage.trim()} size="icon" className="bg-green-700 hover:bg-green-800 text-white">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
