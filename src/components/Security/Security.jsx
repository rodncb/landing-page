import "./Security.css";
import securityImage from "../../images/ImgsLPFacilitaAiImg4.png";

const Security = () => {
  return (
    <section className="security">
      <div className="security-container">
        <div className="security-image-container">
          <img
            src={securityImage}
            alt="Sala de servidores de datacenter"
            className="security-image"
          />
        </div>
        <div className="security-content">
          <h2>
            MAIS
            <br />
            <span>SEGURANÇA</span>
          </h2>
          <div className="security-text">
            <p>
              Na Facilita AI, entendemos que a segurança dos dados é essencial
              para nossos clientes e parceiros. Por isso, toda a nossa
              infraestrutura de automações baseadas em LLMs (Modelos de
              Linguagem de Grande Escala) opera em um servidor próprio,
              localizado em nossa nuvem privada e protegido por sistemas
              avançados de criptografia.
            </p>
            <p>
              Dessa forma, garantimos que as informações de nossos clientes não
              transitem por plataformas de terceiros e permaneçam em total
              sigilo, sob nossa supervisão e controle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
