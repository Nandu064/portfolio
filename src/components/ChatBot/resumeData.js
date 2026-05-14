import {
  education,
  experience,
  metrics,
  metadata,
  personalInfo,
  projects,
  summary,
  technicalSkills,
} from "../../data/portfolio";

const currentRole = experience.find((item) => item.current) || experience[0];
const previousRoles = experience.filter((item) => !item.current);
const latestEducation = education[0];

const topProjects = projects.slice(0, 4)
  .map((project) => `• ${project.title} — ${project.description}`)
  .join("\n");

const experienceTimeline = experience
  .map(
    (item) =>
      `• ${item.startDate} to ${item.current ? "Present" : item.endDate} — ${item.company} (${item.position})`
  )
  .join("\n");

export const resumeQA = [
  {
    keywords: ["hello", "hi", "hey", "greetings", "howdy"],
    patterns: [/^(hi|hello|hey|greetings|howdy)/i],
    questionType: "greeting",
    category: "general",
    answer:
      `👋 Hi! This is ${personalInfo.name}'s portfolio assistant.\n\n` +
      `${personalInfo.name} — ${personalInfo.title}\n` +
      `${personalInfo.subtitle}\n\n` +
      `Ask about experience, skills, projects, or how to get in touch.`,
    suggestions: [
      "Tell me about Harish",
      "What's your current role?",
      "What projects have you built?",
    ],
  },
  {
    keywords: ["who", "about", "yourself", "intro", "introduction", "overview", "summary"],
    patterns: [/who.*are.*you/i, /tell.*about.*yourself/i, /introduce/i, /overview/i, /summary/i],
    questionType: "who",
    category: "general",
    answer:
      `👨‍💻 ${personalInfo.name}\n\n` +
      `${summary.headline}\n\n` +
      `💼 Current role: ${currentRole.position} at ${currentRole.company}\n` +
      `🎓 ${latestEducation.degree} — ${latestEducation.institution} (${latestEducation.gpa})\n` +
      `📍 ${personalInfo.location}\n` +
      `🟢 Open to work: ${metadata.openToWork ? "Yes" : "No"}`,
    suggestions: [
      "What's your current role?",
      "What's your tech stack?",
      "Where have you worked?",
    ],
  },
  {
    keywords: ["current", "currently", "now", "role", "job", "position", "employed", "work now"],
    patterns: [/current.*role/i, /where.*work/i, /working.*now/i, /current.*job/i],
    questionType: "what",
    category: "experience",
    answer:
      `💼 Current Role\n\n` +
      `${currentRole.position} at ${currentRole.company}\n` +
      `${currentRole.location} · ${currentRole.startDate} to Present\n\n` +
      `${currentRole.description.slice(0, 4).map((item) => `• ${item}`).join("\n")}\n\n` +
      `Key details:\n` +
      `• Tech stack: ${currentRole.keyMetrics.techStack}\n` +
      `• Testing: ${currentRole.keyMetrics.testing}\n` +
      `• Methodology: ${currentRole.keyMetrics.methodology}`,
    suggestions: [
      "Tell me about your experience",
      "What technologies do you use?",
      "How did you optimize performance?",
    ],
  },
  {
    keywords: ["experience", "worked", "companies", "jobs", "career", "background", "history", "previous"],
    patterns: [/work.*experience/i, /where.*worked/i, /previous.*jobs/i, /career/i, /companies/i],
    questionType: "what",
    category: "experience",
    answer:
      `📊 Career Overview\n\n` +
      `${experienceTimeline}\n\n` +
      `Highlights:\n` +
      `• ${metadata.totalYearsExperience} of experience across ${metadata.companiesWorkedFor} companies\n` +
      `• Current focus: Vue.js frontends, Python backend services, GraphQL APIs, and scientific data platforms\n` +
      `• Prior roles include SUNY New Paltz, Harns Technologies, and QS Quacquarelli Symonds`,
    suggestions: [
      `Tell me about ${currentRole.company}`,
      `Tell me about ${previousRoles[0]?.company || "SUNY"}`,
      "What projects have you built?",
    ],
  },
  {
    keywords: ["progress solutions", "progress solutions inc", "current company", "current employer"],
    patterns: [/progress.*solutions/i, /current.*company/i, /current.*employer/i],
    questionType: "tell",
    category: "experience",
    answer:
      `🏢 ${currentRole.company}\n\n` +
      `${currentRole.position} · ${currentRole.location} · ${currentRole.startDate} to Present\n\n` +
      `${currentRole.description.slice(0, 6).map((item) => `• ${item}`).join("\n")}`,
    suggestions: [
      "What technologies do you use?",
      "Tell me about your experience",
      "Where have you worked before?",
    ],
  },
  {
    keywords: ["suny", "state university of new york", "new paltz", "university"],
    patterns: [/suny/i, /state.*university.*new.*york/i, /new.*paltz/i],
    questionType: "tell",
    category: "experience",
    answer: (() => {
      const role = experience.find((item) => item.company.includes("State University"));
      return (
        `🎓 ${role.company}\n\n` +
        `${role.position} · ${role.location} · ${role.startDate} to ${role.endDate}\n\n` +
        `${role.description.slice(0, 5).map((item) => `• ${item}`).join("\n")}`
      );
    })(),
    suggestions: [
      "What did you study?",
      "Tell me about your current role",
      "What technologies do you use?",
    ],
  },
  {
    keywords: ["harns", "harns technologies", "india"],
    patterns: [/harns/i],
    questionType: "tell",
    category: "experience",
    answer: (() => {
      const role = experience.find((item) => item.company.includes("Harns"));
      return (
        `🏢 ${role.company}\n\n` +
        `${role.position} · ${role.location} · ${role.startDate} to ${role.endDate}\n\n` +
        `${role.description.slice(0, 5).map((item) => `• ${item}`).join("\n")}`
      );
    })(),
    suggestions: [
      "Tell me about real-time dashboards",
      "What projects have you built?",
      "What technologies do you use?",
    ],
  },
  {
    keywords: ["qs", "quacquarelli", "symonds"],
    patterns: [/quacquarelli/i, /\bqs\b/i, /symonds/i],
    questionType: "tell",
    category: "experience",
    answer: (() => {
      const role = experience.find((item) => item.company.includes("QS"));
      return (
        `🏢 ${role.company}\n\n` +
        `${role.position} · ${role.location} · ${role.startDate} to ${role.endDate}\n\n` +
        `${role.description.slice(0, 5).map((item) => `• ${item}`).join("\n")}`
      );
    })(),
    suggestions: [
      "What's your React experience?",
      "Tell me about performance optimization",
      "What projects have you built?",
    ],
  },
  {
    keywords: ["skills", "technologies", "tech stack", "tools", "expertise", "stack", "languages", "frameworks"],
    patterns: [/what.*skills/i, /tech.*stack/i, /technologies/i, /what.*know/i, /frameworks/i],
    questionType: "what",
    category: "skills",
    answer:
      `🛠 Tech Stack\n\n` +
      `Core stack:\n• ${summary.coreStack}\n\n` +
      `Frontend:\n• ${technicalSkills.frontend.slice(0, 8).join(" · ")}\n\n` +
      `Backend:\n• ${technicalSkills.backend.slice(0, 6).join(" · ")}\n\n` +
      `Databases & Cloud:\n• ${technicalSkills.databases.slice(0, 5).join(" · ")}\n• ${technicalSkills.cloudDevOps.slice(0, 5).join(" · ")}`,
    suggestions: [
      "What's your React experience?",
      "Tell me about backend skills",
      "What about testing?",
    ],
  },
  {
    keywords: ["vue", "vuejs", "react", "frontend", "vuex", "vuetify", "typescript frontend"],
    patterns: [/vue/i, /react/i, /frontend/i, /vuex/i, /vuetify/i],
    questionType: "what",
    category: "skills",
    answer:
      `⚛️ Frontend Expertise\n\n` +
      `• Strongest areas: Vue.js, Vuex, Vue Router, Vuetify, React.js, TypeScript\n` +
      `• Built data-intensive Vue.js apps for scientific research, multi-tenant content platforms, and analytics dashboards\n` +
      `• Complex data visualizations with Plotly.js — violin plots, radar plots, 2D histograms, scatter plots with lasso selection\n` +
      `• Core frontend skills: ${technicalSkills.frontend.slice(0, 12).join(" · ")}`,
    suggestions: [
      "How did you optimize performance?",
      "Tell me about your current role",
      "What projects have you built?",
    ],
  },
  {
    keywords: ["backend", "api", "server", "node", "python", "fastapi", "django", "graphql", "rest"],
    patterns: [/backend/i, /server/i, /node/i, /python/i, /fastapi/i, /graphql/i, /rest/i],
    questionType: "what",
    category: "skills",
    answer:
      `🖥️ Backend Skills\n\n` +
      `• Main backend stack: Node.js, Express.js, Python FastAPI, Django, REST APIs, GraphQL\n` +
      `• Built microservices for payment workflows, transaction processing, claim platforms, and portfolio analytics\n` +
      `• Strong with PostgreSQL, MongoDB, Redis, query optimization, indexing, and caching\n` +
      `• Core backend skills: ${technicalSkills.backend.join(" · ")}`,
    suggestions: [
      "What databases do you use?",
      "How did you optimize performance?",
      "What projects have you built?",
    ],
  },
  {
    keywords: ["performance", "optimization", "optimize", "speed", "faster", "bundle", "latency", "load time"],
    patterns: [/performance/i, /optimiz/i, /faster/i, /bundle/i, /latency/i, /load.*time/i],
    questionType: "how",
    category: "skills",
    answer:
      `⚡ Performance Highlights\n\n` +
      `• Reduced page load times by about ${metrics.performanceImprovement || "~70%"}\n` +
      `• Cut bundle sizes by about ${metrics.bundleReduction || "~55%"}\n` +
      `• Improved API latency with indexing, Redis caching, and query tuning\n` +
      `• Used indexing, schema normalization, query builder optimization, and caching\n` +
      `• Improved PostgreSQL query performance 40%+ at SUNY; scientific data platform at Progress Solutions Inc.`,
    suggestions: [
      "What's your React experience?",
      "Tell me about American Express",
      "What projects have you built?",
    ],
  },
  {
    keywords: ["testing", "test", "quality", "jest", "cypress", "pytest", "coverage", "rtl"],
    patterns: [/testing/i, /coverage/i, /jest/i, /cypress/i, /pytest/i],
    questionType: "what",
    category: "skills",
    answer:
      `🧪 Testing\n\n` +
      `• Tools: ${technicalSkills.testing.join(" · ")}\n` +
      `• Typical coverage target: ${metrics.testCoverage}\n` +
      `• Uses unit, component, integration, and end-to-end testing in CI/CD pipelines\n` +
      `• Recent portfolio data highlights 88-90% coverage on critical applications`,
    suggestions: [
      "What technologies do you use?",
      "Tell me about CI/CD",
      "What projects have you built?",
    ],
  },
  {
    keywords: ["cloud", "aws", "docker", "github actions", "ci cd", "deployment", "devops"],
    patterns: [/cloud/i, /aws/i, /docker/i, /github.*actions/i, /ci.*cd/i, /deploy/i],
    questionType: "what",
    category: "skills",
    answer:
      `☁️ Cloud & DevOps\n\n` +
      `• ${technicalSkills.cloudDevOps.join(" · ")}\n` +
      `• Experience with AWS services including Lambda, ECS, S3, and RDS\n` +
      `• Builds CI/CD workflows with GitHub Actions for linting, testing, building, and deployment\n` +
      `• Uses Docker for consistent environments across development and production`,
    suggestions: [
      "What about testing?",
      "Tell me about backend skills",
      "What projects have you built?",
    ],
  },
  {
    keywords: ["projects", "built", "created", "portfolio", "work samples", "apps", "applications"],
    patterns: [/what.*built/i, /projects/i, /portfolio/i, /work.*samples/i, /apps/i],
    questionType: "what",
    category: "projects",
    answer:
      `🚀 Featured Projects\n\n${topProjects}`,
    suggestions: [
      "Tell me about FinGuard",
      "Tell me about ClaimSight AI",
      "Tell me about Sniplink",
    ],
  },
  {
    keywords: ["finguard", "portfolio analytics", "risk analytics", "portfolio management"],
    patterns: [/finguard/i, /portfolio.*analytics/i, /risk.*analytics/i],
    questionType: "tell",
    category: "projects",
    answer: (() => {
      const project = projects.find((item) => item.title === "FinGuard");
      return (
        `📈 ${project.title}\n\n` +
        `${project.description}\n\n` +
        `${project.highlights.map((item) => `• ${item}`).join("\n")}\n\n` +
        `Tech: ${project.technologies.join(" · ")}`
      );
    })(),
    suggestions: [
      "Tell me about ClaimSight AI",
      "Tell me about Sniplink",
      "What technologies do you use?",
    ],
  },
  {
    keywords: ["claimsight", "claimsight ai", "insurance", "claim processing", "fraud detection"],
    patterns: [/claimsight/i, /insurance.*claim/i, /fraud.*detection/i, /claim.*processing/i],
    questionType: "tell",
    category: "projects",
    answer: (() => {
      const project = projects.find((item) => item.title === "ClaimSight AI");
      return (
        `🏥 ${project.title}\n\n` +
        `${project.description}\n\n` +
        `${project.highlights.map((item) => `• ${item}`).join("\n")}\n\n` +
        `Tech: ${project.technologies.join(" · ")}`
      );
    })(),
    suggestions: [
      "Tell me about FinGuard",
      "Tell me about Sniplink",
      "What projects have you built?",
    ],
  },
  {
    keywords: ["sniplink", "url shortener", "link shortener", "short url"],
    patterns: [/sniplink/i, /url.*short/i, /link.*short/i],
    questionType: "tell",
    category: "projects",
    answer: (() => {
      const project = projects.find((item) => item.title === "Sniplink");
      return (
        `🔗 ${project.title}\n\n` +
        `${project.description}\n\n` +
        `${project.highlights.map((item) => `• ${item}`).join("\n")}\n\n` +
        `Tech: ${project.technologies.join(" · ")}`
      );
    })(),
    suggestions: [
      "Tell me about CSV Plot Studio",
      "What other projects have you built?",
      "What technologies do you use?",
    ],
  },
  {
    keywords: ["csv", "plot studio", "csv plot", "visualization tool", "data viz project"],
    patterns: [/csv.*plot/i, /plot.*studio/i],
    questionType: "tell",
    category: "projects",
    answer: (() => {
      const project = projects.find((item) => item.title === "CSV Plot Studio");
      return (
        `📊 ${project.title}\n\n` +
        `${project.description}\n\n` +
        `${project.highlights.map((item) => `• ${item}`).join("\n")}\n\n` +
        `Tech: ${project.technologies.join(" · ")}`
      );
    })(),
    suggestions: [
      "Tell me about Sniplink",
      "Tell me about FinGuard",
      "What data visualization tools do you use?",
    ],
  },
  {
    keywords: ["education", "degree", "university", "college", "studied", "masters", "bachelor", "gpa"],
    patterns: [/education/i, /degree/i, /university/i, /studied/i, /masters/i, /bachelor/i, /gpa/i],
    questionType: "what",
    category: "education",
    answer:
      `🎓 Education\n\n` +
      education
        .map(
          (item) =>
            `• ${item.degree} — ${item.institution}, ${item.location} (${item.startDate} to ${item.endDate}${item.gpa ? `, GPA ${item.gpa}` : ""})`
        )
        .join("\n"),
    suggestions: [
      "Tell me about your experience",
      "What's your current role?",
      "What technologies do you use?",
    ],
  },
  {
    keywords: ["contact", "email", "phone", "reach", "connect", "linkedin", "github", "hire", "message"],
    patterns: [/contact/i, /email/i, /phone/i, /reach/i, /linkedin/i, /github/i, /hire/i],
    questionType: "how",
    category: "contact",
    answer:
      `📬 Contact\n\n` +
      `• Email: ${personalInfo.email}\n` +
      `• Phone: ${personalInfo.phone}\n` +
      `• LinkedIn: ${personalInfo.linkedin}\n` +
      `• GitHub: ${personalInfo.github}\n` +
      `• Portfolio: ${personalInfo.portfolio}`,
    suggestions: [
      "Are you open to work?",
      "Where are you located?",
      "What's your work authorization?",
    ],
  },
  {
    keywords: ["location", "where", "based", "live", "city", "remote", "relocate"],
    patterns: [/where.*located/i, /where.*based/i, /location/i, /remote/i, /relocat/i],
    questionType: "where",
    category: "contact",
    answer:
      `📍 Location\n\n` +
      `${personalInfo.location}\n\n` +
      `• Open to work: ${metadata.openToWork ? "Yes" : "No"}\n` +
      `• Preferred roles: ${metadata.preferredRoles.join(" · ")}\n` +
      `• Work authorization: ${metadata.workAuthorization}`,
    suggestions: [
      "What's your work authorization?",
      "How can I contact you?",
      "What roles are you looking for?",
    ],
  },
  {
    keywords: ["available", "open to work", "hiring", "looking", "opportunities", "roles"],
    patterns: [/open.*to.*work/i, /available/i, /opportunit/i, /looking.*for/i],
    questionType: "what",
    category: "contact",
    answer:
      `🟢 Availability\n\n` +
      `• Open to work: ${metadata.openToWork ? "Yes" : "No"}\n` +
      `• Preferred roles: ${metadata.preferredRoles.join(" · ")}\n` +
      `• Work authorization: ${metadata.workAuthorization}\n` +
      `• Best contact: ${personalInfo.email}`,
    suggestions: [
      "What's your work authorization?",
      "How can I contact you?",
      "Tell me about your experience",
    ],
  },
  {
    keywords: ["visa", "authorization", "work authorization", "opt", "stem", "sponsorship"],
    patterns: [/visa/i, /work.*authorization/i, /opt/i, /stem/i, /sponsor/i],
    questionType: "what",
    category: "contact",
    answer:
      `📋 Work Authorization\n\n${metadata.workAuthorization}`,
    suggestions: [
      "Are you open to work?",
      "Where are you located?",
      "How can I contact you?",
    ],
  },
  {
    keywords: ["how long", "years", "experience years", "how many years", "since when"],
    patterns: [/how.*long/i, /how.*many.*years/i, /years.*experience/i, /since.*when/i],
    questionType: "how",
    category: "experience",
    answer:
      `📅 Experience Timeline\n\n` +
      `${experienceTimeline}\n\n` +
      `${personalInfo.name} has ${metadata.totalYearsExperience} of professional experience.`,
    suggestions: [
      "Where have you worked?",
      "What's your current role?",
      "What projects have you built?",
    ],
  },
  {
    keywords: ["strengths", "why hire", "best at", "standout", "unique", "value", "offer"],
    patterns: [/why.*hire/i, /strengths/i, /stand.*out/i, /what.*offer/i],
    questionType: "what",
    category: "general",
    answer:
      `🏆 Strengths\n\n` +
      `• Strong full-stack background across Vue.js, Python, GraphQL, PostgreSQL, and TypeScript\n` +
      `• Experience building scientific data platforms, research tooling, and enterprise-scale applications\n` +
      `• Skilled in complex data visualizations with Plotly.js — violin plots, radar plots, scatter plots\n` +
      `• Focus on clean architecture, well-tested code, and long-term maintainability`,
    suggestions: [
      "Tell me about your current role",
      "What projects have you built?",
      "What's your tech stack?",
    ],
  },
];
