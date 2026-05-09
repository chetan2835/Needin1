import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Mic, MicOff, Minus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { chatbotData, defaultAnswer } from '@/data/chatbotData';

// Basic type for messages
type Message = {
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
};

// Web Speech API types (since they might not be in standard lib.dom.d.ts depending on config)
interface SpeechRecognitionResult {
    [index: number]: { transcript: string };
}
interface SpeechRecognitionEvent {
    results: { [index: number]: SpeechRecognitionResult };
}
interface SpeechRecognition {
    continuous: boolean;
    interimResults: boolean;
    lang: string;
    onstart: (() => void) | null;
    onend: (() => void) | null;
    onresult: ((event: SpeechRecognitionEvent) => void) | null;
    start: () => void;
    stop: () => void;
}

interface IWindow extends Window {
    webkitSpeechRecognition: { new(): SpeechRecognition };
    SpeechRecognition: { new(): SpeechRecognition };
}

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { text: "Hi! I'm the Needin assistant. Ask me anything about our services, delivery, or how to get started!", sender: 'bot', timestamp: new Date() }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isListening, setIsListening] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const recognitionRef = useRef<SpeechRecognition | null>(null);

    // Auto-scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    // Initialize Speech Recognition
    useEffect(() => {
        const windowObj = window as unknown as IWindow;
        const SpeechRecognition = windowObj.SpeechRecognition || windowObj.webkitSpeechRecognition;

        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = 'en-US';

            recognition.onstart = () => setIsListening(true);
            recognition.onend = () => setIsListening(false);
            recognition.onresult = (event: SpeechRecognitionEvent) => {
                const transcript = event.results[0][0].transcript;
                setInputValue(transcript);
                // Optional: Auto-send on voice result? let's just set input for review first or auto send.
                // Let's auto-send for "voice chatbot" feel.
                handleSendMessage(transcript);
            };

            recognitionRef.current = recognition;
        }
    }, []);

    const toggleListening = () => {
        if (!recognitionRef.current) {
            alert("Voice input is not supported in this browser. Please try Chrome.");
            return;
        }

        if (isListening) {
            recognitionRef.current.stop();
        } else {
            recognitionRef.current.start();
        }
    };

    const findAnswer = (query: string): string => {
        const lowerQuery = query.toLowerCase();

        // Find best match
        const match = chatbotData.find(qa =>
            qa.keywords.some(keyword => lowerQuery.includes(keyword))
        );

        return match ? match.answer : defaultAnswer;
    };

    const handleSendMessage = (text = inputValue) => {
        if (!text.trim()) return;

        // Add User Message
        const userMsg: Message = { text, sender: 'user', timestamp: new Date() };
        setMessages(prev => [...prev, userMsg]);
        setInputValue("");

        // Simulate thinking delay
        setTimeout(() => {
            const answer = findAnswer(text);
            const botMsg: Message = { text: answer, sender: 'bot', timestamp: new Date() };
            setMessages(prev => [...prev, botMsg]);
        }, 500);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">

            {/* Chat Window */}
            <div
                className={`
          pointer-events-auto
          mb-4 w-[350px] max-w-[90vw] bg-background border border-border shadow-2xl rounded-2xl overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right
          ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none h-0'}
        `}
                style={{ maxHeight: '500px' }}
            >
                {/* Header */}
                <div className="bg-primary p-4 flex items-center justify-between text-primary-foreground">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <MessageCircle className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-sm">Needin Support</h3>
                            <p className="text-[10px] opacity-80 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> Online
                            </p>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1.5 rounded-full transition-colors">
                        <Minus className="w-4 h-4" />
                    </button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30 min-h-[300px]">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`
                  max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed
                  ${msg.sender === 'user'
                                        ? 'bg-primary text-primary-foreground rounded-br-sm'
                                        : 'bg-card border border-border text-foreground rounded-bl-sm shadow-sm'
                                    }
                `}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-3 bg-background border-t border-border flex items-center gap-2">
                    <input
                        className="flex-1 bg-muted/50 border-none outline-none text-sm px-3 py-2 rounded-xl focus:ring-1 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground"
                        placeholder="Type a message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />

                    <button
                        onClick={toggleListening}
                        className={`p-2 rounded-xl transition-all ${isListening ? 'bg-red-500 text-white animate-pulse' : 'text-muted-foreground hover:bg-muted'}`}
                        title="Voice Input"
                    >
                        {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                    </button>

                    <Button
                        size="icon"
                        className="h-9 w-9 rounded-xl shrink-0"
                        onClick={() => handleSendMessage()}
                        disabled={!inputValue.trim()}
                    >
                        <Send className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
          pointer-events-auto
          h-14 w-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95
          ${isOpen ? 'bg-destructive rotate-90 text-destructive-foreground' : 'bg-primary text-primary-foreground'}
        `}
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
            </button>
        </div>
    );
};

export default Chatbot;
