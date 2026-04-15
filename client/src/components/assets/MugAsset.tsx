import React from 'react';
import { LogoAsset } from './LogoAsset';
import { ShapeStyle } from '@/contexts/BrandContext';

export interface MugProps {
  label?: string;
  background: string;
  logoType: 'clara' | 'escura' | 'ambar';
  tagline: string;
  taglineColor: string;
  handleColor: string;
  layout?: 'default' | 'dimensional-ring' | 'duo-tone-slice' | 'duo-tone-inverted' | 'classic-solar' | 'executive-blue' | 'manifesto-bold' | 'matter-tech' | 'pattern-grid' | 'color-rim' | 'solar-crest' | 'contrast-handle';
  logoVariant?: 'horizontal' | 'vertical' | 'symbol' | 'wordmark' | 'circle';
  logoHighlight?: 'none' | 'spotlight' | 'framed';
  primaryColor?: string;
  secondaryColor?: string;
  fontFamily?: string;
  fontWeight?: number;
  shapeStyle?: ShapeStyle;
}

// Proporções ref: caneca_ginga.html (45mm×50mm → 150×166px)
const BODY_W = 150;
const BODY_H = 166;

const DMD_AMBER = '#FF9E00';

// Ícones representando as áreas de impacto do Instituto De Mãos Dadas:
// Saúde, Educação, Cidadania, Voluntários, Comunidade
const PillarIcons = ({ color, size = 16 }: { color: string; size?: number }) => {
  const labels = ['S', 'E', 'C', 'V', 'C'];
  return (
    <div className="flex gap-1 justify-center">
      {labels.map((lbl, i) => (
        <div
          key={i}
          style={{
            width: size,
            height: size,
            borderRadius: '50%',
            background: `${color}${i % 2 === 0 ? '88' : ''}`,
            border: `1px solid ${color}`,
          }}
          className="flex items-center justify-center text-[6px] font-bold text-white"
        >
          {lbl}
        </div>
      ))}
    </div>
  );
};

export function MugAsset({
  background = "#FFFFFF",
  logoType = "escura",
  tagline,
  taglineColor = "#153065",
  handleColor = "#FFFFFF",
  layout = 'default',
  logoVariant = 'horizontal',
  primaryColor = '#153065',
  secondaryColor = '#7F4CA9',
}: MugProps) {

  const logoMainColor = logoType === 'clara' ? '#FFFFFF' : logoType === 'ambar' ? '#D4AF37' : primaryColor;
  const logoSecColor  = logoType === 'clara' ? 'rgba(255,255,255,0.65)' : logoType === 'ambar' ? 'rgba(212,175,55,0.70)' : secondaryColor;

  let bodyStyle: React.CSSProperties = { background };
  let contentLayout: React.ReactNode = null;
  let finalHandleColor = handleColor;

  switch (layout) {
    // 01 · Pilares do instituto (anel de impacto)
    case 'dimensional-ring':
      contentLayout = (
        <div className="flex flex-col items-center gap-3">
          <LogoAsset type="horizontal" primaryColor={logoMainColor} secondaryColor={logoSecColor} size={72} />
          <PillarIcons color={logoMainColor} size={15} />
        </div>
      );
      break;

    // 02 · Dois tons — símbolo + pilares
    case 'duo-tone-slice':
      bodyStyle.background = `linear-gradient(90deg, #FFFFFF 45%, ${primaryColor} 45%)`;
      contentLayout = (
        <div className="flex w-full px-5 items-center justify-between">
          <LogoAsset type="symbol" primaryColor={primaryColor} secondaryColor={secondaryColor} size={54} />
          <div className="flex flex-col gap-1.5 items-center">
            <span
              className="text-[6px] font-bold uppercase tracking-widest text-white/70"
              style={{ writingMode: 'vertical-rl', letterSpacing: '2px' }}
            >
              institutodemaosdadas.com.br
            </span>
          </div>
        </div>
      );
      break;

    // 03 · Dois Tons Invertido — navy esquerda, branco direita
    case 'duo-tone-inverted':
      bodyStyle.background = `linear-gradient(90deg, ${primaryColor} 55%, #FFFFFF 55%)`;
      finalHandleColor = primaryColor;
      contentLayout = (
        <div className="flex w-full px-5 items-center justify-between">
          <div className="flex flex-col gap-1.5 items-start">
            <span
              className="text-[6px] font-bold uppercase tracking-widest text-white/70"
              style={{ writingMode: 'vertical-rl', letterSpacing: '2px' }}
            >
              institutodemaosdadas.com.br
            </span>
          </div>
          <LogoAsset type="symbol" primaryColor={primaryColor} secondaryColor={secondaryColor} size={54} />
        </div>
      );
      break;

    // 04 · Âmbar Institucional — logo + tagline de missão
    case 'classic-solar':
      bodyStyle.background = DMD_AMBER;
      finalHandleColor = DMD_AMBER;
      contentLayout = (
        <div className="flex flex-col items-center gap-2">
          <LogoAsset type="horizontal" primaryColor={primaryColor} secondaryColor={secondaryColor} size={90} />
          <span
            className="text-[10px] font-bold uppercase tracking-[2px]"
            style={{ color: primaryColor }}
          >
            Comunidade Viva
          </span>
        </div>
      );
      break;

    // 05 · Navy Executivo — marca branca + localização
    case 'executive-blue':
      bodyStyle.background = primaryColor;
      finalHandleColor = primaryColor;
      contentLayout = (
        <div className="flex flex-col items-center gap-4">
          <LogoAsset type="horizontal" primaryColor="#FFFFFF" secondaryColor="rgba(255,255,255,0.6)" size={90} />
          <span className="text-[8px] font-bold tracking-[4px] text-white/80">GOIÂNIA · GO · 2026</span>
        </div>
      );
      break;

    // 06 · Manifesto — palavra de impacto em destaque
    case 'manifesto-bold':
      bodyStyle.background = DMD_AMBER;
      finalHandleColor = DMD_AMBER;
      contentLayout = (
        <div className="flex flex-col items-start w-full px-8">
          <span
            className="text-[30px] font-black leading-[0.85]"
            style={{ color: primaryColor }}
          >
            COM<br />UNI<br />DADE
          </span>
          <span
            className="text-[10px] font-bold mt-2 tracking-[3px]"
            style={{ color: primaryColor }}
          >
            VIVA
          </span>
        </div>
      );
      break;

    // 07 · Matter Tech — fundo escuro, tipografia técnica, logo amber
    case 'matter-tech':
      bodyStyle.background = '#1A1A2E';
      finalHandleColor = '#1A1A2E';
      contentLayout = (
        <div className="flex flex-col items-center gap-3">
          <LogoAsset type="horizontal" primaryColor={DMD_AMBER} secondaryColor="rgba(212,175,55,0.6)" size={80} />
          <div className="flex items-center gap-2">
            <div style={{ width: 24, height: 1, background: DMD_AMBER, opacity: 0.5 }} />
            <span className="text-[7px] font-bold tracking-[3px] uppercase" style={{ color: 'rgba(255,255,255,0.45)' }}>
              IMPACT · 2026
            </span>
            <div style={{ width: 24, height: 1, background: DMD_AMBER, opacity: 0.5 }} />
          </div>
        </div>
      );
      break;

    // 08 · Pattern Grid — logo fundo branco centralizado
    case 'pattern-grid':
      bodyStyle.background = `radial-gradient(${primaryColor} 12%, transparent 13%)`;
      bodyStyle.backgroundSize = '14px 14px';
      bodyStyle.backgroundColor = '#FFFFFF';
      contentLayout = (
        <div className="bg-white rounded-lg flex items-center justify-center shadow-lg px-3 py-2">
          <LogoAsset type="horizontal" primaryColor={primaryColor} secondaryColor={secondaryColor} size={84} />
        </div>
      );
      break;

    // 09 · Color Rim — borda colorida dupla, corpo branco
    case 'color-rim':
      bodyStyle.background = '#FFFFFF';
      finalHandleColor = secondaryColor;
      contentLayout = (
        <div className="flex flex-col items-center gap-2 w-full">
          {/* Faixa de cor no topo */}
          <div className="absolute top-0 left-0 right-0 h-2 z-30" style={{ background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})` }} />
          <LogoAsset type="horizontal" primaryColor={primaryColor} secondaryColor={secondaryColor} size={84} />
          {/* Faixa de cor na base */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 z-30" style={{ background: secondaryColor }} />
        </div>
      );
      break;

    // 10 · Solar Crest — símbolo em crista âmbar, navy base
    case 'solar-crest':
      bodyStyle.background = primaryColor;
      finalHandleColor = DMD_AMBER;
      contentLayout = (
        <div className="flex flex-col items-center gap-2">
          {/* Arco âmbar atrás do símbolo */}
          <div className="relative flex items-center justify-center">
            <div
              className="absolute"
              style={{
                width: 68, height: 34,
                borderRadius: '34px 34px 0 0',
                background: DMD_AMBER,
                top: 0,
              }}
            />
            <div className="relative z-10">
              <LogoAsset type="symbol" primaryColor="#FFFFFF" secondaryColor="rgba(255,255,255,0.55)" size={52} />
            </div>
          </div>
          <span className="text-[8px] font-bold tracking-[3px] uppercase text-white/70">
            GOIÂNIA · GO
          </span>
        </div>
      );
      break;

    // 11 · Alça de contraste — nome + missão
    case 'contrast-handle':
      bodyStyle.background = primaryColor;
      finalHandleColor = DMD_AMBER;
      contentLayout = (
        <div className="flex flex-col items-center gap-2">
          <span className="text-base font-black text-white tracking-widest">MÃOS DADAS</span>
          <span
            className="text-[9px] font-bold tracking-[4px] uppercase"
            style={{ color: DMD_AMBER }}
          >
            IMPACTO SOCIAL
          </span>
        </div>
      );
      break;

    default:
      contentLayout = (
        <div className="flex flex-col items-center gap-3">
          <LogoAsset
            type={logoVariant}
            primaryColor={logoMainColor}
            secondaryColor={logoSecColor}
            size={logoVariant === 'symbol' ? 100 : 86}
          />
          {tagline && (
            <span
              className="text-[8px] font-bold uppercase tracking-wider text-center"
              style={{ color: taglineColor }}
            >
              {tagline}
            </span>
          )}
        </div>
      );
  }

  return (
    <div className="flex flex-col items-center justify-center p-12 bg-transparent">
      {/* Container com perspectiva */}
      <div
        className="relative"
        style={{
          width : BODY_W + 50,
          height: BODY_H + 20,
        }}
      >
        {/* 1. Alça (visível atrás do corpo) */}
        <div
          className="absolute transition-all duration-700"
          style={{
            right : 10,
            top   : 35,
            width : 50,
            height: 95,
            border: `14px solid ${finalHandleColor === '#FFFFFF' ? '#EEEEEE' : finalHandleColor}`,
            borderLeft: 'none',
            borderRadius: '0 45px 45px 0',
            boxShadow: 'inset -4px 0 8px rgba(0,0,0,0.1), 4px 4px 12px rgba(0,0,0,0.15)',
            zIndex: 1,
          }}
        />

        {/* 2. Corpo da caneca */}
        <div
          className="absolute left-0 top-0 overflow-hidden transition-all duration-700 z-10"
          style={{
            width : BODY_W,
            height: BODY_H,
            borderRadius: '6px 6px 40px 40px',
            ...bodyStyle,
            boxShadow:
              'inset 12px 0 24px rgba(0,0,0,0.1), inset -12px 0 24px rgba(0,0,0,0.1), 0 10px 30px rgba(0,0,0,0.2)',
          }}
        >
          {/* Reflexo da borda superior */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white/20 to-transparent z-20 pointer-events-none" />

          {/* Brilho vertical central */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-16 bg-gradient-to-r from-transparent via-white/10 to-transparent z-20 pointer-events-none opacity-40" />

          {/* Face impressa */}
          <div className="relative h-full w-full flex flex-col items-center justify-center p-6 z-0">
            {contentLayout}
          </div>
        </div>
      </div>
    </div>
  );
}
