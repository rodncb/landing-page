import "./Hero.css";
import logo from "../../images/Logo.png";

const Hero = () => {
  const whatsappNumber = "5524981058194";
  const message = "Olá! Gostaria de saber mais sobre a Facilita.AI";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <div className="top-banner"></div>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="logo-container">
              <img src={logo} alt="Facilita.ai Logo" className="logo" />
              <span className="logo-text">FACILITA.AI</span>
            </div>
            <div className="title-container">
              <h1>SOLUÇÕES INTELIGENTES QUE FACILITAM O SEU DIA A DIA.</h1>
            </div>
            <p className="subtitle">
              AUTOMATIZAMOS AS SUAS ROTINAS NA INTERNET
            </p>
            <div className="hero-cta">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                SAIBA MAIS
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
