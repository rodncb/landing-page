import "./ServicesGrid.css";

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      title: "Software & Apps",
      description:
        "Aplicações e sistemas modernos potencializados por inteligência artificial para acelerar seu negócio digital.",
      icon: "🚀",
      features: [
        "Desenvolvimento Full-Stack",
        "IA Integrada Nativa",
        "Interface Moderna",
        "Arquitetura Escalável",
      ],
      color: "blue",
      category: "software",
    },
    {
      id: 2,
      title: "Agentes Inteligentes",
      description:
        "Assistentes virtuais e chatbots personalizados que automatizam atendimento e processos complexos.",
      icon: "🤖",
      features: [
        "IA Conversacional",
        "Integração API",
        "Aprendizado Contínuo",
        "Atendimento 24/7",
      ],
      color: "red",
      category: "agent",
    },
    {
      id: 3,
      title: "Automações IA",
      description:
        "Processos automatizados com inteligência artificial que eliminam tarefas repetitivas e aumentam produtividade.",
      icon: "⚡",
      features: [
        "Fluxos Inteligentes",
        "Integração Sistemas",
        "Monitoramento 24/7",
        "ROI Mensurável",
      ],
      color: "green",
      category: "automation",
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
                  <button className="service-button">
                    Saiba Mais
                    <span className="button-arrow">→</span>
                  </button>
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
