import React from 'react';
import { LogoAsset } from './LogoAsset';
import { ShapeStyle, shapeRadius } from '@/contexts/BrandContext';

export type NotepadLayout = 'standard' | 'campaign' | 'premium' | 'minimal' | 'field' | 'volunteer';

export interface NotepadProps {
  label?: string;
  layout?: NotepadLayout;
  headerBorderColor: string;
  title: string;
  titleColor: string;
  subTitle: string;
  footerBackground: string;
  isEditable?: boolean;
  onUpdate?: (title: string, subTitle: string) => void;
  logoVariant?: 'horizontal' | 'vertical' | 'symbol' | 'wordmark' | 'circle';
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  fontFamily?: string;
  shapeStyle?: ShapeStyle;
}

export function NotepadAsset({
  layout = 'standard',
  headerBorderColor,
  title,
  titleColor,
  subTitle,
  footerBackground,
  isEditable = false,
  onUpdate,
  primaryColor = '#153065',
  secondaryColor = '#7F4CA9',
  accentColor = '#FF9E00',
  fontFamily = 'Space Grotesk',
  shapeStyle
}: NotepadProps) {
  const r = shapeRadius(shapeStyle);

  const editableTitle = isEditable ? (
    <input
      value={title}
      onChange={(e) => onUpdate?.(e.target.value, subTitle)}
      className="bg-transparent border-none focus:ring-0 p-0 w-full"
      style={{ color: titleColor, fontFamily }}
    />
  ) : (
    <span style={{ color: titleColor, fontFamily }}>{title}</span>
  );

  const editableSubTitle = isEditable ? (
    <input
      value={subTitle}
      onChange={(e) => onUpdate?.(title, e.target.value)}
      className="bg-transparent border-none focus:ring-0 p-0 block w-full text-[8px] font-bold uppercase tracking-widest"
      style={{ color: headerBorderColor }}
    />
  ) : (
    <span className="text-[8px] font-bold uppercase tracking-widest" style={{ color: headerBorderColor }}>
      {subTitle}
    </span>
  );

  /* ─────────────────────────────────────────────
     LAYOUT: STANDARD — azul institucional clássico
  ───────────────────────────────────────────── */
  if (layout === 'standard') {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-transparent transition-all duration-700">
        <div className="w-[320px] bg-white shadow-2xl relative flex flex-col transition-all duration-700 min-h-[420px]" style={{ borderRadius: r.card }}>
          {/* Spiral binding */}
          <div className="absolute top-0 left-0 right-0 h-4 z-10 bg-white rounded-t-[12px] overflow-hidden">
            <div className="h-full w-full opacity-20" style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent 0px, transparent 12px, #000 12px, #000 14px, #ddd 14px, #ddd 20px, #000 20px, #000 22px, transparent 22px, transparent 34px)',
              backgroundSize: '34px 100%'
            }} />
          </div>

          <div className="mt-4 px-6 py-8 flex items-center justify-between border-b-[4px] transition-all duration-700"
            style={{ borderBottomColor: headerBorderColor }}>
            <div className="flex items-center gap-4">
              <LogoAsset type="symbol" primaryColor={primaryColor} secondaryColor={secondaryColor} size={40} />
              <div className="flex flex-col leading-none">
                <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest">Instituto</span>
                <div className="text-xl font-bold uppercase tracking-tight">{editableTitle}</div>
                {editableSubTitle}
              </div>
            </div>
            <div className="text-xl font-bold text-navy-50" style={{ fontFamily }}>2026</div>
          </div>

          <div className="flex-1 px-8 py-4 relative" style={{
            backgroundImage: 'linear-gradient(to bottom, transparent 27px, #f0f0f0 27px, #f0f0f0 28px, transparent 28px)',
            backgroundSize: '100% 28px'
          }}>
            <div className="absolute left-10 top-0 bottom-0 w-px bg-red-100" />
          </div>

          <div className="p-3 px-6 flex items-center justify-between transition-all duration-700"
            style={{ background: footerBackground }}>
            <span className="text-[8px] font-bold text-white/50 uppercase tracking-widest">institutodemaosdadas.com.br</span>
            <span className="text-[8px] font-bold uppercase tracking-widest" style={{ color: accentColor }}>Goiânia · 2026</span>
          </div>
        </div>
      </div>
    );
  }

  /* ─────────────────────────────────────────────
     LAYOUT: CAMPAIGN — roxo energético com âmbar
  ───────────────────────────────────────────── */
  if (layout === 'campaign') {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-transparent transition-all duration-700">
        <div className="w-[320px] bg-white shadow-2xl flex flex-col min-h-[420px] overflow-hidden" style={{ borderRadius: r.card }}>
          {/* Header com gradiente roxo */}
          <div className="px-6 pt-6 pb-5 flex items-center gap-4 relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)` }}>
            <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10 bg-white" />
            <LogoAsset type="symbol" primaryColor="#FFFFFF" secondaryColor="rgba(255,255,255,0.7)" size={38} />
            <div className="flex-1 min-w-0">
              <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-white/60 mb-0.5">Instituto</p>
              <div className="text-base font-bold uppercase tracking-tight text-white truncate"
                style={{ fontFamily }}>
                {isEditable ? (
                  <input
                    value={title}
                    onChange={(e) => onUpdate?.(e.target.value, subTitle)}
                    className="bg-transparent border-none focus:ring-0 p-0 w-full text-white placeholder-white/50"
                    style={{ fontFamily }}
                  />
                ) : title}
              </div>
              {isEditable ? (
                <input
                  value={subTitle}
                  onChange={(e) => onUpdate?.(title, e.target.value)}
                  className="bg-transparent border-none focus:ring-0 p-0 block text-[8px] font-bold uppercase tracking-widest text-white/60 w-full"
                />
              ) : (
                <span className="text-[8px] font-bold uppercase tracking-widest text-white/60">{subTitle}</span>
              )}
            </div>
            {/* Accent strip */}
            <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: accentColor }} />
          </div>

          {/* Papel com linhas coloridas */}
          <div className="flex-1 px-8 py-4 relative" style={{
            backgroundImage: `linear-gradient(to bottom, transparent 27px, ${primaryColor}18 27px, ${primaryColor}18 28px, transparent 28px)`,
            backgroundSize: '100% 28px'
          }}>
            <div className="absolute left-10 top-0 bottom-0 w-px" style={{ background: `${accentColor}60` }} />
          </div>

          <div className="p-3 px-6 flex items-center justify-between"
            style={{ borderTop: `2px solid ${accentColor}` }}>
            <span className="text-[8px] font-bold uppercase tracking-widest" style={{ color: primaryColor }}>De Mãos Dadas</span>
            <div className="flex gap-1 items-center">
              <div className="w-2 h-2 rounded-full" style={{ background: accentColor }} />
              <span className="text-[8px] font-bold uppercase tracking-widest" style={{ color: secondaryColor }}>2026</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─────────────────────────────────────────────
     LAYOUT: PREMIUM — navy escuro, ouro/âmbar
  ───────────────────────────────────────────── */
  if (layout === 'premium') {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-transparent transition-all duration-700">
        <div className="w-[320px] shadow-2xl flex flex-col min-h-[420px] overflow-hidden"
          style={{ background: '#0f1623', borderRadius: r.card }}>
          {/* Topo dourado */}
          <div className="h-1.5 w-full" style={{ background: accentColor }} />

          <div className="px-8 py-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center border-2"
                style={{ borderColor: accentColor }}>
                <LogoAsset type="symbol" primaryColor={accentColor} secondaryColor="rgba(255,255,255,0.4)" size={28} />
              </div>
              <div>
                <p className="text-[7px] font-bold uppercase tracking-[0.25em] text-white/40 mb-0.5">Instituto</p>
                <div className="font-bold uppercase tracking-widest text-sm" style={{ color: accentColor, fontFamily }}>
                  {isEditable ? (
                    <input
                      value={title}
                      onChange={(e) => onUpdate?.(e.target.value, subTitle)}
                      className="bg-transparent border-none focus:ring-0 p-0 text-sm font-bold uppercase tracking-widest"
                      style={{ color: accentColor, fontFamily }}
                    />
                  ) : title}
                </div>
                {isEditable ? (
                  <input
                    value={subTitle}
                    onChange={(e) => onUpdate?.(title, e.target.value)}
                    className="bg-transparent border-none focus:ring-0 p-0 block text-[7px] font-bold uppercase tracking-widest"
                    style={{ color: 'rgba(255,255,255,0.35)' }}
                  />
                ) : (
                  <span className="text-[7px] font-bold uppercase tracking-widest text-white/35">{subTitle}</span>
                )}
              </div>
            </div>
            <span className="text-2xl font-bold opacity-10 text-white" style={{ fontFamily }}>2026</span>
          </div>

          {/* Separador dourado */}
          <div className="mx-8 h-px" style={{ background: `${accentColor}30` }} />

          {/* Papel escuro com linhas sutis */}
          <div className="flex-1 px-8 py-4 relative" style={{
            backgroundImage: 'linear-gradient(to bottom, transparent 27px, rgba(255,255,255,0.04) 27px, rgba(255,255,255,0.04) 28px, transparent 28px)',
            backgroundSize: '100% 28px'
          }}>
            <div className="absolute left-10 top-0 bottom-0 w-px" style={{ background: `${accentColor}25` }} />
          </div>

          <div className="p-3 px-8 flex items-center justify-between"
            style={{ borderTop: `1px solid ${accentColor}20` }}>
            <span className="text-[7px] font-bold uppercase tracking-widest text-white/30">institutodemaosdadas.com.br</span>
            <div className="w-3 h-3 rounded-full" style={{ background: accentColor, opacity: 0.7 }} />
          </div>
        </div>
      </div>
    );
  }

  /* ─────────────────────────────────────────────
     LAYOUT: MINIMAL — limpo, branding sutil
  ───────────────────────────────────────────── */
  if (layout === 'minimal') {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-transparent">
        <div className="w-[320px] bg-white border border-navy-100 shadow-sm flex flex-col min-h-[420px]" style={{ borderRadius: r.card }}>
          <div className="px-8 pt-8 pb-5 flex items-end justify-between"
            style={{ borderBottom: `1px solid ${primaryColor}20` }}>
            <div>
              <p className="text-[7px] font-bold uppercase tracking-[0.25em] mb-1.5" style={{ color: `${primaryColor}50` }}>
                Instituto De Mãos Dadas
              </p>
              <div className="text-2xl font-bold" style={{ color: primaryColor, fontFamily }}>
                {isEditable ? (
                  <input
                    value={title}
                    onChange={(e) => onUpdate?.(e.target.value, subTitle)}
                    className="bg-transparent border-none focus:ring-0 p-0 text-2xl font-bold w-full"
                    style={{ color: primaryColor, fontFamily }}
                  />
                ) : title}
              </div>
            </div>
            <LogoAsset type="symbol" primaryColor={primaryColor} secondaryColor={secondaryColor} size={30} />
          </div>

          <div className="flex-1 px-8 py-4 relative" style={{
            backgroundImage: 'linear-gradient(to bottom, transparent 31px, #e8e8e8 31px, #e8e8e8 32px, transparent 32px)',
            backgroundSize: '100% 32px'
          }} />

          <div className="px-8 py-3 flex items-center justify-between"
            style={{ borderTop: `1px solid ${primaryColor}15` }}>
            {isEditable ? (
              <input
                value={subTitle}
                onChange={(e) => onUpdate?.(title, e.target.value)}
                className="bg-transparent border-none focus:ring-0 p-0 text-[8px] font-bold uppercase tracking-widest"
                style={{ color: `${primaryColor}60` }}
              />
            ) : (
              <span className="text-[8px] font-bold uppercase tracking-widest" style={{ color: `${primaryColor}60` }}>
                {subTitle}
              </span>
            )}
            <div className="w-4 h-4 rounded-sm" style={{ background: accentColor, opacity: 0.8 }} />
          </div>
        </div>
      </div>
    );
  }

  /* ─────────────────────────────────────────────
     LAYOUT: FIELD — bloco de campo, funcional
  ───────────────────────────────────────────── */
  if (layout === 'field') {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-transparent">
        <div className="w-[320px] bg-white shadow-xl flex flex-col min-h-[420px] overflow-hidden border-2"
          style={{ borderColor: primaryColor, borderRadius: r.card }}>
          {/* Cabeçalho bicolor */}
          <div className="flex">
            <div className="w-2 flex-shrink-0" style={{ background: accentColor }} />
            <div className="flex-1 px-5 py-4 flex items-center gap-3"
              style={{ background: `${primaryColor}08` }}>
              <LogoAsset type="symbol" primaryColor={primaryColor} secondaryColor={secondaryColor} size={36} />
              <div className="flex-1 min-w-0">
                <p className="text-[7px] font-bold uppercase tracking-widest mb-0.5" style={{ color: `${primaryColor}70` }}>
                  Registro de Campo
                </p>
                <div className="font-bold text-sm uppercase" style={{ color: primaryColor, fontFamily }}>
                  {isEditable ? (
                    <input
                      value={title}
                      onChange={(e) => onUpdate?.(e.target.value, subTitle)}
                      className="bg-transparent border-none focus:ring-0 p-0 text-sm font-bold uppercase w-full"
                      style={{ color: primaryColor, fontFamily }}
                    />
                  ) : title}
                </div>
                {isEditable ? (
                  <input
                    value={subTitle}
                    onChange={(e) => onUpdate?.(title, e.target.value)}
                    className="bg-transparent border-none focus:ring-0 p-0 text-[8px] font-bold uppercase tracking-widest w-full"
                    style={{ color: `${primaryColor}70` }}
                  />
                ) : (
                  <span className="text-[8px] font-bold uppercase tracking-widest" style={{ color: `${primaryColor}70` }}>
                    {subTitle}
                  </span>
                )}
              </div>
              {/* Data box */}
              <div className="flex-shrink-0 w-10 h-10 rounded-md flex flex-col items-center justify-center"
                style={{ background: primaryColor }}>
                <span className="text-[7px] text-white/60 font-bold uppercase leading-none">2026</span>
                <span className="text-base text-white font-bold leading-tight" style={{ fontFamily }}>__</span>
              </div>
            </div>
          </div>

          {/* Área de conteúdo quadriculada */}
          <div className="flex-1 relative" style={{
            backgroundImage: `
              linear-gradient(to right, ${primaryColor}12 1px, transparent 1px),
              linear-gradient(to bottom, ${primaryColor}12 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }} />

          {/* Rodapé */}
          <div className="px-5 py-2.5 flex items-center gap-2" style={{ background: primaryColor }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: accentColor }} />
            <span className="text-[7px] font-bold uppercase tracking-widest text-white/50">institutodemaosdadas.com.br</span>
          </div>
        </div>
      </div>
    );
  }

  /* ─────────────────────────────────────────────
     LAYOUT: VOLUNTEER — cálido, âmbar e acolhedor
  ───────────────────────────────────────────── */
  // 'volunteer' ou fallback
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-transparent">
      <div className="w-[320px] bg-white shadow-xl flex flex-col min-h-[420px] overflow-hidden" style={{ borderRadius: r.card }}>
        {/* Header cálido */}
        <div className="px-6 py-5 flex items-center gap-3 relative"
          style={{ background: `${accentColor}15`, borderBottom: `3px solid ${accentColor}` }}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: accentColor }}>
            <LogoAsset type="symbol" primaryColor="#FFFFFF" secondaryColor="rgba(255,255,255,0.6)" size={26} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[7px] font-bold uppercase tracking-widest mb-0.5" style={{ color: `${primaryColor}70` }}>
              Voluntário
            </p>
            <div className="font-bold text-base uppercase truncate" style={{ color: primaryColor, fontFamily }}>
              {isEditable ? (
                <input
                  value={title}
                  onChange={(e) => onUpdate?.(e.target.value, subTitle)}
                  className="bg-transparent border-none focus:ring-0 p-0 text-base font-bold uppercase w-full"
                  style={{ color: primaryColor, fontFamily }}
                />
              ) : title}
            </div>
            {isEditable ? (
              <input
                value={subTitle}
                onChange={(e) => onUpdate?.(title, e.target.value)}
                className="bg-transparent border-none focus:ring-0 p-0 text-[8px] font-bold uppercase tracking-widest w-full"
                style={{ color: `${primaryColor}60` }}
              />
            ) : (
              <span className="text-[8px] font-bold uppercase tracking-widest" style={{ color: `${primaryColor}60` }}>
                {subTitle}
              </span>
            )}
          </div>
        </div>

        {/* Papel com linhas âmbar */}
        <div className="flex-1 px-8 py-4 relative" style={{
          backgroundImage: `linear-gradient(to bottom, transparent 27px, ${accentColor}25 27px, ${accentColor}25 28px, transparent 28px)`,
          backgroundSize: '100% 28px'
        }}>
          <div className="absolute left-10 top-0 bottom-0 w-px" style={{ background: `${accentColor}50` }} />
        </div>

        {/* Rodapé cálido */}
        <div className="px-6 py-3 flex items-center justify-between"
          style={{ background: `${accentColor}10`, borderTop: `1px solid ${accentColor}40` }}>
          <span className="text-[8px] font-bold uppercase tracking-widest" style={{ color: `${primaryColor}60` }}>
            institutodemaosdadas.com.br
          </span>
          <div className="flex gap-1">
            {[primaryColor, secondaryColor, accentColor].map((c, i) => (
              <div key={i} className="w-2 h-2 rounded-full" style={{ background: c, opacity: 0.7 }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
