/**
 * Resume data structured for intelligent Q&A matching
 * Each entry contains:
 * - keywords: Terms that might appear in questions
 * - patterns: Regex patterns for matching
 * - answer: Response text or function
 * - category: Grouping for follow-up suggestions
 * - suggestions: Follow-up question suggestions
 */

export const resumeQA = [
  // CURRENT ROLE
  {
    keywords: [
      "current",
      "now",
      "currently",
      "working",
      "job",
      "role",
      "position",
      "doing",
    ],
    patterns: [
      /what.*doing/i,
      /current.*role/i,
      /where.*work/i,
      /working.*now/i,
    ],
    questionType: "what",
    category: "experience",
    answer:
      "Right now, I'm working as a Software Developer at Progress Solutions Inc. I work remotely from New York. Most of my day goes into building real-time data visualization tools using Vue.js 3 and TypeScript. The applications I work on are used by around 50,000 people daily, and I was promoted from intern to full-time in July 2025.",
    suggestions: [
      "What do you work on daily?",
      "What's your tech stack?",
      "Tell me about your projects",
    ],
  },

  // DAILY WORK
  {
    keywords: [
      "daily",
      "day to day",
      "typical day",
      "responsibilities",
      "work on",
    ],
    patterns: [/what.*do.*daily/i, /day.*to.*day/i, /typical.*day/i],
    questionType: "what",
    category: "experience",
    answer:
      "My typical day is a mix of frontend and backend work. I build interactive dashboards using Plotly.js — some of them render over a million data points. I also optimize performance a lot… for example, I brought the rendering time down from about 2–3 seconds to under 500ms. Apart from that, I work with Kafka for real-time data and build APIs using Node.js and FastAPI.",
    suggestions: [
      "What technologies do you use?",
      "How did you optimize performance?",
      "Tell me about your Vue.js work",
    ],
  },

  // VUE EXPERTISE
  {
    keywords: ["vue", "vuejs", "vue.js", "vue 3", "vuex", "composition api"],
    patterns: [/vue/i, /vuex/i, /composition.*api/i],
    questionType: "what",
    category: "skills",
    answer:
      "Vue.js is what I specialize in. I've built more than 14 production apps using Vue 3. I mainly work with Composition API, Pinia, and a lot of custom reusable components. I've also done quite a bit of real-time data visualization with Plotly and D3. And because I care a lot about performance, I've reduced code duplication and improved UI responsiveness across multiple apps.",
    suggestions: [
      "What projects did you build with Vue?",
      "Tell me about your state management experience",
      "What's your frontend expertise?",
    ],
  },

  // TECH STACK
  {
    keywords: [
      "skills",
      "technologies",
      "tech stack",
      "tools",
      "know",
      "expertise",
      "proficient",
    ],
    patterns: [/what.*skills/i, /tech.*stack/i, /technologies/i, /good.*at/i],
    questionType: "what",
    category: "skills",
    answer:
      "My main stack is pretty balanced across frontend and backend. On the frontend, I work with Vue.js, React, Next.js, and TypeScript. On the backend, I use Node.js and FastAPI, and I've worked with GraphQL too. I've used MongoDB, PostgreSQL, Redis, Kafka for real-time systems, Docker, AWS… and for testing I'm comfortable with Jest, Cypress, and Vitest.",
    suggestions: [
      "What's your Vue.js experience?",
      "Tell me about your backend skills",
      "What about data visualization?",
    ],
  },

  // REACT SKILLS
  {
    keywords: ["react", "reactjs", "next", "nextjs"],
    patterns: [/react/i, /next/i],
    questionType: "what",
    category: "skills",
    answer:
      "Yeah, I have solid experience with React as well. I've worked on apps that get more than 15 million visitors a year. I used Redux Toolkit, optimized load times from around 8 seconds down to 2.5 seconds, and built component libraries to speed up the team's development workflow.",
    suggestions: [
      "What's your Vue.js experience?",
      "Tell me about performance optimization",
      "What projects did you build?",
    ],
  },

  // WORK EXPERIENCE OVERVIEW
  {
    keywords: [
      "experience",
      "worked",
      "companies",
      "jobs",
      "career",
      "background",
    ],
    patterns: [
      /work.*experience/i,
      /where.*worked/i,
      /previous.*jobs/i,
      /career/i,
    ],
    questionType: "what",
    category: "experience",
    answer:
      "I have a little over 5 years of experience. I'm currently at Progress Solutions. Before that, I was a Research Assistant at SUNY New Paltz. Earlier, I worked at Harns Technologies where I built 14 production apps. Before that, I was at QS as a Frontend Developer, and I started out freelancing for small businesses back in 2019.",
    suggestions: [
      "Tell me about Progress Solutions",
      "What did you build at Harns?",
      "What about your education?",
    ],
  },

  // PROGRESS SOLUTIONS DETAILS
  {
    keywords: ["progress solutions", "progress", "current company"],
    patterns: [/progress.*solutions/i, /current.*company/i],
    questionType: "tell",
    category: "experience",
    answer:
      "At Progress Solutions, my main focus is on real-time dashboards and high-performance visualizations. One of my biggest improvements was switching our rendering approach from SVG to Canvas. That single change brought our dashboards from 2–3 seconds of lag to under half a second. I've also worked on Kafka integrations and improved our API performance significantly.",
    suggestions: [
      "How did you optimize performance?",
      "What's your tech stack?",
      "Tell me about other companies",
    ],
  },

  // HARNS EXPERIENCE
  {
    keywords: ["harns", "harns technologies"],
    patterns: [/harns/i],
    questionType: "tell",
    category: "experience",
    answer:
      "Harns Technologies was a very hands-on role for me. I built 14 production applications there. One of the coolest projects was a real-time IoT platform that processed data from more than 500 devices. I also built an e-commerce CMS that handled around 10,000 monthly transactions and a few large publishing platforms.",
    suggestions: [
      "What technologies did you use?",
      "Tell me about the IoT platform",
      "What about your other work?",
    ],
  },

  // EDUCATION
  {
    keywords: [
      "education",
      "degree",
      "university",
      "college",
      "studied",
      "school",
      "masters",
      "bachelor",
    ],
    patterns: [
      /education/i,
      /degree/i,
      /university/i,
      /studied/i,
      /graduated/i,
    ],
    questionType: "what",
    category: "education",
    answer:
      "I completed my Master's in Computer Science at SUNY New Paltz with a 3.81 GPA. Before that, I did my Bachelor's in Computer Science at Lovely Professional University. During my Master's, I also worked as a Research Assistant on data visualization and UI engineering.",
    suggestions: [
      "What was your role at SUNY?",
      "What's your work experience?",
      "Tell me about your skills",
    ],
  },

  // PROJECTS
  {
    keywords: [
      "projects",
      "built",
      "created",
      "portfolio",
      "work samples",
      "made",
      "developed",
    ],
    patterns: [/what.*built/i, /projects/i, /portfolio/i, /work.*samples/i],
    questionType: "what",
    category: "projects",
    answer:
      "I've worked on a variety of projects. Some highlights:\n• A real-time IoT platform using Vue and D3 that supported 500+ devices.\n• An e-commerce CMS handling 10k+ monthly transactions.\n• Dashboards built with Plotly.js that render over a million points with smooth performance.\n• Multiple publishing platforms with tens of thousands of daily readers.\n• And a few internal component libraries to speed up development for my teams.",
    suggestions: [
      "Tell me about the IoT platform",
      "What technologies did you use?",
      "How did you optimize performance?",
    ],
  },

  // IOT PLATFORM DETAILS
  {
    keywords: ["iot", "sensors", "real-time", "devices"],
    patterns: [/iot/i, /sensors/i, /real.*time.*data/i],
    questionType: "tell",
    category: "projects",
    answer:
      "The IoT platform was one of my favorite projects. It used Vue.js and D3 for visualizations — real-time line charts, bar charts, heatmaps, all updating live. The backend used Node.js with WebSockets to stream data from over 500 devices. We used MongoDB's time-series collections to store everything efficiently.",
    suggestions: [
      "What visualization libraries did you use?",
      "Tell me about other projects",
      "What's your Vue.js expertise?",
    ],
  },

  // PERFORMANCE WORK
  {
    keywords: [
      "performance",
      "optimization",
      "optimize",
      "fast",
      "speed",
      "improved",
    ],
    patterns: [/performance/i, /optimiz/i, /faster/i, /speed/i, /improve/i],
    questionType: "how",
    category: "skills",
    answer:
      "I really enjoy performance optimization. A few examples: I brought dashboard rendering time from 2–3 seconds down to under 500ms, reduced API response times from around 800ms to about 200ms, improved page load times from 8 seconds to roughly 2.5 seconds, and cut almost half of redundant API calls using Redis caching.",
    suggestions: [
      "How did you optimize rendering?",
      "What about database optimization?",
      "Tell me about your tech stack",
    ],
  },

  // CONTACT
  {
    keywords: [
      "contact",
      "email",
      "phone",
      "reach",
      "connect",
      "linkedin",
      "github",
    ],
    patterns: [
      /contact/i,
      /email/i,
      /reach.*you/i,
      /connect/i,
      /linkedin/i,
      /github/i,
    ],
    questionType: "how",
    category: "contact",
    answer:
      "Sure — here's how you can reach me:\nEmail: yerraguntlaharish98@gmail.com\nPhone: +1 (205) 736-5808\nLinkedIn: linkedin.com/in/harish-yerraguntla-70695416b\nGitHub: github.com/nandu064\nPortfolio: nandu064.github.io/portfolio",
    suggestions: [
      "Where are you located?",
      "What's your current role?",
      "Tell me about your experience",
    ],
  },

  // LOCATION
  {
    keywords: ["location", "where", "based", "live", "city", "remote"],
    patterns: [/where.*located/i, /where.*based/i, /where.*live/i, /location/i],
    questionType: "where",
    category: "contact",
    answer:
      "I'm currently based in Painted Post, New York. I work remotely for Progress Solutions in Texas. I'm authorized to work in the US through June 2028 under the OPT STEM extension.",
    suggestions: [
      "What's your current role?",
      "How can I contact you?",
      "Tell me about your background",
    ],
  },

  // YEARS OF EXPERIENCE
  {
    keywords: ["how long", "years", "experience years", "how many years"],
    patterns: [/how.*long/i, /how.*many.*years/i, /years.*experience/i],
    questionType: "how",
    category: "experience",
    answer:
      "I have a little over 5 years of professional experience. I started freelancing in 2019, then worked at QS and Harns Technologies, completed my Master's, and now I'm a full-time developer at Progress Solutions.",
    suggestions: [
      "Where have you worked?",
      "What's your expertise?",
      "Tell me about your projects",
    ],
  },

  // TESTING
  {
    keywords: ["testing", "test", "quality", "jest", "cypress", "coverage"],
    patterns: [/testing/i, /test.*coverage/i, /quality/i, /jest/i, /cypress/i],
    questionType: "what",
    category: "skills",
    answer:
      "I'm big on testing. I usually aim for around 90% coverage for critical features. I work with Jest for unit testing, Cypress for end-to-end tests, and Vitest for Vue components. Everything runs through CI pipelines so issues are caught early.",
    suggestions: [
      "What's your CI/CD experience?",
      "Tell me about your dev practices",
      "What tools do you use?",
    ],
  },

  // DATA VISUALIZATION
  {
    keywords: [
      "visualization",
      "charts",
      "graphs",
      "plotly",
      "d3",
      "dashboard",
    ],
    patterns: [/visualization/i, /charts/i, /plotly/i, /d3/i, /dashboard/i],
    questionType: "what",
    category: "skills",
    answer:
      "Data visualization is a big part of what I do. I use Plotly.js for heavy dashboards that handle a million+ points, D3.js for custom visualizations, and the Canvas API when I need raw performance. Many of the dashboards I worked on serve tens of thousands of users daily.",
    suggestions: [
      "How did you optimize performance?",
      "Tell me about your projects",
      "What's your tech stack?",
    ],
  },

  // BACKEND
  {
    keywords: [
      "backend",
      "api",
      "server",
      "node",
      "python",
      "fastapi",
      "django",
    ],
    patterns: [/backend/i, /api/i, /server/i, /node/i, /python/i, /fastapi/i],
    questionType: "what",
    category: "skills",
    answer:
      "On the backend, I work with Node.js, Express, and Python FastAPI. I've built GraphQL APIs as well. I've used MongoDB, PostgreSQL, and Redis for caching. With indexing and query optimization, I've brought some endpoints down to under 200ms response time.",
    suggestions: [
      "What about frontend?",
      "Tell me about databases",
      "What projects did you build?",
    ],
  },

  // GREETING
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    patterns: [/^(hi|hello|hey|greetings)/i],
    questionType: "greeting",
    category: "general",
    answer:
      "Hey! I'm Harish. I'm a frontend engineer who loves Vue.js, real-time dashboards, and solving performance problems. What would you like to know about me?",
    suggestions: [
      "What's your current role?",
      "What are your main skills?",
      "Tell me about your experience",
    ],
  },

  // WHO ARE YOU
  {
    keywords: ["who", "about", "yourself", "intro", "introduction"],
    patterns: [/who.*are.*you/i, /tell.*about.*yourself/i, /introduce/i],
    questionType: "who",
    category: "general",
    answer:
      "Sure! I'm Harish Yerraguntla. I'm a frontend-focused engineer with strong experience in Vue.js and real-time data visualization. I've worked on applications that serve more than 100,000 users, and I love improving performance and building clean UI experiences. I also recently finished my Master's in CS from SUNY New Paltz.",
    suggestions: [
      "What's your current project?",
      "What technologies do you use?",
      "Tell me about your achievements",
    ],
  },
];
