/**
 * Chatbot response helpers
 */

export const getWelcomeMessage = () => {
  const messages = [
    "👋 Hi! This is Harish's portfolio assistant.\n\nHarish Yerraguntla — Full-Stack Engineer\nReact · Next.js · Vue.js · Tailwind CSS · Storybook · 5+ years\n\nAsk me anything — projects, tech stack, work history, or how to get in touch.",
    "👋 Hey there!\n\nHarish builds production apps with React & Next.js (primary) and Vue.js (secondary) — SSR/SSG apps, real-time dashboards, and Tailwind CSS + Storybook component libraries. Apps serving 100K+ users, LCP improvements of 60%+.\n\nWhat would you like to know?",
    "👋 Welcome to Harish's portfolio chat!\n\nHarish Yerraguntla — Full-Stack Engineer\nReact · Next.js · Vue.js · Node.js · Python\nMS Computer Science, SUNY New Paltz · Currently @ Progress Solutions Inc.\n\nAsk about experience, skills, or projects!",
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
