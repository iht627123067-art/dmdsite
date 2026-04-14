import React, { useState } from 'react';
import { LogoAsset } from './LogoAsset';
import { motion } from 'framer-motion';
import { QrCode, Phone, Mail, Globe, RefreshCw, Heart } from 'lucide-react';
import { ShapeStyle, shapeRadius } from '@/contexts/BrandContext';

export interface BusinessCardProps {
  layout: 'classic' | 'bold' | 'minimal' | 'creative' | 'social';
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  name: string;
  role: string;
  logoVariant?: 'horizontal' | 'vertical' | 'symbol' | 'circle';
  fontFamily?: string;
  shapeStyle?: ShapeStyle;
}

export function BusinessCardAsset({
  layout,
  primaryColor,
  secondaryColor,
  accentColor,
  name,
  role,
  logoVariant = 'symbol',
  fontFamily = 'Space Grotesk',
  shapeStyle
}: BusinessCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const r = shapeRadius(shapeStyle);

  // Tipo de logo padrão por layout
  const defaultLogoType: 'horizontal' | 'vertical' | 'symbol' | 'circle' = (() => {
    if (layout === 'minimal') return 'horizontal';
    if (layout === 'creative') return 'vertical';
    if (layout === 'social') return 'circle';
    return logoVariant;
  })();

  const renderFront = () => {
    switch (layout) {
      /* ── 02 · IMPACTO DE COR ── */
      case 'bold':
        return (
          <div className="h-full w-full p-8 flex flex-col justify-between relative overflow-hidden"
            style={{ background: primaryColor }}>
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-[0.07] bg-white -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-[0.05] bg-white translate-y-1/2 -translate-x-1/4" />
            <LogoAsset
              type="symbol"
              primaryColor="#FFFFFF"
              secondaryColor="rgba(255,255,255,0.5)"
              size={40}
            />
            <div>
              <div className="w-8 h-0.5 mb-3" style={{ background: accentColor }} />
              <h4 className="text-white font-bold text-xl leading-tight" style={{ fontFamily }}>{name}</h4>
              <p className="text-white/60 text-[10px] uppercase tracking-widest font-medium mt-1">{role}</p>
            </div>
          </div>
        );

      /* ── 03 · MINIMALISMO BRANCO ── */
      case 'minimal':
        return (
          <div className="h-full w-full flex flex-col justify-between bg-white border border-navy-100">
            {/* Linha de cor no topo */}
            <div className="h-1 w-full" style={{ background: primaryColor }} />
            <div className="flex-1 flex items-center justify-center px-8">
              <LogoAsset
                type="horizontal"
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                fontFamily={fontFamily}
                size={190}
              />
            </div>
            <div className="px-8 py-4 flex items-end justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest" style={{ color: primaryColor }}>{name}</p>
                <p className="text-[8px] text-navy-400 uppercase tracking-widest">{role}</p>
              </div>
              <div className="w-1.5 h-8 rounded-full" style={{ background: accentColor }} />
            </div>
          </div>
        );

      /* ── 04 · VANGUARDA CRIATIVA ── */
      case 'creative':
        return (
          <div className="h-full w-full p-7 flex flex-col justify-between bg-white overflow-hidden relative border border-navy-100">
            {/* Faixa vertical lateral */}
            <div className="absolute right-0 top-0 bottom-0 w-2.5" style={{ background: secondaryColor }} />
            {/* Detalhe diagonal */}
            <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: `${accentColor}60` }} />
            <div className="flex items-start gap-4">
              <LogoAsset
                type="vertical"
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                fontFamily={fontFamily}
                size={90}
              />
            </div>
            <div>
              <div className="w-5 h-0.5 mb-2" style={{ background: accentColor }} />
              <h4 className="text-navy-900 font-bold text-lg leading-tight" style={{ fontFamily }}>{name}</h4>
              <p className="font-bold text-[9px] uppercase tracking-[0.2em] mt-0.5" style={{ color: secondaryColor }}>{role}</p>
            </div>
          </div>
        );

      /* ── 05 · FOCO SOCIAL (QR) ── */
      case 'social':
        return (
          <div className="h-full w-full flex flex-col overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)` }}>
            <div className="flex-1 flex flex-col items-center justify-center p-6 gap-4">
              <LogoAsset
                type="circle"
                primaryColor="#FFFFFF"
                secondaryColor="rgba(255,255,255,0.6)"
                fontFamily={fontFamily}
                brandName="De Mãos Dadas"
                size={110}
              />
              <div className="text-center">
                <h4 className="text-white font-bold text-base leading-tight" style={{ fontFamily }}>{name}</h4>
                <p className="text-white/60 text-[9px] uppercase tracking-widest mt-0.5">{role}</p>
              </div>
            </div>
            <div className="px-6 py-2.5 flex items-center justify-between"
              style={{ background: 'rgba(0,0,0,0.2)' }}>
              <div className="flex items-center gap-1.5">
                <Heart className="w-3 h-3" style={{ color: accentColor }} />
                <span className="text-[8px] text-white/60 uppercase tracking-widest font-bold">Apoie</span>
              </div>
              <span className="text-[8px] text-white/60 uppercase tracking-widest font-bold">institutodmd.org.br</span>
            </div>
          </div>
        );

      /* ── 01 · EXECUTIVO CLÁSSICO (default) ── */
      default:
        return (
          <div className="h-full w-full bg-white border border-navy-100 relative overflow-hidden">
            {/* Faixa de cor no topo */}
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: primaryColor }} />
            <div className="h-full flex items-center gap-5 px-7">
              <div className="flex-shrink-0">
                <LogoAsset
                  type={defaultLogoType}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                  fontFamily={fontFamily}
                  size={44}
                />
              </div>
              <div className="w-px h-14 bg-navy-100" />
              <div>
                <h4 className="text-navy-900 font-bold text-lg leading-tight" style={{ fontFamily }}>{name}</h4>
                <p className="text-navy-400 text-[10px] uppercase tracking-widest font-medium mt-0.5">{role}</p>
                <p className="text-[9px] mt-2 font-medium" style={{ color: primaryColor }}>institutodmd.org.br</p>
              </div>
            </div>
          </div>
        );
    }
  };

  const renderBack = () => {
    return (
      <div className="h-full w-full flex flex-col justify-between bg-white border border-navy-100 relative overflow-hidden">
        {/* Faixa decorativa */}
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${primaryColor}, ${accentColor})` }} />

        <div className="flex justify-between items-start pt-6 px-7">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-[9px] text-navy-500">
              <Phone className="w-3 h-3 flex-shrink-0" style={{ color: secondaryColor }} />
              <span>(62) 98888-7777</span>
            </div>
            <div className="flex items-center gap-2 text-[9px] text-navy-500">
              <Mail className="w-3 h-3 flex-shrink-0" style={{ color: secondaryColor }} />
              <span>{name.toLowerCase().replace(/\s+/g, '.')}@institutodmd.org</span>
            </div>
            <div className="flex items-center gap-2 text-[9px] text-navy-500">
              <Globe className="w-3 h-3 flex-shrink-0" style={{ color: secondaryColor }} />
              <span>institutodmd.org.br</span>
            </div>
          </div>

          <div className="p-2 border-2 flex-shrink-0" style={{ borderColor: accentColor, borderRadius: r.inner }}>
            <QrCode className="w-12 h-12" style={{ color: primaryColor }} />
          </div>
        </div>

        <div className="px-7 pb-5 space-y-2">
          <div className="h-px w-full" style={{ background: `${primaryColor}15` }} />
          <p className="text-[10px] font-bold text-navy-900 uppercase tracking-widest leading-none">Aponte para apoiar</p>
          <p className="text-[8px] text-navy-400 italic">Doações via PIX/Site · Residencial JK · Goiânia</p>
          <div className="h-1.5 w-full bg-navy-50 rounded-full overflow-hidden">
            <div className="h-full w-1/3 rounded-full" style={{ background: accentColor }} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-transparent w-full h-full">
      <div
        className="w-full max-w-[420px] aspect-[1.75/1] relative cursor-pointer perspective-1000 group"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          className="w-full h-full relative preserve-3d"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        >
          {/* Frente */}
          <div className="absolute inset-0 backface-hidden shadow-xl overflow-hidden" style={{ borderRadius: r.card }}>
            {renderFront()}
          </div>

          {/* Verso */}
          <div className="absolute inset-0 backface-hidden shadow-xl overflow-hidden rotate-y-180" style={{ borderRadius: r.card }}>
            {renderBack()}
          </div>
        </motion.div>

        {/* Indicador de flip */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <RefreshCw className="w-4 h-4 text-navy-300" />
          <span className="text-[10px] text-navy-400 font-bold uppercase tracking-widest">Clique para virar</span>
        </div>
      </div>
    </div>
  );
}
