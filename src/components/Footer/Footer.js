import React from "react";
import { Container, Row, Col } from "reactstrap";
import { personalInfo } from "../../data/portfolio";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      icon: "fab fa-github",
      url: personalInfo.github,
      label: "GitHub",
    },
    {
      icon: "fab fa-linkedin",
      url: personalInfo.linkedin,
      label: "LinkedIn",
    },
    {
      icon: "fas fa-envelope",
      url: `mailto:${personalInfo.email}`,
      label: "Email",
    },
  ];

  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="footer-content">
              {/* Footer Header */}
              <div className="footer-header">
                <div className="footer-brand">
                  <h3 className="brand-name">
                    <span className="text-gradient">{personalInfo.name}</span>
                  </h3>
                  <p className="brand-tagline">
                    Full-Stack Software Engineer | React/Next.js Specialist
                  </p>
                </div>

                <button
                  onClick={scrollToTop}
                  className="scroll-top-btn btn-outline"
                  aria-label="Scroll to top"
                >
                  <i className="fas fa-arrow-up"></i>
                </button>
              </div>

              {/* Footer Main */}
              <div className="footer-main">
                <Row>
                  <Col md={4} className="mb-4 mb-md-0">
                    <div className="footer-section-content">
                      <h4 className="footer-section-title">Quick Links</h4>
                      <nav className="footer-nav">
                        <ul className="footer-nav-list">
                          {footerLinks.map((link) => (
                            <li key={link.id} className="footer-nav-item">
                              <button
                                onClick={() => scrollToSection(link.id)}
                                className="footer-nav-link"
                              >
                                {link.label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </Col>

                  <Col md={4} className="mb-4 mb-md-0">
                    <div className="footer-section-content">
                      <h4 className="footer-section-title">Contact Info</h4>
                      <div className="contact-info">
                        <div className="contact-item">
                          <i className="fas fa-envelope contact-icon"></i>
                          <a
                            href={`mailto:${personalInfo.email}`}
                            className="contact-link"
                          >
                            {personalInfo.email}
                          </a>
                        </div>
                        <div className="contact-item">
                          <i className="fas fa-phone contact-icon"></i>
                          <a
                            href={`tel:${personalInfo.phone}`}
                            className="contact-link"
                          >
                            {personalInfo.phone}
                          </a>
                        </div>
                        <div className="contact-item">
                          <i className="fas fa-map-marker-alt contact-icon"></i>
                          <span className="contact-text">
                            {personalInfo.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col md={4}>
                    <div className="footer-section-content">
                      <h4 className="footer-section-title">Let's Connect</h4>
                      <p className="connect-description">
                        Follow me on social media for updates on my latest
                        projects and tech insights.
                      </p>
                      <div className="social-links">
                        {socialLinks.map((social, index) => (
                          <a
                            key={index}
                            href={social.url}
                            target={
                              social.url.startsWith("http") ? "_blank" : "_self"
                            }
                            rel={
                              social.url.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="social-link"
                            aria-label={social.label}
                          >
                            <i className={social.icon}></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

              {/* Footer Bottom */}
              <div className="footer-bottom">
                <Row className="align-items-center">
                  <Col
                    md={6}
                    className="text-center text-md-start mb-3 mb-md-0"
                  >
                    <p className="copyright-text">
                      © {currentYear} {personalInfo.name}. All rights reserved.
                    </p>
                  </Col>
                  <Col md={6} className="text-center text-md-end">
                    <div className="footer-meta">
                      <span className="meta-item">
                        Built with <i className="fas fa-heart heart-icon"></i>{" "}
                        using React.js
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Background Elements */}
      <div className="footer-bg-elements">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
      </div>
    </footer>
  );
};

export default Footer;
