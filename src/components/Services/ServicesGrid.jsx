import "./ServicesGrid.css";
import { Link } from "react-router-dom";

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      title: "LIA - Assistente WhatsApp",
      description:
        "Assistente inteligente no WhatsApp que atende leads 24/7, qualifica automaticamente e nunca perde uma venda.",
      icon: "🤖",
      features: [
        "Transcrição de Áudios",
        "Conversação Natural",
        "Qualificação de Leads",
        "Integração com CRM",
      ],
      color: "blue",
      category: "lia",
    },
    {
      id: 2,
      title: "CRM - Gestão de Vendas",
      description:
        "Sistema completo de gestão de relacionamento com clientes para organizar e impulsionar suas vendas.",
      icon: "📊",
      features: [
        "Pipeline Visual",
        "Gestão de Leads",
        "Propostas e Contratos",
        "Análise de Resultados",
      ],
      color: "red",
      category: "crm",
    },
    {
      id: 3,
      title: "Softwares Personalizados",
      description:
        "Desenvolvimento de software sob medida com inteligência artificial para resolver os desafios específicos do seu negócio.",
      icon: "💻",
      features: [
        "Desenvolvimento Full-Stack",
        "IA Integrada",
        "Arquitetura Escalável",
        "Suporte Técnico",
      ],
      color: "green",
      category: "software",
    },
  ];

  return (
    <section id="servicos" className="services-section">
      <div className="services-container">
        {/* Floating particles for visual enhancement */}
        <div className="services-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
        </div>

        <div className="services-header">
          <h2 className="services-title">
            Nossos <span className="highlight-text">Serviços</span>
          </h2>
          <p className="services-subtitle">
            Soluções completas em tecnologia e IA para transformar seu negócio
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-card service-card--${service.color}`}
            >
              <div className="service-card-inner">
                <div className="service-icon">
                  <span className="service-emoji">{service.icon}</span>
                </div>

                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>

                  <ul className="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index} className="service-feature">
                        <span className="feature-check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-cta">
                  <Link to="/waitlist" className="service-button">
                    Saiba Mais
                    <span className="button-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
