import { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../images/Logo.png";
import { ContactFormModal } from "../features/ContactForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                onClick={() => scrollToSection("sobre")}
                className="nav-link"
              >
                Sobre
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="nav-link"
              >
                Cases
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
          <button onClick={() => setIsModalOpen(true)} className="cta-button">
            Iniciar Projeto
          </button>
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
                onClick={() => scrollToSection("sobre")}
                className="mobile-nav-link"
              >
                <span className="mobile-nav-icon">👥</span>
                Sobre
              </button>
            </li>
            <li className="mobile-nav-item">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="mobile-nav-link"
              >
                <span className="mobile-nav-icon">💼</span>
                Cases
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
            <button
              onClick={() => {
                setIsModalOpen(true);
                setIsMenuOpen(false);
              }}
              className="mobile-cta-button"
            >
              <span className="mobile-nav-icon">💬</span>
              Iniciar Projeto
            </button>
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

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
};

export default Header;
