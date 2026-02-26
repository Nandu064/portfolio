import React, { useState, useRef, useEffect } from "react";
import { matchQuestion } from "./questionMatcher";
import { getWelcomeMessage, getSuggestions } from "./chatbotResponses";
import "./ChatBot.scss";

// ── Smart text renderer ─────────────────────────────────────────────────────
// Parses answer strings into structured JSX:
//   • Lines starting with an emoji → section header
//   • Lines starting with • or - → bullet list items
//   • ──── separator lines → <hr>
//   • Empty lines → spacer (skipped within lists)
//   • Everything else → body paragraph
const EMOJI_RE = /^[\p{Emoji_Presentation}\p{Extended_Pictographic}]/u;

const renderText = (text, isGreeting = false) => {
  const lines = text.split("\n");
  const elements = [];
  let bullets = [];
  let key = 0;

  const flushBullets = () => {
    if (bullets.length === 0) return;
    elements.push(
      <ul key={`ul-${key++}`} className="cb-list">
        {bullets.map((b, i) => (
          <li key={i} className="cb-list-item">
            <span className="cb-bullet-dot" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    );
    bullets = [];
  };

  lines.forEach((raw) => {
    const line = raw.trim();

    if (!line) {
      flushBullets();
      return;
    }

    if (/^[─—-]{3,}$/.test(line)) {
      flushBullets();
      elements.push(<hr key={`hr-${key++}`} className="cb-divider" />);
      return;
    }

    if (line.startsWith("•") || (line.startsWith("-") && line.length > 2)) {
      bullets.push(line.replace(/^[•-]\s*/, ""));
      return;
    }

    flushBullets();

    if (EMOJI_RE.test(line)) {
      if (isGreeting) {
        elements.push(
          <p key={`hl-${key++}`} className="cb-line cb-hero-line">
            {line}
          </p>
        );
      } else {
        elements.push(
          <p key={`eh-${key++}`} className="cb-line cb-emoji-header">
            {line}
          </p>
        );
      }
      return;
    }

    elements.push(
      <p key={`p-${key++}`} className="cb-line">
        {line}
      </p>
    );
  });

  flushBullets();
  return elements;
};

// ── Component ───────────────────────────────────────────────────────────────
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(getWelcomeMessage(), getSuggestions(), "greeting");
      }, 400);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addBotMessage = (text, suggestions = [], type = "default") => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        sender: "bot",
        type,
        timestamp: new Date(),
        suggestions,
      },
    ]);
  };

  const addUserMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text, sender: "user", timestamp: new Date() },
    ]);
  };

  const sendMessage = async (text) => {
    if (!text.trim()) return;
    setInput("");
    addUserMessage(text.trim());
    setIsTyping(true);
    await new Promise((r) => setTimeout(r, 700));
    const response = matchQuestion(text.trim());
    setIsTyping(false);
    addBotMessage(response.answer, response.suggestions || []);
  };

  const handleSend = () => sendMessage(input);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (suggestion) => sendMessage(suggestion);

  const toggleChat = () => setIsOpen((v) => !v);

  const clearChat = () => {
    setMessages([]);
    setTimeout(() => {
      addBotMessage(getWelcomeMessage(), getSuggestions(), "greeting");
    }, 300);
  };

  const formatTime = (date) =>
    date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

  return (
    <>
      {/* ── Toggle button ─────────────────────────────────────────────────── */}
      <button
        className={`chatbot-toggle ${isOpen ? "active" : ""}`}
        onClick={toggleChat}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
        {!isOpen && <span className="chatbot-notification">1</span>}
      </button>

      {/* ── Chat window ───────────────────────────────────────────────────── */}
      <div className={`chatbot-window ${isOpen ? "open" : ""}`}>

        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar">
              <span>HY</span>
              <span className="chatbot-status" />
            </div>
            <div className="chatbot-title">
              <h3>Harish&apos;s AI</h3>
              <p>
                <span className="header-dot" />
                Online · Ask me anything
              </p>
            </div>
          </div>
          <div className="chatbot-header-actions">
            <button onClick={clearChat} className="chatbot-action-btn" title="New conversation">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="1 4 1 10 7 10" />
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
              </svg>
            </button>
            <button onClick={toggleChat} className="chatbot-action-btn" aria-label="Close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`chatbot-message ${msg.sender}`}>
              {msg.sender === "bot" && (
                <div className="chatbot-message-avatar">HY</div>
              )}
              <div className="chatbot-message-content">
                <div
                  className={`chatbot-message-bubble${
                    msg.type === "greeting" ? " greeting-bubble" : ""
                  }`}
                >
                  <div className="cb-text">
                    {renderText(msg.text, msg.type === "greeting")}
                  </div>

                  {msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="chatbot-suggestions">
                      {msg.suggestions.map((s, i) => (
                        <button
                          key={i}
                          onClick={() => handleSuggestionClick(s)}
                          className="chatbot-suggestion-btn"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <span className="chatbot-message-time">
                  {formatTime(msg.timestamp)}
                </span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="chatbot-message bot">
              <div className="chatbot-message-avatar">HY</div>
              <div className="chatbot-message-content">
                <div className="chatbot-message-bubble">
                  <div className="chatbot-typing">
                    <span /><span /><span />
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
              placeholder="Ask about skills, projects, experience…"
              rows="1"
              className="chatbot-input"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="chatbot-send-btn"
              aria-label="Send"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
          <p className="chatbot-disclaimer">
            ✦ AI assistant · Powered by smart pattern matching
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
