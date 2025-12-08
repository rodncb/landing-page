import "./About.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <>
            <Header />
            <div className="about-page">
                {/* Hero Section */}
                <section className="about-hero">
                    <div className="about-container">
                        <h1 className="about-title">Sobre a <span className="highlight-text">Facilita AI</span></h1>
                        <p className="about-intro">
                            A Facilita AI nasceu de uma premissa simples, porém poderosa: a tecnologia não deve ser um obstáculo complexo, mas sim a alavanca que impulsiona o crescimento do seu negócio. Somos mais do que uma empresa de desenvolvimento de software; somos parceiros estratégicos focados em transformação digital real e tangível.
                        </p>
                        <p className="about-intro">
                            Nosso trabalho consiste em desenvolver softwares personalizados, criar automações inteligentes, realizar integrações complexas entre sistemas e implementar assistentes baseados em Inteligência Artificial. Não entregamos apenas código. Entregamos tempo, eficiência e clareza operacional.
                        </p>
                        <p className="about-intro">
                            Existimos porque acreditamos que pequenas e médias empresas merecem ter acesso às mesmas ferramentas tecnológicas que as grandes corporações utilizam. Nosso foco é democratizar o acesso à IA e à automação de processos, permitindo que gestores e equipes deixem de lado as tarefas repetitivas e se concentrem no que realmente importa: a estratégia e o crescimento da empresa.
                        </p>
                    </div>
                </section>

                {/* Roots Section */}
                <section className="about-roots">
                    <div className="about-container">
                        <h2 className="section-title">Nossas Raízes e Evolução</h2>
                        <div className="roots-content">
                            <p>
                                A história da Facilita AI começou com uma observação atenta do mercado. Percebemos que, apesar da abundância de ferramentas digitais disponíveis, muitas empresas ainda operavam de maneira fragmentada. Dados ficavam presos em planilhas isoladas, sistemas não conversavam entre si e o potencial humano era desperdiçado em tarefas manuais que poderiam ser automatizadas.
                            </p>
                            <p>
                                O projeto teve origem no encontro de duas visões complementares: a profundidade técnica da programação e a visão estratégica do design e da comunicação. Os fundadores identificaram que o mercado estava cheio de soluções genéricas, mas carecia de personalização. O problema que queriam resolver era claro: eliminar o "caos digital" e criar fluxos de trabalho fluídos e inteligentes.
                            </p>
                            <p>
                                Desde os primeiros projetos até o momento atual, a Facilita AI evoluiu rapidamente. O que começou como consultoria técnica transformou-se em um hub de soluções avançadas, onde utilizamos as mais recentes tecnologias de Inteligência Artificial para resolver dores antigas de negócios de diversos setores.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mission Vision Values */}
                <section className="about-mvv">
                    <div className="about-container">
                        <h2 className="section-title">Missão, Visão e Valores</h2>
                        <p className="mvv-intro">Nossa filosofia é pautada na entrega de valor real. Não utilizamos tecnologia por vaidade, mas por necessidade e resultado.</p>

                        <div className="mvv-grid">
                            <div className="mvv-card">
                                <h3>Missão</h3>
                                <p>Simplificar a complexidade tecnológica para empresas, transformando processos manuais em sistemas eficientes e inteligentes que geram lucro e qualidade de vida para as equipes.</p>
                            </div>
                            <div className="mvv-card">
                                <h3>Visão</h3>
                                <p>Ser a referência nacional em implementação prática de Inteligência Artificial e automação para o setor de serviços e varejo, reconhecida pela capacidade de resolver problemas complexos com soluções elegantes.</p>
                            </div>
                            <div className="mvv-card">
                                <h3>Valores</h3>
                                <ul className="values-list">
                                    <li><strong>Inovação com propósito:</strong> Só implementamos novidades tecnológicas se elas trouxerem benefício real ao negócio.</li>
                                    <li><strong>Transparência:</strong> Falamos a língua do cliente, sem "tiques" técnicos desnecessários.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="about-team">
                    <div className="about-container">
                        <h2 className="section-title">Quem Faz Acontecer</h2>
                        <p className="team-intro">A força da Facilita AI reside na união de competências distintas que se completam. A liderança da empresa combina rigor lógico com pensamento criativo.</p>

                        <div className="team-grid">
                            {/* Rodrigo */}
                            <div className="team-card">
                                <div className="team-avatar-placeholder">RN</div>
                                <h3>Rodrigo Nonato</h3>
                                <span className="team-role">Programador Especialista em IA</span>
                                <p>A mente técnica por trás das nossas soluções. Como programador especialista em Inteligência Artificial, ele possui um domínio profundo sobre o desenvolvimento de automações e arquitetura de sistemas com IA. Ele transforma problemas abstratos em soluções funcionais.</p>
                                <a href="#" className="team-link">Link do GitHub aqui</a>
                            </div>

                            {/* Tales */}
                            <div className="team-card">
                                <div className="team-avatar-placeholder">TR</div>
                                <h3>Tales Rocha</h3>
                                <span className="team-role">Artista Visual e Consultor em TI</span>
                                <p>Traz a visão humanizada e estratégica para a tecnologia. Com vasta experiência em audiovisual, design e estratégias digitais, ele garante que a tecnologia não seja apenas funcional, mas também intuitiva e alinhada aos objetivos de negócio do cliente.</p>
                                <a href="#" className="team-link">Link do LinkedIn aqui</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="about-cta">
                    <div className="about-container">
                        <h2>Vamos Transformar Seu Negócio?</h2>
                        <p>Se sua empresa deseja implementar IA, automações ou software personalizado, fale com a Facilita AI.</p>
                        <Link to="/contato" className="cta-button">Falar com Consultor</Link>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default About;
