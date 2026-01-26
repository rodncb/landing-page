import "./CaseStudies.css";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Eyebrow Studio",
      result: "Saved 15h/week",
      badge: "LIA",
      badgeColor: "purple"
    },
    {
      title: "Real Estate",
      result: "+32% response speed",
      badge: "LIA",
      badgeColor: "purple"
    },
    {
      title: "Premium Gym",
      result: "Real-time BI dashboard",
      badge: "Custom",
      badgeColor: "orange"
    },
    {
      title: "Services",
      result: "-40% reporting time",
      badge: "Custom",
      badgeColor: "orange"
    },
    {
      title: "Digital Products",
      result: "Full integration",
      badge: "API + Website",
      badgeColor: "purple"
    },
    {
      title: "Consulting",
      result: "Organized pipeline",
      badge: "Metrics",
      badgeColor: "orange"
    }
  ];

  return (
    <section className="case-studies-section">
      <div className="case-studies-container">
        <div className="case-studies-header">
          <h2 className="case-studies-title">
            Proven results <span className="text-gradient-purple">across industries</span>
          </h2>
          <p className="case-studies-subtitle">
            Real metrics from real businesses using our automation and BI solutions.
          </p>
        </div>

        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <div key={index} className="case-study-card">
              <div className={`case-study-badge case-study-badge--${study.badgeColor}`}>
                {study.badge}
              </div>
              <h3 className="case-study-title">{study.title}</h3>
              <p className="case-study-result">{study.result}</p>
            </div>
          ))}
        </div>

        <div className="case-studies-cta">
          <Link to="/blog" className="case-studies-link">
            View all case studies
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
