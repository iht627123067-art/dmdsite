import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BookOpen, Palette, Type, Layout, Sparkles, ShieldCheck, HeartPulse,
  History, Users, Target, Info, MessageSquare, CheckCircle2, XCircle,
  ArrowRight, Globe, Square, FileText, Pencil, Check, Eye, ChevronRight
} from 'lucide-react';
import { LogoVariantSelector } from '@/components/brand/LogoVariantSelector';
import { BrandSummaryCard } from '@/components/brand/BrandSummaryCard';
import { projectColors } from '@/data/brand-identity';
import { useBrand, PlanningData } from '@/contexts/BrandContext';
import { useLocation, Link } from 'wouter';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

type ColorScheme = 'institutional' | 'campaign' | 'premium';
type TypographyStyle = 'innovation' | 'urban' | 'premium' | 'mono-tech';

interface ColorSchemeData {
  id: ColorScheme;
  name: string;
  description: string;
  navy: string;
  purple: string;
  amber: string;
  lilac: string;
  pink: string;
  recommendation: string;
  why: string;
}

interface TypographyOption {
  id: TypographyStyle;
  name: string;
  description: string;
  headline: string;
  subtitle: string;
  body: string;
  recommendation: string;
  fonts: string;
  why: string;
}

// ── Rótulos de intenção ────────────────────────────────────────────────────
type BadgeType = 'pergunta' | 'sugestao' | 'diretriz';

function ContentBadge({ type }: { type: BadgeType }) {
  const map = {
    pergunta: {
      label: 'PERGUNTA PARA O INSTITUTO',
      className: 'bg-amber-50 text-amber-700 border border-amber-200',
      dot: 'bg-amber-400',
    },
    sugestao: {
      label: 'SUGESTÃO — EDITE SE QUISER',
      className: 'bg-purple-50 text-purple-700 border border-purple-200',
      dot: 'bg-purple-400',
    },
    diretriz: {
      label: 'DIRETRIZ FIXA',
      className: 'bg-navy-50 text-navy-700 border border-navy-200',
      dot: 'bg-navy-500',
    },
  };
  const { label, className, dot } = map[type];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-label font-bold uppercase tracking-widest ${className}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
      {label}
    </span>
  );
}

// ── "Na prática" callout ───────────────────────────────────────────────────
function NaPratica({ items }: { items: string[] }) {
  return (
    <div className="mt-4 p-4 rounded-xl bg-navy-50/60 border border-navy-100">
      <p className="text-label font-bold uppercase tracking-widest text-navy-500 mb-2">Isso significa, na prática:</p>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-body-sm text-navy-600 leading-relaxed">
            <span className="text-primary font-bold shrink-0">→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

const colorSchemes: ColorSchemeData[] = [
  {
    id: 'institutional',
    name: 'Acolhedora Institucional',
    description: 'Proporção 60-30-10: Azul Marinho predominante, Roxo como destaque, Âmbar como acento',
    navy: '#153065',
    purple: '#7F4CA9',
    amber: '#FF9E00',
    lilac: '#BD90DA',
    pink: '#E91E8C',
    recommendation: 'Recomendada para relatórios, documentos formais e comunicação corporativa',
    why: 'O Azul Marinho ancora autoridade; o Roxo moderado comunica transformação sem perder seriedade; o Âmbar sinaliza otimismo sem exagero.'
  },
  {
    id: 'campaign',
    name: 'Favela Viva (Campanha)',
    description: 'Proporção equilibrada: Roxo e Azul Marinho em igualdade, Âmbar vibrante para energia',
    navy: '#1E3A5F',
    purple: '#9B6BA8',
    amber: '#FFB84D',
    lilac: '#C9A8D8',
    pink: '#F02080',
    recommendation: 'Recomendada para campanhas, eventos comunitários e engajamento social',
    why: 'O equilíbrio Roxo/Azul cria tensão criativa que comunica movimento. O Âmbar mais vivo amplifica a urgência de campanha.'
  },
  {
    id: 'premium',
    name: 'Ultra-Premium / Sóbria',
    description: 'Proporção sofisticada: Azul Marinho intenso, Roxo profundo, Âmbar reduzido',
    navy: '#0F1F3F',
    purple: '#6F3A99',
    amber: '#FF8C00',
    lilac: '#A85FB0',
    pink: '#C01870',
    recommendation: 'Recomendada para materiais de alto padrão, parcerias estratégicas',
    why: 'O Azul profundo sinaliza credibilidade máxima. O Âmbar restrito evita ruído — cada ponto de cor se torna uma decisão editorial.'
  }
];

const typographyOptions: TypographyOption[] = [
  {
    id: 'innovation',
    name: 'Inovação Social',
    description: 'Space Grotesk (headlines) + Inter (body) + Anton (destaque)',
    headline: 'Space Grotesk',
    subtitle: 'Semibold',
    body: 'Inter Regular',
    recommendation: 'Recomendada — comunica modernidade, acessibilidade e dinamismo',
    fonts: 'Space Grotesk, Inter, Anton',
    why: 'Space Grotesk tem personalidade técnica sem ser fria; Inter garante legibilidade em qualquer tamanho. Juntas comunicam seriedade + proximidade.'
  },
  {
    id: 'urban',
    name: 'Campanha Urbana',
    description: 'Anton (headlines) + Roboto (body)',
    headline: 'Anton',
    subtitle: 'Bold',
    body: 'Roboto Regular',
    recommendation: 'Alternativa para campanhas com tom mais direto e urbano',
    fonts: 'Anton, Roboto',
    why: 'Anton tem impacto visual imediato, quase gráfico. Funciona bem em materiais de rua, banners e comunicação de alta visibilidade.'
  },
  {
    id: 'premium',
    name: 'Institucional Premium',
    description: 'Space Grotesk (headlines) + Crimson Pro (body)',
    headline: 'Space Grotesk',
    subtitle: 'Bold',
    body: 'Crimson Pro',
    recommendation: 'Alternativa para comunicação formal e de alto padrão',
    fonts: 'Space Grotesk, Crimson Pro',
    why: 'Crimson Pro traz autoridade editorial — associada a publicações sérias. Eleva o nível de documentos oficiais e relatórios de impacto.'
  },
  {
    id: 'mono-tech',
    name: 'Dados & Transparência',
    description: 'Space Grotesk (headlines) + IBM Plex Mono (dados e labels)',
    headline: 'Space Grotesk',
    subtitle: 'Bold',
    body: 'IBM Plex Mono',
    recommendation: 'Para relatórios técnicos, prestação de contas e documentos de dados',
    fonts: 'Space Grotesk, IBM Plex Mono',
    why: 'IBM Plex Mono reforça precisão e transparência — valores críticos em prestação de contas. Dados em monospace comunicam rigor.'
  }
];

const PHASES = [
  { id: 'fase-01', label: 'Planejamento', number: '01', icon: <Globe className="w-3.5 h-3.5" /> },
  { id: 'fase-02', label: 'Identidade Visual', number: '02', icon: <Palette className="w-3.5 h-3.5" /> },
  { id: 'fase-03', label: 'Diretrizes', number: '03', icon: <BookOpen className="w-3.5 h-3.5" /> },
];

// ── Seção de Traçados ──────────────────────────────────────────────────────
function TracadosSection() {
  const { shapeStyle, setShapeStyle } = useBrand();
  const [selectedPrinciple, setSelectedPrinciple] = useState<'curves' | 'lines' | 'hybrid'>(shapeStyle);
  const [showGrid, setShowGrid] = useState(false);

  // Sincroniza seleção local com o contexto global
  const handleSelect = (id: 'curves' | 'lines' | 'hybrid') => {
    setSelectedPrinciple(id);
    setShapeStyle(id);
  };

  const principles = [
    {
      id: 'curves' as const,
      label: 'Curvas',
      subtitle: 'Acolhimento',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      desc: 'Formas orgânicas, cantos generosos, bordas suaves.',
      why: 'Comunica cuidado, comunidade e proximidade humana.',
      pratica: [
        'Ícones com bordas arredondadas (r = 16px+)',
        'Avatares e fotos em formato circular',
        'Ilustrações com linhas fluidas',
        'Botões com raio total (pill, r = 999px)',
      ],
      shape: (
        <svg viewBox="0 0 80 60" className="w-16 h-12">
          <rect x="5" y="5" width="70" height="50" rx="25" ry="25" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-purple-400" />
          <circle cx="30" cy="30" r="10" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-300" />
          <circle cx="55" cy="30" r="6" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-300" />
        </svg>
      ),
    },
    {
      id: 'lines' as const,
      label: 'Retas',
      subtitle: 'Profissionalismo',
      color: 'text-navy-700',
      bg: 'bg-navy-50',
      border: 'border-navy-200',
      desc: 'Grid rígido, ângulos de 90°, bordas quadradas.',
      why: 'Comunica rigor técnico, confiabilidade e excelência institucional.',
      pratica: [
        'Tabelas e layouts em grid modular de 8px',
        'Divisórias retas entre seções',
        'Cards com cantos retos (r = 0px) em contextos formais',
        'Ícones de linha com peso uniforme',
      ],
      shape: (
        <svg viewBox="0 0 80 60" className="w-16 h-12">
          <rect x="5" y="5" width="70" height="50" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-navy-400" />
          <line x1="5" y1="25" x2="75" y2="25" stroke="currentColor" strokeWidth="1.5" className="text-navy-300" />
          <line x1="40" y1="5" x2="40" y2="55" stroke="currentColor" strokeWidth="1.5" className="text-navy-300" />
        </svg>
      ),
    },
    {
      id: 'hybrid' as const,
      label: 'Equilíbrio',
      subtitle: 'Linguagem DMD',
      color: 'text-primary',
      bg: 'bg-primary/5',
      border: 'border-primary/20',
      desc: 'Grid rígido + bordas suaves. Autoridade e acolhimento juntos.',
      why: 'A identidade do Instituto vive nessa tensão: estrutura técnica com coração humano.',
      pratica: [
        'Cards com r = 8px — quase reto, mas com toque humano',
        'Botões pill (r = 999px) — máxima suavidade nas ações',
        'Layout em grid de 8px — disciplina invisível que organiza tudo',
        'Ícones com rounded = 2px — precisos, não frios',
      ],
      shape: (
        <svg viewBox="0 0 80 60" className="w-16 h-12">
          <rect x="5" y="5" width="70" height="50" rx="10" ry="10" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary" />
          <rect x="18" y="18" width="20" height="24" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/50" />
          <rect x="46" y="20" width="16" height="8" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/50" />
          <rect x="46" y="33" width="16" height="8" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/50" />
        </svg>
      ),
    },
  ];

  const radiusScale = [
    { value: '0px', label: 'Sem arredondamento', use: 'Tabelas formais, separadores', sample: 'rounded-none' },
    { value: '4px', label: 'Suave', use: 'Badges, tags, ícones de linha', sample: 'rounded' },
    { value: '8px', label: 'Padrão DMD', use: 'Cards, inputs, tooltips', sample: 'rounded-lg', highlight: true },
    { value: '16px', label: 'Generoso', use: 'Modais, painéis, seções hero', sample: 'rounded-2xl' },
    { value: '999px', label: 'Pill', use: 'Botões, badges grandes, CTAs', sample: 'rounded-full', highlight: true },
  ];

  const selected = principles.find(p => p.id === selectedPrinciple)!;

  return (
    <div className="mt-16 space-y-10">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-2xl bg-primary/10 text-primary shrink-0">
          <Square className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl font-bold text-foreground">Diretrizes de Traçado</h3>
            <ContentBadge type="pergunta" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Como as formas do Instituto equilibram autoridade e acolhimento? Escolha o princípio que melhor representa a linguagem visual desejada.
          </p>
        </div>
      </div>

      {/* Provocação */}
      <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/70 flex gap-3 items-start">
        <MessageSquare className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-label font-bold text-amber-700 uppercase tracking-widest mb-1">Pergunta-guia</p>
          <p className="text-sm text-amber-900 font-medium italic leading-relaxed">
            "Quando alguém olha para um material do Instituto, deve sentir mais rigor técnico ou mais proximidade humana — ou os dois em equilíbrio?"
          </p>
        </div>
      </div>

      {/* Princípios — seletores */}
      <div>
        <p className="text-label font-bold text-muted-foreground uppercase tracking-widest mb-4">Escolha o princípio visual</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {principles.map((p) => (
            <button
              key={p.id}
              onClick={() => handleSelect(p.id)}
              className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                selectedPrinciple === p.id
                  ? `${p.bg} ${p.border} shadow-md -translate-y-1`
                  : 'bg-white border-navy-100 hover:border-navy-200'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${selectedPrinciple === p.id ? p.color : 'text-navy-400'} transition-colors`}>
                  {p.shape}
                </div>
                {selectedPrinciple === p.id && (
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                )}
              </div>
              <p className={`font-bold text-sm mb-0.5 ${selectedPrinciple === p.id ? p.color : 'text-foreground'}`}>
                {p.label}
              </p>
              <p className="text-label text-muted-foreground font-medium uppercase tracking-widest">{p.subtitle}</p>
              <p className="text-body-sm text-navy-500 mt-2 leading-relaxed">{p.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Painel do princípio selecionado */}
      <div className={`p-8 rounded-[2rem] ${selected.bg} border ${selected.border} transition-all duration-500`}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <ContentBadge type="sugestao" />
            <h4 className={`font-bold text-lg mt-2 ${selected.color}`}>Por que "{selected.label}" funciona para o Instituto</h4>
          </div>
        </div>
        <p className="text-sm text-navy-600 italic mb-4 leading-relaxed font-medium">"{selected.why}"</p>
        <NaPratica items={selected.pratica} />
      </div>

      {/* Sistema de Raios */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <p className="text-sm font-bold text-foreground">Sistema de Raios de Borda</p>
              <ContentBadge type="diretriz" />
            </div>
            <p className="text-xs text-muted-foreground">Escala consistente que garante harmonia entre elementos.</p>
          </div>
          <button
            onClick={() => setShowGrid(!showGrid)}
            className="flex items-center gap-1.5 text-label font-bold text-primary uppercase tracking-widest hover:underline"
          >
            <Eye className="w-3 h-3" />
            {showGrid ? 'Ocultar' : 'Ver'} preview
          </button>
        </div>

        <div className="space-y-2">
          {radiusScale.map((r) => (
            <div
              key={r.value}
              className={`flex items-center gap-4 p-3 rounded-xl transition-all ${
                r.highlight ? 'bg-primary/5 border border-primary/15' : 'bg-navy-50/40'
              }`}
            >
              {/* Visual sample */}
              <div
                className={`w-10 h-8 border-2 shrink-0 transition-all ${
                  r.highlight ? 'border-primary bg-primary/10' : 'border-navy-300 bg-navy-50'
                }`}
                style={{ borderRadius: r.value }}
              />
              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-xs text-foreground">{r.value}</span>
                  <span className="text-label font-semibold text-navy-500">{r.label}</span>
                  {r.highlight && (
                    <span className="text-[8px] font-bold bg-primary/10 text-primary px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                      DMD padrão
                    </span>
                  )}
                </div>
                <p className="text-label text-muted-foreground mt-0.5">{r.use}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Grid preview */}
        {showGrid && (
          <div className="mt-6 p-6 rounded-2xl bg-navy-50 border border-navy-100 animate-in fade-in slide-in-from-bottom-3 duration-300">
            <p className="text-label font-bold uppercase tracking-widest text-navy-500 mb-4">Preview — Grid de 8px aplicado</p>
            <div className="grid grid-cols-3 gap-2">
              {/* Card exemplo com r=8px */}
              <div className="col-span-2 bg-white rounded-lg p-4 shadow-sm border border-navy-100">
                <div className="h-2 bg-primary/20 rounded-sm w-2/3 mb-2" />
                <div className="h-2 bg-navy-100 rounded-sm w-full mb-1" />
                <div className="h-2 bg-navy-100 rounded-sm w-4/5" />
                <div className="mt-3 flex gap-2">
                  <div className="h-6 px-3 bg-primary rounded-full flex items-center">
                    <div className="h-1.5 w-8 bg-white/60 rounded-full" />
                  </div>
                  <div className="h-6 px-3 bg-navy-100 rounded-lg flex items-center">
                    <div className="h-1.5 w-6 bg-navy-300 rounded-full" />
                  </div>
                </div>
              </div>
              {/* Sidebar estreita */}
              <div className="flex flex-col gap-2">
                <div className="bg-white rounded-lg p-3 shadow-sm border border-navy-100 flex-1">
                  <div className="w-6 h-6 bg-primary/10 rounded-full mb-2" />
                  <div className="h-1.5 bg-navy-100 rounded-sm w-full mb-1" />
                  <div className="h-1.5 bg-navy-100 rounded-sm w-3/4" />
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-navy-100 flex-1">
                  <div className="h-1.5 bg-amber-200 rounded-sm w-full mb-1" />
                  <div className="h-1.5 bg-navy-100 rounded-sm w-2/3" />
                </div>
              </div>
            </div>
            <p className="text-label text-muted-foreground mt-3 text-center">
              Todos os espaçamentos são múltiplos de 8px — padding, gap, margin, altura de linha.
            </p>
          </div>
        )}
      </div>

      {/* Do / Don't */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white border-2 border-green-100 relative overflow-hidden">
          <div className="absolute left-0 top-0 w-1.5 h-full bg-green-400 rounded-l-2xl" />
          <div className="flex items-center gap-2 mb-4 pl-2">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <p className="font-bold text-sm text-green-700">Traçado correto</p>
          </div>
          <ul className="space-y-2 pl-2">
            {[
              'Cards com raio exato de 8px — consistente em todos os contextos',
              'Botões sempre em pill (r = 999px) — diferencial visual da marca',
              'Grid de 8px aplicado em espaçamentos: padding, gap, altura',
              'Ícones de linha com espessura uniforme (stroke = 1.5px)',
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-xs text-navy-600">
                <span className="text-green-500 font-bold shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-white border-2 border-red-100 relative overflow-hidden">
          <div className="absolute left-0 top-0 w-1.5 h-full bg-red-400 rounded-l-2xl" />
          <div className="flex items-center gap-2 mb-4 pl-2">
            <XCircle className="w-4 h-4 text-red-600" />
            <p className="font-bold text-sm text-red-700">Traçado incorreto</p>
          </div>
          <ul className="space-y-2 pl-2">
            {[
              'Misturar raios diferentes no mesmo componente (ex: r=8 e r=12)',
              'Usar cantos completamente retos em ações interativas (botões, CTAs)',
              'Espaçamentos arbitrários fora do grid (ex: 13px, 22px)',
              'Ícones com pesos mistos (alguns 1px, outros 2.5px) no mesmo layout',
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-xs text-navy-600">
                <span className="text-red-500 font-bold shrink-0">✗</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ── Componente principal ───────────────────────────────────────────────────
export default function Home() {
  const {
    colorScheme, setColorScheme,
    typography, setTypography,
    logoVariant, setLogoVariant,
    planningData, updatePlanningData,
  } = useBrand();

  const [activeTab, setActiveTab] = useState('overview');
  const [activePhase, setActivePhase] = useState('fase-01');
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [, navigate] = useLocation();

  const CHECKLIST_ITEMS = [
    'O logo está numa versão aprovada (colorida, branca ou mono)?',
    'A área de respiro ao redor do logo está respeitada?',
    'As cores usadas pertencem à paleta institucional selecionada?',
    'As pessoas aparecem em posição de ação ou liderança?',
    'A mensagem evita narrativa de caridade ou vitimização?',
  ];
  const [checkedItems, setCheckedItems] = useState<boolean[]>(() => {
    try {
      const stored = localStorage.getItem('dmd-checklist');
      const parsed = stored ? JSON.parse(stored) : null;
      return Array.isArray(parsed) && parsed.length === CHECKLIST_ITEMS.length
        ? parsed
        : Array(CHECKLIST_ITEMS.length).fill(false);
    } catch { return Array(CHECKLIST_ITEMS.length).fill(false); }
  });

  const toggleCheck = (i: number) => {
    setCheckedItems(prev => {
      const next = [...prev];
      next[i] = !next[i];
      localStorage.setItem('dmd-checklist', JSON.stringify(next));
      return next;
    });
  };

  const scrollToPhase = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActivePhase(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    PHASES.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const currentColor = colorSchemes.find(c => c.id === colorScheme)!;
  const currentTypography = typographyOptions.find(t => t.id === typography)!;

  // Planning sections — "tracado" handled separately
  const planningSections = [
    { id: 'quemSomos', title: 'Quem Somos', icon: <History className="w-5 h-5" />, question: 'Qual é a primeira impressão que define nossa essência?' },
    { id: 'historia', title: 'Nossa História', icon: <BookOpen className="w-5 h-5" />, question: 'Como nossa jornada trouxe legitimidade ao projeto atual?' },
    { id: 'proposito', title: 'Propósito', icon: <Target className="w-5 h-5" />, question: 'Por que o Instituto é a resposta necessária hoje?' },
    { id: 'governanca', title: 'Governança', icon: <ShieldCheck className="w-5 h-5" />, question: 'Como garantimos que cada recurso gere o máximo impacto?' },
    { id: 'voluntarios', title: 'Voluntários', icon: <Users className="w-5 h-5" />, question: 'Como convidamos o mundo a pulsar conosco?' },
    { id: 'missao', title: 'Missão', icon: <Sparkles className="w-5 h-5" />, question: 'Por que o Instituto existe? O que ele se compromete a fazer no mundo?' },
    { id: 'visao', title: 'Visão', icon: <Eye className="w-5 h-5" />, question: 'Como o Instituto quer ser reconhecido daqui a 5 ou 10 anos?' },
    { id: 'valores', title: 'Valores', icon: <HeartPulse className="w-5 h-5" />, question: 'Quais princípios são inegociáveis no dia a dia do Instituto?' },
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 transition-colors duration-700">

      {/* ── HEADER ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-navy-100/50">
        <div className="container py-3 md:py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3 group">
              <div className="p-2 rounded-xl bg-navy-50 group-hover:scale-110 transition-transform duration-500">
                <img
                  src="/logofundobranco.svg"
                  alt="De Mãos Dadas"
                  className={`h-9 md:h-10 w-auto transition-all ${
                    logoVariant === 'mono' ? 'grayscale brightness-0' :
                    logoVariant === 'watermark' ? 'opacity-20' : ''
                  }`}
                />
              </div>
              <div>
                <h1 className="font-display text-base md:text-lg font-bold text-foreground leading-none">Brand Journey</h1>
                <p className="text-label text-muted-foreground uppercase tracking-widest font-semibold italic mt-0.5">
                  Instituto De Mãos Dadas
                </p>
              </div>
            </div>

            <nav className="flex items-center gap-1 bg-navy-50/60 rounded-2xl p-1 border border-navy-100">
              {PHASES.map((phase) => (
                <button
                  key={phase.id}
                  onClick={() => scrollToPhase(phase.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-label font-bold uppercase tracking-wider transition-all duration-300 ${
                    activePhase === phase.id
                      ? 'bg-white shadow-sm text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className={`w-4 h-4 flex items-center justify-center rounded-full text-[8px] font-black transition-all ${
                    activePhase === phase.id ? 'bg-primary text-white' : 'bg-navy-200/60 text-navy-500'
                  }`}>
                    {phase.number}
                  </span>
                  <span className="hidden sm:inline">
                    {phase.id === 'fase-03' ? 'Diretrizes' : phase.label}
                  </span>
                </button>
              ))}
              <div className="w-px h-4 bg-navy-200/60 hidden sm:block" />
              <button
                onClick={() => navigate('/applications')}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-label font-bold uppercase tracking-wider text-accent hover:bg-accent/10 transition-all"
              >
                <div className="w-4 h-4 flex items-center justify-center rounded-full text-[8px] font-black bg-accent/15 text-accent">
                  <Layout className="w-2.5 h-2.5" />
                </div>
                <span className="hidden sm:inline">Aplicações</span>
                <ArrowRight className="w-3 h-3 hidden sm:inline" />
              </button>
            </nav>

            <div className="flex items-center gap-2">
              <Button
                size="sm"
                onClick={() => scrollToPhase('fase-03')}
                className="bg-primary text-primary-foreground shadow-glow hover:shadow-glow/50 hover:-translate-y-0.5 transition-all px-5 py-4 rounded-full font-bold text-xs"
              >
                Finalizar Estudo
                <Sparkles className="w-3.5 h-3.5 ml-2" />
              </Button>
              <Link href="/dossie">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-foreground px-4 py-4 rounded-full font-bold text-xs gap-1.5 hidden sm:flex"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Dossiê
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-12 md:py-20 grain-texture space-y-40">

        {/* ══════════════════════════════════════════════════════
            FASE 01 — PLANEJAMENTO
        ══════════════════════════════════════════════════════ */}
        <section id="fase-01" className="scroll-mt-24">

          <div className="max-w-4xl mb-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-label font-bold uppercase tracking-wider mb-5">
              <Globe className="w-3 h-3" />
              Fase 01 — Começo
            </div>
            <h2 className="text-display-md font-bold mb-5 text-foreground font-display">
              O que o seu site<br />precisa <span className="text-primary italic">dizer</span>?
            </h2>
            <Card className="p-5 bg-navy-50/50 border-none rounded-2xl flex gap-4 items-start">
              <div className="p-2 bg-white rounded-lg text-accent shadow-sm shrink-0">
                <Info className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                  Antes de escolher cores e fontes, defina o <strong>conteúdo estratégico</strong> do site. Cada card abaixo tem três papéis distintos — os rótulos mostram qual é qual:
                </p>
                <div className="flex flex-wrap gap-2">
                  <ContentBadge type="pergunta" />
                  <ContentBadge type="sugestao" />
                  <ContentBadge type="diretriz" />
                </div>
              </div>
            </Card>
          </div>

          {/* Planning cards — 6 seções (tracado separado abaixo) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planningSections.map((section) => {
              const data = planningData[section.id as keyof PlanningData];
              const isEditing = editingSection === section.id;

              return (
                <Card key={section.id} className="p-7 border-none shadow-premium bg-white hover:shadow-2xl hover:-translate-y-1 transition-all group rounded-[2.5rem] flex flex-col h-full relative overflow-hidden">
                  {/* Icon */}
                  <div className="mb-5 flex justify-between items-start">
                    <div className="p-3 rounded-2xl bg-navy-50 text-navy-600 group-hover:bg-primary group-hover:text-white transition-colors">
                      {section.icon}
                    </div>
                  </div>

                  <h4 className="text-lg font-bold mb-4 font-display">{section.title}</h4>

                  <div className="space-y-4 flex-1">
                    {/* Provocação — PERGUNTA */}
                    <div>
                      <ContentBadge type="pergunta" />
                      <p className="mt-2 text-xs text-foreground font-medium italic leading-relaxed flex gap-1.5 items-start">
                        <MessageSquare className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
                        {section.question}
                      </p>
                    </div>

                    {/* Narrativa — SUGESTÃO editável */}
                    <div className="pt-3 border-t border-navy-50">
                      <div className="flex items-center justify-between mb-2">
                        <ContentBadge type="sugestao" />
                        <button
                          onClick={() => setEditingSection(isEditing ? null : section.id)}
                          className="flex items-center gap-1 text-label font-bold uppercase tracking-widest text-primary hover:text-primary/70 transition-colors"
                        >
                          {isEditing
                            ? <><Check className="w-3 h-3" />Salvar</>
                            : <><Pencil className="w-3 h-3" />Editar</>
                          }
                        </button>
                      </div>

                      {isEditing ? (
                        <div className="space-y-2 animate-in fade-in zoom-in-95 duration-200">
                          <Textarea
                            value={data.story}
                            onChange={(e) => updatePlanningData(section.id as keyof PlanningData, 'story', e.target.value)}
                            className="text-body-sm italic bg-purple-50/50 border-purple-100 min-h-[70px] resize-none"
                            placeholder="Texto de narrativa / storytelling..."
                          />
                          <Input
                            value={data.functional}
                            onChange={(e) => updatePlanningData(section.id as keyof PlanningData, 'functional', e.target.value)}
                            className="text-body-sm bg-navy-50/30 border-navy-100 h-8 font-medium"
                            placeholder="Texto funcional / objetivo..."
                          />
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="p-3 rounded-xl bg-purple-50/50 border border-purple-100">
                            <p className="text-label text-muted-foreground font-bold uppercase tracking-widest mb-1">Narrativa</p>
                            <p className="text-body-sm italic text-primary leading-relaxed">{data.story}</p>
                          </div>
                          <div className="p-3 rounded-xl bg-navy-50/30 border border-navy-100">
                            <p className="text-label text-muted-foreground font-bold uppercase tracking-widest mb-1">Funcional</p>
                            <p className="text-body-sm text-navy-600 font-medium leading-relaxed whitespace-pre-wrap">{data.functional}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Traçados — seção dedicada */}
          <TracadosSection />

          {/* CTA */}
          <div className="mt-16 p-10 bg-primary/5 rounded-[3rem] border border-primary/10 text-center">
            <p className="text-sm text-navy-600 leading-relaxed max-w-2xl mx-auto italic mb-6">
              "Ao definir esses tópicos, você garante que a identidade visual reforce a mensagem — não o contrário."
            </p>
            <button
              onClick={() => scrollToPhase('fase-02')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full text-sm font-bold hover:-translate-y-0.5 hover:shadow-glow transition-all"
            >
              Avançar para a Identidade Visual
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════
            FASE 02 — IDENTIDADE VISUAL
        ══════════════════════════════════════════════════════ */}
        <section id="fase-02" className="scroll-mt-24">

          <div className="max-w-4xl mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-label font-bold uppercase tracking-wider mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Fase 02 — Identidade Visual
            </div>
            <h2 className="text-display font-bold mb-5 text-foreground text-balance">
              Equilíbrio entre <span className="text-primary italic">Propósito</span> e <span className="text-accent underline decoration-amber-300">Ação</span>.
            </h2>
            <p className="text-body text-navy-600/80 leading-relaxed font-light container-reading">
              Agora que o conteúdo está claro, escolha como a marca vai comunicá-lo. Cada decisão abaixo tem fundamento estratégico — não é estética por estética.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-16">
            <TabsList className="grid w-full grid-cols-3 bg-navy-50/50 p-1.5 rounded-2xl mb-12 border border-navy-100 h-auto">
              <TabsTrigger value="overview" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-premium data-[state=active]:text-primary transition-all py-3.5 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 mr-2" />
                Visão Geral
              </TabsTrigger>
              <TabsTrigger value="colors" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-premium data-[state=active]:text-primary transition-all py-3.5 text-xs font-bold uppercase tracking-wider">
                <Palette className="w-4 h-4 mr-2" />
                Cores
              </TabsTrigger>
              <TabsTrigger value="typography" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-premium data-[state=active]:text-primary transition-all py-3.5 text-xs font-bold uppercase tracking-wider">
                <Type className="w-4 h-4 mr-2" />
                Tipografia
              </TabsTrigger>
            </TabsList>

            {/* Tab: Visão Geral */}
            <TabsContent value="overview" className="space-y-12 animate-in fade-in duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <Card className="p-12 flex flex-col items-center justify-center min-h-[500px] bg-gradient-to-br from-navy-50/50 via-white to-purple-50/30 border-none shadow-premium reveal-on-scroll group relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
                  <div className="relative animate-floating">
                    <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-all duration-700" />
                    <img
                      src="/logofundobranco.svg"
                      alt="De Mãos Dadas"
                      className={`relative h-48 md:h-64 w-auto mb-10 drop-shadow-2xl transition-all duration-700 ${
                        logoVariant === 'mono' ? 'grayscale brightness-0' :
                        logoVariant === 'watermark' ? 'opacity-10' : 'hover:scale-105'
                      }`}
                    />
                  </div>
                  <div className="w-full max-w-xs space-y-4">
                    <p className="text-label text-center font-bold text-muted-foreground uppercase tracking-widest">Configurar Variante</p>
                    <LogoVariantSelector selected={logoVariant} onSelect={setLogoVariant} />
                  </div>
                </Card>

                <div className="space-y-6 flex flex-col justify-center">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-foreground">A Anatomia da Mudança</h4>
                    <ContentBadge type="diretriz" />
                  </div>
                  <div className="space-y-4">
                    {[
                      { title: 'Símbolo: Mãos Entrelaçadas', desc: 'Representa a força do coletivo e o compromisso mútuo.', color: 'text-primary' },
                      { title: 'O Coração Oculto', desc: 'Comunica que toda ação técnica nasce de um propósito humano.', color: 'text-foreground' },
                      { title: 'Narrativa de Ascensão', desc: 'A transição cromática simboliza a evolução do indivíduo na favela.', color: 'text-accent' },
                      { title: 'Tipografia Robusta', desc: 'Garante que a voz da favela seja ouvida com clareza e autoridade.', color: 'text-primary' }
                    ].map((item, i) => (
                      <Card key={i} className="p-5 border-none shadow-sm hover:shadow-md hover:translate-x-1 transition-all bg-white group">
                        <p className={`font-bold mb-1 text-label ${item.color} uppercase tracking-[0.15em]`}>{item.title}</p>
                        <p className="text-body-sm text-navy-600/70 font-light">{item.desc}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { title: 'Legitimidade', desc: 'Nascida e mantida pela comunidade.', icon: <HeartPulse className="w-5 h-5" /> },
                  { title: 'Transformação', desc: 'Ações que alteram realidades.', icon: <Sparkles className="w-5 h-5" /> },
                  { title: 'Autonomia', desc: 'Capacitar para o protagonismo.', icon: <ShieldCheck className="w-5 h-5" /> },
                  { title: 'Colaboração', desc: 'Nada se faz sozinho.', icon: <Layout className="w-5 h-5" /> },
                ].map((p, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-navy-50/50 border border-navy-100/50 hover:bg-white hover:shadow-premium transition-all group">
                    <div className="mb-4 p-2 w-fit rounded-lg bg-white text-primary group-hover:scale-110 transition-transform">
                      {p.icon}
                    </div>
                    <h5 className="font-bold text-foreground mb-1 text-sm">{p.title}</h5>
                    <p className="text-body-sm text-muted-foreground leading-tight">{p.desc}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Tab: Cores */}
            <TabsContent value="colors" className="space-y-12 animate-in fade-in duration-500">

              {/* Label de instrução */}
              <div className="flex items-center gap-2">
                <ContentBadge type="pergunta" />
                <p className="text-xs text-muted-foreground">Escolha a paleta que melhor representa o contexto de uso principal do Instituto.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {colorSchemes.map((scheme) => (
                  <Card
                    key={scheme.id}
                    className={`relative p-8 cursor-pointer transition-all duration-500 border-2 overflow-hidden flex flex-col rounded-[2rem] ${
                      colorScheme === scheme.id
                        ? 'border-primary ring-4 ring-primary/10 -translate-y-2 bg-white'
                        : 'border-navy-100 hover:border-navy-200 bg-white/50'
                    }`}
                    onClick={() => setColorScheme(scheme.id)}
                  >
                    {/* Selecionado — indicador claro */}
                    {colorScheme === scheme.id && (
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-primary text-white text-label font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                        <Check className="w-3 h-3" />
                        Selecionada
                      </div>
                    )}

                    <div className="mb-6">
                      <h4 className="font-bold text-foreground pr-20">{scheme.name}</h4>
                      <p className="text-body-sm text-muted-foreground mt-2 leading-relaxed font-medium">{scheme.description}</p>
                    </div>

                    <div className="grid grid-cols-1 gap-1 mb-6 overflow-hidden rounded-2xl shadow-inner border border-navy-100/30">
                      <div className="h-10 flex items-center justify-center text-label font-bold text-white" style={{ backgroundColor: scheme.navy }}>60% BASE</div>
                      <div className="h-6 flex items-center justify-center text-label font-bold text-white" style={{ backgroundColor: scheme.purple }}>30% FOCO</div>
                      <div className="h-4 flex items-center justify-center text-label font-bold text-white" style={{ backgroundColor: scheme.amber }}>10% ACENTO</div>
                      <div className="h-3 flex items-center gap-1 justify-end pr-2" style={{ backgroundColor: scheme.lilac }}>
                        <span className="text-[7px] font-bold text-white/80">LILÁS</span>
                      </div>
                      <div className="h-2" style={{ backgroundColor: scheme.pink }} />
                    </div>

                    {/* Recomendação */}
                    <div className="flex items-start gap-2 p-2.5 bg-navy-50/50 rounded-xl mb-3">
                      <ShieldCheck className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                      <p className="text-label font-medium leading-tight">{scheme.recommendation}</p>
                    </div>

                    {/* Por que — visível apenas quando selecionado */}
                    {colorScheme === scheme.id && (
                      <div className="mt-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <ContentBadge type="diretriz" />
                        <p className="mt-2 text-label text-navy-600 leading-relaxed italic">{scheme.why}</p>
                      </div>
                    )}
                  </Card>
                ))}
              </div>

              <div>
                <div className="mb-5 flex items-center gap-2">
                  <h4 className="font-bold text-foreground">Cores de Projeto</h4>
                  <ContentBadge type="diretriz" />
                </div>
                <p className="text-body-sm text-muted-foreground mb-5">Cada frente de atuação do instituto tem sua cor identificadora — estas não se alteram entre paletas.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {projectColors.map((pc) => (
                    <div key={pc.name} className="flex flex-col rounded-2xl overflow-hidden border border-navy-100/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white">
                      <div className="h-16 w-full" style={{ backgroundColor: pc.hex }} />
                      <div className="p-3">
                        <p className="text-body-sm font-bold text-foreground">{pc.name}</p>
                        <p className="text-label font-mono text-muted-foreground mt-0.5 uppercase tracking-wide">{pc.hex}</p>
                        <p className="text-label text-muted-foreground/70 mt-1 leading-snug">{pc.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="p-10 border-none shadow-premium bg-foreground text-white rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-1000" />
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                  <div className="p-6 rounded-full bg-white/10 backdrop-blur-md">
                    <Palette className="w-12 h-12 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <h4 className="font-bold">A Lógica por trás do Matiz</h4>
                      <ContentBadge type="diretriz" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {[
                        { label: 'Base & Confiança', color: 'text-accent', desc: 'O Azul Marinho ancora a instituição em documentos, relatórios e tom institucional formal.' },
                        { label: 'Ação & Sonho', color: 'text-primary', desc: 'O Roxo é o gatilho da mudança. Usado em toda comunicação que pede engajamento.' },
                        { label: 'Acento & Luz', color: 'text-warning', desc: 'O Âmbar sinaliza urgência e esperança. É o ponto que brilha no fim do túnel.' },
                        { label: 'Energia Pulsa', color: 'text-white', desc: 'O Pink irradia vibração e urgência. Ativa campanhas de alto impacto emocional.' },
                      ].map((item, i) => (
                        <div key={i}>
                          <p className={`font-bold uppercase text-label tracking-widest mb-2 ${item.color}`}>{item.label}</p>
                          <p className="text-xs font-light text-navy-50/80 leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Tab: Tipografia */}
            <TabsContent value="typography" className="space-y-10 animate-in fade-in duration-500">

              <div className="flex items-center gap-2">
                <ContentBadge type="pergunta" />
                <p className="text-xs text-muted-foreground">Escolha o sistema tipográfico que melhor comunica a voz do Instituto.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {typographyOptions.map((option) => (
                  <Card
                    key={option.id}
                    className={`p-8 cursor-pointer transition-all duration-300 border-2 rounded-[2rem] ${
                      typography === option.id
                        ? 'border-primary shadow-premium scale-[1.02] bg-white'
                        : 'border-navy-100 hover:border-navy-200 bg-white/50'
                    }`}
                    onClick={() => setTypography(option.id)}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="font-bold text-foreground">{option.name}</h4>
                      {typography === option.id
                        ? (
                          <div className="flex items-center gap-1 bg-primary text-white text-label font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                            <Check className="w-3 h-3" />
                            Ativa
                          </div>
                        )
                        : (
                          <span className="text-label text-muted-foreground border border-navy-100 px-2 py-0.5 rounded-full uppercase tracking-wide">
                            Selecionar
                          </span>
                        )
                      }
                    </div>
                    <div className="space-y-4 mb-6 min-h-[160px]">
                      <p className="font-bold tracking-tighter" style={{ fontFamily: option.headline, fontSize: 'var(--text-display-md)' }}>Aa</p>
                      <p className="leading-tight text-foreground font-bold" style={{ fontFamily: option.subtitle, fontSize: 'var(--text-heading-md)' }}>
                        Tipografia que <br />comunica impacto.
                      </p>
                      <p className="text-body-sm text-muted-foreground opacity-60 leading-relaxed" style={{ fontFamily: option.body }}>
                        A clareza do texto é a clareza da nossa missão social.
                      </p>
                    </div>
                    <div className="pt-4 border-t border-navy-50">
                      <p className="text-label text-muted-foreground uppercase font-bold tracking-widest mb-1">Stack tipográfica</p>
                      <p className="text-label font-medium text-navy-500">{option.fonts}</p>
                    </div>

                    {/* Por que — visível apenas quando selecionado */}
                    {typography === option.id && (
                      <div className="mt-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <ContentBadge type="diretriz" />
                        <p className="mt-2 text-label text-navy-600 leading-relaxed italic">{option.why}</p>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 pt-12 border-t border-navy-100/50">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold mb-2 font-display">Cartão de Identidade</h3>
              <p className="text-sm text-muted-foreground">O resumo das suas escolhas até aqui.</p>
            </div>
            <BrandSummaryCard
              colorName={currentColor.name}
              colors={{ navy: currentColor.navy, purple: currentColor.purple, amber: currentColor.amber }}
              typographyName={currentTypography.name}
              fonts={currentTypography.fonts}
              logoVariant={logoVariant}
              planningData={planningData}
              onReviewClick={() => scrollToPhase('fase-01')}
            />
          </div>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToPhase('fase-03')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full text-sm font-bold hover:-translate-y-0.5 hover:shadow-glow transition-all"
            >
              Avançar para as Diretrizes
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link href="/applications">
              <button className="inline-flex items-center gap-2 px-6 py-3 border border-accent/40 text-accent rounded-full text-sm font-semibold hover:bg-accent/10 hover:-translate-y-0.5 transition-all">
                <Layout className="w-3.5 h-3.5" />
                Ou veja a marca aplicada
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </Link>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════
            FASE 03 — DIRETRIZES DE USO
        ══════════════════════════════════════════════════════ */}
        <section id="fase-03" className="scroll-mt-24">

          <div className="max-w-4xl mb-14 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-100 text-navy-900 text-label font-bold uppercase tracking-widest mb-5 border border-navy-200">
              <BookOpen className="w-3 h-3" />
              Fase 03 — Diretrizes
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight leading-[1.1]">
              Como a marca deve<br /><span className="text-primary italic">se comportar</span>.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Não são escolhas — são regras de uso que valem independente do contexto ou da paleta selecionada.
            </p>
          </div>

          {/* Bloco 1 — Uso do Logo */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-5">
              <h3 className="text-xl font-bold text-foreground">Uso do Logo</h3>
              <ContentBadge type="diretriz" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { num: '01', title: 'Contraste Inegociável', desc: 'Legibilidade WCAG AA mínima (4.5:1). Sem exceções.' },
                { num: '02', title: 'Marca Colorida sobre Claro', desc: 'Use a versão colorida sobre fundos brancos ou Navy 50.' },
                { num: '03', title: 'Marca Branca sobre Escuro', desc: 'Use a versão negativa sobre Navy 900 ou fotos saturadas.' },
                { num: '04', title: 'Nunca Distorcer', desc: 'Nunca esticar, achatar, rotacionar ou aplicar sombras pesadas.' },
              ].map(({ num, title, desc }) => (
                <div key={num} className="p-5 rounded-2xl bg-navy-50/60 border border-navy-100/50 flex flex-col gap-2">
                  <span className="text-xs font-black text-primary/40 tracking-widest">{num}.</span>
                  <p className="font-bold text-sm text-foreground">{title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ética & Estética */}
          <div className="mb-20">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-2xl font-bold text-foreground">Ética & Estética</h3>
              <ContentBadge type="diretriz" />
            </div>
            <NaPratica items={[
              'Toda foto deve mostrar pessoas em posição de ação, liderança ou aprendizado — nunca em posição passiva',
              'Materiais de captação de recursos nunca devem reforçar narrativa de caridade ou vitimização',
            ]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
              <Card className="p-10 border-none shadow-premium bg-white relative overflow-hidden">
                <div className="absolute left-0 top-0 w-2 h-full bg-success" />
                <h4 className="font-bold text-xl mb-8 flex items-center gap-3 text-success">
                  <CheckCircle2 className="w-6 h-6" />
                  Deveres da Marca
                </h4>
                <ul className="space-y-6">
                  {[
                    { t: 'Protagonismo Real', d: 'Sempre mostrar pessoas em posição de ação e liderança.' },
                    { t: 'Limpeza Visual', d: 'Respeitar as áreas de respiro e evitar poluição visual.' },
                    { t: 'Acessibilidade', d: 'Garantir que todos possam ler e entender a mensagem.' },
                    { t: 'Narrativa de Vitória', d: 'Focar na solução e no potencial, não na vitimização.' }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="text-success font-bold text-lg leading-none">✓</span>
                      <div>
                        <p className="font-bold text-sm text-foreground">{item.t}</p>
                        <p className="text-xs text-muted-foreground">{item.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-10 border-none shadow-premium bg-white relative overflow-hidden">
                <div className="absolute left-0 top-0 w-2 h-full bg-error" />
                <h4 className="font-bold text-xl mb-8 flex items-center gap-3 text-error">
                  <XCircle className="w-6 h-6" />
                  Proibições Críticas
                </h4>
                <ul className="space-y-6">
                  {[
                    { t: 'Assistencialismo', d: 'Evitar imagens que reforcem a dependência ou caridade passiva.' },
                    { t: 'Distorção', d: 'Nunca esticar ou achatar o logo e seus elementos.' },
                    { t: 'Cores Alheias', d: 'Não usar tons que fujam da paleta institucional v2.0.' },
                    { t: 'Poluição Sombreado', d: 'Evitar drop shadows pesados ou efeitos que ocultem o logo.' }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="text-error font-bold text-lg leading-none">✗</span>
                      <div>
                        <p className="font-bold text-sm text-foreground">{item.t}</p>
                        <p className="text-xs text-muted-foreground">{item.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>

          {/* Checklist Final */}
          <Card className="p-10 md:p-12 border-none shadow-2xl bg-foreground text-white rounded-[3rem] text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-2">
              <ShieldCheck className="w-10 h-10 text-accent" />
              {checkedItems.every(Boolean) && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/20 text-success text-xs font-bold uppercase tracking-widest">
                  <CheckCircle2 className="w-3 h-3" /> Tudo validado
                </span>
              )}
            </div>
            <h3 className="text-2xl font-bold mb-2 mt-4">Checklist de Conformidade</h3>
            <p className="text-navy-100/50 mb-8 text-sm font-light">Antes de publicar qualquer material. Suas respostas ficam salvas.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left mb-10">
              {CHECKLIST_ITEMS.map((item, i) => (
                <label key={i} onClick={() => toggleCheck(i)} className="flex items-center gap-4 cursor-pointer group p-3 rounded-xl hover:bg-white/5 transition-all">
                  <div className={`w-5 h-5 rounded-md border-2 shrink-0 flex items-center justify-center transition-all ${
                    checkedItems[i] ? 'bg-success border-success' : 'border-navy-600 bg-transparent'
                  }`}>
                    {checkedItems[i] && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <span className={`text-sm leading-snug transition-colors ${checkedItems[i] ? 'text-navy-300 line-through' : 'text-navy-100 group-hover:text-white'}`}>{item}</span>
                </label>
              ))}
            </div>

            <p className="text-navy-100/40 text-xs mb-6">
              Identidade definida. O próximo passo é ver a marca aplicada em materiais reais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/applications">
                <Button size="lg" className="bg-accent text-foreground hover:bg-accent/90 rounded-full px-10 font-bold gap-2 shadow-lg hover:-translate-y-0.5 transition-all">
                  <Layout className="w-4 h-4" />
                  Ver Aplicações da Marca
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/dossie">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 font-bold gap-2">
                  <FileText className="w-4 h-4" />
                  Gerar Dossiê
                </Button>
              </Link>
              <button
                onClick={() => scrollToPhase('fase-01')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-navy-300 hover:text-white text-sm font-medium transition-colors"
              >
                Revisar do início
              </button>
            </div>
          </Card>
        </section>
      </main>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="mt-20 border-t border-navy-100 bg-white/50 backdrop-blur-md">
        <div className="container py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 opacity-60">
            <div className="flex items-center gap-3">
              <img src="/logofundobranco.svg" alt="De Mãos Dadas" className="h-6 w-auto grayscale" />
              <span className="text-xs font-bold tracking-widest uppercase">BRAND STANDARDS 2026</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-6 text-xs font-semibold uppercase tracking-widest">
              <button onClick={() => scrollToPhase('fase-01')} className="hover:text-primary transition-colors">Planejamento</button>
              <button onClick={() => scrollToPhase('fase-02')} className="hover:text-primary transition-colors">Identidade</button>
              <button onClick={() => scrollToPhase('fase-03')} className="hover:text-primary transition-colors">Diretrizes</button>
              <Link href="/applications" className="hover:text-primary transition-colors">Aplicações</Link>
            </nav>
            <p className="text-label font-medium">© INSTITUTO DE MÃOS DADAS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
