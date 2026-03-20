import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, AlertCircle } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "bot" | "error";
  text: string;
}

const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || 
  (() => {
    throw new Error("VITE_N8N_WEBHOOK_URL environment variable is not set");
  })();

export default function ChatBot() {
  // ⚠️ AI Backend temporarily down for maintenance
  // Chatbot will be re-enabled once n8n server is back online
  return null;

  // Auto-scroll to latest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;
    
    setError(null);

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: inputValue,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputValue,
        }),
        signal: AbortSignal.timeout(30000), // 30s timeout
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      // Extract response text (handle both direct text and nested response)
      const responseText = typeof data === "string" ? data : data.response || data.message || JSON.stringify(data);

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: responseText,
      };

      setMessages((prev) => [...prev, botResponse]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to connect to AI. Please try again.";
      
      // Show error in chat
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: "error",
        text: `⚠️ ${errorMessage}`,
      };
      
      setMessages((prev) => [...prev, errorMsg]);
      setError(errorMessage);
      
      // Log for debugging
      console.error("[Chatbot Error]", err);
    } finally {
      setIsLoading(false);
    }
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
              <p className="text-white/70 text-xs">Powered by Groq × n8n</p>
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
                        : message.type === "error"
                        ? "bg-red-500/20 border border-red-500/50 text-red-300 rounded-bl-none"
                        : "bg-white/10 backdrop-blur-sm border border-white/10 text-white/90 rounded-bl-none"
                    }`}
                  >
                    {message.type === "error" && <AlertCircle className="inline w-4 h-4 mr-2" />}
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
              {error && (
                <div className="text-xs text-red-400 mb-2 animate-pulse">
                  {error}
                </div>
              )}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && !isLoading) handleSendMessage();
                  }}
                  placeholder="Ask something..."
                  disabled={isLoading}
                  className="flex-1 bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-white text-sm placeholder-white/40 focus:outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30 transition duration-300 disabled:opacity-50"
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
