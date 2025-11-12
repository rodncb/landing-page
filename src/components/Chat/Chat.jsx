import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";
import { CHAT_API_URL, API_KEY, IS_DEVELOPMENT } from "../../config/api";

const Chat = () => {
  // Estado para controlar visibilidade e mensagens do chat
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Variável para armazenar a data e hora atual
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

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

  // Usar detecção de ambiente do config
  const isDevelopment = IS_DEVELOPMENT;

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
  const saveLead = async () => {
    const leadData = {
      name: leadName,
      email: leadEmail,
      phone: leadPhone,
      timestamp: new Date().toISOString(),
      conversationId: conversationId,
      source: "chat", // Identificar que veio do chat
    };

    // Salvar na planilha específica do chat (Google Sheets)
    const GOOGLE_SHEETS_WEBHOOK =
      "https://script.google.com/macros/s/AKfycbwb2wN1KxI2MOAXU2Sk3AFs0XbreSeFUlnAslfoERSsz_9fgWA-RurAB_VWUObMxnV3Fw/exec";

    try {
      await fetch(GOOGLE_SHEETS_WEBHOOK, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: leadName,
          email: leadEmail,
          phone: leadPhone,
          source: "Chat Landing Page",
          timestamp: new Date().toISOString(),
        }),
      });

      console.log("Lead salvo com sucesso na planilha!");
    } catch (error) {
      console.error("Erro ao salvar lead:", error);
    }

    setShowLeadForm(false);

    const welcomeMessage = {
      id: `bot_${Date.now()}`,
      text: `Obrigado, ${leadName}! Seus dados foram recebidos com sucesso. Sou a LIA, assistente virtual da Facilita.AI.\n\nComo posso ajudar você hoje?`,
      sender: "bot",
      timestamp: new Date().toISOString(),
    };

    setMessages([welcomeMessage]);
  };

  // Atualizar a data e hora a cada minuto
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000); // Atualiza a cada minuto

    return () => clearInterval(timer);
  }, []);

  // Função para enviar mensagem para o chat
  const sendMessage = async (message) => {
    try {
      setIsTyping(true);

      // Usar API configurada (LM Studio em dev, VPS em produção)
      try {
        // URL da API (vem do config)
        const apiUrl = CHAT_API_URL;

          // Formatar a data e hora atual para informar ao modelo
          const formattedDateTime = currentDateTime.toLocaleString("pt-BR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });

          // Preparar o payload para a API
          const payload = {
            model: "qwen2.5:3b",
            messages: [
              {
                role: "system",
                content: `Você é a LIA (Líder em Inteligência Artificial), assistente virtual da Facilita.AI. Hoje é ${formattedDateTime}.

SOBRE A FACILITA.AI:
- Software house especializada em soluções com IA
- Desenvolvemos: Softwares personalizados, Agentes Inteligentes, Automações com IA

SOBRE VOCÊ (LIA):
- Você é nosso principal produto: assistente de WhatsApp com IA
- LIA atende leads 24/7, qualifica automaticamente e integra com CRM
- Transcreve áudios, mantém contexto das conversas, personaliza respostas

NOSSOS SERVIÇOS:
1. LIA - WhatsApp com IA (você!)
2. Softwares & Apps personalizados
3. Agentes Inteligentes para automação
4. Integrações e CRMs

COMO RESPONDER:
- Seja concisa (máximo 4 linhas)
- Fale na primeira pessoa quando mencionar a LIA ("Eu sou a LIA...")
- Destaque que você atende 24/7 no WhatsApp
- Para preços: diga que são personalizados, consultor entra em contato em breve
- Sempre pergunte se pode ajudar com mais algo
- Tom: amigável, profissional, consultivo
- NÃO use asteriscos (*) nem emojis`,
              },
              {
                role: "user",
                content: message,
              },
            ],
            temperature: 0.7,
            max_tokens: 250,
          };

          // Preparar headers (adicionar API Key em produção)
          const headers = {
            "Content-Type": "application/json",
          };

          if (API_KEY) {
            headers["X-API-Key"] = API_KEY;
          }

          // Fazer a chamada à API
          const response = await fetch(apiUrl, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(payload),
          });

          if (!response.ok) {
            throw new Error(`Erro na API: ${response.status}`);
          }

          const data = await response.json();

          // Extrair a resposta do modelo
          let responseText = data.choices[0].message.content;

          // Processar a resposta para garantir que não tenha asteriscos nem emojis
          responseText = responseText.replace(/\*/g, "");

          // Verificar se a resposta contém informações sobre preços específicos
          if (
            /R\$\s*\d+/.test(responseText) ||
            /reais|valor específico|custa/.test(responseText.toLowerCase())
          ) {
            responseText =
              "Nossos planos são personalizados de acordo com as necessidades do seu negócio. Nossa equipe comercial entrará em contato para discutir as melhores opções para você. Posso ajudar com mais alguma coisa?";
          }

          // Verificar se a resposta já termina com uma pergunta
          if (!responseText.match(/\?$/)) {
            responseText += "\n\nPosso ajudar com mais alguma coisa?";
          }

          const botMessage = {
            id: `resp_${Date.now()}`,
            text: responseText,
            sender: "bot",
            timestamp: new Date().toISOString(),
          };

          setMessages((prev) => [...prev, botMessage]);
          setIsTyping(false);
          return true;
        } catch (error) {
          console.error("Erro ao conectar com a API:", error);

          // Fallback: usar respostas simuladas
          setTimeout(() => {
            const fallbackMessage = {
              id: `resp_${Date.now()}`,
              text: "Desculpe, estou com dificuldades técnicas no momento. Nossa equipe já foi notificada. Por favor, tente novamente em alguns minutos ou entre em contato via WhatsApp.",
              sender: "bot",
              timestamp: new Date().toISOString(),
            };
            setMessages((prev) => [...prev, fallbackMessage]);
            setIsTyping(false);
          }, 1500);
          return false;
        }
      } catch (outerError) {
        console.error("Erro geral:", outerError);
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

          {/* Show AI notice only when chat has started (lead form is not showing) */}
          {!showLeadForm && (
            <div className="ai-notice">
              Este é um assistente de IA em treinamento. Respostas podem não ser
              precisas.
            </div>
          )}

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
