import React from 'react';
import { LogoAsset } from './LogoAsset';
import { motion } from 'framer-motion';
import { CheckCircle2, Globe, MapPin, Search } from 'lucide-react';

export interface BrochureProps {
  layout: 'triptico' | 'bifolio' | 'moderno' | 'comunitario' | 'minimalista';
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  brandName: string;
  fontFamily?: string;
  logoVariant: 'horizontal' | 'vertical' | 'symbol' | 'circle';
}

export function BrochureAsset({
  layout,
  primaryColor,
  secondaryColor,
  accentColor,
  brandName,
  fontFamily = 'Space Grotesk',
  logoVariant
}: BrochureProps) {
  const renderLayout = () => {
    switch (layout) {
      case 'triptico':
        return (
          <div className="w-full h-80 flex gap-1" style={{ perspective: '1000px' }}>
             {/* Left Panel */}
             <div
               className="flex-1 bg-white border border-navy-100 p-6 flex flex-col justify-between shadow-lg"
               style={{ transform: 'rotateY(5deg)', transformOrigin: 'right center' }}
             >
                <div className="space-y-4">
                   <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: secondaryColor }}>Quem Somos</h4>
                   <p className="text-[10px] text-navy-500 leading-relaxed">
                      Transformando realidades através do amor e da colaboração ativa em Goiânia.
                   </p>
                </div>
                <div className="space-y-2">
                   {[1, 2, 3].map(i => (
                     <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-success" />
                        <div className="h-1 rounded-full flex-1" style={{ background: `${primaryColor}30` }} />
                     </div>
                   ))}
                </div>
             </div>
             {/* Center Panel */}
             <div className="flex-1 bg-white border border-navy-100 p-6 flex flex-col items-center justify-center text-center shadow-md z-10">
                <div className="space-y-4">
                  <LogoAsset type="symbol" primaryColor={primaryColor} size={60} />
                  <h4 className="text-sm font-black uppercase leading-tight" style={{ color: primaryColor, fontFamily }}>Projetos que <br />Constroem</h4>
                  <div className="h-0.5 w-12 mx-auto" style={{ background: accentColor }} />
                </div>
             </div>
             {/* Right Panel (Cover) */}
             <div
               className="flex-1 p-6 flex flex-col justify-between shadow-xl relative overflow-hidden"
               style={{ background: primaryColor, transform: 'rotateY(-10deg)', transformOrigin: 'left center' }}
             >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <LogoAsset type="vertical" primaryColor="#FFFFFF" secondaryColor="rgba(255,255,255,0.6)" size={120} brandName={brandName} />
                <div className="space-y-2">
                   <p className="text-white font-bold text-[10px] uppercase tracking-[0.2em]">Edição Institucional</p>
                   <p className="text-white/50 text-[8px] font-medium uppercase tracking-widest">Goiânia · 2026</p>
                </div>
             </div>
          </div>
        );
      case 'moderno':
        return (
          <div className="w-full h-80 bg-white shadow-2xl rounded-sm overflow-hidden flex border border-navy-100">
             <div className="w-1/2 p-12 flex flex-col justify-between">
                <LogoAsset type="horizontal" primaryColor={primaryColor} size={150} />
                <div className="space-y-4">
                   <h1 className="text-4xl font-black italic tracking-tighter" style={{ color: primaryColor, fontFamily }}>MÃOS QUE <br />TRANSFORMAM.</h1>
                   <p className="text-sm text-navy-400 font-medium">Inovação social e transparência ativa para um futuro mais justo.</p>
                </div>
                <div className="flex gap-4">
                   <div className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ background: secondaryColor }}>
                      <Globe className="w-4 h-4" />
                   </div>
                   <div className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ background: primaryColor }}>
                      <MapPin className="w-4 h-4" />
                   </div>
                </div>
             </div>
             <div className="w-1/2 relative">
                <div className="absolute inset-0 bg-primary/10" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800')] bg-cover bg-center grayscale opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <LogoAsset type="circle" primaryColor={primaryColor} size={200} />
                </div>
             </div>
          </div>
        );
      case 'comunitario':
        return (
          <div className="w-full h-80 bg-white p-2 border-r-[40px] shadow-2xl" style={{ borderColor: secondaryColor }}>
             <div className="w-full h-full border-2 border-dashed p-8 flex flex-col justify-between" style={{ borderColor: secondaryColor }}>
                <div className="flex justify-between items-start">
                   <LogoAsset type="symbol" primaryColor={primaryColor} size={60} />
                   <div className="text-right">
                      <p className="text-[10px] font-black uppercase tracking-widest leading-none mb-1" style={{ color: secondaryColor }}>Agenda Aberta</p>
                      <p className="text-xs font-bold text-navy-900">Residencial JK</p>
                   </div>
                </div>
                <div className="space-y-4">
                   <h2 className="text-4xl font-black leading-none" style={{ color: primaryColor, fontFamily }}>NOSSA <br / ><span style={{ color: secondaryColor }}>COMUNIDADE.</span></h2>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-navy-50 rounded-xl">
                         <p className="text-[8px] font-bold text-navy-400 uppercase mb-1">Impacto 2025</p>
                         <p className="text-xl font-bold text-navy-900">+1.2k Famílias</p>
                      </div>
                      <div className="p-3 bg-navy-50 rounded-xl">
                         <p className="text-[8px] font-bold text-navy-400 uppercase mb-1">Voluntariado</p>
                         <p className="text-xl font-bold text-navy-900">85 Ativos</p>
                      </div>
                   </div>
                </div>
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest opacity-60">
                   <span>institutodemaosdadas.com.br</span>
                   <Search className="w-4 h-4" />
                </div>
             </div>
          </div>
        );
      case 'minimalista':
        return (
          <div className="w-full h-80 bg-navy-950 p-12 flex flex-col justify-between shadow-2xl border-l-[12px]" style={{ borderColor: accentColor }}>
             <LogoAsset type="horizontal" primaryColor="#FFFFFF" size={180} />
             <div className="space-y-6">
                <h1 className="text-5xl font-light text-white leading-tight">Um compromisso com a <span className="font-bold underline" style={{ textDecorationColor: accentColor }}>verdade</span>.</h1>
                <p className="text-white/40 text-sm max-w-sm">Conheça nossa governança e os princípios que guiam nossas ações sociais.</p>
             </div>
             <div className="flex gap-6">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-3 h-3 rounded-full bg-white/10" />
                ))}
             </div>
          </div>
        );
      case 'bifolio':
      default:
        return (
          <div className="w-full h-80 flex gap-1">
             <div className="flex-1 bg-white border border-navy-100 p-8 flex flex-col justify-end shadow-lg" style={{ borderRightWidth: '4px', borderRightColor: primaryColor }}>
                <p className="text-navy-900 font-bold text-lg mb-4">"Mãos dadas que carregam esperança e dignidade."</p>
                <div className="space-y-2">
                   <div className="h-1 w-full bg-navy-50" />
                   <div className="h-1 w-2/3 bg-navy-50" />
                </div>
             </div>
             <div className="flex-1 bg-white p-8 flex flex-col items-center justify-between text-center relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-2" style={{ background: primaryColor }} />
                <LogoAsset type="vertical" primaryColor={primaryColor} secondaryColor={secondaryColor} size={150} brandName={brandName} />
                <div className="space-y-4">
                  <p className="text-[10px] font-bold text-navy-400 uppercase tracking-[0.3em]">Portfólio de Impacto</p>
                  <div className="flex justify-center gap-2">
                     <div className="w-6 h-6 rounded-lg" style={{ background: primaryColor }} />
                     <div className="w-6 h-6 rounded-lg" style={{ background: secondaryColor }} />
                     <div className="w-6 h-6 rounded-lg" style={{ background: accentColor }} />
                  </div>
                </div>
             </div>
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
