const fs = require('fs');
const path = require('path');

// 1. Update index.css
let css = fs.readFileSync('client/src/index.css', 'utf-8');
const cssAppends = `
/* ================================================================
   INNOVATIONS & ENHANCEMENTS CSS
   ================================================================ */
.generic-svg-inline {
  width: 100%;
  height: auto;
  max-width: 80px;
}

[data-theme="dark"] .generic-svg-inline,
.dark .generic-svg-inline {
  filter: drop-shadow(0px 2px 4px rgba(255,255,255,0.1));
}

/* SCROLL REVEAL MICRO-ANIMATIONS */
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  will-change: opacity, transform;
}
.reveal-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* TILT EFFECT 3D PERSPECTIVE */
.hover-tilt {
  transition: transform 0.1s ease, box-shadow 0.1s ease;
  transform-style: preserve-3d;
  will-change: transform;
}
`;
if (!css.includes('INNOVATIONS & ENHANCEMENTS CSS')) {
  fs.writeFileSync('client/src/index.css', css + '\n' + cssAppends);
}

// 2. Process TSX files
function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf-8');
            
            // Img to SVG replacing logic
            content = content.replace(/<img[^>]*src="?\/logo-dmd-new\.svg"?[^>]*className="([^"]+)"[^>]*\/>/g, `<svg className="$1" viewBox="200 200 635 570" aria-label="De Mãos Dadas"><use href="#icon-dmd-logo"/></svg>`);
            content = content.replace(/<img[^>]*src="?\/logo-dmd-new\.svg"?[^>]*\/>/g, (match) => {
               if (match.includes("className=")) return match;
               return `<svg viewBox="200 200 635 570" aria-label="De Mãos Dadas"><use href="#icon-dmd-logo"/></svg>`;
            });

            // Card classes
            content = content.replace(/<Card className="([^"]+)"/g, (match, p1) => {
                if (p1.includes('reveal-on-scroll')) return match;
                return `<Card className="${p1} reveal-on-scroll hover-tilt"`;
            });

            fs.writeFileSync(fullPath, content);
        }
    }
}

processDirectory('client/src/pages');
processDirectory('client/src/components');

// 3. Fix App.tsx Wouter router path
let appTsx = fs.readFileSync('client/src/App.tsx', 'utf-8');
appTsx = appTsx.replace(/<Route path=\{"\\\\"\}/, '<Route path="/"');
// Insert global intersection observer + hover effect
const useEff = `
  import { useEffect } from 'react';
`;
if (!appTsx.includes('import { useEffect } from')) {
    appTsx = useEff + appTsx;
}
const effectLogic = `
  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const observerElems = document.querySelectorAll('.reveal-on-scroll');
    observerElems.forEach(el => revealObserver.observe(el));

    // Tilt Effect
    const tiltCards = document.querySelectorAll('.hover-tilt');
    tiltCards.forEach(card => {
      const moveHandler = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        card.style.transform = \`perspective(1000px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg) scale3d(1.02, 1.02, 1.02)\`;
        card.style.boxShadow = \`\${-rotateY*2}px \${rotateX*2}px 25px rgba(0,0,0,0.15)\`;
      };
      const leaveHandler = () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        card.style.boxShadow = 'none';
      };
      // remove old listeners just in case
      card.removeEventListener('mousemove', moveHandler);
      card.removeEventListener('mouseleave', leaveHandler);
      card.addEventListener('mousemove', moveHandler);
      card.addEventListener('mouseleave', leaveHandler);
    });

    return () => {
      revealObserver.disconnect();
    };
  }, []); // Run once on mount (or preferably on location change, but Wouter doesn't have a simple global hook listener unless we use useLocation)
`;
appTsx = appTsx.replace(/<ThemeProvider/, `${effectLogic}\n      <ThemeProvider`);

// Wait, the observer only runs ONCE on App load. We should intercept route change.
const wouterHook = `
  import { useLocation } from "wouter";
`;
if(!appTsx.includes('import { useLocation } from')) {
    appTsx = wouterHook + appTsx;
}
appTsx = appTsx.replace(/\[\]\); \/\/ Run once on mount/, `[location]);`);
appTsx = appTsx.replace(/useEffect\(\(\) => \{/, `const [location] = useLocation();\n  useEffect(() => {`);

fs.writeFileSync('client/src/App.tsx', appTsx);

console.log("Site fixes applied successfully!");
