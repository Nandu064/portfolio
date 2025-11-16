import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { useInView } from "react-intersection-observer";
import { ReactTyped as Typed } from "react-typed";
import { personalInfo, summary } from "../../data/portfolio";
import Button from "../shared/Button/Button";
import "./Hero.scss";

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#0891b2";
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = ((100 - distance) / 100) * 0.2;
            ctx.strokeStyle = "#0891b2";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      id="home"
      className={`hero-section ${inView ? "in-view" : ""}`}
      ref={ref}
    >
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-shapes">
        <div className="bg-shape shape-1 floating"></div>
        <div className="bg-shape shape-2 floating"></div>
        <div className="bg-shape shape-3 pulse"></div>
      </div>

      <Container className="hero-container">
        <Row className="min-vh-100 align-items-center">
          <Col lg={8} className="hero-content">
            <div className="hero-text animate-on-scroll">
              <p className="hero-greeting animate-slide-left">
                Hi there! 👋 I'm
              </p>

              <h1 className="hero-name animate-slide-up">
                <span className="text-gradient">{personalInfo.name}</span>
              </h1>

              <h2 className="hero-title animate-slide-up">
                <Typed
                  strings={[
                    "Full-Stack Software Engineer",
                    "React/Next.js Specialist",
                    "Python Developer",
                    "Cloud Architecture Expert",
                    "Performance Optimization Specialist",
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  backDelay={2000}
                  loop
                  className="typed-text"
                />
              </h2>

              <p className="hero-location animate-fade-in">
                📍 {personalInfo.location}
              </p>

              <p className="hero-description animate-fade-in">
                {summary.headline}
              </p>

              <div className="hero-metrics animate-slide-up">
                <div className="metric">
                  <span className="metric-number text-gradient">5+</span>
                  <span className="metric-label">Years Experience</span>
                </div>
                <div className="metric">
                  <span className="metric-number text-gradient">18+</span>
                  <span className="metric-label">Projects Delivered</span>
                </div>
                <div className="metric">
                  <span className="metric-number text-gradient">2M+</span>
                  <span className="metric-label">Users Served</span>
                </div>
                <div className="metric">
                  <span className="metric-number text-gradient">99.9%</span>
                  <span className="metric-label">Uptime</span>
                </div>
              </div>

              <div className="hero-actions animate-bounce-in">
                <Button
                  href="/Harish_Yerraguntla_Resume.pdf"
                  download="Harish_Yerraguntla_Resume.pdf"
                  variant="primary"
                  size="default"
                >
                  <i className="fas fa-download"></i>
                  Download Resume
                </Button>
                <Button
                  variant="outline"
                  size="default"
                  onClick={() => scrollToSection("contact")}
                >
                  Get In Touch
                </Button>
              </div>

              <div className="hero-social animate-fade-in">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub Profile"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn Profile"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="social-link"
                  aria-label="Email Contact"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </Col>

          <Col lg={4} className="hero-visual">
            <div className="hero-avatar animate-bounce-in">
              <div className="avatar-container">
                <div className="avatar-bg"></div>
                <div className="avatar-content">
                  <div className="code-snippet">
                    <div className="code-line">
                      <span className="code-keyword">const</span>{" "}
                      <span className="code-variable">developer</span>{" "}
                      <span className="code-operator">=</span> {"{"}
                    </div>
                    <div className="code-line code-indent">
                      <span className="code-property">name</span>
                      <span className="code-operator">:</span>{" "}
                      <span className="code-string">'{personalInfo.name}'</span>
                      ,
                    </div>
                    <div className="code-line code-indent">
                      <span className="code-property">skills</span>
                      <span className="code-operator">:</span> [
                    </div>
                    <div className="code-line code-indent-2">
                      <span className="code-string">'React'</span>,
                    </div>
                    <div className="code-line code-indent-2">
                      <span className="code-string">'Python'</span>,
                    </div>
                    <div className="code-line code-indent-2">
                      <span className="code-string">'Node.js'</span>
                    </div>
                    <div className="code-line code-indent">],</div>
                    <div className="code-line code-indent">
                      <span className="code-property">passion</span>
                      <span className="code-operator">:</span>{" "}
                      <span className="code-string">
                        'Building Amazing Apps'
                      </span>
                    </div>
                    <div className="code-line">{"}"}</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className="scroll-indicator animate-bounce-in">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <p>Scroll Down</p>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
