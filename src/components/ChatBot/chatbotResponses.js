import { metadata, personalInfo, summary } from "../../data/portfolio";

/**
 * Chatbot response helpers
 */

export const getWelcomeMessage = () => {
  const messages = [
    `👋 Hi! This is ${personalInfo.name}'s portfolio assistant.\n\n${personalInfo.name} — ${personalInfo.title}\n${personalInfo.subtitle}\n\nAsk me anything about experience, projects, skills, or contact information.`,
    `👋 Welcome to Harish's portfolio chat.\n\n${summary.headline}\n\nBased in ${personalInfo.location} · ${metadata.totalYearsExperience} experience · Open to work.`,
    `👋 Thanks for stopping by.\n\n${personalInfo.name} builds high-performance web applications, real-time dashboards, and scalable APIs using React, Next.js, Node.js, Python, and TypeScript.\n\nWhat would you like to know?`,
  ];

  return messages[Math.floor(Math.random() * messages.length)];
};

export const getSuggestions = () => {
  return [
    "Tell me about yourself",
    "What's your tech stack?",
    "What projects have you built?",
    "Are you open to work?",
  ];
};

export const getErrorMessage = () => {
  return "Oops! Something went wrong. Please try asking your question again.";
};

export const getNoMatchMessage = () => {
  return "Not sure I caught that. Try asking about:\n\n• 💼 Work experience at American Express, SUNY, Harns, or QS\n• 🛠️ Skills like React, Next.js, TypeScript, Node.js, Python, or AWS\n• 🚀 Projects like FinGuard, ClaimSight AI, Sniplink, or CSV Plot Studio\n• ⚡ Performance optimization, testing, and real-time dashboards\n• 🎓 Education, availability, work authorization, or contact info";
};

export const getTypingMessages = () => {
  return [
    "Let me think...",
    "Good question...",
    "Looking that up...",
    "One moment...",
  ];
};

export const getRandomTypingMessage = () => {
  const messages = getTypingMessages();
  return messages[Math.floor(Math.random() * messages.length)];
};
