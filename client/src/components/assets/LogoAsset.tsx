import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { LOGO_SRC } from '@/components/brand/BrandLogo';

export interface LogoAssetProps {
  type?: 'horizontal' | 'vertical' | 'symbol' | 'wordmark' | 'circle';
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  fontFamily?: string;
  fontWeight?: string | number;
  brandName?: string;
  showTagline?: boolean;
  size?: number;
  className?: string;
  contrastMode?: boolean;
  isMonochrome?: boolean;
}

/**
 * LightLogoImg: Renders the official logo on white/light backgrounds.
 * Uses logofundobranco.svg — contains the full logo lockup with white background.
 */
const LightLogoImg = React.memo(({
  size,
  className
}: {
  size?: number;
  className?: string;
}) => (
  <img
    src={LOGO_SRC['on-light']}
    alt="Instituto De Mãos Dadas Logo (Fundo Claro)"
    className={className}
    style={{ width: size, height: 'auto' }}
  />
));
LightLogoImg.displayName = 'LightLogoImg';

/**
 * DarkLogoImg: Renders the official logo on colored/dark backgrounds.
 * Uses logo_fundotransparente.svg — contains the full logo lockup with white text/transparent bg.
 */
const DarkLogoImg = React.memo(({
  size,
  className
}: {
  size?: number;
  className?: string;
}) => (
  <img
    src={LOGO_SRC['on-dark']}
    alt="Instituto De Mãos Dadas Logo (Fundo Escuro)"
    className={className}
    style={{ width: size, height: 'auto' }}
  />
));
DarkLogoImg.displayName = 'DarkLogoImg';

const SvgIcon = React.memo(({ 
  color1, 
  color2, 
  size, 
  className, 
  contrastMode = false,
  isMonochrome = false 
}: { 
  color1: string; 
  color2: string; 
  size?: number; 
  className?: string;
  contrastMode?: boolean;
  isMonochrome?: boolean;
}) => {
  const uniqueId = useMemo(() => Math.random().toString(36).substr(2, 9), []);
  
  // Base colors for gradients
  const isWhite = color1.toLowerCase() === '#ffffff' || color1.toLowerCase() === 'white';
  
  const navyStart = isMonochrome ? color1 : color1;
  const navyEnd = isMonochrome ? color1 : (isWhite ? 'rgba(255,255,255,0.8)' : color1 + 'DD'); 
  
  const purpleStart = isMonochrome ? color1 : color2;
  const purpleEnd = isMonochrome ? color1 : (isWhite ? 'rgba(255,255,255,0.8)' : color2 + 'DD');
  
  const darkNavyStart = isMonochrome ? color1 : color1;
  const darkNavyEnd = isMonochrome ? color1 : (isWhite ? 'rgba(255,255,255,0.6)' : color1 + 'BB');
  
  // SOLUÇÃO: PNG PARA CLARO, SVG PARA ESCURO
  const textColor = '#FFFFFF';

  return (
    <svg
      viewBox="200 215 635 555"
      className={className}
      {...(size ? { width: size, height: size } : {})}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Logo Instituto De Mãos Dadas"
    >
      <defs>
        <linearGradient id={`grad0-${uniqueId}`} gradientUnits="userSpaceOnUse" x1="432.37" y1="729.21" x2="520.34" y2="519.43">
          <stop offset="0" stopColor={navyStart} />
          <stop offset="1" stopColor={navyEnd} />
        </linearGradient>
        <linearGradient id={`grad1-${uniqueId}`} gradientUnits="userSpaceOnUse" x1="630.62" y1="269.63" x2="650.03" y2="519.19">
          <stop offset="0" stopColor={purpleStart} />
          <stop offset="1" stopColor={purpleEnd} />
        </linearGradient>
        <linearGradient id={`grad2-${uniqueId}`} gradientUnits="userSpaceOnUse" x1="387.68" y1="794.21" x2="430.90" y2="686.20">
          <stop offset="0" stopColor={darkNavyStart} />
          <stop offset="1" stopColor={darkNavyEnd} />
        </linearGradient>
      </defs>
      
      <g transform="scale(0.948148 0.948148)">
        <path 
          fill={`url(#grad0-${uniqueId})`} 
          stroke="none"
          strokeLinejoin="round"
          d="M576.371 509.826C579.188 515.243 595.848 547.697 596.73 552.028C614.381 586.805 633.079 654.283 624.528 692.552C619.312 716.702 604.723 737.793 583.965 751.192C557.428 768.004 511.717 771.414 483.461 750.007C482.255 749.093 482.77 735.89 482.515 732.989C479.764 701.802 456.561 676.705 426.689 668.87C407.444 664.008 385.867 668.456 368.747 679.129C337.542 668.688 314.441 624.038 318 592.686C318.967 584.161 320.227 571.676 324.162 563.949C334.219 567.469 343.418 571.652 354.095 573.339C355.343 573.536 364.336 574.718 364.269 575.735C363.969 580.312 362.295 584.988 361.571 589.648C359.911 599.994 361.581 610.6 366.34 619.936C385.632 657.632 436.393 650.461 469.11 638.176C469.419 638.06 470.338 638.399 470.674 638.507C471.7 640.981 473.225 651.853 473.858 655.253C475.739 665.505 478.997 675.457 483.543 684.837C493.295 704.743 506.752 719.779 529.687 722.238C551.679 724.596 573.283 710.74 580.567 689.987C584.722 678.148 583.621 666.036 582.348 653.827C577.887 614.225 562.376 577.027 544.273 541.721C542.141 537.856 539.962 534.011 538.064 530.026C547.945 523.816 566.077 514.851 576.371 509.826Z" />
        <path 
          fill={isMonochrome ? color1 : (isWhite ? 'white' : color1 + 'AA')} 
          stroke="none"
          d="M576.371 509.826C579.188 515.243 595.848 547.697 596.73 552.028C596.838 553.387 596.911 554.264 596.896 555.64C596.479 556.174 595.977 557.337 594.721 556.64C592.865 555.61 589.101 552.247 587.404 551.362C579.26 547.114 567.618 537.063 558.584 536.956C557.652 536.945 550.648 539.378 549.361 539.891C548.832 540.595 548.376 541.203 547.993 541.714C546.021 542.395 546.601 542.172 544.273 541.721C542.141 537.856 539.962 534.011 538.064 530.026C547.945 523.816 566.077 514.851 576.371 509.826Z" />
        <path 
          fill={`url(#grad1-${uniqueId})`} 
          stroke="none"
          strokeLinejoin="round"
          d="M538.064 530.026C536.143 526.116 534.002 522.333 531.988 518.472C507.779 472.05 474.754 389.393 491.438 337.364C499.193 313.183 516.063 293.976 538.672 282.607C559.117 272.326 585.319 269.995 607.026 277.409C611.529 278.948 628.081 285.317 630.144 288.943C632.07 292.33 630.645 302.854 631.277 307.366C632.429 315.58 634.943 324.068 638.628 331.505C647.258 348.922 663.465 361.898 681.792 367.96C705.655 375.853 724.315 369.975 745.696 359.084C786.326 377.758 807.981 433.699 789.617 474.57C772.486 468.055 766.758 465.859 748.296 462.87C753.437 448.122 754.572 440.039 750.181 424.61C746.735 412.501 737.28 402.404 726.166 396.688C708.711 387.712 680.544 389.267 662.13 394.197C655.211 396.05 649.088 399.156 642.258 401.297C640.8 383.366 637.874 368.062 629.303 351.874C620.885 336.055 612.639 323.887 594.974 318.246C567.453 309.459 539.77 324.162 531.683 351.883C528.75 361.938 529.518 369.975 530.516 380.345C534.921 426.097 554.429 469.963 576.371 509.826C566.077 514.851 547.945 523.816 538.064 530.026Z" />
        <path 
          fill={`url(#grad2-${uniqueId})`} 
          stroke="none"
          d="M404.653 681.48C437.231 678.818 465.797 703.073 468.452 735.652C471.107 768.23 446.846 796.791 414.267 799.439C381.698 802.086 353.148 777.834 350.493 745.265C347.839 712.697 372.085 684.141 404.653 681.48Z" />
        
        {/* Heads */}
        <path 
          fill={isMonochrome ? color1 : (isWhite ? '#FFFFFF' : color2)} 
          stroke="none"
          d="M699.953 239.105C732.18 236.752 760.28 260.816 762.911 293.021C765.543 325.227 741.723 353.533 709.541 356.443C676.964 359.388 648.233 335.211 645.569 302.61C642.905 270.008 667.33 241.487 699.953 239.105Z" 
        />
        
        {/* Internal Text */}
        <g 
          fill={textColor}
          stroke="none"
          strokeLinejoin="round"
        >
          <path d="M353.993 486.13C359.792 484.905 366.029 485.153 371.951 485.252C372.335 500.623 371.402 520.442 372.219 535.007C374.718 530.22 378.036 520.503 379.934 515.285L390.743 485.722C394.763 485.444 401.566 484.601 405.051 485.975C407.198 488.344 423 534.531 425.542 541.658C411.694 541.411 412.307 543.063 408.537 529.105C402.045 528.794 394.047 529.193 387.28 529.112C382.144 546.774 376.953 541.626 359.857 541.52C359.813 525.716 360.071 510.203 360.216 494.402C356.46 507.227 351.863 519.793 347.573 532.446C346.654 535.158 345.784 537.896 344.277 540.351C341.561 542.33 337.367 541.618 333.948 541.438C331.601 535.853 329.999 529.609 327.983 523.851C325.32 516.246 322.359 509.168 320.368 501.324C319.813 499.482 319.862 498.282 318.635 497.452C317.604 499.424 317.94 506.225 318.472 508.415C318.238 518.771 317.943 531.915 318.5 542.092C315.569 541.632 311.047 541.511 307.973 541.344C307.628 530.353 307.493 519.357 307.569 508.361C307.559 500.826 307.336 493.001 308.004 485.517C313.775 485.33 319.548 485.229 325.322 485.215L325.408 485.395C329.806 494.456 337.466 518.384 339.83 528.404C343.631 515.314 349.51 499.301 353.993 486.13ZM390.161 519.874L398.759 519.766L405.053 519.901C403.615 515.05 399.321 498.2 397.81 495.006C396.112 499.961 391.041 515.205 390.161 519.874Z"/>
          <path d="M495.475 484.274C498.454 483.868 505.621 484.044 507.938 486.325C510.659 489.002 509.887 493.327 509.749 496.826C503.695 494.715 487.983 490.29 486.2 498.746C484.556 506.55 505.972 510.381 510.243 518.834C514.948 528.146 512.307 534.465 503.668 539.813C495.996 544.564 482.293 542.191 474.141 539.95C473.888 536.174 473.925 532.13 473.891 528.324C480.629 533.58 486.758 533.752 494.715 533.005C508.77 523.399 485.737 517.476 479.397 513.063L478.779 512.625L475.759 510.199C475.783 511.793 475.773 513.387 475.728 514.981C475.113 532.371 463.179 543.177 445.69 542.534C419.034 541.553 412.549 505.796 430.501 490.384C439.411 482.734 458.127 482.188 466.717 490.655C469.319 493.219 471.144 495.663 473.379 498.692C477.759 486.237 483.344 485.791 495.475 484.274ZM450.283 532.644C460.126 530.166 464.122 521.131 463.055 511.711C461.789 500.518 457.194 494.798 445.952 494.771C426.52 499.348 429.255 534.163 450.283 532.644Z"/>
          <path d="M845.46 484.802C858.273 484.004 862.051 484.716 861.352 497.737C857.019 496 839.142 491.892 837.917 498.734C837.385 509.293 859.972 510.978 862.847 521.538C869.132 547.868 841.965 545.521 825.209 543.296C812.919 541.664 811.889 549.201 808.226 530.55L786.72 530.642C785.437 534.985 784.176 539.335 782.937 543.691C778.152 544.175 773.631 543.956 768.846 543.715C770.524 538.246 772.751 532.572 774.814 527.214C777.77 518.377 781.15 509.724 784.378 500.987C786.332 495.701 787.95 490.298 790.059 485.091C794.062 485.231 800.583 484.673 804.259 486.227C806.892 487.339 821.767 531.54 824.09 538.068C824.457 535.365 824.765 532.653 825.015 529.936C832.241 534.642 849.601 539.302 850.836 528.222C851.638 521.03 824.364 517.454 824.203 503.905C824.022 488.725 833.755 486.259 845.46 484.802ZM789.429 521.046L797.261 521.084L804.83 521.042C803.811 517.759 797.901 496.888 797.072 496.075C794.775 503.79 792.11 513.675 789.429 521.046Z"/>
          <path d="M729.965 485.39C754.375 483.013 775.702 491.484 770.958 521.152C769.53 530.082 763.507 535.446 756.31 540.138C745.955 545.257 730.77 544.217 719.162 543.765C720.087 538.196 719.616 533.039 719.74 527.387C720.044 513.55 719.525 499.646 719.988 485.813L729.965 485.39ZM732.941 533.551C740.646 533.654 746.336 534.172 752.35 528.774C755.189 525.218 756.871 523.558 757.239 518.774C758.75 499.1 749.971 495.808 732.686 495.817C732.452 504.287 732.024 525.661 732.941 533.551Z"/>
          <path d="M618.685 485.392C621.204 485.018 628.599 485.276 631.395 485.368C640.772 485.639 651.487 487.47 657.931 494.996C664.446 502.604 665.764 514.937 662.587 524.247C660.538 530.248 658.303 533.382 653.549 537.253C643.795 545.413 625.101 544.063 612.247 543.796C612.144 535.894 611.358 490.951 613.056 486.506C614.763 485.372 616.608 485.509 618.685 485.392ZM624.936 533.621C634.45 533.632 637.555 534.215 645.299 528.461C648.712 524.211 650.433 519.934 650.354 514.448C650.1 496.827 638.598 495.815 624.912 495.729L624.936 533.621Z"/>
          <path d="M261.016 501.006L284.371 501.004L284.6 507.879C280.107 507.651 274.43 507.839 269.851 507.865L270.008 517.782C274.331 517.68 278.826 517.864 283.321 517.761C283.63 520.175 283.624 522.32 283.673 524.743C279.068 524.668 274.462 524.697 269.858 524.828L269.973 532.749L269.908 534.161C274.045 536.958 284.011 531.995 285.568 537.561C285.27 538.697 285.118 539.763 283.945 540.421C279.787 542.757 265.625 541.777 260.981 541.6L261.022 524.915C252.919 544.135 242.558 542.233 224.186 541.707C223.977 535.351 223.578 505.849 224.975 501.109C242.048 500.744 253.999 498.07 261.003 516.467C261.133 511.454 261.024 506.051 261.016 501.006ZM233.174 534.804C238.628 534.861 241.276 535.332 246.193 532.88C256.24 522.971 252.123 507.266 235.806 508.063L234.099 508.513C232.402 512.654 233.312 529.234 233.174 534.804Z"/>
          <path d="M684.756 485.842C688.741 485.621 693.893 484.877 697.434 486.549C700.444 490.011 716.174 536.923 718.522 543.866C703.971 543.948 704.328 544.707 700.484 530.755L695.529 530.69C690.03 530.659 684.531 530.655 679.031 530.679C678.509 533.896 676.893 541.68 673.864 543.083C671.653 544.107 664.556 543.246 662.021 543.246C661.783 541.207 663.954 535.837 664.784 533.717C670.692 518.634 675.273 502.954 682.044 488.23C682.529 487.177 683.79 486.409 684.756 485.842ZM682.086 520.92L688.579 521.045L697.104 521.029C695.536 515.872 694.016 510.814 692.565 505.624C691.811 502.926 690.785 497.81 689.857 495.509C688.265 499.905 682.959 516.983 682.086 520.92Z"/>
          <path d="M408.176 467.426C414.108 467.886 412.1 475.516 407.963 477.073C402.296 479.205 396.72 476.411 391.459 474.415C390.265 475.721 388.877 477.796 387.817 479.276C385.513 478.855 385.853 479.287 384.536 477.906C382.954 470.224 390.785 466.17 397.071 469.665C402.816 472.859 404.61 472.992 408.176 467.426Z"/>
        </g>
        {!isMonochrome && (
          <path fill="#693297" fillOpacity="0.04" d="M318.472 508.415C317.94 506.225 317.604 499.424 318.635 497.452C319.862 498.282 319.813 499.482 320.368 501.324L319.268 502.333L319.056 502.087C318.11 505.128 318.928 505.547 318.472 508.415Z" />
        )}
      </g>
    </svg>
  );
});
SvgIcon.displayName = 'SvgIcon';

export const LogoAsset: React.FC<LogoAssetProps> = ({
  type = 'horizontal',
  primaryColor = '#153065',
  secondaryColor = '#7F4CA9',
  fontFamily = 'Outfit',
  fontWeight = 700,
  brandName = 'De Mãos Dadas',
  showTagline = false,
  size = 200,
  className = '',
  contrastMode = false,
  isMonochrome = false
}) => {
  const isWhite = primaryColor.toLowerCase() === '#ffffff' || primaryColor.toLowerCase() === 'white';
  const needsOutline = !contrastMode && isWhite;
  
  // REGRA DE USO: logofundobranco.svg para fundos claros/brancos; logo_fundotransparente.svg para fundos escuros/monocromáticos.
  const useLightSvg = !contrastMode && !isMonochrome && !isWhite;
  const textShadow = 'none';

  const renderSplitName = (size: number, fontWeight: string | number) => {
    // Para a versão SVG, aplicamos as cores institucionais no texto externo
    const parts = brandName.split(' ');
    // Se tiver 'Instituto', pulamos
    const startIndex = parts[0].toLowerCase() === 'instituto' ? 1 : 0;
    
    // De Mãos: parts[startIndex] and parts[startIndex+1]
    // Dadas: remaining
    
    return (
      <span style={{ color: primaryColor }}>{brandName}</span>
    );
  };

  const renderContent = () => {
    switch (type) {
      case 'symbol':
        return (
          <div className={`flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
            <SvgIcon 
              color1={primaryColor} 
              color2={secondaryColor} 
              size={size} 
              contrastMode={contrastMode}
              isMonochrome={isMonochrome}
            />
          </div>
        );

      case 'wordmark':
        if (useLightSvg) {
           return (
            <div className={`flex items-center justify-center h-full overflow-hidden ${className}`} style={{ height: size, maxWidth: '100%' }}>
               <LightLogoImg size={size} />
            </div>
           );
        }
        return (
          <div className={`flex items-center justify-center h-full overflow-hidden ${className}`} style={{ height: size, maxWidth: '100%' }}>
             <DarkLogoImg size={size} />
          </div>
        );

      case 'vertical':
        return (
          <div className={`flex flex-col items-center justify-center gap-4 ${className}`} style={{ width: size }}>
            <SvgIcon 
              color1={primaryColor} 
              color2={secondaryColor} 
              size={Math.round(size * 0.5)} 
              contrastMode={contrastMode}
              isMonochrome={isMonochrome}
            />
            <div className="text-center">
              <h1
                style={{ 
                  fontFamily, 
                  fontSize: size * 0.12, 
                  fontWeight, 
                  lineHeight: 1.1, 
                  letterSpacing: '-0.02em'
                }}
                className="tracking-tight uppercase"
              >
                {renderSplitName(size, fontWeight)}
              </h1>
              {showTagline && (
                <p
                  style={{ color: secondaryColor, textShadow }}
                  className="text-[10px] mt-2 font-bold tracking-[0.3em] uppercase opacity-60"
                >
                  Goiânia • Brasil
                </p>
              )}
            </div>
          </div>
        );

      case 'circle':
        return (
          <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
            <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
              <defs>
                <path id="textPath" d="M 100,100 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0" />
              </defs>
              <motion.circle
                cx="100" cy="100" r="95"
                fill="white"
                stroke={secondaryColor}
                strokeWidth="2"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="shadow-sm"
              />
              <circle cx="100" cy="100" r="75" fill="none" stroke={primaryColor} strokeWidth="0.5" strokeDasharray="4 4" className="opacity-20" />

              <text 
                fill={primaryColor} 
                style={{ 
                  fontFamily, 
                  fontWeight: 800, 
                  fontSize: '12px', 
                  letterSpacing: '3px', 
                  textTransform: 'uppercase',
                  ...(needsOutline ? { stroke: 'rgba(21, 48, 101, 0.2)', strokeWidth: '0.2' } : {})
                }}
              >
                <textPath href="#textPath" startOffset="50%" textAnchor="middle">
                  {brandName} • INSTITUTO • GOIÂNIA
                </textPath>
              </text>

              <foreignObject x="10" y="10" width="180" height="180">
                <div className="w-full h-full flex items-center justify-center">
                   <SvgIcon 
                    color1={primaryColor} 
                    color2={secondaryColor} 
                    size={Math.round(180 * 0.9)} 
                    contrastMode={contrastMode}
                    isMonochrome={isMonochrome}
                  />
                </div>
              </foreignObject>
            </svg>
          </div>
        );

      case 'horizontal':
      default:
        // Se for fundo claro, usamos o arquivo que já contém o ícone + texto institucional (fundo branco)
        if (useLightSvg) {
          return <LightLogoImg size={size} className={className} />;
        }

        // Se for fundo colorido/escuro, usamos o arquivo transparente
        return <DarkLogoImg size={size} className={className} />;
    }
  };

  return (
    <motion.div
      layout
      className="inline-block"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      {renderContent()}
    </motion.div>
  );
};

