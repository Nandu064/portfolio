import React, { useState, useMemo } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import { useInView } from "react-intersection-observer";
import { technicalSkills } from "../../data/portfolio";
import { resumeQA } from "../ChatBot/resumeData";
import "./Skills.scss";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("languages");
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  // Function to extract skills from resumeData dynamically
  const extractSkillsFromResumeData = useMemo(() => {
    const skillsEntry = resumeQA.find(
      (entry) =>
        entry.category === "skills" && entry.keywords.includes("skills")
    );

    if (!skillsEntry || !skillsEntry.answer) {
      return null;
    }

    const answer = skillsEntry.answer;
    const skills = {
      frontend: [],
      backend: [],
      databases: [],
      realtime: [],
      devops: [],
      testing: [],
    };

    // Parse the structured answer to extract skills
    if (answer.includes("**Frontend:**")) {
      const frontendMatch = answer.match(/\*\*Frontend:\*\*\s*([^*]+)/);
      if (frontendMatch) {
        skills.frontend = frontendMatch[1].split(",").map((s) => s.trim());
      }
    }

    if (answer.includes("**Backend:**")) {
      const backendMatch = answer.match(/\*\*Backend:\*\*\s*([^*]+)/);
      if (backendMatch) {
        skills.backend = backendMatch[1].split(",").map((s) => s.trim());
      }
    }

    if (answer.includes("**Databases:**")) {
      const databasesMatch = answer.match(/\*\*Databases:\*\*\s*([^*]+)/);
      if (databasesMatch) {
        skills.databases = databasesMatch[1].split(",").map((s) => s.trim());
      }
    }

    if (answer.includes("**Real-time:**")) {
      const realtimeMatch = answer.match(/\*\*Real-time:\*\*\s*([^*]+)/);
      if (realtimeMatch) {
        skills.realtime = realtimeMatch[1].split(",").map((s) => s.trim());
      }
    }

    if (answer.includes("**DevOps:**")) {
      const devopsMatch = answer.match(/\*\*DevOps:\*\*\s*([^*]+)/);
      if (devopsMatch) {
        skills.devops = devopsMatch[1].split(",").map((s) => s.trim());
      }
    }

    if (answer.includes("**Testing:**")) {
      const testingMatch = answer.match(/\*\*Testing:\*\*\s*([^*]+)/);
      if (testingMatch) {
        skills.testing = testingMatch[1].split(",").map((s) => s.trim());
      }
    }

    return skills;
  }, []);

  // Generate skill categories dynamically
  const skillCategories = useMemo(() => {
    const resumeSkills = extractSkillsFromResumeData;

    return [
      {
        id: "languages",
        label: "Languages",
        icon: "fas fa-code",
        data: technicalSkills.languages,
      },
      {
        id: "frontend",
        label: "Frontend",
        icon: "fas fa-laptop-code",
        data:
          resumeSkills?.frontend.length > 0
            ? resumeSkills.frontend
            : technicalSkills.frontend,
      },
      {
        id: "backend",
        label: "Backend",
        icon: "fas fa-server",
        data:
          resumeSkills?.backend.length > 0
            ? resumeSkills.backend
            : technicalSkills.backend,
      },
      {
        id: "databases",
        label: "Databases",
        icon: "fas fa-database",
        data:
          resumeSkills?.databases.length > 0
            ? resumeSkills.databases
            : technicalSkills.databases,
      },
      {
        id: "cloudDevOps",
        label: "Cloud & DevOps",
        icon: "fas fa-cloud",
        data:
          resumeSkills?.devops.length > 0
            ? resumeSkills.devops
            : technicalSkills.cloudDevOps,
      },
      {
        id: "dataVisualization",
        label: "Data Visualization",
        icon: "fas fa-chart-line",
        data: technicalSkills.dataVisualization,
      },
      {
        id: "testing",
        label: "Testing",
        icon: "fas fa-vial",
        data:
          resumeSkills?.testing.length > 0
            ? resumeSkills.testing
            : ["Jest", "Cypress", "Vitest", "React Testing Library"],
      },
      {
        id: "realtime",
        label: "Real-time & Streaming",
        icon: "fas fa-bolt",
        data:
          resumeSkills?.realtime.length > 0
            ? resumeSkills.realtime
            : ["Kafka", "WebSockets", "Socket.io"],
      },
    ];
  }, [extractSkillsFromResumeData]);

  const getSkillProficiency = (skill) => {
    // Define proficiency levels based on the skill name
    const expertSkills = [
      "React.js",
      "JavaScript",
      "Python",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
    ];
    const advancedSkills = [
      "Next.js",
      "Vue.js",
      "TypeScript",
      "Django",
      "FastAPI",
      "Express.js",
      "Redux Toolkit",
      "AWS",
    ];
    const intermediateSkills = [
      "React Native",
      "Nuxt.js",
      "Flask",
      "GraphQL",
      "Docker",
      "Kubernetes",
    ];

    if (expertSkills.some((expertSkill) => skill.includes(expertSkill))) {
      return { level: "Expert", percentage: 95, color: "#10b981" };
    } else if (advancedSkills.some((advSkill) => skill.includes(advSkill))) {
      return { level: "Advanced", percentage: 85, color: "#0891b2" };
    } else if (
      intermediateSkills.some((intSkill) => skill.includes(intSkill))
    ) {
      return { level: "Intermediate", percentage: 75, color: "#3b82f6" };
    } else {
      return { level: "Proficient", percentage: 65, color: "#8b5cf6" };
    }
  };

  const renderTabContent = (categoryData) => {
    if (!Array.isArray(categoryData)) return null;

    return (
      <div className="tab-content-wrapper">
        <div className="skills-grid">
          {categoryData.map((skill, index) => {
            const proficiency = getSkillProficiency(skill);
            return (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill}</span>
                  <span
                    className="skill-level"
                    style={{ color: proficiency.color }}
                  >
                    {proficiency.level}
                  </span>
                </div>
                <div className="skill-progress">
                  <div
                    className="skill-bar"
                    style={{
                      width: `${proficiency.percentage}%`,
                      backgroundColor: proficiency.color,
                    }}
                  ></div>
                </div>
                <div className="skill-percentage">
                  {proficiency.percentage}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section
      id="skills"
      className={`skills-section section ${inView ? "in-view" : ""}`}
      ref={ref}
    >
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title animate-on-scroll">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="section-subtitle animate-on-scroll">
              Comprehensive expertise across the full technology stack
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <div className="skills-container animate-on-scroll">
              {/* Languages Overview */}
              <div className="languages-overview mb-5">
                <h3 className="overview-title">Programming Languages</h3>
                <div className="languages-grid">
                  {technicalSkills.languages.map((language, index) => {
                    const proficiency = getSkillProficiency(language);
                    return (
                      <div key={index} className="language-item hover-lift">
                        <div className="language-info">
                          <span className="language-name">{language}</span>
                          <div className="language-progress">
                            <div
                              className="language-bar"
                              style={{
                                width: `${proficiency.percentage}%`,
                                backgroundColor: proficiency.color,
                              }}
                            ></div>
                          </div>
                          <span className="language-percentage">
                            {proficiency.percentage}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Skill Categories Tabs */}
              <div className="skills-tabs">
                <Nav tabs className="custom-tabs">
                  {skillCategories.map((category) => (
                    <NavItem key={category.id}>
                      <NavLink
                        className={`custom-tab ${
                          activeTab === category.id ? "active" : ""
                        }`}
                        onClick={() => toggle(category.id)}
                      >
                        <i className={`${category.icon} tab-icon`}></i>
                        <span className="tab-label">{category.label}</span>
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>

                <TabContent
                  activeTab={activeTab}
                  className="custom-tab-content"
                >
                  {skillCategories.map((category) => (
                    <TabPane key={category.id} tabId={category.id}>
                      <Card className="skills-card card-custom">
                        <CardBody>{renderTabContent(category.data)}</CardBody>
                      </Card>
                    </TabPane>
                  ))}
                </TabContent>
              </div>
            </div>
          </Col>
        </Row>

        {/* Skills Summary */}
        <Row className="mt-5">
          <Col lg={12}>
            <div className="skills-summary animate-on-scroll">
              <h3 className="summary-title text-center mb-4">
                <span className="text-gradient">Expertise Highlights</span>
              </h3>
              <Row>
                <Col md={6} lg={3} className="mb-4">
                  <Card className="summary-card card-custom text-center hover-lift">
                    <CardBody>
                      <i className="fas fa-code summary-icon"></i>
                      <h4 className="summary-metric">6+</h4>
                      <p className="summary-label">Programming Languages</p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Card className="summary-card card-custom text-center hover-lift">
                    <CardBody>
                      <i className="fas fa-layer-group summary-icon"></i>
                      <h4 className="summary-metric">20+</h4>
                      <p className="summary-label">Frameworks & Libraries</p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Card className="summary-card card-custom text-center hover-lift">
                    <CardBody>
                      <i className="fas fa-cloud summary-icon"></i>
                      <h4 className="summary-metric">10+</h4>
                      <p className="summary-label">Cloud Services</p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <Card className="summary-card card-custom text-center hover-lift">
                    <CardBody>
                      <i className="fas fa-tools summary-icon"></i>
                      <h4 className="summary-metric">15+</h4>
                      <p className="summary-label">Development Tools</p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
