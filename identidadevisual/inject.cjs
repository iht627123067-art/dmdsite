const fs = require('fs');

const cssToInject = `
/* ================================================================
   INNOVATIONS & ENHANCEMENTS CSS (Injetado)
   ================================================================ */

/* 1. VARIÁVEIS DE TEMA DINÂMICAS E TRANSIÇÕES GERAIS */
:root {
  transition: background-color 0.4s ease, color 0.4s ease;
}
body {
  transition: background-color 0.4s ease, color 0.4s ease;
}

[data-theme="dark"] {
  --navy: #1E1E2E;
  --accent: #2A1A3E;
  --md-navy: #E0E0E0;
  --md-purple: #C2A0E4;
  --light: #181825;
  background-color: var(--navy);
  color: #cdd6f4;
}
[data-theme="dark"] .site-nav {
  background: rgba(30, 30, 46, 0.85);
  border-bottom-color: rgba(255,255,255,0.1);
  color: #cdd6f4;
}
[data-theme="dark"] .nav-logo-text { color: #cdd6f4; border-left-color: rgba(255,255,255,0.3); }
[data-theme="dark"] .nav-links a { color: #a6adc8; }
[data-theme="dark"] .nav-links a:hover { color: #f38ba8; }
[data-theme="dark"] .header-line { background: rgba(255,255,255,0.1); }
[data-theme="dark"] .hero h1 { color: #fff; }
[data-theme="dark"] .section-label { color: var(--amber); }   
[data-theme="dark"] .problem-banner { background: #2A1A24; border-color: rgba(255,255,255,0.1); }
[data-theme="dark"] .sig-option-card { background: #313244; border-color: rgba(255,255,255,0.05); } 
[data-theme="dark"] .sig-option-card:hover { border-color: var(--md-purple); }
[data-theme="dark"] .rules-col--do { background: rgba(39,174,96,0.1); border-color: rgba(39,174,96,0.2); }
[data-theme="dark"] .rules-col--dont { background: rgba(231,76,60,0.1); border-color: rgba(231,76,60,0.2); }
[data-theme="dark"] .mod4-canecas { background: #11111b; border-color: #313244; }
[data-theme="dark"] .choice-item { background: #1e1e2e; border: 1px solid rgba(255,255,255,0.05); }
[data-theme="dark"] .choice-item.is-selected { background: #313244; border-color: var(--amber); box-shadow: 0 0 0 2px var(--amber); }
[data-theme="dark"] .choice-label { color: #f5f5f5; }
[data-theme="dark"] h2 { color: #f5f5f5; }
[data-theme="dark"] .mission-text h2 { color: #f5f5f5; }
[data-theme="dark"] .quote-break blockquote { color: #f5f5f5; }

/* 2. CLASSES DE AUXÍLIO PARA SVGs SUBSTITUÍDOS */
.generic-svg-inline {
  width: 100%;
  height: auto;
  max-width: 80px;
}
.mock-phone-logo {
  max-width: 60px !important;
  margin-bottom: 20px;
}
.mug-logo {
  max-width: 55%;
  height: auto;
  z-index: 2;
  position: relative;
  transition: transform 0.3s ease;
}

/* 3. SCROLL REVEAL MICRO-ANIMATIONS */
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

/* 4. TILT EFFECT 3D PERSPECTIVE */
.app-card, .alt-card, .sig-option-card {
  transition: transform 0.1s ease, box-shadow 0.1s ease;
  transform-style: preserve-3d;
  will-change: transform;
}
.app-visual, .alt-mockup {
  transform: translateZ(30px);
  transition: transform 0.3s ease-out;
}
.app-card:hover .app-visual, .alt-card:hover .alt-mockup {
  transform: translateZ(50px);
}

/* 5. THEME SWITCHER PANEL (GLASSMORPHISM) */
.theme-switcher-panel {
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 12px 16px;
  border-radius: 40px;
  display: flex;
  gap: 12px;
  z-index: 9999;
  box-shadow: 0 10px 40px rgba(0,0,0,0.15);
  align-items: center;
}
.theme-switcher-panel span {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--navy);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
[data-theme="dark"] .theme-switcher-panel span { color: #fff; }

.theme-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.theme-btn:hover {
  transform: scale(1.15);
}
.theme-btn.active {
  border-color: #fff;
  box-shadow: 0 0 0 2px var(--md-purple);
  transform: scale(1.1);
}
.theme-btn.light-mode { background-color: #ffffff; border: 1px solid #ddd; }
.theme-btn.dark-mode { background-color: #12121e; border: 1px solid #555;}
`;

const jsToInject = `
<!-- ================================================================
   INNOVATIONS & ENHANCEMENTS SCRIPTS
   ================================================================ -->
<div class="theme-switcher-panel" aria-label="Seletor de Temas">
  <span>Theme</span>
  <button class="theme-btn light-mode active" aria-label="Tema Claro" data-set-theme="light"></button>
  <button class="theme-btn dark-mode" aria-label="Tema Escuro" data-set-theme="dark"></button>
</div>

<script>
document.addEventListener("DOMContentLoaded", () => {
  // 1. SCROLL REVEAL ANIMATIONS
  const elementsToReveal = document.querySelectorAll('.app-card, .alt-card, .sig-option-card, .mission-text, .horiz-sig-section, .choice-item, .hero-content, .hero-visual');
  elementsToReveal.forEach(el => el.classList.add('reveal-on-scroll'));

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach(el => revealObserver.observe(el));

  // 2. 3D DOM TILT EFFECT ON CARDS
  const tiltCards = document.querySelectorAll('.app-card, .alt-card, .sig-option-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;
      
      card.style.transform = \`perspective(1000px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg) scale3d(1.02, 1.02, 1.02)\`;
      card.style.boxShadow = \`\${-rotateY*2}px \${rotateX*2}px 25px rgba(0,0,0,0.15)\`;
      
      // Rotate the inner mockup in opposing direction marginally for depth
      const visual = card.querySelector('.app-visual, .alt-mockup');
      if(visual) {
         visual.style.transform = \`translateZ(40px)\`;
      }
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      card.style.boxShadow = 'none';
      if(card.classList.contains('sig-option-card')){
        card.style.boxShadow = '0 8px 30px rgba(0,0,0,0.05)';
      }
      const visual = card.querySelector('.app-visual, .alt-mockup');
      if(visual) {
         visual.style.transform = \`translateZ(30px)\`;
      }
    });
  });

  // 3. THEME SWITCHER
  const themeBtns = document.querySelectorAll('.theme-btn');
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.getAttribute('data-set-theme');
      
      themeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      if(theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    });
  });

  // 4. MUGS SELECTION INTERACTIVITY (Enhanced Experience)
  const mugItems = document.querySelectorAll('.choice-item');
  mugItems.forEach(item => {
    item.addEventListener('click', () => {
      mugItems.forEach(m => m.classList.remove('is-selected'));
      item.classList.add('is-selected');
      
      const mockup = item.querySelector('.mug-mockup');
      if(mockup){
        mockup.style.transition = 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)';
        mockup.style.transform = 'scale(0.9)';
        setTimeout(() => {
          mockup.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
          mockup.style.transform = 'scale(1.08)';
          setTimeout(() => mockup.style.transform = 'scale(1)', 200);
        }, 150);
      }
    });
  });
});
</script>
`;

let html = fs.readFileSync('portfolio_dmd.html', 'utf-8');
html = html.replace('</head>', `\n<style>${cssToInject}</style>\n</head>`);
html = html.replace('</body>', `\n${jsToInject}\n</body>`);

fs.writeFileSync('portfolio_dmd.html', html);
console.log("Injection completed successfully!");
