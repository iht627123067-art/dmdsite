import React, { useState, useMemo } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ArrowLeft, CheckCircle2, Send, Sparkles, ShoppingBag, ChevronRight, Info, Download, FileType, Palette, Type, Quote, ShieldCheck, Square, Maximize2, X, Printer, MessageCircle } from 'lucide-react';
import { useLocation } from 'wouter';
import { toast } from "sonner";
import { AssetCart } from '@/components/brand/AssetCart';
import { motion } from 'framer-motion';
import { MugAsset, MugProps } from '@/components/assets/MugAsset';
import { BadgeAsset, BadgeProps } from '@/components/assets/BadgeAsset';
import { NotepadAsset, NotepadProps } from '@/components/assets/NotepadAsset';
import { PenAsset, PenProps } from '@/components/assets/PenAsset';
import { LogoAsset } from '@/components/assets/LogoAsset';
import { EmailSignatureAsset, EmailSignatureProps } from '@/components/assets/EmailSignatureAsset';
import { WebBannerAsset, WebBannerProps } from '@/components/assets/WebBannerAsset';
import { CertificateAsset, CertificateProps } from '@/components/assets/CertificateAsset';
import { ImpactReportAsset, ImpactReportProps } from '@/components/assets/ImpactReportAsset';
import { BrochureAsset, BrochureProps } from '@/components/assets/BrochureAsset';
import { SlideAsset, SlideProps } from '@/components/assets/SlideAsset';
import { BusinessCardAsset, BusinessCardProps } from '@/components/assets/BusinessCardAsset';
import { colorSchemes, typographyStyles, logoVariants } from '@/data/brand-identity';
import { assetCategories } from '@/data/assets.ts';
import { useBrand, ColorScheme, TypographyStyle, LogoVariant, ShapeStyle, shapeRadius } from '@/contexts/BrandContext';

import { toAssetVariant, toCardVariant } from '@/lib/logoVariants';
import { BrandLogo } from '@/components/brand/BrandLogo';




// Asset data moved to @/data/assets.ts


export default function Applications() {
  const {
    colorScheme, setColorScheme,
    typography, setTypography,
    logoVariant, setLogoVariant,
    shapeStyle, setShapeStyle,
    planningData
  } = useBrand();

  const [activeTab, setActiveTab] = useState(assetCategories[0].id);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [previewId, setPreviewId] = useState<string | null>(assetCategories[0].models[0].id);
  const [selectedLogoWeight, setSelectedLogoWeight] = useState<number>(700);
  const [useInstitutePrefix, setUseInstitutePrefix] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [, navigate] = useLocation();

  // Get product-specific sizing based on asset type
  const getAssetSizing = (modelId: string | null) => {
    const model = allModels.find(m => m.id === modelId);
    if (!model) return {
      cardClass: 'min-h-[50vh]',
      aspectClass: 'aspect-auto',
      scale: 'scale-110',
      containerClass: 'lg:col-span-8'
    };
    
    const type = (model.parent as any).type;
    
    switch (type) {
      case 'certificate':
        // Landscape A4 format - needs wider display
        return {
          cardClass: 'min-h-[55vh] lg:min-h-[65vh]',
          aspectClass: 'aspect-[1.414/1] max-w-4xl',
          scale: 'scale-100',
          containerClass: 'lg:col-span-12'
        };
      case 'banner':
        // Wide horizontal format
        return {
          cardClass: 'min-h-[40vh] lg:min-h-[50vh]',
          aspectClass: 'aspect-[3/1] max-w-5xl',
          scale: 'scale-100',
          containerClass: 'lg:col-span-12'
        };
      case 'report':
        // A4 portrait format
        return {
          cardClass: 'min-h-[60vh] lg:min-h-[70vh]',
          aspectClass: 'aspect-[1/1.414] max-w-3xl',
          scale: 'scale-95',
          containerClass: 'lg:col-span-8'
        };
      case 'slide':
        // 16:9 presentation format
        return {
          cardClass: 'min-h-[45vh] lg:min-h-[55vh]',
          aspectClass: 'aspect-video max-w-4xl',
          scale: 'scale-100',
          containerClass: 'lg:col-span-12'
        };
      case 'mug':
        // Small portrait item
        return {
          cardClass: 'min-h-[40vh] lg:min-h-[50vh]',
          aspectClass: 'aspect-[3/4] max-w-sm',
          scale: 'scale-125',
          containerClass: 'lg:col-span-6'
        };
      case 'badge':
        // Small vertical card
        return {
          cardClass: 'min-h-[35vh] lg:min-h-[45vh]',
          aspectClass: 'aspect-[3/4] max-w-xs',
          scale: 'scale-125',
          containerClass: 'lg:col-span-5'
        };
      case 'notepad':
        // A5 format
        return {
          cardClass: 'min-h-[50vh] lg:min-h-[60vh]',
          aspectClass: 'aspect-[1/1.4] max-w-md',
          scale: 'scale-110',
          containerClass: 'lg:col-span-6'
        };
      case 'pen':
        // Long thin item
        return {
          cardClass: 'min-h-[35vh] lg:min-h-[40vh]',
          aspectClass: 'aspect-[5/1] max-w-2xl',
          scale: 'scale-125',
          containerClass: 'lg:col-span-10'
        };
      case 'card':
        // Business card - small
        return {
          cardClass: 'min-h-[40vh] lg:min-h-[50vh]',
          aspectClass: 'aspect-[1.75/1] max-w-xl',
          scale: 'scale-100',
          containerClass: 'lg:col-span-8'
        };
      case 'brochure':
        // Trifold format
        return {
          cardClass: 'min-h-[45vh] lg:min-h-[55vh]',
          aspectClass: 'aspect-[3/2] max-w-3xl',
          scale: 'scale-100',
          containerClass: 'lg:col-span-10'
        };
      default:
        return {
          cardClass: 'min-h-[50vh]',
          aspectClass: 'aspect-auto',
          scale: 'scale-110',
          containerClass: 'lg:col-span-8'
        };
    }
  };

  // Reset preview when tab changes
  React.useEffect(() => {
    const category = assetCategories.find(c => c.id === activeTab);
    if (category && category.models.length > 0) {
      setPreviewId(category.models[0].id);
    }
  }, [activeTab]);

  // Inject @media print styles for clean PDF export
  React.useEffect(() => {
    const styleId = 'dmd-print-styles';
    if (document.getElementById(styleId)) return;
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      @media print {
        body { visibility: hidden !important; }
        #printable-report {
          visibility: visible !important;
          position: absolute !important;
          top: 0; left: 0;
          width: 100% !important;
          padding: 40px !important;
          background: white !important;
        }
        #printable-report * { visibility: visible !important; }
        .no-print { display: none !important; }
        @page { margin: 1.5cm; }
      }
    `;
    document.head.appendChild(style);
    return () => { document.getElementById(styleId)?.remove(); };
  }, []);

  // Reativo à seleção da Arquitetura do Nome
  const brandName = useInstitutePrefix ? "Instituto De Mãos Dadas" : "De Mãos Dadas";

  // Computed Theme Helpers
  const currentPalette = colorSchemes.find(p => p.id === colorScheme)!;
  const currentTypo = typographyStyles.find(t => t.id === typography)!;
  const currentLogo = logoVariants.find(l => l.id === logoVariant)!;

  // State for editable fields
  const [customData, setCustomData] = useState({
    name: 'NOME COMPLETO',
    role: 'Cargo / Função',
    notepadTitle: 'De Mãos Dadas',
    notepadSub: 'Goiânia · GO',
    studentName: 'THIAGO B. VILAR',
    courseTitle: 'MARKETING E IMPACTO SOCIAL',
    bannerTitle: 'COMUNIDADE EM MOVIMENTO',
    bannerSub: 'Inovação social que transforma realidades'
  });


  const toggleSelection = (modelId: string, modelName: string) => {
    setSelectedIds(prev => 
      prev.includes(modelId) ? prev.filter(i => i !== modelId) : [...prev, modelId]
    );
    
    if (!selectedIds.includes(modelId)) {
      toast.success(`${modelName} adicionado às seleções!`);
    }
  };

  const isSelected = (id: string) => selectedIds.includes(id);

  const isCategorySelected = (categoryId: string) => {
    const category = assetCategories.find(e => e.id === categoryId);
    return category ? category.models.some(m => isSelected(m.id)) : false;
  };

  const allModels = useMemo(
    () => assetCategories.flatMap(e => e.models.map(m => ({ ...m, parent: e }))),
    [] // assetCategories is a static constant — no deps needed
  );
  const selectedModels = useMemo(
    () => allModels.filter(m => selectedIds.includes(m.id)),
    [allModels, selectedIds]
  );
  const activePreviewModel = useMemo(
    () => allModels.find(m => m.id === previewId) ?? null,
    [allModels, previewId]
  );

  /** Returns the 1-based selection order of the given asset id */
  const getOrder = (id: string) => selectedIds.indexOf(id) + 1;

  /** Generates WhatsApp-formatted text of the current brand dossier */
  const generateWhatsAppText = (): string => {
    const emojiNums = ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟'];
    const shapeLabel =
      shapeStyle === 'curves' ? 'Curvas — Acolhimento' :
      shapeStyle === 'lines'  ? 'Retas — Rigor' :
                                'Equilíbrio Híbrido';
    const lines: string[] = [
      `*📋 DOSSIÊ DE MARCA — ${brandName}*`,
      ``,
      `🎨 Paleta: ${currentPalette.name}`,
      `🔤 Tipografia: ${currentTypo.name} (${currentTypo.fonts.display})`,
      `🔲 Traçado: ${shapeLabel}`,
      ``,
      `📦 *ASSETS SELECIONADOS (${selectedModels.length}):*`,
      ...selectedModels.map((m, i) =>
        `${i < 10 ? emojiNums[i] : `${i + 1}.`} [${(m.parent as any).title}] · ${m.name}`
      ),
      ``,
      `_Gerado pelo Brand Builder DMD_`,
    ];
    return lines.join('\n');
  };

  const AssetRenderer = ({ modelId, isFinal = false }: { modelId: string, isFinal?: boolean }) => {
    const model = allModels.find(m => m.id === modelId);
    if (!model) return null;

    const type = (model.parent as any).type;
    const isSmart = (model as any).isSmart;
    const props = isSmart ? {} : (model as any).config;

    // Computed values from context — usa currentPalette para obter primary/secondary/accent corretos
    const currentTypo = typographyStyles.find(t => t.id === typography)!;
    const pc = currentPalette.colors; // { primary, secondary, accent, ... }
    const ss = shapeStyle; // princípio visual: 'curves' | 'lines' | 'hybrid'

    switch (type) {
      case 'mug':
        return (
          <MugAsset
            {...(props as MugProps)}
            layout={isSmart ? (
              colorScheme === 'premium' ? 'executive-blue' :
              colorScheme === 'campaign' ? 'duo-tone-slice' :
              'dimensional-ring'
            ) : (props as MugProps).layout}
            background={isSmart ? pc.primary : (props as MugProps).background}
            logoType={isSmart ? (colorScheme === 'premium' || colorScheme === 'institutional' ? 'clara' : 'escura') : (props as MugProps).logoType}
            logoVariant={isSmart ? toAssetVariant(logoVariant) : (props as any).logoVariant}
            primaryColor={pc.primary}
            secondaryColor={pc.secondary}
            fontFamily={currentTypo.fonts.display}
            fontWeight={isSmart ? 700 : 700}
            tagline={isSmart ? planningData.proposito.functional : (props as MugProps).tagline}
            taglineColor={isSmart ? pc.accent : (props as MugProps).taglineColor}
            handleColor={isSmart ? pc.secondary : (props as MugProps).handleColor}
            shapeStyle={ss}
          />
        );
      case 'badge':
        return (
          <BadgeAsset
            {...(props as BadgeProps)}
            headerBackground={isSmart ? pc.primary : (props as BadgeProps).headerBackground}
            logoType={isSmart ? 'clara' : (props as BadgeProps).logoType}
            logoVariant={isSmart ? toAssetVariant(logoVariant) : (props as any).logoVariant}
            primaryColor={pc.primary}
            secondaryColor={pc.secondary}
            borderColor={isSmart ? pc.secondary : (props as BadgeProps).borderColor}
            nameColor={isSmart ? pc.primary : (props as BadgeProps).nameColor}
            fontFamily={currentTypo.fonts.display}
            name={customData.name}
            role={customData.role}
            eventText={isSmart ? `${brandName} · 2026` : (props as BadgeProps).eventText}
            isEditable={!isFinal}
            onUpdate={(name, role) => setCustomData(prev => ({ ...prev, name, role }))}
            shapeStyle={ss}
          />
        );
      case 'notepad':
        return (
          <NotepadAsset
            {...(props as NotepadProps)}
            headerBorderColor={isSmart ? pc.primary : (props as NotepadProps).headerBorderColor}
            footerBackground={isSmart ? pc.primary : (props as NotepadProps).footerBackground}
            titleColor={isSmart ? pc.primary : (props as NotepadProps).titleColor}
            logoVariant={isSmart ? toAssetVariant(logoVariant) : (props as any).logoVariant}
            primaryColor={pc.primary}
            secondaryColor={pc.secondary}
            accentColor={pc.accent}
            layout={isSmart ? (
              colorScheme === 'premium' ? 'premium' :
              colorScheme === 'campaign' ? 'campaign' :
              'standard'
            ) : (props as NotepadProps).layout}
            shapeStyle={ss}
            fontFamily={currentTypo.fonts.display}
            title={isSmart ? brandName : customData.notepadTitle}
            subTitle={isSmart ? planningData.missao.functional : customData.notepadSub}
            isEditable={!isFinal}
            onUpdate={(title, subTitle) => setCustomData(prev => ({ ...prev, notepadTitle: title, notepadSub: subTitle }))}
          />
        );
      case 'pen':
        return (
          <PenAsset
            {...(props as PenProps)}
            layout={isSmart ? (
              colorScheme === 'premium' ? 'deep-prof' :
              colorScheme === 'campaign' ? 'duo-tone' :
              'classic-solar'
            ) : (props as PenProps).layout}
            bodyColor={isSmart ? pc.primary : (props as PenProps).bodyColor}
            clipColor={isSmart ? pc.secondary : (props as PenProps).clipColor}
            logoType={isSmart ? (colorScheme === 'premium' || colorScheme === 'institutional' ? 'clara' : 'escura') : (props as PenProps).logoType}
            tagline={isSmart ? planningData.proposito.functional : (props as any).tagline}
            taglineColor={isSmart ? pc.accent : (props as any).taglineColor}
            primaryColor={pc.primary}
            secondaryColor={pc.secondary}
            fontFamily={currentTypo.fonts.display}
          />
        );

      case 'signature':
        return (
          <EmailSignatureAsset
            {...(props as EmailSignatureProps)}
            primaryColor={pc.primary}
            secondaryColor={pc.secondary}
            logoVariant={toCardVariant(logoVariant)}
            fontFamily={currentTypo.fonts.display}
            name={customData.name}
            role={customData.role}
            shapeStyle={ss}
          />
        );
      case 'banner':
        return (
          <WebBannerAsset
            {...(props as WebBannerProps)}
            primaryColor={pc.primary}
            secondaryColor={pc.secondary}
            accentColor={pc.accent}
            logoVariant={toCardVariant(logoVariant)}
            fontFamily={currentTypo.fonts.display}
            title={isSmart ? planningData.quemSomos.story : customData.bannerTitle}
            subtitle={isSmart ? planningData.proposito.story : customData.bannerSub}
            ctaText={isSmart ? 'Saber Mais' : 'Clique aqui'}
          />
        );
      case 'certificate':
        return (
          <CertificateAsset
            {...(props as CertificateProps)}
            primaryColor={pc.primary}
            secondaryColor={pc.secondary}
            accentColor={pc.accent}
            logoVariant={toCardVariant(logoVariant)}
            fontFamily={currentTypo.fonts.display}
            studentName={customData.studentName}
            courseTitle={customData.courseTitle}
            date="12 de Abril, 2026"
          />
        );
      case 'report':
        return (
          <ImpactReportAsset
            {...(props as ImpactReportProps)}
            primaryColor={pc.primary}
            secondaryColor={pc.secondary}
            accentColor={pc.accent}
            fontFamily={currentTypo.fonts.display}
            year="2025"
          />
        );
      case 'brochure':
        return (
          <BrochureAsset
            {...(props as BrochureProps)}
            primaryColor={pc.primary}
            secondaryColor={pc.secondary}
            accentColor={pc.accent}
            logoVariant={toCardVariant(logoVariant)}
            fontFamily={currentTypo.fonts.display}
            brandName={brandName}
          />
        );
      case 'slide':
        return (
          <SlideAsset
            {...(props as SlideProps)}
            primaryColor={pc.primary}
            secondaryColor={pc.secondary}
            accentColor={pc.accent}
            logoVariant={toCardVariant(logoVariant)}
            fontFamily={currentTypo.fonts.display}
            brandName={brandName}
          />
        );
      case 'card':
        return (
          <BusinessCardAsset
            {...(props as BusinessCardProps)}
            layout={isSmart ? (
              colorScheme === 'premium' ? 'bold' :
              colorScheme === 'campaign' ? 'creative' :
              'classic'
            ) : (props as BusinessCardProps).layout}
            primaryColor={pc.primary}
            secondaryColor={pc.secondary}
            accentColor={pc.accent}
            logoVariant={toCardVariant(logoVariant)}
            fontFamily={currentTypo.fonts.display}
            name={customData.name}
            role={customData.role}
            shapeStyle={ss}
          />
        );
      case 'external-app': {
        const rawSrc: string = (model as any).src ?? '';
        // Em produção (GitHub Pages com base /dmdsite/), caminhos absolutos tipo /examples/...
        // resolveriam para a raiz do domínio e cairiam em 404. Usa BASE_URL para corrigir.
        const resolvedSrc = rawSrc.startsWith('/')
          ? `${import.meta.env.BASE_URL}${rawSrc.replace(/^\//, '')}`
          : rawSrc;
        return (
          <div className="w-full h-full flex flex-col">
            <div className="flex-1 rounded-[2rem] overflow-hidden border border-navy-100/50 shadow-2xl bg-white relative">
              <iframe
                src={resolvedSrc}
                title={model.name}
                className="w-full h-full border-0"
              />
            </div>
          </div>
        );
      }
      default:
        return null;
    }
  };







  return (
    <div className="min-h-screen bg-background transition-colors duration-700">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-navy-100/50">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all rounded-full"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Brand Journey
              </Button>
              <div className="h-6 w-px bg-navy-100" />
              <BrandLogo variant="on-light" className="h-8 w-auto" />
              <div className="hidden md:block">
                <h1 className="text-lg font-bold text-foreground leading-none">Aplicação da Marca</h1>
                <p className="text-[10px] text-muted-foreground font-medium mt-0.5">
                  {currentPalette.name} · {currentTypo.name}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1">Pacote Customizado</p>
                <p className="text-sm font-bold text-primary">{selectedIds.length} Assets</p>
              </div>
              <Button 
                onClick={() => setIsCartOpen(true)}
                className={`rounded-full w-12 h-12 p-0 transition-all ${selectedIds.length > 0 ? 'bg-primary text-white shadow-glow' : 'bg-navy-100 text-navy-400'}`}
              >
                <div className="relative">
                  <ShoppingBag className="w-5 h-5" />
                  {selectedIds.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-[8px] font-bold rounded-full flex items-center justify-center animate-bounce">
                      {selectedIds.length}
                    </span>
                  )}
                </div>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <AssetCart 
        items={selectedModels.map(m => ({ id: m.id, name: m.name, category: m.parent.title }))}
        onRemove={(id) => setSelectedIds(prev => prev.filter(i => i !== id))}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={() => {
          setIsCartOpen(false);
          setActiveTab('summary');
        }}
        getOrder={getOrder}
      />

      <main className="container py-10 md:py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-12">
          <TabsList className="flex flex-wrap h-auto bg-navy-50/50 p-1.5 rounded-3xl border border-navy-100 overflow-hidden">
            {assetCategories.map(e => (
              <TabsTrigger 
                key={e.id} 
                value={e.id} 
                className="rounded-2xl px-5 py-3 text-[10px] font-bold uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary transition-all"
              >
                {e.title}
                {isCategorySelected(e.id) && <CheckCircle2 className="w-3 h-3 text-success ml-2" />}
              </TabsTrigger>
            ))}
            <div className="w-px h-6 bg-navy-100 mx-3 self-center hidden md:block" />
            <TabsTrigger 
              value="summary" 
              className="rounded-2xl px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] data-[state=active]:bg-foreground data-[state=active]:text-white transition-all ml-auto"
            >
              RESUMO / DOSSIÊ
            </TabsTrigger>
          </TabsList>

          {assetCategories.map(e => (
            <TabsContent key={e.id} value={e.id} className="mt-8 space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-4 space-y-6">
                  <div className="bg-white/40 backdrop-blur-sm p-8 rounded-[2rem] border border-navy-100/50 shadow-sm">
                    <h2 className="text-xl font-bold text-foreground mb-2">{e.title}</h2>
                    <p className="text-muted-foreground text-xs font-light leading-relaxed italic mb-8">{e.description}</p>
                    
                    <div className="space-y-3">
                      <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest px-2">Opções Disponíveis</p>
                      <div className="grid grid-cols-1 gap-2 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
                        {e.models.map(model => (
                          <motion.div
                            key={model.id}
                            whileHover={{ x: 4 }}
                            className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between group ${
                              isSelected(model.id) || previewId === model.id
                                ? 'border-primary bg-primary/5'
                                : 'border-navy-50 hover:border-navy-100 bg-white'
                            }`}
                            onClick={() => {
                              if (e.id === 'identidade-base') setPreviewId(model.id);
                              else toggleSelection(model.id, model.name);
                            }}
                            onMouseEnter={() => {
                              if (e.id !== 'identidade-base') setPreviewId(model.id);
                            }}
                          >
                            <div className="flex items-center gap-3 overflow-hidden">
                              <div className={`relative w-7 h-7 rounded-lg shrink-0 flex items-center justify-center transition-all duration-300 ${
                                isSelected(model.id)
                                  ? 'bg-primary text-white scale-110 shadow-md'
                                  : 'bg-navy-50 text-navy-300'
                              }`}>
                                {isSelected(model.id) ? (
                                  <span className="text-[9px] font-black leading-none">
                                    {String(getOrder(model.id)).padStart(2, '0')}
                                  </span>
                                ) : (
                                  <CheckCircle2 className="w-3 h-3" />
                                )}
                              </div>
                              <span className="text-xs font-bold text-foreground truncate">{model.name}</span>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-all shrink-0 ml-2">
                              {e.id === 'identidade-base' ? (
                                <ChevronRight className="w-4 h-4 text-primary" />
                              ) : isSelected(model.id) ? (
                                <span className="text-[8px] font-extrabold text-primary uppercase tracking-tighter">#{String(getOrder(model.id)).padStart(2, '0')}</span>
                              ) : (
                                <span className="text-[8px] font-extrabold text-navy-300 uppercase tracking-tighter">+ Adicionar</span>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Category selection progress */}
                    {e.id !== 'identidade-base' && (() => {
                      const total = e.models.length;
                      const selCount = e.models.filter(m => isSelected(m.id)).length;
                      const pct = total > 0 ? (selCount / total) * 100 : 0;
                      return (
                        <div className="mt-4 p-3 bg-primary/5 rounded-2xl border border-primary/10 transition-all duration-500">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[9px] font-bold text-primary uppercase tracking-widest">
                              {selCount === 0 ? 'Nenhum selecionado' : `${selCount} adicionado${selCount > 1 ? 's' : ''} ao pacote`}
                            </span>
                            <span className="text-[9px] font-bold text-primary/60">{selCount} / {total}</span>
                          </div>
                          <div className="h-1 bg-primary/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      );
                    })()}

                    <div className="mt-8 p-4 bg-navy-50/50 rounded-2xl border border-navy-100/50">
                      <div className="flex items-center gap-2 mb-2">
                        <Info className="w-3 h-3 text-primary" />
                        <span className="text-[9px] font-bold uppercase tracking-widest text-primary">Insight de Marca</span>
                      </div>
                      <p className="text-[10px] text-navy-600 leading-relaxed font-medium">Cada item individual nesta lista foi calibrado para respeitar as diretrizes estratégicas do sistema DMD.</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8 flex flex-col gap-6">
                  {e.id === 'identidade-base' ? (
                    <div className="flex-1 space-y-10">
                       <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 rounded-full text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                          <Sparkles className="w-3 h-3" />
                          Configurando o DNA da Marca
                       </div>
                       
                        {previewId === 'cores' && (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in zoom-in-95 duration-700">
                            {colorSchemes.map(palette => (
                              <Card
                                key={palette.id}
                                onClick={() => setColorScheme(palette.id as ColorScheme)}
                                className={`p-6 rounded-[2rem] border-2 cursor-pointer transition-all flex flex-col h-full ${colorScheme === palette.id ? 'border-primary shadow-glow ring-4 ring-primary/5 bg-primary/[0.01]' : 'border-navy-100/50 hover:border-primary/30 bg-white'}`}
                              >
                                 <div className="space-y-4 flex-1">
                                   <div className="h-24 rounded-2xl overflow-hidden flex shadow-inner group-hover:scale-[1.02] transition-transform duration-500">
                                     <div style={{ background: palette.colors.primary, flex: palette.distribution.main }} />
                                     <div style={{ background: palette.colors.secondary, flex: palette.distribution.secondary }} />
                                     <div style={{ background: palette.colors.accent, flex: palette.distribution.accent }} />
                                   </div>
                                   <div>
                                     <div className="flex items-center justify-between mb-2">
                                       <h4 className="font-bold text-navy-900">{palette.name}</h4>
                                       {colorScheme === palette.id && <CheckCircle2 className="w-4 h-4 text-primary" />}
                                     </div>
                                     <p className="text-[10px] text-muted-foreground leading-relaxed italic line-clamp-4 min-h-[60px]">{palette.psychology}</p>
                                   </div>
                                 </div>
                                 <div className="pt-4 mt-auto border-t border-navy-50 flex items-center justify-between">
                                     <div className="flex gap-1.5">
                                       <div className="w-3 h-3 rounded-full" style={{ background: palette.colors.primary }} />
                                       <div className="w-3 h-3 rounded-full" style={{ background: palette.colors.secondary }} />
                                       <div className="w-3 h-3 rounded-full" style={{ background: palette.colors.accent }} />
                                     </div>
                                     <span className="text-[9px] font-bold text-navy-400 uppercase tracking-widest">{palette.distribution.main}/{palette.distribution.secondary}</span>
                                 </div>
                              </Card>
                            ))}
                          </div>
                        )}

                        {previewId === 'tipografia' && (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in zoom-in-95 duration-700">
                            {typographyStyles.map(style => (
                              <Card
                                key={style.id}
                                onClick={() => setTypography(style.id as TypographyStyle)}
                                className={`p-8 rounded-[2rem] border-2 cursor-pointer transition-all flex flex-col justify-between h-full ${typography === style.id ? 'border-primary shadow-glow ring-4 ring-primary/5 bg-primary/[0.01]' : 'border-navy-100/50 hover:border-primary/30 bg-white'}`}
                              >
                                 <div className="space-y-6 flex-1">
                                   <div className="space-y-2">
                                     <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Exemplo</p>
                                     <p className="text-xl md:text-2xl font-bold leading-tight line-clamp-2" style={{ fontFamily: style.fonts.display }}>{style.specimen}</p>
                                   </div>
                                   <div className="p-4 bg-navy-50/50 rounded-xl border border-navy-100/20">
                                      <div className="flex items-center justify-between mb-1">
                                        <p className="text-[10px] font-bold text-navy-900">{style.name}</p>
                                        {typography === style.id && <CheckCircle2 className="w-4 h-4 text-primary" />}
                                      </div>
                                      <p className="text-[9px] text-muted-foreground italic leading-relaxed min-h-[45px]">{style.narrative}</p>
                                   </div>
                                 </div>
                                 <div className="mt-6 pt-4 border-t border-navy-50 flex items-center justify-between">
                                    <div className="flex flex-col">
                                      <span className="text-[8px] font-bold text-navy-300 uppercase letter-spacing-1">Display: {style.fonts.display}</span>
                                      <span className="text-[8px] font-bold text-navy-200 uppercase letter-spacing-1">Body: {style.fonts.body}</span>
                                    </div>
                                 </div>
                              </Card>
                            ))}
                          </div>
                        )}

                        {previewId === 'logo' && (
                          <div className="space-y-12 animate-in fade-in zoom-in-95 duration-700">
                             {/* 2 colunas — dá largura suficiente para logos horizontais */}
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {logoVariants.map(variant => {
                                   const isMono      = variant.id === 'mono';
                                   const isWatermark = variant.id === 'watermark';

                                   // Tamanho calibrado por tipo para preencher o preview sem clipar
                                   // Grid 2-col: preview ~320px largo, h-40 = 160px alto
                                   const logoSize =
                                     variant.type === 'symbol'   ? 110 :
                                     variant.type === 'circle'   ? 130 :
                                     variant.type === 'vertical' ? 105 :
                                     variant.type === 'wordmark' ? 100 :
                                     /* horizontal */              180;

                                   const logoStyle: React.CSSProperties = {
                                     ...(isMono      ? { filter: 'grayscale(1)' }  : {}),
                                     ...(isWatermark ? { opacity: 0.20 }           : {}),
                                   };

                                   const previewBg =
                                     isWatermark ? 'bg-navy-900 border-navy-800'  :
                                     isMono      ? 'bg-white border-navy-200/60'  :
                                                   'bg-navy-50/60 border-navy-100/30';

                                   return (
                                   <Card
                                     key={variant.id}
                                     onClick={() => setLogoVariant(variant.id as LogoVariant)}
                                     className={`p-5 rounded-[2rem] border-2 cursor-pointer transition-all flex flex-col justify-between h-full ${logoVariant === variant.id ? 'border-primary shadow-glow bg-primary/[0.02] ring-4 ring-primary/5' : 'border-navy-100/50 hover:border-primary/30 bg-white'}`}
                                   >
                                      <div className="space-y-4 flex-1">
                                        {/* Preview proporcional */}
                                        <div className={`h-40 rounded-2xl flex items-center justify-center p-5 border relative group overflow-hidden ${previewBg}`}>
                                           {/* Hover glow */}
                                           <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-10 pointer-events-none">
                                             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
                                           </div>

                                           {/* Rótulo contextual para mono/watermark */}
                                           {(isMono || isWatermark) && (
                                             <span className="absolute top-2.5 right-3 text-[7px] font-bold uppercase tracking-widest opacity-50"
                                               style={{ color: isWatermark ? '#fff' : '#555' }}
                                             >
                                               {isMono ? 'P&B' : 'Fundo escuro'}
                                             </span>
                                           )}

                                           <div style={logoStyle} className="flex items-center justify-center relative z-10">
                                             <LogoAsset
                                               type={variant.type}
                                               primaryColor={isMono ? '#1a1a1a' : currentPalette.colors.primary}
                                               secondaryColor={isMono ? '#555' : currentPalette.colors.secondary}
                                               fontFamily={currentTypo.fonts.display}
                                               brandName={brandName}
                                               size={logoSize}
                                             />
                                           </div>
                                        </div>

                                        <div className="space-y-1.5">
                                           <div className="flex items-center justify-between gap-2">
                                             <h4 className="font-bold text-navy-900 text-sm leading-tight">{variant.name}</h4>
                                             {logoVariant === variant.id && <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />}
                                           </div>
                                           <p className="text-[10px] text-muted-foreground leading-relaxed italic line-clamp-2">{variant.description}</p>
                                        </div>
                                      </div>

                                      <div className="mt-3 pt-3 border-t border-navy-50">
                                         <div className="flex items-start gap-2">
                                           <Info className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                                           <p className="text-[9px] text-navy-400 leading-normal line-clamp-2">{variant.technicalTip}</p>
                                         </div>
                                      </div>
                                   </Card>
                                  );
                                })}
                             </div>

                             {/* SEÇÃO: TÉCNICA DE VISUALIZAÇÃO INSTITUCIONAL (NEW) */}
                             <div className="pt-8 space-y-8">
                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-navy-100 pb-6">
                                   <div className="space-y-1">
                                      <h3 className="text-xl font-bold text-navy-900">Técnicas de Uso e Visualização</h3>
                                      <p className="text-xs text-muted-foreground italic">Padrão institucional de aplicação da marca em diversos contextos.</p>
                                   </div>
                                   <div className="flex items-center gap-4">
                                      <div className="px-4 py-1.5 bg-navy-900 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">Padrão: 135px • Box Circular</div>
                                   </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                   {/* Contexto 1: Fundo Claro (Padrão) */}
                                   <div className="space-y-6">
                                      <div className="h-64 rounded-[2.5rem] bg-white border border-navy-100 shadow-sm flex items-center justify-center relative overflow-hidden group">
                                         <div className="absolute top-4 left-6 text-[8px] font-bold uppercase text-navy-300 tracking-[0.2em]">01. Aplicação Direta • White</div>
                                         <div className="transition-transform duration-700 group-hover:scale-110">
                                            <LogoAsset 
                                              type={logoVariant === 'wordmark' ? 'wordmark' : 'horizontal'}
                                              primaryColor={currentPalette.colors.primary}
                                              secondaryColor={currentPalette.colors.secondary}
                                              fontFamily={currentTypo.fonts.display}
                                              brandName={brandName}
                                              size={135}
                                            />
                                         </div>
                                      </div>
                                      <div className="px-4 space-y-2">
                                         <p className="text-[10px] font-bold text-navy-900 uppercase tracking-widest">Uso Principal</p>
                                         <p className="text-[11px] text-muted-foreground leading-relaxed">Aplicação direta sobre fundos brancos ou neutros. Respeita a integridade cromática original sem necessidade de refúgio.</p>
                                      </div>
                                   </div>

                                   {/* Contexto 2: Fundo Escuro (Technique) */}
                                   <div className="space-y-6">
                                      <div className="h-64 rounded-[2.5rem] bg-navy-900 flex items-center justify-center relative overflow-hidden group">
                                         <div className="absolute top-4 left-6 text-[8px] font-bold uppercase text-primary/60 tracking-[0.2em]">02. Safe Box Tech • Navy</div>
                                         <div 
                                            className="w-[135px] h-[135px] bg-white rounded-full border-[5px] border-white shadow-2xl flex items-center justify-center transition-transform duration-700 group-hover:scale-110"
                                            style={{ boxShadow: `0 15px 45px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.05)` }}
                                         >
                                            <LogoAsset 
                                              type="symbol" 
                                              primaryColor={currentPalette.colors.primary}
                                              secondaryColor={currentPalette.colors.secondary}
                                              size={95}
                                            />
                                         </div>
                                      </div>
                                      <div className="px-4 space-y-2">
                                         <p className="text-[10px] font-bold text-navy-900 uppercase tracking-widest">Contrast Safety</p>
                                         <p className="text-[11px] text-muted-foreground leading-relaxed">Técnica para fundos escuros. O círculo de 135px com borda de 5px atua como "ilha de legibilidade" institucional.</p>
                                      </div>
                                   </div>

                                   {/* Contexto 3: Fundo Degradê (Identidade) */}
                                   <div className="space-y-6">
                                      <div 
                                         className="h-64 rounded-[2.5rem] flex items-center justify-center relative overflow-hidden group"
                                         style={{ background: `linear-gradient(135deg, ${currentPalette.colors.primary} 0%, ${currentPalette.colors.accent} 100%)` }}
                                      >
                                         <div className="absolute top-4 left-6 text-[8px] font-bold uppercase text-white/50 tracking-[0.2em]">03. Institutional Layer • Gradient</div>
                                         <div 
                                            className="w-[135px] h-[135px] bg-white rounded-full border-[5px] border-white shadow-2xl flex items-center justify-center transition-transform duration-700 group-hover:scale-110"
                                            style={{ boxShadow: `0 15px 45px rgba(0,0,0,0.3)` }}
                                         >
                                            <LogoAsset 
                                              type="symbol" 
                                              primaryColor={currentPalette.colors.primary}
                                              secondaryColor={currentPalette.colors.secondary}
                                              size={95}
                                            />
                                         </div>
                                      </div>
                                      <div className="px-4 space-y-2">
                                         <p className="text-[10px] font-bold text-navy-900 uppercase tracking-widest">Brand DNA</p>
                                         <p className="text-[11px] text-muted-foreground leading-relaxed">Aplicação em materiais promocionais com degradê. Garante o protagonismo da marca sem conflito com as cores de apoio.</p>
                                      </div>
                                   </div>
                                </div>

                                {/* TECHNICAL SPECS CARDS (NEW) */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                                   <Card className="p-8 border-none bg-white rounded-[2rem] shadow-sm flex items-start gap-6">
                                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                                         <ShieldCheck className="w-6 h-6 text-primary" />
                                      </div>
                                      <div className="space-y-3">
                                         <h4 className="font-bold text-xs uppercase tracking-widest text-primary">Regra do Box Circular (135mm/px)</h4>
                                         <p className="text-[11px] text-muted-foreground leading-relaxed italic">
                                            A técnica do White Box (Círculo Branco) é mandatória para garantir a legibilidade institucional em materiais complexos. O box deve ter exatamente 135px/mm com uma borda branca de respiro de 5-8px.
                                         </p>
                                      </div>
                                   </Card>
                                   <Card className="p-8 border-none bg-navy-900 text-white rounded-[2rem] shadow-sm flex items-start gap-6">
                                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                                         <Sparkles className="w-6 h-6 text-accent" />
                                      </div>
                                      <div className="space-y-3">
                                         <h4 className="font-bold text-xs uppercase tracking-widest text-accent">Respiro & Margens Críticas</h4>
                                         <p className="text-[11px] text-white/70 leading-relaxed italic">
                                            Nunca redimensione o box circular abaixo de 80px sem recalibrar o "stroke" da logo. O respiro interno (distância entre a logo e a borda do círculo) deve ser de aproximadamente 15% do diâmetro total.
                                         </p>
                                      </div>
                                   </Card>
                                </div>
                             </div>

                             {logoVariant === 'wordmark' && (
                                <div className="mt-10 p-10 bg-white/40 backdrop-blur-sm rounded-[3rem] border border-navy-100/50 animate-in fade-in slide-in-from-bottom-5">
                                   <div className="flex flex-col md:flex-row items-center gap-10">
                                      <div className="flex-1 space-y-4">
                                         <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                                               <Type className="w-5 h-5 text-primary" />
                                            </div>
                                            <h4 className="font-bold text-navy-900">Personalizar Peso do Logo</h4>
                                         </div>
                                         <p className="text-sm text-muted-foreground leading-relaxed">
                                            A variante Wordmark permite ajustar a espessura da fonte para equilibrar impacto e elegância.
                                         </p>
                                         <div className="flex gap-3 pt-4 overflow-x-auto pb-2 custom-scrollbar">
                                            {[300, 400, 500, 700, 900].map(weight => (
                                              <Button 
                                                key={weight}
                                                variant={selectedLogoWeight === weight ? 'default' : 'outline'}
                                                onClick={() => setSelectedLogoWeight(weight)}
                                                className="rounded-xl px-6 shrink-0"
                                              >
                                                {weight === 300 ? 'Light' : weight === 500 ? 'Medium' : weight === 700 ? 'Bold' : weight === 900 ? 'Black' : 'Regular'}
                                              </Button>
                                            ))}
                                         </div>
                                      </div>
                                      <div className="w-full md:w-80 h-40 bg-white rounded-[2rem] shadow-inner flex items-center justify-center p-8 border border-navy-100/20">
                                         <LogoAsset 
                                            type="wordmark"
                                            primaryColor={currentPalette.colors.primary}
                                            fontFamily={currentTypo.fonts.display}
                                            brandName={brandName}
                                            fontWeight={selectedLogoWeight}
                                            size={150}
                                         />
                                      </div>
                                   </div>
                                </div>
                             )}
                          </div>
                        )}

                       {previewId === 'tracado' && (
                         <div className="space-y-8 animate-in fade-in zoom-in-95 duration-700">
                           <div className="space-y-1">
                             <h3 className="text-lg font-bold text-navy-900">Princípio Visual</h3>
                             <p className="text-[11px] text-muted-foreground italic leading-relaxed">
                               Define a linguagem de formas que percorre toda a identidade — dos cards ao botões, dos crachás às embalagens.
                             </p>
                           </div>

                           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                             {([
                               {
                                 id: 'curves' as ShapeStyle,
                                 name: 'Curvas',
                                 sub: 'Acolhimento · Comunidade',
                                 desc: 'Formas orgânicas e arredondadas. Transmite calor humano, acessibilidade e cuidado com a comunidade.',
                                 cardRadius: '32px',
                                 btnRadius: '999px',
                                 innerRadius: '20px',
                               },
                               {
                                 id: 'lines' as ShapeStyle,
                                 name: 'Retas',
                                 sub: 'Rigor · Excelência',
                                 desc: 'Ângulos precisos e geometria definida. Transmite profissionalismo, clareza e estrutura institucional.',
                                 cardRadius: '4px',
                                 btnRadius: '4px',
                                 innerRadius: '2px',
                               },
                               {
                                 id: 'hybrid' as ShapeStyle,
                                 name: 'Híbrido',
                                 sub: 'Equilíbrio · Identidade DMD',
                                 desc: 'Cards com cantos suaves, botões em pílula. Equilíbrio entre a estrutura profissional e o acolhimento humano.',
                                 cardRadius: '16px',
                                 btnRadius: '999px',
                                 innerRadius: '12px',
                               },
                             ] as const).map(p => (
                               <Card
                                 key={p.id}
                                 onClick={() => setShapeStyle(p.id)}
                                 className={`p-6 border-2 cursor-pointer transition-all flex flex-col gap-5 rounded-[2rem] ${shapeStyle === p.id ? 'border-primary shadow-glow ring-4 ring-primary/5 bg-primary/[0.01]' : 'border-navy-100/50 hover:border-primary/30 bg-white'}`}
                               >
                                 {/* Shape preview */}
                                 <div className="h-28 bg-navy-50/60 border border-navy-100/40 rounded-2xl flex flex-col items-center justify-center gap-3 p-4">
                                   <div
                                     className="w-full h-10 border-2 border-primary/30 bg-primary/5"
                                     style={{ borderRadius: p.cardRadius }}
                                   />
                                   <div className="flex gap-2 w-full">
                                     <div
                                       className="h-5 flex-1 bg-primary/20"
                                       style={{ borderRadius: p.btnRadius }}
                                     />
                                     <div
                                       className="h-5 w-12 bg-accent/30"
                                       style={{ borderRadius: p.innerRadius }}
                                     />
                                   </div>
                                 </div>

                                 <div className="space-y-1.5 flex-1">
                                   <div className="flex items-center justify-between">
                                     <h4 className="font-bold text-navy-900">{p.name}</h4>
                                     {shapeStyle === p.id && <CheckCircle2 className="w-4 h-4 text-primary" />}
                                   </div>
                                   <p className="text-[9px] font-bold uppercase tracking-widest text-primary">{p.sub}</p>
                                   <p className="text-[10px] text-muted-foreground leading-relaxed italic">{p.desc}</p>
                                 </div>

                                 <div className="pt-3 border-t border-navy-50 flex items-center gap-2 text-[9px] text-navy-400 font-bold uppercase tracking-widest">
                                   <div className="w-3 h-3 border border-navy-200" style={{ borderRadius: p.cardRadius }} />
                                   card: {p.cardRadius} · btn: {p.btnRadius}
                                 </div>
                               </Card>
                             ))}
                           </div>

                           {/* Preview ao vivo */}
                           <div className="space-y-3">
                             <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground px-1">
                               Impacto em tempo real — aplica-se a todos os produtos
                             </p>
                             <div className="grid grid-cols-3 gap-4">
                               {(['curves', 'lines', 'hybrid'] as ShapeStyle[]).map(s => {
                                 const rad = shapeRadius(s);
                                 const isActive = shapeStyle === s;
                                 return (
                                   <div
                                     key={s}
                                     onClick={() => setShapeStyle(s)}
                                     className={`cursor-pointer p-4 bg-white border-2 transition-all flex flex-col gap-2 ${isActive ? 'border-primary' : 'border-navy-100 hover:border-primary/40'}`}
                                     style={{ borderRadius: rad.card }}
                                   >
                                     <div className="h-2 w-full" style={{ background: currentPalette.colors.primary, borderRadius: rad.sm }} />
                                     <div className="h-6 border border-navy-100" style={{ borderRadius: rad.inner }} />
                                     <div className="h-3 w-1/2" style={{ background: currentPalette.colors.accent, borderRadius: rad.btn }} />
                                   </div>
                                 );
                               })}
                             </div>
                           </div>
                         </div>
                       )}

                       {previewId === 'nome' && (
                         <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5">

                           {/* Seletor principal */}
                           <div className="bg-white/50 backdrop-blur-sm rounded-[2rem] border border-navy-100/50 p-8 space-y-6">
                             <div className="space-y-1">
                               <h3 className="text-lg font-bold text-navy-900">Arquitetura do Nome</h3>
                               <p className="text-[11px] text-muted-foreground italic leading-relaxed">
                                 Escolha a forma de assinatura que será usada em todas as aplicações da marca nesta sessão.
                                 A seleção propaga em tempo real para logos, crachás, cartões e demais materiais.
                               </p>
                             </div>

                             {/* Dois botões de seleção */}
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                               {[
                                 {
                                   value: false,
                                   title: 'De Mãos Dadas',
                                   sub: 'Forma curta · Alta frequência',
                                   desc: 'Uso coloquial, redes sociais, comunicação de proximidade com a comunidade e contextos informais.',
                                   badge: 'Redes / Comunidade',
                                   badgeColor: 'bg-secondary/10 text-secondary',
                                 },
                                 {
                                   value: true,
                                   title: 'Instituto De Mãos Dadas',
                                   sub: 'Forma completa · Alta formalidade',
                                   desc: 'Documentos oficiais, parcerias, ofícios, contratos, termos institucionais e apresentações formais.',
                                   badge: 'Docs / Parcerias',
                                   badgeColor: 'bg-primary/10 text-primary',
                                 },
                               ].map(opt => (
                                 <button
                                   key={String(opt.value)}
                                   onClick={() => setUseInstitutePrefix(opt.value)}
                                   className={`text-left p-6 rounded-2xl border-2 transition-all space-y-3 ${
                                     useInstitutePrefix === opt.value
                                       ? 'border-primary bg-primary/[0.03] shadow-glow ring-4 ring-primary/5'
                                       : 'border-navy-100 bg-white hover:border-primary/40'
                                   }`}
                                 >
                                   <div className="flex items-start justify-between gap-3">
                                     <div>
                                       <p className="font-bold text-navy-900 text-sm leading-tight">{opt.title}</p>
                                       <p className="text-[9px] text-muted-foreground uppercase tracking-widest mt-0.5">{opt.sub}</p>
                                     </div>
                                     <div className="flex flex-col items-end gap-2 shrink-0">
                                       {useInstitutePrefix === opt.value && <CheckCircle2 className="w-4 h-4 text-primary" />}
                                       <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full ${opt.badgeColor}`}>{opt.badge}</span>
                                     </div>
                                   </div>
                                   <p className="text-[10px] text-muted-foreground leading-relaxed">{opt.desc}</p>
                                 </button>
                               ))}
                             </div>
                           </div>

                           {/* Preview ao vivo — logo com a assinatura selecionada */}
                           <div className="space-y-3">
                             <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground px-1">
                               Preview ao vivo — Logo com assinatura selecionada
                             </p>
                             <div className="bg-white rounded-[2rem] border border-navy-100/50 p-10 flex items-center justify-center min-h-[140px] shadow-sm">
                               <LogoAsset
                                 type="horizontal"
                                 primaryColor={currentPalette.colors.primary}
                                 secondaryColor={currentPalette.colors.secondary}
                                 fontFamily={currentTypo.fonts.display}
                                 brandName={brandName}
                                 size={180}
                               />
                             </div>

                             {/* Preview em fundo escuro */}
                             <div
                               className="rounded-[2rem] p-10 flex items-center justify-center min-h-[140px]"
                               style={{ background: currentPalette.colors.primary }}
                             >
                               <LogoAsset
                                 type="horizontal"
                                 primaryColor="#FFFFFF"
                                 secondaryColor="rgba(255,255,255,0.65)"
                                 fontFamily={currentTypo.fonts.display}
                                 brandName={brandName}
                                 size={180}
                               />
                             </div>
                           </div>

                           {/* Regras de uso */}
                           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                             {[
                               { icon: <Quote className="w-4 h-4" />, label: 'Nunca abrevie', text: 'Não use "IMD", "Inst. DMD" ou qualquer sigla não homologada pelo instituto.' },
                               { icon: <ShieldCheck className="w-4 h-4" />, label: 'Nunca separe', text: 'O nome "De Mãos Dadas" é indivisível. Não use apenas "Mãos Dadas" como referência isolada.' },
                               { icon: <Square className="w-4 h-4" />, label: 'Nunca recrie', text: 'Não reescreva o nome em outras tipografias ou estilos. Use sempre os arquivos oficiais da marca.' },
                             ].map((rule, i) => (
                               <div key={i} className="p-5 bg-white rounded-2xl border border-navy-100/50 space-y-3">
                                 <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">{rule.icon}</div>
                                 <p className="text-[10px] font-bold uppercase tracking-widest text-navy-900">{rule.label}</p>
                                 <p className="text-[10px] text-muted-foreground leading-relaxed">{rule.text}</p>
                               </div>
                             ))}
                           </div>

                         </div>
                       )}
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-col gap-6 flex-1 min-h-[75vh]">
                        <div className="inline-flex items-center justify-between px-8 py-4 bg-white/40 backdrop-blur-sm rounded-full border border-navy-100/50 shadow-sm">
                          <div className="flex items-center gap-4">
                             <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                             <span className="text-[10px] font-bold text-foreground uppercase tracking-widest">
                               Visualizando: {activePreviewModel?.name ?? 'Variação Ativa'}
                             </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setIsExpanded(true)}
                              className="rounded-full text-[10px] uppercase tracking-widest font-bold border-primary/30 hover:bg-primary/10 hover:border-primary"
                            >
                              <Maximize2 className="w-3 h-3 mr-2" />
                              Ampliar
                            </Button>
                            <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                               {(activePreviewModel as any)?.isSmart ? '⭐ Sugestão Estratégica' : 'Variação Direta'}
                            </div>
                          </div>
                        </div>

                        {(() => {
                          const sizing = getAssetSizing(previewId);
                          const isWide = sizing.containerClass === 'lg:col-span-12';
                          return (
                            <React.Fragment>
                              <div className={`grid grid-cols-1 gap-6 flex-1 transition-all duration-500 ${isWide ? '' : 'lg:grid-cols-12'}`}>
                                <Card className={`p-0 overflow-hidden border-none rounded-[3rem] shadow-2xl relative group bg-navy-50/30 flex items-center justify-center transition-all duration-500 ${sizing.cardClass} ${sizing.containerClass}`}>
                                  <div className="absolute inset-x-0 top-0 h-1 hidden md:block bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30" />
                                  <div className={`w-full h-full flex items-center justify-center p-8 ${sizing.aspectClass}`}>
                                    <div className={(activePreviewModel?.parent as any)?.type === 'external-app' ? "w-full h-full" : sizing.scale}>
                                      <AssetRenderer modelId={previewId || e.models[0].id} isFinal={true} />
                                    </div>
                                  </div>
                                  <button
                                    onClick={() => setIsExpanded(true)}
                                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 z-10"
                                    title="Ampliar visualização"
                                  >
                                    <Maximize2 className="w-4 h-4 text-navy-700" />
                                  </button>
                                  <div className="absolute bottom-6 left-6 flex flex-col items-start gap-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                    <div className="glass-card p-3 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] shadow-2xl flex items-center gap-2 bg-white/80 backdrop-blur-sm">
                                      <Sparkles className="w-3 h-3 text-primary" />
                                      Renderização Nativa
                                    </div>
                                  </div>
                                </Card>
                                
                                {activePreviewModel && !isWide && (
                                  <div className="lg:col-span-4 flex flex-col gap-6 animate-in slide-in-from-right-4 duration-500">
                                    <Card className="p-8 border-none shadow-premium bg-white rounded-[2rem] flex-1">
                                       <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-primary mb-4 border-b border-navy-50 pb-3">Fundamentação Técnica</h4>
                                       <div className="space-y-6">
                                         <div>
                                           <span className="text-[9px] font-bold text-navy-300 uppercase block mb-2">Conceito & Rationale</span>
                                           <p className="text-[11px] text-muted-foreground leading-relaxed italic">
                                             {activePreviewModel.reasoning || "Esta aplicação foi gerada seguindo o sistema de respiro e hierarquia visual do Instituto, garantindo que o símbolo preserve seu impacto conotativo original."}
                                           </p>
                                         </div>
                                         <div className="grid grid-cols-2 gap-4 pt-4 border-t border-navy-50">
                                           <div>
                                             <span className="text-[9px] font-bold text-navy-300 uppercase block mb-1">Tamanho/Escala</span>
                                             <span className="text-[10px] font-bold text-navy-900">{activePreviewModel.sizeRecommendation || "Escala Adaptativa"}</span>
                                           </div>
                                           <div>
                                             <span className="text-[9px] font-bold text-navy-300 uppercase block mb-1">Versão Utilizada</span>
                                             <span className="text-[10px] font-bold text-navy-900">{activePreviewModel.versionUsed || "Variação Dinâmica"}</span>
                                           </div>
                                         </div>
                                       </div>
                                    </Card>

                                    <Card className="p-8 border-none shadow-premium bg-navy-900 text-white rounded-[2rem]">
                                       <div className="flex items-center gap-3 mb-4">
                                         <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                                           <ShieldCheck className="w-4 h-4 text-accent" />
                                         </div>
                                         <h4 className="font-bold text-[10px] uppercase tracking-widest text-accent">Auditoria Visual</h4>
                                       </div>
                                       <div className="space-y-3">
                                          {[
                                            { label: 'Legibilidade WCAG', ok: true },
                                            { label: 'Respiro Institucional', ok: true },
                                            { label: 'Contraste da Marca', ok: true }
                                          ].map((check, i) => (
                                            <div key={i} className="flex items-center justify-between text-[10px] py-1.5 border-b border-white/5 opacity-80">
                                               <span>{check.label}</span>
                                               <CheckCircle2 className="w-3 h-3 text-success" />
                                            </div>
                                          ))}
                                       </div>
                                    </Card>
                                  </div>
                                )}
                              </div>
                            </React.Fragment>
                          );
                        })()}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </TabsContent>
          ))}

          <TabsContent value="summary" className="mt-12 animate-in zoom-in-95 duration-700">
            <div id="printable-report" className="max-w-6xl mx-auto space-y-20">
              <div className="text-center space-y-6 max-w-3xl mx-auto">
                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mx-auto ring-8 ring-primary/5">
                   <ShieldCheck className="w-10 h-10" />
                </div>
                <h2 className="text-display font-bold text-foreground">Dossiê Estratégico</h2>
                <p className="text-muted-foreground font-light italic text-lg leading-relaxed px-4">
                  Sua curadoria integrada para o <strong>{brandName}</strong>. Fundação estratégica seguida de aplicações práticas.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 <Card className="p-10 rounded-[3rem] border-none shadow-sm bg-navy-50/40 space-y-6">
                    <div className="flex items-center gap-3">
                       <Palette className="w-5 h-5 text-primary" />
                       <h3 className="text-sm font-bold uppercase tracking-widest text-primary">DNA Cromático & Função Conotativa</h3>
                    </div>
                    <div className="space-y-4">
                       <div className="h-10 rounded-xl overflow-hidden flex shadow-inner">
                          <div style={{ background: currentPalette.colors.primary, flex: currentPalette.distribution.main }} />
                          <div style={{ background: currentPalette.colors.secondary, flex: currentPalette.distribution.secondary }} />
                          <div style={{ background: currentPalette.colors.accent, flex: currentPalette.distribution.accent }} />
                       </div>
                       <div>
                          <p className="text-xl font-bold text-navy-900">{currentPalette.name}</p>
                          <p className="text-[11px] text-muted-foreground italic leading-relaxed mt-2">
                             {currentPalette.psychology}
                          </p>
                       </div>
                       
                       <div className="pt-4 grid grid-cols-2 gap-4 border-t border-navy-100/50">
                          <div>
                             <p className="text-[8px] font-bold text-navy-400 uppercase tracking-widest mb-1">Aposta Estratégica</p>
                             <p className="text-[10px] text-navy-700 font-medium">
                                {colorScheme === 'institutional' ? 'Foco em Credibilidade e Autoridade Social.' : 
                                 colorScheme === 'campaign' ? 'Foco em Mobilização e Urgência Local.' : 
                                 'Foco em Sofisticação e Parcerias Premium.'}
                             </p>
                          </div>
                          <div>
                             <p className="text-[8px] font-bold text-navy-400 uppercase tracking-widest mb-1">Acorde Cromático</p>
                             <p className="text-[10px] text-navy-700 font-medium">
                                {colorScheme === 'institutional' ? 'Análogo Harmonioso para Estabilidade.' : 
                                 colorScheme === 'campaign' ? 'Triádico Vibrante para Movimento.' : 
                                 'Sóbrio Profundo para Exclusividade.'}
                             </p>
                          </div>
                       </div>
                    </div>
                 </Card>

                 <Card className="p-10 rounded-[3rem] border-none shadow-sm bg-navy-50/40 space-y-6">
                    <div className="flex items-center gap-3">
                       <Quote className="w-5 h-5 text-primary" />
                       <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Arquitetura Tipográfica</h3>
                    </div>
                    <div className="space-y-4">
                       <p className="text-3xl font-bold leading-tight" style={{ fontFamily: currentTypo.fonts.display }}>{currentTypo.specimen}</p>
                       <div>
                          <p className="text-sm font-bold text-navy-900 uppercase tracking-tighter mb-1">{currentTypo.name}</p>
                          <p className="text-[11px] text-muted-foreground italic leading-relaxed">{currentTypo.narrative}</p>
                       </div>

                       <div className="pt-4 p-4 bg-white/40 rounded-2xl border border-navy-100/30">
                          <p className="text-[9px] font-bold text-primary uppercase tracking-widest mb-2">A Tipografia fala antes de ser lida</p>
                          <p className="text-[10px] text-navy-700 leading-relaxed italic">
                             {typography === 'innovation' ? 'Transmite transparência técnica e modernidade social.' : 
                              typography === 'urban' ? 'Transmite a força e a urgência do movimento de rua.' : 
                              typography === 'premium' ? 'Transmite a autoridade editorial de uma instituição sólida.' :
                              'Transmite o rigor e a clareza de dados auditáveis.'}
                          </p>
                       </div>
                    </div>
                 </Card>

                 <Card className="p-10 rounded-[3rem] border-none shadow-sm bg-navy-50/40 col-span-1 md:col-span-2 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                       <div className="space-y-4">
                          <div className="flex items-center gap-3">
                             <Square className="w-5 h-5 text-primary" />
                             <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Traçado & Grid</h3>
                          </div>
                          <p className="text-[11px] text-navy-700 leading-relaxed whitespace-pre-wrap">{planningData.tracado.functional}</p>
                       </div>
                       <div className="space-y-4">
                          <div className="flex items-center gap-3">
                             <Sparkles className="w-5 h-5 text-primary" />
                             <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Missão & Visão</h3>
                          </div>
                          <p className="text-[11px] text-navy-700 leading-relaxed mb-3">{planningData.missao.functional}</p>
                          <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
                             <p className="text-[11px] font-serif italic text-primary leading-relaxed">"{planningData.missao.story}"</p>
                          </div>
                       </div>
                       <div className="space-y-4">
                          <div className="flex items-center gap-3">
                             <ShieldCheck className="w-5 h-5 text-success" />
                             <h3 className="text-sm font-bold uppercase tracking-widest text-success">Auditoria Visual</h3>
                          </div>
                          <div className="space-y-2">
                             {[
                               { label: 'Contraste WCAG AA+', ok: true },
                               { label: 'Legitimidade Social', ok: true },
                               { label: 'Respiro de Marca (>15%)', ok: true },
                               { label: 'Hierarquia de Apoio', ok: true },
                             ].map((item, i) => (
                               <div key={i} className="flex items-center justify-between p-2 bg-white/40 rounded-xl">
                                  <span className="text-[9px] font-bold text-navy-600 uppercase tracking-wider">{item.label}</span>
                                  <CheckCircle2 className="w-3 h-3 text-success" />
                               </div>
                             ))}
                          </div>
                       </div>
                    </div>
                 </Card>
              </div>

              {selectedIds.length === 0 ? (
                <Card className="p-24 text-center border-dashed border-2 border-navy-100 rounded-[4rem] bg-navy-50/10">
                  <p className="text-navy-300 mb-10 font-light italic text-xl">Nenhum asset foi selecionado ainda.</p>
                  <Button onClick={() => setActiveTab(assetCategories[1].id)} variant="ghost" className="rounded-full text-primary font-bold uppercase tracking-widest text-xs px-10 h-14">
                    Explorar Assets
                  </Button>
                </Card>
              ) : (
                <div className="space-y-12">
                    <Card className="p-12 rounded-[3xl] border-none shadow-glow bg-white/60 backdrop-blur-md overflow-hidden relative group">
                       <div className="absolute right-0 top-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-primary/10 transition-all duration-700" />
                       <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                          <div className="w-full md:w-80 h-56 bg-white rounded-[2rem] shadow-sm border border-navy-100/20 flex items-center justify-center p-8">
                             <LogoAsset 
                               type={currentLogo.type}
                               primaryColor={currentPalette.colors.primary}
                               secondaryColor={currentPalette.colors.secondary}
                               fontFamily={currentTypo.fonts.display}
                               fontWeight={selectedLogoWeight}
                               brandName={brandName}
                               size={180}
                             />
                          </div>
                          <div className="flex-1 space-y-4 text-center md:text-left">
                             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">
                                <Sparkles className="w-3 h-3" />
                                Logo Master Oficial
                             </div>
                             <h3 className="text-3xl font-bold text-navy-900 tracking-tight">{currentLogo.name}</h3>
                             <p className="text-muted-foreground leading-relaxed max-w-lg">
                                Esta variante foi selecionada como a representação principal para o estudo de marca. 
                                Ela utiliza a tipografia <strong>{currentTypo.fonts.display}</strong> e a paleta <strong>{currentPalette.name}</strong>.
                             </p>
                             <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
                                <div className="flex items-center gap-2 px-4 py-2 bg-navy-50 rounded-xl border border-navy-100/30">
                                   <div className="w-3 h-3 rounded-full" style={{ background: currentPalette.colors.primary }} />
                                   <span className="text-[10px] font-bold text-navy-600 uppercase tracking-widest">{currentPalette.id}</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-navy-50 rounded-xl border border-navy-100/30">
                                   <Type className="w-3 h-3 text-navy-400" />
                                   <span className="text-[10px] font-bold text-navy-600 uppercase tracking-widest">{currentTypo.fonts.display}</span>
                                </div>
                             </div>
                          </div>
                       </div>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {selectedModels.map(m => (
                      <Card key={m.id} className="overflow-hidden border-none shadow-glow hover:shadow-2xl transition-all duration-500 flex flex-col rounded-[2.5rem] bg-white group p-10">
                        <div className="h-64 bg-navy-50/30 rounded-[2rem] flex items-center justify-center relative overflow-hidden mb-8 border border-navy-100/20">
                           <AssetRenderer modelId={m.id} isFinal={true} />
                           <div className="absolute top-4 right-4 flex gap-2">
                              <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white transition-all">
                                <Download className="w-3.5 h-3.5" />
                              </Button>
                              <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white transition-all">
                                <FileType className="w-3.5 h-3.5" />
                              </Button>
                           </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-navy-100 text-[8px] font-bold text-navy-500 uppercase tracking-widest mb-2">
                              {m.parent.title}
                            </div>
                            <h4 className="font-bold text-xl text-foreground mb-6 leading-tight tracking-tight">{m.name}</h4>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button 
                              variant="outline"
                              size="sm" 
                              onClick={() => toggleSelection(m.id, m.name)}
                              className="flex-1 text-red-400 hover:text-red-500 hover:bg-red-50 text-[9px] uppercase font-bold tracking-[0.2em] h-10 rounded-xl transition-all"
                            >
                              Remover
                            </Button>
                            <Button variant="default" size="sm" className="flex-1 bg-navy-900 text-white text-[9px] uppercase font-bold tracking-[0.2em] h-10 rounded-xl">
                              Ficha Técnica
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                  
                  <Card className="p-16 border-none shadow-glow bg-foreground text-white rounded-[4rem] text-center max-w-4xl mx-auto relative overflow-hidden group no-print">
                    <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/30 rounded-full blur-[120px]" />
                    <div className="relative z-10 space-y-10">
                      <div className="flex items-center justify-center gap-4">
                        <div className="bg-white/10 backdrop-blur-xl p-5 rounded-3xl border border-white/10">
                          <Send className="w-10 h-10 text-accent" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-display text-white">Exportar Dossiê de Marca</h3>
                        <p className="text-navy-100/70 font-light text-lg max-w-xl mx-auto leading-relaxed">
                          Sua curadoria de <strong>{selectedIds.length} assets</strong> baseada na identidade <strong>{currentPalette.name}</strong> está pronta para exportação.
                        </p>
                      </div>

                      {/* Export action buttons */}
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        {/* PDF Print */}
                        <Button
                          size="lg"
                          className="bg-primary hover:bg-primary/80 text-white font-bold uppercase tracking-widest rounded-full px-10 h-16 text-sm transition-all shadow-2xl"
                          onClick={() => {
                            setActiveTab('summary');
                            setTimeout(() => window.print(), 150);
                          }}
                        >
                          <Printer className="w-5 h-5 mr-3" />
                          Imprimir / Salvar PDF
                        </Button>

                        {/* WhatsApp copy */}
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-white/30 bg-white/5 text-white hover:bg-white/15 font-bold uppercase tracking-widest rounded-full px-10 h-16 text-sm transition-all"
                          onClick={() => {
                            navigator.clipboard
                              .writeText(generateWhatsAppText())
                              .then(() => toast.success('Texto copiado! Cole direto no WhatsApp 💬'))
                              .catch(() => toast.error('Não foi possível acessar a área de transferência'));
                          }}
                        >
                          <MessageCircle className="w-5 h-5 mr-3" />
                          Copiar para WhatsApp
                        </Button>
                      </div>

                      <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">
                        PDF: salve como arquivo no diálogo de impressão do browser
                      </p>
                    </div>
                  </Card>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t border-navy-100 py-12">
        <div className="container text-center text-muted-foreground text-[10px] font-bold uppercase tracking-widest opacity-30">
          <p>© 2026 Instituto De Mãos Dadas · Identidade Visual Gerativa</p>
        </div>
      </footer>
    </div>
  );
}
