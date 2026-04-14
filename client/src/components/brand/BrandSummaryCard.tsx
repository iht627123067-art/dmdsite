import React from 'react';
import { Card } from '@/components/ui/card';
import { Sparkles, FileText, ArrowRight, RotateCcw } from 'lucide-react';
import { Link } from 'wouter';
import { PlanningData } from '@/contexts/BrandContext';

interface BrandSummaryCardProps {
  colorName: string;
  colors: {
    navy: string;
    purple: string;
    amber: string;
  };
  typographyName: string;
  fonts: string;
  logoVariant: string;
  planningData: PlanningData;
  onReviewClick?: () => void;
}

const logoVariantLabels: Record<string, string> = {
  primary: 'Principal',
  horizontal: 'Horizontal',
  vertical: 'Vertical',
  symbol: 'Símbolo',
  wordmark: 'Wordmark',
  circle: 'Círculo',
  mono: 'Monocromático',
  watermark: "Marca d'água",
};

export function BrandSummaryCard({
  colorName,
  colors,
  typographyName,
  fonts,
  logoVariant,
  planningData,
  onReviewClick,
}: BrandSummaryCardProps) {
  const headlineFont = fonts.split(',')[0].trim();
  const bodyFont = fonts.split(',')[1]?.trim() ?? headlineFont;

  return (
    <Card className="relative overflow-hidden border-navy-100 shadow-premium max-w-2xl mx-auto">

      {/* ── Header com identidade visual ────────────────────── */}
      <div
        className="relative p-8 text-white overflow-hidden"
        style={{ backgroundColor: colors.navy }}
      >
        {/* Blob decorativo */}
        <div
          className="absolute -right-16 -top-16 w-56 h-56 rounded-full opacity-10 blur-2xl"
          style={{ backgroundColor: colors.purple }}
        />
        <div
          className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full opacity-10 blur-2xl"
          style={{ backgroundColor: colors.amber }}
        />

        <div className="relative z-10 flex items-start justify-between mb-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 mb-1">
              Brand Builder Summary
            </p>
            <h3 className="text-2xl font-bold" style={{ fontFamily: headlineFont }}>
              Instituto De Mãos Dadas
            </h3>
            <p className="text-sm opacity-50 mt-1 font-light">Cartão de Identidade — 2026</p>
          </div>
          <div className="p-2.5 rounded-2xl bg-white/10 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-white/80" />
          </div>
        </div>

        {/* Identidade Visual — 3 colunas */}
        <div className="relative z-10 grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <p className="text-[9px] font-bold uppercase tracking-widest opacity-50">Paleta</p>
            <div className="flex -space-x-1.5 mb-1.5">
              <div className="w-6 h-6 rounded-full border-2 border-white/30 shadow-sm" style={{ backgroundColor: colors.navy }} />
              <div className="w-6 h-6 rounded-full border-2 border-white/30 shadow-sm" style={{ backgroundColor: colors.purple }} />
              <div className="w-6 h-6 rounded-full border-2 border-white/30 shadow-sm" style={{ backgroundColor: colors.amber }} />
            </div>
            <p className="text-xs font-bold leading-tight opacity-90">{colorName}</p>
          </div>

          <div className="space-y-2">
            <p className="text-[9px] font-bold uppercase tracking-widest opacity-50">Tipografia</p>
            <p className="text-sm font-bold leading-tight opacity-90" style={{ fontFamily: headlineFont }}>
              {typographyName}
            </p>
            <p className="text-[9px] opacity-40 truncate">{fonts}</p>
          </div>

          <div className="space-y-2">
            <p className="text-[9px] font-bold uppercase tracking-widest opacity-50">Variante Logo</p>
            <p className="text-xs font-bold opacity-90">{logoVariantLabels[logoVariant] ?? logoVariant}</p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-8">

        {/* ── Fundação Estratégica ─────────────────────────────── */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Fundação Estratégica
          </p>
          <div className="space-y-3">
            {[
              { label: 'Missão',  value: planningData.missao.functional },
              { label: 'Visão',   value: planningData.visao.functional },
              { label: 'Valores', value: planningData.valores.functional },
            ].map((item) => (
              <div key={item.label} className="flex gap-3">
                <span
                  className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground w-14 shrink-0 pt-0.5"
                >
                  {item.label}
                </span>
                <p className="text-xs text-navy-700 leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-navy-100" />

        {/* ── Live Preview ─────────────────────────────────────── */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Preview ao Vivo
          </p>

          <div className="rounded-2xl overflow-hidden border border-navy-100 shadow-sm">
            {/* Hero */}
            <div className="p-6 text-white relative overflow-hidden" style={{ backgroundColor: colors.navy }}>
              <div
                className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-10 blur-xl"
                style={{ backgroundColor: colors.purple }}
              />
              <div className="relative z-10">
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.25em] opacity-50 mb-2"
                  style={{ fontFamily: bodyFont }}
                >
                  Instituto De Mãos Dadas
                </p>
                <h4
                  className="text-lg font-bold leading-tight mb-3"
                  style={{ fontFamily: headlineFont }}
                >
                  Transformando desigualdade<br />em potência real.
                </h4>
                <p
                  className="text-xs opacity-60 mb-4 leading-relaxed max-w-xs"
                  style={{ fontFamily: bodyFont }}
                >
                  {planningData.missao.functional}
                </p>
                <button
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold"
                  style={{ backgroundColor: colors.amber, color: colors.navy }}
                >
                  Conheça o Instituto
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card dentro do preview */}
            <div className="p-4 bg-white flex items-center gap-3 border-t border-navy-50">
              <div
                className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center"
                style={{ backgroundColor: colors.purple + '20' }}
              >
                <div className="w-5 h-5 rounded-full" style={{ backgroundColor: colors.purple }} />
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className="text-xs font-bold text-foreground"
                  style={{ fontFamily: headlineFont }}
                >
                  Impacto que transforma
                </p>
                <p className="text-[10px] text-muted-foreground truncate" style={{ fontFamily: bodyFont }}>
                  {planningData.valores.functional}
                </p>
              </div>
              <div
                className="w-1.5 h-8 rounded-full shrink-0"
                style={{ backgroundColor: colors.amber }}
              />
            </div>
          </div>
        </div>

        <div className="border-t border-navy-100" />

        {/* ── CTAs ─────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/dossie" className="flex-1">
            <button
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0"
              style={{ backgroundColor: colors.purple }}
            >
              <FileText className="w-4 h-4" />
              Gerar Dossiê Final
            </button>
          </Link>
          {onReviewClick && (
            <button
              onClick={onReviewClick}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold border-2 transition-all hover:-translate-y-0.5 active:translate-y-0"
              style={{ borderColor: colors.navy + '25', color: colors.navy }}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Revisar do Início
            </button>
          )}
        </div>

        {/* ── Rodapé ───────────────────────────────────────────── */}
        <div className="flex justify-between items-center pt-1">
          <p className="text-[10px] font-mono text-muted-foreground/40">DMD-2026-BB-0412</p>
          <p
            className="text-[10px] font-bold uppercase tracking-widest"
            style={{ color: colors.purple }}
          >
            Verified
          </p>
        </div>

      </div>
    </Card>
  );
}
