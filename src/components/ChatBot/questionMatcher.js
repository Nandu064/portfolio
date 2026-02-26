import { resumeQA } from "./resumeData";

/**
 * Smart question matcher using multiple techniques:
 * 1. Keyword extraction and matching
 * 2. Synonym recognition
 * 3. Question type detection
 * 4. Fuzzy string matching
 * 5. Context understanding
 */

// Synonym mappings for better matching
const synonyms = {
  experience: [
    "job", "employment", "career", "positions", "worked", "background",
    "history", "companies", "roles",
  ],
  skills: [
    "technologies", "tech stack", "tools", "expertise", "proficient",
    "know", "good at", "capable", "languages", "frameworks",
  ],
  education: [
    "degree", "university", "college", "studied", "graduated",
    "school", "masters", "bachelor", "gpa", "academic",
  ],
  projects: [
    "built", "created", "developed", "portfolio", "work samples",
    "made", "apps", "applications", "product",
  ],
  contact: [
    "reach", "email", "phone", "connect", "linkedin", "github",
    "hire", "message", "talk",
  ],
  location: ["where", "based", "live", "from", "city", "remote", "relocate"],
  vue: ["vuejs", "vue.js", "vue 3", "composition api", "pinia", "nuxt"],
  react: ["reactjs", "react.js", "nextjs", "next.js", "redux"],
  current: ["now", "currently", "present", "latest", "today", "recent"],
  company: ["companies", "employer", "organization", "firm"],
  performance: ["optimize", "speed", "faster", "slow", "lighthouse", "lcp", "web vitals"],
  available: ["open to work", "open", "looking", "hiring", "job search", "opportunities", "available"],
  typescript: ["ts", "type safety", "typed", "types"],
  kafka: ["messaging", "events", "streaming", "queue", "socket", "websocket", "realtime"],
  sniplink: ["url shortener", "link shortener", "short url"],
  csv: ["plot studio", "chart tool", "visualization tool", "csv plot"],
  authorization: ["visa", "opt", "stem", "sponsorship", "h1b", "work permit"],
};

// Question type patterns
const questionTypes = {
  what: /^what/i,
  where: /^where/i,
  when: /^when/i,
  how: /^how/i,
  why: /^why/i,
  who: /^who/i,
  can: /^can|^do you/i,
  tell: /tell me|describe|explain/i,
};

/**
 * Normalize text for better matching
 */
const normalizeText = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ") // Remove punctuation
    .replace(/\s+/g, " ") // Normalize whitespace
    .trim();
};

/**
 * Extract keywords from text
 */
const extractKeywords = (text) => {
  const normalized = normalizeText(text);
  const words = normalized.split(" ");

  // Remove common stop words
  const stopWords = new Set([
    "a",
    "an",
    "the",
    "is",
    "are",
    "was",
    "were",
    "be",
    "been",
    "being",
    "have",
    "has",
    "had",
    "do",
    "does",
    "did",
    "will",
    "would",
    "should",
    "could",
    "may",
    "might",
    "must",
    "can",
    "about",
    "and",
    "or",
    "but",
    "in",
    "on",
    "at",
    "to",
    "for",
    "of",
    "with",
    "by",
    "from",
    "as",
    "into",
  ]);

  return words.filter((word) => !stopWords.has(word) && word.length > 2);
};

/**
 * Expand keywords with synonyms
 */
const expandWithSynonyms = (keywords) => {
  const expanded = new Set(keywords);

  keywords.forEach((keyword) => {
    Object.entries(synonyms).forEach(([key, syns]) => {
      if (syns.includes(keyword) || key === keyword) {
        expanded.add(key);
        syns.forEach((syn) => expanded.add(syn));
      }
    });
  });

  return Array.from(expanded);
};

/**
 * Calculate similarity score between question and QA entry
 */
const calculateScore = (question, qaEntry) => {
  const questionNorm = normalizeText(question);
  const questionKeywords = extractKeywords(questionNorm);
  const expandedKeywords = expandWithSynonyms(questionKeywords);

  let score = 0;

  // Check keywords match
  qaEntry.keywords.forEach((keyword) => {
    const keywordNorm = normalizeText(keyword);
    if (
      expandedKeywords.some(
        (k) => keywordNorm.includes(k) || k.includes(keywordNorm)
      )
    ) {
      score += 3;
    }
  });

  // Check patterns match
  qaEntry.patterns.forEach((pattern) => {
    if (pattern.test(questionNorm)) {
      score += 5;
    }
  });

  // Bonus for exact phrase matches
  qaEntry.keywords.forEach((keyword) => {
    if (questionNorm.includes(normalizeText(keyword))) {
      score += 2;
    }
  });

  // Check question type alignment
  const questionType = Object.keys(questionTypes).find((type) =>
    questionTypes[type].test(questionNorm)
  );

  if (questionType && qaEntry.questionType === questionType) {
    score += 1;
  }

  return score;
};

/**
 * Find best matching answer for a question
 */
export const matchQuestion = (question) => {
  const normalized = normalizeText(question);

  // Handle empty or too short questions
  if (normalized.length < 3) {
    return {
      answer:
        "I didn't quite catch that. Could you please ask a specific question about my experience, skills, or projects?",
      suggestions: [
        "What's your current role?",
        "What are your main skills?",
        "Tell me about your experience",
      ],
    };
  }

  // Calculate scores for all QA entries
  const scores = resumeQA.map((qa) => ({
    ...qa,
    score: calculateScore(normalized, qa),
  }));

  // Sort by score
  scores.sort((a, b) => b.score - a.score);

  // If best score is too low, return fallback
  if (scores[0].score < 2) {
    return {
      answer:
        "I'm not sure I understand that question. I can help you with:\n\n• Work experience and current role\n• Technical skills and expertise\n• Education background\n• Projects and achievements\n• Contact information\n\nWhat would you like to know?",
      suggestions: [
        "What is your current role?",
        "What are your Vue.js skills?",
        "Where did you study?",
      ],
    };
  }

  // Return best match
  return {
    answer:
      typeof scores[0].answer === "function"
        ? scores[0].answer(normalized)
        : scores[0].answer,
    suggestions: scores[0].suggestions || [],
  };
};

/**
 * Get contextual follow-up suggestions based on last answer
 */
export const getFollowUpSuggestions = (lastCategory) => {
  const followUps = {
    experience: [
      "What technologies do you use?",
      "Tell me about your projects",
    ],
    skills: ["What's your experience with Vue.js?", "Where have you worked?"],
    education: ["What did you study?", "What's your work experience?"],
    projects: ["What technologies did you use?", "Can I see your portfolio?"],
    contact: ["Where are you located?", "What's your background?"],
  };

  return followUps[lastCategory] || [];
};
