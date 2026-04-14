import React, { createContext, useContext, useState, useEffect } from 'react';

export type ColorScheme = 'institutional' | 'campaign' | 'premium';
export type TypographyStyle = 'innovation' | 'urban' | 'premium' | 'mono-tech';
export type LogoVariant = 'primary' | 'horizontal' | 'vertical' | 'symbol' | 'wordmark' | 'circle' | 'mono' | 'watermark';
export type ShapeStyle = 'curves' | 'lines' | 'hybrid';

/** Retorna valores de border-radius por contexto para cada princípio visual. */
export function shapeRadius(s: ShapeStyle = 'hybrid') {
  const r = {
    curves: { card: '32px', inner: '20px', header: '24px', btn: '999px', sm: '16px', tag: '999px' },
    lines:  { card: '4px',  inner: '2px',  header: '2px',  btn: '4px',  sm: '2px',  tag: '2px'  },
    hybrid: { card: '16px', inner: '12px', header: '12px', btn: '999px', sm: '8px',  tag: '999px' },
  };
  return r[s];
}

export interface BrandColors {
  navy: string;
  purple: string;
  amber: string;
  lilac: string;
}

export interface PlanningSection {
  story: string;
  functional: string;
}

export interface PlanningData {
  quemSomos: PlanningSection;
  historia: PlanningSection;
  proposito: PlanningSection;
  governanca: PlanningSection;
  voluntarios: PlanningSection;
  missao: PlanningSection;
  visao: PlanningSection;
  valores: PlanningSection;
  tracado: PlanningSection;
}

const defaultPlanning: PlanningData = {
  quemSomos: {
    story: '"Somos a união de mãos que transformam desigualdade em potência real."',
    functional: 'Instituição social focada em autonomia e justiça nas comunidades periféricas.'
  },
  historia: {
    story: '"Nascemos no coração da favela, onde cada passo foi escrito com coragem e união."',
    functional: 'Trajetória de impacto social iniciada no Jd. Kennedy III, focada em resultados reais.'
  },
  proposito: {
    story: '"Existimos para que o protagonismo da favela seja a regra, não a exceção."',
    functional: 'Promover a ascensão social através de educação, cidadania e inovação local.'
  },
  governanca: {
    story: '"Nossa ética é inabalável; nossa gestão é transparente como a luz do dia."',
    functional: 'Estrutura administrativa rigorosa com prestação de contas plena aos parceiros.'
  },
  voluntarios: {
    story: '"Nosso coração bate através de cada voluntário que dedica sua vida à mudança."',
    functional: 'Rede colaborativa de profissionais e moradores engajados no desenvolvimento local.'
  },
  missao: {
    story: '"Transformar desigualdade em potência — uma comunidade de cada vez."',
    functional: 'Promover autonomia, justiça social e desenvolvimento sustentável nas comunidades periféricas.'
  },
  visao: {
    story: '"Ser a referência nacional em inovação social nascida da favela."',
    functional: 'Tornar o Instituto reconhecido como modelo de impacto e legitimidade comunitária até 2030.'
  },
  valores: {
    story: '"Mãos dadas: porque nenhuma transformação real acontece sozinha."',
    functional: 'Colaboração · Protagonismo · Transparência · Excelência · Pertencimento'
  },
  tracado: {
    story: '"Equilíbrio visual: retas bem estruturadas para profissionalismo e curvas suaves para acolhimento."',
    functional: 'Leitura da logomarca:\n- Formas orgânicas e curvas (comunidade/cuidado).\n- Eixos definidos e alinhamentos rígidos (excelência).\n\nTécnicas recomendadas:\n- Grid modular (múltiplos de 8px).\n- Ritmo de linhas: cards com cantos levemente arredondados, mas divisórias retas.\n- Hierarquia tipográfica: títulos fortes, textos humanizados.\n\nSite com linhas retas:\n- Estrutura em grades, mas humanização via fotos de pessoas e micro-animações.\n- Sistema de raios de borda: 8px para cards, 999px para botões pill.'
  }
};

const schemeColors: Record<ColorScheme, BrandColors> = {
  institutional: { navy: '#153065', purple: '#7F4CA9', amber: '#FF9E00', lilac: '#BD90DA' },
  campaign:      { navy: '#1E3A5F', purple: '#9B6BA8', amber: '#FFB84D', lilac: '#C9A8D8' },
  premium:       { navy: '#0F1F3F', purple: '#6F3A99', amber: '#FF8C00', lilac: '#A85FB0' },
};

interface BrandContextType {
  colorScheme: ColorScheme;
  typography: TypographyStyle;
  logoVariant: LogoVariant;
  shapeStyle: ShapeStyle;
  colors: BrandColors;
  planningData: PlanningData;
  setColorScheme: (scheme: ColorScheme) => void;
  setTypography: (style: TypographyStyle) => void;
  setLogoVariant: (variant: LogoVariant) => void;
  setShapeStyle: (style: ShapeStyle) => void;
  updatePlanningData: (section: keyof PlanningData, field: keyof PlanningSection, value: string) => void;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export function BrandProvider({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorSchemeState] = useState<ColorScheme>(() => {
    return (localStorage.getItem('dmd-color-scheme') as ColorScheme) || 'institutional';
  });
  const [typography, setTypographyState] = useState<TypographyStyle>(() => {
    return (localStorage.getItem('dmd-typography') as TypographyStyle) || 'innovation';
  });
  const [logoVariant, setLogoVariantState] = useState<LogoVariant>(() => {
    return (localStorage.getItem('dmd-logo-variant') as LogoVariant) || 'primary';
  });
  const [shapeStyle, setShapeStyleState] = useState<ShapeStyle>(() => {
    return (localStorage.getItem('dmd-shape-style') as ShapeStyle) || 'hybrid';
  });
  const [planningData, setPlanningData] = useState<PlanningData>(() => {
    const stored = localStorage.getItem('dmd-planning-data');
    if (!stored) return defaultPlanning;
    try {
      return JSON.parse(stored) as PlanningData;
    } catch {
      localStorage.removeItem('dmd-planning-data');
      return defaultPlanning;
    }
  });

  const setColorScheme = (scheme: ColorScheme) => {
    localStorage.setItem('dmd-color-scheme', scheme);
    setColorSchemeState(scheme);
  };

  const setTypography = (style: TypographyStyle) => {
    localStorage.setItem('dmd-typography', style);
    setTypographyState(style);
  };

  const setLogoVariant = (variant: LogoVariant) => {
    localStorage.setItem('dmd-logo-variant', variant);
    setLogoVariantState(variant);
  };

  const setShapeStyle = (style: ShapeStyle) => {
    localStorage.setItem('dmd-shape-style', style);
    setShapeStyleState(style);
  };

  const updatePlanningData = (section: keyof PlanningData, field: keyof PlanningSection, value: string) => {
    setPlanningData(prev => {
      const newData = {
        ...prev,
        [section]: { ...prev[section], [field]: value }
      };
      localStorage.setItem('dmd-planning-data', JSON.stringify(newData));
      return newData;
    });
  };

  const colors = schemeColors[colorScheme];

  useEffect(() => {
    const root = document.documentElement;
    const palette = schemeColors[colorScheme];

    // Primary tokens — mapeados à paleta ativa
    root.style.setProperty('--primary', palette.purple);
    root.style.setProperty('--foreground', palette.navy);
    root.style.setProperty('--card-foreground', palette.navy);
    root.style.setProperty('--popover-foreground', palette.navy);
    // Brand scale tokens
    root.style.setProperty('--navy-900', palette.navy);
    root.style.setProperty('--purple-500', palette.purple);
    root.style.setProperty('--amber-500', palette.amber);
    root.style.setProperty('--purple-100', `${palette.purple}18`);
    // Tokens derivados que dependem da paleta ativa
    root.style.setProperty('--ring', palette.purple);
    root.style.setProperty('--sidebar-primary', palette.purple);
    root.style.setProperty('--sidebar-foreground', palette.navy);
    root.style.setProperty('--shadow-glow', `0 0 20px -5px ${palette.purple}`);
    // Accent token — atualiza classes Tailwind como bg-accent, text-accent
    root.style.setProperty('--accent', palette.amber);
    root.style.setProperty('--accent-foreground', palette.navy);
  }, [colorScheme]);

  return (
    <BrandContext.Provider value={{
      colorScheme,
      typography,
      logoVariant,
      shapeStyle,
      colors,
      planningData,
      setColorScheme,
      setTypography,
      setLogoVariant,
      setShapeStyle,
      updatePlanningData
    }}>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  const ctx = useContext(BrandContext);
  if (!ctx) throw new Error('useBrand must be used within BrandProvider');
  return ctx;
}

export { schemeColors };
