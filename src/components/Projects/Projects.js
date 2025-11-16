import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  Nav,
  NavItem,
  NavLink,
  Button,
  Badge,
} from "reactstrap";
import { useInView } from "react-intersection-observer";
import { projects } from "../../data/portfolio";
import "./Projects.scss";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories = ["All", "Full-Stack", "Frontend", "Backend", "DevOps"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  return (
    <section
      id="projects"
      className={`projects-section section ${inView ? "in-view" : ""}`}
      ref={ref}
    >
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title animate-on-scroll">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="section-subtitle animate-on-scroll">
              Showcase of 18+ full-stack applications with measurable business
              impact
            </p>
          </Col>
        </Row>

        {/* Project Filters */}
        <Row className="mb-5">
          <Col lg={12}>
            <div className="filter-container animate-on-scroll">
              <Nav className="project-filters">
                {categories.map((category) => (
                  <NavItem key={category}>
                    <NavLink
                      className={`filter-btn ${
                        activeFilter === category ? "active" : ""
                      }`}
                      onClick={() => handleFilterChange(category)}
                    >
                      {category}
                      <span className="filter-count">
                        {category === "All"
                          ? projects.length
                          : projects.filter((p) => p.category === category)
                              .length}
                      </span>
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
            </div>
          </Col>
        </Row>

        {/* Projects Grid */}
        <Row>
          <Col lg={12}>
            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`project-item animate-on-scroll ${
                    inView ? "in-view" : ""
                  }`}
                >
                  <Card className="project-card card-custom hover-lift">
                    <div className="project-image-container">
                      <CardImg
                        top
                        src={`https://via.placeholder.com/400x250/0891b2/ffffff?text=${encodeURIComponent(
                          project.title
                        )}`}
                        alt={project.title}
                        className="project-image"
                      />
                      <div className="project-overlay">
                        <div className="overlay-content">
                          <div className="project-links">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-outline btn-sm"
                              aria-label="View Source Code"
                            >
                              <i className="fab fa-github"></i>
                              Code
                            </a>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary btn-sm"
                              aria-label="View Live Demo"
                            >
                              <i className="fas fa-external-link-alt"></i>
                              Demo
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="project-category-badge">
                        <Badge
                          className={`category-badge ${project.category.toLowerCase()}`}
                        >
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    <CardBody className="project-content">
                      <div className="project-header">
                        <h3 className="project-title">{project.title}</h3>
                        <div className="project-metrics">
                          <span className="metrics-text">
                            <i className="fas fa-chart-line metrics-icon"></i>
                            {project.metrics}
                          </span>
                        </div>
                      </div>

                      <p className="project-description">
                        {project.description}
                      </p>

                      <div className="project-tech-stack">
                        <h5 className="tech-title">
                          <i className="fas fa-code tech-icon"></i>
                          Tech Stack:
                        </h5>
                        <div className="tech-badges">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} className="tech-badge">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="project-actions">
                        <Button
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline btn-sm me-2"
                        >
                          <i className="fab fa-github me-1"></i>
                          Source
                        </Button>
                        <Button
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary btn-sm"
                        >
                          <i className="fas fa-external-link-alt me-1"></i>
                          Live Demo
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Projects Summary */}
        <Row className="mt-5">
          <Col lg={12}>
            <Card className="projects-summary card-custom animate-on-scroll">
              <CardBody>
                <h3 className="summary-title text-center mb-4">
                  <span className="text-gradient">
                    Project Portfolio Highlights
                  </span>
                </h3>

                <Row className="text-center">
                  <Col md={3} className="mb-3">
                    <div className="summary-stat">
                      <h4 className="stat-number text-gradient">18+</h4>
                      <p className="stat-label">Total Projects</p>
                    </div>
                  </Col>
                  <Col md={3} className="mb-3">
                    <div className="summary-stat">
                      <h4 className="stat-number text-gradient">14</h4>
                      <p className="stat-label">MERN Applications</p>
                    </div>
                  </Col>
                  <Col md={3} className="mb-3">
                    <div className="summary-stat">
                      <h4 className="stat-number text-gradient">2M+</h4>
                      <p className="stat-label">Users Served</p>
                    </div>
                  </Col>
                  <Col md={3} className="mb-3">
                    <div className="summary-stat">
                      <h4 className="stat-number text-gradient">99.9%</h4>
                      <p className="stat-label">Uptime Achieved</p>
                    </div>
                  </Col>
                </Row>

                <div className="project-highlights">
                  <h4 className="highlights-title">Portfolio Achievements:</h4>
                  <Row>
                    <Col md={6}>
                      <div className="highlight-list">
                        <div className="highlight-item">
                          <i className="fas fa-rocket highlight-icon"></i>
                          <span>
                            Built real-time IoT platform processing 500+ device
                            streams
                          </span>
                        </div>
                        <div className="highlight-item">
                          <i className="fas fa-users highlight-icon"></i>
                          <span>
                            Created e-commerce solutions serving 5K+ monthly
                            users
                          </span>
                        </div>
                        <div className="highlight-item">
                          <i className="fas fa-chart-line highlight-icon"></i>
                          <span>
                            Achieved 90+ Lighthouse scores across all
                            applications
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="highlight-list">
                        <div className="highlight-item">
                          <i className="fas fa-database highlight-icon"></i>
                          <span>
                            Processed 1.6M+ daily records with ETL pipelines
                          </span>
                        </div>
                        <div className="highlight-item">
                          <i className="fas fa-shield-alt highlight-icon"></i>
                          <span>
                            Implemented secure payment processing for 2.5K+
                            transactions
                          </span>
                        </div>
                        <div className="highlight-item">
                          <i className="fas fa-mobile-alt highlight-icon"></i>
                          <span>
                            Delivered responsive designs with &lt;3s load times
                          </span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="cta-section text-center mt-4">
                  <h4 className="cta-title">Want to see more projects?</h4>
                  <p className="cta-description">
                    Check out my GitHub for additional projects and
                    contributions
                  </p>
                  <Button
                    href="https://github.com/nandu064"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary btn-lg"
                  >
                    <i className="fab fa-github me-2"></i>
                    Visit GitHub Profile
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
