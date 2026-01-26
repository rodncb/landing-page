import { useState } from "react";
import "./Services.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Chat from "../../components/Chat/Chat";

const Services = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  const whatsappNumber = "5524981058194";
  const message = "Hi! I'd like to learn more about Facilita AI solutions";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  const calendlyLink = "https://calendly.com/facilitaai/discovery";

  const services = [
    {
      title: "LIA – WhatsApp AI Assistant",
      subtitle: "Never lose a lead again",
      description: "LIA is a GPT-4o powered AI assistant that lives in WhatsApp, handling your leads 24/7 with human-like conversations tailored to your business.",
      outcomes: [
        "Instant response to every inquiry",
        "Automatic lead qualification",
        "Seamless handoff to human agents"
      ],
      deliverables: [
        "Custom GPT-4o configuration",
        "WhatsApp Business integration",
        "Industry-specific training",
        "Conversation analytics dashboard"
      ],
      timeline: "2-3 weeks",
      bestFit: "Ideal for businesses receiving high WhatsApp inquiry volume who want to capture every lead without missing opportunities."
    },
    {
      title: "Multi-page Website",
      subtitle: "Premium digital presence for your brand",
      description: "Sophisticated, modern, conversion-oriented websites that position your brand with authority and generate consistent demand. We don't build generic corporate sites—we create conversion machines disguised as premium design.",
      outcomes: [
        "Website that converts visitors into qualified leads",
        "Lightning-fast loading and responsive",
        "SEO-optimized to rank on Google",
        "Design that conveys credibility and authority"
      ],
      deliverables: [
        "Custom modern design",
        "Essential pages (Home, Services, About, Blog, Contact)",
        "Integrated blog system",
        "Contact and lead capture forms",
        "Google Analytics integration",
        "Performance and SEO optimization"
      ],
      timeline: "3-4 weeks",
      bestFit: "Perfect for businesses that need professional digital presence, want to establish market authority, and capture leads consistently."
    },
    {
      title: "Custom Software",
      subtitle: "Build exactly what your business needs",
      description: "From web applications to internal tools, we build custom software that fits your exact requirements and integrates seamlessly with your existing systems.",
      outcomes: [
        "Solution 100% tailored to your processes",
        "Scalable and modern architecture",
        "Responsive design for any device",
        "Full ownership of the code"
      ],
      deliverables: [
        "Requirements and process analysis",
        "Interface and experience design",
        "Full-stack development",
        "Testing and quality assurance",
        "Deployment and team training"
      ],
      timeline: "6-12 weeks",
      bestFit: "For businesses with unique processes that off-the-shelf solutions can't address, or that need complex system integrations."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  return (
    <>
      <Header />
      <main className="services-page">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="services-hero-container">
            <h1 className="services-hero-title">
              Pick what you need. We'll handle the build.
            </h1>
            <p className="services-hero-subtitle">
              Modular services for businesses seeking speed, clarity, and results.
            </p>
          </div>
        </section>

        {/* Deep Dive Section */}
        <section className="services-deep-dive">
          <div className="services-deep-dive-container">
            <div className="deep-dive-header">
              <h2 className="deep-dive-title">Deep Dive into Services</h2>
              <p className="deep-dive-subtitle">
                Expand each service to see: Outcomes / Deliverables / Timeline / Fit
              </p>
            </div>

            <div className="accordions">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`accordion ${openAccordion === index ? "accordion--open" : ""}`}
                >
                  <button
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={openAccordion === index}
                  >
                    <div className="accordion-title-section">
                      <h3 className="accordion-title">{service.title}</h3>
                      <p className="accordion-subtitle">{service.subtitle}</p>
                    </div>
                    <div className="accordion-icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points={openAccordion === index ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
                      </svg>
                    </div>
                  </button>

                  <div className="accordion-content">
                    <div className="accordion-body">
                      <p className="service-description">{service.description}</p>

                      <div className="service-details-grid">
                        <div className="detail-card">
                          <h4 className="detail-title">Outcomes</h4>
                          <ul className="detail-list">
                            {service.outcomes.map((outcome, i) => (
                              <li key={i}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                {outcome}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="detail-card">
                          <h4 className="detail-title">Deliverables</h4>
                          <ul className="detail-list">
                            {service.deliverables.map((deliverable, i) => (
                              <li key={i}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="service-meta">
                        <div className="meta-item">
                          <span className="meta-label">Timeline</span>
                          <span className="meta-value">{service.timeline}</span>
                        </div>
                        <div className="meta-item meta-item--wide">
                          <span className="meta-label">Best Fit</span>
                          <span className="meta-value">{service.bestFit}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="services-cta">
          <div className="services-cta-container">
            <h2 className="services-cta-title">Not sure what you need?</h2>
            <p className="services-cta-subtitle">
              Let's map your current processes, identify bottlenecks, and recommend the right solution.
            </p>
            <a
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary"
            >
              Book a Discovery Call
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <Chat />
    </>
  );
};

export default Services;
