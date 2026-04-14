import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2, XCircle, ShieldCheck, Palette, Type } from 'lucide-react';
import { useLocation } from 'wouter';

/**
 * Design Philosophy: Minimalismo Progressivo & Criterioso
 * Página de diretrizes completas da marca
 */

export default function Guidelines() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background transition-colors duration-700">
      {/* Header with Glassmorphism */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-navy-100/50">
        <div className="container py-4 md:py-6">
          <div className="flex items-center gap-6">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/')}
              className="hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all rounded-full px-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Sair do Estudo
            </Button>
            <div className="h-8 w-px bg-navy-100 hidden md:block" />
            <div className="flex items-center gap-3">
              <img src="/logofundobranco.svg" alt="De Mãos Dadas" className="h-10 w-auto" />
              <h1 className="text-xl font-bold text-foreground hidden sm:block">
                Diretrizes da Marca
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12 md:py-20">
        {/* Overview with Premium Styling */}
        <section className="mb-24 max-w-4xl animate-in fade-in slide-in-from-bottom-5 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-100 text-navy-900 text-[10px] font-bold uppercase tracking-widest mb-6 border border-navy-200">
            Manual de Identidade Visual v2.0
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground tracking-tight leading-[1.1]">
            A força da <span className="text-primary italic">união</span> <br /> codificada em design.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            A marca De Mãos Dadas representa transformação e esperança legítima. Estas diretrizes garantem que nossa voz seja sempre ouvida com clareza, profissionalismo e o impacto necessário para mobilizar comunidades.
          </p>
        </section>

        {/* Color Palette - Three Layer Representation */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 rounded-2xl bg-primary/10 text-primary">
              <Palette className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">Sistema Cromático</h2>
              <p className="text-sm text-muted-foreground">Baseado na técnica de Paleta de Cores de três camadas.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: 'Navy 900', hex: 'var(--navy-900)', role: 'Base & Confiança', desc: 'Cor pilar para textos e contextos institucionais.' },
              { name: 'Purple 500', hex: 'var(--purple-500)', role: 'Transformação', desc: 'Motor da marca. Usado para CTAs e destaques.' },
              { name: 'Amber 500', hex: 'var(--amber-500)', role: 'Energia & Alerta', desc: 'Acento de esperança e sinalização crítica.' },
              { name: 'Navy 100', hex: 'var(--navy-100)', role: 'Apoio & Respiro', desc: 'Fundos suaves e elementos de separação.' }
            ].map((color) => (
              <Card key={color.name} className="p-6 border-none shadow-premium hover:shadow-lg transition-all group">
                <div 
                  className="w-full h-40 rounded-2xl mb-6 shadow-inner group-hover:scale-[1.02] transition-transform duration-500"
                  style={{ backgroundColor: color.hex }}
                />
                <h4 className="font-bold text-lg mb-1 text-foreground">{color.name}</h4>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">{color.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{color.desc}</p>
              </Card>
            ))}
          </div>

          <Card className="p-10 bg-navy-900 text-white overflow-hidden relative group">
            <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/10 skew-x-12 translate-x-20" />
            <h4 className="font-bold text-xl mb-6 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-accent" />
              Hierarquia de Uso
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">01.</span>
                  <div>
                    <p className="font-bold text-sm">Contraste é Inegociável</p>
                    <p className="text-xs text-navy-200">Garanta sempre legibilidade WCAG AA (mínimo 4.5:1).</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">02.</span>
                  <div>
                    <p className="font-bold text-sm">Marca Escura sobre Claro</p>
                    <p className="text-xs text-navy-200">Use a versão colorida sobre fundos brancos ou Navy 50.</p>
                  </div>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">03.</span>
                  <div>
                    <p className="font-bold text-sm">Marca Branca sobre Escuro</p>
                    <p className="text-xs text-navy-200">Use a versão negativa sobre Navy 900 ou fotos saturadas.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">04.</span>
                  <div>
                    <p className="font-bold text-sm">O "Toque" de Âmbar</p>
                    <p className="text-xs text-navy-200">O Âmbar deve ser usado com parcimônia, como um ponto de luz.</p>
                  </div>
                </li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Typography Section */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 rounded-2xl bg-primary/10 text-primary">
              <Type className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">Tipografia Sistêmica & Fluida</h2>
              <p className="text-sm text-muted-foreground">Arquitetura do texto desenhada para legibilidade absoluta e adaptabilidade.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-none shadow-premium bg-white">
              <h4 className="font-bold text-xs text-primary uppercase tracking-[0.2em] mb-6">Métrica de Leitura (Microtipografia)</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex justify-between border-b border-navy-50 pb-2">
                  <span>Interlinha (Corpo)</span>
                  <span className="font-bold text-foreground">1.6x</span>
                </li>
                <li className="flex justify-between border-b border-navy-50 pb-2">
                  <span>Largura de Coluna</span>
                  <span className="font-bold text-foreground">55-75 caracteres</span>
                </li>
                <li className="flex justify-between border-b border-navy-50 pb-2">
                  <span>Escala Modular</span>
                  <span className="font-bold text-foreground">1.250 (Major Third)</span>
                </li>
                <li className="flex justify-between border-b border-navy-50 pb-2">
                  <span>Sistema</span>
                  <span className="font-bold text-foreground">Fluido (clamp)</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-none shadow-premium bg-navy-900 text-white">
              <h4 className="font-bold text-xs text-accent uppercase tracking-[0.2em] mb-6">Filosofia de Hierarquia</h4>
              <p className="text-xs text-navy-200 leading-relaxed italic">
                "A tipografia fala antes de ser lida." — Enric Jardí. <br /><br />
                Nossa hierarquia prioriza **Tamanho** e **Peso** para guiar o olhar do usuário, usando o espaço em branco (respiro) como ferrramenta de separação semântica.
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Títulos de Impacto (Display)',
                font: 'Space Grotesk',
                weight: 'Bold (700)',
                sample: 'A Favela no Topo',
                desc: 'Fluido: 40px → 72px. Tracking: -0.02em.'
              },
              {
                name: 'Interações & Tópicos',
                font: 'Space Grotesk',
                weight: 'Medium (500)',
                sample: 'Autonomia Produtiva',
                desc: 'Fluido: 24px → 32px. Texto de apoio a headers.'
              },
              {
                name: 'Leitura Contínua (UI)',
                font: 'Inter',
                weight: 'Regular (400)',
                sample: 'Transformação social é um compromisso diário.',
                desc: 'Fluido: 16px → 18px. Interlinha rigorosa de 1.6x.'
              }
            ].map((typo) => (
              <Card key={typo.name} className="p-8 border-none shadow-sm hover:shadow-premium transition-all">
                <h4 className="font-bold text-[10px] text-primary uppercase tracking-widest mb-6">
                  {typo.name}
                </h4>
                <p 
                  className="mb-6 text-foreground text-balance"
                  style={{ 
                    fontFamily: typo.font,
                    fontSize: typo.name.includes('Impacto') ? 'var(--text-display-lg)' : 
                              typo.name.includes('Interações') ? 'var(--text-heading-md)' : 'var(--text-body)'
                  }}
                >
                  {typo.sample}
                </p>
                <div className="pt-6 border-t border-navy-50">
                   <p className="text-[10px] text-muted-foreground font-bold">{typo.font} <span className="opacity-40 ml-2">/ {typo.weight}</span></p>
                   <p className="text-[10px] text-muted-foreground mt-2 italic">{typo.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Good and Bad Practices with Premium UI */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-foreground mb-12">Ética & Estética</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Card className="p-10 border-none shadow-premium bg-white relative overflow-hidden">
               <div className="absolute left-0 top-0 w-2 h-full bg-success" />
               <h4 className="font-bold text-xl mb-8 flex items-center gap-3 text-success">
                <CheckCircle2 className="w-6 h-6" />
                Deveres da Marca
              </h4>
              <ul className="space-y-6">
                {[
                  { t: 'Protagonismo Real', d: 'Sempre mostrar pessoas em posição de ação e liderança.' },
                  { t: 'Limpeza Visual', d: 'Respeitar as áreas de respiro e evitar poluição visual.' },
                  { t: 'Acessibilidade', d: 'Garantir que todos possam ler e entender a mensagem.' },
                  { t: 'Narrativa de Vitória', d: 'Focar na solução e no potencial, não na vitimização.' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-success font-bold text-lg leading-none">✓</span>
                    <div>
                      <p className="font-bold text-sm text-foreground">{item.t}</p>
                      <p className="text-xs text-muted-foreground">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-10 border-none shadow-premium bg-white relative overflow-hidden">
               <div className="absolute left-0 top-0 w-2 h-full bg-error" />
               <h4 className="font-bold text-xl mb-8 flex items-center gap-3 text-error">
                <XCircle className="w-6 h-6" />
                Proibições Críticas
              </h4>
              <ul className="space-y-6">
                {[
                  { t: 'Assistencialismo', d: 'Evitar imagens que reforcem a dependência ou caridade passiva.' },
                  { t: 'Distorção', d: 'Nunca esticar ou achatar o logo e seus elementos.' },
                  { t: 'Cores Alheias', d: 'Não usar tons que fujam da paleta institucional v2.0.' },
                  { t: 'Poluição Sombreado', d: 'Evitar drop shadows pesados ou efeitos que ocultem o logo.' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-error font-bold text-lg leading-none">✗</span>
                    <div>
                      <p className="font-bold text-sm text-foreground">{item.t}</p>
                      <p className="text-xs text-muted-foreground">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* Final Checklist Card */}
        <Card className="p-12 border-none shadow-2xl bg-foreground text-white rounded-[3rem] text-center max-w-4xl mx-auto">
          <ShieldCheck className="w-16 h-16 text-accent mx-auto mb-8" />
          <h2 className="text-3xl font-bold mb-4">Checklist de Conformidade</h2>
          <p className="text-navy-100/60 mb-10 font-light">Antes de publicar qualquer material, valide estes pontos cruciais:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
            {[
              'Contraste passa no teste WCAG AA?',
              'A área de respiro é maior que 15%?',
              'A tipografia segue a hierarquia correta?',
              'O tom de voz é encorajador e legítimo?',
              'As fotos comunicam protagonismo?'
            ].map((item, i) => (
              <label key={i} className="flex items-center gap-4 cursor-pointer group p-3 rounded-xl hover:bg-white/5 transition-all">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 rounded-lg border-navy-700 bg-navy-800 text-primary focus:ring-primary h-5 w-5"
                />
                <span className="text-sm font-light text-navy-100 group-hover:text-white transition-colors">{item}</span>
              </label>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 font-bold"
              onClick={() => navigate('/')}
            >
              Concluir Revisão
            </Button>
            <a href="/applications">
              <Button 
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full px-10 font-bold"
              >
                Ver Aplicações
              </Button>
            </a>
          </div>
        </Card>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-navy-100 py-12">
        <div className="container text-center text-muted-foreground text-[10px] items-center flex flex-col gap-4 opacity-50">
          <img src="/logofundobranco.svg" alt="De Mãos Dadas" className="h-6 w-auto grayscale" />
          <p>© 2026 Instituto De Mãos Dadas. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

