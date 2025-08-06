import "./About.css";
import aboutImage from "../../images/Bloco2Img1.png";
import aboutImage2 from "../../images/Bloco2Img2.png";

const About = () => {
  return (
    <section id="sobre" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2>
            Conheça a<br />
            FacilitaAI
          </h2>
          <div className="about-text">
            <p>
              A Facilita AI nasceu com a missão de tornar o processo de expansão
              digital simples, eficiente e acessível a profissionais de todas as
              áreas.
            </p>
            <p>
              Nossa plataforma integra fluxos de trabalho automatizados e
              tecnologia de Inteligência Artificial para que você se posicione
              como referência no seu mercado — mesmo sem ter experiência em
              marketing ou produção de conteúdo.
            </p>
          </div>
          <div className="about-icon">
            <img
              src={aboutImage2}
              alt="Ícone de Inteligência Artificial"
              className="ai-icon"
            />
          </div>
        </div>

        <div className="about-image-container">
          <div className="about-image">
            <img
              src={aboutImage}
              alt="Pessoas usando a plataforma FacilitaAI"
              className="main-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
