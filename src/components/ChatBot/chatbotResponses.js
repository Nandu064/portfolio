/**
 * Chatbot response helpers
 */

export const getWelcomeMessage = () => {
  const messages = [
    "Hi! I'm Harish Yerraguntla 👋\n\nI can answer questions about my Vue.js expertise, work experience, technical skills, projects, and more.\n\nWhat would you like to know?",
    "Hey there! 👋 I'm Harish Yerraguntla.\n\nAsk me anything about my:\n• Vue.js & frontend expertise\n• Work experience & projects\n• Technical skills & achievements\n• Education & contact info",
    "Hello! Welcome to my portfolio.\n\nI'm Harish Yerraguntla, and I can help you learn about my 5+ years of Vue.js and frontend development experience.\n\nWhat interests you?",
  ];

  return messages[Math.floor(Math.random() * messages.length)];
};

export const getSuggestions = () => {
  return [
    "What's your Vue.js expertise?",
    "Tell me about your experience",
    "What projects have you built?",
    "How can I contact you?",
  ];
};

export const getErrorMessage = () => {
  return "Oops! Something went wrong. Please try asking your question again.";
};

export const getNoMatchMessage = () => {
  return "I'm not sure I understand that question. I can help you learn about my:\n\n• Vue.js expertise and frontend skills\n• Work experience and achievements\n• Education background\n• Projects and portfolio\n• Contact information\n\nWhat would you like to know?";
};

export const getTypingMessages = () => {
  return [
    "Let me think...",
    "Just a moment...",
    "Looking that up...",
    "Hmm, interesting question...",
  ];
};

export const getRandomTypingMessage = () => {
  const messages = getTypingMessages();
  return messages[Math.floor(Math.random() * messages.length)];
};
