import { useState } from "react";
import Modal from "../../common/Modal/Modal";
import "./ContactFormModal.css";

const ContactFormModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    solution: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    {
      id: "welcome",
      aiMessage:
        "Olá! 👋 Sou a assistente virtual da FacilitaAI. Vou te ajudar a encontrar a solução perfeita para seu negócio. Qual é o seu nome?",
      field: "name",
      placeholder: "Digite seu nome completo",
      type: "text",
    },
    {
      id: "phone",
      aiMessage:
        "Prazer em conhecê-lo! Para que possamos entrar em contato, qual é o seu telefone ou WhatsApp?",
      field: "phone",
      placeholder: "(00) 00000-0000",
      type: "tel",
    },
    {
      id: "solution",
      aiMessage:
        "Perfeito! Agora me conte: qual tipo de solução você está buscando para seu negócio?",
      field: "solution",
      type: "select",
      options: [
        { value: "", label: "Selecione uma opção" },
        { value: "software", label: "Software & Apps personalizados" },
        { value: "agent", label: "Agentes Inteligentes (Chatbots/IA)" },
        { value: "automation", label: "Automações com IA" },
        { value: "consultoria", label: "Consultoria em Tecnologia" },
        { value: "outros", label: "Outros / Não sei ainda" },
      ],
    },
    {
      id: "success",
      aiMessage: `Excelente, ${formData.name}! 🎉 Recebemos suas informações e nossa equipe entrará em contato em breve através do ${formData.phone}. Obrigada por escolher a FacilitaAI!`,
      isSuccess: true,
    },
  ];

  const currentStepData = steps[currentStep];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = async () => {
    if (currentStep < steps.length - 2) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form
      setIsSubmitting(true);
      try {
        await submitForm();
        setCurrentStep(currentStep + 1);
      } catch (error) {
        console.error("Erro ao enviar formulário:", error);
        alert("Erro ao enviar formulário. Tente novamente.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const submitForm = async () => {
    const submissionData = {
      ...formData,
      source: "modal_form",
      page: window.location.pathname,
    };

    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar formulário");
      }

      const result = await response.json();
      console.log("Formulário enviado com sucesso:", result);
      return result;
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      throw error;
    }
  };

  const handleClose = () => {
    setCurrentStep(0);
    setFormData({ name: "", phone: "", solution: "" });
    setIsSubmitting(false);
    onClose();
  };

  const canProceed = () => {
    const field = currentStepData.field;
    return formData[field] && formData[field].trim() !== "";
  };

  const formatPhoneInput = (value) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
    return value;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneInput(e.target.value);
    setFormData((prev) => ({
      ...prev,
      phone: formatted,
    }));
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} className="contact-form-modal">
      <div className="contact-form-container">
        {/* AI Avatar */}
        <div className="ai-avatar">
          <div className="avatar-circle">
            <span className="avatar-icon">🤖</span>
          </div>
          <div className="ai-pulse"></div>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
          <span className="progress-text">
            {currentStep + 1} de {steps.length}
          </span>
        </div>

        {/* AI Message */}
        <div className="ai-message-container">
          <div className="ai-message">
            <p>{currentStepData.aiMessage}</p>
          </div>
        </div>

        {/* Form Content */}
        <div className="form-content">
          {!currentStepData.isSuccess ? (
            <>
              {currentStepData.type === "text" ||
              currentStepData.type === "tel" ? (
                <div className="input-group">
                  <input
                    type={currentStepData.type}
                    name={currentStepData.field}
                    value={formData[currentStepData.field]}
                    onChange={
                      currentStepData.field === "phone"
                        ? handlePhoneChange
                        : handleInputChange
                    }
                    placeholder={currentStepData.placeholder}
                    className="form-input"
                    autoFocus
                  />
                </div>
              ) : currentStepData.type === "select" ? (
                <div className="input-group">
                  <select
                    name={currentStepData.field}
                    value={formData[currentStepData.field]}
                    onChange={handleInputChange}
                    className="form-select"
                    autoFocus
                  >
                    {currentStepData.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              ) : null}

              <div className="form-actions">
                <button
                  onClick={handleNext}
                  disabled={!canProceed() || isSubmitting}
                  className="btn-next"
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading-spinner"></span>
                      Enviando...
                    </>
                  ) : currentStep < steps.length - 2 ? (
                    "Continuar"
                  ) : (
                    "Finalizar"
                  )}
                </button>
              </div>
            </>
          ) : (
            <div className="success-content">
              <div className="success-icon">✅</div>
              <button onClick={handleClose} className="btn-close-success">
                Fechar
              </button>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ContactFormModal;
