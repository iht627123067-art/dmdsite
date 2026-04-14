import React from 'react';
import { LogoAsset } from './LogoAsset';
import { ShapeStyle, shapeRadius } from '@/contexts/BrandContext';

export interface BadgeProps {
  label?: string;
  headerBackground: string;
  logoType: 'clara' | 'escura';
  eventText: string;
  name: string;
  role: string;
  borderColor: string;
  nameColor: string;
  isEditable?: boolean;
  onUpdate?: (name: string, role: string) => void;
  logoVariant?: 'horizontal' | 'vertical' | 'symbol' | 'wordmark' | 'circle';
  primaryColor?: string;
  secondaryColor?: string;
  fontFamily?: string;
  shapeStyle?: ShapeStyle;
}

export function BadgeAsset({
  headerBackground,
  logoType,
  eventText,
  name,
  role,
  borderColor,
  nameColor,
  isEditable = false,
  onUpdate,
  logoVariant = 'horizontal',
  primaryColor,
  secondaryColor,
  fontFamily = 'Space Grotesk',
  shapeStyle
}: BadgeProps) {
  const r = shapeRadius(shapeStyle);
  const isDark = logoType === 'clara';
  const logoMainColor = isDark ? '#FFFFFF' : (primaryColor || '#153065');
  const logoSecColor = isDark ? 'rgba(255,255,255,0.7)' : (secondaryColor || '#7F4CA9');

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-transparent">
      <div className="w-[280px] bg-white overflow-hidden shadow-2xl border border-navy-100/20 flex flex-col transition-all duration-700" style={{ borderRadius: r.card }}>
        {/* Hole bar */}
        <div className="h-6 bg-navy-50/50 flex items-center justify-center">
          <div className="w-10 h-2 bg-white rounded-full border border-navy-100" />
        </div>

        {/* Header */}
        <div 
          className="h-24 flex items-center justify-center p-6 transition-all duration-700"
          style={{ background: headerBackground }}
        >
          <LogoAsset 
            type={logoVariant === 'circle' ? 'symbol' : logoVariant} // Badge header usually looks better with Symbol or Linear
            primaryColor={logoMainColor}
            secondaryColor={logoSecColor}
            brandName="DMD"
            size={logoVariant === 'circle' ? 60 : 120}
            className="transition-all duration-700"
          />
        </div>

        {/* Body */}
        <div className="p-8 flex flex-col items-center gap-6">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest text-center">
            {eventText}
          </span>

          <div
            className="w-full border-2 p-6 transition-all duration-700"
            style={{ borderColor, borderRadius: r.inner }}
          >
            {isEditable ? (
              <div className="space-y-2">
                <input
                  value={name}
                  onChange={(e) => onUpdate?.(e.target.value, role)}
                  className="w-full bg-transparent border-none text-xl font-bold uppercase tracking-tight text-center focus:ring-0 p-0"
                  style={{ color: nameColor, fontFamily }}
                  placeholder="NOME"
                />
                <input
                  value={role}
                  onChange={(e) => onUpdate?.(name, e.target.value)}
                  className="w-full bg-transparent border-none text-xs text-muted-foreground font-medium uppercase tracking-wide text-center focus:ring-0 p-0"
                  placeholder="CARGO / FUNÇÃO"
                />
              </div>
            ) : (
              <div className="space-y-1 text-center">
                <p 
                  className="text-xl font-bold uppercase tracking-tight leading-tight"
                  style={{ color: nameColor, fontFamily }}
                >
                  {name || 'NOME COMPLETO'}
                </p>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  {role || 'Cargo / Função'}
                </p>
              </div>
            )}
          </div>

          <div className="mt-4 flex flex-col items-center gap-1">
            <span className="text-[10px] font-medium text-navy-300">institutodemaosdadas.com.br</span>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-navy-100" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-navy-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

