import React, { useState, useRef, useEffect } from "react";
import { matchQuestion } from "./questionMatcher";
import { getWelcomeMessage, getSuggestions } from "./chatbotResponses";
import "./ChatBot.scss";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Show welcome message + quick suggestions when first opened
      setTimeout(() => {
        addBotMessage(getWelcomeMessage(), getSuggestions());
      }, 500);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addBotMessage = (text, suggestions = []) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        sender: "bot",
        timestamp: new Date(),
        suggestions,
      },
    ]);
  };

  const addUserMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        sender: "user",
        timestamp: new Date(),
      },
    ]);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    addUserMessage(userMessage);

    // Show typing indicator
    setIsTyping(true);

    // Simulate thinking time
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Get response from matcher
    const response = matchQuestion(userMessage);

    setIsTyping(false);
    addBotMessage(response.answer, response.suggestions || []);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    inputRef.current?.focus();
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const clearChat = () => {
    setMessages([]);
    setTimeout(() => {
      addBotMessage(getWelcomeMessage(), getSuggestions());
    }, 300);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        className={`chatbot-toggle ${isOpen ? "active" : ""}`}
        onClick={toggleChat}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
        {!isOpen && <span className="chatbot-notification">💬</span>}
      </button>

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? "open" : ""}`}>
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar">
              <span>H</span>
              <span className="chatbot-status"></span>
            </div>
            <div className="chatbot-title">
              <h3>Harish</h3>
              <p>Ask me anything about my experience</p>
            </div>
          </div>
          <div className="chatbot-header-actions">
            <button
              onClick={clearChat}
              className="chatbot-action-btn"
              aria-label="Clear chat"
              title="Clear chat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="1 4 1 10 7 10"></polyline>
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
              </svg>
            </button>
            <button
              onClick={toggleChat}
              className="chatbot-action-btn"
              aria-label="Close chat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`chatbot-message ${message.sender}`}
            >
              {message.sender === "bot" && (
                <div className="chatbot-message-avatar">H</div>
              )}
              <div className="chatbot-message-content">
                <div className="chatbot-message-bubble">
                  <p>{message.text}</p>
                  {message.suggestions && message.suggestions.length > 0 && (
                    <div className="chatbot-suggestions">
                      {message.suggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="chatbot-suggestion-btn"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <span className="chatbot-message-time">
                  {formatTime(message.timestamp)}
                </span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="chatbot-message bot">
              <div className="chatbot-message-avatar">H</div>
              <div className="chatbot-message-content">
                <div className="chatbot-message-bubble">
                  <div className="chatbot-typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="chatbot-input-container">
          <div className="chatbot-input-wrapper">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about my experience..."
              rows="1"
              className="chatbot-input"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="chatbot-send-btn"
              aria-label="Send message"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
          <p className="chatbot-disclaimer">
            Powered by smart pattern matching
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
