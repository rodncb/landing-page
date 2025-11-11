# 🎨 Plano de Design - Landing Page FacilitaAI

**Data**: 11/11/2025
**Status**: Em implementação

---

## 📊 ANÁLISE ATUAL

### ✅ **O que já funciona:**
- Design moderno com gradientes
- Animações suaves
- Hero section impactante
- Cores da marca (#ff6b6b, #0c1640, #804fff)
- Responsividade básica

### ⚠️ **Problemas identificados:**
1. **Responsividade quebrada** em monitores grandes (>1920px)
2. **Falta seção LIA** (produto principal)
3. **Falta seção CRM**
4. **Produtos não conectados** (sem fluxo integrado)
5. **Chat n8n** (vai ser removido depois)
6. **CTAs** apontam para WhatsApp (precisam ir para Waitlist)

---

## 🎯 OBJETIVOS

### FASE 1 - CORREÇÕES E ESTRUTURA (Hoje)
1. ✅ Corrigir responsividade (monitores grandes)
2. ✅ Remover chat n8n temporariamente
3. ✅ Adicionar seção LIA
4. ✅ Criar página Waitlist
5. ✅ Atualizar todos os CTAs

### FASE 2 - CONTEÚDO (Amanhã)
1. ✅ Seção CRM
2. ✅ Fluxo integrado (LIA → CRM → Vendas)
3. ✅ Melhorar copy
4. ✅ Adicionar ícones Lucide

### FASE 3 - POLISH (Depois)
1. ✅ Animações avançadas
2. ✅ Performance
3. ✅ SEO
4. ✅ Chat com IA da VPS

---

## 🔧 IMPLEMENTAÇÃO

### **TASK 1: Corrigir Responsividade**

#### Problema:
- `max-width: 1200px` e `1400px` muito pequeno para 4K
- Textos e espaçamentos não escalam bem

#### Solução:
```css
/* Global container */
.container {
  max-width: 1400px; /* Desktop padrão */
  margin: 0 auto;
  padding: 0 2rem;
}

/* Telas grandes (1920px+) */
@media (min-width: 1920px) {
  .container {
    max-width: 1600px;
  }

  .hero-content h1 {
    font-size: 4.5rem; /* Fixo, não vw */
  }
}

/* Telas 4K (2560px+) */
@media (min-width: 2560px) {
  .container {
    max-width: 1800px;
  }

  .hero-content h1 {
    font-size: 5rem;
  }
}
```

---

### **TASK 2: Remover Chat N8N**

```jsx
// App.jsx
import "./App.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Security from "./components/Security/Security";
import WhyUs from "./components/WhyUs/WhyUs";
import Footer from "./components/Footer/Footer";
// import Chat from "./components/Chat/Chat"; // REMOVIDO

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Features />
      <Security />
      <WhyUs />
      <Footer />
      {/* <Chat /> REMOVIDO */}
    </div>
  );
}
```

---

### **TASK 3: Adicionar Seção LIA**

#### Estrutura:
```
src/components/
  ├── LiaSection/
  │   ├── LiaSection.jsx
  │   └── LiaSection.css
```

#### Design:
- **Layout**: 2 colunas (conteúdo + imagem/demo)
- **Features**: 5 cards com ícones Lucide
- **CTA**: "Entrar na Lista de Espera"

#### Ícones (Lucide React):
- `Bot` - Assistente IA
- `Mic` - Transcrição de áudios
- `MessageCircle` - Conversação natural
- `TrendingUp` - Qualificação de leads
- `Link` - Integração CRM

#### Copy:
```
Título: LIA - Sua Assistente Inteligente no WhatsApp

Subtítulo: Atenda leads 24/7, qualifique automaticamente
e nunca perca uma venda. Tudo pelo WhatsApp que seu
cliente já usa.

Features:
1. Transcrição de Áudios
   Cliente mandou áudio? LIA transcreve em segundos.

2. Conversação Natural
   IA que entende contexto e responde como humano.

3. Qualificação Automática
   Identifica leads quentes e prioriza automaticamente.

4. Integração com CRM
   Conversas viram leads no CRM automaticamente.

5. Personalização Total
   Adapte LIA para o vocabulário do seu negócio.
```

---

### **TASK 4: Criar Página Waitlist**

#### Estrutura:
```
src/pages/
  ├── Waitlist/
  │   ├── Waitlist.jsx
  │   └── Waitlist.css
```

#### Design:
```
┌────────────────────────────────────────┐
│  NAVBAR (link para home)               │
└────────────────────────────────────────┘

┌────────────────────────────────────────┐
│        [Logo/Ícone]                    │
│                                        │
│   🚀 Seja um dos Primeiros!           │
│                                        │
│   A FacilitaAI está chegando em breve │
│   com soluções que vão transformar    │
│   seu negócio.                         │
│                                        │
│   ✅ Acesso antecipado                │
│   ✅ Desconto de lançamento            │
│   ✅ Onboarding personalizado          │
│                                        │
│   [FORMULÁRIO]                         │
│   • Nome completo                      │
│   • Email                              │
│   • WhatsApp                           │
│   • Interesse:                         │
│     [ ] LIA (WhatsApp IA)              │
│     [ ] CRM                            │
│     [ ] Softwares                      │
│   • Mensagem (opcional)                │
│                                        │
│   [Botão] Entrar na Lista              │
│                                        │
│   Já temos [42] pessoas aguardando! 🔥 │
└────────────────────────────────────────┘
```

#### Backend (temporário):
```javascript
// Salvar em localStorage por enquanto
const submitWaitlist = (data) => {
  const waitlist = JSON.parse(localStorage.getItem('waitlist') || '[]');
  waitlist.push({
    ...data,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem('waitlist', JSON.stringify(waitlist));
};
```

---

### **TASK 5: Atualizar CTAs**

#### Antes:
```jsx
<a href={whatsappLink} className="primary-button">
  SAIBA MAIS
</a>
```

#### Depois:
```jsx
<Link to="/waitlist" className="primary-button">
  ENTRAR NA LISTA DE ESPERA
</Link>
```

---

## 🎨 PALETA DE CORES

```css
:root {
  /* Primary */
  --primary: #ff6b6b;
  --primary-dark: #ff4b55;

  /* Secondary */
  --secondary: #804fff;
  --secondary-dark: #6b3ed4;

  /* Background */
  --bg-dark: #0c1640;
  --bg-light: #f8f8ff;

  /* Text */
  --text-dark: #333;
  --text-light: #fff;

  /* Gradients */
  --gradient-primary: linear-gradient(90deg, #ff6b6b, #ff4b55);
  --gradient-secondary: linear-gradient(135deg, #804fff, #ff6b6b);
}
```

---

## 📦 COMPONENTES A CRIAR

### 1. LiaSection.jsx
```jsx
import { Bot, Mic, MessageCircle, TrendingUp, Link as LinkIcon } from 'lucide-react';

const features = [
  { icon: <Mic />, title: "...", description: "..." },
  // ...
];
```

### 2. Waitlist.jsx
```jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Waitlist = () => {
  const [formData, setFormData] = useState({...});
  // ...
};
```

### 3. CRMSection.jsx (depois)
```jsx
import { Kanban, Users, FileText } from 'lucide-react';
```

---

## 📋 CHECKLIST DE IMPLEMENTAÇÃO

### Hoje (11/11):
- [ ] Instalar react-router-dom
- [ ] Corrigir responsividade (media queries)
- [ ] Remover chat n8n
- [ ] Criar componente LiaSection
- [ ] Criar página Waitlist
- [ ] Configurar rotas
- [ ] Atualizar CTAs
- [ ] Testar em múltiplas resoluções

### Amanhã (12/11):
- [ ] Criar seção CRM
- [ ] Criar fluxo integrado
- [ ] Melhorar copy
- [ ] Adicionar animações
- [ ] Otimizar imagens

### Depois:
- [ ] Performance (Lighthouse > 90)
- [ ] SEO (meta tags)
- [ ] Analytics
- [ ] Chat com IA da VPS

---

## 🚀 PRÓXIMOS PASSOS IMEDIATOS

1. **Instalar react-router-dom** para navegação
2. **Criar estrutura de pastas** para novos componentes
3. **Implementar correções de responsividade**
4. **Criar seção LIA**
5. **Criar página Waitlist**

---

**Criado em**: 11/11/2025
**Atualizado em**: 11/11/2025
**Status**: 🟡 Em progresso
