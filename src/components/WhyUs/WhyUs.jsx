import "./WhyUs.css";

const WhyUs = () => {
  return (
    <section id="portfolio" className="why-us">
      <div className="why-us-container">
        <div className="why-us-header">
          <div className="why-us-title">
            <h2>
              Por que escolher a<br />
              <span className="highlight-text">FacilitaAI</span> ?
            </h2>
          </div>
        </div>

        <div className="why-us-features">
          <div className="feature-card">
            <div className="feature-number">01</div>
            <div className="feature-content">
              <h3>
                Expertise em IA
                <br />e Inovação
              </h3>
              <p>
                Nossa equipe especializada combina anos de experiência em
                desenvolvimento com as mais avançadas tecnologias de IA,
                entregando soluções que realmente transformam negócios.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-number">02</div>
            <div className="feature-content">
              <h3>
                Soluções Sob
                <br />
                Medida
              </h3>
              <p>
                Cada projeto é único. Desenvolvemos software personalizado que
                se adapta perfeitamente às necessidades específicas do seu
                negócio, garantindo máxima eficiência e ROI.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-number">03</div>
            <div className="feature-content">
              <h3>
                Suporte Completo
                <br />e Contínuo
              </h3>
              <p>
                Não apenas desenvolvemos, mas acompanhamos toda a jornada.
                Oferecemos suporte técnico especializado, atualizações
                constantes e evolução contínua das suas soluções.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-number">04</div>
            <div className="feature-content">
              <h3>
                Resultados
                <br />
                Mensuráveis
              </h3>
              <p>
                Focamos em entregar valor real. Todas as nossas soluções são
                projetadas para gerar resultados concretos e mensuráveis, com
                métricas claras de sucesso e impacto no seu negócio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
