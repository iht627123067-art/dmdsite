import React from 'react';
import { LogoAsset } from './LogoAsset';
import { Award, ShieldCheck } from 'lucide-react';

export interface CertificateProps {
  layout: 'institucional' | 'moderno' | 'minimalista' | 'luxo' | 'vibrante';
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  studentName: string;
  courseTitle: string;
  date: string;
  logoVariant: 'horizontal' | 'vertical' | 'symbol' | 'circle';
  fontFamily?: string;
}

export function CertificateAsset({
  layout,
  primaryColor,
  secondaryColor,
  accentColor,
  studentName = 'NOME DO PARTICIPANTE',
  courseTitle = 'CURSO DE CAPACITAÇÃO SOCIAL',
  date = '12 de Abril, 2026',
  fontFamily = 'Space Grotesk'
}: CertificateProps) {
  const renderLayout = () => {
    switch (layout) {
      case 'luxo':
        return (
          <div className="w-full aspect-[1.414/1] bg-white p-2 border-[12px] shadow-2xl relative" style={{ borderColor: primaryColor }}>
             <div className="w-full h-full border-2 p-12 flex flex-col items-center justify-between" style={{ borderColor: accentColor }}>
                <div className="absolute top-8 left-8">
                   <LogoAsset type="circle" primaryColor={primaryColor} secondaryColor={secondaryColor} size={80} />
                </div>
                <div className="text-center space-y-4">
                   <div className="flex justify-center mb-6">
                      <Award className="w-16 h-16" style={{ color: accentColor }} />
                   </div>
                   <h1 className="text-4xl font-black uppercase tracking-[0.2em] mb-2 leading-tight" style={{ color: primaryColor, fontFamily }}>Certificado</h1>
                   <p className="text-navy-400 text-sm italic">O Instituto De Mãos Dadas confere o presente título a:</p>
                </div>
                
                <div className="text-center w-full">
                   <h2 className="text-3xl font-bold border-b-2 inline-block px-12 pb-2 leading-tight" style={{ color: primaryColor, borderColor: accentColor }}>{studentName}</h2>
                   <p className="mt-8 text-navy-600 text-md max-w-lg mx-auto leading-relaxed">
                      Pela conclusão exitosa do módulo <strong>{courseTitle}</strong>, realizado com excelência técnica e impacto comunitário.
                   </p>
                </div>

                <div className="w-full flex justify-between items-end px-10">
                   <div className="text-center border-t border-navy-200 pt-2 w-48">
                      <p className="text-[10px] font-bold text-navy-400 uppercase tracking-widest">Diretoria Executiva</p>
                   </div>
                   <div className="pb-4">
                      <ShieldCheck className="w-12 h-12 opacity-10" style={{ color: primaryColor }} />
                   </div>
                   <div className="text-center border-t border-navy-200 pt-2 w-48">
                      <p className="text-[10px] font-bold text-navy-400 uppercase tracking-widest">{date}</p>
                   </div>
                </div>
             </div>
          </div>
        );
      case 'moderno':
        return (
          <div className="w-full aspect-[1.414/1] bg-navy-950 p-1 flex relative overflow-hidden shadow-2xl rounded-sm">
             <div className="absolute right-0 top-0 w-1/3 h-full overflow-hidden">
                <div className="w-full h-full opacity-10 bg-white rotate-12 scale-150" style={{ background: secondaryColor }} />
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                   <LogoAsset type="circle" primaryColor="#FFFFFF" secondaryColor="#FFFFFF" size={300} />
                </div>
             </div>
             <div className="flex-1 bg-white m-3 p-12 flex flex-col justify-between relative z-10">
                <LogoAsset type="horizontal" primaryColor={primaryColor} size={150} />
                <div className="space-y-6">
                   <div className="inline-block px-4 py-1 bg-primary/10 text-primary font-bold text-xs rounded-full uppercase tracking-widest">
                      Certificado de Mérito
                   </div>
                   <h2 className="text-4xl font-black text-navy-900 leading-snug" style={{ fontFamily }}>{studentName}</h2>
                   <p className="text-navy-500 text-lg max-w-md">
                      Participou ativamente do programa nacional <span className="text-primary font-bold">{courseTitle}</span>.
                   </p>
                </div>
                <div className="flex items-center gap-12">
                   <div>
                      <p className="text-[8px] font-bold text-navy-300 uppercase tracking-widest mb-1">Data de Emissão</p>
                      <p className="text-xs font-bold text-navy-900">{date}</p>
                   </div>
                   <div className="h-10 w-px bg-navy-100" />
                   <div>
                      <p className="text-[8px] font-bold text-navy-300 uppercase tracking-widest mb-1">Código de Autenticidade</p>
                      <p className="text-xs font-mono text-navy-900">DMD-2026-X89Y</p>
                   </div>
                </div>
             </div>
          </div>
        );
      case 'vibrante':
        return (
          <div className="w-full aspect-[1.414/1] bg-white p-12 flex flex-col items-center justify-center text-center relative shadow-2xl border-b-[24px]" style={{ borderColor: secondaryColor }}>
             <div className="absolute left-0 top-0 w-full h-4" style={{ background: primaryColor }} />
             <div className="mb-10">
                <LogoAsset type="symbol" primaryColor={primaryColor} secondaryColor={secondaryColor} size={80} />
             </div>
             <h1 className="text-5xl font-black uppercase tracking-tighter mb-4 leading-tight" style={{ color: primaryColor, fontFamily }}>VOCÊ CONCLUIU!</h1>
             <p className="text-xl text-navy-400 mb-8">Certificamos que <strong>{studentName}</strong> brilhou no:</p>
             <div className="bg-secondary/10 px-10 py-6 rounded-[2rem] border-2 border-secondary/20 mb-10">
                <h3 className="text-2xl font-bold text-secondary leading-tight">{courseTitle}</h3>
             </div>
             <p className="text-sm font-medium text-navy-400 tracking-widest uppercase mb-12">{date} · GOIÂNIA</p>
             <div className="w-full h-px bg-navy-100 mb-8" />
             <div className="flex justify-center gap-20">
                <div className="w-1/3 flex flex-col items-center">
                   <div className="h-10 w-full border-b border-navy-200" />
                   <p className="text-[8px] font-bold text-navy-300 mt-2 uppercase">Assinatura Coordenador</p>
                </div>
                <div className="w-1/3 flex flex-col items-center">
                   <div className="h-10 w-full border-b border-navy-200" />
                   <p className="text-[8px] font-bold text-navy-300 mt-2 uppercase">Assinatura Diretor</p>
                </div>
             </div>
          </div>
        );
      case 'minimalista':
      case 'institucional':
      default:
        return (
          <div className="w-full aspect-[1.414/1] bg-white p-16 flex flex-col justify-between shadow-2xl border border-navy-100 relative">
             <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
                <LogoAsset type="symbol" primaryColor={primaryColor} size={300} />
             </div>
             <div className="flex justify-between items-start">
                <LogoAsset type="vertical" primaryColor={primaryColor} secondaryColor={secondaryColor} size={150} />
                <div className="text-right">
                   <p className="text-[10px] font-bold text-navy-300 uppercase tracking-[0.3em]">Certificação Oficial</p>
                   <p className="text-sm font-bold text-navy-900 mt-1">{date}</p>
                </div>
             </div>
             <div className="space-y-4">
                <h1 className="text-5xl font-light text-navy-900 leading-tight" style={{ fontFamily }}>Certificado de <span className="font-bold">Participação</span></h1>
                <p className="text-xl text-navy-500 max-w-xl">
                   Atestamos para os devidos fins que <strong>{studentName}</strong> concluiu com êxito o programa de formação em <strong>{courseTitle}</strong>.
                </p>
             </div>
             <div className="flex gap-20 items-end">
                <div className="w-40 h-px bg-navy-900" />
                <ShieldCheck className="w-8 h-8 opacity-20" />
             </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-transparent w-full">
        <div className="w-full max-w-4xl animate-in fade-in slide-in-from-bottom-5 duration-1000">
           {renderLayout()}
        </div>
    </div>
  );
}
