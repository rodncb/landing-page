import "./About.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Chat from "../../components/Chat/Chat";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Header />
      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-container about-hero-container--centered">
            <div className="about-hero-content about-hero-content--full">
              <h1 className="about-hero-title">
                Sobre a{" "}
                <span className="text-gradient-purple">Facilita AI</span>
              </h1>
              <p className="about-hero-subtitle">
                A Facilita AI nasceu de uma ideia simples e poderosa: tecnologia não deveria complicar o seu dia a dia, e sim destravar crescimento.
              </p>
              <p className="about-hero-subtitle">
                Por isso, mais do que desenvolver software, atuamos como parceiros estratégicos de transformação digital, com foco em impacto real, mensurável e sustentável.
              </p>
              <p className="about-hero-highlight">
                Não entregamos apenas código. Entregamos tempo, eficiência e clareza operacional.
              </p>
              <p className="about-hero-subtitle">
                Combinamos engenharia de software, inteligência artificial e design estratégico para criar soluções que realmente funcionam no dia a dia do seu negócio.
              </p>
            </div>
          </div>
        </section>

        {/* Nossas Raízes e Evolução */}
        <section className="about-history">
          <div className="about-section-container">
            <h2 className="about-section-title">Nossas Raízes e Evolução</h2>
            <div className="about-text-block">
              <p>
                A história da Facilita AI começou com uma observação atenta do mercado. Percebemos que, apesar da abundância de ferramentas digitais disponíveis, muitas empresas ainda operavam de maneira fragmentada. Dados ficavam presos em planilhas isoladas, sistemas não conversavam entre si e o potencial humano era desperdiçado em tarefas manuais que poderiam ser automatizadas.
              </p>
              <p>
                O projeto teve origem no encontro de duas visões complementares: a profundidade técnica da programação e a visão estratégica do design e da comunicação. Os fundadores identificaram que o mercado estava cheio de soluções genéricas, mas carecia de personalização. O problema que queriam resolver era claro: eliminar o "caos digital" e criar fluxos de trabalho fluídos e inteligentes.
              </p>
              <p>
                Desde os primeiros projetos até o momento atual, a Facilita AI evoluiu rapidamente. O que começou como consultoria técnica transformou-se em um hub de soluções avançadas, onde utilizamos as mais recentes tecnologias de Inteligência Artificial para resolver dores antigas de negócios de diversos setores.
              </p>
            </div>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="about-mission-section">
          <div className="about-section-container">
            <h2 className="about-section-title">Missão, Visão e Valores</h2>
            <p className="about-section-intro">
              Nossa filosofia é pautada na entrega de valor real. Não utilizamos tecnologia por vaidade, mas por necessidade e resultado.
            </p>

            <div className="mission-cards">
              <div className="mission-card">
                <h3 className="mission-card-title">Missão</h3>
                <p>
                  Simplificar a complexidade tecnológica para empresas, transformando processos manuais em sistemas eficientes e inteligentes que geram lucro e qualidade de vida para as equipes.
                </p>
              </div>

              <div className="mission-card">
                <h3 className="mission-card-title">Visão</h3>
                <p>
                  Ser a referência nacional em implementação prática de Inteligência Artificial e automação para o setor de serviços e varejo, reconhecida pela capacidade de resolver problemas complexos com soluções elegantes.
                </p>
              </div>
            </div>

            <div className="values-grid values-grid--two">
              <div className="value-card">
                <h3 className="value-title">Inovação com propósito</h3>
                <p className="value-description">
                  Só implementamos novidades tecnológicas se elas trouxerem benefício real ao negócio.
                </p>
              </div>
              <div className="value-card">
                <h3 className="value-title">Transparência</h3>
                <p className="value-description">
                  Falamos a língua do cliente, sem "tiques" técnicos desnecessários.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quem Faz Acontecer */}
        <section className="about-team">
          <div className="about-section-container">
            <h2 className="about-section-title">Quem Faz Acontecer</h2>
            <p className="about-section-intro">
              A força da Facilita AI reside na união de competências distintas que se completam. A liderança da empresa combina rigor lógico com pensamento criativo.
            </p>

            <div className="team-grid">
              <div className="team-card">
                <div className="team-avatar">
                  <span>RN</span>
                </div>
                <h3 className="team-name">Rodrigo Nonato</h3>
                <p className="team-role">Full Stack Developer & AI Engineer</p>
                <p className="team-bio">
                  A mente técnica por trás das nossas soluções. Como desenvolvedor full stack, domina desde a arquitetura de sistemas e APIs até interfaces modernas e responsivas. Sua especialização em Inteligência Artificial permite integrar automações inteligentes em cada camada da aplicação, transformando problemas complexos em soluções funcionais e escaláveis.
                </p>
                <a
                  href="https://github.com/rodrigobezerra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-link"
                >
                  Ver projetos no GitHub
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>

              <div className="team-card">
                <div className="team-avatar team-avatar--orange">
                  <span>TR</span>
                </div>
                <h3 className="team-name">Tales Rocha</h3>
                <p className="team-role">Artista Visual e Consultor em TI</p>
                <p className="team-bio">
                  Traz a visão humanizada e estratégica para a tecnologia. Com vasta experiência em audiovisual, design e estratégias digitais, ele garante que a tecnologia não seja apenas funcional, mas também intuitiva e alinhada aos objetivos de negócio do cliente. Sua atuação como consultor em TI permite enxergar além do código, focando na experiência do usuário e na aplicação criativa das ferramentas para alavancar marcas e otimizar a comunicação interna e externa.
                </p>
                <a
                  href="https://linkedin.com/in/talesrocha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-link"
                >
                  Conectar no LinkedIn
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="about-cta-container">
            <h2 className="about-cta-title">Vamos Transformar Seu Negócio?</h2>
            <p className="about-cta-subtitle">
              Se sua empresa deseja implementar IA, automações ou software personalizado, fale com a Facilita AI.
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

export default About;
