import "./ServicesGrid.css";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import imgLIA from "../../images/LIA_Service.webp";
import imgWebsite from "../../images/Multi-Page_Website.webp";
import imgSoftware from "../../images/custom_software.webp";

const ServicesGrid = () => {
  const products = [
    {
      id: 1,
      title: "LIA",
      subtitle: "Assistente de IA no WhatsApp",
      outcome: "Nunca perca um lead novamente.",
      bullets: ["Respostas 24/7", "Qualificação de leads", "Transferência para humanos"],
      link: "#lia-section",
      color: "purple",
      image: imgLIA
    },
    {
      id: 2,
      title: "Website Multi-page",
      subtitle: "Presença digital premium",
      outcome: "Site que converte visitantes em leads.",
      bullets: ["Design moderno", "SEO otimizado", "Blog integrado"],
      link: "/services",
      color: "orange",
      image: imgWebsite
    },
    {
      id: 3,
      title: "Software Personalizado",
      subtitle: "Construído para você",
      outcome: "Exatamente o que seu negócio precisa.",
      bullets: ["Integrações", "Portais", "Automação"],
      link: "/services",
      color: "purple",
      image: imgSoftware
    }
  ];

  return (
    <section id="products" className="products-section">
      <div className="products-container">
        <div className="products-header">
          <h2 className="products-title">
            Criados para resolver <span className="text-gradient-purple">problemas reais</span>
          </h2>
          <p className="products-subtitle">
            Escolha o que você precisa. Construímos sistemas que economizam tempo e aumentam receita.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className={`product-card product-card--${product.color}`}>
              <div className="product-mockup">
                <img src={product.image} alt={product.title} className="product-mockup-image" />
              </div>

              <div className="product-content">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-subtitle">{product.subtitle}</p>
                <p className={`product-outcome product-outcome--${product.color}`}>{product.outcome}</p>

                <ul className="product-bullets">
                  {product.bullets.map((bullet, index) => (
                    <li key={index} className="product-bullet">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <Link to={product.link} className={`product-link product-link--${product.color}`}>
                  Saiba mais
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
