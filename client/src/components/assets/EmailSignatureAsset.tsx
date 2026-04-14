import React from 'react';
import { LogoAsset } from './LogoAsset';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';
import { ShapeStyle, shapeRadius } from '@/contexts/BrandContext';

export interface EmailSignatureProps {
  layout: 'classic' | 'modern' | 'minimal' | 'sidebar' | 'compact';
  primaryColor: string;
  secondaryColor: string;
  name: string;
  role: string;
  logoVariant: 'horizontal' | 'vertical' | 'symbol' | 'circle';
  fontFamily?: string;
  shapeStyle?: ShapeStyle;
}

export function EmailSignatureAsset({
  layout,
  primaryColor,
  secondaryColor,
  name,
  role,
  logoVariant,
  fontFamily = 'Space Grotesk',
  shapeStyle
}: EmailSignatureProps) {
  const r = shapeRadius(shapeStyle);
  const IconStyle = { color: secondaryColor, width: 14, height: 14 };

  const renderLayout = () => {
    switch (layout) {
      case 'sidebar':
        return (
          <div className="flex gap-6 items-stretch border-l-4 p-4 bg-white" style={{ borderColor: primaryColor }}>
             <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-navy-50/50">
                <LogoAsset type={logoVariant === 'horizontal' ? 'symbol' : logoVariant} primaryColor={primaryColor} secondaryColor={secondaryColor} size={60} />
             </div>
             <div className="flex flex-col justify-center gap-2">
                <div>
                  <h4 className="font-bold text-lg leading-tight" style={{ color: primaryColor, fontFamily }}>{name}</h4>
                  <p className="text-xs uppercase tracking-widest opacity-70 font-medium" style={{ color: secondaryColor }}>{role}</p>
                </div>
                <div className="h-px bg-navy-100 w-full" />
                <div className="grid grid-cols-1 gap-1">
                   <div className="flex items-center gap-2 text-[10px] text-navy-500">
                      <Phone style={IconStyle} /> (62) 98888-7777
                   </div>
                   <div className="flex items-center gap-2 text-[10px] text-navy-500">
                      <Globe style={IconStyle} /> institutodmd.com.br
                   </div>
                </div>
             </div>
          </div>
        );
      case 'modern':
        return (
          <div className="p-6 bg-white shadow-sm border border-navy-100/50 max-w-sm" style={{ borderRadius: r.card }}>
             <div className="flex items-center gap-4 mb-4">
                <LogoAsset type={logoVariant} primaryColor={primaryColor} secondaryColor={secondaryColor} size={100} />
                <div className="w-px h-10 bg-navy-100" />
                <div>
                   <h4 className="font-bold text-sm" style={{ color: primaryColor, fontFamily }}>{name}</h4>
                   <p className="text-[10px] font-medium" style={{ color: secondaryColor }}>{role}</p>
                </div>
             </div>
             <div className="flex gap-4 text-[9px] font-medium text-navy-400">
                <span>(62) 98888-7777</span>
                <span>•</span>
                <span>contato@institutodmd.org</span>
                <span>•</span>
                <span>Goiânia, GO</span>
             </div>
          </div>
        );
      case 'compact':
        return (
          <div className="flex items-center gap-4 py-2 border-t-2 border-primary/20">
             <LogoAsset type="symbol" primaryColor={primaryColor} size={40} />
             <div>
                <span className="font-bold text-navy-900 mr-2" style={{ fontFamily }}>{name}</span>
                <span className="text-navy-400 text-[10px] uppercase tracking-wider">{role}</span>
                <div className="flex gap-3 text-[9px] mt-0.5 text-primary font-bold">
                   <span>WWW.INSTITUTODMD.ORG.BR</span>
                   <span>+55 62 3333-4444</span>
                </div>
             </div>
          </div>
        );
      case 'minimal':
        return (
          <div className="space-y-3">
             <LogoAsset type="horizontal" primaryColor={primaryColor} size={120} />
             <div className="pl-1">
                <p className="font-bold text-navy-900 text-sm" style={{ fontFamily }}>{name}</p>
                <p className="text-[10px] text-navy-400 mb-2">{role}</p>
                <p className="text-[9px] text-primary font-bold tracking-widest uppercase italic">Impactando realidades através do amor.</p>
             </div>
          </div>
        );
      case 'classic':
      default:
        return (
          <div className="p-4 bg-white border border-navy-100">
             <div className="flex gap-6">
                <div className="flex-shrink-0">
                   <LogoAsset type={logoVariant} primaryColor={primaryColor} secondaryColor={secondaryColor} size={110} />
                </div>
                <div className="flex flex-col gap-3">
                   <div>
                      <h4 className="text-md font-bold text-navy-900" style={{ fontFamily }}>{name}</h4>
                      <p className="text-xs text-navy-400">{role}</p>
                   </div>
                   <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[10px] text-navy-600">
                        <Mail style={IconStyle} /> {name.toLowerCase().replace(/\s+/g, '.')}@institutodmd.org
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-navy-600">
                        <MapPin style={IconStyle} /> Rua JK, Residencial JK, Goiânia - GO
                      </div>
                   </div>
                </div>
             </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-transparent">
        <div className="w-full max-w-md animate-in fade-in zoom-in-95 duration-500">
          {renderLayout()}
        </div>
    </div>
  );
}
