# Design Document

## Overview

O redesign da FacilitaAI transformará o site atual de foco específico em IA para uma software house moderna e completa, mantendo a identidade visual existente (cores #ff4b55, #6b4bff, gradientes azul-escuro) e incorporando elementos de design inspirados no padrão Apple. O projeto utilizará a stack atual (React + Vite) com melhorias na arquitetura de componentes e implementação de funcionalidades avançadas como chat IA integrado.

## Architecture

### Frontend Architecture

```
src/
├── components/
│   ├── common/           # Componentes reutilizáveis
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Modal/
│   │   └── Loading/
│   ├── layout/           # Componentes de layout
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── Navigation/
│   ├── sections/         # Seções principais
│   │   ├── Hero/
│   │   ├── Services/
│   │   ├── Portfolio/
│   │   ├── About/
│   │   ├── Contact/
│   │   └── Testimonials/
│   └── features/         # Funcionalidades específicas
│       ├── ChatAI/
│       ├── PortfolioFilter/
│       └── ContactForm/
├── hooks/                # Custom hooks
├── services/             # Serviços e APIs
├── utils/                # Utilitários
├── styles/               # Estilos globais
└── assets/               # Recursos estáticos
```

### Backend Architecture (Integração)

```
backend/
├── api/
│   ├── chat/             # Endpoints do chat IA
│   ├── contact/          # Formulários de contato
│   └── portfolio/        # Dados do portfólio
├── services/
│   ├── arceeAI.js        # Integração com Arcee IA
│   └── email.js          # Serviço de email
└── middleware/
    ├── cors.js           # Configuração CORS
    └── auth.js           # Autenticação básica
```

## Components and Interfaces

### 1. Hero Section Redesign

**Componente:** `HeroSoftwareHouse`

- **Visual:** Manter gradiente azul atual (#0c1640 → #1a2456)
- **Conteúdo:** Novo copy focado em software house
- **Animações:** Transições 3D sutis nos elementos flutuantes
- **CTA:** Botões para "Nossos Serviços" e "Falar com Especialista"

### 2. Services Section

**Componente:** `ServicesGrid`

- **Layout:** Grid 3 colunas (desktop) / 1 coluna (mobile)
- **Serviços:**
  - WebApps com IA
  - Agentes Inteligentes
  - Automações IA
- **Visual:** Cards com hover effects 3D, ícones animados
- **Cores:** Manter paleta atual com acentos em #ff6b6b

### 3. Portfolio Section

**Componente:** `PortfolioShowcase`

- **Layout:** Masonry grid responsivo
- **Filtros:** Por categoria (WebApps, Agentes, Automações)
- **Modal:** Detalhes expandidos com imagens e cases
- **Animações:** Parallax scroll e transições suaves

### 4. Chat IA Integration

**Componente:** `ChatAIWidget`

- **API:** Integração com Arcee IA
- **UI:** Widget flutuante estilo Apple (bordas arredondadas, sombras)
- **Features:**
  - Auto-abertura após 30s
  - Contexto sobre serviços da empresa
  - Coleta de leads qualificados
  - Responsivo mobile

### 5. About Section

**Componente:** `AboutSoftwareHouse`

- **Conteúdo:** Foco em inovação e IA como diferencial
- **Visual:** Timeline interativa com marcos da empresa
- **Elementos:** Estatísticas animadas, team showcase

### 6. Contact Section

**Componente:** `ContactMultiChannel`

- **Canais:** Formulário, WhatsApp, Email, Telefone
- **Integração:** Backend para processamento de formulários
- **Visual:** Cards interativos com micro-animações

### 7. Contact Form Modal

**Componente:** `ContactFormModal`

- **Funcionalidade:** Modal com formulário conduzido por IA
- **Etapas:** Nome → Telefone → Solução → Confirmação
- **Integração:** API backend para captura de leads
- **Visual:** Design Apple-inspired com avatar IA animado
- **Dados Coletados:**
  - Nome completo
  - Telefone/WhatsApp (formatado)
  - Tipo de solução desejada
- **Triggers:** Botões "Iniciar Projeto" e "Começar Meu Projeto"

## Data Models

### Chat IA Data Flow

```javascript
// Estrutura da mensagem
const ChatMessage = {
  id: string,
  content: string,
  sender: 'user' | 'ai',
  timestamp: Date,
  context?: {
    page: string,
    userIntent: string,
    leadData?: object
  }
}

// Configuração do chat
const ChatConfig = {
  apiKey: string,
  model: 'arcee-ai-model',
  maxTokens: 1024,
  temperature: 0.7,
  systemPrompt: string,
  autoTriggerDelay: 30000
}
```

### Portfolio Data Structure

```javascript
const PortfolioItem = {
  id: string,
  title: string,
  category: 'webapp' | 'agent' | 'automation',
  description: string,
  technologies: string[],
  images: string[],
  aiFeatures: string[],
  results: {
    metric: string,
    value: string
  }[],
  link?: string,
  featured: boolean
}
```

### Contact Form Data

```javascript
const ContactSubmission = {
  name: string,
  phone: string,
  solution: "software" | "agent" | "automation" | "consultoria" | "outros",
  source: "modal_form" | "chat" | "whatsapp",
  page: string,
  timestamp: Date,
};
```

### Modal Form Steps

```javascript
const FormSteps = [
  {
    id: "welcome",
    aiMessage: "Olá! 👋 Sou a assistente virtual da FacilitaAI...",
    field: "name",
    type: "text",
  },
  {
    id: "phone",
    aiMessage: "Prazer em conhecê-lo! Para que possamos entrar em contato...",
    field: "phone",
    type: "tel",
  },
  {
    id: "solution",
    aiMessage:
      "Perfeito! Agora me conte: qual tipo de solução você está buscando...",
    field: "solution",
    type: "select",
  },
  {
    id: "success",
    aiMessage: "Excelente! Recebemos suas informações...",
    isSuccess: true,
  },
];
```

## Error Handling

### Frontend Error Boundaries

- **ChatError:** Fallback para problemas na API do chat
- **PortfolioError:** Tratamento de falhas no carregamento do portfólio
- **FormError:** Validação e feedback de formulários

### API Error Handling

```javascript
// Estrutura padrão de erro
const APIError = {
  status: number,
  message: string,
  code: string,
  details?: object
}

// Tratamento específico por serviço
const ChatErrorHandler = {
  rateLimitExceeded: () => showFallbackMessage(),
  apiKeyInvalid: () => disableChatTemporarily(),
  networkError: () => showRetryOption()
}
```

### Graceful Degradation

- Chat IA indisponível → Formulário de contato tradicional
- Animações 3D → Fallback para animações 2D em dispositivos menos potentes
- Imagens não carregadas → Placeholders com cores da marca

## Testing Strategy

### Unit Testing

- **Componentes:** Jest + React Testing Library
- **Hooks:** Testes isolados para lógica de estado
- **Utilitários:** Cobertura 100% para funções críticas

### Integration Testing

- **Chat IA:** Mocks da API Arcee para testes end-to-end
- **Formulários:** Validação e submissão completa
- **Portfolio:** Filtros e navegação

### Visual Testing

- **Responsividade:** Testes em múltiplas resoluções
- **Cross-browser:** Chrome, Firefox, Safari, Edge
- **Performance:** Lighthouse scores > 90

### E2E Testing

- **User Journeys:** Cypress para fluxos críticos
- **Chat Flow:** Interação completa usuário-IA
- **Contact Flow:** Submissão de formulários e leads

## Design System

### Typography

```css
/* Manter fonte atual */
font-family: "Trend Sans One", "Inter", -apple-system, BlinkMacSystemFont;

/* Hierarquia */
h1: 5vw (desktop) / 8vw (mobile)
h2: 3rem / 2.5rem
h3: 2rem / 1.8rem
body: 1.1rem / 1rem
```

### Color Palette (Manter Atual)

```css
/* Cores primárias */
--primary-red: #ff4b55;
--primary-red-light: #ff6b6b;
--primary-blue: #6b4bff;
--primary-blue-dark: #0c1640;
--primary-blue-medium: #1a2456;

/* Gradientes */
--gradient-hero: linear-gradient(180deg, #0c1640 0%, #1a2456 100%);
--gradient-button: linear-gradient(90deg, #ff6b6b, #ff4b55);
--gradient-text: linear-gradient(90deg, #ffffff, #ff6b6b);
```

### Spacing System (Apple-inspired)

```css
/* Sistema de espaçamento */
--space-xs: 0.5rem;
--space-sm: 1rem;
--space-md: 1.5rem;
--space-lg: 2rem;
--space-xl: 3rem;
--space-2xl: 4rem;
--space-3xl: 6rem;
```

### Border Radius (Apple-style)

```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-full: 50px;
```

### Shadows (Depth)

```css
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.15);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.2);
--shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.25);
```

## Performance Optimization

### Code Splitting

- Lazy loading para seções não críticas
- Dynamic imports para chat IA
- Separate bundles para admin features

### Image Optimization

- WebP format com fallback
- Responsive images com srcset
- Lazy loading com Intersection Observer

### Animation Performance

- CSS transforms para animações 3D
- will-change property para elementos animados
- Reduced motion support

### Bundle Optimization

- Tree shaking para bibliotecas não utilizadas
- Compression (gzip/brotli)
- CDN para assets estáticos

## Deployment Strategy

### Branch Strategy

```
main (produção atual)
├── develop (desenvolvimento)
└── feature/software-house-redesign (novo site)
```

### Build Process

1. **Development:** `npm run dev` (Vite dev server)
2. **Build:** `npm run build` (otimização para produção)
3. **Preview:** `npm run preview` (teste local da build)
4. **Deploy:** FTP upload para Hostinger

### Environment Configuration

```javascript
// .env.production
VITE_ARCEE_API_KEY=your_api_key_here
VITE_API_BASE_URL=https://facilitaai.com.br/api
VITE_CHAT_ENABLED=true
VITE_ANALYTICS_ID=your_analytics_id
```

### Backend Configuration (Hostinger)

**Estrutura de Arquivos:**

```
public_html/
├── index.html (React build)
├── static/ (CSS, JS, assets)
├── api/
│   ├── contact.php (Endpoint para formulário)
│   ├── chat.php (Endpoint para chat IA)
│   ├── config.php (Configurações)
│   └── database.php (Conexão MySQL)
└── .htaccess
```

**Banco de Dados MySQL:**

```sql
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
```

**Configurações Necessárias:**

- Banco MySQL na Hostinger
- Email SMTP configurado
- Chave API Arcee IA
- Certificado SSL (HTTPS)

**Documentação Completa:** `docs/backend-setup-hostinger.md`

### Rollback Plan

- Manter backup da versão atual
- Script de rollback via FTP
- Monitoramento de erros pós-deploy
