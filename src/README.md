# FacilitaAI - Software House Redesign

## Estrutura do Projeto

Esta é a nova estrutura organizacional do projeto FacilitaAI, redesenhada para uma software house moderna com foco em IA.

### Diretórios Principais

```
src/
├── components/           # Componentes React organizados por categoria
│   ├── common/          # Componentes reutilizáveis (Button, Card, Modal, Loading)
│   ├── layout/          # Componentes de layout (Header, Footer, Navigation)
│   ├── sections/        # Seções principais do site (Hero, Services, Portfolio, etc.)
│   └── features/        # Funcionalidades específicas (ChatAI, PortfolioFilter, ContactForm)
├── hooks/               # Custom hooks React
├── services/            # Serviços e integrações de API
├── utils/               # Funções utilitárias
├── styles/              # Sistema de design e estilos globais
├── assets/              # Recursos estáticos (imagens, ícones, etc.)
└── config/              # Configurações do sistema de design
```

### Sistema de Design

O projeto utiliza um sistema de design baseado em tokens CSS customizados, inspirado no padrão Apple:

#### Arquivos de Estilo:

- `styles/design-tokens.css` - Variáveis CSS para cores, espaçamento, tipografia, etc.
- `styles/utilities.css` - Classes utilitárias para layout e estilização
- `styles/globals.css` - Estilos globais e reset CSS

#### Configuração:

- `config/design-system.js` - Configuração JavaScript do sistema de design

### Paleta de Cores (Mantida da Identidade Atual)

```css
--primary-red: #ff4b55;
--primary-red-light: #ff6b6b;
--primary-blue: #6b4bff;
--primary-blue-dark: #0c1640;
--primary-blue-medium: #1a2456;
```

### Componentes

#### Common Components

- **Button**: Componente de botão com variantes (primary, secondary, ghost)
- **Card**: Componente de card com variantes (default, glass, elevated)
- **Modal**: Componente de modal para exibição de conteúdo
- **Loading**: Componente de loading com animações

#### Layout Components

- **Header**: Cabeçalho responsivo com navegação
- **Footer**: Rodapé com informações da empresa
- **Navigation**: Componente de navegação mobile

#### Section Components

- **Hero**: Seção principal com apresentação da software house
- **Services**: Seção de serviços (Software & Apps, Agentes IA, Automações)
- **Portfolio**: Showcase de projetos e cases
- **About**: Seção sobre a empresa
- **Contact**: Seção de contato multi-canal
- **Testimonials**: Depoimentos de clientes

#### Feature Components

- **ChatAI**: Widget de chat com integração Arcee IA
- **PortfolioFilter**: Sistema de filtros do portfólio
- **ContactForm**: Formulário de contato avançado

### Responsividade

O sistema utiliza breakpoints baseados no padrão mobile-first:

```css
--breakpoint-sm: 640px; /* Mobile large */
--breakpoint-md: 768px; /* Tablet */
--breakpoint-lg: 1024px; /* Desktop small */
--breakpoint-xl: 1280px; /* Desktop large */
--breakpoint-2xl: 1536px; /* Desktop extra large */
```

### Animações

O projeto inclui animações inspiradas no padrão Apple:

- Transições suaves
- Efeitos 3D sutis
- Micro-interações
- Animações de entrada (fade-in, slide-in)
- Efeitos de hover e focus

### Acessibilidade

- Suporte a `prefers-reduced-motion`
- Focus visible para navegação por teclado
- Contraste adequado de cores
- Estrutura semântica HTML

### Performance

- Lazy loading para componentes não críticos
- Otimização de imagens
- CSS otimizado com variáveis customizadas
- Suporte a tree shaking

### Desenvolvimento

Para usar o sistema de design:

1. Importe os estilos globais no componente raiz
2. Use as classes utilitárias para layout rápido
3. Acesse os tokens via CSS custom properties
4. Use a configuração JavaScript para componentes dinâmicos

Exemplo:

```jsx
import "../styles/globals.css";

function MyComponent() {
  return (
    <div className="container p-xl bg-gradient-hero rounded-xl shadow-lg">
      <h1 className="text-5xl font-bold text-white mb-lg">Título</h1>
    </div>
  );
}
```

### Branch Strategy

- `main`: Versão atual em produção
- `feature/software-house-redesign`: Nova versão em desenvolvimento
- Deploy via FTP para Hostinger mantendo o site atual funcionando
