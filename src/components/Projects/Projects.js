import React, { memo } from "react";
import { useInView } from "react-intersection-observer";
import { projects } from "../../data/portfolio";
import "./Projects.scss";

// ─── CSS Mockup Components (reusable, memoized) ───────────────────────────

const BrowserChrome = memo(({ url, children }) => (
  <div className="mockup-shell">
    <div className="mockup-chrome">
      <div className="chrome-dots">
        <span className="dot dot-red" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
      </div>
      <div className="chrome-bar">{url}</div>
    </div>
    <div className="mockup-body">{children}</div>
  </div>
));

const CodeMockup = memo(() => (
  <BrowserChrome url="Projects.tsx">
    <div className="code-editor">
      <div className="code-line">
        <span className="ck">const</span>{" "}
        <span className="cf">FeaturedCard</span>{" "}
        <span className="co">=</span>{" "}
        <span className="ck">memo</span>
        <span className="cp">{"(({ project }) => ("}</span>
      </div>
      <div className="code-line indent-1">
        <span className="ct">&lt;article</span>{" "}
        <span className="ca">className</span>
        <span className="co">=</span>
        <span className="cs">"card"</span>
        <span className="ct">&gt;</span>
      </div>
      <div className="code-line indent-2">
        <span className="ct">&lt;VisualHeader</span>
        <span className="ca"> theme</span>
        <span className="co">=</span>
        <span className="cv">{"{project.theme}"}</span>
        <span className="ct"> /&gt;</span>
      </div>
      <div className="code-line indent-2">
        <span className="ct">&lt;Highlights</span>
        <span className="ca"> items</span>
        <span className="co">=</span>
        <span className="cv">{"{project.highlights}"}</span>
        <span className="ct"> /&gt;</span>
      </div>
      <div className="code-line indent-2">
        <span className="ct">&lt;TechBadges</span>
        <span className="ca"> stack</span>
        <span className="co">=</span>
        <span className="cv">{"{project.technologies}"}</span>
        <span className="ct"> /&gt;</span>
      </div>
      <div className="code-line indent-1">
        <span className="ct">&lt;/article&gt;</span>
      </div>
      <div className="code-line">
        <span className="cp">{"));"}</span>
        <span className="cm"> {"//"} memoized ⚡</span>
      </div>
      <div className="code-line code-blank" />
      <div className="code-line">
        <span className="ck">export default</span>{" "}
        <span className="cf">FeaturedCard</span>
        <span className="cp">;</span>
      </div>
    </div>
  </BrowserChrome>
));

const UrlMockup = memo(() => (
  <BrowserChrome url="sniplink.vercel.app">
    <div className="url-mockup">
      <p className="url-label">Paste your long URL</p>
      <div className="url-input-row">
        <div className="url-input-fake">https://verylongdomain.com/blog/article...</div>
        <button className="url-shorten-btn" tabIndex="-1">Shorten →</button>
      </div>
      <div className="url-result-row">
        <i className="fas fa-link url-link-icon" />
        <span className="url-short-text">
          snip.lk/<strong>x9k2p</strong>
        </span>
        <button className="url-copy-btn" tabIndex="-1">
          <i className="fas fa-copy" />
        </button>
      </div>
      <div className="url-analytics-row">
        <div className="analytics-chip">
          <i className="fas fa-mouse-pointer" /> 2,847
        </div>
        <div className="analytics-chip">
          <i className="fas fa-globe" /> 31 countries
        </div>
        <div className="analytics-chip">
          <i className="fas fa-mobile-alt" /> 71% mobile
        </div>
      </div>
    </div>
  </BrowserChrome>
));

const ChartMockup = memo(() => {
  const bars = [
    { h: 60, label: "Jan" },
    { h: 82, label: "Feb" },
    { h: 48, label: "Mar" },
    { h: 91, label: "Apr" },
    { h: 66, label: "May" },
    { h: 74, label: "Jun" },
    { h: 55, label: "Jul" },
    { h: 88, label: "Aug" },
  ];
  return (
    <BrowserChrome url="csv-plot-studio.vercel.app">
      <div className="chart-mockup">
        <div className="chart-toolbar">
          <span className="chart-title-label">Monthly Revenue · CSV Upload</span>
          <div className="chart-type-pills">
            {["Bar", "Line", "Pie", "Scatter"].map((t) => (
              <button
                key={t}
                className={`chart-type-pill${t === "Bar" ? " active" : ""}`}
                tabIndex="-1"
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="chart-area">
          <div className="chart-bars">
            {bars.map(({ h, label }, i) => (
              <div key={label} className="bar-col" style={{ "--delay": `${i * 0.07}s` }}>
                <div className="bar-fill" style={{ "--h": `${h}%` }} />
                <span className="bar-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="chart-export-row">
          <button className="export-btn" tabIndex="-1">
            <i className="fas fa-download" /> Export PNG
          </button>
          <button className="export-btn" tabIndex="-1">
            <i className="fas fa-file-code" /> Export SVG
          </button>
        </div>
      </div>
    </BrowserChrome>
  );
});

// ─── Skill tags per project ────────────────────────────────────────────────

const SkillTag = memo(({ label }) => (
  <span className="skill-tag">{label}</span>
));

// ─── Individual panel ──────────────────────────────────────────────────────

const MOCKUPS = {
  0: <CodeMockup />,
  9: <UrlMockup />,
  10: <ChartMockup />,
};

const THEME_META = {
  cyan: {
    accentVar: "#0891b2",
    bg: "linear-gradient(160deg, #0c4a6e 0%, #082f49 60%, #0f172a 100%)",
  },
  purple: {
    accentVar: "#7c3aed",
    bg: "linear-gradient(160deg, #2e1065 0%, #1e1b4b 60%, #0f172a 100%)",
  },
  emerald: {
    accentVar: "#10b981",
    bg: "linear-gradient(160deg, #064e3b 0%, #022c22 60%, #0f172a 100%)",
  },
};

const ProjectPanel = memo(({ project, index }) => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const reversed = index % 2 === 1;
  const theme = THEME_META[project.theme] || THEME_META.cyan;
  const mockup = MOCKUPS[project.id];

  return (
    <article
      ref={ref}
      className={`project-panel theme-${project.theme} ${reversed ? "reversed" : ""} ${
        inView ? "in-view" : ""
      }`}
      style={{ "--accent": theme.accentVar }}
    >
      {/* Visual */}
      <div className="panel-visual" style={{ background: theme.bg }}>
        <div className="panel-glow" />
        <div className="panel-grid" />
        <div className="panel-mockup">{mockup}</div>
      </div>

      {/* Content */}
      <div className="panel-content">
        {/* Meta row */}
        <div className="panel-meta">
          <span className={`cat-badge cat-${project.category.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z-]/g, "")}`}>
            {project.category}
          </span>
          {project.demo && (
            <span className="live-badge">
              <span className="live-pulse" />
              Live
            </span>
          )}
          <span className="project-index">0{index + 1}</span>
        </div>

        {/* Title */}
        <h3 className="panel-title">{project.title}</h3>

        {/* Description */}
        <p className="panel-description">{project.description}</p>

        {/* Numbered highlights */}
        <ul className="panel-highlights">
          {project.highlights.map((h, i) => (
            <li key={i} className="highlight-item">
              <span className="highlight-num">0{i + 1}</span>
              <span className="highlight-text">{h}</span>
            </li>
          ))}
        </ul>

        {/* Skills demonstrated */}
        {project.skills && (
          <div className="panel-skills">
            <span className="skills-label">Skills demonstrated:</span>
            <div className="skills-row">
              {project.skills.map((s) => (
                <SkillTag key={s} label={s} />
              ))}
            </div>
          </div>
        )}

        {/* Tech stack */}
        <div className="panel-tech">
          {project.technologies.map((t) => (
            <span key={t} className="tech-chip">{t}</span>
          ))}
        </div>

        {/* CTAs */}
        <div className="panel-actions">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn action-github"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <i className="fab fa-github" />
            <span>View Code</span>
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn action-live"
              aria-label={`Open ${project.title} live demo`}
            >
              <span>Live Demo</span>
              <i className="fas fa-external-link-alt" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
});

// ─── Section ───────────────────────────────────────────────────────────────

const Projects = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner">
        {/* Section header */}
        <header
          ref={headerRef}
          className={`projects-header ${headerInView ? "in-view" : ""}`}
        >
          <p className="section-eyebrow">
            <span className="eyebrow-line" />
            Selected Work
            <span className="eyebrow-line" />
          </p>
          <h2 className="section-heading">
            Built With <span className="text-gradient">Purpose</span>
          </h2>
          <p className="section-sub">
            Three production apps — each demonstrating a distinct layer of frontend engineering
          </p>
        </header>

        {/* Project panels */}
        <div className="panels-list">
          {projects.map((project, index) => (
            <ProjectPanel key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className={`github-cta ${headerInView ? "in-view" : ""}`}>
          <div className="cta-inner">
            <div className="cta-text">
              <h3>See more on GitHub</h3>
              <p>Open-source work, experiments, and contributions</p>
            </div>
            <a
              href="https://github.com/nandu064"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
              aria-label="Visit GitHub profile"
            >
              <i className="fab fa-github" />
              <span>github.com/nandu064</span>
              <i className="fas fa-arrow-right cta-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
