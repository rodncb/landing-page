import { useState } from "react";
import "./Hero.css";
import Button from "../common/Button";
import { ContactFormModal } from "../features/ContactForm";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const whatsappNumber = "5524981058194";
  const message = "Olá! Gostaria de conhecer as soluções da Facilita.AI";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <section id="hero" className="hero">
        {/* Video Background - Placeholder for now */}
        <div className="hero-video-container">
          <div className="hero-video-placeholder">
            {/* Animated background pattern as placeholder */}
            <div className="video-pattern"></div>
          </div>
          <div className="hero-video-overlay"></div>
        </div>

        {/* Floating Mockups */}
        <div className="hero-mockups">
          <div className="mockup mockup-1">
            <div className="mockup-screen">
              <div className="mockup-content webapp">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="mockup-title">Software</div>
                </div>
                <div className="mockup-body">
                  <div className="ai-chat-bubble">
                    <span className="ai-icon">🤖</span>
                    <span>Analisando dados...</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mockup mockup-2">
            <div className="mockup-screen">
              <div className="mockup-content agent">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="mockup-title">Agente IA</div>
                </div>
                <div className="mockup-body">
                  <div className="chat-messages">
                    <div className="message user">Como posso ajudar?</div>
                    <div className="message ai">
                      Processando sua solicitação...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mockup mockup-3">
            <div className="mockup-screen">
              <div className="mockup-content automation">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="mockup-title">Automação IA</div>
                </div>
                <div className="mockup-body">
                  <div className="automation-flow">
                    <div className="flow-step active">
                      <span className="step-icon">⚡</span>
                      <span>Processando</span>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step">
                      <span className="step-icon">✅</span>
                      <span>Concluído</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Tech Elements */}
        <div className="tech-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-main">
              <h1 className="hero-title">
                Desenvolvemos softwares <br />
                inteligentes que facilita <br />
                o crescimento da <br />
                <span className="highlight-text">sua empresa</span>
              </h1>

              <p className="hero-description">
                Nossa expertise em desenvolvimento de software e IA permite
                criar soluções sob medida que automatizam e facilitam os
                processos da sua empresa.
              </p>

              <div className="hero-features">
                <div className="feature-item">
                  <span className="feature-icon">⚡</span>
                  <span>Automação Inteligente</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🎯</span>
                  <span>Resultados Mensuráveis</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🔒</span>
                  <span>Segurança Garantida</span>
                </div>
              </div>

              <div className="hero-cta">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  variant="primary"
                  size="lg"
                  className="cta-primary"
                >
                  Começar Meu Projeto
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Hero;
