import { useRef } from 'react';
import { useLocation } from 'wouter';
import { useBrand, PlanningData, LogoVariant } from '@/contexts/BrandContext';
import { colorSchemes, typographyStyles, logoVariants } from '@/data/brand-identity';
import { ArrowLeft, Printer, CheckCircle2, XCircle, Sparkles, Palette, Quote, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LogoAsset } from '@/components/assets/LogoAsset';
import { MugAsset } from '@/components/assets/MugAsset';
import { BadgeAsset } from '@/components/assets/BadgeAsset';
import { NotepadAsset } from '@/components/assets/NotepadAsset';
import { BusinessCardAsset } from '@/components/assets/BusinessCardAsset';

type AssetLogoVariant = 'horizontal' | 'vertical' | 'symbol' | 'wordmark' | 'circle';
type CardLogoVariant  = 'horizontal' | 'vertical' | 'symbol' | 'circle';

/** Maps the full LogoVariant set to the subset accepted by most asset components. */
function toAssetVariant(variant: LogoVariant): AssetLogoVariant {
  const map: Record<LogoVariant, AssetLogoVariant> = {
    primary:   'horizontal',
    horizontal:'horizontal',
    vertical:  'vertical',
    symbol:    'symbol',
    wordmark:  'wordmark',
    circle:    'circle',
    mono:      'symbol',
    watermark: 'horizontal',
  };
  return map[variant];
}

/** Maps to the subset accepted by BusinessCardAsset (no 'wordmark'). */
function toCardVariant(variant: LogoVariant): CardLogoVariant {
  const v = toAssetVariant(variant);
  return v === 'wordmark' ? 'horizontal' : v;
}

/**
 * Dossiê Estratégico — Revisão Final Impressa
 *
 * Documento de revisão que consolida:
 *  1. Fundação Estratégica (dados do planejamento Fase 01)
 *  2. Identidade Visual selecionada (paleta, tipografia, variante do logo)
 *  3. Diretrizes e checklist de conformidade
 *
 * Otimizado para impressão A4 via @media print (ver index.css).
 */

const PLANNING_SECTIONS: {
  id: keyof PlanningData;
  title: string;
  question: string;
}[] = [
  { id: 'quemSomos',   title: 'Quem Somos',         question: 'Qual é a primeira impressão que define nossa essência?' },
  { id: 'historia',    title: 'Nossa História',      question: 'Como nossa jornada trouxe legitimidade ao projeto atual?' },
  { id: 'proposito',   title: 'Propósito',           question: 'Por que o Instituto é a resposta necessária hoje?' },
  { id: 'governanca',  title: 'Governança',          question: 'Como garantimos que cada recurso gere o máximo impacto?' },
  { id: 'voluntarios', title: 'Voluntários',         question: 'Como convidamos o mundo a pulsar conosco?' },
  { id: 'missao',      title: 'Missão',              question: 'Por que o Instituto existe? O que ele se compromete a fazer no mundo?' },
  { id: 'visao',       title: 'Visão',               question: 'Como o Instituto quer ser reconhecido daqui a 5 ou 10 anos?' },
  { id: 'valores',     title: 'Valores',             question: 'Quais princípios são inegociáveis no dia a dia do Instituto?' },
  { id: 'tracado',     title: 'Diretrizes de Traçado', question: 'Como as formas equilibram autoridade e acolhimento?' },
];

const COMPLIANCE_ITEMS = [
  { ok: true,  text: 'Contraste passa no teste WCAG AA?' },
  { ok: true,  text: 'A área de respiro é maior que 15%?' },
  { ok: true,  text: 'A tipografia segue a hierarquia correta?' },
  { ok: true,  text: 'O tom de voz é encorajador e legítimo?' },
  { ok: true,  text: 'As fotos comunicam protagonismo?' },
];

const DUTIES = [
  { text: 'Protagonismo Real',    desc: 'Sempre mostrar pessoas em posição de ação e liderança.' },
  { text: 'Limpeza Visual',       desc: 'Respeitar as áreas de respiro e evitar poluição visual.' },
  { text: 'Acessibilidade',       desc: 'Garantir que todos possam ler e entender a mensagem.' },
  { text: 'Narrativa de Vitória', desc: 'Focar na solução e no potencial, não na vitimização.' },
];

const PROHIBITIONS = [
  { text: 'Assistencialismo', desc: 'Evitar imagens que reforcem a dependência ou caridade passiva.' },
  { text: 'Distorção',        desc: 'Nunca esticar ou achatar o logo e seus elementos.' },
  { text: 'Cores Alheias',    desc: 'Não usar tons que fujam da paleta institucional v2.0.' },
  { text: 'Poluição Sombreada', desc: 'Evitar drop shadows pesados que ocultem o logo.' },
];

export default function Dossier() {
  const [, navigate] = useLocation();
  const printRef = useRef<HTMLDivElement>(null);

  const { planningData, colorScheme, typography, logoVariant, colors } = useBrand();

  const palette  = colorSchemes.find(c => c.id === colorScheme) ?? colorSchemes[0];
  const typo     = typographyStyles.find(t => t.id === typography) ?? typographyStyles[0];
  const logoMeta = logoVariants.find(l => l.id === logoVariant) ?? logoVariants[0];

  const today = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'long', year: 'numeric',
  });

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-gray-100 dossier-screen">

      {/* ── TOOLBAR (oculta na impressão) ─────────────────────── */}
      <div className="no-print sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container py-3 flex items-center justify-between gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate('/')}
            className="gap-2 text-muted-foreground hover:text-foreground rounded-full">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Brand Journey
          </Button>

          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground hidden sm:block">
              Dossiê pronto para impressão — use A4, margens normais
            </span>
            <Button size="sm" onClick={handlePrint}
              className="gap-2 bg-[#153065] text-white hover:bg-[#153065]/90 rounded-full px-5">
              <Printer className="w-4 h-4" />
              Imprimir / Salvar PDF
            </Button>
          </div>
        </div>
      </div>

      {/* ── DOCUMENTO IMPRIMÍVEL ───────────────────────────────── */}
      <div ref={printRef} className="dossier-document mx-auto my-8 no-print-margin">

        {/* ══════════════════════════════════════════
            CAPA
        ══════════════════════════════════════════ */}
        <div className="dossier-page dossier-cover"
          style={{ backgroundColor: colors.navy }}>

          <div className="flex flex-col justify-between h-full p-12 text-white">

            <div className="flex items-center gap-4">
              <img src="/logo_fundotransparente.svg" alt="De Mãos Dadas" className="h-16 w-auto opacity-90" />
              <div className="h-10 w-px bg-white/20" />
              <div>
                <p className="text-label font-bold uppercase tracking-[0.3em] text-white/50">Instituto</p>
                <p className="text-xl font-bold leading-tight">De Mãos Dadas</p>
              </div>
            </div>

            <div>
              <div className="inline-block px-3 py-1 rounded-full text-label font-bold uppercase tracking-widest mb-6"
                style={{ backgroundColor: colors.amber, color: colors.navy }}>
                Dossiê Estratégico
              </div>
              <h1 className="text-5xl font-black leading-tight mb-4 text-white">
                Brand Journey<br />
                <span style={{ color: colors.lilac }}>Review Final</span>
              </h1>
              <p className="text-white/60 text-sm font-light max-w-sm leading-relaxed">
                Consolidação do planejamento estratégico, identidade visual selecionada
                e diretrizes de uso da marca.
              </p>
            </div>

            <div className="flex items-end justify-between border-t border-white/10 pt-8">
              <div>
                <p className="text-label text-white/40 uppercase tracking-widest">Data de Geração</p>
                <p className="text-sm font-semibold text-white/80">{today}</p>
              </div>
              <div className="text-right">
                <p className="text-label text-white/40 uppercase tracking-widest">Paleta Ativa</p>
                <p className="text-sm font-semibold text-white/80">{palette.name}</p>
              </div>
              <div className="text-right">
                <p className="text-label text-white/40 uppercase tracking-widest">Tipografia</p>
                <p className="text-sm font-semibold text-white/80">{typo.name}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            SEÇÃO 1 — FUNDAÇÃO ESTRATÉGICA
        ══════════════════════════════════════════ */}
        <div className="dossier-page dossier-content">
          <div className="dossier-section-header" style={{ borderColor: colors.purple }}>
            <span className="dossier-section-tag" style={{ backgroundColor: colors.purple }}>Seção 01</span>
            <h2 className="dossier-section-title">Fundação Estratégica</h2>
            <p className="dossier-section-subtitle">
              Narrativa da marca e textos funcionais definidos na Fase 01 — Planejamento.
            </p>
          </div>

          <div className="dossier-planning-grid">
            {PLANNING_SECTIONS.map((section, idx) => {
              const data = planningData[section.id];
              return (
                <div key={section.id} className="dossier-planning-card">
                  <div className="dossier-card-number" style={{ color: colors.purple }}>
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h3 className="dossier-card-title">{section.title}</h3>
                  <p className="dossier-card-question">{section.question}</p>

                  <div className="dossier-card-body">
                    <div className="dossier-story" style={{ borderLeftColor: colors.purple }}>
                      <p className="dossier-label">Narrativa</p>
                      <p className="dossier-story-text">{data.story}</p>
                    </div>
                    <div className="dossier-functional" style={{ backgroundColor: `${colors.navy}08` }}>
                      <p className="dossier-label">Texto Funcional</p>
                      <p className="dossier-functional-text">{data.functional}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ══════════════════════════════════════════
            SEÇÃO 2 — IDENTIDADE VISUAL
        ══════════════════════════════════════════ */}
        <div className="dossier-page dossier-content">
          <div className="dossier-section-header" style={{ borderColor: colors.amber }}>
            <span className="dossier-section-tag" style={{ backgroundColor: colors.amber, color: colors.navy }}>Seção 02</span>
            <h2 className="dossier-section-title">Identidade Visual Selecionada</h2>
            <p className="dossier-section-subtitle">
              Configurações escolhidas na Fase 02 — Identidade Visual.
            </p>
          </div>

          {/* Paleta */}
          <div className="dossier-identity-block">
            <h3 className="dossier-identity-label">Paleta Cromática</h3>
            <p className="dossier-identity-name">{palette.name}</p>
            <p className="dossier-identity-desc">{palette.psychology}</p>

            <div className="dossier-palette-row">
              {[
                { label: 'Primária', hex: palette.colors.primary,   pct: `${palette.distribution.main}%` },
                { label: 'Secundária', hex: palette.colors.secondary, pct: `${palette.distribution.secondary}%` },
                { label: 'Acento', hex: palette.colors.accent,     pct: `${palette.distribution.accent}%` },
                { label: 'Lilás', hex: palette.colors.lilac,      pct: '—' },
              ].map(sw => (
                <div key={sw.label} className="dossier-swatch-item">
                  <div className="dossier-swatch-color" style={{ backgroundColor: sw.hex }} />
                  <p className="dossier-swatch-hex">{sw.hex}</p>
                  <p className="dossier-swatch-label">{sw.label}</p>
                  <p className="dossier-swatch-pct">{sw.pct}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tipografia */}
          <div className="dossier-identity-block" style={{ borderTopColor: `${colors.purple}30` }}>
            <h3 className="dossier-identity-label">Tipografia</h3>
            <p className="dossier-identity-name">{typo.name}</p>
            <p className="dossier-identity-desc">{typo.narrative}</p>

            <div className="dossier-typo-row">
              <div className="dossier-typo-item">
                <p className="dossier-label">Display / Títulos</p>
                <p className="dossier-typo-family" style={{ fontFamily: typo.fonts.display }}>
                  {typo.fonts.display}
                </p>
              </div>
              <div className="dossier-typo-item">
                <p className="dossier-label">Corpo / Leitura</p>
                <p className="dossier-typo-family" style={{ fontFamily: typo.fonts.body }}>
                  {typo.fonts.body}
                </p>
              </div>
              <div className="dossier-typo-specimen" style={{ borderLeftColor: colors.purple }}>
                <p className="dossier-label">Specimen</p>
                <p style={{ fontFamily: typo.fonts.display }}>{typo.specimen}</p>
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="dossier-identity-block" style={{ borderTopColor: `${colors.amber}40` }}>
            <h3 className="dossier-identity-label">Variante de Logo</h3>
            <p className="dossier-identity-name">{logoMeta.name}</p>
            <p className="dossier-identity-desc">{logoMeta.description}</p>
            <div className="dossier-logo-tip" style={{ backgroundColor: `${colors.amber}15`, borderColor: `${colors.amber}40` }}>
              <span className="font-bold">Dica técnica:</span> {logoMeta.technicalTip}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            SEÇÃO 3 — APLICAÇÕES DA MARCA (SMART ASSETS)
        ══════════════════════════════════════════ */}
        <div className="dossier-page dossier-content">
          <div className="dossier-section-header" style={{ borderColor: colors.navy }}>
            <span className="dossier-section-tag" style={{ backgroundColor: colors.navy }}>Seção 03</span>
            <h2 className="dossier-section-title">Aplicações de Referência</h2>
            <p className="dossier-section-subtitle">
              Visualização da "Logica de Marca Aplicada" em itens do cotidiano institucional.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
               <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center min-h-[250px]">
                  <MugAsset 
                    background={colors.purple}
                    logoType="clara"
                    logoVariant={toAssetVariant(logoVariant)}
                    primaryColor={colors.purple}
                    secondaryColor={colors.navy}
                    fontFamily={typo.fonts.display}
                    tagline={planningData.proposito.functional}
                    taglineColor={colors.amber}
                    handleColor={`${colors.purple}cc`}
                  />
               </div>
               <p className="text-[10px] font-bold text-center uppercase tracking-widest text-gray-400">Caneca Institucional (Smart)</p>
            </div>

            <div className="space-y-4">
               <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center min-h-[250px]">
                  <div className="scale-90">
                    <BadgeAsset 
                      headerBackground={colors.purple}
                      logoType="clara"
                      logoVariant={toAssetVariant(logoVariant)}
                      primaryColor={colors.purple}
                      secondaryColor={colors.navy}
                      borderColor={colors.navy}
                      nameColor={colors.purple}
                      fontFamily={typo.fonts.display}
                      name="THIAGO B. VILAR"
                      role="Liderança Comunitária"
                      eventText={`Instituto DMD · ${today.split(' de ')[2]}`}
                    />
                  </div>
               </div>
               <p className="text-[10px] font-bold text-center uppercase tracking-widest text-gray-400">Identificação Funcional (Smart)</p>
            </div>

            <div className="space-y-4">
               <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center min-h-[250px]">
                  <div className="scale-75">
                    <NotepadAsset 
                      headerBorderColor={colors.purple}
                      footerBackground={colors.purple}
                      titleColor={colors.purple}
                      logoVariant={toAssetVariant(logoVariant)}
                      primaryColor={colors.purple}
                      secondaryColor={colors.navy}
                      fontFamily={typo.fonts.display}
                      title="Instituto De Mãos Dadas"
                      subTitle={planningData.missao.functional}
                    />
                  </div>
               </div>
               <p className="text-[10px] font-bold text-center uppercase tracking-widest text-gray-400">Papelaria de Registro (Smart)</p>
            </div>

            <div className="space-y-4">
               <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center min-h-[250px]">
                  <div className="scale-90">
                    <BusinessCardAsset
                      layout="classic"
                      primaryColor={colors.purple}
                      secondaryColor={colors.navy}
                      accentColor={colors.amber}
                      logoVariant={toCardVariant(logoVariant)}
                      fontFamily={typo.fonts.display}
                      name="INSTITUTO DMD"
                      role="Desenvolvimento Legítimo"
                    />
                  </div>
               </div>
               <p className="text-[10px] font-bold text-center uppercase tracking-widest text-gray-400">Ponto de Contato (Smart)</p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gray-50 rounded-3xl border border-gray-100">
             <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-sm uppercase tracking-widest">Fundamentação Tecnico-Social</h3>
             </div>
             <p className="text-xs text-gray-600 leading-relaxed italic">
                "A marca aplicada não é apenas um logo em um objeto; é a materialização da confiança. 
                Nesta configuração, a paleta <strong>{palette.name}</strong> trabalha em conjunto com a tipografia 
                <strong>{typo.fonts.display}</strong> para criar uma presença que é simultaneamente profissional e acolhedora, 
                eliminando o aspecto assistencialista e reforçando o protagonismo da favela."
             </p>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            SEÇÃO 4 — DIRETRIZES & CHECKLIST
        ══════════════════════════════════════════ */}
        <div className="dossier-page dossier-content">
          <div className="dossier-section-header" style={{ borderColor: '#22c55e' }}>
            <span className="dossier-section-tag" style={{ backgroundColor: '#22c55e' }}>Seção 04</span>
            <h2 className="dossier-section-title">Diretrizes & Conformidade</h2>
            <p className="dossier-section-subtitle">
              Ética de marca e checklist de validação antes de publicar qualquer material.
            </p>
          </div>

          <div className="dossier-guidelines-grid">
            {/* Deveres */}
            <div className="dossier-guideline-col">
              <div className="dossier-guideline-header dossier-guideline-ok">
                <CheckCircle2 className="w-5 h-5" />
                Deveres da Marca
              </div>
              {DUTIES.map((d, i) => (
                <div key={i} className="dossier-guideline-item">
                  <span className="dossier-guideline-mark dossier-ok-mark">✓</span>
                  <div>
                    <p className="font-bold text-sm">{d.text}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Proibições */}
            <div className="dossier-guideline-col">
              <div className="dossier-guideline-header dossier-guideline-err">
                <XCircle className="w-5 h-5" />
                Proibições Críticas
              </div>
              {PROHIBITIONS.map((p, i) => (
                <div key={i} className="dossier-guideline-item">
                  <span className="dossier-guideline-mark dossier-err-mark">✗</span>
                  <div>
                    <p className="font-bold text-sm">{p.text}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Checklist */}
          <div className="dossier-checklist" style={{ backgroundColor: colors.navy }}>
            <h3 className="dossier-checklist-title text-white">Checklist de Conformidade</h3>
            <p className="text-white/60 text-xs mb-6">
              Valide cada ponto antes de publicar qualquer material da marca.
            </p>
            <div className="dossier-checklist-grid">
              {COMPLIANCE_ITEMS.map((item, i) => (
                <label key={i} className="dossier-checklist-item">
                  <span className="dossier-check-box" />
                  <span className="text-white/80 text-sm">{item.text}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Rodapé do documento */}
          <div className="dossier-doc-footer" style={{ borderTopColor: `${colors.navy}20` }}>
            <div className="flex items-center gap-3">
              <img src="/logofundobranco.svg" alt="De Mãos Dadas" className="h-8 w-auto opacity-40" />
              <div>
                <p className="text-label font-bold uppercase tracking-widest text-gray-400">Instituto De Mãos Dadas</p>
                <p className="text-label text-gray-400">Brand Standards 2026 · Dossiê gerado em {today}</p>
              </div>
            </div>
            <p className="text-label text-gray-400 text-right">
              Paleta: {palette.name}<br />
              Tipografia: {typo.name}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
