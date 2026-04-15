/**
 * BrandLogo — componente único para exibir a logo do Instituto De Mãos Dadas.
 *
 * Regra de uso:
 *   variant="on-light"  → logofundobranco.svg     (fundos brancos, claros, neutros)
 *   variant="on-dark"   → logo_fundotransparente.svg (fundos escuros, coloridos, fotos)
 *
 * Resolve automaticamente o BASE_URL do Vite (necessário para GitHub Pages /dmdsite/).
 */

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export const LOGO_SRC = {
  'on-light': `${BASE}/logofundobranco.svg`,
  'on-dark':  `${BASE}/logo_fundotransparente.svg`,
} as const;

export type LogoVariantDisplay = keyof typeof LOGO_SRC;

interface BrandLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** on-light = fundo branco/claro | on-dark = fundo escuro/colorido */
  variant?: LogoVariantDisplay;
}

export function BrandLogo({
  variant = 'on-light',
  alt = 'Instituto De Mãos Dadas',
  className,
  style,
  ...props
}: BrandLogoProps) {
  return (
    <img
      src={LOGO_SRC[variant]}
      alt={alt}
      className={className}
      style={style}
      {...props}
    />
  );
}
