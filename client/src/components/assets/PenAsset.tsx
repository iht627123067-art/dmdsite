import React from 'react';
import { LogoAsset } from './LogoAsset';

export interface PenProps {
  label?: string;
  bodyColor: string;
  clipColor: string;
  gripColor?: string;
  logoType: 'clara' | 'escura';
  layout?: 'default' | 'classic-solar' | 'deep-prof' | 'full-set-white' | 'full-set-solar' | 'full-set-deep' | 'duo-tone' | 'ginga-frame' | 'symbolic-center' | 'minimalist-dash' | 'tech-concept' | 'focus-gov' | 'focus-amb' | 'modern-white' | 'power-solar' | 'brand-totem';
  isVertical?: boolean;
  tagline?: string;
  taglineColor?: string;
  logoHighlight?: 'none' | 'spotlight' | 'framed';
  primaryColor?: string;
  secondaryColor?: string;
  fontFamily?: string;
}

// Proporções ref: caneta_ginga.html (85mm × 10mm → 340 × 40px)
// Corpo em pill/barril plano — sem ponta cônica
const PEN_W = 340;
const PEN_H = 40;

const DMD_AMBER = '#FF9E00';

// Ícone representando as áreas de impacto do Instituto
const PillarDot = ({
  color,
  label,
  size = 18,
  inverted = false,
}: {
  color: string;
  label: string;
  size?: number;
  inverted?: boolean;
}) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: inverted ? color : 'transparent',
      border: `1.5px solid ${color}`,
      color: inverted ? '#FFFFFF' : color,
      fontSize: size * 0.3,
      fontWeight: 700,
      letterSpacing: '-0.2px',
    }}
    className="flex items-center justify-center uppercase flex-shrink-0"
  >
    {label}
  </div>
);

// Cinco pilares do instituto
const DMD_PILLARS = ['SAÚ', 'EDU', 'CID', 'VOL', 'COM'];

export function PenAsset({
  bodyColor,
  clipColor,
  logoType,
  layout = 'default',
  tagline,
  taglineColor,
  primaryColor = '#153065',
  secondaryColor = '#7F4CA9',
  fontFamily = 'Space Grotesk',
}: PenProps) {
  const isDark = logoType === 'clara';
  const logoMainColor = isDark ? '#FFFFFF' : primaryColor;
  const logoSecColor = isDark ? 'rgba(255,255,255,0.60)' : secondaryColor;
  const labelColor = taglineColor || (isDark ? 'rgba(255,255,255,0.88)' : primaryColor);

  const H_PAD = Math.round(PEN_H * 0.8);

  let finalBodyStyle: React.CSSProperties = { background: bodyColor };
  let content: React.ReactNode = null;

  switch (layout) {
    // 01 · Âmbar Institucional — logo + tagline de missão
    case 'classic-solar':
      finalBodyStyle.background = DMD_AMBER;
      content = (
        <div className="flex w-full items-center justify-between px-10">
          <LogoAsset type="horizontal" primaryColor={primaryColor} secondaryColor={secondaryColor} size={54} />
          <span className="text-[8px] font-bold uppercase tracking-widest" style={{ color: primaryColor }}>
            Comunidade Viva
          </span>
        </div>
      );
      break;

    // 02 · Navy Profissional — logo branca + cidade/ano
    case 'deep-prof':
      finalBodyStyle.background = primaryColor;
      content = (
        <div className="flex w-full items-center justify-between px-10">
          <LogoAsset type="horizontal" primaryColor="#FFFFFF" secondaryColor="rgba(255,255,255,0.6)" size={54} />
          <span className="text-[7px] font-bold tracking-[3px]" style={{ color: DMD_AMBER }}>
            GOIÂNIA · 2026
          </span>
        </div>
      );
      break;

    // 03 · Branca — pilares do instituto
    case 'full-set-white':
      finalBodyStyle.background = '#FFFFFF';
      finalBodyStyle.border = '1px solid #DDD';
      content = (
        <div className="flex w-full items-center justify-center gap-3">
          {DMD_PILLARS.map((p) => (
            <PillarDot key={p} label={p} color={primaryColor} size={18} />
          ))}
          <span className="text-[9px] font-black tracking-tighter ml-1" style={{ color: primaryColor }}>
            DMD
          </span>
        </div>
      );
      break;

    // 04 · Âmbar — pilares sólidos
    case 'full-set-solar':
      finalBodyStyle.background = DMD_AMBER;
      content = (
        <div className="flex w-full items-center justify-center gap-4">
          {DMD_PILLARS.map((p) => (
            <PillarDot key={p} label={p} color={primaryColor} size={20} inverted />
          ))}
        </div>
      );
      break;

    // 05 · Navy — pilares brancos
    case 'full-set-deep':
      finalBodyStyle.background = primaryColor;
      content = (
        <div className="flex w-full items-center justify-center gap-4">
          {DMD_PILLARS.map((p) => (
            <PillarDot key={p} label={p} color="#FFFFFF" size={20} inverted />
          ))}
        </div>
      );
      break;

    // 06 · Bicolor — logo + site
    case 'duo-tone':
      finalBodyStyle.background = `linear-gradient(90deg, #FFFFFF 50%, ${DMD_AMBER} 50%)`;
      content = (
        <div className="flex w-full items-center justify-around h-full px-8">
          <LogoAsset type="horizontal" primaryColor={primaryColor} size={45} />
          <span className="text-[7px] font-bold uppercase tracking-wide" style={{ color: primaryColor }}>
            institutodemaosdadas.com.br
          </span>
        </div>
      );
      break;

    // 07 · Frame Âmbar — voluntariado
    case 'ginga-frame':
      finalBodyStyle.background = '#FFFFFF';
      finalBodyStyle.border = `2px solid ${DMD_AMBER}`;
      content = (
        <div className="flex w-full items-center justify-between px-10">
          <span className="text-[8px] font-bold uppercase tracking-widest" style={{ color: primaryColor }}>
            Voluntariado · Goiânia
          </span>
          <LogoAsset type="horizontal" primaryColor={primaryColor} size={45} />
        </div>
      );
      break;

    // 08 · Centro Simbólico — símbolo flanqueado por pilares
    case 'symbolic-center':
      finalBodyStyle.background = DMD_AMBER;
      content = (
        <div className="flex w-full items-center justify-center gap-8">
          <PillarDot label="VOL" color={primaryColor} size={22} inverted />
          <LogoAsset type="symbol" primaryColor={primaryColor} size={30} />
          <PillarDot label="COM" color={primaryColor} size={22} inverted />
        </div>
      );
      break;

    // 09 · Minimalista Navy — traço âmbar + texto de missão
    case 'minimalist-dash':
      finalBodyStyle.background = primaryColor;
      content = (
        <div className="flex w-full items-center justify-between px-10">
          <div style={{ width: 3, height: PEN_H * 0.65, background: DMD_AMBER, borderRadius: 2, flexShrink: 0 }} />
          <span className="text-[8px] font-bold uppercase tracking-widest" style={{ color: 'white' }}>
            Impacto Social · Goiânia
          </span>
          <LogoAsset type="horizontal" primaryColor="#FFFFFF" secondaryColor="rgba(255,255,255,0.6)" size={54} />
        </div>
      );
      break;

    // 10 · Tech Escuro — logo + localização
    case 'tech-concept':
      finalBodyStyle.background = '#333333';
      content = (
        <div className="flex w-full items-center justify-between px-10">
          <LogoAsset type="horizontal" primaryColor="#FFFFFF" secondaryColor="rgba(255,255,255,0.6)" size={54} />
          <span className="text-[7px] font-bold tracking-[3px] text-white/60">GOIÂNIA · GO</span>
        </div>
      );
      break;

    // 11 · Saúde Comunitária — símbolo roxo + tema
    case 'focus-gov':
      finalBodyStyle.background = '#FFFFFF';
      finalBodyStyle.border = '1px solid #DDD';
      content = (
        <div className="flex w-full items-center justify-between px-10">
          <LogoAsset type="symbol" primaryColor={secondaryColor} size={28} />
          <span className="text-[8px] font-bold uppercase tracking-widest" style={{ color: primaryColor }}>
            Saúde Comunitária
          </span>
        </div>
      );
      break;

    // 12 · Educação e Cidadania — símbolo navy + âmbar
    case 'focus-amb':
      finalBodyStyle.background = DMD_AMBER;
      content = (
        <div className="flex w-full items-center justify-between px-10">
          <LogoAsset type="symbol" primaryColor={primaryColor} size={28} />
          <span className="text-[8px] font-bold uppercase tracking-widest" style={{ color: primaryColor }}>
            Educação e Cidadania
          </span>
        </div>
      );
      break;

    // 13 · Branca Moderna — logo + dois pilares
    case 'modern-white':
      finalBodyStyle.background = '#FFFFFF';
      finalBodyStyle.border = '1px solid #DDD';
      content = (
        <div className="flex w-full items-center justify-between px-10">
          <LogoAsset type="horizontal" primaryColor={primaryColor} size={45} />
          <div className="flex gap-2">
            <PillarDot label="VOL" color={primaryColor} size={16} />
            <PillarDot label="COM" color={secondaryColor} size={16} />
          </div>
        </div>
      );
      break;

    // 14 · Âmbar de Impacto — nome + tagline
    case 'power-solar':
      finalBodyStyle.background = DMD_AMBER;
      content = (
        <div className="flex w-full items-center justify-center gap-5">
          <span className="text-[11px] font-black" style={{ color: primaryColor, letterSpacing: '-0.3px' }}>
            DE MÃOS DADAS
          </span>
          <div className="w-px h-5" style={{ background: `${primaryColor}40`, flexShrink: 0 }} />
          <span className="text-[8px] font-bold uppercase tracking-widest" style={{ color: primaryColor }}>
            Comunidade Viva
          </span>
        </div>
      );
      break;

    // 15 · Totem — pilares + logo
    case 'brand-totem':
      finalBodyStyle.background = '#FFFFFF';
      finalBodyStyle.border = '1px solid #DDD';
      content = (
        <div className="flex w-full items-center justify-between px-10">
          <div className="flex gap-2">
            <PillarDot label="SAÚ" color={primaryColor} size={16} />
            <PillarDot label="EDU" color={secondaryColor} size={16} />
            <PillarDot label="CID" color={primaryColor} size={16} />
          </div>
          <LogoAsset type="horizontal" primaryColor={primaryColor} size={45} />
        </div>
      );
      break;

    default:
      content = (
        <div
          className="relative z-30 h-full w-full flex items-center justify-between"
          style={{ padding: `0 ${H_PAD}px` }}
        >
          <div className="flex items-center gap-2 flex-shrink-0">
            <LogoAsset type="symbol" primaryColor={logoMainColor} secondaryColor={logoSecColor} size={22} />
            <span
              className="font-bold uppercase whitespace-nowrap"
              style={{ color: logoMainColor, fontFamily, fontSize: '8px', letterSpacing: '0.12em' }}
            >
              De Mãos Dadas
            </span>
          </div>
          {tagline && (
            <>
              <div
                className="flex-shrink-0 mx-3"
                style={{ width: 1, height: Math.round(PEN_H * 0.4), background: `${labelColor}33` }}
              />
              <span
                className="text-[7px] font-semibold uppercase whitespace-nowrap tracking-widest"
                style={{ color: labelColor, fontFamily, letterSpacing: '0.15em' }}
              >
                {tagline}
              </span>
            </>
          )}
        </div>
      );
  }

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-transparent">
      {/* Container — dimensões ref: caneta_ginga.html */}
      <div className="relative" style={{ width: PEN_W + 20, height: PEN_H + 20 }}>

        {/* Corpo — pill/barril plano, ref caneta_ginga.html */}
        <div
          className="absolute top-1/2 left-0 -translate-y-1/2 overflow-hidden"
          style={{
            width: PEN_W,
            height: PEN_H,
            borderRadius: PEN_H / 2,
            ...finalBodyStyle,
            boxShadow:
              'inset 0 4px 6px rgba(0,0,0,0.08), inset 0 -2px 4px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.15)',
          }}
        >
          {/* Brilho superior */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                'linear-gradient(to bottom, rgba(255,255,255,0.18) 0%, transparent 45%, rgba(0,0,0,0.04) 100%)',
            }}
          />
          {/* Área de impressão */}
          <div className="h-full w-full flex items-center relative z-20">{content}</div>
        </div>

        {/* Presilha metálica */}
        <div
          className="absolute z-30 transition-all duration-300"
          style={{
            left: 56,
            top: '50%',
            transform: 'translateY(-108%)',
            width: 52,
            height: 7,
            background: clipColor,
            borderRadius: '3px 3px 0 0',
            boxShadow: '0 -2px 4px rgba(0,0,0,0.15)',
          }}
        />
      </div>
    </div>
  );
}
