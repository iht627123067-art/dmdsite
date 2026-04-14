export interface ColorScheme {
  id: string;
  name: string;
  psychology: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    lilac: string;
    pink: string;
  };
  distribution: { main: number; secondary: number; accent: number };
}

export interface TypographyStyle {
  id: string;
  name: string;
  narrative: string;
  fonts: {
    display: string;
    body: string;
  };
  specimen: string;
}

export interface LogoVariant {
  id: string;
  name: string;
  description: string;
  technicalTip: string;
  type: 'horizontal' | 'vertical' | 'symbol' | 'wordmark' | 'circle';
}

export const colorSchemes: ColorScheme[] = [
  {
    id: 'institutional',
    name: 'Acolhedora Institucional',
    psychology: 'Comunica confiança, estabilidade e acolhimento. O Azul Marinho (60%) traz a base sólida, enquanto o Roxo (30%) evoca humanidade e o Âmbar (10%) traz o calor da comunidade.',
    colors: {
      primary: '#153065',
      secondary: '#7F4CA9',
      accent: '#FF9E00',
      background: '#FAFAFA',
      lilac: '#BD90DA',
      pink: '#E91E8C'
    },
    distribution: { main: 60, secondary: 30, accent: 10 }
  },
  {
    id: 'campaign',
    name: 'Favela Viva (Campanha)',
    psychology: 'Energia, proximidade e voz ativa. Uma paleta vibrante onde o Roxo toma mais espaço para celebrar a criatividade e a resiliência das comunidades.',
    colors: {
      primary: '#7F4CA9',
      secondary: '#153065',
      accent: '#FF9E00',
      background: '#FDFCF6',
      lilac: '#C9A8D8',
      pink: '#F02080'
    },
    distribution: { main: 50, secondary: 30, accent: 20 }
  },
  {
    id: 'premium',
    name: 'Ultra-Premium',
    psychology: 'Autoridade, sofisticação e seriedade. Tons profundos que elevam a marca para contextos de parcerias estratégicas e parcerias de alto valor.',
    colors: {
      primary: '#0F1F3F',
      secondary: '#6F3A99',
      accent: '#D4AF37',
      background: '#18181A',
      lilac: '#A85FB0',
      pink: '#C01870'
    },
    distribution: { main: 70, secondary: 25, accent: 5 }
  }
];

// Cores de projeto — cada frente de atuação do instituto
export const projectColors = [
  { name: 'Comunidade',  hex: '#1E3A5F', role: 'Projetos comunitários e mobilização' },
  { name: 'Digital',     hex: '#00B4D8', role: 'Projetos de tecnologia e inclusão digital' },
  { name: 'Território',  hex: '#2ECC40', role: 'Projetos ambientais e território' },
  { name: 'Educação',    hex: '#FF6B35', role: 'Projetos educacionais e capacitação' },
  { name: 'Cuidado',     hex: '#F7C59F', role: 'Projetos de saúde e bem-estar' },
] as const;

export const typographyStyles: TypographyStyle[] = [
  {
    id: 'innovation',
    name: 'Inovação Social',
    narrative: 'Moderna, acessível e dinâmica. O uso da Space Grotesk traz um ar de tecnologia social e transparência.',
    fonts: {
      display: 'Space Grotesk',
      body: 'Inter'
    },
    specimen: 'Transformar o agora com dignidade e transparência.'
  },
  {
    id: 'urban',
    name: 'Campanha Urbana',
    narrative: 'Direta, forte e de impacto. Ideal para comunicação de rua e mobilização popular onde a mensagem precisa ser gritada.',
    fonts: {
      display: 'Anton',
      body: 'Inter'
    },
    specimen: 'VONTADE DE MUDAR. FORÇA DE REALIZAR.'
  },
  {
    id: 'premium',
    name: 'Institucional Elegante',
    narrative: 'Seriedade e cuidado. A serifa do Crimson Pro comunica que a marca tem história e profundidade institucional.',
    fonts: {
      display: 'Space Grotesk',
      body: 'Crimson Pro'
    },
    specimen: 'Dignidade humana como pilar de toda transformação social.'
  },
  {
    id: 'mono-tech',
    name: 'Dados & Transparência',
    narrative: 'Precisão técnica e credibilidade. O IBM Plex Mono é a voz dos relatórios, métricas e documentos de prestação de contas.',
    fonts: {
      display: 'Space Grotesk',
      body: 'IBM Plex Mono'
    },
    specimen: 'Instituto DMD · Ciclo 2026 · Impacto Auditado'
  }
];

export const logoVariants: LogoVariant[] = [
  {
    id: 'primary',
    name: 'Versão Principal (Colorida)',
    description: 'A versão oficial completa — símbolo + nome em cores institucionais.',
    technicalTip: 'Uso padrão em todos os materiais com fundo claro. Primeira escolha sempre.',
    type: 'horizontal'
  },
  {
    id: 'horizontal',
    name: 'Horizontal (Padrão)',
    description: 'A versão mais versátil e legível da marca.',
    technicalTip: 'Ideal para cabeçalhos de sites, documentos A4 e cartões de visita.',
    type: 'horizontal'
  },
  {
    id: 'vertical',
    name: 'Vertical',
    description: 'Símbolo centralizado sobre o nome.',
    technicalTip: 'Use em banners estreitos, selos de qualidade ou quando o espaço horizontal for limitado.',
    type: 'vertical'
  },
  {
    id: 'circle',
    name: 'Selo Circular',
    description: 'Estilo clássico de autoridade e tradição.',
    technicalTip: 'Perfeito para certificados, medalhas, carimbos ou avatares de redes sociais.',
    type: 'circle'
  },
  {
    id: 'wordmark',
    name: 'Marca Tipográfica',
    description: 'Foco exclusivo na força do nome.',
    technicalTip: 'Útil quando a marca já foi apresentada ou em contextos de máxima sobriedade.',
    type: 'wordmark'
  },
  {
    id: 'symbol',
    name: 'Símbolo Monogramático',
    description: 'A essência gráfica sem texto.',
    technicalTip: 'Ideal para favicons, ícones de apps ou elementos de apoio visual (pattern).',
    type: 'symbol'
  },
  {
    id: 'mono',
    name: 'Versão Monocromática',
    description: 'Logo em preto total, para contextos sem cor.',
    technicalTip: 'Use em documentos impressos em P&B, bordados, gravações ou fundos que impossibilitem cor.',
    type: 'horizontal'
  },
  {
    id: 'watermark',
    name: 'Marca d\'água',
    description: 'Versão de baixíssima opacidade para fundos de página.',
    technicalTip: 'Exclusivo para uso como fundo texturado em documentos oficiais. Nunca como logo principal.',
    type: 'horizontal'
  }
];
