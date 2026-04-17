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

  const VozesWithClef = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <span className={className} style={style}>
      V<span style={{ color: '#FF9E00', fontFamily: 'serif', letterSpacing: 0 }}>𝄞</span>zes
    </span>
  );

  const renderFront = () => {
    switch (layout) {
      case 'modern-bold':
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-6xl font-black uppercase leading-[0.75] tracking-tighter" style={{ color: textColor, fontFamily: 'Inter' }}>
              <VozesWithClef style={{ color: textColor, fontFamily: 'Inter' }} /><br />
              <span style={{ color: '#FF9E00' }}>JK</span>
            </h2>
            <div className="mt-4 flex flex-col items-center leading-tight">
              <span className="text-2xl font-medium tracking-tight italic opacity-70" style={{ color: textColor, fontFamily: 'Inter' }}>
                de Mãos Dadas
              </span>
            </div>
          </div>
        );
      case 'minimalist-clean':
        return (
          <div className="flex flex-col items-center text-center">
            <span className="text-[10px] font-black tracking-[0.8em] uppercase opacity-40 mb-2" style={{ color: textColor }}>CORAL</span>
            <div className="flex flex-col items-center leading-tight">
              <VozesWithClef className="text-2xl font-medium tracking-tight" style={{ color: textColor, fontFamily: 'Inter' }} />
              <span className="text-2xl font-medium tracking-tight italic opacity-80" style={{ color: textColor, fontFamily: 'Inter' }}>
                de Mãos Dadas
              </span>
            </div>
          </div>
        );
      case 'artistic-serif':
        return (
          <div className="flex flex-col items-center">
            <VozesWithClef className="text-2xl font-black uppercase tracking-widest opacity-40 mb-2" style={{ color: textColor, fontFamily: 'Inter' }} />
            <div className="relative flex flex-col items-center leading-tight">
              <h2 className="text-5xl font-medium italic" style={{ color: textColor, fontFamily: 'Inter' }}>
                Mãos Dadas
              </h2>
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF9E00] mt-4" />
            </div>
          </div>
        );
      case 'badge-circle':
        return (
          <div className="flex flex-col items-center">
            <div className="flex items-end gap-1 mb-4 h-16">
              <span className="text-4xl font-black uppercase tracking-tighter" style={{ color: textColor, fontFamily: 'Inter' }}>V</span>
              <span className="text-5xl font-black tracking-tighter pb-2" style={{ color: '#FF9E00', fontFamily: 'serif' }}>𝄞</span>
              <span className="text-4xl font-black uppercase tracking-tighter pb-4" style={{ color: textColor, fontFamily: 'Inter' }}>Z</span>
              <span className="text-5xl font-black uppercase tracking-tighter pb-1" style={{ color: textColor, fontFamily: 'Inter' }}>E</span>
              <span className="text-4xl font-black uppercase tracking-tighter" style={{ color: textColor, fontFamily: 'Inter' }}>S</span>
            </div>
            <div className="relative flex flex-col items-center leading-tight">
              <span className="text-2xl font-medium italic opacity-80" style={{ color: textColor, fontFamily: 'Inter' }}>
                de Mãos Dadas
              </span>
            </div>
          </div>
        );
      case 'vertical-modern':
        return (
          <div className="flex items-center gap-6">
            <h2 className="text-5xl font-black uppercase leading-none tracking-tighter flex flex-col" style={{ color: textColor, fontFamily: 'Inter' }}>
              <span>V</span><span style={{ fontFamily: 'serif', color: '#FF9E00' }}>𝄞</span><span style={{ color: '#FF9E00' }}>Z</span><span>E</span><span>S</span>
            </h2>
            <div className="flex flex-col items-start leading-tight">
              <VozesWithClef className="text-2xl font-medium" style={{ color: textColor, fontFamily: 'Inter' }} />
              <span className="text-2xl font-medium italic opacity-70" style={{ color: textColor, fontFamily: 'Inter' }}>de Mãos Dadas</span>
            </div>
          </div>
        );
      case 'oversized-impact':
        return (
          <div className="flex items-center gap-8">
            <h2 className="text-6xl font-black uppercase leading-[0.75] tracking-tighter flex flex-col opacity-90" style={{ color: textColor, fontFamily: 'Inter' }}>
              <span>V</span><span style={{ fontFamily: 'serif', color: '#FF9E00' }}>𝄞</span><span style={{ color: '#FF9E00' }}>Z</span><span>E</span><span>S</span>
            </h2>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-3xl font-black uppercase" style={{ color: textColor, fontFamily: 'Inter' }}>Mãos</span>
              <span className="text-3xl font-black uppercase" style={{ color: textColor, fontFamily: 'Inter' }}>Dadas</span>
            </div>
          </div>
        );
      case 'boxed-lockup':
        return (
          <div className="flex items-center gap-4">
            <div className="border-[3px] px-2 py-4 flex flex-col items-center" style={{ borderColor: textColor }}>
              <h2 className="text-4xl font-black uppercase leading-none flex flex-col" style={{ color: textColor, fontFamily: 'Inter' }}>
                <span>V</span><span style={{ fontFamily: 'serif', color: '#FF9E00' }}>𝄞</span><span style={{ color: '#FF9E00' }}>Z</span><span>E</span><span>S</span>
              </h2>
            </div>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-2xl font-medium italic opacity-80" style={{ color: textColor, fontFamily: 'Inter' }}>de Mãos Dadas</span>
              <div className="w-full h-1 bg-[#FF9E00] mt-2" />
            </div>
          </div>
        );
      case 'script-signature':
        return (
          <div className="flex flex-col items-center leading-tight">
            <h2 className="text-4xl font-bold tracking-tight mb-2" style={{ color: textColor, fontFamily: 'Inter' }}>
              <VozesWithClef style={{ color: textColor, fontFamily: 'Inter' }} /> JK
            </h2>
            <span className="text-2xl font-medium italic opacity-70" style={{ color: textColor, fontFamily: 'Inter' }}>de Mãos Dadas</span>
          </div>
        );
      case 'classic-stack':
      default:
        return (
          <div className="flex flex-col items-center text-center leading-tight">
            <h2 className="text-4xl font-bold tracking-tighter mb-1" style={{ color: textColor, fontFamily: 'Inter' }}>
              <VozesWithClef style={{ color: textColor, fontFamily: 'Inter' }} />
            </h2>
            <span className="text-3xl font-medium italic tracking-tight opacity-80" style={{ color: textColor, fontFamily: 'Inter' }}>
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
              {/* Sleeves (Pseudo) */}
              <div className="absolute -left-10 top-8 w-24 h-40 bg-inherit rounded-3xl -rotate-12 shadow-lg" />
              <div className="absolute -right-10 top-8 w-24 h-40 bg-inherit rounded-3xl rotate-12 shadow-lg" />

              {/* Neckline */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-10 bg-black/10 rounded-b-full border-b border-black/5" />

              {/* Fabric Texture/Fold effects */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_70%)]" />
              <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent rounded-b-[4rem]" />
            </div>

            {/* Print Area - FRONT */}
            <div className="relative z-10 mt-32 px-8 text-center pointer-events-none h-40 flex items-center justify-center">
              {/* Musical accent elements */}
              <span className="absolute -top-2 left-6 text-[11px] opacity-25 select-none" style={{ color: '#FF9E00', fontFamily: 'serif' }}>♩</span>
              <span className="absolute top-1 right-4 text-[9px] opacity-20 select-none" style={{ color: textColor, fontFamily: 'serif' }}>♫</span>
              <span className="absolute bottom-0 left-4 text-[9px] opacity-15 select-none" style={{ color: '#FF9E00', fontFamily: 'serif' }}>♪</span>
              <span className="absolute -bottom-1 right-6 text-[10px] opacity-15 select-none" style={{ color: textColor, fontFamily: 'serif' }}>♬</span>
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

              {/* Back shadows */}
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
                  "V<span style={{ color: '#FF9E00', fontFamily: 'serif' }}>𝄞</span>zes que tocam corações"
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
                Estampa Traseira
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
