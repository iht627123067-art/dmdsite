import React from 'react';
import { LogoAsset } from './LogoAsset';
import { motion } from 'framer-motion';

export interface CoralUniformProps {
  color: 'navy' | 'white' | 'purple';
  view: 'front' | 'back';
  layout?: 'classic-stack' | 'modern-bold' | 'minimalist-clean' | 'artistic-serif';
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

  const renderFront = () => {
    switch (layout) {
      case 'modern-bold':
        return (
          <div className="flex flex-col items-center">
             <div className="w-10 h-1 bg-current opacity-40 mb-4" style={{ color: textColor }} />
             <h2 className="text-4xl font-black uppercase leading-[0.75] tracking-tighter" style={{ color: textColor, fontFamily: 'Space Grotesk' }}>
               Vozes<br />
               <span className="text-[2.2rem] opacity-90">JK</span>
             </h2>
             <span className="mt-3 text-[10px] font-bold tracking-[0.4em] uppercase opacity-60" style={{ color: textColor }}>
                Coral de Mãos Dadas
             </span>
          </div>
        );
      case 'minimalist-clean':
        return (
          <div className="flex flex-col items-start px-4">
             <span className="text-[10px] font-black tracking-[0.5em] uppercase opacity-40 mb-2" style={{ color: textColor }}>
                ESTREIA 2026
             </span>
             <h2 className="text-5xl font-black uppercase tracking-tight leading-none" style={{ color: textColor, fontFamily: 'Space Grotesk' }}>
               VOZES
             </h2>
             <span className="text-lg font-medium opacity-80" style={{ color: textColor, fontFamily: 'Inter' }}>
               de Mãos Dadas
             </span>
          </div>
        );
      case 'artistic-serif':
        return (
          <div className="flex flex-col items-center">
             <span className="text-4xl font-serif italic mb-2" style={{ color: textColor }}>
               Vozes
             </span>
             <div className="flex items-center gap-2">
               <div className="w-6 h-[1px] bg-current opacity-30" style={{ color: textColor }} />
               <span className="text-[9px] font-bold tracking-[0.4em] uppercase" style={{ color: textColor }}>
                 Mãos Dadas
               </span>
               <div className="w-6 h-[1px] bg-current opacity-30" style={{ color: textColor }} />
             </div>
          </div>
        );
      case 'classic-stack':
      default:
        return (
          <div className="flex flex-col items-center">
            <span className="text-lg font-medium tracking-[0.4em] uppercase opacity-70 mb-1" style={{ color: textColor, fontFamily: 'Inter' }}>
              Coral
            </span>
            <h2 className="text-4xl font-black uppercase tracking-tighter leading-[0.8] mb-4" style={{ color: textColor, fontFamily: 'Space Grotesk' }}>
              Vozes de Mãos Dadas
            </h2>
            <div className="w-12 h-1 rounded-full" style={{ background: color === 'white' ? primaryColor : '#FF9E00' }} />
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
                  "Vozes que conectam corações"
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
