import "./Features.css";
import featureImage from "../../images/ImgsLPFacilitaAiImg3.png";

const Features = () => {
  return (
    <section className="features">
      <div className="features-container">
        <div className="features-content">
          <h2>
            Agentes IA
            <br />
            para profissionais
          </h2>
          <div className="features-items">
            <div className="feature-item">
              <h3>Automação Avançada:</h3>
              <p>
                Soluções apoiadas em LLMs podem executar tarefas que antes
                exigiam grande esforço manual — seja em criação de conteúdo,
                atendimento ou análise de dados.
              </p>
            </div>
            <div className="feature-item">
              <h3>Otimização de Processos:</h3>
              <p>
                Com fluxos de trabalho mais inteligentes, você ganha agilidade,
                reduz custos e melhora a experiência do cliente.
              </p>
            </div>
            <div className="feature-item">
              <h3>Futuro-Proof:</h3>
              <p>
                Entender e aplicar agentes virtuais hoje é estar preparado para
                a chegada de sistemas ainda mais avançados, potencialmente
                impulsionados por conceitos de AGI.
              </p>
            </div>
          </div>
        </div>
        <div className="features-image-container">
          <img
            src={featureImage}
            alt="Dashboard de análise com gráficos"
            className="features-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
