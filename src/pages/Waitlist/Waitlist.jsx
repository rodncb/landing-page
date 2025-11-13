import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Check, ArrowLeft } from 'lucide-react';
import './Waitlist.css';
import logo from '../../images/Logo.png';

const Waitlist = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [],
    message: '',
    acceptedPrivacy: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState(0);

  useEffect(() => {
    // Carregar contador da waitlist
    const waitlist = JSON.parse(localStorage.getItem('waitlist') || '[]');
    setWaitlistCount(waitlist.length);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Salvar no localStorage
    const waitlist = JSON.parse(localStorage.getItem('waitlist') || '[]');
    const newEntry = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: `wait_${Date.now()}`
    };
    waitlist.push(newEntry);
    localStorage.setItem('waitlist', JSON.stringify(waitlist));

    // Enviar para Google Sheets
    const GOOGLE_SHEETS_WEBHOOK = 'https://script.google.com/macros/s/AKfycbwVPgolYoIHR330l7RDU3KX0kySgNXzQWcbGRgEYH4fz3KzdNnBAkBZ-Gq0V093rwTxyw/exec';

    try {
      await fetch(GOOGLE_SHEETS_WEBHOOK, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEntry)
      });
      console.log('Lead enviado para Google Sheets com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar para Google Sheets:', error);
      // Continua mesmo se der erro no webhook
    }

    setSubmitted(true);
    setWaitlistCount(waitlist.length);
  };

  if (submitted) {
    return (
      <div className="waitlist-page">
        <div className="waitlist-success">
          <div className="success-icon">
            <Check size={64} />
          </div>
          <h1>🎉 Você está na lista!</h1>
          <p>
            Obrigado por se cadastrar! Você receberá um email assim que lançarmos.
          </p>
          <p className="success-note">
            Você é o <strong>#{waitlistCount}</strong> da lista de espera!
          </p>
          <Link to="/" className="back-button">
            <ArrowLeft size={20} />
            Voltar para o site
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="waitlist-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={20} />
        Voltar
      </Link>

      <div className="waitlist-container">
        <div className="waitlist-header">
          <img src={logo} alt="Facilita.AI" className="waitlist-logo" />
          <div className="waitlist-badge">
            <Sparkles size={16} />
            <span>EM BREVE</span>
          </div>
          <h1>Seja um dos Primeiros!</h1>
          <p>
            A FacilitaAI está chegando em breve com soluções de automação e IA
            que vão transformar seu negócio.
          </p>
        </div>

        <div className="waitlist-benefits">
          <div className="benefit">
            <Check size={20} />
            <span>Acesso antecipado</span>
          </div>
          <div className="benefit">
            <Check size={20} />
            <span>Desconto especial de lançamento</span>
          </div>
          <div className="benefit">
            <Check size={20} />
            <span>Onboarding personalizado</span>
          </div>
        </div>

        <form className="waitlist-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome completo *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite seu nome completo"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Seu melhor e-mail *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite seu e-mail"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">WhatsApp *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              required
            />
          </div>

          <div className="form-group">
            <label>Tenho interesse em:</label>
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.interests.includes('LIA')}
                  onChange={() => handleInterestChange('LIA')}
                />
                <span>LIA (WhatsApp com IA)</span>
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.interests.includes('CRM')}
                  onChange={() => handleInterestChange('CRM')}
                />
                <span>CRM</span>
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.interests.includes('Softwares')}
                  onChange={() => handleInterestChange('Softwares')}
                />
                <span>Softwares Personalizados</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem (opcional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Conte-nos um pouco sobre seu negócio..."
              rows="4"
            />
          </div>

          <div className="form-group">
            <label className="checkbox-label" style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              fontSize: '14px',
              lineHeight: '1.5'
            }}>
              <input
                type="checkbox"
                checked={formData.acceptedPrivacy}
                onChange={(e) => setFormData(prev => ({...prev, acceptedPrivacy: e.target.checked}))}
                required
                style={{ marginTop: '3px', flexShrink: 0 }}
              />
              <span>
                Ao preencher este formulário, autorizo a Facilita.AI a coletar e armazenar meus dados para fins de atendimento comercial, conforme a Lei Geral de Proteção de Dados (LGPD). *
              </span>
            </label>
          </div>

          <button type="submit" className="waitlist-submit" disabled={!formData.acceptedPrivacy}>
            Entrar na Lista de Espera
          </button>
        </form>

        {waitlistCount > 0 && (
          <p className="waitlist-count">
            🔥 Já temos <strong>{waitlistCount}</strong> pessoa{waitlistCount > 1 ? 's' : ''} aguardando!
          </p>
        )}
      </div>
    </div>
  );
};

export default Waitlist;
