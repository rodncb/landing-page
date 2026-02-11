import "./CaseStudies.css";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Studio de Sobrancelhas",
      result: "15h/semana economizadas",
      badge: "LIA",
      badgeColor: "purple"
    },
    {
      title: "Imobiliária",
      result: "+32% velocidade de resposta",
      badge: "LIA",
      badgeColor: "purple"
    },
    {
      title: "Academia Premium",
      result: "Dashboard BI em tempo real",
      badge: "Custom",
      badgeColor: "orange"
    },
    {
      title: "Serviços",
      result: "-40% tempo de relatórios",
      badge: "Custom",
      badgeColor: "orange"
    },
    {
      title: "Produtos Digitais",
      result: "Integração completa",
      badge: "API + Website",
      badgeColor: "purple"
    },
    {
      title: "Consultoria",
      result: "Pipeline organizado",
      badge: "Website",
      badgeColor: "orange"
    }
  ];

  return (
    <section className="case-studies-section">
      <div className="case-studies-container">
        <div className="case-studies-header">
          <h2 className="case-studies-title">
            Resultados <span className="text-gradient-purple">comprovados</span>
          </h2>
          <p className="case-studies-subtitle">
            Empresas reais. Métricas reais. Crescimento real.
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

        {/* <div className="case-studies-cta">
          <Link to="/blog" className="case-studies-link">
            Ver todos os cases
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default CaseStudies;
