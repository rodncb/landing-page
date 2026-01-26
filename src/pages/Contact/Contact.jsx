import { useState } from "react";
import "./Contact.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Chat from "../../components/Chat/Chat";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    privacy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const GOOGLE_SHEETS_WEBHOOK = 'https://script.google.com/macros/s/AKfycbwVPgolYoIHR330l7RDU3KX0kySgNXzQWcbGRgEYH4fz3KzdNnBAkBZ-Gq0V093rwTxyw/exec';

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submission = {
      ...formData,
      timestamp: new Date().toISOString(),
      source: 'contact_form'
    };

    try {
      await fetch(GOOGLE_SHEETS_WEBHOOK, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submission)
      });
      console.log('Contact form sent to Google Sheets');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending to Google Sheets:', error);
      setIsSubmitted(true);
    }

    setIsSubmitting(false);
  };

  const processSteps = [
    {
      number: "1",
      title: "Submit Your Request",
      description: "Fill out the form with your project details and requirements."
    },
    {
      number: "2",
      title: "We Review",
      description: "Our team analyzes your request within 24 hours."
    },
    {
      number: "3",
      title: "Discovery Call",
      description: "We schedule a 30-minute call to understand your needs."
    },
    {
      number: "4",
      title: "Custom Proposal",
      description: "You receive a detailed proposal with scope and investment."
    }
  ];

  if (isSubmitted) {
    return (
      <>
        <Header />
        <main className="contact-page">
          <section className="contact-hero">
            <div className="contact-hero-container">
              <div className="success-message">
                <div className="success-icon">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h1 className="success-title">Message Received!</h1>
                <p className="success-text">
                  Thank you for reaching out. We'll get back to you within 24 hours with clear next steps.
                </p>
                <a href="/" className="success-button">
                  Back to Home
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <Chat />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="contact-hero-container">
            <h1 className="contact-hero-title">
              Let's Build{" "}
              <span className="text-gradient-purple">Something Great</span>
            </h1>
            <p className="contact-hero-subtitle">
              Tell us about your project. We'll reply within 24 hours with clear next steps.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="contact-content">
          <div className="contact-container">
            <div className="contact-grid">
              {/* Form Column */}
              <div className="contact-form-wrapper">
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">What are you interested in? *</label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select an option</option>
                      <option value="LIA - WhatsApp AI Assistant">LIA - WhatsApp AI Assistant</option>
                      <option value="Multi-page Website">Multi-page Website</option>
                      <option value="Custom Software">Custom Software</option>
                      <option value="Process Automation">Process Automation</option>
                      <option value="System Integration">System Integration</option>
                      <option value="Consulting">Consulting</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Tell us about your project *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Describe what you need, your current challenges, and what success looks like for you..."
                    ></textarea>
                  </div>

                  <div className="form-checkbox">
                    <label>
                      <input
                        type="checkbox"
                        name="privacy"
                        required
                        checked={formData.privacy}
                        onChange={handleChange}
                      />
                      <span>I agree to the collection and processing of my data according to the Privacy Policy.</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="submit-button"
                    disabled={isSubmitting || !formData.privacy}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </form>
              </div>

              {/* Info Column */}
              <div className="contact-info">
                <div className="info-header">
                  <h2 className="info-title">What Happens Next?</h2>
                  <p className="info-subtitle">Our simple 4-step process</p>
                </div>

                <div className="process-steps">
                  {processSteps.map((step, index) => (
                    <div key={index} className="process-step">
                      <div className="step-number">{step.number}</div>
                      <div className="step-content">
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Commitment Box */}
                <div className="commitment-box">
                  <div className="commitment-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Our Commitment</h3>
                    <p className="commitment-text">
                      We respect your privacy. Your information is safe with us and will only be used to contact you about your project.
                    </p>
                  </div>
                </div>

                {/* Contact Channels */}
                <div className="contact-channels">
                  <h3 className="channels-title">Prefer Direct Contact?</h3>
                  <div className="channel-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <a href="mailto:contato@facilitaai.com.br">contato@facilitaai.com.br</a>
                  </div>
                  <div className="channel-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <a href="https://wa.me/5524981058194" target="_blank" rel="noopener noreferrer">+55 (24) 98105-8194</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chat />
    </>
  );
};

export default Contact;
