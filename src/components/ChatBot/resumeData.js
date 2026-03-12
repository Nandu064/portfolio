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
      "👋 Hey! This is Harish's portfolio assistant.\n\nHarish Yerraguntla — Full-Stack Engineer\nReact · Next.js · Vue.js · Tailwind CSS · Storybook\n\nWhat would you like to know?",
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
      "👨‍💻 Harish Yerraguntla — Full-Stack Engineer\n\n5+ years building production React, Next.js & Vue.js applications.\n\n🎓 MS Computer Science — SUNY New Paltz (GPA 3.81)\n💼 Software Developer @ Progress Solutions Inc.\n🚀 Apps serving 100K+ daily users · 99.8% uptime\n📍 New York, USA — open to remote & hybrid\n\n⚡ Known for: Next.js SSR migrations (LCP 4.1s → 1.6s), Canvas API rendering optimizations (83% faster), and Tailwind CSS + Storybook component libraries used across multiple teams.",
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
      "💼 Current Role\nSoftware Developer @ Progress Solutions Inc.\nRemote · Texas · Promoted July 2025\n\nKey work:\n• Next.js SSR migration — LCP improved 4.1s → 1.6s (61%)\n• Vue.js 3 + TypeScript dashboards serving 50,000+ daily users\n• Reusable Storybook component library — 40% dev time reduction\n• Kafka processing 1.6M+ IoT events/day · sub-second latency\n• MongoDB optimization: 800ms → 200ms (75% improvement)\n• Bundle: 2.8MB → 1.5MB (46% reduction via code splitting)\n• Redis caching — 45% fewer API calls\n• 90%+ test coverage · Jest + Cypress + GitHub Actions CI/CD",
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
      "📋 Day-to-Day at Progress Solutions\n\n• Building React/Next.js SSR features and Vue.js 3 dashboards with Plotly.js (1M+ data points)\n• Consuming Kafka streams via Socket.io for live sub-second data updates\n• Shipping Tailwind CSS + Storybook components shared across teams\n• Writing Node.js / FastAPI endpoints with proper validation and Swagger docs\n• Running Jest unit tests + Cypress E2E targeting 90%+ coverage\n• Profiling with Chrome DevTools and Lighthouse — Core Web Vitals (LCP <2.5s, INP <200ms)",
    suggestions: [
      "What technologies are used?",
      "How was performance optimized?",
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
      "⚛️ React & Next.js — Primary Stack\n\nNext.js (SSR/SSG/ISR):\n• Progress Solutions — migrated legacy pages to Next.js SSR · LCP 4.1s → 1.6s\n• Harns — Next.js ISR e-commerce product pages · LCP 2.1s\n\nReact SPAs:\n• QS Quacquarelli Symonds — 8 React + TypeScript SPAs · 15M+ annual visitors · load time 8s → 2.5s\n• SUNY — React + TypeScript component library · Apollo Client · GraphQL\n\n🎨 Tailwind CSS:\n• Used across all recent projects for rapid, consistent styling\n• Paired with Storybook for documented component libraries used across teams\n\n📚 Storybook:\n• Documented 50+ React components at Harns Technologies\n• SUNY component library — Storybook docs reused across 4 platforms\n\n⚙️ State:\n• Redux Toolkit · React Query · Apollo Client · React Context\n• React Testing Library + Jest + Cypress for quality",
    suggestions: [
      "What's the Vue.js experience?",
      "Tell me about performance optimization",
      "What projects were built with React?",
    ],
  },

  // ─── VUE.JS (SECONDARY) ──────────────────────────────────────────────────
  {
    keywords: ["vue", "vuejs", "vue.js", "vue 3", "vuex", "pinia", "composition api", "nuxt", "nuxtjs"],
    patterns: [/vue/i, /vuex/i, /pinia/i, /composition.*api/i, /nuxt/i],
    questionType: "what",
    category: "skills",
    answer:
      "🟢 Vue.js — Strong Secondary Specialization\n\nHarish has deep Vue.js 3 expertise alongside React:\n\n🔧 Core:\n• Vue 3 Composition API + <script setup lang=\"ts\">\n• Vuex (modular store) · Pinia · Vue Router · Nuxt.js\n• Migrated legacy Options API codebases to Composition API + TypeScript — 25% bundle reduction\n\n📊 Production:\n• Vue.js 3 dashboards @ Progress Solutions — 50K+ daily users · 1M+ Plotly.js data points\n• Nuxt.js SSR — boosted SEO 40%, improved initial render performance\n• Reusable Vue 3 + Storybook component library — 40% dev time reduction\n\n🧪 Testing:\n• Vitest + Vue Test Utils — 90%+ coverage\n• Paired with GitHub Actions CI/CD on every PR",
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
      "🛠 Tech Stack\n\n🎨 Frontend (Primary):\n• React.js · Next.js (SSR/SSG/ISR) · TypeScript · Tailwind CSS · Storybook\n\n🎨 Frontend (Secondary):\n• Vue.js 3 · Nuxt.js · Composition API · Vuex · Pinia\n\n⚙️ State Management:\n• Redux Toolkit · React Query · Apollo Client · Vuex · Pinia\n\n🖥️ Backend:\n• Node.js/Express.js · Python (FastAPI · Django · Flask) · GraphQL\n\n📊 Data Viz:\n• Plotly.js · D3.js · Chart.js · Canvas API · SVG · Real-time dashboards\n\n🌊 Real-time:\n• Apache Kafka · WebSockets · Socket.io\n\n🗄️ Databases:\n• MongoDB · PostgreSQL · Redis · MySQL\n\n☁️ Cloud/DevOps:\n• AWS (EC2, Lambda, S3, RDS) · GCP · Docker · Kubernetes · GitHub Actions CI/CD\n\n🧪 Testing:\n• Jest · Vitest · Cypress · React Testing Library · Vue Test Utils · Playwright",
    suggestions: [
      "What's the React/Next.js experience?",
      "Tell me about backend skills",
      "What about data visualization?",
    ],
  },

  // ─── WORK EXPERIENCE OVERVIEW ────────────────────────────────────────────
  {
    keywords: ["experience", "worked", "companies", "jobs", "career", "background", "history", "previous"],
    patterns: [/work.*experience/i, /where.*worked/i, /previous.*jobs/i, /career/i, /companies/i],
    questionType: "what",
    category: "experience",
    answer:
      "📊 Career Overview — 5+ years across 4 companies\n\n1️⃣ Progress Solutions Inc. — Software Developer (Jan 2025 – Present)\n   React/Next.js · Vue.js 3 · Tailwind CSS · Storybook · Node.js · Kafka\n\n2️⃣ SUNY New Paltz — Graduate Research Assistant (2024)\n   React · TypeScript · Storybook · FastAPI · PostgreSQL · GCP\n\n3️⃣ Harns Technologies — Full-Stack Developer (Oct 2021 – Jul 2023)\n   Next.js · React · Vue.js · Storybook · Canvas API · Node.js\n\n4️⃣ QS Quacquarelli Symonds — Full-Stack Developer (Dec 2020 – Jul 2021)\n   React · TypeScript · Redux Toolkit · Storybook · Node.js",
    suggestions: [
      "Tell me about Progress Solutions",
      "What was built at Harns?",
      "What about education?",
    ],
  },

  // ─── PROGRESS SOLUTIONS ──────────────────────────────────────────────────
  {
    keywords: ["progress solutions", "progress", "current company", "current employer"],
    patterns: [/progress.*solutions/i, /current.*company/i, /current.*employer/i],
    questionType: "tell",
    category: "experience",
    answer:
      "🏢 Progress Solutions Inc. — Software Developer\nRemote · Texas · Jan 2025 – Present (Promoted Jul 2025)\n\nKey achievements:\n• Next.js SSR migration — LCP improved 4.1s → 1.6s (61% improvement)\n• SVG → Canvas API rendering — 2–3s → 500ms (83% faster)\n• Vue.js 3 + TypeScript + Storybook component library — 40% dev time reduction\n• Kafka consumer: 1.6M+ IoT events/day · sub-second latency\n• MongoDB query optimization: 800ms → 200ms (75% improvement)\n• Redis caching: 45% fewer redundant API calls\n• Bundle: 2.8MB → 1.5MB (46% reduction)\n• 90%+ test coverage — Jest · Cypress · GitHub Actions CI/CD\n\nDashboards serve 50,000+ daily users.",
    suggestions: [
      "How was performance optimized?",
      "What's the tech stack?",
      "Tell me about other companies",
    ],
  },

  // ─── SUNY RESEARCH ASSISTANT ─────────────────────────────────────────────
  {
    keywords: ["suny", "research assistant", "university", "research", "new paltz", "academic"],
    patterns: [/suny/i, /research.*assistant/i, /new.*paltz/i, /university.*work/i],
    questionType: "tell",
    category: "experience",
    answer:
      "🎓 SUNY New Paltz — Graduate Research Assistant (2024)\nDuring Master's program\n\nStack: React.js · TypeScript · Storybook · Python FastAPI · PostgreSQL · Redis · GCP · Docker\n\nKey work:\n• React + TypeScript component library with Storybook — reused across 4 platforms\n• Apollo Client + GraphQL with optimistic updates\n• Redux Toolkit for normalized state management\n• Page load: 8s → 4.4s (45% improvement) via code splitting + lazy loading\n• API response: 300ms → 150ms via Redis caching\n• 90%+ test coverage with Jest + React Testing Library\n• CI/CD: GitHub Actions — lint · test · Docker build · GCP deploy\n\nServed 15M+ annual visitors across 4 university platforms.",
    suggestions: [
      "Tell me about the education",
      "What other projects were built?",
      "What's the full tech stack?",
    ],
  },

  // ─── HARNS TECHNOLOGIES ──────────────────────────────────────────────────
  {
    keywords: ["harns", "harns technologies", "india", "previous company"],
    patterns: [/harns/i],
    questionType: "tell",
    category: "experience",
    answer:
      "🏢 Harns Technologies Private Ltd — Full-Stack Developer\nIndia · Oct 2021 – Jul 2023\n\n14 production applications shipped.\n\nKey projects:\n• E-commerce platform — Next.js SSG/ISR product pages (LCP 2.1s) · 50+ Storybook-documented React components · Stripe/PayPal/Razorpay · 10K+ monthly transactions\n• IoT real-time dashboard — Canvas API (replaced SVG · 67% render improvement) · Node.js + WebSockets · 500+ devices · MongoDB time-series\n• Publishing platforms — 100K+ daily users · 99.8% uptime · 90+ Lighthouse\n\nTailwind CSS + Storybook libraries accelerated cross-team development.",
    suggestions: [
      "Tell me about the IoT platform",
      "What about QS?",
      "Tell me about React at Harns",
    ],
  },

  // ─── QS QUACQUARELLI ─────────────────────────────────────────────────────
  {
    keywords: ["qs", "quacquarelli", "symonds", "qs quacquarelli"],
    patterns: [/quacquarelli/i, /\bqs\b/i],
    questionType: "tell",
    category: "experience",
    answer:
      "🏢 QS Quacquarelli Symonds — Full-Stack Developer\nIndia · Dec 2020 – Jul 2021\n\n8 React + TypeScript SPAs serving 15M+ annual visitors.\n\nKey results:\n• Page load: 8s → 2.5s (69% improvement) via React.lazy() + code splitting\n• API response: 400ms → 180ms via query optimization + Redis caching\n• React Query — 45% fewer API calls · stale-while-revalidate\n• Storybook component library — documented reusable component system\n• Express.js APIs: 1M+ daily requests handled\n• WCAG 2.1 AA accessible · mobile-first CSS Grid + Flexbox",
    suggestions: [
      "How did the career start?",
      "What's the React experience overall?",
      "What projects have been built?",
    ],
  },

  // ─── EDUCATION ───────────────────────────────────────────────────────────
  {
    keywords: ["education", "degree", "university", "college", "studied", "school", "masters", "bachelor", "gpa", "graduate"],
    patterns: [/education/i, /degree/i, /university/i, /studied/i, /graduated/i, /masters/i, /bachelor/i, /gpa/i],
    questionType: "what",
    category: "education",
    answer:
      "🎓 Education\n\nMaster of Science — Computer Science\n• State University of New York (SUNY), New Paltz\n• 2023 – 2025 · GPA: 3.81 / 4.0\n• Coursework: Web Development · Full-Stack Dev · Database Systems · Software Engineering · Cloud Computing\n• Also worked as Graduate Research Assistant (React · Storybook · FastAPI · GCP)\n\nBachelor of Technology — Computer Science\n• Lovely Professional University, Punjab, India\n• 2017 – 2021 · GPA: 3.2 / 4.0",
    suggestions: [
      "What was the SUNY role?",
      "What's the work experience?",
      "Tell me about the skills",
    ],
  },

  // ─── PORTFOLIO PROJECTS OVERVIEW ─────────────────────────────────────────
  {
    keywords: ["projects", "built", "created", "portfolio", "work samples", "made", "developed", "apps", "applications"],
    patterns: [/what.*built/i, /projects/i, /portfolio/i, /work.*samples/i, /what.*apps/i],
    questionType: "what",
    category: "projects",
    answer:
      "🚀 Featured Projects\n\n📈 FinGuard — Portfolio risk analytics platform\n• Monte Carlo simulations · Efficient Frontier optimisation\n• Python FastAPI microservice + Next.js 15 frontend\n• Dual API: REST for CRUD · GraphQL for analytics dashboard\n• Stack: Next.js 15 · FastAPI · Python · MongoDB · NumPy/SciPy\n\n🏥 ClaimGuard — Insurance claims triage & fraud intelligence\n• AI-simulated extraction pipeline · 5-signal fraud detection engine\n• 6-role RBAC · fire-and-forget async pipeline · TanStack Table\n• Stack: Next.js 16 · React 19 · TypeScript · MongoDB · NextAuth v5\n\n🔗 Sniplink — Production URL shortener\n• Edge Middleware 301 redirects · zero latency\n• SHA-256 hashed analytics (geo · device · browser)\n• Custom 3-tier rate limiter · NextAuth v5\n• Stack: Next.js 14 · TypeScript · MongoDB · Vercel Edge\n\n📊 CSV Plot Studio — Browser-only data viz tool\n• Papa Parse streaming worker · 10+ chart types\n• Live column-mapping UI · PNG/SVG export\n• Stack: React · Plotly.js · Tailwind CSS · Vite\n\n💼 This Portfolio — React SPA\n• Canvas particle engine · SCSS design system\n• Stack: React 19 · SCSS · Canvas API · GitHub Pages",
    suggestions: [
      "Tell me about FinGuard",
      "Tell me about ClaimGuard",
      "Tell me about Sniplink",
    ],
  },

  // ─── SNIPLINK ────────────────────────────────────────────────────────────
  {
    keywords: ["sniplink", "url shortener", "link shortener", "short url", "url"],
    patterns: [/sniplink/i, /url.*short/i, /link.*short/i, /short.*link/i],
    questionType: "tell",
    category: "projects",
    answer:
      "🔗 Sniplink — Production URL Shortener\nLive: sniplink.vercel.app\n\nArchitecture highlights:\n• Edge Middleware issues 301 redirects — visitor never hits Node.js · near-instant\n• Click analytics: SHA-256 hashed IPs · ua-parser-js (device/browser/OS) · Vercel geo headers — no raw PII stored\n• Atomic $inc on totalClicks — O(1) reads vs O(n) countDocuments at scale\n• Custom 3-tier rate limiter — 429 + Retry-After + X-RateLimit headers\n• Auth: NextAuth v5 · bcrypt password hashing\n• Custom aliases with nanoid-generated short codes\n\nStack: Next.js 14 · TypeScript · MongoDB · NextAuth v5 · Vercel Edge",
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

  // ─── CLAIMGUARD ──────────────────────────────────────────────────────────
  {
    keywords: ["claimguard", "claimsight", "insurance", "claims", "fraud detection", "claims triage", "insurance ai", "claims platform", "rbac", "fraud signals"],
    patterns: [/claimguard/i, /claimsight/i, /insurance.*claim/i, /claim.*fraud/i, /claims.*platform/i, /fraud.*detection/i],
    questionType: "tell",
    category: "projects",
    answer:
      "🏥 ClaimGuard — Insurance Claims Intelligence Platform\nLive: claimguard.vercel.app/analytics\n\n🔄 AI pipeline (fire-and-forget async):\n• POST /api/claims returns HTTP 201 immediately — no blocking\n• extractor.ts simulates OCR/LLM extraction across 15 claim fields with confidence scoring\n• scorer.ts runs 5 fraud signals + severity formula → routes to 4 queues (fast_track → senior_adjuster)\n• processor.ts orchestrates both and writes ClaimEvent audit log entries\n• BullMQ + Redis in package.json for production job persistence\n\n🔍 Fraud detection engine:\n• 5 weighted signals: multiple_recent_claims · policy_age_mismatch · estimate_inflation · missing_police_report · date_mismatch\n• Severity scoring: damage amount (40pts) + injury (30pts) + incident type (20pts) + third-party (15pts)\n• 4 routing queues: fast_track → standard → specialist → senior_adjuster (SIU referral)\n\n🔐 Security & RBAC:\n• 6 roles: claimant · agent · adjuster · supervisor · admin — each with granular UI visibility\n• FraudSignalsPanel + ExtractionPanel gated to adjuster/supervisor/admin only\n• Edge-safe auth split: auth.config.ts (no mongoose) for middleware · auth.ts with dynamic Mongoose imports for Node.js\n• HttpOnly JWT cookies · CSRF protection · bcrypt pre-save hooks · Zod validation on all API routes\n\n⚙️ Architecture:\n• React Server Components fetch MongoDB directly — zero client-bundle HTTP round-trips\n• TanStack Table v8 with server-side .skip().limit() pagination for 100K+ claims\n• globalThis MongoDB connection caching prevents pool exhaustion under Next.js Turbopack\n• 8 compound indexes on Claim model · append-only ClaimEvent audit log\n\nStack: Next.js 16 · React 19 · TypeScript 5 · MongoDB Atlas · NextAuth v5 · TanStack Table · Recharts · Tailwind CSS v4 · Radix UI · React Hook Form + Zod",
    suggestions: [
      "Tell me about FinGuard",
      "What other projects were built?",
      "What's the security expertise?",
    ],
  },

  // ─── FINGUARD ────────────────────────────────────────────────────────────
  {
    keywords: ["finguard", "portfolio risk", "risk analytics", "monte carlo", "efficient frontier", "quantitative finance", "sharpe ratio", "var", "sortino"],
    patterns: [/finguard/i, /portfolio.*risk/i, /monte.*carlo/i, /efficient.*frontier/i, /quantitative.*finance/i, /sharpe/i],
    questionType: "tell",
    category: "projects",
    answer:
      "📈 FinGuard — Portfolio Risk Analytics Platform\n\n🐍 Python microservice (FastAPI on Render):\n• Efficient Frontier via scipy.optimize.minimize with SLSQP — constrained quadratic optimisation\n• Monte Carlo: 1,000 correlated price paths using np.random.multivariate_normal\n• Risk metrics: Sharpe · Sortino · VaR 95% · Beta · covariance matrix via pandas\n• yfinance for live market data with 15-minute cache TTL\n\n⚛️ Next.js 15 frontend (Vercel):\n• Dual API: REST for CRUD mutations · GraphQL via Apollo for multi-source analytics in a single round-trip\n• JWT sessions on Vercel Edge — cryptographic auth, zero database round-trips per request\n• React Query for all server state — no Redux, no global store\n• Multi-currency context with fmt() formatter — no prop drilling\n\n🔐 Security:\n• Rate limiting at Next.js middleware boundary (before any route handler)\n• GraphQL introspection disabled in production\n• Stack traces never leak to the client\n• MongoDB ObjectId types throughout — prevents cross-user data bugs\n\nStack: Next.js 15 · React 19 · FastAPI · Python · MongoDB Atlas · NextAuth v5 · React Query · Apollo GraphQL · NumPy · SciPy · Vercel · Render",
    suggestions: [
      "Tell me about Sniplink",
      "What other projects were built?",
      "What's the full-stack expertise?",
    ],
  },

  // ─── IOT PLATFORM DETAILS ────────────────────────────────────────────────
  {
    keywords: ["iot", "sensors", "devices", "real-time data", "websocket", "streaming"],
    patterns: [/iot/i, /sensors/i, /real.*time.*data/i, /websocket/i, /streaming/i],
    questionType: "tell",
    category: "projects",
    answer:
      "📡 IoT Real-Time Platform — Harns Technologies\n\nArchitecture:\n• Canvas API frontend: real-time line charts · bar charts · heatmaps updating live (replaced SVG · 67% render improvement)\n• Node.js backend: WebSockets streaming data from 500+ IoT devices\n• MongoDB time-series collections: efficient storage + querying\n• Sub-second response times under high concurrency\n• Robust reconnection logic + error handling for WebSocket stability\n\nEvery device sends metrics every few seconds — all rendered in browser without lag.",
    suggestions: [
      "What visualization libraries were used?",
      "Tell me about other projects",
      "What's the Vue.js expertise?",
    ],
  },

  // ─── PERFORMANCE OPTIMIZATION ────────────────────────────────────────────
  {
    keywords: ["performance", "optimization", "optimize", "fast", "speed", "improved", "lighthouse", "core web vitals", "lcp", "cls"],
    patterns: [/performance/i, /optimiz/i, /faster/i, /speed/i, /improve/i, /lighthouse/i, /web.*vital/i],
    questionType: "how",
    category: "skills",
    answer:
      "⚡ Performance Optimization — Key Results\n\n🚀 Rendering:\n• SVG → Canvas API: 2–3s → <500ms (83% improvement)\n• Next.js SSR migration: LCP 4.1s → 1.6s (61% improvement)\n\n📦 Bundle:\n• Webpack/Vite code splitting: 2.8MB → 1.5MB (46% reduction)\n• Options API → Composition API + TypeScript: 25% bundle reduction\n\n🔗 API:\n• MongoDB indexing + query optimization: 800ms → 200ms (75%)\n• API response: 400ms → 180ms at QS\n\n🗄️ Caching:\n• Redis reduced redundant API calls by 45%\n• React Query stale-while-revalidate — 45% fewer API calls at QS\n\n📄 Page Load:\n• QS: 8s → 2.5s (69%) · SUNY: 8s → 4.4s (45%)\n\n🎯 Core Web Vitals targets: LCP <2.5s · CLS <0.1 · INP <200ms",
    suggestions: [
      "How was rendering optimized?",
      "Tell me about the Next.js migration",
      "What tools were used?",
    ],
  },

  // ─── DATA VISUALIZATION ──────────────────────────────────────────────────
  {
    keywords: ["visualization", "charts", "graphs", "plotly", "d3", "dashboard", "canvas", "svg", "data viz"],
    patterns: [/visualization/i, /charts/i, /plotly/i, /d3/i, /dashboard/i, /data.*viz/i],
    questionType: "what",
    category: "skills",
    answer:
      "📊 Data Visualization Toolkit\n\n• Plotly.js — heavy dashboards · 1M+ data points · interactive plots (Progress Solutions)\n• D3.js — custom charts: line · bar · heatmaps · area charts (Harns IoT platform)\n• Canvas API — performance-critical rendering (replaced SVG · 83% faster at Progress Solutions)\n• Chart.js — lightweight charts for simpler use cases\n• CSV Plot Studio — 10+ chart types, browser-only, Tailwind CSS UI\n\n🌐 Real-time pipeline:\nKafka + Socket.io → sub-second data delivery to Plotly.js dashboards\n\nDashboards serve 50,000+ daily users with single charts rendering 1M+ data points.",
    suggestions: [
      "How was performance optimized?",
      "Tell me about the Plotly.js projects",
      "What's the tech stack?",
    ],
  },

  // ─── BACKEND SKILLS ──────────────────────────────────────────────────────
  {
    keywords: ["backend", "api", "server", "node", "python", "fastapi", "django", "graphql", "rest"],
    patterns: [/backend/i, /server.*side/i, /node/i, /python/i, /fastapi/i, /graphql/i, /rest.*api/i],
    questionType: "what",
    category: "skills",
    answer:
      "🖥️ Backend Skills\n\n🟢 Node.js + Express.js:\n• RESTful APIs handling 1M+ daily requests (QS)\n• WebSocket streaming for 500+ IoT devices (Harns)\n\n🐍 Python:\n• FastAPI — schema validation · async routes · Swagger docs (SUNY · Progress Solutions)\n• Django — ORM · admin · e-commerce backend (Harns)\n• Flask — lightweight services\n\n🔗 GraphQL + Apollo Server:\n• Optimistic updates · cache normalization (SUNY)\n\n🔴 Redis:\n• Caching layer: 45% API call reduction · session management\n\n🍃 MongoDB:\n• Time-series storage · compound indexes · aggregation pipelines\n• 800ms → 200ms optimization at Progress Solutions\n\n🐘 PostgreSQL:\n• SUNY New Paltz via GCP with Docker deployment\n\nAll APIs documented with Swagger/OpenAPI.",
    suggestions: [
      "What about frontend?",
      "Tell me about databases",
      "What projects were built?",
    ],
  },

  // ─── STATE MANAGEMENT ────────────────────────────────────────────────────
  {
    keywords: ["state management", "vuex", "pinia", "redux", "context", "store", "global state"],
    patterns: [/state.*management/i, /vuex/i, /pinia/i, /redux/i, /global.*state/i],
    questionType: "what",
    category: "skills",
    answer:
      "⚙️ State Management\n\nReact (primary):\n• Redux Toolkit — normalized state · createSlice · RTK Query (QS · SUNY)\n• React Query — client-side caching · background refetching · 45% API call reduction\n• Apollo Client — optimistic updates · cache normalization (SUNY)\n• React Context — lightweight local state\n\nVue.js (secondary):\n• Pinia — modern Vue 3 store · TypeScript-first (Progress Solutions)\n• Vuex — modular store · actions/mutations/getters · 40% code duplication reduction\n\nRule: Redux Toolkit for large React apps · Pinia for new Vue 3 apps · React Query for data fetching.",
    suggestions: [
      "What's the React/Next.js experience?",
      "Tell me about Vue.js skills",
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
      "🔷 TypeScript\n\nTypeScript is Harish's default on all serious projects:\n\n• React + TypeScript (strict mode) — QS (8 SPAs) · SUNY (component libraries)\n• Vue.js 3 <script setup lang=\"ts\"> — Progress Solutions · Composition API throughout\n• Next.js 14 — end-to-end typed API routes + MongoDB schemas (Sniplink)\n• Migrated legacy JS Options API → Composition API + TypeScript at Progress Solutions — 25% bundle reduction\n• Custom hooks · generics · discriminated unions · Zod runtime validation",
    suggestions: [
      "Tell me about the Vue.js work",
      "What's the React experience?",
      "What projects were built?",
    ],
  },

  // ─── TESTING ─────────────────────────────────────────────────────────────
  {
    keywords: ["testing", "test", "quality", "jest", "cypress", "vitest", "coverage", "tdd", "e2e"],
    patterns: [/testing/i, /test.*coverage/i, /quality/i, /jest/i, /cypress/i, /tdd/i, /e2e/i],
    questionType: "what",
    category: "skills",
    answer:
      "🧪 Testing Strategy\n\n• Unit: Jest (React/Node.js) · Vitest (Vue 3) · Vue Test Utils\n• Integration: React Testing Library — behavior-focused testing\n• E2E: Cypress — full user-flow coverage\n• Coverage target: 90%+ on all critical features\n• CI/CD: GitHub Actions — PRs blocked if tests fail\n\nTest pipelines established from scratch at both Progress Solutions and SUNY.\n\nPhilosophy: test behavior, not implementation — what the user experiences, not internal details.",
    suggestions: [
      "What's the CI/CD experience?",
      "Tell me about dev practices",
      "What tools are used?",
    ],
  },

  // ─── CLOUD / DEVOPS ──────────────────────────────────────────────────────
  {
    keywords: ["cloud", "aws", "gcp", "docker", "kubernetes", "devops", "ci cd", "deployment", "github actions"],
    patterns: [/cloud/i, /aws/i, /gcp/i, /docker/i, /kubernetes/i, /devops/i, /ci.*cd/i, /deploy/i],
    questionType: "what",
    category: "skills",
    answer:
      "☁️ Cloud & DevOps\n\n• AWS: EC2 · Lambda · S3 (static hosting) · RDS (PostgreSQL)\n• GCP: SUNY university apps deployed with Docker containers\n• Docker: all recent projects containerized for consistent dev/prod environments\n• Kubernetes: orchestration for microservices at scale\n• CI/CD: GitHub Actions — lint → test → build → deploy on every PR\n• Vercel/Render: Sniplink + CSV Plot Studio deployed with edge functions\n\nFull CI/CD pipeline set up from scratch at SUNY — automated ESLint · Jest · Docker builds · GCP deployment with health checks.",
    suggestions: [
      "Tell me about the testing setup",
      "What's the tech stack?",
      "Tell me about the projects",
    ],
  },

  // ─── KAFKA / REALTIME ────────────────────────────────────────────────────
  {
    keywords: ["kafka", "websocket", "realtime", "real-time", "socket", "streaming", "events", "queue"],
    patterns: [/kafka/i, /websocket/i, /real.*time/i, /socket\.io/i, /message.*queue/i],
    questionType: "what",
    category: "skills",
    answer:
      "🌊 Real-Time Systems\n\n📨 Apache Kafka:\n• Processing 1.6M+ events/day from IoT sensors @ Progress Solutions\n• Kafka consumers with error handling · dead-letter queues · sub-second latency\n\n🔌 WebSockets + Socket.io:\n• Bidirectional communication for live dashboards (Harns IoT — 500+ devices)\n• Thousands of concurrent users · robust reconnection logic\n\n⚡ Architecture pattern:\nKafka (reliable event streaming) → Socket.io (browser delivery) → Plotly.js (real-time charts)\n\nAll real-time updates are non-blocking — users see data refresh in under a second.",
    suggestions: [
      "Tell me about data visualization",
      "What's the tech stack?",
      "How was performance optimized?",
    ],
  },

  // ─── CONTACT ─────────────────────────────────────────────────────────────
  {
    keywords: ["contact", "email", "phone", "reach", "connect", "linkedin", "github", "hire", "message"],
    patterns: [/contact/i, /email/i, /reach.*you/i, /connect/i, /linkedin/i, /github/i, /hire/i],
    questionType: "how",
    category: "contact",
    answer:
      "📬 Contact Harish\n\n📧 Email: yerraguntlaharish98@gmail.com\n📱 Phone: +1 (205) 736-5808\n💼 LinkedIn: linkedin.com/in/harish-yerraguntla-70695416b\n🐙 GitHub: github.com/nandu064\n🌐 Portfolio: nandu064.github.io/portfolio\n\nOpen to: React/Next.js · Vue.js · Full-Stack · Software Engineer roles.\nResponse time: usually within 24 hours.",
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
      "📍 Location\n\nNew York, USA — currently working remote for Progress Solutions (Texas-based).\n\n• Remote-first: 4+ years of fully remote professional experience\n• Open to: remote · hybrid · on-site anywhere in the US\n• Relocation: open for the right opportunity\n• Work Authorization: F-1 OPT (STEM extension available) — no sponsorship needed through June 2028",
    suggestions: [
      "What's the work authorization?",
      "What roles is Harish looking for?",
      "How to get in contact?",
    ],
  },

  // ─── OPEN TO WORK / AVAILABILITY ─────────────────────────────────────────
  {
    keywords: ["available", "open to work", "hiring", "open", "looking", "job search", "opportunities", "roles"],
    patterns: [/open.*to.*work/i, /available.*for/i, /looking.*for.*job/i, /hiring/i, /opportunity/i],
    questionType: "what",
    category: "contact",
    answer:
      "🟢 Open to New Opportunities\n\n🎯 Target roles:\n• Full-Stack Engineer\n• React / Next.js Developer\n• Software Engineer\n\n⚡ What Harish brings:\n• React/Next.js as primary stack + Vue.js as strong secondary\n• Tailwind CSS + Storybook component libraries\n• Full-stack: Node.js · Python · PostgreSQL · MongoDB · Redis · AWS\n• Performance specialist: Core Web Vitals · SSR migrations · rendering optimization\n\n📋 Authorization: F-1 OPT (STEM extension available) — no sponsorship needed through June 2028\n\nReach out directly: yerraguntlaharish98@gmail.com",
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
      "📅 Experience Timeline — 5+ years\n\n• 2020–2021 — QS Quacquarelli Symonds (React SPAs · 15M+ annual visitors)\n• 2021–2023 — Harns Technologies (Next.js · React · 14 production apps)\n• 2023–2025 — MS Computer Science, SUNY New Paltz + Research Assistant\n• Jan 2025 – Now — Progress Solutions Inc. (React/Next.js · Vue.js · Node.js · Kafka)\n\n5+ years of professional production experience.",
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
      "🏆 What Sets Harish Apart\n\n⚡ Performance obsession:\n• Data-driven results: LCP 4.1s → 1.6s · render 2–3s → 500ms · load 8s → 2.5s\n• Tools: Lighthouse · Chrome DevTools · Core Web Vitals profiling\n\n🧩 Dual-framework depth:\n• React/Next.js (primary) + Vue.js (secondary) — can contribute to any modern codebase\n• Storybook component libraries adopted by multiple teams\n\n📊 Data visualization specialist:\n• Most engineers avoid complex charts — Harish builds them at scale (1M+ data points)\n\n🔢 Numbers-driven:\n• Every improvement is measurable and documented\n\n🚀 Consistent impact:\n• Tangible results delivered at every company — performance, scale, and quality",
    suggestions: [
      "Tell me about the projects",
      "What's the tech stack?",
      "How to get in contact?",
    ],
  },

  // ─── SOFT SKILLS / WORKING STYLE ─────────────────────────────────────────
  {
    keywords: ["soft skills", "team", "collaboration", "communication", "work style", "leadership", "agile", "scrum"],
    patterns: [/soft.*skills/i, /team.*work/i, /collaborat/i, /work.*style/i, /agile/i, /scrum/i],
    questionType: "what",
    category: "general",
    answer:
      "🤝 Soft Skills & Work Style\n\n👥 Collaboration:\n• Cross-functional teams (design + product + engineering) @ Progress Solutions — features shipped that increased engagement 20%\n\n📋 Agile/Scrum:\n• Daily standups · sprint planning · code reviews — standard across all full-time roles\n\n🗣️ Communication:\n• APIs documented with Swagger · clear PR descriptions · explains the 'why' behind decisions\n\n📚 Continuous learning:\n• Completed a Master's degree while working professionally\n\n🧑‍🏫 Knowledge sharing:\n• Built Storybook component libraries to accelerate team onboarding\n• Helped junior devs ramp up on Vue.js 3 Composition API patterns",
    suggestions: [
      "What's the work experience?",
      "Tell me about the projects",
      "How to get in contact?",
    ],
  },

  // ─── WORK AUTHORIZATION ──────────────────────────────────────────────────
  {
    keywords: ["visa", "authorization", "work authorization", "opt", "stem", "sponsorship", "h1b", "green card"],
    patterns: [/visa/i, /work.*auth/i, /opt/i, /stem/i, /sponsor/i, /h1b/i, /green.*card/i],
    questionType: "what",
    category: "contact",
    answer:
      "📋 Work Authorization\n\nStatus: F-1 OPT (STEM extension available)\n📅 OPT valid now · STEM extension extends authorization through June 2028\n✅ No sponsorship needed through June 2028\n🔄 After 2028: open to H-1B sponsorship or other work visa options\n📍 Available for: remote · hybrid · on-site positions across the US\n\nCan start immediately with zero visa processing delays.",
    suggestions: [
      "Is Harish open to work?",
      "Where is Harish located?",
      "How to get in contact?",
    ],
  },
];
