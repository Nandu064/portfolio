import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { useInView } from "react-intersection-observer";
import { summary, highlights, personalInfo } from "../../data/portfolio";
import Button from "../shared/Button/Button";
import "./About.scss";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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

  return (
    <section
      id="about"
      className={`about-section section ${inView ? "in-view" : ""}`}
      ref={ref}
    >
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title animate-on-scroll">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="section-subtitle animate-on-scroll">
              Passionate about creating scalable solutions that make a
              difference
            </p>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="about-content animate-slide-left">
              <h3 className="about-headline">{summary.opening}</h3>

              <div className="about-highlights">
                {summary.highlights.slice(0, 4).map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    <i className="fas fa-check-circle highlight-icon"></i>
                    <p>{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="about-actions">
                <Button
                  variant="primary"
                  size="default"
                  onClick={() => scrollToSection("experience")}
                >
                  View Experience
                </Button>
                <Button
                  variant="outline"
                  size="default"
                  href="/Harish_Yerraguntla_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="about-visual animate-slide-right">
              <div className="tech-arsenal">
                <h4 className="arsenal-title">Core Tech Stack</h4>
                <div className="arsenal-overview">
                  <p className="arsenal-text">{summary.coreStack}</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <div className="metrics-section animate-on-scroll">
              <h3 className="metrics-title text-center mb-4">
                Impact by the <span className="text-gradient">Numbers</span>
              </h3>

              <Row>
                {highlights.map((category, index) => (
                  <Col lg={3} md={6} key={index} className="mb-4">
                    <Card className="metric-card card-custom hover-lift">
                      <CardBody>
                        <h5 className="metric-category">{category.category}</h5>
                        <ul className="metric-list">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="metric-item">
                              <i className="fas fa-arrow-up metric-arrow"></i>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={12} className="text-center">
            <div className="about-cta animate-on-scroll">
              <h3 className="cta-title">Ready to work together?</h3>
              <p className="cta-description">
                I'm always interested in new opportunities and exciting
                projects. Let's build something amazing together!
              </p>

              <div className="cta-contact">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn-primary btn-lg me-3"
                >
                  <i className="fas fa-envelope me-2"></i>
                  Send Email
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline btn-lg"
                >
                  <i className="fab fa-linkedin me-2"></i>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
