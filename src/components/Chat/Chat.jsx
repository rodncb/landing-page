import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";

const Chat = () => {
  // Estado para controlar visibilidade e mensagens do chat
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Estado para o formulário de captura de leads
  const [showLeadForm, setShowLeadForm] = useState(true);
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [isLeadFormValid, setIsLeadFormValid] = useState(false);

  // Ref para scroll automático
  const messagesEndRef = useRef(null);

  // Gerar ID único para esta conversa
  const [conversationId, setConversationId] = useState("");

  // Detectar ambiente
  const isDevelopment =
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1");

  // Validar formulário de leads quando os campos mudam
  useEffect(() => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadEmail);
    const isNameValid = leadName.trim().length >= 3;
    const isPhoneValid = leadPhone.trim().length >= 10;

    setIsLeadFormValid(isEmailValid && isNameValid && isPhoneValid);
  }, [leadName, leadEmail, leadPhone]);

  // Gerar um ID único para a conversa
  useEffect(() => {
    if (!conversationId) {
      const newConversationId = `conv_${Date.now()}_${Math.random()
        .toString(36)
        .substring(2, 8)}`;
      setConversationId(newConversationId);
    }
  }, [conversationId]);

  // Rolar para a última mensagem quando novas mensagens são adicionadas
  useEffect(() => {
    if (messagesEndRef.current && isChatOpen) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isChatOpen]);

  // Função para salvar os dados do lead
  const saveLead = () => {
    const leadData = {
      name: leadName,
      email: leadEmail,
      phone: leadPhone,
      timestamp: new Date().toISOString(),
      conversationId: conversationId,
    };

    setShowLeadForm(false);

    const welcomeMessage = {
      id: `bot_${Date.now()}`,
      text: `Obrigado, ${leadName}! Seus dados foram recebidos com sucesso. Em breve entraremos em contato através do e-mail fornecido.\n\nComo posso ajudar você hoje?`,
      sender: "bot",
      timestamp: new Date().toISOString(),
    };

    setMessages([welcomeMessage]);
  };

  // Função para enviar mensagem para o chat
  const sendMessage = async (message) => {
    try {
      setIsTyping(true);

      const simulateResponse = (message) => {
        const defaultResponses = {
          default:
            "Obrigado pelo seu contato! Sou o assistente virtual da Facilita.AI. Como posso ajudar com sua expansão digital hoje?",
          ajuda:
            "Estou aqui para ajudar! A Facilita.AI oferece soluções para expandir sua presença digital de forma simples e eficiente. Como posso orientá-lo hoje?",
          preço:
            "Nossos planos são personalizados de acordo com as necessidades do seu negócio. Podemos agendar uma consulta para discutir detalhes e valores. Gostaria de agendar?",
          serviço:
            "A Facilita.AI integra fluxos de trabalho automatizados e tecnologia de Inteligência Artificial para ajudar você a se posicionar como referência no seu mercado, mesmo sem experiência em marketing.",
          funcionamento:
            "Nossa plataforma integra fluxos de trabalho automatizados e tecnologia de IA para simplificar sua expansão digital. Ajudamos a automatizar conteúdo, gerenciar redes sociais e construir sua presença online.",
        };

        const messageLower = message.toLowerCase();

        if (
          messageLower.includes("preço") ||
          messageLower.includes("valor") ||
          messageLower.includes("custo")
        ) {
          return defaultResponses.preço;
        } else if (
          messageLower.includes("ajuda") ||
          messageLower.includes("suporte")
        ) {
          return defaultResponses.ajuda;
        } else if (
          messageLower.includes("serviço") ||
          messageLower.includes("oferecem")
        ) {
          return defaultResponses.serviço;
        } else if (
          messageLower.includes("como funciona") ||
          messageLower.includes("funciona")
        ) {
          return defaultResponses.funcionamento;
        }

        return defaultResponses.default;
      };

      setTimeout(() => {
        const responseText = simulateResponse(message);

        const botMessage = {
          id: `resp_${Date.now()}`,
          text: responseText,
          sender: "bot",
          timestamp: new Date().toISOString(),
        };

        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      }, 1500);

      return true;
    } catch (error) {
      setIsTyping(false);
      return false;
    }
  };

  // Enviar mensagem quando o usuário clica no botão ou pressiona Enter
  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      id: `user_${Date.now()}`,
      text: newMessage,
      sender: "user",
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");

    await sendMessage(userMessage.text);
  };

  // Lidar com tecla Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Abrir o chat
  const openChat = () => {
    setIsChatOpen(true);
    setShowLeadForm(true);
    setLeadName("");
    setLeadEmail("");
    setLeadPhone("");
    setMessages([]);
  };

  return (
    <>
      {!isChatOpen && (
        <button className="chat-icon-button" onClick={openChat}>
          <svg viewBox="0 0 24 24" className="chat-icon">
            <path
              fill="currentColor"
              d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M20,16H6L4,18V4H20"
            />
          </svg>
        </button>
      )}

      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-title">
              <img
                src="/assets/Logo-CHYBck6f.png"
                alt="Facilita.AI Logo"
                className="chat-logo"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://facilitaai.com.br/assets/Logo-CHYBck6f.png";
                }}
              />
              <span>Suporte Facilita.AI</span>
            </div>
            <button className="chat-close" onClick={() => setIsChatOpen(false)}>
              &times;
            </button>
          </div>

          {showLeadForm ? (
            <div className="chat-messages">
              <div className="chat-message bot-message">
                <div className="bot-avatar">
                  <img
                    src="/assets/Logo-CHYBck6f.png"
                    alt="Bot Avatar"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://facilitaai.com.br/assets/Logo-CHYBck6f.png";
                    }}
                  />
                </div>
                <div className="message-content">
                  <div className="message-text">
                    Olá! Antes de iniciarmos nossa conversa, por favor, preencha
                    as informações abaixo para que possamos entrar em contato
                    posteriormente.
                  </div>
                </div>
              </div>

              <div className="lead-form">
                <div className="form-group">
                  <label htmlFor="leadName">Nome completo:</label>
                  <input
                    type="text"
                    id="leadName"
                    className="chat-input"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    placeholder="Digite seu nome completo"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="leadEmail">Seu melhor e-mail:</label>
                  <input
                    type="email"
                    id="leadEmail"
                    className="chat-input"
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    placeholder="Digite seu e-mail"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="leadPhone">Seu melhor telefone:</label>
                  <input
                    type="tel"
                    id="leadPhone"
                    className="chat-input"
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    placeholder="Digite seu telefone"
                    required
                  />
                </div>

                <button
                  className="chat-send lead-submit"
                  onClick={saveLead}
                  disabled={!isLeadFormValid}
                >
                  Iniciar Chat
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="chat-messages">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`chat-message ${
                      msg.sender === "user" ? "user-message" : "bot-message"
                    }`}
                  >
                    {msg.sender === "bot" && (
                      <div className="bot-avatar">
                        <img
                          src="/assets/Logo-CHYBck6f.png"
                          alt="Bot Avatar"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://facilitaai.com.br/assets/Logo-CHYBck6f.png";
                          }}
                        />
                      </div>
                    )}
                    <div className="message-content">
                      <div className="message-text">
                        {msg.text.split("\n").map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < msg.text.split("\n").length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </div>
                      <div className="message-time">
                        {new Date(msg.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="chat-message bot-message">
                    <div className="bot-avatar">
                      <img
                        src="/assets/Logo-CHYBck6f.png"
                        alt="Bot Avatar"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://facilitaai.com.br/assets/Logo-CHYBck6f.png";
                        }}
                      />
                    </div>
                    <div className="message-content">
                      <div className="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="chat-input-container">
                <textarea
                  className="chat-input"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua mensagem..."
                  rows={1}
                />
                <button
                  className="chat-send"
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim() || isTyping}
                >
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path
                      fill="currentColor"
                      d="M2,21L23,12L2,3V10L17,12L2,14V21Z"
                    />
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Chat;
