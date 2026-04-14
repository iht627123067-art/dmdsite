import React from 'react';
import { Card } from '@/components/ui/card';
import type { LogoVariant } from '@/contexts/BrandContext';

export type { LogoVariant };

interface LogoVariantSelectorProps {
  selected: LogoVariant;
  onSelect: (variant: LogoVariant) => void;
}

const variants: { id: LogoVariant; label: string; description: string }[] = [
  { id: 'primary',   label: 'Colorida (Primária)', description: 'Versão oficial com todas as cores.' },
  { id: 'mono',      label: 'Monocromática',        description: 'Uso em fundos complexos ou impressões simples.' },
  { id: 'watermark', label: 'Marca d\'água',        description: 'Uso sutil como elemento de fundo.' },
];

export function LogoVariantSelector({ selected, onSelect }: LogoVariantSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {variants.map((v) => (
        <Card
          key={v.id}
          className={`p-4 cursor-pointer transition-all border-2 ${
            selected === v.id
              ? 'border-primary bg-primary/5 shadow-sm'
              : 'border-navy-50 hover:border-navy-100 bg-white'
          }`}
          onClick={() => onSelect(v.id)}
        >
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-foreground uppercase tracking-wider">{v.label}</span>
            <span className="text-[10px] text-muted-foreground leading-tight">{v.description}</span>
          </div>
        </Card>
      ))}
    </div>
  );
}
