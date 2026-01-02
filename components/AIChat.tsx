import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { RESUME_SUMMARY, EXPERIENCES, PROJECTS, SKILLS } from '../constants';
import { ChatMessage } from '../src/constants/types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Abhishek's AI Assistant. Ask me anything about his projects, experience, or skills." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || !process.env.API_KEY) return;
    
    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      // Build context from data
      const context = `
        System Instruction: You are an AI assistant for Abhishek Malviya's portfolio website. 
        Answer questions as if you represent him professionally, referring to him in the third person or as "Abhishek".
        Keep answers concise (under 80 words if possible) and professional.
        
        IMPORTANT: Do NOT share Abhishek's phone number or personal email address under any circumstances.
        If the user asks for contact information, tell them to please click the "Contact Me" or "Let's Connect" button on the website to send a message directly.
        
        Use the following resume data to answer:
        
        Summary: ${RESUME_SUMMARY}
        
        Experience: ${JSON.stringify(EXPERIENCES.map(e => `${e.role} at ${e.company} (${e.period}): ${e.description}`))}
        
        Projects: ${JSON.stringify(PROJECTS.map(p => `${p.title} (${p.category}): ${p.description}`))}
        
        Skills: ${JSON.stringify(SKILLS.map(s => s.name))}
      `;

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            { role: 'user', parts: [{ text: context + "\n\nUser Question: " + userMessage }] }
        ]
      });

      const text = response.text || "I'm having trouble connecting right now. Please try again later.";
      setMessages(prev => [...prev, { role: 'model', text }]);

    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 h-96 bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden animate-fade-in-up">
          <div className="bg-elec-blue p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="font-heading font-bold tracking-wide">AI Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-200">
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-3 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  msg.role === 'user' 
                    ? 'bg-elec-blue text-white rounded-br-none' 
                    : 'bg-white border border-gray-200 text-slate-700 rounded-bl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-bl-none shadow-sm flex gap-1">
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about my skills..."
              className="flex-1 bg-slate-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-elec-blue outline-none"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-elec-blue text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition disabled:opacity-50"
            >
              <i className="fas fa-paper-plane text-xs"></i>
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-elec-blue hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
      >
        {isOpen ? (
            <i className="fas fa-chevron-down text-xl"></i>
        ) : (
            <i className="fas fa-robot text-2xl group-hover:rotate-12 transition"></i>
        )}
      </button>
    </div>
  );
};

export default AIChat;