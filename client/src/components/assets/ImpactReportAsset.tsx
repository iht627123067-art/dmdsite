import React from 'react';
import { LogoAsset } from './LogoAsset';
import { BarChart3, PieChart, TrendingUp, Users, Heart, ClipboardCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export interface ImpactReportProps {
  layout: 'transparencia' | 'humano' | 'dashboard' | 'minimalista' | 'celebracao';
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  year?: string;
  impactMetrics?: { label: string; value: string; icon: React.ElementType }[];
  fontFamily?: string;
}

export function ImpactReportAsset({
  layout,
  primaryColor,
  secondaryColor,
  accentColor,
  year = '2025',
  impactMetrics = [
    { label: 'Famílias Atendidas', value: '1.240', icon: Users },
    { label: 'Investimento Social', value: 'R$ 450k', icon: TrendingUp },
    { label: 'Voluntários Ativos', value: '85', icon: Heart }
  ],
  fontFamily = 'Space Grotesk'
}: ImpactReportProps) {
  const renderLayout = () => {
    switch (layout) {
      case 'dashboard':
        return (
          <div className="w-full bg-white shadow-2xl rounded-sm overflow-hidden border border-navy-100 flex flex-col h-[500px]">
             <div className="bg-navy-950 p-6 flex items-center justify-between">
                <LogoAsset type="horizontal" primaryColor="#FFFFFF" size={100} />
                <div className="text-right">
                   <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Relatório de Impacto</p>
                   <p className="text-xl font-bold text-accent">{year}</p>
                </div>
             </div>
             <div className="flex-1 p-8 grid grid-cols-3 gap-6">
                {impactMetrics.map((m, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 rounded-2xl bg-navy-50 border border-navy-100 flex flex-col items-center text-center justify-center space-y-2"
                  >
                     <m.icon className="w-6 h-6 text-primary" />
                     <div>
                        <p className="text-2xl font-black text-navy-900 leading-none">{m.value}</p>
                        <p className="text-[8px] font-bold text-navy-400 uppercase tracking-widest mt-1">{m.label}</p>
                     </div>
                  </motion.div>
                ))}
                <div className="col-span-2 bg-white rounded-2xl border border-navy-100 p-6 flex flex-col justify-between">
                   <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-navy-900 text-sm">Crescimento de Alcance</h4>
                      <BarChart3 className="w-4 h-4 text-primary" />
                   </div>
                   <div className="flex items-end gap-2 h-32 pt-4">
                      {[40, 65, 45, 90, 75, 100].map((h, i) => (
                        <div key={i} className="flex-1 bg-primary/10 rounded-t-lg relative group">
                           <motion.div 
                             initial={{ height: 0 }}
                             animate={{ height: `${h}%` }}
                             className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg"
                           />
                        </div>
                      ))}
                   </div>
                </div>
                <div className="bg-secondary p-6 rounded-2xl text-white flex flex-col justify-center items-center text-center">
                   <PieChart className="w-10 h-10 mb-4 opacity-50" />
                   <p className="text-sm font-bold leading-tight">Distribuição de Recursos</p>
                   <p className="text-[10px] mt-2 opacity-80">85% Direto na Ponta</p>
                </div>
             </div>
             <div className="p-4 bg-navy-50 border-t border-navy-100 flex justify-between items-center px-8">
                <span className="text-[9px] font-bold text-navy-300 uppercase italic">Dados auditados · Instituto De Mãos Dadas</span>
                <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full" style={{ background: primaryColor }} />
                   <div className="w-2 h-2 rounded-full" style={{ background: secondaryColor }} />
                </div>
             </div>
          </div>
        );
      case 'humano':
        return (
          <div className="w-full bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col h-[500px]">
             <div className="relative h-2/5 overflow-hidden">
                <div className="absolute inset-0 bg-navy-900/40 z-10" />
                <div className="absolute inset-0 grayscale opacity-40 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800')] bg-cover bg-center" />
                <div className="absolute inset-x-8 top-8 z-20 flex justify-between items-start">
                   <LogoAsset type="symbol" primaryColor="#FFFFFF" size={40} />
                   <span className="text-white font-bold text-4xl opacity-20">{year}</span>
                </div>
                <div className="absolute inset-x-8 bottom-8 z-20">
                   <h2 className="text-3xl font-black text-white uppercase leading-none" style={{ fontFamily }}>Nossas <br /><span style={{ color: accentColor }}>Histórias</span></h2>
                </div>
             </div>
             <div className="flex-1 p-10 flex gap-8">
                <div className="flex-1 space-y-6">
                   <p className="text-navy-900 font-bold text-xl leading-snug">"O impacto não é medido em números, mas em vidas transformadas."</p>
                   <div className="space-y-4">
                      <div className="flex gap-4 items-start">
                         <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0 text-navy-900">
                            <Users className="w-5 h-5" />
                         </div>
                         <div>
                            <p className="text-sm font-bold text-navy-900">Protagonismo Comunitário</p>
                            <p className="text-xs text-navy-400">Atuamos em parceria com líderes locais em Goiânia.</p>
                         </div>
                      </div>
                      <div className="flex gap-4 items-start">
                         <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                            <ClipboardCheck className="w-5 h-5" />
                         </div>
                         <div>
                            <p className="text-sm font-bold text-navy-900">Transparência Ativa</p>
                            <p className="text-xs text-navy-400">Relatórios mensais abertos para todos os doadores.</p>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="w-px bg-navy-100" />
                <div className="w-1/3 flex flex-col justify-end text-right space-y-2">
                   <p className="text-4xl font-black text-primary leading-none">1.2k</p>
                   <p className="text-[10px] font-bold text-navy-300 uppercase tracking-widest">Famílias Impactadas</p>
                   <div className="h-2 w-full bg-navy-50 rounded-full overflow-hidden mt-4">
                      <div className="h-full bg-primary w-2/3" />
                   </div>
                </div>
             </div>
          </div>
        );
      case 'minimalista':
        return (
          <div className="w-full bg-white shadow-2xl rounded-sm p-16 flex flex-col justify-between h-[500px] border-t-8" style={{ borderColor: primaryColor }}>
             <LogoAsset type="horizontal" primaryColor={primaryColor} size={200} />
             <div className="space-y-4">
                <h1 className="text-6xl font-black tracking-tighter" style={{ fontFamily, color: primaryColor }}>PRESTAÇÃO <br />DE CONTAS.</h1>
                <div className="h-1 w-24" style={{ background: accentColor }} />
                <p className="text-lg text-navy-400 uppercase tracking-widest font-medium">Ciclo de Impacto {year}</p>
             </div>
             <div className="flex justify-between items-end">
                <div className="text-left">
                   <p className="text-[10px] text-navy-300 font-bold uppercase tracking-widest">Responsabilidade Corporativa</p>
                   <p className="text-sm font-bold text-navy-900 italic">Instituto De Mãos Dadas</p>
                </div>
                <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center border-navy-100">
                   <TrendingUp className="w-6 h-6 text-primary" />
                </div>
             </div>
          </div>
        );
      case 'transparencia':
      default:
        return (
          <div className="w-full bg-white shadow-2xl rounded-sm border-2 overflow-hidden h-[500px]" style={{ borderColor: primaryColor }}>
             <div className="p-10 border-b-2" style={{ borderColor: primaryColor }}>
                <div className="flex justify-between items-center">
                   <LogoAsset type="vertical" primaryColor={primaryColor} size={150} />
                   <div className="bg-navy-900 text-white px-6 py-2 text-sm font-bold uppercase tracking-widest rounded-sm">Confidencial / Doadores</div>
                </div>
             </div>
             <div className="p-12 space-y-12">
                <div className="space-y-2">
                   <p className="text-xs font-bold text-primary uppercase tracking-widest">Relatório Anual de Atividades</p>
                   <h2 className="text-4xl font-bold text-navy-900 leading-tight">Onde cada real foi <span className="underline decoration-accent">investido</span>.</h2>
                </div>
                <div className="grid grid-cols-2 gap-12">
                   <div className="space-y-4">
                      <div className="flex justify-between border-b pb-2">
                         <span className="text-xs font-medium text-navy-500">Educação e Cultura</span>
                         <span className="text-xs font-bold text-navy-900">42%</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                         <span className="text-xs font-medium text-navy-500">Desenvolvimento Local</span>
                         <span className="text-xs font-bold text-navy-900">28%</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                         <span className="text-xs font-medium text-navy-500">Saúde Comunitária</span>
                         <span className="text-xs font-bold text-navy-900">15%</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                         <span className="text-xs font-medium text-navy-500">Operacional</span>
                         <span className="text-xs font-bold text-navy-900">15%</span>
                      </div>
                   </div>
                   <div className="bg-navy-50 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                      <p className="text-4xl font-black text-navy-900">92%</p>
                      <p className="text-[10px] font-bold text-navy-400 uppercase tracking-widest leading-tight">Índice de Eficiência <br />Ponta a Ponta</p>
                   </div>
                </div>
             </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-transparent w-full">
        <div className="w-full max-w-4xl animate-in fade-in zoom-in-95 duration-700">
           {renderLayout()}
        </div>
    </div>
  );
}
