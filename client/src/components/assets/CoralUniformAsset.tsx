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

  const Clef = ({ size = '1em', style }: { size?: string | number; style?: React.CSSProperties }) => (
    <span style={{ color: amber, fontFamily: 'serif', fontSize: size, letterSpacing: 0, lineHeight: 1, ...style }}>𝄞</span>
  );

  const renderFront = () => {
    switch (layout) {

      /* ── 1. CLASSIC STACK — staff + hierarquia limpa ── */
      case 'classic-stack':
      default:
        return (
          <div className="flex flex-col items-center text-center gap-0">
            {/* Pentagrama musical */}
            <div className="flex flex-col gap-[3.5px] mb-4 w-24 opacity-[0.13]">
              {[0,1,2,3,4].map(i => <div key={i} className="h-px w-full" style={{ background: textColor }} />)}
            </div>
            <span className="text-[8px] font-black tracking-[0.55em] uppercase mb-1" style={{ color: textColor, opacity: 0.45 }}>Coral</span>
            <h2 className="text-5xl font-black leading-none tracking-tight" style={{ color: textColor, fontFamily: 'Inter' }}>
              V<Clef size="0.85em" />zes
            </h2>
            <div className="w-10 h-[2px] my-2 rounded-full" style={{ background: amber, opacity: 0.75 }} />
            <span className="text-lg font-medium italic" style={{ color: textColor, opacity: 0.7, fontFamily: 'Inter' }}>de Mãos Dadas</span>
          </div>
        );

      /* ── 2. MODERN BOLD — barras âmbar + tipografia impacto ── */
      case 'modern-bold':
        return (
          <div className="flex flex-col items-center w-full gap-0">
            <div className="w-full h-[2px] mb-3 rounded-full" style={{ background: amber, opacity: 0.65 }} />
            <h2 className="text-[54px] font-black uppercase leading-none tracking-[-3px]" style={{ color: textColor, fontFamily: 'Inter' }}>
              V<Clef size="0.8em" />ZES
            </h2>
            <div className="w-full h-[5px] mt-3 rounded-full" style={{ background: amber, opacity: 0.9 }} />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mt-3" style={{ color: textColor, opacity: 0.55 }}>
              De Mãos Dadas · Coral
            </span>
          </div>
        );

      /* ── 3. MINIMALIST CLEAN — swiss, regras finas, espaço negativo ── */
      case 'minimalist-clean':
        return (
          <div className="flex flex-col items-start w-full gap-2 px-1">
            <div className="flex items-center gap-2 w-full">
              <span className="text-[7px] font-black tracking-[0.6em] uppercase" style={{ color: textColor, opacity: 0.4 }}>
                C<span style={{ color: amber, fontFamily: 'serif' }}>𝄞</span>RAL
              </span>
              <div className="flex-1 h-px" style={{ background: textColor, opacity: 0.15 }} />
            </div>
            <h2 className="text-[42px] font-black leading-none tracking-[-2px]" style={{ color: textColor, fontFamily: 'Inter' }}>
              V<Clef size="0.82em" />zes
            </h2>
            <span className="text-xl font-light italic" style={{ color: textColor, opacity: 0.55, fontFamily: 'Inter' }}>de Mãos Dadas</span>
            <div className="flex items-center gap-2 w-full mt-1">
              <div className="flex-1 h-px" style={{ background: textColor, opacity: 0.15 }} />
              <span className="text-[7px] font-bold tracking-[0.4em]" style={{ color: textColor, opacity: 0.25 }}>JK</span>
            </div>
          </div>
        );

      /* ── 4. ARTISTIC SERIF — itálico dominante, label de acento ── */
      case 'artistic-serif':
        return (
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-px" style={{ background: amber, opacity: 0.4 }} />
              <span className="text-[7px] font-black tracking-[0.45em] uppercase" style={{ color: textColor, opacity: 0.4 }}>
                Coral V<span style={{ color: amber, fontFamily: 'serif' }}>𝄞</span>zes
              </span>
              <div className="w-5 h-px" style={{ background: amber, opacity: 0.4 }} />
            </div>
            <h2 className="text-[38px] font-bold italic leading-[1.05]" style={{ color: textColor, fontFamily: 'Georgia, serif' }}>
              de Mãos<br />Dadas
            </h2>
            <div className="flex gap-2 mt-3">
              <div className="w-1 h-1 rounded-full" style={{ background: textColor, opacity: 0.5 }} />
              <div className="w-1 h-1 rounded-full" style={{ background: amber }} />
              <div className="w-1 h-1 rounded-full" style={{ background: textColor, opacity: 0.5 }} />
            </div>
          </div>
        );

      /* ── 5. BADGE CIRCLE — crachá circular em SVG ── */
      case 'badge-circle':
        return (
          <svg width="158" height="158" viewBox="0 0 158 158" style={{ overflow: 'visible' }}>
            <defs>
              <path id="ringPath" d="M 79,79 m -57,0 a 57,57 0 1,1 114,0 a 57,57 0 1,1 -114,0" />
            </defs>
            {/* Círculos */}
            <circle cx="79" cy="79" r="62" fill="none" stroke={textColor} strokeWidth="1" opacity="0.25" />
            <circle cx="79" cy="79" r="55" fill="none" stroke={amber} strokeWidth="0.5" opacity="0.2" />
            {/* Texto circular */}
            <text fontSize="7.2" fontWeight="900" letterSpacing="4.8" fill={textColor} fontFamily="Inter" opacity="0.6">
              <textPath href="#ringPath" startOffset="3%">CORAL · DE MÃOS DADAS · RES. JK ·</textPath>
            </text>
            {/* Centro */}
            <text x="79" y="69" textAnchor="middle" fontSize="10" fontWeight="800" fill={textColor} fontFamily="Inter" opacity="0.45" letterSpacing="2.5">
              VOZES
            </text>
            <text x="79" y="96" textAnchor="middle" fontSize="30" fontWeight="900" fontFamily="Inter" letterSpacing="-1">
              <tspan fill={textColor}>V</tspan>
              <tspan fill={amber} fontFamily="serif">𝄞</tspan>
              <tspan fill={textColor}>ZES</tspan>
            </text>
            <text x="79" y="109" textAnchor="middle" fontSize="6.5" fontWeight="700" fill={textColor} opacity="0.3" letterSpacing="2.8" fontFamily="Inter">
              GOIÂNIA · BRASIL
            </text>
          </svg>
        );

      /* ── 6. VERTICAL MODERN — CORAL rotacionado + letras empilhadas ── */
      case 'vertical-modern':
        return (
          <div className="flex items-center gap-3">
            {/* Eixo lateral com CORAL vertical */}
            <div className="flex flex-col items-center gap-2">
              <div className="h-8 w-px opacity-20" style={{ background: textColor }} />
              <span
                className="text-[7px] font-black tracking-[0.5em] uppercase"
                style={{ color: textColor, opacity: 0.4, writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                Coral
              </span>
              <div className="h-8 w-px opacity-20" style={{ background: textColor }} />
            </div>
            {/* Letras empilhadas */}
            <h2 className="text-[48px] font-black uppercase leading-[0.82] tracking-[-1px] flex flex-col" style={{ color: textColor, fontFamily: 'Inter' }}>
              <span>V</span>
              <span style={{ color: amber, fontFamily: 'serif', fontSize: '0.85em' }}>𝄞</span>
              <span>Z</span>
              <span>E</span>
              <span>S</span>
            </h2>
            {/* Texto lateral direito */}
            <div className="flex flex-col items-start gap-1">
              <div className="h-px w-14 mb-1" style={{ background: amber, opacity: 0.5 }} />
              <span
                className="text-[10px] font-black uppercase leading-snug"
                style={{ color: textColor, opacity: 0.65, fontFamily: 'Inter', letterSpacing: '0.04em' }}
              >
                de<br />Mãos<br />Dadas
              </span>
            </div>
          </div>
        );

      /* ── 7. OVERSIZED IMPACT — V𝄞 gigante + grid tipográfico ── */
      case 'oversized-impact':
        return (
          <div className="flex flex-col items-start w-full px-1">
            <h2 className="text-[66px] font-black leading-none tracking-[-4px]" style={{ color: textColor, fontFamily: 'Inter', lineHeight: 0.85 }}>
              V<Clef size="0.78em" />
            </h2>
            <div className="flex items-baseline gap-3 -mt-1">
              <span className="text-[38px] font-black leading-none tracking-[-1px]" style={{ color: textColor, fontFamily: 'Inter' }}>ZES</span>
              <span className="text-[8px] font-black tracking-[0.35em] uppercase pb-1" style={{ color: textColor, opacity: 0.45 }}>Coral</span>
            </div>
            <div className="w-full h-px mt-2" style={{ background: amber, opacity: 0.5 }} />
            <span className="text-[11px] font-medium italic mt-1.5" style={{ color: textColor, opacity: 0.55, fontFamily: 'Inter' }}>
              de Mãos Dadas
            </span>
          </div>
        );

      /* ── 8. BOXED LOCKUP — bloco geométrico com faixa âmbar ── */
      case 'boxed-lockup':
        return (
          <div className="flex items-stretch">
            <div className="w-[4px] rounded-sm" style={{ background: amber }} />
            <div
              className="flex flex-col justify-between px-4 py-2"
              style={{ border: `1.5px solid ${textColor}`, borderLeft: 'none', borderRadius: '0 4px 4px 0', opacity: 0.95 }}
            >
              <span className="text-[8px] font-black tracking-[0.55em] uppercase" style={{ color: textColor, opacity: 0.45 }}>Coral</span>
              <h2 className="text-[40px] font-black leading-none tracking-[-1.5px] py-1" style={{ color: textColor, fontFamily: 'Inter' }}>
                V<Clef size="0.82em" />ZES
              </h2>
              <span className="text-[10px] font-medium italic" style={{ color: textColor, opacity: 0.6, fontFamily: 'Inter' }}>de Mãos Dadas</span>
            </div>
          </div>
        );

      /* ── 9. SCRIPT SIGNATURE — assinatura com notas musicais ── */
      case 'script-signature':
        return (
          <div className="flex flex-col items-center text-center gap-0.5">
            <div className="flex items-center gap-2 mb-1">
              <span style={{ color: amber, fontFamily: 'serif', fontSize: 13, opacity: 0.7 }}>♬</span>
              <span className="text-[7px] font-black tracking-[0.45em] uppercase" style={{ color: textColor, opacity: 0.35 }}>Est. Residencial JK</span>
              <span style={{ color: amber, fontFamily: 'serif', fontSize: 13, opacity: 0.7 }}>♬</span>
            </div>
            <h2 className="text-[42px] font-bold italic leading-[1.0]" style={{ color: textColor, fontFamily: 'Georgia, serif' }}>
              Coral
            </h2>
            <h3 className="text-2xl font-bold italic leading-tight -mt-1" style={{ color: textColor, fontFamily: 'Georgia, serif' }}>
              V<Clef size="1em" style={{ fontFamily: 'serif' }} />zes
            </h3>
            <div className="w-20 h-[1.5px] mt-2 rounded-full" style={{ background: amber, opacity: 0.7 }} />
            <span className="text-[9px] font-medium tracking-[0.3em] uppercase mt-1.5" style={{ color: textColor, opacity: 0.4 }}>
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
              <span className="absolute pointer-events-none select-none" style={{ top: '12%', left: '10%', fontSize: 14, opacity: 0.18, color: amber, fontFamily: 'serif' }}>♩</span>
              <span className="absolute pointer-events-none select-none" style={{ top: '8%', right: '12%', fontSize: 11, opacity: 0.14, color: textColor, fontFamily: 'serif' }}>♫</span>
              <span className="absolute pointer-events-none select-none" style={{ top: '28%', left: '6%', fontSize: 10, opacity: 0.12, color: textColor, fontFamily: 'serif' }}>♪</span>
              <span className="absolute pointer-events-none select-none" style={{ top: '22%', right: '8%', fontSize: 13, opacity: 0.16, color: amber, fontFamily: 'serif' }}>♬</span>
              <span className="absolute pointer-events-none select-none" style={{ top: '68%', left: '14%', fontSize: 12, opacity: 0.13, color: amber, fontFamily: 'serif' }}>♫</span>
              <span className="absolute pointer-events-none select-none" style={{ top: '72%', right: '10%', fontSize: 10, opacity: 0.12, color: textColor, fontFamily: 'serif' }}>♩</span>
              <span className="absolute pointer-events-none select-none" style={{ top: '82%', left: '30%', fontSize: 9, opacity: 0.10, color: textColor, fontFamily: 'serif' }}>♪</span>
              <span className="absolute pointer-events-none select-none" style={{ top: '78%', right: '28%', fontSize: 11, opacity: 0.11, color: amber, fontFamily: 'serif' }}>♬</span>
            </div>

            {/* Print Area - FRONT */}
            <div className="relative z-10 mt-32 px-8 text-center pointer-events-none h-40 flex items-center justify-center">
              {renderFront()}
            </div>

            <div className="absolute bottom-12 z-10">
              <div className="flex flex-col items-center gap-1">
                <div className="w-1 h-1 rounded-full" style={{ background: textColor, opacity: 0.2 }} />
                <p className="text-[9px] font-bold tracking-[0.3em] uppercase opacity-30" style={{ color: textColor }}>
                  Studio Edition 26
                </p>
              </div>
            </div>
          </div>

          {/* BACK */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col items-center">
            {/* T-Shirt Shape Base */}
            <div
              className="absolute inset-x-4 top-0 h-full rounded-[4rem] rounded-t-[2.5rem] shadow-2xl transition-all duration-700"
              style={{ backgroundColor: bgColor }}
            >
              <div className="absolute -left-10 top-8 w-24 h-40 bg-inherit rounded-3xl -rotate-12" />
              <div className="absolute -right-10 top-8 w-24 h-40 bg-inherit rounded-3xl rotate-12" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black/5 rounded-b-full border-b border-black/5" />
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-gradient-to-b from-black/20 to-transparent" />
            </div>

            {/* Print Area - BACK */}
            <div className="relative z-10 mt-24 px-8 flex flex-col items-center pointer-events-none">
              <LogoAsset
                type="symbol"
                size={80}
                primaryColor={color === 'white' ? primaryColor : '#FFFFFF'}
                secondaryColor={color === 'white' ? secondaryColor : 'rgba(255,255,255,0.7)'}
                showTagline={false}
              />
              <div className="mt-6 flex flex-col items-center gap-3">
                <p
                  className="text-[14px] font-medium italic text-center max-w-[180px] leading-tight"
                  style={{ color: textColor, fontFamily: 'Inter' }}
                >
                  "Vozes que tocam corações"
                </p>
                <div className="h-[1px] w-8 bg-current opacity-30 mt-2" style={{ color: textColor }} />
                <p className="text-[10px] font-black tracking-[0.2em] uppercase mt-2" style={{ color: textColor }}>
                  Residencial JK
                </p>
                <p className="text-[8px] font-bold tracking-widest uppercase opacity-60" style={{ color: textColor }}>
                  Goiânia · Brasil
                </p>
              </div>
            </div>

            <div className="absolute bottom-12 z-10">
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40" style={{ color: textColor }}>
                Coral
              </p>
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
