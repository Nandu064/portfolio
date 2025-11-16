import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  Alert,
} from "reactstrap";
import { useInView } from "react-intersection-observer";
import { sendPortfolioEmail } from "../../services/emailService";
import { personalInfo } from "../../data/portfolio";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState({
    show: false,
    type: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.name.trim())) {
      newErrors.name =
        "Name can only contain letters, spaces, hyphens, and apostrophes";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Clear any form-level alerts when user starts typing
    if (showAlert.show) {
      setShowAlert({ show: false, type: "", message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear any existing alerts
    setShowAlert({ show: false, type: "", message: "" });

    // Validate form before submission
    if (!validateForm()) {
      setShowAlert({
        show: true,
        type: "warning",
        message: "Please fix the errors above before submitting.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using the email service
      await sendPortfolioEmail(formData);

      console.log("Email sent successfully");

      // Success feedback
      setShowAlert({
        show: true,
        type: "success",
        message:
          "🎉 Thank you for your message! I'll get back to you within 24 hours.",
      });

      // Clear form on success
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Email sending failed:", error);

      // Use the error message from the service, or provide a fallback
      const errorMessage =
        error.message ||
        "Sorry, there was an error sending your message. Please try again.";

      setShowAlert({
        show: true,
        type: "danger",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
      // Auto-hide alert after 7 seconds
      setTimeout(() => {
        setShowAlert({ show: false, type: "", message: "" });
      }, 7000);
    }
  };

  const contactMethods = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      description: "Send me an email for project inquiries",
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
      description: "Call me for immediate discussion",
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      value: "Connect with me",
      link: personalInfo.linkedin,
      description: "Let's connect professionally",
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      value: "View my code",
      link: personalInfo.github,
      description: "Check out my repositories",
    },
  ];

  return (
    <section
      id="contact"
      className={`contact-section section ${inView ? "in-view" : ""}`}
      ref={ref}
    >
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title animate-on-scroll">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="section-subtitle animate-on-scroll">
              Ready to work together? Let's discuss your next project
            </p>
          </Col>
        </Row>

        <Row className="align-items-start">
          <Col lg={8} className="mb-5 mb-lg-0">
            <Card className="contact-form-card card-custom animate-slide-left">
              <CardBody>
                <h3 className="form-title">
                  <i className="fas fa-paper-plane form-icon"></i>
                  Send Me a Message
                </h3>
                <p className="form-description">
                  Have a project in mind? I'd love to hear about it. Fill out
                  the form below and I'll get back to you as soon as possible.
                </p>

                {showAlert.show && (
                  <Alert color={showAlert.type} className="mb-4">
                    {showAlert.message}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="name" className="form-label">
                          <i className="fas fa-user label-icon"></i>
                          Your Name *
                        </Label>
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`form-input ${
                            errors.name ? "is-invalid" : ""
                          }`}
                        />
                        {errors.name && (
                          <div className="invalid-feedback">{errors.name}</div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="email" className="form-label">
                          <i className="fas fa-envelope label-icon"></i>
                          Email Address *
                        </Label>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`form-input ${
                            errors.email ? "is-invalid" : ""
                          }`}
                        />
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup>
                    <Label for="subject" className="form-label">
                      <i className="fas fa-tag label-icon"></i>
                      Subject *
                    </Label>
                    <Input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`form-input ${
                        errors.subject ? "is-invalid" : ""
                      }`}
                    />
                    {errors.subject && (
                      <div className="invalid-feedback">{errors.subject}</div>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label for="message" className="form-label">
                      <i className="fas fa-comment label-icon"></i>
                      Message *
                    </Label>
                    <Input
                      type="textarea"
                      name="message"
                      id="message"
                      rows="6"
                      placeholder="Tell me about your project or ask me anything..."
                      value={formData.message}
                      onChange={handleInputChange}
                      style={{ minHeight: "120px", resize: "vertical" }}
                      className={`form-input ${
                        errors.message ? "is-invalid" : ""
                      }`}
                    />
                    {errors.message && (
                      <div className="invalid-feedback">{errors.message}</div>
                    )}
                  </FormGroup>

                  <div className="form-actions">
                    <Button
                      type="submit"
                      className="btn-primary btn-lg submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin me-2"></i>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane me-2"></i>
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>

          <Col lg={4}>
            <div className="contact-info animate-slide-right">
              <h3 className="info-title">
                <i className="fas fa-address-card info-icon"></i>
                Contact Information
              </h3>
              <p className="info-description">
                Ready to start a conversation? Here are the best ways to reach
                me:
              </p>

              <div className="contact-methods">
                {contactMethods.map((method, index) => (
                  <Card
                    key={index}
                    className="contact-method-card card-custom hover-lift"
                  >
                    <CardBody>
                      <div className="method-header">
                        <div className="method-icon">
                          <i className={method.icon}></i>
                        </div>
                        <div className="method-info">
                          <h5 className="method-title">{method.title}</h5>
                          <p className="method-description">
                            {method.description}
                          </p>
                        </div>
                      </div>
                      <div className="method-action">
                        <a
                          href={method.link}
                          target={
                            method.link.startsWith("http") ? "_blank" : "_self"
                          }
                          rel={
                            method.link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="method-link"
                        >
                          {method.value}
                          <i className="fas fa-external-link-alt method-link-icon"></i>
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
