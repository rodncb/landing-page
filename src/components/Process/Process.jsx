import "./Process.css";

const Process = () => {
  const steps = [
    {
      number: 1,
      title: "Discovery",
      description: "Goals + constraints"
    },
    {
      number: 2,
      title: "Spec",
      description: "Scope + timeline"
    },
    {
      number: 3,
      title: "Build",
      description: "Sprints + QA"
    },
    {
      number: 4,
      title: "Launch",
      description: "Deploy + train"
    },
    {
      number: 5,
      title: "Optimize",
      description: "Metrics + iteration"
    }
  ];

  return (
    <section className="process-section">
      <div className="process-container">
        <div className="process-header">
          <h2 className="process-title">
            How we <span className="text-gradient-purple">work</span>
          </h2>
          <p className="process-subtitle">
            A clear, predictable process from discovery to deployment.
          </p>
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
