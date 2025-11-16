import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { useInView } from "react-intersection-observer";
import { education } from "../../data/portfolio";
import "./Education.scss";

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="education"
      className={`education-section section ${inView ? "in-view" : ""}`}
      ref={ref}
    >
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title animate-on-scroll">
              <span className="text-gradient">Education</span>
            </h2>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <div className="education-timeline animate-on-scroll">
              <div className="timeline-line"></div>

              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className={`education-item ${
                    index % 2 === 0 ? "left" : "right"
                  }`}
                >
                  <div className="timeline-marker">
                    <div className="timeline-dot">
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    <div className="timeline-pulse"></div>
                  </div>

                  <Card className="education-card card-custom hover-lift">
                    <CardBody>
                      <div className="education-header">
                        <h3 className="degree-title">{edu.degree}</h3>
                        <h4 className="institution-name">
                          <i className="fas fa-university institution-icon"></i>
                          {edu.institution}
                        </h4>
                        <div className="education-gpa">
                          <span className="gpa-label text-white">GPA:</span>
                          <span className="gpa-value text-white">
                            {edu.gpa}
                          </span>
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

export default Education;
