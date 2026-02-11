import { useState } from "react";
import "./Services.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Chat from "../../components/Chat/Chat";
import { Link } from "react-router-dom";

const Services = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  const whatsappNumber = "5524981058194";
  const message = "Olá! Gostaria de saber mais sobre as soluções da Facilita AI";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const services = [
    {
      title: "LIA – Assistente de IA no WhatsApp",
      subtitle: "Nunca perca um lead novamente",
      description: "LIA é um assistente de IA powered by GPT-4o que vive no WhatsApp, atendendo seus leads 24/7 com conversas naturais personalizadas para seu negócio.",
      outcomes: [
        "Resposta instantânea a cada consulta",
        "Qualificação automática de leads",
        "Transição suave para atendimento humano"
      ],
      deliverables: [
        "Configuração personalizada do GPT-4o",
        "Integração com WhatsApp Business",
        "Treinamento específico para seu setor",
        "Dashboard de análise de conversas"
      ],
      timeline: "2-3 semanas",
      bestFit: "Ideal para negócios que recebem muitas consultas via WhatsApp e querem capturar todos os leads sem perder oportunidades."
    },
    {
      title: "Website Multi-page",
      subtitle: "Sua marca com presença digital premium",
      description: "Websites sofisticados, modernos e orientados à conversão que posicionam sua marca com autoridade e geram demanda de forma consistente. Não fazemos sites institucionais genéricos—criamos máquinas de conversão disfarçadas de design premium.",
      outcomes: [
        "Site que converte visitantes em leads qualificados",
        "Carregamento ultrarrápido e responsivo",
        "SEO otimizado para ranquear no Google",
        "Design que transmite credibilidade e autoridade"
      ],
      deliverables: [
        "Design personalizado e moderno",
        "Páginas essenciais (Home, Serviços, Sobre, Blog, Contato)",
        "Sistema de blog integrado",
        "Formulários de contato e captura",
        "Integração com Google Analytics",
        "Otimização de performance e SEO"
      ],
      timeline: "3-4 semanas",
      bestFit: "Perfeito para empresas que precisam de presença digital profissional, querem gerar autoridade no mercado e capturar leads de forma consistente."
    },
    {
      title: "Software Personalizado",
      subtitle: "Construa exatamente o que seu negócio precisa",
      description: "Desde aplicações web até ferramentas internas, construímos software sob medida que se encaixa perfeitamente nos seus processos e se integra de forma fluida aos seus sistemas existentes.",
      outcomes: [
        "Solução 100% adaptada aos seus processos",
        "Arquitetura escalável e moderna",
        "Design responsivo para qualquer dispositivo",
        "Propriedade total do código"
      ],
      deliverables: [
        "Análise de requisitos e processos",
        "Design de interface e experiência",
        "Desenvolvimento full-stack",
        "Testes e garantia de qualidade",
        "Deploy e treinamento da equipe"
      ],
      timeline: "6-12 semanas",
      bestFit: "Para empresas com processos únicos que soluções prontas não conseguem atender, ou que precisam de integrações complexas entre sistemas."
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
              Escolha o que você precisa. Nós cuidamos da <span className="text-gradient-purple">construção</span>.
            </h1>
            <p className="services-hero-subtitle">
              Serviços modulares para empresas que buscam velocidade, clareza e resultados.
            </p>
          </div>
        </section>

        {/* Deep Dive Section */}
        <section className="services-deep-dive">
          <div className="services-deep-dive-container">
            <div className="deep-dive-header">
              <h2 className="deep-dive-title">Mergulho Profundo nos Serviços</h2>
              <p className="deep-dive-subtitle">
                Expanda cada serviço para ver: Resultados / Entregas / Prazo / Fit
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
                          <h4 className="detail-title">Resultados</h4>
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
                          <h4 className="detail-title">Entregas</h4>
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
                          <span className="meta-label">Prazo</span>
                          <span className="meta-value">{service.timeline}</span>
                        </div>
                        <div className="meta-item meta-item--wide">
                          <span className="meta-label">Para Quem Serve</span>
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
            <h2 className="services-cta-title">Não sabe por onde começar?</h2>
            <p className="services-cta-subtitle">
              Vamos mapear seus processos atuais, identificar gargalos e recomendar a solução ideal.
            </p>
            <Link
              to="/contact"
              className="cta-primary"
            >
              Agende uma Conversa
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <Chat />
    </>
  );
};

export default Services;
