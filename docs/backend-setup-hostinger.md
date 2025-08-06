# Configuração Backend - Hostinger

## Visão Geral

Este documento explica como configurar o backend para capturar dados do formulário de contato e integrar com chat IA na Hostinger.

## Arquitetura Proposta

```
Frontend (React) → API Backend (PHP/Node.js) → Banco de Dados (MySQL) → Email/CRM
                                            → Chat IA (Arcee API)
```

## Opções de Implementação na Hostinger

### Opção 1: PHP + MySQL (Recomendada para Hostinger)

#### 1. Estrutura de Arquivos

```
public_html/
├── index.html (React build)
├── static/ (CSS, JS, assets)
├── api/
│   ├── contact.php
│   ├── chat.php
│   ├── config.php
│   └── database.php
└── .htaccess
```

#### 2. Banco de Dados MySQL

```sql
-- Criar tabela para leads
CREATE TABLE leads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    solution VARCHAR(100) NOT NULL,
    source VARCHAR(50) DEFAULT 'modal_form',
    page VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('new', 'contacted', 'converted') DEFAULT 'new'
);

-- Criar tabela para mensagens do chat
CREATE TABLE chat_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    session_id VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    sender ENUM('user', 'ai') NOT NULL,
    context JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 3. API de Contato (contact.php)

```php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once 'config.php';
require_once 'database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    // Validar dados
    $name = filter_var($input['name'], FILTER_SANITIZE_STRING);
    $phone = filter_var($input['phone'], FILTER_SANITIZE_STRING);
    $solution = filter_var($input['solution'], FILTER_SANITIZE_STRING);
    $source = $input['source'] ?? 'modal_form';
    $page = $input['page'] ?? '';

    if (empty($name) || empty($phone) || empty($solution)) {
        http_response_code(400);
        echo json_encode(['error' => 'Dados obrigatórios não fornecidos']);
        exit;
    }

    try {
        $db = new Database();
        $conn = $db->getConnection();

        // Inserir no banco
        $stmt = $conn->prepare("
            INSERT INTO leads (name, phone, solution, source, page)
            VALUES (?, ?, ?, ?, ?)
        ");
        $stmt->execute([$name, $phone, $solution, $source, $page]);

        // Enviar email de notificação
        sendNotificationEmail($name, $phone, $solution);

        // Resposta de sucesso
        echo json_encode([
            'success' => true,
            'message' => 'Dados recebidos com sucesso'
        ]);

    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Erro interno do servidor']);
        error_log($e->getMessage());
    }
}

function sendNotificationEmail($name, $phone, $solution) {
    $to = 'contato@facilitaai.com.br';
    $subject = 'Novo Lead - FacilitaAI';
    $message = "
        Novo lead recebido:

        Nome: $name
        Telefone: $phone
        Solução: $solution
        Data: " . date('d/m/Y H:i:s') . "
    ";

    $headers = 'From: noreply@facilitaai.com.br' . "\r\n" .
               'Reply-To: noreply@facilitaai.com.br' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
}
?>
```

#### 4. Configuração (config.php)

```php
<?php
// Configurações do banco de dados
define('DB_HOST', 'localhost');
define('DB_NAME', 'seu_banco_de_dados');
define('DB_USER', 'seu_usuario');
define('DB_PASS', 'sua_senha');

// Configurações da API Arcee IA
define('ARCEE_API_KEY', 'sua_chave_api_arcee');
define('ARCEE_API_URL', 'https://api.arcee.ai/v1/chat');

// Configurações de email
define('SMTP_HOST', 'smtp.hostinger.com');
define('SMTP_PORT', 587);
define('SMTP_USER', 'contato@facilitaai.com.br');
define('SMTP_PASS', 'sua_senha_email');
?>
```

#### 5. Classe Database (database.php)

```php
<?php
class Database {
    private $host = DB_HOST;
    private $db_name = DB_NAME;
    private $username = DB_USER;
    private $password = DB_PASS;
    private $conn;

    public function getConnection() {
        $this->conn = null;

        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->db_name,
                $this->username,
                $this->password
            );
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->conn;
    }
}
?>
```

#### 6. API do Chat IA (chat.php)

```php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    $message = $input['message'] ?? '';
    $sessionId = $input['sessionId'] ?? uniqid();

    if (empty($message)) {
        http_response_code(400);
        echo json_encode(['error' => 'Mensagem não fornecida']);
        exit;
    }

    try {
        // Chamar API Arcee IA
        $response = callArceeAPI($message, $sessionId);

        // Salvar mensagens no banco (opcional)
        // saveMessage($sessionId, $message, 'user');
        // saveMessage($sessionId, $response, 'ai');

        echo json_encode([
            'success' => true,
            'response' => $response,
            'sessionId' => $sessionId
        ]);

    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Erro ao processar mensagem']);
        error_log($e->getMessage());
    }
}

function callArceeAPI($message, $sessionId) {
    $systemPrompt = "Você é um assistente da FacilitaAI, uma software house especializada em IA. Seja prestativo e direcione para os serviços: Software & Apps, Agentes Inteligentes, Automações IA.";

    $data = [
        'model' => 'arcee-ai-model',
        'messages' => [
            ['role' => 'system', 'content' => $systemPrompt],
            ['role' => 'user', 'content' => $message]
        ],
        'max_tokens' => 1024,
        'temperature' => 0.7
    ];

    $ch = curl_init(ARCEE_API_URL);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Authorization: Bearer ' . ARCEE_API_KEY
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode !== 200) {
        throw new Exception('Erro na API Arcee: ' . $response);
    }

    $result = json_decode($response, true);
    return $result['choices'][0]['message']['content'] ?? 'Desculpe, não consegui processar sua mensagem.';
}
?>
```

### Opção 2: Node.js (Se suportado pela Hostinger)

#### 1. package.json

```json
{
  "name": "facilitaai-backend",
  "version": "1.0.0",
  "main": "server.js",
  "dependencies": {
    "express": "^4.18.0",
    "cors": "^2.8.5",
    "mysql2": "^3.6.0",
    "nodemailer": "^6.9.0",
    "axios": "^1.5.0",
    "dotenv": "^16.3.0"
  }
}
```

#### 2. server.js

```javascript
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const nodemailer = require("nodemailer");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Configuração do banco
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

// Endpoint para formulário de contato
app.post("/api/contact", async (req, res) => {
  try {
    const { name, phone, solution, source, page } = req.body;

    // Validação
    if (!name || !phone || !solution) {
      return res
        .status(400)
        .json({ error: "Dados obrigatórios não fornecidos" });
    }

    // Salvar no banco
    const connection = await mysql.createConnection(dbConfig);
    await connection.execute(
      "INSERT INTO leads (name, phone, solution, source, page) VALUES (?, ?, ?, ?, ?)",
      [name, phone, solution, source || "modal_form", page || ""]
    );
    await connection.end();

    // Enviar email
    await sendNotificationEmail(name, phone, solution);

    res.json({ success: true, message: "Dados recebidos com sucesso" });
  } catch (error) {
    console.error("Erro:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// Endpoint para chat IA
app.post("/api/chat", async (req, res) => {
  try {
    const { message, sessionId } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Mensagem não fornecida" });
    }

    const response = await callArceeAPI(message, sessionId);

    res.json({
      success: true,
      response,
      sessionId: sessionId || Date.now().toString(),
    });
  } catch (error) {
    console.error("Erro no chat:", error);
    res.status(500).json({ error: "Erro ao processar mensagem" });
  }
});

async function sendNotificationEmail(name, phone, solution) {
  const transporter = nodemailer.createTransporter({
    host: "smtp.hostinger.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: "contato@facilitaai.com.br",
    subject: "Novo Lead - FacilitaAI",
    text: `
      Novo lead recebido:
      
      Nome: ${name}
      Telefone: ${phone}
      Solução: ${solution}
      Data: ${new Date().toLocaleString("pt-BR")}
    `,
  });
}

async function callArceeAPI(message, sessionId) {
  const response = await axios.post(
    "https://api.arcee.ai/v1/chat",
    {
      model: "arcee-ai-model",
      messages: [
        {
          role: "system",
          content:
            "Você é um assistente da FacilitaAI, uma software house especializada em IA. Seja prestativo e direcione para os serviços: Software & Apps, Agentes Inteligentes, Automações IA.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 1024,
      temperature: 0.7,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.ARCEE_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.choices[0].message.content;
}

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```

## Configuração no Frontend

### Atualizar ContactFormModal.jsx

```javascript
const submitForm = async () => {
  const submissionData = {
    ...formData,
    source: "modal_form",
    page: window.location.pathname,
  };

  try {
    const response = await fetch("/api/contact", {
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
    return result;
  } catch (error) {
    console.error("Erro:", error);
    throw error;
  }
};
```

## Deploy na Hostinger

### 1. Build do Frontend

```bash
npm run build
```

### 2. Upload via FTP

- Upload da pasta `dist/` para `public_html/`
- Upload dos arquivos PHP para `public_html/api/`

### 3. Configurar Banco de Dados

- Criar banco MySQL no painel da Hostinger
- Executar scripts SQL para criar tabelas
- Configurar credenciais em `config.php`

### 4. Configurar Email

- Usar email da Hostinger (ex: contato@facilitaai.com.br)
- Configurar SMTP no código

### 5. Variáveis de Ambiente

- Criar arquivo `.env` (se Node.js) ou configurar em `config.php`
- Adicionar chaves da API Arcee IA

## Monitoramento e Logs

### 1. Logs de Erro

```php
// Em cada arquivo PHP
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', '/path/to/error.log');
```

### 2. Dashboard Simples (admin.php)

```php
<?php
// Dashboard básico para visualizar leads
require_once 'database.php';

$db = new Database();
$conn = $db->getConnection();

$stmt = $conn->query("SELECT * FROM leads ORDER BY created_at DESC LIMIT 50");
$leads = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard - FacilitaAI</title>
    <style>
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <h1>Leads Recebidos</h1>
    <table>
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Solução</th>
            <th>Data</th>
            <th>Status</th>
        </tr>
        <?php foreach ($leads as $lead): ?>
        <tr>
            <td><?= $lead['id'] ?></td>
            <td><?= htmlspecialchars($lead['name']) ?></td>
            <td><?= htmlspecialchars($lead['phone']) ?></td>
            <td><?= htmlspecialchars($lead['solution']) ?></td>
            <td><?= $lead['created_at'] ?></td>
            <td><?= $lead['status'] ?></td>
        </tr>
        <?php endforeach; ?>
    </table>
</body>
</html>
```

## Segurança

### 1. Validação e Sanitização

- Sempre validar dados de entrada
- Usar prepared statements
- Sanitizar dados antes de salvar

### 2. Rate Limiting

```php
// Implementar rate limiting básico
function checkRateLimit($ip) {
    $file = "rate_limit_$ip.txt";
    $current_time = time();

    if (file_exists($file)) {
        $last_request = file_get_contents($file);
        if ($current_time - $last_request < 60) { // 1 minuto
            return false;
        }
    }

    file_put_contents($file, $current_time);
    return true;
}
```

### 3. HTTPS

- Certificar que o site usa HTTPS
- Configurar headers de segurança

## Backup e Manutenção

### 1. Backup Automático

```bash
# Script para backup do banco
mysqldump -u usuario -p banco_dados > backup_$(date +%Y%m%d).sql
```

### 2. Limpeza de Logs

```php
// Limpar logs antigos
$stmt = $conn->prepare("DELETE FROM chat_messages WHERE created_at < DATE_SUB(NOW(), INTERVAL 30 DAY)");
$stmt->execute();
```

Este setup fornece uma base sólida para capturar leads e integrar chat IA na Hostinger, com opções tanto em PHP quanto Node.js dependendo do suporte disponível.
