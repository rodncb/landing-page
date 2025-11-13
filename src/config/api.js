/**
 * Configuração da API de Chat
 *
 * Em desenvolvimento: usa LM Studio local
 * Em produção: usa API na VPS com Qwen via Ollama
 * Fallback: OpenAI (gpt-4o-mini) em caso de falha da VPS
 */

// Detectar ambiente
const isDevelopment =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1");

// URLs da API
const API_CONFIG = {
  development: {
    chatApiUrl: "http://127.0.0.1:8080/v1/chat/completions",
    apiKey: null, // Sem autenticação em desenvolvimento
  },
  production: {
    chatApiUrl: "https://api.facilitaai.com.br/v1/chat/completions",
    apiKey: "fclt_e18cd881811446635ce7578b1911bbd4",
  },
};

// OpenAI como fallback de emergência
export const OPENAI_CONFIG = {
  apiUrl: "https://api.openai.com/v1/chat/completions",
  // API Key será fornecida via proxy da VPS para não expor no frontend
  apiKey: null,
  model: "gpt-4o-mini", // Modelo econômico e rápido
};

// Exportar configuração baseada no ambiente
// Temporariamente usando produção em dev para testes (LM Studio não está rodando)
export const CHAT_API_URL = API_CONFIG.production.chatApiUrl;

export const API_KEY = API_CONFIG.production.apiKey;

export const IS_DEVELOPMENT = isDevelopment;

export default API_CONFIG;
