export type Language = 'es' | 'en' | 'fr' | 'de';

export interface Translations {
  // Header & Navigation
  nav: {
    learn: string;
    tools: string;
    markets: string;
    blog: string;
    goldGuide: string;
    goldHistory: string;
    glossary: string;
    calculator: string;
    converter: string;
    comparator: string;
    alerts: string;
  };
  
  // Hero Section
  hero: {
    badge: string;
    title1: string;
    titleHighlight: string;
    title2: string;
    subtitle: string;
    cta: string;
    demo: string;
    trustTitle: string;
  };
  
  // Features Section
  features: {
    badge: string;
    title1: string;
    titleHighlight: string;
    subtitle: string;
    items: {
      realTimePrice: { title: string; description: string };
      wealthProtection: { title: string; description: string };
      diversification: { title: string; description: string };
      financialEducation: { title: string; description: string };
      globalMarket: { title: string; description: string };
      intrinsicValue: { title: string; description: string };
    };
  };
  
  // Tools Section
  tools: {
    badge: string;
    title1: string;
    titleHighlight: string;
    subtitle: string;
  };
  
  // Historical Chart
  historicalChart: {
    title: string;
    subtitle: string;
    years: string;
    initialPrice: string;
    currentPrice: string;
    change: string;
    maximum: string;
    legend1: string;
    legend2: string;
    disclaimer: string;
  };
  
  // Comparison Chart
  comparisonChart: {
    title: string;
    subtitle: string;
    viewMode: {
      percentage: string;
      absolute: string;
    };
    assets: {
      gold: string;
      sp500: string;
      bitcoin: string;
      inflation: string;
    };
    performance: string;
    disclaimer: string;
  };
  
  // Gold Converter
  goldConverter: {
    title: string;
    subtitle: string;
    grams: string;
    ounces: string;
    value: string;
    currentPrice: string;
    perOunce: string;
  };
  
  // Investment Calculator
  investmentCalculator: {
    title: string;
    subtitle: string;
    initialInvestment: string;
    years: string;
    annualReturn: string;
    goldOunces: string;
    projectedValue: string;
    totalGain: string;
    disclaimer: string;
  };
  
  // Asset Comparator
  assetComparator: {
    title: string;
    subtitle: string;
    selectAssets: string;
    compare: string;
    disclaimer: string;
  };
  
  // Price Alert Form
  priceAlert: {
    title: string;
    subtitle: string;
    currentPrice: string;
    email: string;
    targetPrice: string;
    condition: string;
    above: string;
    below: string;
    createAlert: string;
    creatingAlert: string;
    activeAlerts: string;
    alertCreated: string;
    alertCreatedDesc: string;
    alertDeleted: string;
    alertDeletedDesc: string;
    disclaimer: string;
    requiredFields: string;
    requiredFieldsDesc: string;
    invalidEmail: string;
    invalidEmailDesc: string;
    invalidPrice: string;
    invalidPriceDesc: string;
    error: string;
    errorDesc: string;
    exceeds: string;
    dropsBelow: string;
  };
  
  // Blog Section
  blog: {
    badge: string;
    title1: string;
    titleHighlight: string;
    viewAll: string;
    readTime: string;
  };
  
  // Newsletter Section
  newsletter: {
    title1: string;
    titleHighlight: string;
    subtitle: string;
    placeholder: string;
    subscribe: string;
    thanks: string;
    successTitle: string;
    successDesc: string;
    privacy: string;
  };
  
  // Footer
  footer: {
    description: string;
    resources: string;
    learn: string;
    legal: string;
    howToBuy: string;
    goldTypes: string;
    storage: string;
    taxation: string;
    legalNotice: string;
    privacy: string;
    cookies: string;
    disclaimer: string;
    copyright: string;
    disclaimerText: string;
  };
  
  // Gold Price Display
  goldPrice: {
    goldPrice: string;
    perOunce: string;
    change24h: string;
  };
  
  // Common
  common: {
    loading: string;
    error: string;
    close: string;
    save: string;
    cancel: string;
    delete: string;
    confirm: string;
    back: string;
    next: string;
    previous: string;
    search: string;
    filter: string;
    sort: string;
    all: string;
    none: string;
    select: string;
    selected: string;
    currency: string;
    language: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      learn: 'Aprender',
      tools: 'Herramientas',
      markets: 'Mercados',
      blog: 'Blog',
      goldGuide: 'Guía del Oro',
      goldHistory: 'Historia del Oro',
      glossary: 'Glosario',
      calculator: 'Calculadora',
      converter: 'Conversor',
      comparator: 'Comparador',
      alerts: 'Alertas',
    },
    hero: {
      badge: 'Mercado en tiempo real',
      title1: 'Invierte en',
      titleHighlight: 'Oro',
      title2: 'con Conocimiento',
      subtitle: 'Tu guía definitiva para entender, comprar y gestionar inversiones en metales preciosos. Herramientas profesionales al alcance de todos.',
      cta: 'Comenzar Ahora',
      demo: 'Ver Demo',
      trustTitle: 'Información de fuentes oficiales',
    },
    features: {
      badge: '¿Por qué Oro?',
      title1: 'El Metal',
      titleHighlight: 'Eterno',
      subtitle: 'Descubre por qué el oro ha sido la reserva de valor más confiable durante milenios',
      items: {
        realTimePrice: {
          title: 'Precio en Tiempo Real',
          description: 'Seguimiento del precio del oro actualizado constantemente desde fuentes oficiales.',
        },
        wealthProtection: {
          title: 'Protección Patrimonial',
          description: 'El oro ha demostrado ser un refugio seguro durante crisis económicas y geopolíticas.',
        },
        diversification: {
          title: 'Diversificación',
          description: 'Reduce el riesgo de tu cartera añadiendo un activo descorrelacionado con los mercados.',
        },
        financialEducation: {
          title: 'Educación Financiera',
          description: 'Guías completas y artículos para convertirte en un inversor informado.',
        },
        globalMarket: {
          title: 'Mercado Global',
          description: 'El oro se comercia 24/7 en mercados de todo el mundo con alta liquidez.',
        },
        intrinsicValue: {
          title: 'Valor Intrínseco',
          description: 'A diferencia del dinero fiat, el oro mantiene su valor a través de los siglos.',
        },
      },
    },
    tools: {
      badge: 'Herramientas Profesionales',
      title1: 'Toma Decisiones',
      titleHighlight: 'Informadas',
      subtitle: 'Calculadoras y herramientas interactivas para analizar tus inversiones en oro',
    },
    historicalChart: {
      title: 'Evolución Histórica del Oro',
      subtitle: 'Precio del oro en USD por onza troy',
      years: 'Años',
      initialPrice: 'Precio Inicial',
      currentPrice: 'Precio Actual',
      change: 'Cambio',
      maximum: 'Máximo',
      legend1: 'Precio del Oro (USD/oz)',
      legend2: 'Precio Inicial del Período',
      disclaimer: 'Datos históricos aproximados. Precios de referencia, no constituyen asesoramiento financiero.',
    },
    comparisonChart: {
      title: 'Comparativa de Activos',
      subtitle: 'Compara el rendimiento del oro con otros activos',
      viewMode: {
        percentage: 'Porcentaje',
        absolute: 'Valor Absoluto',
      },
      assets: {
        gold: 'Oro',
        sp500: 'S&P 500',
        bitcoin: 'Bitcoin',
        inflation: 'Inflación (IPC)',
      },
      performance: 'Rendimiento',
      disclaimer: 'Datos simulados con fines educativos. No constituyen asesoramiento de inversión.',
    },
    goldConverter: {
      title: 'Conversor de Oro',
      subtitle: 'Convierte entre unidades y valor',
      grams: 'Gramos',
      ounces: 'Onzas Troy',
      value: 'Valor',
      currentPrice: 'Precio actual',
      perOunce: 'por onza',
    },
    investmentCalculator: {
      title: 'Calculadora de Rentabilidad',
      subtitle: 'Simula el crecimiento de tu inversión en oro',
      initialInvestment: 'Inversión Inicial',
      years: 'Años',
      annualReturn: 'Retorno anual',
      goldOunces: 'Onzas de oro',
      projectedValue: 'Valor proyectado',
      totalGain: 'Ganancia total',
      disclaimer: '* Simulación basada en rendimiento histórico. Resultados pasados no garantizan rendimientos futuros.',
    },
    assetComparator: {
      title: 'Comparador de Activos',
      subtitle: 'Compara el rendimiento de diferentes inversiones',
      selectAssets: 'Selecciona activos para comparar',
      compare: 'Comparar',
      disclaimer: 'Datos históricos aproximados. Solo con fines educativos.',
    },
    priceAlert: {
      title: 'Alertas de Precio',
      subtitle: 'Recibe un email cuando el oro alcance tu precio objetivo',
      currentPrice: 'Precio actual',
      email: 'Email para notificaciones',
      targetPrice: 'Precio objetivo',
      condition: 'Condición',
      above: 'Sube',
      below: 'Baja',
      createAlert: 'Crear Alerta',
      creatingAlert: 'Creando alerta...',
      activeAlerts: 'Alertas activas',
      alertCreated: 'Alerta creada',
      alertCreatedDesc: 'Te notificaremos cuando el oro',
      alertDeleted: 'Alerta eliminada',
      alertDeletedDesc: 'La alerta de precio ha sido eliminada.',
      disclaimer: 'Las alertas se envían una vez cuando se alcanza el precio objetivo.',
      requiredFields: 'Campos requeridos',
      requiredFieldsDesc: 'Por favor completa todos los campos.',
      invalidEmail: 'Email inválido',
      invalidEmailDesc: 'Por favor introduce un email válido.',
      invalidPrice: 'Precio inválido',
      invalidPriceDesc: 'Por favor introduce un precio válido.',
      error: 'Error',
      errorDesc: 'No se pudo crear la alerta. Inténtalo de nuevo.',
      exceeds: 'supere',
      dropsBelow: 'baje de',
    },
    blog: {
      badge: 'Blog & Educación',
      title1: 'Conocimiento que',
      titleHighlight: 'Multiplica',
      viewAll: 'Ver todos los artículos',
      readTime: 'min de lectura',
    },
    newsletter: {
      title1: 'No te Pierdas',
      titleHighlight: 'Ninguna Oportunidad',
      subtitle: 'Recibe alertas de precio, análisis de mercado y guías exclusivas directamente en tu email.',
      placeholder: 'tu@email.com',
      subscribe: 'Suscribirme',
      thanks: '¡Gracias por suscribirte!',
      successTitle: '¡Suscripción exitosa!',
      successDesc: 'Recibirás nuestras alertas y análisis en tu correo.',
      privacy: 'Sin spam. Cancela cuando quieras. Tu privacidad es nuestra prioridad.',
    },
    footer: {
      description: 'Tu portal de referencia para inversiones en metales preciosos. Información, herramientas y educación financiera de calidad.',
      resources: 'Recursos',
      learn: 'Aprende',
      legal: 'Legal',
      howToBuy: 'Cómo Comprar Oro',
      goldTypes: 'Tipos de Oro',
      storage: 'Almacenamiento',
      taxation: 'Fiscalidad',
      legalNotice: 'Aviso Legal',
      privacy: 'Privacidad',
      cookies: 'Cookies',
      disclaimer: 'Disclaimer',
      copyright: 'Todos los derechos reservados.',
      disclaimerText: 'Este sitio es únicamente informativo y educativo. No constituye asesoramiento financiero, de inversión o legal. Consulta a un profesional antes de tomar decisiones de inversión.',
    },
    goldPrice: {
      goldPrice: 'Oro',
      perOunce: '/oz',
      change24h: '24h',
    },
    common: {
      loading: 'Cargando...',
      error: 'Error',
      close: 'Cerrar',
      save: 'Guardar',
      cancel: 'Cancelar',
      delete: 'Eliminar',
      confirm: 'Confirmar',
      back: 'Atrás',
      next: 'Siguiente',
      previous: 'Anterior',
      search: 'Buscar',
      filter: 'Filtrar',
      sort: 'Ordenar',
      all: 'Todos',
      none: 'Ninguno',
      select: 'Seleccionar',
      selected: 'Seleccionado',
      currency: 'Moneda',
      language: 'Idioma',
    },
  },
  
  en: {
    nav: {
      learn: 'Learn',
      tools: 'Tools',
      markets: 'Markets',
      blog: 'Blog',
      goldGuide: 'Gold Guide',
      goldHistory: 'Gold History',
      glossary: 'Glossary',
      calculator: 'Calculator',
      converter: 'Converter',
      comparator: 'Comparator',
      alerts: 'Alerts',
    },
    hero: {
      badge: 'Live Market',
      title1: 'Invest in',
      titleHighlight: 'Gold',
      title2: 'with Knowledge',
      subtitle: 'Your ultimate guide to understanding, buying and managing precious metals investments. Professional tools accessible to everyone.',
      cta: 'Get Started',
      demo: 'Watch Demo',
      trustTitle: 'Information from official sources',
    },
    features: {
      badge: 'Why Gold?',
      title1: 'The',
      titleHighlight: 'Eternal',
      subtitle: 'Discover why gold has been the most reliable store of value for millennia',
      items: {
        realTimePrice: {
          title: 'Real-Time Price',
          description: 'Track gold prices constantly updated from official sources.',
        },
        wealthProtection: {
          title: 'Wealth Protection',
          description: 'Gold has proven to be a safe haven during economic and geopolitical crises.',
        },
        diversification: {
          title: 'Diversification',
          description: 'Reduce portfolio risk by adding an asset uncorrelated with markets.',
        },
        financialEducation: {
          title: 'Financial Education',
          description: 'Complete guides and articles to become an informed investor.',
        },
        globalMarket: {
          title: 'Global Market',
          description: 'Gold is traded 24/7 in markets worldwide with high liquidity.',
        },
        intrinsicValue: {
          title: 'Intrinsic Value',
          description: 'Unlike fiat money, gold maintains its value through the centuries.',
        },
      },
    },
    tools: {
      badge: 'Professional Tools',
      title1: 'Make',
      titleHighlight: 'Informed',
      subtitle: 'Interactive calculators and tools to analyze your gold investments',
    },
    historicalChart: {
      title: 'Historical Gold Evolution',
      subtitle: 'Gold price in USD per troy ounce',
      years: 'Years',
      initialPrice: 'Initial Price',
      currentPrice: 'Current Price',
      change: 'Change',
      maximum: 'Maximum',
      legend1: 'Gold Price (USD/oz)',
      legend2: 'Period Starting Price',
      disclaimer: 'Approximate historical data. Reference prices, not financial advice.',
    },
    comparisonChart: {
      title: 'Asset Comparison',
      subtitle: 'Compare gold performance with other assets',
      viewMode: {
        percentage: 'Percentage',
        absolute: 'Absolute Value',
      },
      assets: {
        gold: 'Gold',
        sp500: 'S&P 500',
        bitcoin: 'Bitcoin',
        inflation: 'Inflation (CPI)',
      },
      performance: 'Performance',
      disclaimer: 'Simulated data for educational purposes. Not investment advice.',
    },
    goldConverter: {
      title: 'Gold Converter',
      subtitle: 'Convert between units and value',
      grams: 'Grams',
      ounces: 'Troy Ounces',
      value: 'Value',
      currentPrice: 'Current price',
      perOunce: 'per ounce',
    },
    investmentCalculator: {
      title: 'ROI Calculator',
      subtitle: 'Simulate the growth of your gold investment',
      initialInvestment: 'Initial Investment',
      years: 'Years',
      annualReturn: 'Annual return',
      goldOunces: 'Gold ounces',
      projectedValue: 'Projected value',
      totalGain: 'Total gain',
      disclaimer: '* Simulation based on historical performance. Past results do not guarantee future returns.',
    },
    assetComparator: {
      title: 'Asset Comparator',
      subtitle: 'Compare the performance of different investments',
      selectAssets: 'Select assets to compare',
      compare: 'Compare',
      disclaimer: 'Approximate historical data. For educational purposes only.',
    },
    priceAlert: {
      title: 'Price Alerts',
      subtitle: 'Get an email when gold reaches your target price',
      currentPrice: 'Current price',
      email: 'Notification email',
      targetPrice: 'Target price',
      condition: 'Condition',
      above: 'Above',
      below: 'Below',
      createAlert: 'Create Alert',
      creatingAlert: 'Creating alert...',
      activeAlerts: 'Active alerts',
      alertCreated: 'Alert created',
      alertCreatedDesc: "We'll notify you when gold",
      alertDeleted: 'Alert deleted',
      alertDeletedDesc: 'The price alert has been deleted.',
      disclaimer: 'Alerts are sent once when the target price is reached.',
      requiredFields: 'Required fields',
      requiredFieldsDesc: 'Please complete all fields.',
      invalidEmail: 'Invalid email',
      invalidEmailDesc: 'Please enter a valid email.',
      invalidPrice: 'Invalid price',
      invalidPriceDesc: 'Please enter a valid price.',
      error: 'Error',
      errorDesc: 'Could not create alert. Please try again.',
      exceeds: 'exceeds',
      dropsBelow: 'drops below',
    },
    blog: {
      badge: 'Blog & Education',
      title1: 'Knowledge that',
      titleHighlight: 'Multiplies',
      viewAll: 'View all articles',
      readTime: 'min read',
    },
    newsletter: {
      title1: "Don't Miss",
      titleHighlight: 'Any Opportunity',
      subtitle: 'Receive price alerts, market analysis and exclusive guides directly to your email.',
      placeholder: 'you@email.com',
      subscribe: 'Subscribe',
      thanks: 'Thanks for subscribing!',
      successTitle: 'Subscription successful!',
      successDesc: "You'll receive our alerts and analysis in your inbox.",
      privacy: 'No spam. Cancel anytime. Your privacy is our priority.',
    },
    footer: {
      description: 'Your reference portal for precious metals investments. Quality information, tools and financial education.',
      resources: 'Resources',
      learn: 'Learn',
      legal: 'Legal',
      howToBuy: 'How to Buy Gold',
      goldTypes: 'Gold Types',
      storage: 'Storage',
      taxation: 'Taxation',
      legalNotice: 'Legal Notice',
      privacy: 'Privacy',
      cookies: 'Cookies',
      disclaimer: 'Disclaimer',
      copyright: 'All rights reserved.',
      disclaimerText: 'This site is for informational and educational purposes only. It does not constitute financial, investment or legal advice. Consult a professional before making investment decisions.',
    },
    goldPrice: {
      goldPrice: 'Gold',
      perOunce: '/oz',
      change24h: '24h',
    },
    common: {
      loading: 'Loading...',
      error: 'Error',
      close: 'Close',
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      confirm: 'Confirm',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      search: 'Search',
      filter: 'Filter',
      sort: 'Sort',
      all: 'All',
      none: 'None',
      select: 'Select',
      selected: 'Selected',
      currency: 'Currency',
      language: 'Language',
    },
  },
  
  fr: {
    nav: {
      learn: 'Apprendre',
      tools: 'Outils',
      markets: 'Marchés',
      blog: 'Blog',
      goldGuide: "Guide de l'Or",
      goldHistory: "Histoire de l'Or",
      glossary: 'Glossaire',
      calculator: 'Calculateur',
      converter: 'Convertisseur',
      comparator: 'Comparateur',
      alerts: 'Alertes',
    },
    hero: {
      badge: 'Marché en direct',
      title1: 'Investissez dans',
      titleHighlight: "l'Or",
      title2: 'en Connaissance',
      subtitle: "Votre guide ultime pour comprendre, acheter et gérer les investissements en métaux précieux. Outils professionnels accessibles à tous.",
      cta: 'Commencer',
      demo: 'Voir la Démo',
      trustTitle: 'Informations provenant de sources officielles',
    },
    features: {
      badge: "Pourquoi l'Or ?",
      title1: 'Le Métal',
      titleHighlight: 'Éternel',
      subtitle: "Découvrez pourquoi l'or est la réserve de valeur la plus fiable depuis des millénaires",
      items: {
        realTimePrice: {
          title: 'Prix en Temps Réel',
          description: "Suivi du prix de l'or constamment mis à jour depuis des sources officielles.",
        },
        wealthProtection: {
          title: 'Protection du Patrimoine',
          description: "L'or a prouvé être une valeur refuge lors des crises économiques et géopolitiques.",
        },
        diversification: {
          title: 'Diversification',
          description: 'Réduisez le risque de votre portefeuille en ajoutant un actif décorrélé des marchés.',
        },
        financialEducation: {
          title: 'Éducation Financière',
          description: 'Guides complets et articles pour devenir un investisseur informé.',
        },
        globalMarket: {
          title: 'Marché Mondial',
          description: "L'or est négocié 24h/24, 7j/7 sur les marchés du monde entier avec une haute liquidité.",
        },
        intrinsicValue: {
          title: 'Valeur Intrinsèque',
          description: "Contrairement à la monnaie fiduciaire, l'or conserve sa valeur à travers les siècles.",
        },
      },
    },
    tools: {
      badge: 'Outils Professionnels',
      title1: 'Prenez des Décisions',
      titleHighlight: 'Éclairées',
      subtitle: "Calculateurs et outils interactifs pour analyser vos investissements en or",
    },
    historicalChart: {
      title: "Évolution Historique de l'Or",
      subtitle: "Prix de l'or en USD par once troy",
      years: 'Ans',
      initialPrice: 'Prix Initial',
      currentPrice: 'Prix Actuel',
      change: 'Variation',
      maximum: 'Maximum',
      legend1: "Prix de l'Or (USD/oz)",
      legend2: 'Prix Initial de la Période',
      disclaimer: 'Données historiques approximatives. Prix de référence, ne constituent pas un conseil financier.',
    },
    comparisonChart: {
      title: 'Comparaison des Actifs',
      subtitle: "Comparez la performance de l'or avec d'autres actifs",
      viewMode: {
        percentage: 'Pourcentage',
        absolute: 'Valeur Absolue',
      },
      assets: {
        gold: 'Or',
        sp500: 'S&P 500',
        bitcoin: 'Bitcoin',
        inflation: 'Inflation (IPC)',
      },
      performance: 'Performance',
      disclaimer: "Données simulées à des fins éducatives. Ne constituent pas un conseil d'investissement.",
    },
    goldConverter: {
      title: "Convertisseur d'Or",
      subtitle: 'Convertissez entre unités et valeur',
      grams: 'Grammes',
      ounces: 'Onces Troy',
      value: 'Valeur',
      currentPrice: 'Prix actuel',
      perOunce: "par once",
    },
    investmentCalculator: {
      title: 'Calculateur de Rentabilité',
      subtitle: "Simulez la croissance de votre investissement en or",
      initialInvestment: 'Investissement Initial',
      years: 'Années',
      annualReturn: 'Rendement annuel',
      goldOunces: "Onces d'or",
      projectedValue: 'Valeur projetée',
      totalGain: 'Gain total',
      disclaimer: '* Simulation basée sur les performances historiques. Les résultats passés ne garantissent pas les rendements futurs.',
    },
    assetComparator: {
      title: 'Comparateur d\'Actifs',
      subtitle: 'Comparez la performance de différents investissements',
      selectAssets: 'Sélectionnez des actifs à comparer',
      compare: 'Comparer',
      disclaimer: 'Données historiques approximatives. À des fins éducatives uniquement.',
    },
    priceAlert: {
      title: 'Alertes de Prix',
      subtitle: "Recevez un email quand l'or atteint votre prix cible",
      currentPrice: 'Prix actuel',
      email: 'Email pour les notifications',
      targetPrice: 'Prix cible',
      condition: 'Condition',
      above: 'Au-dessus',
      below: 'En-dessous',
      createAlert: 'Créer une Alerte',
      creatingAlert: 'Création en cours...',
      activeAlerts: 'Alertes actives',
      alertCreated: 'Alerte créée',
      alertCreatedDesc: "Nous vous notifierons quand l'or",
      alertDeleted: 'Alerte supprimée',
      alertDeletedDesc: "L'alerte de prix a été supprimée.",
      disclaimer: 'Les alertes sont envoyées une fois lorsque le prix cible est atteint.',
      requiredFields: 'Champs requis',
      requiredFieldsDesc: 'Veuillez remplir tous les champs.',
      invalidEmail: 'Email invalide',
      invalidEmailDesc: 'Veuillez entrer un email valide.',
      invalidPrice: 'Prix invalide',
      invalidPriceDesc: 'Veuillez entrer un prix valide.',
      error: 'Erreur',
      errorDesc: "Impossible de créer l'alerte. Veuillez réessayer.",
      exceeds: 'dépasse',
      dropsBelow: 'descend sous',
    },
    blog: {
      badge: 'Blog & Éducation',
      title1: 'La Connaissance qui',
      titleHighlight: 'Multiplie',
      viewAll: 'Voir tous les articles',
      readTime: 'min de lecture',
    },
    newsletter: {
      title1: 'Ne Manquez',
      titleHighlight: 'Aucune Opportunité',
      subtitle: 'Recevez des alertes de prix, des analyses de marché et des guides exclusifs directement dans votre email.',
      placeholder: 'vous@email.com',
      subscribe: "S'abonner",
      thanks: 'Merci de votre inscription !',
      successTitle: 'Inscription réussie !',
      successDesc: 'Vous recevrez nos alertes et analyses dans votre boîte mail.',
      privacy: 'Pas de spam. Annulez quand vous voulez. Votre vie privée est notre priorité.',
    },
    footer: {
      description: "Votre portail de référence pour les investissements en métaux précieux. Information, outils et éducation financière de qualité.",
      resources: 'Ressources',
      learn: 'Apprendre',
      legal: 'Légal',
      howToBuy: "Comment Acheter de l'Or",
      goldTypes: "Types d'Or",
      storage: 'Stockage',
      taxation: 'Fiscalité',
      legalNotice: 'Mentions Légales',
      privacy: 'Confidentialité',
      cookies: 'Cookies',
      disclaimer: 'Avertissement',
      copyright: 'Tous droits réservés.',
      disclaimerText: "Ce site est uniquement informatif et éducatif. Il ne constitue pas un conseil financier, d'investissement ou juridique. Consultez un professionnel avant de prendre des décisions d'investissement.",
    },
    goldPrice: {
      goldPrice: 'Or',
      perOunce: '/oz',
      change24h: '24h',
    },
    common: {
      loading: 'Chargement...',
      error: 'Erreur',
      close: 'Fermer',
      save: 'Enregistrer',
      cancel: 'Annuler',
      delete: 'Supprimer',
      confirm: 'Confirmer',
      back: 'Retour',
      next: 'Suivant',
      previous: 'Précédent',
      search: 'Rechercher',
      filter: 'Filtrer',
      sort: 'Trier',
      all: 'Tous',
      none: 'Aucun',
      select: 'Sélectionner',
      selected: 'Sélectionné',
      currency: 'Devise',
      language: 'Langue',
    },
  },
  
  de: {
    nav: {
      learn: 'Lernen',
      tools: 'Werkzeuge',
      markets: 'Märkte',
      blog: 'Blog',
      goldGuide: 'Gold-Leitfaden',
      goldHistory: 'Goldgeschichte',
      glossary: 'Glossar',
      calculator: 'Rechner',
      converter: 'Umrechner',
      comparator: 'Vergleicher',
      alerts: 'Alarme',
    },
    hero: {
      badge: 'Live-Markt',
      title1: 'Investieren Sie in',
      titleHighlight: 'Gold',
      title2: 'mit Wissen',
      subtitle: 'Ihr ultimativer Leitfaden zum Verstehen, Kaufen und Verwalten von Edelmetallinvestitionen. Professionelle Werkzeuge für jedermann zugänglich.',
      cta: 'Jetzt Starten',
      demo: 'Demo Ansehen',
      trustTitle: 'Informationen aus offiziellen Quellen',
    },
    features: {
      badge: 'Warum Gold?',
      title1: 'Das',
      titleHighlight: 'Ewige',
      subtitle: 'Entdecken Sie, warum Gold seit Jahrtausenden der zuverlässigste Wertspeicher ist',
      items: {
        realTimePrice: {
          title: 'Echtzeit-Preis',
          description: 'Goldpreisverfolgung ständig aktualisiert aus offiziellen Quellen.',
        },
        wealthProtection: {
          title: 'Vermögensschutz',
          description: 'Gold hat sich als sicherer Hafen in wirtschaftlichen und geopolitischen Krisen bewährt.',
        },
        diversification: {
          title: 'Diversifikation',
          description: 'Reduzieren Sie das Portfoliorisiko durch Hinzufügen eines mit den Märkten unkorrelierten Vermögenswerts.',
        },
        financialEducation: {
          title: 'Finanzbildung',
          description: 'Vollständige Leitfäden und Artikel, um ein informierter Investor zu werden.',
        },
        globalMarket: {
          title: 'Globaler Markt',
          description: 'Gold wird 24/7 auf Märkten weltweit mit hoher Liquidität gehandelt.',
        },
        intrinsicValue: {
          title: 'Innerer Wert',
          description: 'Im Gegensatz zu Fiat-Geld behält Gold seinen Wert über Jahrhunderte.',
        },
      },
    },
    tools: {
      badge: 'Professionelle Werkzeuge',
      title1: 'Treffen Sie',
      titleHighlight: 'Informierte',
      subtitle: 'Interaktive Rechner und Werkzeuge zur Analyse Ihrer Goldinvestitionen',
    },
    historicalChart: {
      title: 'Historische Goldentwicklung',
      subtitle: 'Goldpreis in USD pro Feinunze',
      years: 'Jahre',
      initialPrice: 'Anfangspreis',
      currentPrice: 'Aktueller Preis',
      change: 'Änderung',
      maximum: 'Maximum',
      legend1: 'Goldpreis (USD/oz)',
      legend2: 'Periodenanfangspreis',
      disclaimer: 'Ungefähre historische Daten. Referenzpreise, keine Finanzberatung.',
    },
    comparisonChart: {
      title: 'Vermögenswertvergleich',
      subtitle: 'Vergleichen Sie die Goldperformance mit anderen Vermögenswerten',
      viewMode: {
        percentage: 'Prozentsatz',
        absolute: 'Absoluter Wert',
      },
      assets: {
        gold: 'Gold',
        sp500: 'S&P 500',
        bitcoin: 'Bitcoin',
        inflation: 'Inflation (VPI)',
      },
      performance: 'Leistung',
      disclaimer: 'Simulierte Daten zu Bildungszwecken. Keine Anlageberatung.',
    },
    goldConverter: {
      title: 'Gold-Umrechner',
      subtitle: 'Umrechnung zwischen Einheiten und Wert',
      grams: 'Gramm',
      ounces: 'Feinunzen',
      value: 'Wert',
      currentPrice: 'Aktueller Preis',
      perOunce: 'pro Unze',
    },
    investmentCalculator: {
      title: 'Renditerechner',
      subtitle: 'Simulieren Sie das Wachstum Ihrer Goldinvestition',
      initialInvestment: 'Anfangsinvestition',
      years: 'Jahre',
      annualReturn: 'Jährliche Rendite',
      goldOunces: 'Goldunzen',
      projectedValue: 'Prognostizierter Wert',
      totalGain: 'Gesamtgewinn',
      disclaimer: '* Simulation basierend auf historischer Performance. Vergangene Ergebnisse garantieren keine zukünftigen Erträge.',
    },
    assetComparator: {
      title: 'Vermögenswert-Vergleicher',
      subtitle: 'Vergleichen Sie die Leistung verschiedener Investitionen',
      selectAssets: 'Wählen Sie zu vergleichende Vermögenswerte',
      compare: 'Vergleichen',
      disclaimer: 'Ungefähre historische Daten. Nur zu Bildungszwecken.',
    },
    priceAlert: {
      title: 'Preisalarme',
      subtitle: 'Erhalten Sie eine E-Mail, wenn Gold Ihren Zielpreis erreicht',
      currentPrice: 'Aktueller Preis',
      email: 'E-Mail für Benachrichtigungen',
      targetPrice: 'Zielpreis',
      condition: 'Bedingung',
      above: 'Darüber',
      below: 'Darunter',
      createAlert: 'Alarm Erstellen',
      creatingAlert: 'Alarm wird erstellt...',
      activeAlerts: 'Aktive Alarme',
      alertCreated: 'Alarm erstellt',
      alertCreatedDesc: 'Wir benachrichtigen Sie, wenn Gold',
      alertDeleted: 'Alarm gelöscht',
      alertDeletedDesc: 'Der Preisalarm wurde gelöscht.',
      disclaimer: 'Alarme werden einmal gesendet, wenn der Zielpreis erreicht wird.',
      requiredFields: 'Erforderliche Felder',
      requiredFieldsDesc: 'Bitte füllen Sie alle Felder aus.',
      invalidEmail: 'Ungültige E-Mail',
      invalidEmailDesc: 'Bitte geben Sie eine gültige E-Mail ein.',
      invalidPrice: 'Ungültiger Preis',
      invalidPriceDesc: 'Bitte geben Sie einen gültigen Preis ein.',
      error: 'Fehler',
      errorDesc: 'Alarm konnte nicht erstellt werden. Bitte versuchen Sie es erneut.',
      exceeds: 'übersteigt',
      dropsBelow: 'fällt unter',
    },
    blog: {
      badge: 'Blog & Bildung',
      title1: 'Wissen, das',
      titleHighlight: 'Multipliziert',
      viewAll: 'Alle Artikel ansehen',
      readTime: 'Min. Lesezeit',
    },
    newsletter: {
      title1: 'Verpassen Sie',
      titleHighlight: 'Keine Gelegenheit',
      subtitle: 'Erhalten Sie Preisalarme, Marktanalysen und exklusive Leitfäden direkt in Ihre E-Mail.',
      placeholder: 'sie@email.com',
      subscribe: 'Abonnieren',
      thanks: 'Danke für Ihre Anmeldung!',
      successTitle: 'Anmeldung erfolgreich!',
      successDesc: 'Sie erhalten unsere Alarme und Analysen in Ihrem Posteingang.',
      privacy: 'Kein Spam. Jederzeit kündbar. Ihre Privatsphäre ist unsere Priorität.',
    },
    footer: {
      description: 'Ihr Referenzportal für Edelmetallinvestitionen. Qualitätsinformationen, Werkzeuge und Finanzbildung.',
      resources: 'Ressourcen',
      learn: 'Lernen',
      legal: 'Rechtliches',
      howToBuy: 'Wie man Gold kauft',
      goldTypes: 'Goldarten',
      storage: 'Lagerung',
      taxation: 'Besteuerung',
      legalNotice: 'Impressum',
      privacy: 'Datenschutz',
      cookies: 'Cookies',
      disclaimer: 'Haftungsausschluss',
      copyright: 'Alle Rechte vorbehalten.',
      disclaimerText: 'Diese Website dient nur zu Informations- und Bildungszwecken. Sie stellt keine Finanz-, Anlage- oder Rechtsberatung dar. Konsultieren Sie einen Fachmann, bevor Sie Anlageentscheidungen treffen.',
    },
    goldPrice: {
      goldPrice: 'Gold',
      perOunce: '/oz',
      change24h: '24h',
    },
    common: {
      loading: 'Laden...',
      error: 'Fehler',
      close: 'Schließen',
      save: 'Speichern',
      cancel: 'Abbrechen',
      delete: 'Löschen',
      confirm: 'Bestätigen',
      back: 'Zurück',
      next: 'Weiter',
      previous: 'Vorherige',
      search: 'Suchen',
      filter: 'Filtern',
      sort: 'Sortieren',
      all: 'Alle',
      none: 'Keine',
      select: 'Auswählen',
      selected: 'Ausgewählt',
      currency: 'Währung',
      language: 'Sprache',
    },
  },
};
