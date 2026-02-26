import React from "react";
import { personalInfo } from "../../data/portfolio";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinks = [
    { id: "home",       label: "Home" },
    { id: "about",      label: "About" },
    { id: "skills",     label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects",   label: "Projects" },
    { id: "education",  label: "Education" },
    { id: "contact",    label: "Contact" },
  ];

  return (
    <footer className="site-footer" role="contentinfo">
      {/* ── Tri-color top rule ── */}
      <div className="footer-rule" aria-hidden="true" />

      {/* ── Background grid ── */}
      <div className="footer-grid-bg" aria-hidden="true" />

      <div className="footer-container">

        {/* ── CTA Banner ── */}
        <div className="footer-cta">
          <div className="footer-cta-text">
            <h2 className="cta-heading">Have a project in mind?</h2>
            <p className="cta-sub">
              Let's build something great together — I'm currently available for
              full-time roles and freelance work.
            </p>
          </div>
          <div className="cta-actions">
            <a
              href={`mailto:${personalInfo.email}`}
              className="cta-btn cta-primary"
              aria-label="Send an email"
            >
              <i className="fas fa-paper-plane" />
              <span>Send a Message</span>
            </a>
            <a
              href="/Harish_Yerraguntla_VueJS.pdf"
              download="Harish_Yerraguntla_Resume.pdf"
              className="cta-btn cta-outline"
              aria-label="Download resume"
            >
              <i className="fas fa-download" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="footer-divider" />

        {/* ── Main grid ── */}
        <div className="footer-grid">

          {/* Brand column */}
          <div className="footer-brand">
            <div className="brand-monogram" aria-hidden="true">HY</div>
            <h3 className="brand-name">
              <span className="text-gradient">{personalInfo.name}</span>
            </h3>
            <p className="brand-role">Frontend Engineer</p>
            <div className="availability-badge">
              <span className="avail-dot" />
              Open to opportunities
            </div>
            <div className="brand-contacts">
              <a href={`mailto:${personalInfo.email}`} className="brand-contact-link">
                <i className="fas fa-envelope" />
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="brand-contact-link">
                <i className="fas fa-phone" />
                {personalInfo.phone}
              </a>
              <span className="brand-contact-link brand-location">
                <i className="fas fa-map-marker-alt" />
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Nav column */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Navigate</h4>
            <nav aria-label="Footer navigation">
              <ul className="footer-nav-list">
                {navLinks.map(({ id, label }) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollTo(id)}
                      className="footer-nav-btn"
                      aria-label={`Go to ${label} section`}
                    >
                      <span className="nav-arrow">→</span>
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social column */}
          <div className="footer-social-col">
            <h4 className="footer-col-heading">Connect</h4>
            <div className="footer-socials">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                aria-label="GitHub profile"
              >
                <i className="fab fa-github social-icon" />
                <div className="social-info">
                  <span className="social-label">GitHub</span>
                  <span className="social-handle">@nandu064</span>
                </div>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                aria-label="LinkedIn profile"
              >
                <i className="fab fa-linkedin social-icon social-linkedin" />
                <div className="social-info">
                  <span className="social-label">LinkedIn</span>
                  <span className="social-handle">harish-yerraguntla</span>
                </div>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="social-card"
                aria-label="Email contact"
              >
                <i className="fas fa-envelope social-icon social-email" />
                <div className="social-info">
                  <span className="social-label">Email</span>
                  <span className="social-handle">Get in touch</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="footer-built">
            Crafted with{" "}
            <i className="fas fa-heart heart-icon" aria-hidden="true" />{" "}
            using React &amp; SCSS
          </p>
          <button
            onClick={scrollToTop}
            className="back-to-top"
            aria-label="Scroll back to top"
          >
            <i className="fas fa-arrow-up" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
