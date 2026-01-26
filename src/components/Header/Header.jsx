import { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../images/Logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle cross-page scrolling from state
  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
      // Clean up state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

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

  const handleNavClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      scrollToSection(sectionId);
    }
  };

  // Check if current route is active
  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Calendly link for discovery calls
  const calendlyLink = "https://calendly.com/facilitaai/discovery";

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="header-container">
        <div className="header-logo">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="logo-button" aria-label="Go to home">
            <img src={logo} alt="Facilita AI Logo" className="logo-image" />
            <span className="logo-text">Facilita AI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${isActive("/") && location.pathname === "/" ? "active" : ""}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className={`nav-link ${isActive("/services") ? "active" : ""}`}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className={`nav-link ${isActive("/blog") ? "active" : ""}`}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Language Selector */}
        <div className="language-selector">
          <button className="lang-button" aria-label="Change language">
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
            Book a Discovery Call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-button ${isMenuOpen ? "mobile-menu-button--open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Navigation menu"
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
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="mobile-nav-link"
              >
                Home
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className="mobile-nav-link"
              >
                Services
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="mobile-nav-link"
              >
                Blog
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="mobile-nav-link"
              >
                About
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mobile-nav-link"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="mobile-nav-cta">
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mobile-cta-button"
            >
              Book a Discovery Call
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
