import React, { useState } from 'react';
import { LogoAsset } from './LogoAsset';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, BarChart, Users, Target, Rocket } from 'lucide-react';

export interface SlideProps {
  layout: 'pitch' | 'minimal' | 'institucional' | 'data' | 'creative';
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  brandName: string;
  fontFamily?: string;
  logoVariant: 'horizontal' | 'vertical' | 'symbol' | 'circle';
}

export function SlideAsset({
  layout,
  primaryColor,
  secondaryColor,
  accentColor,
  brandName,
  fontFamily = 'Space Grotesk',
  logoVariant
}: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const renderSlideContent = () => {
    switch (currentSlide) {
      case 0: // Title Slide
        return (
          <div className="h-full w-full flex flex-col items-center justify-center p-12 text-center space-y-8 relative overflow-hidden">
             {layout === 'pitch' && <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-10" />}
             <LogoAsset type="symbol" primaryColor={primaryColor} size={60} />
             <div className="space-y-4 relative z-10">
                <h1 className="text-5xl font-black uppercase tracking-tighter leading-none" style={{ color: primaryColor, fontFamily }}>
                  {layout === 'pitch' ? 'Impactando o Futuro' : 'Apresentação Institucional'}
                </h1>
                <p className="text-xl font-medium text-navy-400 uppercase tracking-widest">{brandName}</p>
             </div>
             <div className="h-1 w-24 bg-accent" />
             <p className="text-xs text-navy-300 font-bold uppercase tracking-[0.3em]">Pitch Deck · 2026</p>
          </div>
        );
      case 1: // Content / Solution
        return (
          <div className="h-full w-full p-12 flex flex-col justify-between">
             <div className="flex justify-between items-center border-b pb-4">
                <h2 className="text-2xl font-bold text-navy-900" style={{ fontFamily }}>Nossa Proposta de Valor</h2>
                <LogoAsset type="horizontal" primaryColor={primaryColor} size={100} />
             </div>
             <div className="grid grid-cols-2 gap-12 py-8">
                <div className="space-y-4">
                   <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Target className="w-5 h-5" />
                   </div>
                   <h3 className="text-lg font-bold text-navy-900">Objetivo Estratégico</h3>
                   <p className="text-sm text-navy-500 leading-relaxed">Fomentar o empreendedorismo local através de formação técnica e microcrédito social.</p>
                </div>
                <div className="space-y-4">
                   <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                      <Rocket className="w-5 h-5" />
                   </div>
                   <h3 className="text-lg font-bold text-navy-900">Escalabilidade</h3>
                   <p className="text-sm text-navy-500 leading-relaxed">Modelo replicável para comunidades em situação de vulnerabilidade em todo o país.</p>
                </div>
             </div>
             <div className="text-[10px] text-navy-300 font-bold uppercase tracking-widest border-t pt-4">Propriedade Intelectual · {brandName}</div>
          </div>
        );
      case 2: // Data / Vision
        return (
          <div className="h-full w-full p-12 bg-navy-950 text-white flex flex-col justify-center">
             <div className="flex gap-12 items-center">
                <div className="w-1/2 space-y-8">
                   <h2 className="text-4xl font-bold leading-tight" style={{ fontFamily }}>Visão de <br /><span style={{ color: accentColor }}>Crescimento</span></h2>
                   <div className="space-y-4">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-accent">
                            <BarChart className="w-6 h-6" />
                         </div>
                         <p className="text-sm">Previsão de 40% de aumento no impacto direto.</p>
                      </div>
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-accent">
                            <Users className="w-6 h-6" />
                         </div>
                         <p className="text-sm">Rede de 500+ parceiros estratégicos até 2027.</p>
                      </div>
                   </div>
                </div>
                <div className="flex-1 bg-white/5 rounded-3xl p-10 border border-white/10 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-20 h-20 bg-accent/20 blur-3xl rounded-full" />
                   <div className="space-y-6">
                      <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Meta de Captação</p>
                      <p className="text-5xl font-black text-white">R$ 1.5M</p>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                         <div className="h-full bg-accent w-3/4" />
                      </div>
                      <p className="text-xs text-white/70 italic">Fase de aceleração comunitária.</p>
                   </div>
                </div>
             </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-transparent w-full">
        <div className="w-full max-w-4xl relative group">
           {/* Slide Canvas */}
           <div className="w-full aspect-video bg-white shadow-2xl rounded-sm overflow-hidden border border-navy-100 cursor-pointer" onClick={nextSlide}>
              <AnimatePresence mode="wait">
                 <motion.div 
                   key={currentSlide}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   transition={{ duration: 0.4 }}
                   className="h-full w-full"
                 >
                    {renderSlideContent()}
                 </motion.div>
              </AnimatePresence>
           </div>

           {/* Controls */}
           <div className="absolute inset-x-0 bottom-4 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={(e) => { e.stopPropagation(); prevSlide(); }} 
                className="w-10 h-10 rounded-full bg-navy-900/80 text-white backdrop-blur-md flex items-center justify-center hover:bg-navy-900"
              >
                 <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 px-4 bg-navy-900/80 rounded-full text-white text-[10px] font-bold">
                 {currentSlide + 1} / {totalSlides}
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); nextSlide(); }} 
                className="w-10 h-10 rounded-full bg-navy-900/80 text-white backdrop-blur-md flex items-center justify-center hover:bg-navy-900"
              >
                 <ChevronRight className="w-5 h-5" />
              </button>
           </div>
        </div>
        <p className="mt-4 text-[10px] text-navy-400 font-bold uppercase tracking-widest italic flex items-center gap-2">
           <Rocket className="w-3 h-3" /> Clique no slide para avançar
        </p>
    </div>
  );
}
