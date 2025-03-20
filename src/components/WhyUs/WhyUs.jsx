import "./WhyUs.css";
import logo from "../../images/Logo.png";

const WhyUs = () => {
  return (
    <section className="why-us">
      <div className="why-us-container">
        <div className="why-us-header">
          <div className="why-us-title">
            <h2>
              Porque utilizar a<br />
              FacilitaAI ?
            </h2>
          </div>
          <div className="why-us-logo">
            <img src={logo} alt="FacilitaAI Logo" className="logo-image" />
          </div>
        </div>

        <div className="why-us-features">
          <div className="feature-card">
            <div className="feature-number">01</div>
            <div className="feature-content">
              <h3>
                Interação simples
                <br />e intuitiva
              </h3>
              <p>
                Dê ações e receba feedback do seu agente virtual diretamente no
                seu app de mensagens. Economize tempo e mantenha o controle de
                tudo em um só lugar.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-number">02</div>
            <div className="feature-content">
              <h3>
                Integrações
                <br />
                poderosas
              </h3>
              <p>
                Conecte-se mídias sociais, emails, calendários, mecanismos de
                pesquisa e muito mais para automatizar desde a prospecção até o
                agendamento de reuniões.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-number">03</div>
            <div className="feature-content">
              <h3>
                Evolução
                <br />
                Contínua
              </h3>
              <p>
                Seu agente virtual aprende com você, faz perguntas relevantes e
                propõe melhorias constantes. Assim, sua autoridade online cresce
                de forma estratégica e sustentável.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
