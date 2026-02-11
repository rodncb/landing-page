import "./Process.css";

const Process = () => {
  const steps = [
    {
      number: 1,
      title: "Discovery",
      description: "Objetivos + restrições"
    },
    {
      number: 2,
      title: "Especificação",
      description: "Escopo + cronograma"
    },
    {
      number: 3,
      title: "Construção",
      description: "Sprints + QA"
    },
    {
      number: 4,
      title: "Lançamento",
      description: "Deploy + treinamento"
    },
    {
      number: 5,
      title: "Otimização",
      description: "Métricas + iteração"
    }
  ];

  return (
    <section className="process-section">
      <div className="process-container">
        <div className="process-header">
          <h2 className="process-title">
            Como <span className="text-gradient-purple">trabalhamos</span>
          </h2>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
