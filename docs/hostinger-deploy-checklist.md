# Checklist de Deploy - Hostinger

## ✅ Pré-requisitos

### 1. Conta Hostinger

- [ ] Conta ativa na Hostinger
- [ ] Painel de controle acessível
- [ ] Domínio configurado (facilitaai.com.br)

### 2. Banco de Dados

- [ ] Criar banco MySQL no painel Hostinger
- [ ] Anotar credenciais: host, nome do banco, usuário, senha
- [ ] Testar conexão

### 3. Email

- [ ] Criar email contato@facilitaai.com.br
- [ ] Configurar senha do email
- [ ] Anotar configurações SMTP

### 4. API Keys

- [ ] Obter chave API Arcee IA
- [ ] Testar API em ambiente de desenvolvimento

## 🔧 Configuração Backend

### 1. Estrutura de Arquivos

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

### 2. Criar Banco de Dados

**SQL para executar no phpMyAdmin:**

```sql
-- Tabela para leads do formulário
CREATE TABLE leads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    solution VARCHAR(100) NOT NULL,
    source VARCHAR(50) DEFAULT 'modal_form',
    page VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('new', 'contacted', 'converted') DEFAULT 'new',
    INDEX idx_created_at (created_at),
    INDEX idx_status (status)
);

-- Tabela para mensagens do chat (opcional)
CREATE TABLE chat_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    session_id VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    sender ENUM('user', 'ai') NOT NULL,
    context JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_session (session_id),
    INDEX idx_created_at (created_at)
);
```

### 3. Configurar config.php

```php
<?php
// Configurações do banco de dados - ALTERAR COM SEUS DADOS
define('DB_HOST', 'localhost');
define('DB_NAME', 'u123456789_facilitaai'); // Seu banco
define('DB_USER', 'u123456789_user');       // Seu usuário
define('DB_PASS', 'SuaSenhaSegura123');     // Sua senha

// Configurações da API Arcee IA
define('ARCEE_API_KEY', 'sua_chave_api_arcee_aqui');
define('ARCEE_API_URL', 'https://api.arcee.ai/v1/chat');

// Configurações de email - ALTERAR COM SEUS DADOS
define('SMTP_HOST', 'smtp.hostinger.com');
define('SMTP_PORT', 587);
define('SMTP_USER', 'contato@facilitaai.com.br');
define('SMTP_PASS', 'SuaSenhaEmail123');

// Configurações de segurança
define('RATE_LIMIT_SECONDS', 60); // 1 minuto entre submissões
define('MAX_DAILY_SUBMISSIONS', 50); // Máximo por IP por dia
?>
```

### 4. Upload dos Arquivos PHP

**Arquivos para upload via FTP/File Manager:**

1. **api/contact.php** - Endpoint para formulário
2. **api/chat.php** - Endpoint para chat IA
3. **api/config.php** - Configurações
4. **api/database.php** - Classe de conexão
5. **api/admin.php** - Dashboard (opcional)

### 5. Configurar .htaccess

```apache
# Redirecionar para HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Headers de segurança
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"

# CORS para API
<Files "*.php">
    Header set Access-Control-Allow-Origin "*"
    Header set Access-Control-Allow-Methods "POST, GET, OPTIONS"
    Header set Access-Control-Allow-Headers "Content-Type"
</Files>

# Cache para assets estáticos
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/gif "access plus 1 month"
    ExpiresByType image/svg+xml "access plus 1 month"
</IfModule>
```

## 🚀 Deploy Frontend

### 1. Build do React

```bash
# No seu ambiente local
npm run build
```

### 2. Upload via FTP

- [ ] Fazer backup do site atual
- [ ] Upload da pasta `dist/` para `public_html/`
- [ ] Verificar se todos os arquivos foram enviados
- [ ] Testar se o site carrega

### 3. Testar Funcionalidades

- [ ] Navegação do site
- [ ] Botões "Iniciar Projeto" abrem modal
- [ ] Formulário funciona (testar com dados reais)
- [ ] Responsividade mobile
- [ ] Performance (PageSpeed Insights)

## 🔍 Testes e Validação

### 1. Teste do Formulário

- [ ] Abrir modal
- [ ] Preencher nome
- [ ] Preencher telefone (testar formatação)
- [ ] Selecionar solução
- [ ] Verificar se dados chegam no banco
- [ ] Verificar se email é enviado

### 2. Teste do Backend

- [ ] Acessar https://facilitaai.com.br/api/contact.php (deve retornar erro de método)
- [ ] Verificar logs de erro PHP
- [ ] Testar conexão com banco via phpMyAdmin

### 3. Teste de Performance

- [ ] Google PageSpeed Insights
- [ ] GTmetrix
- [ ] Teste em diferentes dispositivos
- [ ] Teste em diferentes navegadores

## 📊 Monitoramento

### 1. Dashboard Administrativo

- [ ] Acessar https://facilitaai.com.br/api/admin.php
- [ ] Verificar se leads aparecem
- [ ] Testar filtros por data

### 2. Logs e Monitoramento

- [ ] Configurar logs de erro PHP
- [ ] Monitorar emails recebidos
- [ ] Verificar espaço em disco
- [ ] Monitorar uso de banda

### 3. Backup

- [ ] Configurar backup automático do banco
- [ ] Backup dos arquivos PHP
- [ ] Testar restauração

## 🔒 Segurança

### 1. SSL/HTTPS

- [ ] Certificado SSL ativo
- [ ] Redirecionamento HTTP → HTTPS
- [ ] Testar em diferentes navegadores

### 2. Proteções

- [ ] Rate limiting funcionando
- [ ] Validação de dados ativa
- [ ] Headers de segurança configurados
- [ ] Acesso ao admin protegido

### 3. Senhas e Chaves

- [ ] Senhas fortes configuradas
- [ ] Chaves API seguras
- [ ] Credenciais não expostas no código

## 📞 Contatos de Suporte

### Hostinger

- **Suporte:** https://www.hostinger.com.br/contato
- **Chat:** Disponível no painel
- **Documentação:** https://support.hostinger.com/

### Arcee IA

- **Documentação:** https://docs.arcee.ai/
- **Suporte:** Conforme plano contratado

## 🚨 Troubleshooting

### Problemas Comuns

**1. Erro 500 - Internal Server Error**

- Verificar logs de erro PHP
- Checar permissões de arquivos (644 para PHP)
- Validar sintaxe PHP

**2. Formulário não envia**

- Verificar console do navegador
- Testar endpoint diretamente
- Verificar CORS headers

**3. Email não chega**

- Verificar configurações SMTP
- Checar spam/lixo eletrônico
- Testar com diferentes provedores

**4. Banco não conecta**

- Verificar credenciais em config.php
- Testar conexão via phpMyAdmin
- Verificar se banco existe

### Comandos Úteis

**Verificar logs PHP:**

```bash
tail -f /path/to/error.log
```

**Testar API via curl:**

```bash
curl -X POST https://facilitaai.com.br/api/contact.php \
  -H "Content-Type: application/json" \
  -d '{"name":"Teste","phone":"11999999999","solution":"software"}'
```

**Backup do banco:**

```bash
mysqldump -u usuario -p banco_dados > backup.sql
```

## ✅ Checklist Final

- [ ] Site carregando em https://facilitaai.com.br
- [ ] Modal abrindo nos botões CTA
- [ ] Formulário enviando dados
- [ ] Emails sendo recebidos
- [ ] Dashboard admin funcionando
- [ ] Performance aceitável (>80 no PageSpeed)
- [ ] Responsivo em mobile
- [ ] SSL ativo e funcionando
- [ ] Backup configurado
- [ ] Monitoramento ativo

---

**Data do Deploy:** **_/_**/2025  
**Responsável:** ******\_\_\_\_******  
**Status:** [ ] Concluído [ ] Pendente [ ] Com problemas
