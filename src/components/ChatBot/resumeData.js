/**
 * Resume Q&A data — structured third-person format
 * Style: emoji section headers · neutral labels · bullet lists · no first-person "I/my/me"
 */

export const resumeQA = [
  // ─── GREETING ────────────────────────────────────────────────────────────
  {
    keywords: ["hello", "hi", "hey", "greetings", "sup", "howdy"],
    patterns: [/^(hi|hello|hey|greetings|sup|howdy)/i],
    questionType: "greeting",
    category: "general",
    answer:
      "👋 Hey! This is Harish's portfolio assistant.\n\nHarish Yerraguntla — Senior UI / Frontend Engineer\nReact.js · Angular · Vue.js · TypeScript · Next.js\n\nWhat would you like to know?",
    suggestions: [
      "Tell me about Harish",
      "What's the tech stack?",
      "What are the main skills?",
    ],
  },

  // ─── WHO ARE YOU / INTRO ─────────────────────────────────────────────────
  {
    keywords: ["who", "about", "yourself", "intro", "introduction", "tell me about you", "overview"],
    patterns: [/who.*are.*you/i, /tell.*about.*yourself/i, /introduce/i, /overview/i, /summary/i],
    questionType: "who",
    category: "general",
    answer:
      "👨‍💻 Harish Yerraguntla — Senior UI / Frontend Engineer\n\n10+ years building enterprise web and mobile applications across Banking, Healthcare, Airlines, and Financial Services.\n\n🎓 MS Computer Science — SUNY New Paltz\n💼 Senior Frontend Developer @ Thomson Reuters\n🏭 Industries: Banking · Healthcare · Airlines · Mortgage · Financial Services\n📍 New York, USA — open to remote & hybrid\n\n⚡ Known for: Enterprise SPAs with React.js/Angular, WCAG 2.0/2.1 accessibility compliance, HIPAA-compliant healthcare dashboards, and AWS/Jenkins CI/CD deployments.",
    suggestions: [
      "What's the tech stack?",
      "Where has Harish worked?",
      "What projects has he built?",
    ],
  },

  // ─── CURRENT ROLE ────────────────────────────────────────────────────────
  {
    keywords: ["current", "now", "currently", "working", "job", "role", "position", "doing", "employed"],
    patterns: [/what.*doing/i, /current.*role/i, /where.*work/i, /working.*now/i, /current.*job/i],
    questionType: "what",
    category: "experience",
    answer:
      "💼 Current Role\nSenior Frontend Developer @ Thomson Reuters\nEagan, MN · May 2024 – Present\n\nKey work:\n• Responsive web apps with React.js, Next.js SSR, Tailwind CSS, and Bootstrap\n• Vue.js + TypeScript + Vuex/Vue Router enterprise components with Storybook\n• React Native and Xamarin cross-platform mobile applications\n• WCAG accessibility remediation — Lighthouse, axe-core, screen reader support\n• Redux middleware, GraphQL, WebSockets for real-time state sync\n• AWS cloud infrastructure with Jenkins CI/CD pipelines\n• ASP.NET Core services following SOA principles\n• Unit testing with Jest, Enzyme, and Jasmine",
    suggestions: [
      "What does the day-to-day look like?",
      "What's the tech stack?",
      "Tell me about other companies",
    ],
  },

  // ─── DAILY WORK ──────────────────────────────────────────────────────────
  {
    keywords: ["daily", "day to day", "typical day", "responsibilities", "work on", "what do you do"],
    patterns: [/what.*do.*daily/i, /day.*to.*day/i, /typical.*day/i, /responsibilities/i],
    questionType: "what",
    category: "experience",
    answer:
      "📋 Day-to-Day at Thomson Reuters\n\n• Building React.js / Next.js SSR features and Vue.js + TypeScript components with Storybook\n• Integrating RESTful and SOAP web services; consuming GraphQL APIs and WebSockets for real-time data\n• Implementing Redux middleware, action creators, reducers, and store state management\n• Writing unit tests with Jest, Enzyme, and Jasmine; generating coverage reports with Istanbul\n• Leading WCAG accessibility compliance using ESLint, Lighthouse, and SCSS variable theming\n• Deploying microservices on AWS cloud via Jenkins CI/CD pipelines\n• Collaborating with QA teams, Scrum Masters, and Business Analysts in Agile sprints",
    suggestions: [
      "What technologies are used?",
      "Tell me about the accessibility work",
      "Tell me about the React/Next.js work",
    ],
  },

  // ─── REACT / NEXT.JS (PRIMARY) ────────────────────────────────────────────
  {
    keywords: ["react", "reactjs", "next", "nextjs", "redux", "tailwind", "storybook"],
    patterns: [/react/i, /next\.js/i, /redux/i, /tailwind/i, /storybook/i],
    questionType: "what",
    category: "skills",
    answer:
      "⚛️ React & Next.js — Core Stack\n\nThomson Reuters (2024–Present):\n• React.js SPAs with Tailwind CSS, Bootstrap, and Redux middleware\n• Next.js SSR for improved SEO and page load performance\n• React Native + Xamarin cross-platform mobile apps\n• Storybook component-driven development with Atomic Design\n\nDTCC (2021–2024):\n• React SPAs with microservice architecture — Redux, React Router, Hooks, HOCs, Render Props\n• Advanced patterns: Portals, Fragments, Custom Hooks\n• Optimized React Lifecycle Methods and Functional Components\n• React Testing Library + Jest for 90%+ test coverage\n\nUniversal Health Services (2020–2021):\n• React.js + TypeScript HIPAA-compliant patient dashboards\n• OAuth 2.0, OpenID Connect, Okta secure authentication\n• FHIR-based APIs in Next.js with JWT and GraphQL\n\n⚙️ State: Redux · Redux Toolkit · Flux · Context API",
    suggestions: [
      "What's the Angular experience?",
      "Tell me about the DTCC work",
      "What projects were built with React?",
    ],
  },

  // ─── ANGULAR / ANGULARJS ──────────────────────────────────────────────────
  {
    keywords: ["angular", "angularjs", "rxjs", "angular material"],
    patterns: [/angular/i, /rxjs/i, /angular.*material/i],
    questionType: "what",
    category: "skills",
    answer:
      "🔺 Angular & AngularJS Experience\n\nDTCC (2021–2024):\n• Angular + Bootstrap integrations with dynamic responsive web applications\n• Collaborated with Vue.js for hybrid frontend architectures\n\nUniversal Health Services (2020–2021):\n• Angular/AngularJS SPAs for patient records, user requests, and security settings\n• Angular .NET Core microservices — RESTful APIs, CRUD operations, HIPAA compliance\n• Custom Angular directives: browser controls, multifield forms, file uploads\n• Angular-Bootstrap components: grids, toolbars, panels, combo-boxes, and filters\n• Angular CLI and NPM for application scaffolding\n\nHawaiian Airlines (2017–2019):\n• Angular front-end with RxJS Observables and Angular HTTP for REST API integration\n• Led full-stack development: Angular + Ruby on Rails/Node.js backend\n• Angular routing, Two-Way Data Binding, RESTful services\n\nMizuho Americas (2015–2016):\n• Multiple Angular SPAs for users, sponsors, reviewers, publishers\n• Angular Material, TypeScript, ES6 — single-page financial applications\n• Client-side validation using CSS and Angular Form Validation",
    suggestions: [
      "What's the Vue.js experience?",
      "Tell me about the Hawaiian Airlines work",
      "What's the full tech stack?",
    ],
  },

  // ─── VUE.JS ──────────────────────────────────────────────────────────────
  {
    keywords: ["vue", "vuejs", "vue.js", "vuex", "vue router"],
    patterns: [/vue/i, /vuex/i, /vue.*router/i],
    questionType: "what",
    category: "skills",
    answer:
      "🟢 Vue.js Experience\n\nThomson Reuters (2024–Present):\n• Vue.js + TypeScript + VuePress enterprise applications\n• Vuex and Vue Router for state management and navigation\n• Component communication through events and parent-child hierarchies\n• Modular clinical UI components with Tailwind CSS and Storybook\n\nDTCC (2021–2024):\n• Vue.js integrated with dynamic responsive web applications alongside Angular+Bootstrap\n\nUniversal Health Services (2020–2021):\n• Vue 2 data visualization using vue-chart-js for analytical dashboards\n• Front-end architecture with Vue.js for business insights reporting",
    suggestions: [
      "What's the React/Next.js experience?",
      "Tell me about state management",
      "What's the full tech stack?",
    ],
  },

  // ─── FULL TECH STACK ─────────────────────────────────────────────────────
  {
    keywords: ["skills", "technologies", "tech stack", "tools", "know", "expertise", "proficient", "stack", "languages"],
    patterns: [/what.*skills/i, /tech.*stack/i, /technologies/i, /good.*at/i, /what.*know/i],
    questionType: "what",
    category: "skills",
    answer:
      "🛠 Tech Stack\n\n🎨 Frontend:\n• React.js · Next.js (SSR/SSG) · Angular · AngularJS · Vue.js · React Native · TypeScript\n• Tailwind CSS · Bootstrap · Material UI · SASS/SCSS · LESS · Flexbox · CSS Grid\n\n⚙️ State Management:\n• Redux · Redux Toolkit · Flux · Vuex · Context API · RxJS\n\n🖥️ Backend:\n• Node.js/Express.js · ASP.NET Core · .NET MVC · Ruby on Rails · SailsJS\n• RESTful APIs · SOAP APIs · GraphQL · WebSockets · FHIR APIs\n\n🔐 Auth & Security:\n• OAuth 2.0 · OpenID Connect · JWT · Okta · Auth0\n• WCAG 2.0/2.1 · ARIA · Lighthouse · Axe-core\n\n🗄️ Databases:\n• SQL Server · MySQL · Oracle · MongoDB · PostgreSQL · NoSQL\n\n☁️ Cloud/DevOps:\n• AWS (EC2, S3, ELB, IAM, CloudWatch) · Docker · Jenkins · Azure DevOps · CI/CD\n\n🧪 Testing:\n• Jest · Jasmine · Karma · Mocha · Enzyme · React Testing Library · Cypress · XUnit · NUnit",
    suggestions: [
      "What's the React/Next.js experience?",
      "Tell me about backend skills",
      "What about accessibility expertise?",
    ],
  },

  // ─── WORK EXPERIENCE OVERVIEW ────────────────────────────────────────────
  {
    keywords: ["experience", "worked", "companies", "jobs", "career", "background", "history", "previous"],
    patterns: [/work.*experience/i, /where.*worked/i, /previous.*jobs/i, /career/i, /companies/i],
    questionType: "what",
    category: "experience",
    answer:
      "📊 Career Overview — 10+ years across 5 companies\n\n1️⃣ Thomson Reuters — Senior Frontend Developer (May 2024 – Present)\n   React.js · Next.js · Vue.js · TypeScript · AWS · Jenkins\n\n2️⃣ DTCC — Senior Frontend Developer (Nov 2021 – Apr 2024)\n   React.js · Redux · OAuth 2.0 · Okta · GraphQL · Azure DevOps\n\n3️⃣ Universal Health Services — Senior Frontend UI Developer (Feb 2020 – Oct 2021)\n   React.js · Angular · .NET Core · D3.js · HIPAA · FHIR APIs\n\n4️⃣ Hawaiian Airlines — UI Developer (Mar 2017 – Nov 2019)\n   Angular · React.js · Ruby on Rails · SailsJS · AWS\n\n5️⃣ Mizuho Americas — UI Developer (Jan 2015 – Dec 2016)\n   Angular · TypeScript · Angular Material · REST APIs",
    suggestions: [
      "Tell me about Thomson Reuters",
      "What was built at DTCC?",
      "What about education?",
    ],
  },

  // ─── THOMSON REUTERS ─────────────────────────────────────────────────────
  {
    keywords: ["thomson reuters", "reuters", "current company", "current employer"],
    patterns: [/thomson.*reuters/i, /reuters/i, /current.*company/i, /current.*employer/i],
    questionType: "tell",
    category: "experience",
    answer:
      "🏢 Thomson Reuters — Senior Frontend Developer\nEagan, MN · May 2024 – Present\n\nKey responsibilities:\n• Responsive web apps using HTML5, CSS3, Tailwind CSS, React.js, and Next.js SSR\n• Vue.js + TypeScript + VuePress with Vuex/Vue Router enterprise components\n• React Native and Xamarin (C#/VB.NET) cross-platform mobile applications\n• Storybook component-driven development following Atomic Design principles\n• Redux middleware — action creators, reducers, store state management\n• WCAG accessibility remediation — ESLint, Lighthouse, SCSS theming, screen readers\n• AWS cloud infrastructure with Jenkins CI/CD pipelines\n• ASP.NET Core SOA services and C# XML web services\n• SOAP and RESTful web services; GraphQL APIs; WebSocket real-time sync\n• Unit testing with Jest, Enzyme, and Jasmine with Istanbul coverage reports",
    suggestions: [
      "What's the tech stack?",
      "Tell me about accessibility work",
      "Tell me about other companies",
    ],
  },

  // ─── DTCC ────────────────────────────────────────────────────────────────
  {
    keywords: ["dtcc", "depository trust", "coppell"],
    patterns: [/dtcc/i, /depository.*trust/i],
    questionType: "tell",
    category: "experience",
    answer:
      "🏢 DTCC — Senior Frontend Developer\nCoppell, Texas · Nov 2021 – Apr 2024\n\nKey responsibilities:\n• Led SDLC in Agile (Scrum, XP, Pair Programming) environments\n• React.js SPAs with microservice architecture using HOCs, Render Props, Custom Hooks, Portals\n• OAuth 2.0/OpenID Connect authentication with Auth0 and Okta — enterprise security\n• Responsive UIs: React · Redux · React Router · Hooks · Context API · Bootstrap · SASS/LESS\n• Mentored junior developers on React best practices, Git workflows, and CI/CD\n• GraphQL with MongoDB; relational databases (MS SQL, Oracle) — stored procedures\n• TypeScript-driven component development; code reviews and performance audits\n• CI/CD: Jenkins · Azure DevOps · Git · Bitbucket · Webpack · Babel\n• Testing: Jest · React Testing Library · Mocha implementing TDD\n• JIRA for sprint coordination, defect tracking, and issue management",
    suggestions: [
      "Tell me about the React expertise",
      "What's the authentication experience?",
      "Tell me about other companies",
    ],
  },

  // ─── UNIVERSAL HEALTH SERVICES ───────────────────────────────────────────
  {
    keywords: ["universal health", "uhs", "healthcare", "hipaa", "fhir", "medical"],
    patterns: [/universal.*health/i, /\buhs\b/i, /hipaa/i, /healthcare.*company/i],
    questionType: "tell",
    category: "experience",
    answer:
      "🏥 Universal Health Services — Senior Frontend UI Developer\nPA, USA · Feb 2020 – Oct 2021\n\nKey responsibilities:\n• HIPAA-compliant patient dashboards with React.js + TypeScript — end-to-end encryption\n• OAuth 2.0/OpenID Connect/Okta authentication; FHIR APIs in Next.js with JWT + GraphQL\n• Angular/AngularJS SPAs for patient records, user requests, and security settings\n• .NET Core microservices and RESTful APIs for hybrid frontend applications\n• D3.js cash flow analysis charts and vue-chart-js analytical dashboards\n• WCAG 2.0 AA compliance: ARIA roles, axe-core, Cypress E2E with QA teams\n• Custom Angular directives: browser controls, multifield forms, file uploads\n• Cross-platform mobile apps using Ionic for iOS and Android\n• Node.js backends with MongoDB via Mongoose; TDD with Jasmine and Karma\n• XUnit, NUnit, and Moq in .NET Core for edge test cases",
    suggestions: [
      "Tell me about the HIPAA compliance work",
      "What's the Angular experience?",
      "Tell me about other companies",
    ],
  },

  // ─── HAWAIIAN AIRLINES ───────────────────────────────────────────────────
  {
    keywords: ["hawaiian airlines", "hawaiian", "airlines", "honolulu"],
    patterns: [/hawaiian.*airlines/i, /hawaiian/i, /\bairlines\b/i],
    questionType: "tell",
    category: "experience",
    answer:
      "✈️ Hawaiian Airlines — UI Developer\nHonolulu, Hawaii · Mar 2017 – Nov 2019\n\nKey responsibilities:\n• Integrated Airline SOAP APIs, Insurance Agent REST APIs, and Payment Gateway services\n• Ruby on Rails Active Record ORM schemas; SailsJS + MongoDB via Waterline ORM for booking state\n• Angular SPAs with RxJS Observables and Angular HTTP for REST API connectivity\n• Full-stack: Angular front-end + Ruby on Rails/Node.js backends following MVC architecture\n• React apps with Redux · Material UI · React-Router and React Hook Form + Flux\n• Isomorphic responsive websites for desktop, tablet, and mobile using React.js\n• AWS infrastructure (EC2, ELB, S3, CloudWatch, Auto Scaling, VPC, IAM)\n• Docker across dev, test, and staging; Jenkins CI/CD with GitHub automation\n• Nginx with Phusion Passenger for reverse proxy and load balancing",
    suggestions: [
      "What's the AWS experience?",
      "Tell me about other companies",
      "What's the full tech stack?",
    ],
  },

  // ─── MIZUHO AMERICAS ─────────────────────────────────────────────────────
  {
    keywords: ["mizuho", "mizuho americas", "financial", "banking company"],
    patterns: [/mizuho/i],
    questionType: "tell",
    category: "experience",
    answer:
      "🏦 Mizuho Americas — UI Developer\nNew York, NY · Jan 2015 – Dec 2016\n\nKey responsibilities:\n• Front-end UIs using HTML5, CSS3, SASS/SCSS, TypeScript, JavaScript, and Angular with Angular Material\n• Single-page web applications with custom and built-in Angular directives\n• Client-side validation with Angular Form Validation; Two-Way Data Binding for real-time data\n• Multiple Angular SPAs for users, sponsors, reviewers, and publishers\n• Angular services communicating with Express.js for CRUD operations\n• HTTP calls from browser to server-side for data retrieval\n• Angular routing and key functionality using TypeScript and ES6\n• Cross-browser compatibility with HTML5, CSS, and jQuery\n• System testing and regression testing after UI fixes",
    suggestions: [
      "Tell me about the career start",
      "What's the Angular expertise overall?",
      "Where else has Harish worked?",
    ],
  },

  // ─── EDUCATION ───────────────────────────────────────────────────────────
  {
    keywords: ["education", "degree", "university", "college", "studied", "school", "masters", "bachelor", "gpa", "graduate"],
    patterns: [/education/i, /degree/i, /university/i, /studied/i, /graduated/i, /masters/i, /bachelor/i, /gpa/i],
    questionType: "what",
    category: "education",
    answer:
      "🎓 Education\n\nMaster of Science — Computer Science\n• State University of New York (SUNY), New Paltz, NY",
    suggestions: [
      "What's the work experience?",
      "Tell me about the skills",
      "Tell me about the projects",
    ],
  },

  // ─── PORTFOLIO PROJECTS OVERVIEW ─────────────────────────────────────────
  {
    keywords: ["projects", "built", "created", "portfolio", "work samples", "made", "developed", "apps", "applications"],
    patterns: [/what.*built/i, /projects/i, /portfolio/i, /work.*samples/i, /what.*apps/i],
    questionType: "what",
    category: "projects",
    answer:
      "🚀 Featured Personal Projects\n\n🔗 Sniplink — Production URL shortener\n• Edge Middleware 301 redirects · zero latency\n• SHA-256 hashed analytics (geo · device · browser)\n• Custom 3-tier rate limiter · NextAuth v5\n• Stack: Next.js 14 · TypeScript · MongoDB · Vercel Edge\n\n📊 CSV Plot Studio — Browser-only data viz tool\n• Papa Parse streaming worker · 10+ chart types\n• Live column-mapping UI · PNG/SVG export\n• Stack: React · Plotly.js · Tailwind CSS · Vite\n\n💼 This Portfolio — React SPA\n• Canvas particle engine · SCSS design system\n• Intersection Observer animations · EmailJS pipeline\n• Stack: React 19 · SCSS · Canvas API · GitHub Pages\n\nProfessional: 10+ years of enterprise apps across Banking, Healthcare, Airlines, and Finance.",
    suggestions: [
      "Tell me about Sniplink",
      "Tell me about CSV Plot Studio",
      "Tell me about the enterprise experience",
    ],
  },

  // ─── SNIPLINK ────────────────────────────────────────────────────────────
  {
    keywords: ["sniplink", "url shortener", "link shortener", "short url", "url"],
    patterns: [/sniplink/i, /url.*short/i, /link.*short/i, /short.*link/i],
    questionType: "tell",
    category: "projects",
    answer:
      "🔗 Sniplink — Production URL Shortener\nLive: sniplink-green.vercel.app\n\nArchitecture highlights:\n• Edge Middleware issues 301 redirects — visitor never hits Node.js · near-instant\n• Click analytics: SHA-256 hashed IPs · ua-parser-js (device/browser/OS) · Vercel geo headers — no raw PII stored\n• Atomic $inc on totalClicks — O(1) reads vs O(n) countDocuments at scale\n• Custom 3-tier rate limiter — 429 + Retry-After + X-RateLimit headers\n• Auth: NextAuth v5 · bcrypt password hashing\n• Custom aliases with nanoid-generated short codes\n\nStack: Next.js 14 · TypeScript · MongoDB · NextAuth v5 · Vercel Edge",
    suggestions: [
      "Tell me about CSV Plot Studio",
      "What other projects exist?",
      "What's the full-stack expertise?",
    ],
  },

  // ─── CSV PLOT STUDIO ─────────────────────────────────────────────────────
  {
    keywords: ["csv", "plot studio", "csv plot", "chart tool", "visualization tool", "data tool"],
    patterns: [/csv.*plot/i, /plot.*studio/i, /csv.*tool/i],
    questionType: "tell",
    category: "projects",
    answer:
      "📊 CSV Plot Studio — Browser-Only Data Visualization\nLive: csv-plot-studio.vercel.app\n\nKey technical choices:\n• Papa Parse streaming worker — large CSVs parsed off main thread · UI stays responsive at any file size\n• 10+ chart types: line · bar · scatter · pie · histogram · heatmap · bubble — all live-update on column change\n• Dynamic column-mapping UI with instant chart preview — zero page reloads\n• One-click PNG/SVG export via Plotly's Kaleido utilities with configurable resolution\n• Zero backend = zero hosting cost · full privacy · works offline\n\nStack: React.js · Plotly.js · Papa Parse · Tailwind CSS · Vite · Vercel",
    suggestions: [
      "Tell me about Sniplink",
      "What data visualization skills exist?",
      "What other projects were built?",
    ],
  },

  // ─── ACCESSIBILITY ────────────────────────────────────────────────────────
  {
    keywords: ["accessibility", "wcag", "aria", "a11y", "screen reader", "axe", "lighthouse"],
    patterns: [/accessibility/i, /wcag/i, /aria/i, /a11y/i, /screen.*reader/i, /axe.*core/i],
    questionType: "what",
    category: "skills",
    answer:
      "♿ Accessibility — WCAG 2.0/2.1 AA Expertise\n\nThomson Reuters (2024–Present):\n• Led WCAG accessibility remediation for hospital systems\n• Tools: ESLint · Lighthouse · SCSS variable theming · keyboard navigation · screen reader compatibility\n• Color-contrast compliance across enterprise UI components\n\nUniversal Health Services (2020–2021):\n• WCAG 2.0 AA compliance through semantic HTML5, ARIA roles, and axe-core automated testing\n• Coordinated Cypress E2E accessibility validation with QA teams\n\nDTCC (2021–2024):\n• Accessible interfaces with keyboard navigation and screen reader support\n• JIRA tracking for accessibility issue remediation\n\nTools used: axe-core · ARIA attributes · Lighthouse audits · ESLint accessibility plugins · color-contrast checkers",
    suggestions: [
      "Tell me about the healthcare work",
      "What's the testing approach?",
      "What's the full tech stack?",
    ],
  },

  // ─── PERFORMANCE OPTIMIZATION ────────────────────────────────────────────
  {
    keywords: ["performance", "optimization", "optimize", "fast", "speed", "improved", "lighthouse", "core web vitals", "lcp"],
    patterns: [/performance/i, /optimiz/i, /faster/i, /speed/i, /improve/i, /lighthouse/i, /web.*vital/i],
    questionType: "how",
    category: "skills",
    answer:
      "⚡ Performance Optimization\n\n🖼️ Asset & Bundle:\n• Sprite images, asset bundling, and code splitting to reduce page size and improve load times\n• Webpack and Babel for bundle optimization across enterprise applications\n• HTML5 Local Storage and Session Storage for client-side data persistence\n\n🔗 API:\n• Collaborated with backend teams to optimize and deprecate inefficient API calls\n• RESTful API call optimization using Axios and efficient HTTP methods\n\n🎨 CSS/UI:\n• Reusable SCSS/CSS templates for consistent layouts — no specificity conflicts\n• SEO-optimized interfaces using Bootstrap, Tailwind CSS, and modern layout techniques\n• Applied sprite images and advanced UI optimization techniques\n\n📱 Responsive:\n• Mobile-first design with Tailwind CSS utility classes for desktop, tablet, and mobile\n• Flexbox and CSS Grid for efficient, responsive layouts\n\n🔍 Tools: Firebug · IE Developer Tools · Chrome DevTools · Lighthouse profiling",
    suggestions: [
      "Tell me about the SEO work",
      "What tools were used?",
      "Tell me about Next.js SSR work",
    ],
  },

  // ─── DATA VISUALIZATION ──────────────────────────────────────────────────
  {
    keywords: ["visualization", "charts", "graphs", "d3", "dashboard", "data viz", "chart.js"],
    patterns: [/visualization/i, /charts/i, /d3/i, /dashboard/i, /data.*viz/i],
    questionType: "what",
    category: "skills",
    answer:
      "📊 Data Visualization Toolkit\n\n• D3.js — company-specific reporting tools and cash flow analysis charts at Universal Health Services\n• vue-chart-js — analytical dashboards for business insights (UHS)\n• Chart.js — lightweight chart implementations across projects\n• Flickity.js — enterprise UX carousels and interactive UI components (Thomson Reuters)\n• Storybook — component-driven development and documented UI libraries\n\nCSV Plot Studio (Personal Project):\n• Plotly.js — 10+ chart types, live-updated, browser-only visualization tool\n• Papa Parse streaming worker for large CSV parsing off the main thread",
    suggestions: [
      "Tell me about the UHS healthcare work",
      "Tell me about the personal projects",
      "What's the tech stack?",
    ],
  },

  // ─── BACKEND SKILLS ──────────────────────────────────────────────────────
  {
    keywords: ["backend", "api", "server", "node", "rails", "ruby", "graphql", "rest", "soap", "dotnet"],
    patterns: [/backend/i, /server.*side/i, /node/i, /ruby.*rails/i, /graphql/i, /rest.*api/i, /soap/i, /\.net/i],
    questionType: "what",
    category: "skills",
    answer:
      "🖥️ Backend Skills\n\n🟢 Node.js + Express.js:\n• RESTful routing for form submissions and data persistence (UHS)\n• WebSocket streaming and real-time integrations\n\n💎 Ruby on Rails:\n• Database schemas with Active Record ORM at Hawaiian Airlines\n• Full MVC web applications with airline booking state management\n\n🔷 .NET / ASP.NET Core:\n• .NET Core microservices and RESTful APIs (UHS · Thomson Reuters)\n• Service-Oriented Architecture (SOA) with C# XML web services\n• Entity Framework and complex stored procedures for SQL Server CRUD\n• XUnit and NUnit testing frameworks\n\n🔗 APIs:\n• RESTful (GET, POST, PUT, DELETE) and SOAP web services with XML/XSLT\n• GraphQL schema, queries, and mutations with MongoDB\n• FHIR APIs for healthcare patient record management\n\n⚓ SailsJS:\n• Waterline ORM integration with MongoDB for airline booking systems",
    suggestions: [
      "What about frontend?",
      "Tell me about databases",
      "What projects were built?",
    ],
  },

  // ─── STATE MANAGEMENT ────────────────────────────────────────────────────
  {
    keywords: ["state management", "vuex", "pinia", "redux", "context", "store", "global state", "flux"],
    patterns: [/state.*management/i, /vuex/i, /redux/i, /global.*state/i, /flux/i],
    questionType: "what",
    category: "skills",
    answer:
      "⚙️ State Management\n\nReact (primary):\n• Redux — middleware, action creators, reducers, and store management (Thomson Reuters · DTCC)\n• Redux Toolkit — normalized state with createSlice and RTK Query\n• React Flux — unidirectional data flow with single-directional architecture\n• Context API — lightweight local state for smaller apps\n\nVue.js:\n• Vuex — modular store with actions/mutations/getters (Thomson Reuters)\n• Vue Router — SPA navigation and routing\n\nAngular:\n• RxJS Observables for reactive data streams and HTTP integration (Hawaiian Airlines)\n• Two-Way Data Binding for real-time dynamic data displays (Mizuho Americas)\n\nRule: Redux for large React apps · Vuex for Vue.js · RxJS for Angular reactive patterns.",
    suggestions: [
      "What's the React/Next.js experience?",
      "Tell me about Angular skills",
      "What's the tech stack?",
    ],
  },

  // ─── TYPESCRIPT ──────────────────────────────────────────────────────────
  {
    keywords: ["typescript", "ts", "type safety", "types", "typed"],
    patterns: [/typescript/i, /type.*safe/i, /\bts\b/i],
    questionType: "what",
    category: "skills",
    answer:
      "🔷 TypeScript\n\nTypeScript is used across all modern projects:\n\n• Thomson Reuters — Vue.js + TypeScript + VuePress enterprise components with Vuex\n• DTCC — TypeScript-driven component development with strict typing across SPAs\n• Universal Health Services — React.js + TypeScript for HIPAA-compliant patient dashboards\n• Mizuho Americas — Angular + TypeScript + Angular Material financial SPAs\n• Hawaiian Airlines — Angular + TypeScript + ES6 for SPA routing and features\n\nSniplink (Personal): Next.js 14 end-to-end typed API routes + MongoDB schemas\n\nCapabilities: generics · strict mode · discriminated unions · TypeScript-first Angular and Vue.js development",
    suggestions: [
      "Tell me about the Vue.js work",
      "What's the React experience?",
      "What projects were built?",
    ],
  },

  // ─── TESTING ─────────────────────────────────────────────────────────────
  {
    keywords: ["testing", "test", "quality", "jest", "cypress", "jasmine", "coverage", "tdd", "e2e", "karma"],
    patterns: [/testing/i, /test.*coverage/i, /quality/i, /jest/i, /cypress/i, /tdd/i, /e2e/i, /jasmine/i],
    questionType: "what",
    category: "skills",
    answer:
      "🧪 Testing Strategy\n\n• Unit: Jest (React/Node.js) · Jasmine · Karma (Angular) · Mocha · Enzyme\n• Integration: React Testing Library — behavior-focused testing\n• E2E: Cypress — full user-flow coverage and accessibility validation\n• .NET: XUnit · NUnit · Moq for edge test cases in .NET Core applications\n• Coverage: Istanbul for coverage reports across JavaScript projects\n• TDD: Applied Test-Driven Development throughout SDLC at all companies\n\nDTCC: Jest · React Testing Library · Mocha — TDD implementation across SPAs\nThomson Reuters: Jest · Enzyme · Jasmine with Istanbul coverage reports\nUniversal Health Services: Jasmine · Karma (Angular) · Cypress E2E · XUnit/NUnit (.NET)\n\nPhilosophy: TDD for reliability, comprehensive test coverage, quality gates in CI/CD pipelines.",
    suggestions: [
      "What's the CI/CD experience?",
      "Tell me about dev practices",
      "What tools are used?",
    ],
  },

  // ─── CLOUD / DEVOPS ──────────────────────────────────────────────────────
  {
    keywords: ["cloud", "aws", "docker", "devops", "ci cd", "deployment", "jenkins", "azure devops"],
    patterns: [/cloud/i, /aws/i, /docker/i, /devops/i, /ci.*cd/i, /deploy/i, /jenkins/i, /azure.*devops/i],
    questionType: "what",
    category: "skills",
    answer:
      "☁️ Cloud & DevOps\n\nAWS (Thomson Reuters · Hawaiian Airlines):\n• EC2 · ELB · S3 · IAM · CloudWatch · Auto Scaling · VPC · CloudFormation\n• MySQL databases on EC2 with replication, query optimization, backup/restore\n• AWS Identity services for React Native authentication\n\nJenkins CI/CD (Thomson Reuters · Hawaiian Airlines):\n• CI/CD pipelines for microservices deployment\n• GitHub + Jenkins automation with Chef infrastructure-as-code\n\nAzure DevOps (DTCC):\n• Front-end CI/CD pipelines for React applications\n• Source control and release management\n\nDocker (Hawaiian Airlines):\n• Containerized across development, testing, and staging environments\n• Nginx with Phusion Passenger for reverse proxy and load balancing\n\nVersion Control: Git · GitHub · Bitbucket · SVN · CVS · Mercurial",
    suggestions: [
      "Tell me about the testing setup",
      "What's the tech stack?",
      "Tell me about the projects",
    ],
  },

  // ─── AUTHENTICATION / SECURITY ────────────────────────────────────────────
  {
    keywords: ["oauth", "authentication", "security", "okta", "auth0", "jwt", "openid", "login", "hipaa"],
    patterns: [/oauth/i, /authentication/i, /security/i, /okta/i, /auth0/i, /jwt/i, /openid/i, /hipaa/i],
    questionType: "what",
    category: "skills",
    answer:
      "🔐 Authentication & Security\n\n• OAuth 2.0 + OpenID Connect — enterprise security across DTCC and UHS\n• Okta — user access control and identity management\n• Auth0 — authentication and authorization for React SPAs at DTCC\n• JWT — token-based authentication for FHIR APIs and Next.js services (UHS)\n• HIPAA compliance — end-to-end encryption, data minimization, secure data flows (UHS)\n• FHIR APIs — healthcare record management with strict access controls (UHS)\n• HTTPS/HTTP secure communication with Angular components and RESTful services\n• SQL injection prevention and secure data handling with SQL Server integration",
    suggestions: [
      "Tell me about the UHS healthcare work",
      "What's the DTCC work?",
      "What's the full tech stack?",
    ],
  },

  // ─── CONTACT ─────────────────────────────────────────────────────────────
  {
    keywords: ["contact", "email", "phone", "reach", "connect", "linkedin", "github", "hire", "message"],
    patterns: [/contact/i, /email/i, /reach.*you/i, /connect/i, /linkedin/i, /github/i, /hire/i],
    questionType: "how",
    category: "contact",
    answer:
      "📬 Contact Harish\n\n📧 Email: Yerraguntlaharish27@gmail.com\n📱 Phone: +1 (205) 736-5808\n💼 LinkedIn: linkedin.com/in/harish-70695416b\n🐙 GitHub: github.com/nandu064\n\nOpen to: Senior UI Developer · Senior Frontend Developer · React / Next.js · Angular · Full-Stack Engineer roles.\nResponse time: usually within 24 hours.",
    suggestions: [
      "Is Harish open to work?",
      "Where is Harish located?",
      "What roles is he looking for?",
    ],
  },

  // ─── LOCATION ────────────────────────────────────────────────────────────
  {
    keywords: ["location", "where", "based", "live", "city", "remote", "new york", "relocate"],
    patterns: [/where.*located/i, /where.*based/i, /where.*live/i, /location/i, /relocat/i],
    questionType: "where",
    category: "contact",
    answer:
      "📍 Location\n\nNew York, USA — currently working at Thomson Reuters (Eagan, MN).\n\n• Open to: remote · hybrid · on-site anywhere in the US\n• Relocation: open for the right opportunity\n• 10+ years of professional experience across multiple US locations",
    suggestions: [
      "What roles is Harish looking for?",
      "How to get in contact?",
      "What's the work experience?",
    ],
  },

  // ─── OPEN TO WORK / AVAILABILITY ─────────────────────────────────────────
  {
    keywords: ["available", "open to work", "hiring", "open", "looking", "job search", "opportunities", "roles"],
    patterns: [/open.*to.*work/i, /available.*for/i, /looking.*for.*job/i, /hiring/i, /opportunity/i],
    questionType: "what",
    category: "contact",
    answer:
      "🟢 Open to New Opportunities\n\n🎯 Target roles:\n• Senior UI Developer\n• Senior Frontend Developer\n• React / Next.js Developer\n• Full-Stack Engineer\n\n⚡ What Harish brings:\n• 10+ years enterprise frontend — React.js, Angular, Vue.js, Next.js, TypeScript\n• Domain expertise: Banking · Healthcare · Airlines · Financial Services · Mortgage\n• WCAG 2.0/2.1 AA accessibility — certified enterprise-level compliance\n• HIPAA-compliant healthcare application development\n• AWS/Jenkins/Azure DevOps cloud and CI/CD experience\n• Mentoring, code reviews, and technical leadership\n\nReach out: Yerraguntlaharish27@gmail.com",
    suggestions: [
      "How to get in contact?",
      "What's the tech stack?",
      "Tell me about the experience",
    ],
  },

  // ─── YEARS OF EXPERIENCE ─────────────────────────────────────────────────
  {
    keywords: ["how long", "years", "experience years", "how many years", "since when"],
    patterns: [/how.*long/i, /how.*many.*years/i, /years.*experience/i, /since.*when/i],
    questionType: "how",
    category: "experience",
    answer:
      "📅 Experience Timeline — 10+ years\n\n• 2015–2016 — Mizuho Americas, NY (Angular SPAs — Financial Services)\n• 2017–2019 — Hawaiian Airlines, HI (Angular · React · Ruby on Rails · AWS)\n• 2020–2021 — Universal Health Services, PA (React · Angular · .NET Core · HIPAA)\n• 2021–2024 — DTCC, TX (React · Redux · OAuth 2.0 · Azure DevOps)\n• 2024–Now — Thomson Reuters, MN (React · Next.js · Vue.js · AWS · Jenkins)\n\n10+ years of professional enterprise experience across 5 companies and 5 industries.",
    suggestions: [
      "Where has Harish worked?",
      "What's the expertise?",
      "Tell me about the projects",
    ],
  },

  // ─── STRENGTHS / WHY HIRE ─────────────────────────────────────────────────
  {
    keywords: ["strengths", "why hire", "why you", "best at", "good at", "standout", "unique", "value", "offer"],
    patterns: [/why.*hire/i, /why.*you/i, /what.*strengths/i, /what.*offer/i, /stand.*out/i],
    questionType: "what",
    category: "general",
    answer:
      "🏆 What Sets Harish Apart\n\n🏭 Domain depth:\n• 10+ years across Banking, Healthcare, Airlines, Financial Services, and Mortgage\n• HIPAA compliance expertise and enterprise security implementation\n\n🔺 Multi-framework mastery:\n• React/Next.js · Angular/AngularJS · Vue.js — can contribute to any modern enterprise codebase\n• TypeScript-first development across all frameworks\n\n♿ Accessibility leadership:\n• WCAG 2.0/2.1 AA compliance from scratch — most engineers avoid it, Harish leads it\n• axe-core · Lighthouse · ARIA · screen reader support at scale\n\n☁️ Full-stack + cloud:\n• Angular · React Native · .NET Core · Ruby on Rails · AWS · Jenkins\n• True full-stack delivery from UI design to cloud deployment\n\n🧑‍🏫 Leadership:\n• Mentored junior developers at DTCC and Thomson Reuters\n• Code reviews, performance audits, and technical standards enforcement",
    suggestions: [
      "Tell me about the projects",
      "What's the tech stack?",
      "How to get in contact?",
    ],
  },

  // ─── SOFT SKILLS / WORKING STYLE ─────────────────────────────────────────
  {
    keywords: ["soft skills", "team", "collaboration", "communication", "work style", "leadership", "agile", "scrum", "mentor"],
    patterns: [/soft.*skills/i, /team.*work/i, /collaborat/i, /work.*style/i, /agile/i, /scrum/i, /mentor/i],
    questionType: "what",
    category: "general",
    answer:
      "🤝 Soft Skills & Work Style\n\n👥 Collaboration:\n• Cross-functional teams (design, product, engineering, QA, Business Analysts) at every company\n• Actively collaborated with QA teams, Scrum Masters, and BAs for production-ready UI delivery\n\n📋 Agile/Scrum:\n• Agile (Scrum, XP, Pair Programming), Waterfall at DTCC and Thomson Reuters\n• JIRA for sprint coordination, defect tracking, and team activity management\n\n🧑‍🏫 Mentoring:\n• Mentored junior developers at DTCC on React best practices, Git workflows, debugging\n• Led UI development for React Native mobile apps mentoring junior developers at Thomson Reuters\n\n📚 Continuous learning:\n• Master's degree completed while accumulating professional enterprise experience\n\n🗣️ Communication:\n• Translates complex business requirements and wireframes into production-ready applications\n• Clear PR descriptions and technical documentation aligned with team standards",
    suggestions: [
      "What's the work experience?",
      "Tell me about the projects",
      "How to get in contact?",
    ],
  },
];
