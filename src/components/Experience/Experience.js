import React from "react";
import { Container, Row, Col, Card, CardBody, Badge } from "reactstrap";
import { useInView } from "react-intersection-observer";
import { experience } from "../../data/portfolio";
import "./Experience.scss";

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const formatDate = (dateString) => {
    if (dateString === "Present") return "Present";
    const [year, month] = dateString.split("-");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate + "-01");
    const end = endDate === "Present" ? new Date() : new Date(endDate + "-01");
    const diffTime = Math.abs(end - start);
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));

    if (diffMonths < 12) {
      return `${diffMonths} ${diffMonths === 1 ? "month" : "months"}`;
    } else {
      const years = Math.floor(diffMonths / 12);
      const months = diffMonths % 12;
      if (months === 0) {
        return `${years} ${years === 1 ? "year" : "years"}`;
      } else {
        return `${years}y ${months}m`;
      }
    }
  };

  return (
    <section
      id="experience"
      className={`experience-section section ${inView ? "in-view" : ""}`}
      ref={ref}
    >
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title animate-on-scroll">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="section-subtitle animate-on-scroll">
              5+ years of building scalable applications and leading technical
              initiatives
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <div className="timeline-container animate-on-scroll">
              <div className="timeline-line"></div>

              {experience.map((job, index) => (
                <div
                  key={job.id}
                  className={`timeline-item ${
                    index % 2 === 0 ? "left" : "right"
                  }`}
                >
                  <div className="timeline-marker">
                    <div className="timeline-dot">
                      <i className="fas fa-briefcase"></i>
                    </div>
                    <div className="timeline-pulse"></div>
                  </div>

                  <Card className="experience-card card-custom hover-lift">
                    <CardBody>
                      <div className="experience-header">
                        <div className="experience-title-section">
                          <h3 className="job-title">{job.position}</h3>
                          <h4 className="company-name">
                            <i className="fas fa-building company-icon"></i>
                            {job.company}
                          </h4>
                          <div className="job-meta">
                            <span className="job-location">
                              <i className="fas fa-map-marker-alt location-icon"></i>
                              {job.location}
                            </span>
                            <span className="job-duration">
                              <i className="fas fa-calendar-alt duration-icon"></i>
                              {formatDate(job.startDate)} -{" "}
                              {formatDate(job.endDate)}
                              <span className="duration-length">
                                ({calculateDuration(job.startDate, job.endDate)}
                                )
                              </span>
                            </span>
                            {job.current && (
                              <Badge color="primary" className="current-badge">
                                Current
                              </Badge>
                            )}
                          </div>
                          {(job.note || job.promotionNote) && (
                            <p className="job-note">
                              <i className="fas fa-info-circle note-icon"></i>
                              {job.promotionNote || job.note}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="experience-content">
                        <div className="job-description">
                          <h5 className="description-title">
                            Key Responsibilities & Achievements:
                          </h5>
                          <ul className="description-list">
                            {job.description
                              .slice(0, 4)
                              .map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="description-item"
                                >
                                  <i className="fas fa-chevron-right item-icon"></i>
                                  {item}
                                </li>
                              ))}
                          </ul>
                        </div>

                        <div className="technologies-section">
                          <h5 className="tech-title">
                            <i className="fas fa-code tech-icon"></i>
                            Technologies Used:
                          </h5>
                          <div className="tech-stack">
                            {job.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} className="tech-badge">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
