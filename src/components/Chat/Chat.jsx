import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";

const Chat = () => {
  // Estado para controlar visibilidade e mensagens do chat
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Ref para scroll automático
  const messagesEndRef = useRef(null);

  // Gerar ID único para esta conversa
  const [conversationId, setConversationId] = useState("");

  // URL do webhook do n8n
  const N8N_WEBHOOK_URL = "https://n8n.facilitaai.com.br/webhook/site";

  // Detectar ambiente
  const isDevelopment =
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1");

  // Gerar um ID único para a conversa
  useEffect(() => {
    if (!conversationId) {
      const newConversationId = `conv_${Date.now()}_${Math.random()
        .toString(36)
        .substring(2, 8)}`;
      setConversationId(newConversationId);
      console.log("ID da conversa gerado:", newConversationId);
    }
  }, [conversationId]);

  // Rolar para a última mensagem quando novas mensagens são adicionadas
  useEffect(() => {
    if (messagesEndRef.current && isChatOpen) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isChatOpen]);

  // Função para enviar mensagem para o n8n
  const sendMessageToN8n = async (message, type = "user") => {
    try {
      console.log(`Enviando mensagem para n8n: ${message} (tipo: ${type})`);
      console.log("URL do webhook:", N8N_WEBHOOK_URL);
      console.log("Ambiente:", isDevelopment ? "desenvolvimento" : "produção");

      const messageId = `msg_${Date.now()}`;

      const payload = {
        event: type === "first_message" ? "chat_started" : "message_sent",
        message_id: messageId,
        conversation_id: conversationId,
        message: message,
        type: type,
        timestamp: new Date().toISOString(),
        environment: isDevelopment ? "development" : "production",
        source_url: window.location.href,
      };

      console.log("Payload:", JSON.stringify(payload, null, 2));
      setIsTyping(true);

      // Configuração da requisição
      const fetchOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-Source": "facilitaai-chat",
          "X-Message-ID": messageId,
          "X-Conversation-ID": conversationId,
          "X-Environment": isDevelopment ? "development" : "production",
        },
        body: JSON.stringify(payload),
        // Não usar no-cors em produção
        ...(isDevelopment ? { mode: "no-cors" } : {}),
      };

      console.log("Enviando requisição para:", N8N_WEBHOOK_URL);

      try {
        // Usar fetch API para enviar mensagem
        const response = await fetch(N8N_WEBHOOK_URL, fetchOptions);

        // Se estamos em desenvolvimento com no-cors, não podemos ler a resposta
        if (isDevelopment && fetchOptions.mode === "no-cors") {
          console.log(
            "Modo no-cors em desenvolvimento - não é possível ler resposta"
          );

          // Adicionar mensagem de aviso se estamos em desenvolvimento
          const infoMessage = {
            id: `info_${Date.now()}`,
            text: "Em modo de desenvolvimento, não é possível visualizar respostas do webhook. Para teste completo, faça deploy para o domínio de produção.",
            sender: "bot",
            timestamp: new Date().toISOString(),
          };

          setMessages((prev) => [...prev, infoMessage]);
          setIsTyping(false);
          return true;
        }

        // Em produção ou desenvolvimento sem no-cors podemos processar a resposta
        console.log("Status da resposta:", response.status);

        // Processar a resposta
        const responseText = await response.text();
        console.log("Resposta completa:", responseText);

        if (responseText) {
          try {
            const responseData = JSON.parse(responseText);
            console.log("Resposta parseada:", responseData);

            if (responseData && responseData.response) {
              const botMessage = {
                id: `resp_${Date.now()}`,
                text: responseData.response,
                sender: "bot",
                timestamp: new Date().toISOString(),
              };

              setMessages((prev) => [...prev, botMessage]);
              setIsTyping(false);
              return true;
            }
          } catch (parseError) {
            console.error("Erro ao processar resposta JSON:", parseError);
          }
        }

        // Se chegou aqui, não conseguimos obter uma resposta válida
        setIsTyping(false);
      } catch (fetchError) {
        console.error("Erro na requisição:", fetchError);
        setIsTyping(false);
      }

      return true;
    } catch (error) {
      console.error("Erro geral:", error);
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

    // Se for a primeira mensagem, enviar evento de início de conversa
    if (messages.length === 1) {
      console.log(
        "Primeira mensagem do usuário, notificando início de conversa"
      );
      await sendMessageToN8n(userMessage.text, "first_message");
    } else {
      // Mensagem normal
      await sendMessageToN8n(userMessage.text);
    }
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
    if (messages.length === 0) {
      // Adiciona mensagem de boas-vindas
      const welcomeMessage = {
        id: `bot_${Date.now()}`,
        text: "Bem-vindo à Facilita.AI!\nComo posso ajudar?",
        sender: "bot",
        timestamp: new Date().toISOString(),
      };
      setMessages([welcomeMessage]);
    }
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
                src="/src/images/Logo.png"
                alt="Facilita.AI Logo"
                className="chat-logo"
              />
              <span>Suporte Facilita.AI</span>
            </div>
            <button className="chat-close" onClick={() => setIsChatOpen(false)}>
              &times;
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-message ${
                  message.sender === "user" ? "user-message" : "bot-message"
                }`}
              >
                {message.sender === "bot" && (
                  <div className="bot-avatar">
                    <img src="/src/images/Logo.png" alt="Bot Avatar" />
                  </div>
                )}
                <div className="message-content">
                  <div className="message-text">{message.text}</div>
                  <div className="message-time">
                    {new Date(message.timestamp).toLocaleTimeString([], {
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
                  <img src="/src/images/Logo.png" alt="Bot Avatar" />
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
              placeholder="Digite sua mensagem..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              rows={1}
            />
            <button
              className="chat-send"
              onClick={handleSendMessage}
              disabled={newMessage.trim() === ""}
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path
                  fill="currentColor"
                  d="M2,21L23,12L2,3V10L17,12L2,14V21Z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
