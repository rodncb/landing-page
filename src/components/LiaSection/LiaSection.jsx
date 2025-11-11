import "./LiaSection.css";
import { Bot, Mic, MessageCircle, TrendingUp, Link as LinkIcon, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const LiaSection = () => {
  const features = [
    {
      icon: <Mic className="feature-icon" />,
      title: "Transcrição de Áudios",
      description: "Cliente mandou áudio? LIA transcreve em segundos. Você lê rapidinho e responde na hora certa."
    },
    {
      icon: <MessageCircle className="feature-icon" />,
      title: "Conversação Natural",
      description: "IA que entende contexto e responde como humano. Atendimento 24/7 sem perder a qualidade."
    },
    {
      icon: <TrendingUp className="feature-icon" />,
      title: "Qualificação Automática",
      description: "LIA identifica leads quentes e prioriza automaticamente. Foque apenas nos clientes prontos."
    },
    {
      icon: <LinkIcon className="feature-icon" />,
      title: "Integração com CRM",
      description: "Conversas viram leads no CRM automaticamente. Gestão completa em um só lugar."
    },
    {
      icon: <Bot className="feature-icon" />,
      title: "Personalização Total",
      description: "Adapte LIA para o vocabulário do seu negócio. Atendimento alinhado com sua marca."
    },
    {
      icon: <Clock className="feature-icon" />,
      title: "Disponível 24/7",
      description: "Nunca perca um lead por falta de horário. LIA trabalha enquanto você descansa."
    }
  ];

  return (
    <section id="lia-section" className="lia-section">
      <div className="lia-container">
        <div className="lia-header">
          <div className="lia-badge">
            <Bot className="badge-icon" />
            <span>NOVIDADE</span>
          </div>
          <h2 className="lia-title">
            LIA - Sua Assistente Inteligente no WhatsApp
          </h2>
          <p className="lia-subtitle">
            Atenda leads 24/7, qualifique automaticamente e nunca perca uma venda.
            Tudo pelo WhatsApp que seu cliente já usa.
          </p>
        </div>

        <div className="lia-features">
          {features.map((feature, index) => (
            <div key={index} className="lia-feature-card">
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lia-cta">
          <Link to="/waitlist" className="lia-button">
            Entrar na Lista de Espera
          </Link>
          <p className="lia-note">
            Seja um dos primeiros a ter acesso quando lançarmos!
          </p>
        </div>
      </div>
    </section>
  );
};

export default LiaSection;
