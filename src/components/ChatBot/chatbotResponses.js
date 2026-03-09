/**
 * Chatbot response helpers
 */

export const getWelcomeMessage = () => {
  const messages = [
    "👋 Hi! This is Harish's portfolio assistant.\n\nHarish Yerraguntla — Senior UI / Frontend Engineer\nReact · Next.js · Angular · Vue.js · TypeScript · 10+ years\n\nAsk me anything — projects, tech stack, work history, or how to get in touch.",
    "👋 Hey there!\n\nHarish is a Senior UI/Frontend Engineer with 10+ years building enterprise apps across Banking, Healthcare, Airlines, and Financial Services — React.js, Angular, Vue.js, Next.js, and TypeScript.\n\nWhat would you like to know?",
    "👋 Welcome to Harish's portfolio chat!\n\nHarish Yerraguntla — Senior UI / Frontend Engineer\nReact · Next.js · Angular · Vue.js · TypeScript\nMS Computer Science, SUNY New Paltz · Currently @ Thomson Reuters\n\nAsk about experience, skills, or projects!",
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
  return "Not sure I caught that — try rephrasing! Topics available:\n\n• 💼 Work experience (Progress Solutions, Harns, QS, SUNY)\n• 🛠️ Tech stack (React, Next.js, Vue.js, Tailwind CSS, Storybook, Node.js…)\n• 🚀 Projects (Sniplink, CSV Plot Studio, IoT platform…)\n• 📊 Data visualization & performance optimization\n• 🎓 Education (MS CS, SUNY New Paltz — GPA 3.81)\n• 📍 Location, availability & contact info\n\nWhat would you like to know?";
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
