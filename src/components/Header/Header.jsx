import { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../images/Logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { label: "Início", path: "/" },
    { label: "Serviços", path: "/services" },
    { label: "Blog", path: "/blog" },
    { label: "Sobre", path: "/about" },
    { label: "Contato", path: "/contact" },
  ];

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="header-container">
        <div className="header-logo">
          <Link to="/" className="logo-button" aria-label="Ir para início">
            <img src={logo} alt="Facilita AI Logo" className="logo-image" />
            <span className="logo-text">Facilita AI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-menu">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${isActive(item.path) ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Language Selector */}
        <div className="language-selector">
          <button className="lang-button" aria-label="Mudar idioma">
            <span className="lang-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </span>
            <span className="lang-code">PT</span>
          </button>
        </div>

        {/* CTA Button */}
        <div className="header-cta">
          <Link to="/contact" className="cta-button">
            Agende uma Conversa
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-button ${isMenuOpen ? "mobile-menu-button--open" : ""}`}
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
            {navItems.map((item) => (
              <li key={item.path} className="mobile-nav-item">
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="mobile-nav-link"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mobile-nav-cta">
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mobile-cta-button"
            >
              Agende uma Conversa
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
