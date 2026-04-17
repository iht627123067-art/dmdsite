import React from 'react';
import { LogoAsset } from './LogoAsset';
import { motion } from 'framer-motion';

export interface CoralUniformProps {
  color: 'navy' | 'white' | 'purple';
  view: 'front' | 'back';
  layout?:
  | 'classic-stack'
  | 'modern-bold'
  | 'minimalist-clean'
  | 'artistic-serif'
  | 'badge-circle'
  | 'vertical-modern'
  | 'oversized-impact'
  | 'boxed-lockup'
  | 'script-signature';
  primaryColor?: string;
  secondaryColor?: string;
  fontFamily?: string;
}

export function CoralUniformAsset({
  color = 'navy',
  view = 'front',
  layout = 'classic-stack',
  primaryColor = '#153065',
  secondaryColor = '#7F4CA9',
}: CoralUniformProps) {
  const bgColor = color === 'navy' ? '#153065' : color === 'purple' ? '#7F4CA9' : '#FFFFFF';
  const textColor = (color === 'navy' || color === 'purple') ? '#FFFFFF' : '#153065';
  const amber = '#FF9E00';

  /** Noto Music (loaded in index.html) + system fallbacks for musical symbols. */
  const musicSymbolFont =
    '"Noto Music","Apple Symbols","Segoe UI Symbol","STIX Two Math","STIX Two Text",Palatino,"Palatino Linotype","Book Antiqua",Georgia,serif';

  const Clef = ({ size = '1em', style }: { size?: string | number; style?: React.CSSProperties }) => (
    <span
      aria-hidden
      style={{
        color: amber,
        fontFamily: musicSymbolFont,
        fontSize: size,
        letterSpacing: 0,
        lineHeight: 1,
        display: 'inline-block',
        verticalAlign: '-0.1em',
        marginLeft: '-0.04em',
        marginRight: '-0.06em',
        ...style,
      }}
    >
      𝄞
    </span>
  );

  const renderFront = () => {
    switch (layout) {

      /* ── 1. CLASSIC STACK ── */
      case 'classic-stack':
      default:
        return (
          <div className="flex flex-col items-center text-center gap-0">
            <span className="text-[8px] font-black tracking-[0.55em] uppercase mb-1" style={{ color: textColor, opacity: 0.4 }}>Coral</span>
            <h2 className="text-[48px] font-black leading-none tracking-tight" style={{ color: textColor, fontFamily: 'Inter' }}>
              V<Clef size="0.85em" />zes
            </h2>
            <span className="text-[22px] font-medium italic mt-2" style={{ color: textColor, opacity: 0.75, fontFamily: 'Inter' }}>de Mãos Dadas</span>
          </div>
        );

      /* ── 2. MODERN BOLD ── */
      case 'modern-bold':
        return (
          <div className="flex flex-col items-center w-full gap-0">
            <div className="flex items-center justify-between w-full mb-2">
              <span className="text-[7px] font-black tracking-[0.55em] uppercase" style={{ color: textColor, opacity: 0.35 }}>Coral</span>
              <span
                className="text-[8px] font-black tracking-[0.35em]"
                style={{ color: amber, opacity: 0.65, fontFamily: musicSymbolFont, lineHeight: 1 }}
              >
                ♩&#x2006;♫
              </span>
            </div>
            <h2 className="text-[52px] font-black uppercase leading-none tracking-[-3px]" style={{ color: textColor, fontFamily: 'Inter' }}>
              V<Clef size="0.8em" />ZES
            </h2>
            <span className="text-[20px] font-medium italic mt-2" style={{ color: textColor, opacity: 0.7, fontFamily: 'Inter' }}>
              de Mãos Dadas
            </span>
          </div>
        );

      /* ── 3. MINIMALIST CLEAN ── */
      case 'minimalist-clean':
        return (
          <div className="flex flex-col items-start w-full gap-1.5 px-1">
            <span className="text-[7px] font-black tracking-[0.6em] uppercase" style={{ color: textColor, opacity: 0.4 }}>
              C
              <span
                style={{
                  color: amber,
                  fontFamily: musicSymbolFont,
                  display: 'inline-block',
                  verticalAlign: '-0.06em',
                  marginInline: '-0.02em',
                  lineHeight: 1,
                }}
              >
                𝄞
              </span>
              RAL
            </span>
            <h2 className="text-[44px] font-black leading-none tracking-[-2px]" style={{ color: textColor, fontFamily: 'Inter' }}>
              V<Clef size="0.82em" />zes
            </h2>
            <span className="text-[22px] font-light italic" style={{ color: textColor, opacity: 0.65, fontFamily: 'Inter' }}>de Mãos Dadas</span>
          </div>
        );

      /* ── 4. ARTISTIC SERIF ── */
      case 'artistic-serif':
        return (
          <div className="flex flex-col items-center text-center">
            <span className="text-[7px] font-black tracking-[0.45em] uppercase mb-2" style={{ color: textColor, opacity: 0.38 }}>Coral</span>
            <h2 className="text-[44px] font-bold italic leading-none" style={{ color: textColor, fontFamily: 'Georgia, serif' }}>
              V<Clef size="0.88em" />zes
            </h2>
            <span className="text-[22px] font-medium italic mt-2" style={{ color: textColor, opacity: 0.7, fontFamily: 'Georgia, serif' }}>
              de Mãos Dadas
            </span>
          </div>
        );

      /* ── 5. BADGE CIRCLE ── */
      case 'badge-circle':
        return (
          <svg width="158" height="158" viewBox="0 0 158 158" style={{ overflow: 'visible' }}>
            <text x="79" y="63" textAnchor="middle" fontSize="8" fontWeight="800" fill={textColor} fontFamily="Inter" opacity="0.35" letterSpacing="2">coral</text>
            <text x="79" y="91" textAnchor="middle" fontSize="32" fontWeight="900" fontFamily="Inter" letterSpacing="-1">
              <tspan fill={textColor}>V</tspan>
              <tspan fill={amber} fontFamily={musicSymbolFont} baselineShift="-8%">𝄞</tspan>
              <tspan fill={textColor}>ZES</tspan>
            </text>
            <text x="79" y="108" textAnchor="middle" fontSize="10" fontWeight="500" fill={textColor} opacity="0.55" letterSpacing="0.5" fontFamily="Inter">de Mãos Dadas</text>
          </svg>
        );

      /* ── 6. VERTICAL MODERN ── */
      case 'vertical-modern':
        return (
          <div className="flex items-center gap-3">
            <span
              className="text-[7px] font-black tracking-[0.5em] uppercase"
              style={{ color: textColor, opacity: 0.38, writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Coral
            </span>
            <h2 className="text-[48px] font-black uppercase leading-[0.82] tracking-[-1px] flex flex-col" style={{ color: textColor, fontFamily: 'Inter' }}>
              <span>V</span>
              <span
                style={{
                  color: amber,
                  fontFamily: musicSymbolFont,
                  fontSize: '0.82em',
                  lineHeight: 0.85,
                  display: 'block',
                  marginTop: '-0.04em',
                  marginBottom: '-0.06em',
                  alignSelf: 'center',
                }}
              >
                𝄞
              </span>
              <span>Z</span><span>E</span><span>S</span>
            </h2>
            <span
              className="text-[14px] font-semibold italic leading-snug"
              style={{ color: textColor, opacity: 0.7, fontFamily: 'Inter' }}
            >
              de<br />Mãos<br />Dadas
            </span>
          </div>
        );

      /* ── 7. OVERSIZED IMPACT ── */
      case 'oversized-impact':
        return (
          <div className="flex flex-col items-start w-full px-1">
            <span className="text-[8px] font-black tracking-[0.5em] uppercase mb-1" style={{ color: textColor, opacity: 0.38 }}>Coral</span>
            <h2 className="text-[62px] font-black leading-none tracking-[-4px]" style={{ color: textColor, fontFamily: 'Inter', lineHeight: 0.85 }}>
              V<Clef size="0.76em" style={{ verticalAlign: '-0.14em' }} />
            </h2>
            <span className="text-[38px] font-black leading-none tracking-[-1px] -mt-1" style={{ color: textColor, fontFamily: 'Inter' }}>ZES</span>
            <span className="text-[19px] font-medium italic mt-2" style={{ color: textColor, opacity: 0.65, fontFamily: 'Inter' }}>
              de Mãos Dadas
            </span>
          </div>
        );

      /* ── 8. BOXED LOCKUP ── */
      case 'boxed-lockup':
        return (
          <div className="flex flex-col items-start gap-1 px-1">
            <span className="text-[8px] font-black tracking-[0.55em] uppercase" style={{ color: textColor, opacity: 0.4 }}>Coral</span>
            <h2 className="text-[38px] font-black leading-none tracking-[-1.5px]" style={{ color: textColor, fontFamily: 'Inter' }}>
              V<Clef size="0.82em" />ZES
            </h2>
            <span className="text-[18px] font-medium italic" style={{ color: textColor, opacity: 0.65, fontFamily: 'Inter' }}>de Mãos Dadas</span>
          </div>
        );

      /* ── 9. SCRIPT SIGNATURE ── */
      case 'script-signature':
        return (
          <div className="flex flex-col items-center text-center" style={{ gap: 2 }}>
            <span style={{ color: amber, fontFamily: musicSymbolFont, fontSize: 15, opacity: 0.65, marginBottom: 2, lineHeight: 1 }}>♫</span>
            <span className="text-[15px] font-semibold italic" style={{ color: textColor, opacity: 0.5, fontFamily: 'Georgia, serif', letterSpacing: '0.08em' }}>
              Coral
            </span>
            <h2 className="text-[46px] font-bold italic leading-[0.95]" style={{ color: textColor, fontFamily: 'Georgia, serif', marginTop: -2 }}>
              V<Clef size="0.9em" style={{ verticalAlign: '-0.08em' }} />zes
            </h2>
            <span style={{ color: amber, fontFamily: musicSymbolFont, fontSize: 11, opacity: 0.5, margin: '4px 0', lineHeight: 1 }}>♩</span>
            <span className="text-[23px] font-medium italic" style={{ color: textColor, opacity: 0.72, fontFamily: 'Georgia, serif' }}>
              de Mãos Dadas
            </span>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-transparent select-none">
      <div className="relative w-80 h-[28rem] perspective-1000 group">
        <motion.div
          animate={{ rotateY: view === 'back' ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="relative w-full h-full preserve-3d cursor-pointer"
        >
          {/* FRONT */}
          <div className="absolute inset-0 backface-hidden flex flex-col items-center">
            {/* T-Shirt Shape Base */}
            <div
              className="absolute inset-x-4 top-0 h-full rounded-[4rem] rounded-t-[2.5rem] shadow-2xl transition-all duration-700"
              style={{ backgroundColor: bgColor }}
            >
              {/* Sleeves */}
              <div className="absolute -left-10 top-8 w-24 h-40 bg-inherit rounded-3xl -rotate-12 shadow-lg" />
              <div className="absolute -right-10 top-8 w-24 h-40 bg-inherit rounded-3xl rotate-12 shadow-lg" />

              {/* Neckline */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-10 bg-black/10 rounded-b-full border-b border-black/5" />

              {/* Fabric Texture/Fold effects */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_70%)]" />
              <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent rounded-b-[4rem]" />

              {/* Decorative musical notes — front fabric only */}
              <span className="absolute pointer-events-none select-none" style={{ top: '9%', left: '10%', fontSize: 16, opacity: 0.18, color: amber, fontFamily: musicSymbolFont, lineHeight: 1 }}>♫</span>
              <span className="absolute pointer-events-none select-none" style={{ top: '7%', right: '11%', fontSize: 13, opacity: 0.14, color: textColor, fontFamily: musicSymbolFont, lineHeight: 1 }}>♫</span>
              <span className="absolute pointer-events-none select-none" style={{ top: '18%', left: '5%', fontSize: 12, opacity: 0.13, color: amber, fontFamily: musicSymbolFont, lineHeight: 1 }}>𝄞</span>
              <span className="absolute pointer-events-none select-none" style={{ top: '20%', right: '7%', fontSize: 15, opacity: 0.16, color: amber, fontFamily: musicSymbolFont, lineHeight: 1 }}>♬</span>
              <span className="absolute pointer-events-none select-none" style={{ top: '30%', left: '8%', fontSize: 11, opacity: 0.11, color: textColor, fontFamily: musicSymbolFont, lineHeight: 1 }}>♪</span>
              <span className="absolute pointer-events-none select-none" style={{ top: '26%', right: '9%', fontSize: 12, opacity: 0.12, color: textColor, fontFamily: musicSymbolFont, lineHeight: 1 }}>♩</span>
              <span className="absolute pointer-events-none select-none" style={{ top: '65%', left: '12%', fontSize: 14, opacity: 0.14, color: amber, fontFamily: musicSymbolFont, lineHeight: 1 }}>♪</span>
              <span className="absolute pointer-events-none select-none" style={{ top: '70%', right: '9%', fontSize: 11, opacity: 0.12, color: textColor, fontFamily: musicSymbolFont, lineHeight: 1 }}>♬</span>
              <span className="absolute pointer-events-none select-none" style={{ top: '78%', left: '28%', fontSize: 11, opacity: 0.10, color: amber, fontFamily: musicSymbolFont, lineHeight: 1 }}>♩</span>
              <span className="absolute pointer-events-none select-none" style={{ top: '75%', right: '26%', fontSize: 13, opacity: 0.11, color: textColor, fontFamily: musicSymbolFont, lineHeight: 1 }}>♫</span>
            </div>

            {/* Print Area - FRONT */}
            <div className="relative z-10 mt-32 px-8 text-center pointer-events-none h-40 flex items-center justify-center">
              {renderFront()}
            </div>

          </div>

          {/* BACK */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col items-center">
            <div
              className="absolute inset-x-4 top-0 h-full rounded-[4rem] rounded-t-[2.5rem] shadow-2xl transition-all duration-700"
              style={{ backgroundColor: bgColor }}
            >
              <div className="absolute -left-10 top-8 w-24 h-40 bg-inherit rounded-3xl -rotate-12" />
              <div className="absolute -right-10 top-8 w-24 h-40 bg-inherit rounded-3xl rotate-12" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black/5 rounded-b-full border-b border-black/5" />
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-gradient-to-b from-black/20 to-transparent" />
            </div>

            <div className="relative z-10 mt-24 px-8 flex flex-col items-center pointer-events-none">
              <LogoAsset
                type="symbol"
                size={80}
                primaryColor={color === 'white' ? primaryColor : '#FFFFFF'}
                secondaryColor={color === 'white' ? secondaryColor : 'rgba(255,255,255,0.7)'}
                showTagline={false}
              />
              <div className="mt-6 flex flex-col items-center gap-3">
                <p className="text-[14px] font-medium italic text-center max-w-[180px] leading-tight" style={{ color: textColor, fontFamily: 'Inter' }}>
                  "Vozes que tocam corações"
                </p>
                <div className="h-[1px] w-8 bg-current opacity-30 mt-2" style={{ color: textColor }} />
                <p className="text-[10px] font-black tracking-[0.2em] uppercase mt-2" style={{ color: textColor }}>Residencial JK</p>
                <p className="text-[8px] font-bold tracking-widest uppercase opacity-60" style={{ color: textColor }}>Goiânia · Brasil</p>
              </div>
            </div>

            <div className="absolute bottom-12 z-10">
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40" style={{ color: textColor }}>Coral</p>
            </div>
          </div>
        </motion.div>

        {/* View Indicator */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-4">
          <div className={`text-[9px] font-bold uppercase tracking-widest transition-opacity ${view === 'front' ? 'opacity-100' : 'opacity-30'}`}>Frente</div>
          <div className="w-px h-3 bg-navy-200 self-center" />
          <div className={`text-[9px] font-bold uppercase tracking-widest transition-opacity ${view === 'back' ? 'opacity-100' : 'opacity-30'}`}>Costa</div>
        </div>
      </div>
    </div>
  );
}
