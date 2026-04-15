import { LogoVariant } from '@/contexts/BrandContext';

export type AssetLogoVariant = 'horizontal' | 'vertical' | 'symbol' | 'wordmark' | 'circle';
export type CardLogoVariant  = 'horizontal' | 'vertical' | 'symbol' | 'circle';

/** Maps the full LogoVariant set to the subset accepted by most asset components. */
export function toAssetVariant(variant: LogoVariant): AssetLogoVariant {
  const map: Record<LogoVariant, AssetLogoVariant> = {
    primary:   'horizontal',
    horizontal:'horizontal',
    vertical:  'vertical',
    symbol:    'symbol',
    wordmark:  'wordmark',
    circle:    'circle',
    mono:      'symbol',
    watermark: 'horizontal',
  };
  return map[variant];
}

/** Maps to the subset accepted by BusinessCardAsset (no 'wordmark'). */
export function toCardVariant(variant: LogoVariant): CardLogoVariant {
  const v = toAssetVariant(variant);
  return v === 'wordmark' ? 'horizontal' : v;
}
