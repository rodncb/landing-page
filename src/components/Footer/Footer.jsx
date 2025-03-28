import "./Footer.css";
import logo from "../../images/Logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img
            src={logo}
            alt="Facilita.AI Logo"
            className="footer-logo-image"
          />
          <span>FACILITA.AI</span>
        </div>
        <div className="footer-links" style={{ marginTop: "auto" }}>
          <div className="footer-column">
            <h4>Produtos</h4>
            <ul>
              <li>Em breve</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Suporte</h4>
            <ul>
              <li>Comunidade</li>
              <li>Docs</li>
              <li>Contato</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Empresa</h4>
            <ul>
              <li>Blog</li>
              <li>Carreiras</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Termo de serviço</p>
        <p>Política de privacidade</p>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2025 Rodncb</p>
      </div>
    </footer>
  );
};

export default Footer;
