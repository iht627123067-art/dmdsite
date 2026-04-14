import React from 'react';
import { LogoAsset } from './LogoAsset';
import { ArrowRight, Sparkles } from 'lucide-react';

export interface WebBannerProps {
  layout: 'hero' | 'promotion' | 'event' | 'minimal' | 'sidebar';
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  title: string;
  subtitle: string;
  ctaText: string;
  logoVariant: 'horizontal' | 'vertical' | 'symbol' | 'circle';
  fontFamily?: string;
}

export function WebBannerAsset({
  layout,
  primaryColor,
  secondaryColor,
  accentColor,
  title,
  subtitle,
  ctaText,
  logoVariant,
  fontFamily = 'Space Grotesk'
}: WebBannerProps) {
  const renderLayout = () => {
    switch (layout) {
      case 'hero':
        return (
          <div 
            className="w-full h-48 rounded-2xl p-8 flex items-center justify-between relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
          >
             <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-10" />
             <div className="relative z-10 space-y-3 max-w-sm">
                <LogoAsset type="symbol" primaryColor="#FFFFFF" secondaryColor="rgba(255,255,255,0.6)" size={40} />
                <h3 className="text-2xl font-bold text-white leading-tight uppercase tracking-tight" style={{ fontFamily }}>{title}</h3>
                <p className="text-white/70 text-xs font-medium">{subtitle}</p>
                <div 
                  className="mt-6 px-6 py-2 rounded-full w-fit flex items-center gap-2 text-navy-900 font-bold text-[10px] uppercase tracking-widest shadow-lg"
                  style={{ background: accentColor }}
                >
                  {ctaText} <ArrowRight className="w-3 h-3" />
                </div>
             </div>
             <div className="relative z-10 hidden md:block opacity-20 rotate-12 scale-150">
                <LogoAsset type="circle" primaryColor="#FFFFFF" secondaryColor="#FFFFFF" size={150} />
             </div>
          </div>
        );
      case 'promotion':
        return (
          <div 
            className="w-full h-48 rounded-2xl flex border-4 overflow-hidden shadow-xl"
            style={{ borderColor: primaryColor }}
          >
             <div className="w-1/3 flex items-center justify-center bg-white border-r-4" style={{ borderColor: primaryColor }}>
                <LogoAsset type={logoVariant} primaryColor={primaryColor} secondaryColor={secondaryColor} size={150} />
             </div>
             <div className="flex-1 bg-navy-50/50 p-8 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[8px] font-bold uppercase tracking-widest mb-4">
                   <Sparkles className="w-3 h-3" />
                   Oportunidade
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2 truncate" style={{ fontFamily }}>{title}</h3>
                <p className="text-navy-500 text-xs mb-4 line-clamp-1">{subtitle}</p>
                <button 
                  className="w-fit px-8 py-2 text-white font-bold text-[10px] uppercase tracking-widest rounded-lg shadow-md hover:scale-105 transition-all"
                  style={{ background: primaryColor }}
                >
                  {ctaText}
                </button>
             </div>
          </div>
        );
      case 'event':
        return (
          <div className="w-full h-48 rounded-2xl flex flex-col items-center justify-center text-center p-8 bg-white border-2 border-dashed relative group overflow-hidden" style={{ borderColor: secondaryColor }}>
             <div className="absolute inset-0 bg-navy-50/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
             <div className="relative z-10 space-y-4">
                <LogoAsset type="symbol" primaryColor={primaryColor} size={50} />
                <div>
                   <h3 className="text-xl font-bold text-navy-900" style={{ fontFamily }}>{title}</h3>
                   <div className="flex items-center justify-center gap-4 mt-1">
                      <span className="h-0.5 w-8" style={{ background: accentColor }} />
                      <p className="text-secondary font-bold text-[10px] uppercase tracking-[0.2em]">{subtitle}</p>
                      <span className="h-0.5 w-8" style={{ background: accentColor }} />
                   </div>
                </div>
                <p className="text-accent font-black text-xs uppercase tracking-widest cursor-pointer hover:underline">
                  {ctaText} →
                </p>
             </div>
          </div>
        );
      case 'minimal':
        return (
          <div className="w-full h-16 rounded-full px-8 bg-white shadow-sm border border-navy-100 flex items-center justify-between">
             <LogoAsset type="horizontal" primaryColor={primaryColor} size={100} />
             <div className="flex items-center gap-6">
                <p className="text-navy-400 text-[10px] font-bold uppercase tracking-wider hidden md:block">{title}</p>
                <div 
                  className="px-6 py-1.5 rounded-full text-white font-bold text-[10px] uppercase tracking-widest shadow-md"
                  style={{ background: primaryColor }}
                >
                  {ctaText}
                </div>
             </div>
          </div>
        );
      case 'sidebar':
      default:
        return (
          <div 
            className="w-48 h-80 rounded-2xl p-6 flex flex-col items-center justify-between text-center relative overflow-hidden"
            style={{ background: `linear-gradient(to bottom, ${primaryColor}, ${secondaryColor})` }}
          >
             <div className="w-20 h-20 rounded-full bg-white/10 absolute -top-10 -right-10 blur-xl" />
             <LogoAsset type="vertical" primaryColor="#FFFFFF" secondaryColor="rgba(255,255,255,0.7)" size={100} />
             <div className="space-y-4 py-4">
                <h3 className="text-lg font-bold text-white leading-tight uppercase" style={{ fontFamily }}>{title}</h3>
                <p className="text-white/60 text-[10px]">{subtitle}</p>
             </div>
             <button 
                className="w-full py-2 rounded-xl text-navy-900 font-bold text-[10px] uppercase tracking-widest shadow-xl"
                style={{ background: accentColor }}
             >
               {ctaText}
             </button>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-transparent w-full">
        <div className="w-full animate-in fade-in slide-in-from-bottom-5 duration-700">
           {renderLayout()}
        </div>
    </div>
  );
}
