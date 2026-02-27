<div align="center">

# Harish Yerraguntla — Portfolio

**Full-Stack Engineer · React · Vue.js · Node.js · Python**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white)](https://sass-lang.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Live-GitHub%20Pages-222222?style=flat-square&logo=github&logoColor=white)](https://harishyerraguntla.vercel.app/)

[**Live Demo →**](https://harishyerraguntla.vercel.app/)

</div>

---

## What I Built

This is my personal portfolio — not a template I downloaded and filled in, but something I designed and engineered from scratch. A few things I'm proud of:

**An AI-style chatbot** that answers recruiter questions about my background without any API or LLM. It uses a custom keyword extraction + synonym expansion + regex scoring pipeline built entirely in vanilla JS. Ask it "Are you open to work?" or "What's your Vue.js experience?" and it figures out intent, picks the best answer from 25+ structured Q&A entries, and surfaces follow-up suggestions.

**A canvas particle engine** in the hero section — 50 particles rendered at 60 fps via `requestAnimationFrame`, with O(n²) proximity detection that draws connecting lines when particles drift close together. No library, just the Canvas API.

**Scroll-driven entrance animations** using `IntersectionObserver` — each section fades/slides in as you reach it, with staggered delays per element.

**A complete SCSS design system** with token-based variables (`_variables.scss`) and reusable mixins (`_mixins.scss`) so every component shares the same spacing, color, and typography primitives.

**An EmailJS contact pipeline** with async form submission, client-side field validation, loading states, and success/error feedback — no backend required.

---

## Sections

| Section | What's in it |
|---|---|
| **Hero** | Canvas particle engine + animated code snippet typewriter |
| **About** | Skills grid with proficiency indicators + highlight metric cards |
| **Experience** | Timeline with duration calculation, promotion notes, and tech badge chips |
| **Projects** | Split-panel cards with browser-chrome mockups, hover 3D transforms, per-project accent colors |
| **Contact** | EmailJS async form + contact method cards |
| **ChatBot** | Floating AI assistant — pattern matching, 25+ Q&As, suggestion chips, typing indicator |

---

## Tech Stack

| Technology | Role |
|---|---|
| React 19 | SPA framework, component architecture |
| SCSS / Sass | Design tokens, mixins, component-scoped styles |
| Bootstrap / Reactstrap | Grid system, layout utilities |
| Canvas API | Hero particle engine |
| Intersection Observer API | Scroll-triggered entrance animations |
| EmailJS | Serverless contact form — no backend |
| GitHub Pages | Static hosting via `gh-pages` |

---

## Performance

| Metric | Result |
|---|---|
| Lighthouse Performance | 90+ |
| Lighthouse Accessibility | 95+ |
| LCP | < 2.5s |
| CLS | < 0.1 |
| INP | < 200ms |
| Particle engine | 60 fps |

---

## Getting Started

```bash
git clone https://github.com/Nandu064/portfolio.git
cd portfolio
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

```bash
# Deploy to GitHub Pages
npm run deploy
```

### Environment Variables

Create a `.env` file for EmailJS (the contact form works without it — submissions just won't send):

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Get keys at [emailjs.com](https://www.emailjs.com/).

---

## Using This as a Template

Want to fork this for your own portfolio? Here's exactly what to change:

### 1. Your content — `src/data/portfolio.js`

This is the **single source of truth** for everything rendered on the page. Update these objects:

```js
personalInfo      // name, title, tagline, location, social links, email, phone
experience        // each job: company, role, dates, bullets, tech badges, promotionNote
projects          // each project: title, description, tech stack, links, theme color
education         // degree, university, GPA, relevant coursework
highlights        // the metric cards in About ("4 years experience", "10+ projects", etc.)
skills            // categories and individual skill items with proficiency levels
```

No changes needed anywhere else — all components pull from this file.

### 2. Your chatbot answers — `src/components/ChatBot/resumeData.js`

Each entry is a structured Q&A object:

```js
{
  id: "skills",
  keywords: ["skills", "technologies", "tech stack"],
  patterns: [/what.*skills/i, /tech.*stack/i],
  questionType: "what",
  answer: `Your answer here...`,
  suggestions: ["Follow-up question 1", "Follow-up question 2"]
}
```

Replace the answers with your own background. The matcher scores each entry by keyword overlap + regex pattern hits — higher score wins. You don't need to touch `questionMatcher.js`.

### 3. Colors and fonts — `src/styles/base/_variables.scss`

The entire visual theme lives in design tokens:

```scss
$primary: #64ffda;       // accent color (teal by default)
$secondary: #7b5ea7;     // secondary accent
$bg-primary: #0a0e1a;    // page background
$bg-card: #141929;       // card background
$font-family-base: ...;  // body font
$font-family-heading: ...; // heading font
```

Change `$primary` and `$secondary` to match your brand — everything inherits from these tokens.

### 4. Deploy under your username

Update `package.json`:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/portfolio"
```

Then push to GitHub and run `npm run deploy`.

---

## Project Structure

```
portfolio/
├── public/
│   └── index.html                    # Root HTML, SEO meta tags, OG tags
├── src/
│   ├── data/
│   │   └── portfolio.js              # ← Edit this for your content
│   ├── components/
│   │   ├── Header/                   # Sticky nav, smooth scroll
│   │   ├── Hero/                     # Canvas particles, code snippet
│   │   ├── About/                    # Skills grid, metric cards
│   │   ├── Experience/               # Timeline, badges, promotion notes
│   │   ├── Projects/                 # Split-panel cards, mockups
│   │   ├── Contact/                  # EmailJS form, contact methods
│   │   ├── Footer/                   # Social links, back-to-top
│   │   └── ChatBot/
│   │       ├── ChatBot.js            # UI, renderText parser
│   │       ├── chatbotResponses.js   # Welcome message variants
│   │       ├── questionMatcher.js    # Scoring engine (no changes needed)
│   │       └── resumeData.js         # ← Edit this for your Q&As
│   └── styles/
│       └── base/
│           ├── _variables.scss       # ← Edit this for your theme
│           └── _mixins.scss          # Reusable SCSS utilities
└── package.json
```

---

## License

MIT — free to use as a template. Attribution appreciated but not required.

---

<div align="center">

Built by **[Harish Yerraguntla](https://harishyerraguntla.vercel.app/)** · [LinkedIn](https://www.linkedin.com/in/harish-yerraguntla-a910b03b3) · [GitHub](https://github.com/nandu064)

</div>
