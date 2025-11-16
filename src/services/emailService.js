// emailService.js
import emailjs from "@emailjs/browser";

// Configuration
const EMAILJS_CONFIG = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_pk0g50f",
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_gra95nt",
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "94j86dFrmuFLaus9l",
};

// Initialize EmailJS
let isInitialized = false;

const initializeEmailJS = () => {
  if (!isInitialized) {
    try {
      emailjs.init(EMAILJS_CONFIG.publicKey);
      isInitialized = true;
      console.log("EmailJS initialized successfully");
    } catch (error) {
      console.error("EmailJS initialization failed:", error);
      throw new Error("Failed to initialize EmailJS");
    }
  }
};

export const sendPortfolioEmail = async (formData) => {
  const { name, email, subject, message } = formData;

  // Validate required fields
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    throw new Error("Please fill in all required fields");
  }

  // Validate configuration
  if (
    !EMAILJS_CONFIG.serviceId ||
    !EMAILJS_CONFIG.templateId ||
    !EMAILJS_CONFIG.publicKey
  ) {
    console.error("EmailJS configuration missing:", EMAILJS_CONFIG);
    throw new Error("Email service is not properly configured");
  }

  // Initialize EmailJS
  try {
    initializeEmailJS();
  } catch (error) {
    throw new Error("Failed to initialize email service: " + error.message);
  }

  // Prepare template parameters
  const templateParams = {
    from_name: name.trim(),
    from_email: email.trim(),
    to_name: "Harish Yerraguntla",
    subject: subject.trim() || "New portfolio message",
    message: message.trim(),
    reply_to: email.trim(),
    // Additional metadata
    timestamp: new Date().toLocaleString(),
    user_agent: navigator.userAgent,
  };

  console.log("Sending email with configuration:", {
    serviceId: EMAILJS_CONFIG.serviceId,
    templateId: EMAILJS_CONFIG.templateId,
    publicKeyLength: EMAILJS_CONFIG.publicKey.length,
  });

  try {
    // Send email using EmailJS
    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    console.log("Email sent successfully:", result);
    return result;
  } catch (error) {
    console.error("EmailJS send error:", error);

    // Provide more specific error messages
    if (error.status === 400) {
      throw new Error("Invalid email data. Please check your form inputs.");
    } else if (error.status === 401 || error.status === 403) {
      throw new Error(
        "Email service authentication failed. Please check your EmailJS credentials."
      );
    } else if (error.status === 422) {
      throw new Error(
        "Email template error. Please check your EmailJS template configuration."
      );
    } else if (
      error.name === "NetworkError" ||
      error.message.includes("network")
    ) {
      throw new Error(
        "Network error. Please check your internet connection and try again."
      );
    } else if (error.status === 500) {
      throw new Error(
        "Email service is temporarily unavailable. Please try again later."
      );
    } else {
      throw new Error(
        "Failed to send email: " + (error.message || "Unknown error")
      );
    }
  }
};

const emailService = { sendPortfolioEmail };
export default emailService;
