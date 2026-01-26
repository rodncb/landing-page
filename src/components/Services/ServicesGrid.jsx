import "./ServicesGrid.css";

const ServicesGrid = () => {
  const products = [
    {
      id: 1,
      badge: "LIA",
      title: "WhatsApp AI Assistant",
      headline: "Never lose a lead again.",
      description: "24/7 AI-powered conversations that qualify leads, answer questions, and seamlessly hand off to your team.",
      features: ["24/7 replies", "Lead qualification", "Handoff to humans"],
      color: "purple",
      mockupType: "phone"
    },
    {
      id: 2,
      badge: "WEBSITE",
      title: "Multi-page Website",
      headline: "Website that converts visitors into leads.",
      description: "Modern, fast, SEO-optimized websites designed to establish authority and capture leads consistently.",
      features: ["Modern design", "SEO-optimized", "Blog system"],
      color: "orange",
      mockupType: "laptop"
    },
    {
      id: 3,
      badge: "CUSTOM",
      title: "Custom Software",
      headline: "Exactly what your business needs.",
      description: "From web applications to internal tools, we build custom software that fits your exact requirements.",
      features: ["Integrations", "Portals", "Automation"],
      color: "purple",
      mockupType: "dashboard"
    }
  ];

  return (
    <section id="products" className="products-section">
      <div className="products-container">
        <div className="products-header">
          <h2 className="products-title">
            Built to solve <span className="text-gradient-purple">real problems</span>
          </h2>
          <p className="products-subtitle">
            Three core products designed to cut costs, organize data, and drive better decisions.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className={`product-card product-card--${product.color}`}>
              <div className="product-badge">{product.badge}</div>

              <div className="product-mockup">
                {product.mockupType === "phone" && (
                  <div className="mockup-phone">
                    <div className="phone-screen">
                      <div className="chat-bubble incoming">Hi! How can I help you today?</div>
                      <div className="chat-bubble outgoing">I'm interested in your services</div>
                      <div className="typing-indicator">
                        <span></span><span></span><span></span>
                      </div>
                    </div>
                  </div>
                )}
                {product.mockupType === "laptop" && (
                  <div className="mockup-laptop">
                    <div className="laptop-screen">
                      <div className="browser-header">
                        <div className="browser-dots">
                          <span></span><span></span><span></span>
                        </div>
                      </div>
                      <div className="website-preview">
                        <div className="preview-nav"></div>
                        <div className="preview-hero"></div>
                        <div className="preview-content"></div>
                      </div>
                    </div>
                  </div>
                )}
                {product.mockupType === "dashboard" && (
                  <div className="mockup-dashboard">
                    <div className="dashboard-screen">
                      <div className="dashboard-sidebar"></div>
                      <div className="dashboard-main">
                        <div className="chart-placeholder"></div>
                        <div className="metrics-row">
                          <div className="metric"></div>
                          <div className="metric"></div>
                          <div className="metric"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="product-content">
                <p className="product-type">{product.title}</p>
                <h3 className="product-headline">{product.headline}</h3>
                <p className="product-description">{product.description}</p>

                <ul className="product-features">
                  {product.features.map((feature, index) => (
                    <li key={index} className="product-feature">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
