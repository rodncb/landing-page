import { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../images/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  // WhatsApp contact
  const whatsappNumber = "5524981058194";
  const message = "Olá! Gostaria de conhecer as soluções da Facilita.AI";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="header-container">
        <div className="header-logo">
          <button
            onClick={() => scrollToSection("hero")}
            className="logo-button"
            aria-label="Ir para o início"
          >
            <img src={logo} alt="Facilita.AI Logo" className="logo-image" />
            <span className="logo-text">
              FACILITA <span className="logo-ai">AI</span>
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <button
                onClick={() => scrollToSection("servicos")}
                className="nav-link"
              >
                Serviços
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => scrollToSection("lia-section")}
                className="nav-link"
              >
                LIA
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="nav-link"
              >
                Por que nós
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => scrollToSection("contato")}
                className="nav-link"
              >
                Contato
              </button>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="header-cta">
          <Link to="/waitlist" className="cta-button">
            Iniciar Projeto
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-button ${
            isMenuOpen ? "mobile-menu-button--open" : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu de navegação"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMenuOpen ? "mobile-nav--open" : ""}`}>
        <div className="mobile-nav-content">
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <button
                onClick={() => scrollToSection("servicos")}
                className="mobile-nav-link"
              >
                <span className="mobile-nav-icon">🚀</span>
                Serviços
              </button>
            </li>
            <li className="mobile-nav-item">
              <button
                onClick={() => scrollToSection("lia-section")}
                className="mobile-nav-link"
              >
                <span className="mobile-nav-icon">🤖</span>
                LIA
              </button>
            </li>
            <li className="mobile-nav-item">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="mobile-nav-link"
              >
                <span className="mobile-nav-icon">💼</span>
                Por que nós
              </button>
            </li>
            <li className="mobile-nav-item">
              <button
                onClick={() => scrollToSection("contato")}
                className="mobile-nav-link"
              >
                <span className="mobile-nav-icon">📞</span>
                Contato
              </button>
            </li>
          </ul>

          <div className="mobile-nav-cta">
            <Link
              to="/waitlist"
              onClick={() => setIsMenuOpen(false)}
              className="mobile-cta-button"
            >
              <span className="mobile-nav-icon">💬</span>
              Iniciar Projeto
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="mobile-nav-overlay"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;
