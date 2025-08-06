// Design System Configuration - FacilitaAI

export const designTokens = {
  colors: {
    primary: {
      red: "#ff4b55",
      redLight: "#ff6b6b",
      redHover: "#ff3b45",
      blue: "#6b4bff",
      blueLight: "#8b6bff",
      blueHover: "#5b3bef",
      blueDark: "#0c1640",
      blueMedium: "#1a2456",
    },
    status: {
      success: "#34d399",
      successLight: "#6ee7b7",
      warning: "#fbbf24",
      warningLight: "#fcd34d",
      error: "#ef4444",
      errorLight: "#f87171",
      info: "#3b82f6",
      infoLight: "#60a5fa",
    },
    services: {
      software: "#6b4bff",
      agent: "#ff4b55",
      automation: "#34d399",
    },
    neutral: {
      white: "#ffffff",
      black: "#000000",
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
    },
    gradients: {
      hero: "linear-gradient(180deg, #0c1640 0%, #1a2456 100%)",
      heroOverlay:
        "linear-gradient(135deg, rgba(12, 22, 64, 0.95) 0%, rgba(26, 36, 86, 0.9) 100%)",
      buttonPrimary: "linear-gradient(135deg, #ff6b6b 0%, #ff4b55 100%)",
      buttonSecondary: "linear-gradient(135deg, #8b6bff 0%, #6b4bff 100%)",
      text: "linear-gradient(90deg, #ffffff, #ff6b6b)",
      textBlue: "linear-gradient(90deg, #6b4bff, #8b6bff)",
      card: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
      serviceCard:
        "linear-gradient(135deg, rgba(107, 75, 255, 0.05) 0%, rgba(255, 75, 85, 0.05) 100%)",
      portfolioOverlay:
        "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
      aiAccent:
        "linear-gradient(45deg, rgba(107, 75, 255, 0.1) 0%, rgba(255, 75, 85, 0.1) 100%)",
      techBg:
        "linear-gradient(135deg, rgba(12, 22, 64, 0.02) 0%, rgba(26, 36, 86, 0.05) 100%)",
      innovationText:
        "linear-gradient(90deg, #6b4bff 0%, #ff4b55 50%, #6b4bff 100%)",
      ctaHover:
        "linear-gradient(135deg, rgba(255, 107, 107, 0.9) 0%, rgba(255, 75, 85, 0.9) 100%)",
    },
  },

  spacing: {
    xs: "0.5rem", // 8px
    sm: "1rem", // 16px
    md: "1.5rem", // 24px
    lg: "2rem", // 32px
    xl: "3rem", // 48px
    "2xl": "4rem", // 64px
    "3xl": "6rem", // 96px
    "4xl": "8rem", // 128px
  },

  borderRadius: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "32px",
    full: "50px",
  },

  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.04)",
    sm: "0 2px 4px rgba(0, 0, 0, 0.06)",
    md: "0 4px 12px rgba(0, 0, 0, 0.08)",
    lg: "0 8px 24px rgba(0, 0, 0, 0.12)",
    xl: "0 16px 48px rgba(0, 0, 0, 0.16)",
    "2xl": "0 24px 64px rgba(0, 0, 0, 0.20)",
    "3xl": "0 32px 80px rgba(0, 0, 0, 0.24)",
    red: "0 8px 32px rgba(255, 75, 85, 0.15)",
    redHover: "0 12px 40px rgba(255, 75, 85, 0.25)",
    redIntense: "0 16px 48px rgba(255, 75, 85, 0.3)",
    blue: "0 8px 32px rgba(107, 75, 255, 0.15)",
    blueHover: "0 12px 40px rgba(107, 75, 255, 0.25)",
    blueIntense: "0 16px 48px rgba(107, 75, 255, 0.3)",
    serviceCard: "0 4px 20px rgba(107, 75, 255, 0.08)",
    serviceCardHover: "0 8px 32px rgba(107, 75, 255, 0.15)",
    portfolioCard: "0 6px 24px rgba(0, 0, 0, 0.1)",
    portfolioCardHover: "0 12px 40px rgba(0, 0, 0, 0.15)",
    chatWidget: "0 8px 32px rgba(0, 0, 0, 0.12)",
    floatingButton: "0 4px 16px rgba(255, 75, 85, 0.2)",
    inset: "inset 0 1px 0 rgba(255, 255, 255, 0.1)",
    insetDark: "inset 0 1px 0 rgba(0, 0, 0, 0.1)",
  },

  typography: {
    fontFamily: {
      primary:
        '"Trend Sans One", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
      secondary:
        '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "3.75rem", // 60px
      "7xl": "4.5rem", // 72px
      "8xl": "6rem", // 96px
      "9xl": "8rem", // 128px
    },
    fontWeight: {
      thin: 100,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
  },

  transitions: {
    fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    base: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "350ms cubic-bezier(0.4, 0, 0.2, 1)",
    slower: "500ms cubic-bezier(0.4, 0, 0.2, 1)",
    bounce: "400ms cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    spring: "300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },

  zIndex: {
    0: 0,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    auto: "auto",
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  // Apple-inspired additions
  blur: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
  },

  backdropFilter: {
    xs: "blur(4px) saturate(180%)",
    sm: "blur(8px) saturate(180%)",
    md: "blur(12px) saturate(180%)",
    lg: "blur(16px) saturate(180%)",
    xl: "blur(24px) saturate(180%)",
  },

  transforms: {
    perspective: "1000px",
    rotateX: "rotateX(15deg)",
    rotateY: "rotateY(15deg)",
    scaleHover: "scale(1.05)",
    scaleActive: "scale(0.98)",
  },

  gradients: {
    glass:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.05))",
    glassDark:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02))",
    overlay:
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)",
  },
};

// Component variants configuration - Apple-inspired
export const componentVariants = {
  button: {
    primary: {
      background: designTokens.colors.gradients.button,
      color: designTokens.colors.neutral.white,
      boxShadow: designTokens.shadows.red,
      borderRadius: designTokens.borderRadius.full,
      padding: `${designTokens.spacing.md} ${designTokens.spacing.xl}`,
      fontSize: designTokens.typography.fontSize.lg,
      fontWeight: designTokens.typography.fontWeight.medium,
      transition: designTokens.transitions.spring,
      backdropFilter: "blur(20px) saturate(180%)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },
    secondary: {
      background: "rgba(255, 255, 255, 0.1)",
      color: designTokens.colors.primary.blue,
      border: `2px solid ${designTokens.colors.primary.blue}`,
      borderRadius: designTokens.borderRadius.full,
      padding: `${designTokens.spacing.md} ${designTokens.spacing.xl}`,
      fontSize: designTokens.typography.fontSize.lg,
      fontWeight: designTokens.typography.fontWeight.medium,
      transition: designTokens.transitions.spring,
      backdropFilter: "blur(20px) saturate(180%)",
    },
    ghost: {
      background: "transparent",
      color: designTokens.colors.primary.blue,
      borderRadius: designTokens.borderRadius.lg,
      padding: `${designTokens.spacing.sm} ${designTokens.spacing.md}`,
      fontSize: designTokens.typography.fontSize.base,
      fontWeight: designTokens.typography.fontWeight.medium,
      transition: designTokens.transitions.spring,
    },
    glass: {
      background: designTokens.gradients.glass,
      color: designTokens.colors.neutral.white,
      borderRadius: designTokens.borderRadius.xl,
      padding: `${designTokens.spacing.md} ${designTokens.spacing.xl}`,
      fontSize: designTokens.typography.fontSize.lg,
      fontWeight: designTokens.typography.fontWeight.medium,
      transition: designTokens.transitions.spring,
      backdropFilter: designTokens.backdropFilter.md,
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: designTokens.shadows.lg,
    },
  },

  card: {
    default: {
      background: designTokens.colors.neutral.white,
      borderRadius: designTokens.borderRadius.xl,
      boxShadow: designTokens.shadows.md,
      padding: designTokens.spacing.xl,
      transition: designTokens.transitions.spring,
      border: "1px solid rgba(0, 0, 0, 0.05)",
    },
    glass: {
      background: designTokens.gradients.glass,
      backdropFilter: designTokens.backdropFilter.md,
      borderRadius: designTokens.borderRadius.xl,
      border: "1px solid rgba(255, 255, 255, 0.2)",
      padding: designTokens.spacing.xl,
      transition: designTokens.transitions.spring,
      boxShadow: designTokens.shadows.lg,
    },
    elevated: {
      background: designTokens.colors.neutral.white,
      borderRadius: designTokens.borderRadius.xl,
      boxShadow: designTokens.shadows.xl,
      padding: designTokens.spacing.xl,
      transition: designTokens.transitions.spring,
      border: "1px solid rgba(0, 0, 0, 0.05)",
    },
    floating: {
      background: designTokens.colors.neutral.white,
      borderRadius: designTokens.borderRadius["2xl"],
      boxShadow: designTokens.shadows["2xl"],
      padding: designTokens.spacing.xl,
      transition: designTokens.transitions.spring,
      transform: "translateZ(0)",
      willChange: "transform",
    },
    service: {
      background: designTokens.colors.neutral.white,
      borderRadius: designTokens.borderRadius["2xl"],
      boxShadow: designTokens.shadows.sm,
      padding: designTokens.spacing.xl,
      transition: designTokens.transitions.spring,
      border: "1px solid rgba(0, 0, 0, 0.05)",
      position: "relative",
      overflow: "hidden",
    },
  },
};

// Animation presets - Apple-inspired
export const animations = {
  fadeIn: {
    keyframes: `
      from {
        opacity: 0;
        transform: translateY(20px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    `,
    duration: "0.6s",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  },

  slideInLeft: {
    keyframes: `
      from {
        opacity: 0;
        transform: translateX(-30px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateX(0) scale(1);
      }
    `,
    duration: "0.6s",
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },

  slideInRight: {
    keyframes: `
      from {
        opacity: 0;
        transform: translateX(30px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateX(0) scale(1);
      }
    `,
    duration: "0.6s",
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },

  float: {
    keyframes: `
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      50% {
        transform: translateY(-20px) rotate(5deg);
      }
    `,
    duration: "6s",
    easing: "ease-in-out",
    iteration: "infinite",
  },

  floatGentle: {
    keyframes: `
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    `,
    duration: "4s",
    easing: "ease-in-out",
    iteration: "infinite",
  },

  pulse: {
    keyframes: `
      0%, 100% {
        opacity: 0.8;
        transform: scale(1);
      }
      50% {
        opacity: 1;
        transform: scale(1.05);
      }
    `,
    duration: "2s",
    easing: "ease-in-out",
    iteration: "infinite",
  },

  breathe: {
    keyframes: `
      0%, 100% {
        transform: scale(1);
        opacity: 0.8;
      }
      50% {
        transform: scale(1.02);
        opacity: 1;
      }
    `,
    duration: "3s",
    easing: "ease-in-out",
    iteration: "infinite",
  },

  scaleIn: {
    keyframes: `
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    `,
    duration: "0.4s",
    easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },

  slideUp: {
    keyframes: `
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    `,
    duration: "0.5s",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

// Software House specific configuration
export const softwareHouseConfig = {
  layout: {
    headerHeight: "80px",
    heroMinHeight: "100vh",
    sectionPadding: "120px",
    sectionPaddingMobile: "80px",
    containerMaxWidth: "1400px",
    contentMaxWidth: "1200px",
  },

  grid: {
    servicesGap: "2rem",
    servicesCardMinHeight: "320px",
    portfolioGap: "1.5rem",
    portfolioCardAspect: "4/3",
  },

  chat: {
    widgetWidth: "380px",
    widgetHeight: "500px",
    widgetBottom: "24px",
    widgetRight: "24px",
    bubbleSize: "60px",
  },

  animation: {
    aiPulseDuration: "2s",
    aiGlowIntensity: "0.6",
    techFloatDistance: "15px",
    innovationScale: "1.05",
    hoverLiftDistance: "-8px",
    hoverScaleFactor: "1.02",
    activeScaleFactor: "0.98",
  },

  typography: {
    heroTitleSize: "clamp(3rem, 8vw, 6rem)",
    heroSubtitleSize: "clamp(1.25rem, 3vw, 1.5rem)",
    serviceTitleSize: "clamp(1.5rem, 4vw, 2rem)",
    serviceDescriptionSize: "1.1rem",
  },

  focus: {
    ringWidth: "3px",
    ringOffset: "2px",
  },
};

// Service categories configuration
export const serviceCategories = {
  software: {
    name: "Software & Apps",
    color: designTokens.colors.services.software,
    icon: "🚀",
    description:
      "Aplicações e sistemas modernos potencializados por inteligência artificial",
  },
  agent: {
    name: "Agentes Inteligentes",
    color: designTokens.colors.services.agent,
    icon: "🤖",
    description:
      "Assistentes virtuais e chatbots personalizados para seu negócio",
  },
  automation: {
    name: "Automações IA",
    color: designTokens.colors.services.automation,
    icon: "⚡",
    description: "Automatização de processos com inteligência artificial",
  },
};

// Component presets for software house theme
export const softwareHousePresets = {
  heroSection: {
    background: designTokens.colors.gradients.hero,
    minHeight: softwareHouseConfig.layout.heroMinHeight,
    padding: softwareHouseConfig.layout.sectionPadding,
    textAlign: "center",
  },

  serviceCard: {
    minHeight: softwareHouseConfig.grid.servicesCardMinHeight,
    padding: designTokens.spacing.xl,
    borderRadius: designTokens.borderRadius["2xl"],
    background: designTokens.colors.neutral.white,
    boxShadow: designTokens.shadows.serviceCard,
    transition: designTokens.transitions.spring,
  },

  portfolioCard: {
    aspectRatio: softwareHouseConfig.grid.portfolioCardAspect,
    borderRadius: designTokens.borderRadius.xl,
    overflow: "hidden",
    boxShadow: designTokens.shadows.portfolioCard,
    transition: designTokens.transitions.spring,
  },

  chatWidget: {
    width: softwareHouseConfig.chat.widgetWidth,
    height: softwareHouseConfig.chat.widgetHeight,
    borderRadius: designTokens.borderRadius["2xl"],
    boxShadow: designTokens.shadows.chatWidget,
    position: "fixed",
    bottom: softwareHouseConfig.chat.widgetBottom,
    right: softwareHouseConfig.chat.widgetRight,
    zIndex: designTokens.zIndex[50],
  },

  primaryButton: {
    background: designTokens.colors.gradients.buttonPrimary,
    color: designTokens.colors.neutral.white,
    padding: `${designTokens.spacing.md} ${designTokens.spacing.xl}`,
    borderRadius: designTokens.borderRadius.full,
    fontSize: designTokens.typography.fontSize.lg,
    fontWeight: designTokens.typography.fontWeight.semibold,
    boxShadow: designTokens.shadows.red,
    transition: designTokens.transitions.spring,
    border: "none",
    cursor: "pointer",
  },

  secondaryButton: {
    background: designTokens.colors.gradients.buttonSecondary,
    color: designTokens.colors.neutral.white,
    padding: `${designTokens.spacing.md} ${designTokens.spacing.xl}`,
    borderRadius: designTokens.borderRadius.full,
    fontSize: designTokens.typography.fontSize.lg,
    fontWeight: designTokens.typography.fontWeight.semibold,
    boxShadow: designTokens.shadows.blue,
    transition: designTokens.transitions.spring,
    border: "none",
    cursor: "pointer",
  },
};

export default designTokens;
