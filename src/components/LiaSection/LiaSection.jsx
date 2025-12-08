import "./LiaSection.css";
import { Bot, Mic, MessageCircle, TrendingUp, Link as LinkIcon, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const LiaSection = () => {
  const features = [
    {
      icon: <Mic className="feature-icon" />,
      title: "Transcrição de Áudios",
      description: "LIA converte áudios em texto em segundos. Você entende tudo rapidamente e responde no tempo certo, sem ruído e sem perda de contexto."
    },
    {
      icon: <MessageCircle className="feature-icon" />,
      title: "Conversação Natural",
      description: "IA treinada para compreender contexto e responder como um humano. Atendimento inteligente, rápido e disponível o tempo todo."
    },
    {
      icon: <TrendingUp className="feature-icon" />,
      title: "Qualificação Automática",
      description: "LIA identifica intenção, urgência e interesse do cliente. Leads quentes são priorizados automaticamente para sua equipe."
    },
    {
      icon: <LinkIcon className="feature-icon" />,
      title: "Integrações com CRM",
      description: "Cada conversa vira um lead organizado no CRM. Funil completo, histórico salvo e gestão muito mais eficiente"
    },
    {
      icon: <Bot className="feature-icon" />,
      title: "Personalização Total",
      description: "Ajuste linguagem, fluxo e vocabulário para a realidade do seu negócio. LIA fala exatamente como sua marca."
    },
    {
      icon: <Clock className="feature-icon" />,
      title: "Disponível 24/7",
      description: "Atendimento contínuo, mesmo fora do horário comercial. LIA trabalha enquanto sua equipe descansa."
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
            Atenda e qualifique leads automaticamente, 24 horas por dia, no WhatsApp que seu cliente já usa. Mais agilidade, menos perdas e vendas todos os dias.
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
