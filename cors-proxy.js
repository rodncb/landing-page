// Este arquivo pode ser usado para configurar um servidor proxy CORS simples
// Para usar: execute `node cors-proxy.js` em produção
// Depois, configure o URL do N8N para apontar para este proxy em vez de diretamente para o n8n

const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

// Configurar CORS para permitir qualquer origem
app.use(
  cors({
    origin: "*", // Em produção, restrinja para seu domínio específico
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Configurar o proxy para o n8n
const n8nProxy = createProxyMiddleware({
  target: "https://n8n.facilitaai.com.br",
  changeOrigin: true,
  pathRewrite: {
    "^/api/n8n": "/", // Redireciona /api/n8n para / no n8n
  },
  onProxyRes: function (proxyRes, req, res) {
    // Adiciona cabeçalhos CORS às respostas
    proxyRes.headers["Access-Control-Allow-Origin"] = "*";
    proxyRes.headers["Access-Control-Allow-Methods"] = "GET,POST,OPTIONS";
    proxyRes.headers["Access-Control-Allow-Headers"] =
      "Content-Type,Authorization";
  },
});

// Rotas para o n8n
app.use("/api/n8n", n8nProxy);

// Rota específica para o webhook
app.use("/api/n8n/webhook-test/site", n8nProxy);

// Rota para verificar se o servidor está funcionando
app.get("/", (req, res) => {
  res.send("Proxy CORS está funcionando!");
});

// Porta do servidor
const PORT = process.env.PORT || 3333;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor proxy CORS rodando na porta ${PORT}`);
  console.log(
    `Use http://localhost:${PORT}/api/n8n/webhook-test/site no seu componente Chat.jsx`
  );
});

// Nota: Para usar este proxy em produção, você precisará instalar as dependências:
// npm install express cors http-proxy-middleware
