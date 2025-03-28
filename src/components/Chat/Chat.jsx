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
  const [isLeadFormValid, setIsLeadFormValid] = useState(false);

  // Ref para scroll automático
  const messagesEndRef = useRef(null);

  // Gerar ID único para esta conversa
  const [conversationId, setConversationId] = useState("");

  // Estado para armazenar a chave API
  const [apiKey, setApiKey] = useState("");

  // Função para obter a chave API - em produção, pode ser substituída por uma chamada a um serviço mais seguro
  const getApiKey = () => {
    // Tenta obter a chave da variável de ambiente (em desenvolvimento)
    if (import.meta.env.VITE_ANTHROPIC_API_KEY) {
      return import.meta.env.VITE_ANTHROPIC_API_KEY;
    }

    // Em produção, a chave é injetada durante o build ou obtida de um serviço seguro
    // Esta é apenas uma solução temporária - em produção real, use um backend seguro
    return apiKey;
  };

  // Detectar ambiente
  const isDevelopment =
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1");

  // Validar formulário de leads quando os campos mudam
  useEffect(() => {
    // Validação básica de e-mail
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadEmail);
    // Nome deve ter pelo menos 3 caracteres
    const isNameValid = leadName.trim().length >= 3;

    setIsLeadFormValid(isEmailValid && isNameValid);
  }, [leadName, leadEmail]);

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
    // Aqui você pode implementar a lógica para salvar o lead em um banco de dados ou CRM
    const leadData = {
      name: leadName,
      email: leadEmail,
      timestamp: new Date().toISOString(),
      conversationId: conversationId,
    };

    // Você pode implementar aqui a lógica para enviar esses dados para seu backend

    // Ocultar o formulário e mostrar a mensagem de agradecimento
    setShowLeadForm(false);

    // Adicionar mensagem de agradecimento
    const welcomeMessage = {
      id: `bot_${Date.now()}`,
      text: `Obrigado, ${leadName}! Seus dados foram recebidos com sucesso. Em breve entraremos em contato através do e-mail fornecido.\n\nComo posso ajudar você hoje?`,
      sender: "bot",
      timestamp: new Date().toISOString(),
    };

    setMessages([welcomeMessage]);
  };

  // Função para enviar mensagem para a API da Anthropic
  const sendMessageToAnthropic = async (message, type = "user") => {
    try {
      setIsTyping(true);

      // Simular resposta enquanto não temos o proxy configurado
      // Em produção, esta parte seria substituída pela chamada real ao serviço
      const simulateResponse = (message) => {
        // Respostas padrão baseadas em palavras-chave simples
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

        // Verificar palavras-chave simples
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

      // Simular um pequeno atraso para parecer mais natural
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

      // Código original comentado - será substituído por um proxy seguro em produção
      /*
      // Verificar se temos uma chave API
      const currentApiKey = getApiKey();
      if (!currentApiKey) {
        const errorMessage = {
          id: `error_${Date.now()}`,
          text: "Desculpe, não foi possível conectar ao serviço. Por favor, tente novamente mais tarde.",
          sender: "bot",
          timestamp: new Date().toISOString(),
        };
        
        setMessages((prev) => [...prev, errorMessage]);
        setIsTyping(false);
        return false;
      }

      // Obtém histórico da conversa para contexto
      const conversationHistory = messages
        .filter((msg) => msg.sender === "user" || msg.sender === "bot")
        .map((msg) => ({
          role: msg.sender === "user" ? "user" : "assistant",
          content: msg.text,
        }));

      // Adiciona a mensagem atual
      conversationHistory.push({
        role: "user",
        content: message,
      });

      // Configuração da requisição para a API da Anthropic
      const payload = {
        model: "claude-3-haiku-20240307", // Modelo mais econômico
        messages: conversationHistory,
        max_tokens: 1024,
        temperature: 0.7,
        system:
          "Você é um assistente virtual da Facilita.AI, uma plataforma que torna o processo de expansão digital simples, eficiente e acessível a profissionais de todas as áreas. Seja educado, prestativo e cordial. Forneça respostas diretas e úteis sobre a Facilita.AI e seus serviços.",
      };

      // Configuração do fetch
      const fetchOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": currentApiKey,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify(payload),
      };

      try {
        const response = await fetch(
          "https://api.anthropic.com/v1/messages",
          fetchOptions
        );

        if (!response.ok) {
          throw new Error(`API da Anthropic retornou erro: ${response.status}`);
        }

        const responseData = await response.json();

        if (
          responseData &&
          responseData.content &&
          responseData.content.length > 0
        ) {
          const botMessage = {
            id: `resp_${Date.now()}`,
            text: responseData.content[0].text,
            sender: "bot",
            timestamp: new Date().toISOString(),
          };

          setMessages((prev) => [...prev, botMessage]);
          setIsTyping(false);
          return true;
        } else {
          throw new Error("Resposta da API não contém conteúdo válido");
        }
      } catch (fetchError) {
        // Em caso de erro, mostrar uma mensagem amigável
        const errorMessage = {
          id: `error_${Date.now()}`,
          text: "Desculpe, estou com problemas para processar sua mensagem no momento. Por favor, tente novamente mais tarde.",
          sender: "bot",
          timestamp: new Date().toISOString(),
        };

        setMessages((prev) => [...prev, errorMessage]);
        setIsTyping(false);
      }
      */
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

    // Adiciona a mensagem do usuário à lista de mensagens
    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");

    // Enviar mensagem para a API da Anthropic
    await sendMessageToAnthropic(userMessage.text);
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

    // Resetamos o estado do formulário de lead quando o chat é aberto
    setShowLeadForm(true);
    setLeadName("");
    setLeadEmail("");
    setMessages([]);
  };

  return (
    <>
      {/* Chat Icon Button */}
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

      {/* Chat Window */}
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
            // Formulário de captura de lead
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
            // Chat normal
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
