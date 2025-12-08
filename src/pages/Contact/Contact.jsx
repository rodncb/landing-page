import { useState } from "react";
import "./Contact.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/common/Button";

const Contact = () => {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        empresa: "",
        cargo: "",
        assunto: "",
        descricao: "",
        privacidade: false,
        tamanhoEmpresa: "",
        website: "",
        ferramentas: ""
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulário enviado:", formData);
        alert("Obrigado! Sua mensagem foi recebida. Entraremos em contato em breve.");
        // Aqui você adicionaria a lógica de envio real
    };

    return (
        <>
            <Header />
            <div className="contact-page">
                <div className="contact-hero">
                    <h1>Entre em <span className="highlight-text">Contato</span></h1>
                    <p>
                        Sua empresa está pronta para dar o próximo passo rumo à automação, inteligência artificial e tecnologia sob medida? Estamos aqui para ajudar você.
                    </p>
                </div>

                <div className="contact-container">
                    <div className="contact-content">
                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <form onSubmit={handleSubmit} className="contact-form">
                                <h2 className="form-title">Envie uma mensagem</h2>

                                <div className="form-group">
                                    <label htmlFor="nome">Nome completo *</label>
                                    <input
                                        type="text"
                                        id="nome"
                                        name="nome"
                                        required
                                        value={formData.nome}
                                        onChange={handleChange}
                                        placeholder="Seu nome"
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email">E-mail *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="seu@email.com"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="telefone">Telefone / WhatsApp *</label>
                                        <input
                                            type="tel"
                                            id="telefone"
                                            name="telefone"
                                            required
                                            value={formData.telefone}
                                            onChange={handleChange}
                                            placeholder="(DD) 99999-9999"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="empresa">Nome da empresa *</label>
                                        <input
                                            type="text"
                                            id="empresa"
                                            name="empresa"
                                            required
                                            value={formData.empresa}
                                            onChange={handleChange}
                                            placeholder="Sua empresa"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cargo">Cargo ou função *</label>
                                        <input
                                            type="text"
                                            id="cargo"
                                            name="cargo"
                                            required
                                            value={formData.cargo}
                                            onChange={handleChange}
                                            placeholder="Ex: Diretor, Gerente"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="assunto">Assunto *</label>
                                    <select
                                        id="assunto"
                                        name="assunto"
                                        required
                                        value={formData.assunto}
                                        onChange={handleChange}
                                    >
                                        <option value="">Selecione uma opção</option>
                                        <option value="Assistente Inteligente WhatsApp">Assistente Inteligente WhatsApp</option>
                                        <option value="Automação de Processos">Automação de Processos</option>
                                        <option value="Integração de Sistemas">Integração de Sistemas</option>
                                        <option value="CRM FACILITA AI">CRM FACILITA AI</option>
                                        <option value="Desenvolvimento de Software">Desenvolvimento de Software</option>
                                        <option value="Consultoria">Consultoria</option>
                                        <option value="Outro">Outro</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="descricao">Descrição da necessidade *</label>
                                    <textarea
                                        id="descricao"
                                        name="descricao"
                                        required
                                        value={formData.descricao}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="Conte um pouco sobre o que sua empresa precisa..."
                                    ></textarea>
                                </div>

                                {/* Optional Fields */}
                                <div className="form-section-title">Informações Adicionais (Opcional)</div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="tamanhoEmpresa">Tamanho da empresa</label>
                                        <select
                                            id="tamanhoEmpresa"
                                            name="tamanhoEmpresa"
                                            value={formData.tamanhoEmpresa}
                                            onChange={handleChange}
                                        >
                                            <option value="">Selecione</option>
                                            <option value="Micro (1-9 funcionários)">Micro (1-9 funcionários)</option>
                                            <option value="Pequena (10-49 funcionários)">Pequena (10-49 funcionários)</option>
                                            <option value="Média (50-99 funcionários)">Média (50-99 funcionários)</option>
                                            <option value="Grande (100+ funcionários)">Grande (100+ funcionários)</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="website">Website da empresa</label>
                                        <input
                                            type="url"
                                            id="website"
                                            name="website"
                                            value={formData.website}
                                            onChange={handleChange}
                                            placeholder="https://suaempresa.com.br"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="ferramentas">Presença atual de sistemas (Ex: CRM, ERP)</label>
                                    <input
                                        type="text"
                                        id="ferramentas"
                                        name="ferramentas"
                                        value={formData.ferramentas}
                                        onChange={handleChange}
                                        placeholder="Quais ferramentas vocês já usam?"
                                    />
                                </div>

                                <div className="form-checkbox">
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="privacidade"
                                            required
                                            checked={formData.privacidade}
                                            onChange={handleChange}
                                        />
                                        <span>Confirmo que li e concordo com a Política de Privacidade.</span>
                                    </label>
                                </div>

                                <Button type="submit" variant="primary" size="lg" className="submit-button">
                                    Enviar Mensagem
                                </Button>
                            </form>
                        </div>

                        {/* Contact Info Sidebar */}
                        <div className="contact-info">
                            <div className="info-card">
                                <h3>Canais de Atendimento</h3>
                                <p>Ou, se preferir, entre em contato diretamente:</p>

                                <div className="info-item">
                                    <span className="info-icon">📧</span>
                                    <div className="info-text">
                                        <strong>E-mail</strong>
                                        <a href="mailto:contato@facilitaai.com">contato@facilitaai.com</a>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <span className="info-icon">📱</span>
                                    <div className="info-text">
                                        <strong>WhatsApp</strong>
                                        <a href="https://wa.me/5524981058194" target="_blank" rel="noopener noreferrer">(24) 98105-8194</a>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <span className="info-icon">📸</span>
                                    <div className="info-text">
                                        <strong>Instagram</strong>
                                        <a href="https://www.instagram.com/fclt.ai" target="_blank" rel="noopener noreferrer">@fclt.ai</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
