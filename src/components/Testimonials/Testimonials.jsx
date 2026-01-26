import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Facilita AI transformed our chaotic data into actionable insights.",
      author: "Sarah Mitchell",
      company: "TechFlow Consulting",
      metric: "Saved 45 hours/week"
    },
    {
      quote: "The automation workflows cut our operational costs by 40%.",
      author: "James Rodriguez",
      company: "Apex Solutions",
      metric: "$5K monthly savings"
    },
    {
      quote: "LIA handles our leads 24/7. We never miss an opportunity now.",
      author: "Emma Chen",
      company: "GrowthLab",
      metric: "3x lead capture"
    },
    {
      quote: "The custom dashboard gave us real-time insights we never had before.",
      author: "Michael Santos",
      company: "DataFlow Inc",
      metric: "80% faster reports"
    }
  ];

  // Duplicar os testimonials para criar o efeito de loop infinito
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What clients say</h2>
          <p className="testimonials-subtitle">
            Real feedback from businesses we've helped optimize and grow.
          </p>
        </div>

        <div className="testimonials-carousel">
          <div className="testimonials-track">
            {allTestimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-quote">"{testimonial.quote}"</p>

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
