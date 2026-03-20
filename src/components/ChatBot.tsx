import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "bot";
  text: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Hi! I'm Surjeet's AI Assistant. Ask me anything about the portfolio, skills, or projects! 🚀",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: inputValue,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate bot thinking and response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: generateBotResponse(inputValue),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 800);
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    // Portfolio-specific responses
    if (
      input.includes("project") ||
      input.includes("portfolio") ||
      input.includes("work")
    ) {
      return "I'd love to tell you about the projects! Check the Projects section to see HealthyMe, Learnify, BMS, and AskNet. Each one showcases different tech stacks and problem-solving skills.";
    }
    if (
      input.includes("skill") ||
      input.includes("technology") ||
      input.includes("stack")
    ) {
      return "Surjeet is skilled in React, TypeScript, Flutter, Node.js, MongoDB, and more! He specializes in full-stack development, mobile apps, and responsive UI design.";
    }
    if (
      input.includes("service") ||
      input.includes("help with") ||
      input.includes("develop")
    ) {
      return "Surjeet offers Full-Stack Development, Responsive UI/Mobile Development, Backend & API Development, and Software Engineering services. Perfect for scalable solutions!";
    }
    if (input.includes("contact") || input.includes("reach out")) {
      return "You can reach Surjeet via email at surjeetKaran777@gmail.com, or connect on GitHub and LinkedIn. There's also a Contact section on the portfolio!";
    }
    if (input.includes("about") || input.includes("who")) {
      return "Surjeet is a Full Stack & Mobile App Developer passionate about building impactful applications. He loves clean code, modern UI, and solving complex problems!";
    }

    // Default response
    return "Great question! Feel free to ask me about Surjeet's projects, skills, services, or how to get in touch. I'm here to help! 😊";
  };

  return (
    <>
      {/* 🎯 Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-600 shadow-lg hover:shadow-blue-500/50 flex items-center justify-center text-white transition-shadow duration-300"
        aria-label="Open Chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* 💬 Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-5 z-50 w-80 h-96 flex flex-col rounded-2xl bg-black/40 backdrop-blur-lg border border-white/10 shadow-2xl overflow-hidden"
          >
            {/* 🎨 Header */}
            <div className="bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-600 px-6 py-4 rounded-t-2xl">
              <h3 className="text-white font-bold text-lg">AI Assistant</h3>
              <p className="text-white/70 text-xs">Ask about Surjeet</p>
            </div>

            {/* 📨 Messages Container */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-3 rounded-lg ${
                      message.type === "user"
                        ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-br-none"
                        : "bg-white/10 backdrop-blur-sm border border-white/10 text-white/90 rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* 💭 Loading State */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-lg rounded-bl-none">
                    <div className="flex space-x-2">
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: 0,
                        }}
                        className="w-2 h-2 bg-blue-400 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: 0.15,
                        }}
                        className="w-2 h-2 bg-blue-400 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: 0.3,
                        }}
                        className="w-2 h-2 bg-blue-400 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* ⌨️ Input Section */}
            <div className="border-t border-white/10 p-4 bg-black/50 rounded-b-2xl">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") handleSendMessage();
                  }}
                  placeholder="Ask something..."
                  className="flex-1 bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-white text-sm placeholder-white/40 focus:outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30 transition duration-300"
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={isLoading || inputValue.trim() === ""}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg p-2 transition duration-300"
                  aria-label="Send message"
                >
                  <Send size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
