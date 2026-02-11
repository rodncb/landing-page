import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "A LIA transformou nosso atendimento. Agora capturamos leads mesmo de madrugada.",
      author: "Maria Silva",
      company: "TechStart Brasil",
      metric: "+150% leads qualificados"
    },
    {
      quote: "Finalmente organizamos nosso pipeline. Sabemos exatamente onde cada negócio está.",
      author: "João Santos",
      company: "Consultoria Prime",
      metric: "Pipeline 100% organizado"
    },
    {
      quote: "A automação economizou 15 horas por semana da nossa equipe. ROI em 2 meses.",
      author: "Ana Costa",
      company: "Serviços Pro",
      metric: "15h/semana economizadas"
    },
    {
      quote: "O dashboard personalizado nos deu visibilidade em tempo real que nunca tivemos antes.",
      author: "Carlos Mendes",
      company: "DataFlow Brasil",
      metric: "80% mais rápido nos relatórios"
    }
  ];

  // Duplicar para criar o efeito de loop infinito
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">O que nossos clientes dizem</h2>
          <p className="testimonials-subtitle">
            Feedback real de empresas que ajudamos a otimizar e crescer.
          </p>
        </div>

        <div className="testimonials-carousel">
          <div className="testimonials-track">
            {allTestimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>

                <div className="testimonial-author">
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-company">{testimonial.company}</p>
                </div>

                <div className="testimonial-metric">
                  {testimonial.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
