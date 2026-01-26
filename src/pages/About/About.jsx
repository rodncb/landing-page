import "./About.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Chat from "../../components/Chat/Chat";

const About = () => {
  const calendlyLink = "https://calendly.com/facilitaai/discovery";

  const values = [
    {
      title: "Clarity",
      description: "We communicate in plain language. No jargon, no confusion—just clear expectations and transparent processes."
    },
    {
      title: "Craft",
      description: "Every line of code, every automation, every integration is built with care and attention to detail."
    },
    {
      title: "Speed",
      description: "We move fast without breaking things. Quick iterations, rapid deployment, immediate value."
    },
    {
      title: "Consistency",
      description: "Reliable systems that work 24/7. Predictable results you can count on every single time."
    },
    {
      title: "Innovation",
      description: "We stay ahead of the curve, bringing the latest AI and automation technologies to your business."
    }
  ];

  const techStack = [
    "React",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "OpenAI",
    "WhatsApp API",
    "Make",
    "Zapier",
    "Google Cloud",
    "MongoDB"
  ];

  return (
    <>
      <Header />
      <main className="about-page">
        {/* Hero Section - 2 columns */}
        <section className="about-hero">
          <div className="about-hero-container">
            <div className="about-hero-content">
              <h1 className="about-hero-title">
                Build. Automate.{" "}
                <span className="text-gradient-purple">Scale.</span>
              </h1>
              <p className="about-hero-subtitle">
                We help companies optimize operations, automate repetitive tasks, and build intelligent systems that drive growth. Our team combines technical expertise with business understanding to deliver solutions that actually work.
              </p>
            </div>
            <div className="about-hero-image">
              <div className="hero-image-placeholder">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span>Team Photo</span>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values">
          <div className="about-values-container">
            <div className="values-header">
              <h2 className="values-title">Our Values</h2>
              <p className="values-subtitle">
                The principles that guide everything we do
              </p>
            </div>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="about-tech">
          <div className="about-tech-container">
            <div className="tech-header">
              <h2 className="tech-title">Tech Stack</h2>
              <p className="tech-subtitle">
                The tools and technologies we use to build your solutions
              </p>
            </div>
            <div className="tech-grid">
              {techStack.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="about-mission">
          <div className="about-mission-container">
            <div className="mission-box">
              <h2 className="mission-title">Our Mission</h2>
              <p className="mission-text">
                Our mission is to build intelligent systems that simplify complexity, automate the mundane, and free teams to focus on what matters most—growing their business and serving their customers.
              </p>
              <p className="mission-highlight">
                We build technology that works{" "}
                <span className="text-gradient-purple">for you</span>.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="about-cta-container">
            <h2 className="about-cta-title">Ready to Transform Your Business?</h2>
            <p className="about-cta-subtitle">
              Let's discuss how we can help you automate, optimize, and scale.
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

export default About;
