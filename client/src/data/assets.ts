import { MugProps } from '@/components/assets/MugAsset';
import { BadgeProps } from '@/components/assets/BadgeAsset';
import { NotepadProps } from '@/components/assets/NotepadAsset';
import { PenProps } from '@/components/assets/PenAsset';
import { EmailSignatureProps } from '@/components/assets/EmailSignatureAsset';
import { WebBannerProps } from '@/components/assets/WebBannerAsset';
import { CertificateProps } from '@/components/assets/CertificateAsset';
import { ImpactReportProps } from '@/components/assets/ImpactReportAsset';
import { BrochureProps } from '@/components/assets/BrochureAsset';
import { SlideProps } from '@/components/assets/SlideAsset';
import { BusinessCardProps } from '@/components/assets/BusinessCardAsset';

export interface AssetModel {
  id: string;
  name: string;
  isSmart?: boolean;
  config?: any;
  category?: string;
  reasoning?: string;
  sizeRecommendation?: string;
  versionUsed?: string;
  src?: string;
}

export interface AssetCategory {
  id: string;
  title: string;
  description: string;
  type: string;
  models: AssetModel[];
}

export const assetCategories: AssetCategory[] = [
  {
    id: 'identidade-base',
    title: 'Identidade Core',
    description: 'Defina o coração visual do projeto antes das aplicações.',
    type: 'identity',
    models: [
      { id: 'cores', name: 'Psicologia Cromática' },
      { id: 'tipografia', name: 'Voz Tipográfica' },
      { id: 'logo', name: 'Formatos de Logo' },
      { id: 'nome', name: 'Arquitetura de Nome' },
      { id: 'tracado', name: 'Princípio Visual' }
    ]
  },
  {
    id: 'caneca',
    title: 'Caneca Social',
    description: 'Variações aprovadas explorando a paleta institucional e hierarquia visual do Instituto.',
    type: 'mug',
    models: [
      { id: 'mug-ring', name: '01 · Pilares de Impacto', config: { layout: 'dimensional-ring' } as MugProps },
      { id: 'mug-tech', name: '07 · Matter Tech', config: { layout: 'matter-tech' } as MugProps },
      { id: 'mug-grid', name: '08 · Pattern Grid', config: { layout: 'pattern-grid' } as MugProps },
      { id: 'mug-rim', name: '09 · Color Rim', config: { layout: 'color-rim' } as MugProps },
      { id: 'mug-contrast', name: '11 · Alça Âmbar · Impacto Social', config: { layout: 'contrast-handle' } as MugProps },
    ]
  },
  { 
    id: 'crachá', 
    title: 'Identificação', 
    description: 'Aplicações rigorosas em identificação funcional.',
    type: 'badge',
    models: [
      { id: 'smart-badge', name: '⭐ Crachá Estruturado (Dinâmico)', isSmart: true },
      { id: 'cracha-equipe', name: 'Equipe Interna', config: { headerBackground: '#7F4CA9', logoType: 'clara', eventText: 'Instituto De Mãos Dadas · Goiânia · 2026', borderColor: '#7F4CA9', nameColor: '#153065' } as BadgeProps },
      { id: 'cracha-parceiro', name: 'Parceiro / Imprensa', config: { headerBackground: '#153065', logoType: 'clara', eventText: 'Parceiro · Goiânia · 2026', borderColor: '#153065', nameColor: '#153065' } as BadgeProps }
    ]
  },
  {
    id: 'bloco-notas',
    title: 'Bloco de Notas',
    description: 'Papelaria institucional em seis variações — cada uma calibrada para um contexto de uso da marca.',
    type: 'notepad',
    models: [
      { id: 'smart-notepad',    name: '⭐ Bloco Contextual (Dinâmico)', isSmart: true },
      { id: 'bloco-standard',   name: '01 · Padrão Institucional',   config: { layout: 'standard',   headerBorderColor: '#153065', title: 'De Mãos Dadas', titleColor: '#153065', subTitle: 'Goiânia · GO',               footerBackground: '#153065' } as NotepadProps },
      { id: 'bloco-campaign',   name: '02 · Campanha Popular',       config: { layout: 'campaign',   headerBorderColor: '#7F4CA9', title: 'De Mãos Dadas', titleColor: '#7F4CA9', subTitle: 'Favela Viva · 2026',          footerBackground: '#7F4CA9' } as NotepadProps },
      { id: 'bloco-premium',    name: '03 · Ultra-Premium',          config: { layout: 'premium',    headerBorderColor: '#0F1F3F', title: 'De Mãos Dadas', titleColor: '#D4AF37', subTitle: 'Parcerias Estratégicas',      footerBackground: '#0F1F3F' } as NotepadProps },
      { id: 'bloco-minimal',    name: '04 · Minimalismo Editorial',  config: { layout: 'minimal',    headerBorderColor: '#153065', title: 'Anotações',     titleColor: '#153065', subTitle: 'Instituto De Mãos Dadas',     footerBackground: '#153065' } as NotepadProps },
      { id: 'bloco-field',      name: '05 · Caderno de Campo',       config: { layout: 'field',      headerBorderColor: '#153065', title: 'Campo DMD',     titleColor: '#153065', subTitle: 'Registro Comunitário · 2026', footerBackground: '#153065' } as NotepadProps },
      { id: 'bloco-volunteer',  name: '06 · Agenda do Voluntário',   config: { layout: 'volunteer',  headerBorderColor: '#FF9E00', title: 'De Mãos Dadas', titleColor: '#153065', subTitle: 'Voluntariado · Goiânia',      footerBackground: '#FF9E00' } as NotepadProps },
    ]
  },
  {
    id: 'caneta',
    title: 'Caneta Escrita Criativa',
    description: 'Quinze variações em formato barril — alinhadas à paleta e missão do Instituto.',
    type: 'pen',
    models: [
      { id: 'smart-pen', name: '⭐ Sugestão da Marca (Dinâmica)', isSmart: true },
      { id: 'pen-1', name: '01 · Âmbar · Comunidade Viva', config: { layout: 'classic-solar' } as PenProps },
      { id: 'pen-2', name: '02 · Navy · Goiânia 2026', config: { layout: 'deep-prof' } as PenProps },
      { id: 'pen-3', name: '03 · Branca · Pilares DMD', config: { layout: 'full-set-white' } as PenProps },
      { id: 'pen-4', name: '04 · Âmbar · Pilares Sólidos', config: { layout: 'full-set-solar' } as PenProps },
      { id: 'pen-5', name: '05 · Navy · Pilares Brancos', config: { layout: 'full-set-deep' } as PenProps },
      { id: 'pen-6', name: '06 · Bicolor · Logo + Site', config: { layout: 'duo-tone' } as PenProps },
      { id: 'pen-7', name: '07 · Frame Âmbar · Voluntariado', config: { layout: 'ginga-frame' } as PenProps },
      { id: 'pen-8', name: '08 · Centro Simbólico', config: { layout: 'symbolic-center' } as PenProps },
      { id: 'pen-9', name: '09 · Navy · Impacto Social', config: { layout: 'minimalist-dash' } as PenProps },
      { id: 'pen-10', name: '10 · Dark · Goiânia GO', config: { layout: 'tech-concept' } as PenProps },
      { id: 'pen-11', name: '11 · Saúde Comunitária', config: { layout: 'focus-gov' } as PenProps },
      { id: 'pen-12', name: '12 · Educação e Cidadania', config: { layout: 'focus-amb' } as PenProps },
      { id: 'pen-13', name: '13 · Branca · Logo + Pilares', config: { layout: 'modern-white' } as PenProps },
      { id: 'pen-14', name: '14 · Âmbar · De Mãos Dadas', config: { layout: 'power-solar' } as PenProps },
      { id: 'pen-15', name: '15 · Totem · Pilares + Logo', config: { layout: 'brand-totem' } as PenProps },
    ]
  },
  {
    id: 'assinatura',
    title: 'Assinatura Digital',
    description: 'Padronização oficial para comunicações de email da equipe.',
    type: 'signature',
    models: [
      { id: 'smart-sig', name: '⭐ Assinatura Core (Dinâmica)', isSmart: true },
      { id: 'sig-classic', name: '01 · Executiva Clássica', config: { layout: 'classic' } as EmailSignatureProps },
      { id: 'sig-sidebar', name: '02 · Barra Lateral', config: { layout: 'sidebar' } as EmailSignatureProps },
      { id: 'sig-modern', name: '03 · Card Moderno', config: { layout: 'modern' } as EmailSignatureProps },
      { id: 'sig-minimal', name: '04 · Clean & Minimal', config: { layout: 'minimal' } as EmailSignatureProps },
      { id: 'sig-compact', name: '05 · Compacta Inline', config: { layout: 'compact' } as EmailSignatureProps },
    ]
  },
  {
    id: 'banner',
    title: 'Banner & Web',
    description: 'Formatos horizontais e verticais para presença digital e parcerias.',
    type: 'banner',
    models: [
      { id: 'smart-banner', name: '⭐ Banner Global (Dinâmico)', isSmart: true },
      { id: 'ban-hero', name: '01 · Hero Principal', config: { layout: 'hero' } as WebBannerProps },
      { id: 'ban-prom', name: '02 · Promoção Institucional', config: { layout: 'promotion' } as WebBannerProps },
      { id: 'ban-event', name: '03 · Chamada de Evento', config: { layout: 'event' } as WebBannerProps },
      { id: 'ban-min', name: '04 · Tarja Minimalista', config: { layout: 'minimal' } as WebBannerProps },
      { id: 'ban-side', name: '05 · Skyscraper Social', config: { layout: 'sidebar' } as WebBannerProps },
    ]
  },
  {
    id: 'certificado',
    title: 'Certificação',
    description: 'Estudos de certificados para conclusão de cursos e programas sociais.',
    type: 'certificate',
    models: [
      { id: 'smart-cert', name: '⭐ Certificado Mestre (Dinâmico)', isSmart: true },
      { id: 'cert-luxo', name: '01 · Edição de Luxo', config: { layout: 'luxo' } as CertificateProps },
      { id: 'cert-mod', name: '02 · Design Moderno', config: { layout: 'moderno' } as CertificateProps },
      { id: 'cert-vibr', name: '03 · Comunitário Vibrante', config: { layout: 'vibrante' } as CertificateProps },
      { id: 'cert-inst', name: '04 · Padrão Institucional', config: { layout: 'institucional' } as CertificateProps },
      { id: 'cert-min', name: '05 · Acadêmico Minimalista', config: { layout: 'minimalista' } as CertificateProps },
    ]
  },
  {
    id: 'impacto',
    title: 'Relatório de Impacto',
    description: 'Formatos de prestação de contas para doadores, investidores e parceiros institucionais.',
    type: 'report',
    models: [
      { id: 'smart-rep', name: '⭐ Transparência Dinâmica (Dinâmico)', isSmart: true },
      { id: 'rep-dash', name: '01 · Dashboard de Dados', config: { layout: 'dashboard' } as ImpactReportProps },
      { id: 'rep-hum', name: '02 · Conexão Humana', config: { layout: 'humano' } as ImpactReportProps },
      { id: 'rep-min', name: '03 · Minimalismo Premium', config: { layout: 'minimalista' } as ImpactReportProps },
      { id: 'rep-transp', name: '04 · Eficiência e Projetos', config: { layout: 'transparencia' } as ImpactReportProps },
      { id: 'rep-cel', name: '05 · Celebração e Números', config: { layout: 'celebracao' } as ImpactReportProps },
    ]
  },
  {
    id: 'folder',
    title: 'Folder Institucional',
    description: 'Materiais de divulgação para feiras, eventos comunitários e encontros com parceiros.',
    type: 'brochure',
    models: [
      { id: 'smart-bro', name: '⭐ Folder Dinâmico (Dinâmico)', isSmart: true },
      { id: 'bro-trip', name: '01 · Tríptico Clássico', config: { layout: 'triptico' } as BrochureProps },
      { id: 'bro-mod', name: '02 · Design Moderno', config: { layout: 'moderno' } as BrochureProps },
      { id: 'bro-com', name: '03 · Edição Comunitária', config: { layout: 'comunitario' } as BrochureProps },
      { id: 'bro-min', name: '04 · Minimalismo Sóbrio', config: { layout: 'minimalista' } as BrochureProps },
      { id: 'bro-bi', name: '05 · Bifólio de Impacto', config: { layout: 'bifolio' } as BrochureProps },
    ]
  },
  {
    id: 'slides',
    title: 'Apresentação Slides',
    description: 'Decks de apresentação para reuniões de captação, pitches e eventos institucionais.',
    type: 'slide',
    models: [
      { id: 'smart-slide', name: '⭐ Pitch Deck (Dinâmico)', isSmart: true },
      { id: 'slide-pitch', name: '01 · Pitch Assertivo', config: { layout: 'pitch' } as SlideProps },
      { id: 'slide-min', name: '02 · Minimalismo Ultra', config: { layout: 'minimal' } as SlideProps },
      { id: 'slide-inst', name: '03 · Corporativo Sólido', config: { layout: 'institucional' } as SlideProps },
      { id: 'slide-data', name: '04 · Foco em Investimento', config: { layout: 'data' } as SlideProps },
      { id: 'slide-crea', name: '05 · Narrativa Criativa', config: { layout: 'creative' } as SlideProps },
    ]
  },
  {
    id: 'cartao',
    title: 'Cartão de Visita',
    description: 'Impacto imediato para networking e facilitação de doações via QR Code.',
    type: 'card',
    models: [
      { id: 'smart-card', name: '⭐ Conexão Imediata (Dinâmico)', isSmart: true },
      { id: 'card-classic', name: '01 · Executivo Clássico', config: { layout: 'classic' } as BusinessCardProps },
      { id: 'card-bold', name: '02 · Impacto de Cor', config: { layout: 'bold' } as BusinessCardProps },
      { id: 'card-min', name: '03 · Minimalismo Branco', config: { layout: 'minimal' } as BusinessCardProps },
      { id: 'card-crea', name: '04 · Vanguarda Criativa', config: { layout: 'creative' } as BusinessCardProps },
      { id: 'card-soc', name: '05 · Foco no Social (QR)', config: { layout: 'social' } as BusinessCardProps },
    ]
  },
  {
    id: 'banners-evento',
    title: 'Banners de Evento',
    description: 'Formatos verticais (Roll-ups) para alta visibilidade em ambientes externos e institucionais.',
    type: 'external-app',
    models: [
      {
        id: 'banner-saude',
        name: '01 · Mutirão da Saúde',
        category: 'Eventos / Rua',
        reasoning: 'O Roxo Institucional transmite cuidado. Anton em escala máxima garante leitura a 10m+.',
        sizeRecommendation: 'Roll-up (80x200cm)',
        versionUsed: 'Marca Completa sobre Roxo',
        src: '/examples/banner-evento.html?theme=bg-purple&tag=EMERGÊNCIA SOCIAL&headline=MUTIRÃO DA\\nSAÚDE&desc=Atendimento médico e dental gratuito para toda a comunidade.&date=20 MAIO&loc=PRAÇA CENTRAL&time=08H ÀS 18H'
      },
      {
        id: 'banner-juridico',
        name: '02 · Justiça e Cidadania',
        category: 'Eventos / Institucional',
        reasoning: 'Azul Navy estabelece autoridade. Estrutura limpa prioriza orientação do cidadão.',
        sizeRecommendation: 'Lona com Ilhós (100x150cm)',
        versionUsed: 'Marca Completa sobre Navy',
        src: '/examples/banner-evento.html?theme=bg-navy&tag=DIREITOS HUMANOS&headline=JUSTIÇA E\\nCIDADANIA&desc=Regularização de documentos e orientação jurídica gratuita.&date=15 JUNHO&loc=ESCOLA MUNICIPAL&time=09H ÀS 17H'
      },
      {
        id: 'banner-empreendedorismo',
        name: '03 · Feira de Negócios',
        category: 'Eventos / Mobilização',
        reasoning: 'Laranja Accent gera urgência e energia, atraindo atenção em feiras movimentadas.',
        sizeRecommendation: 'Roll-up (80x200cm)',
        versionUsed: 'Logo Navy sobre Laranja',
        src: '/examples/banner-evento.html?theme=bg-accent&tag=FOME DE FUTURO&headline=FEIRA DE\\nNEGÓCIOS&desc=Exposição de talentos da comunidade e networking local.&date=05 JULHO&loc=CAMPO DO BAIRRO&time=10H ÀS 20H'
      },
      {
        id: 'banner-capacitacao',
        name: '04 · Workshop Digital',
        category: 'Eventos / Educação',
        reasoning: 'Sobriedade do Navy com clareza do branco, focando na autoridade técnica.',
        sizeRecommendation: 'Banner de Entrada (90x120cm)',
        versionUsed: 'Marca em Contraste (Navy)',
        src: '/examples/banner-evento.html?theme=bg-white&tag=CAPACITAÇÃO&headline=WORKSHOP\\nDIGITAL&desc=Curso intensivo de informática e marketing para iniciantes.&date=12 AGOSTO&loc=CENTRO CULTURAL&time=14H ÀS 19H'
      },
      {
        id: 'banner-cultura',
        name: '05 · Festival de Artes',
        category: 'Eventos / Cultura',
        reasoning: 'Roxo como base criativa para celebrações culturais e manifestações artísticas.',
        sizeRecommendation: 'Roll-up (80x200cm)',
        versionUsed: 'Marca Completa com Gradiente',
        src: '/examples/banner-evento.html?theme=bg-purple&tag=CULTURA VIVA&headline=FESTIVAL DE\\nARTES&desc=Música, dança e grafite celebrando nossa identidade.&date=22 SETEMBRO&loc=RUA DA CIDADANIA&time=16H ÀS 22H'
      }
    ]
  },
  {
    id: 'insta-stories',
    title: 'Instagram Stories',
    description: 'Layouts verticais (9:16) focados em engajamento rápido e CTAs diretas.',
    type: 'external-app',
    models: [
      {
        id: 'story-convocacao',
        name: '01 · Convocação Geral',
        category: 'Mobilização',
        reasoning: 'Destaque para o CTA "Arraste para Ver". Cores vibrantes para retenção em scrolls rápidos.',
        sizeRecommendation: '1080x1920px',
        versionUsed: 'Marca Completa sobre Gradiente',
        src: '/examples/social-media.html?type=story&layout=resultado&tag=URGENTE&headline=CONVOCAÇÃO\\nGERAL&subline=Precisamos de voluntários para a próxima ação no Jd. Kennedy.&cta=EU QUERO AJUDAR'
      },
      {
        id: 'story-citacao',
        name: '02 · Voz da Favela',
        category: 'Institucional',
        reasoning: 'Fundo limpo e tipografia elegante para dar peso às palavras de líderes comunitários.',
        sizeRecommendation: '1080x1920px',
        versionUsed: 'Logo with Tag',
        src: '/examples/social-media.html?type=story&layout=citacao&tag=DMD VOZES&headline="O FUTURO\\nÉ AGORA"&subline=Nossa missão é transformar potências em realidades concretas.&cta=LEIA O RELATÓRIO'
      },
      {
        id: 'story-impacto',
        name: '03 · Dados de Impacto',
        category: 'Accountability',
        reasoning: 'Uso de Navy para passar credibilidade. Dados numéricos em Anton para leitura imediata.',
        sizeRecommendation: '1080x1920px',
        versionUsed: 'Marca Minimalista',
        src: '/examples/social-media.html?type=story&layout=engajamento&tag=RESULTADOS&headline=+500\\nFAMÍLIAS&subline=Impactadas positivamente no último trimestre pelo projeto De Mãos Dadas.&cta=VER DETALHES'
      },
      {
        id: 'story-comunidade',
        name: '04 · Comunidade Viva',
        category: 'Mobilização',
        reasoning: 'Template otimizado para inserção de fotos reais mantendo a moldura institucional.',
        sizeRecommendation: '1080x1920px',
        versionUsed: 'Marca Completa (Branca)',
        src: '/examples/social-media.html?type=story&layout=resultado&tag=NOSSA GENTE&headline=CELEBRANDO\\nA COMUNIDADE&subline=Momentos que marcam nossa jornada de transformação social.&cta=VER GALERIA'
      },
      {
        id: 'story-template',
        name: '05 · Repost / Template',
        category: 'Engajamento',
        reasoning: 'Área central limpa para que o usuário possa interagir ou adicionar seu próprio texto.',
        sizeRecommendation: '1080x1920px',
        versionUsed: 'Marca Watermark',
        src: '/examples/social-media.html?type=story&layout=template&tag=DMD SHARE&headline=SUA VEZ\\nDE FALAR&subline=Use este template para compartilhar sua história conosco.&cta=NOS MARQUE'
      }
    ]
  },
  {
    id: 'insta-feed',
    title: 'Instagram Feed',
    description: 'Posts quadrados e verticais (4:5) para o feed principal e carrosséis.',
    type: 'external-app',
    models: [
      {
        id: 'feed-institucional',
        name: '01 · Post Institucional',
        category: 'Brand Awareness',
        reasoning: 'Cores sólidas e marca centralizada. Ideal para fixar a nova identidade visual.',
        sizeRecommendation: '1080x1350px (4:5)',
        versionUsed: 'Marca Completa sobre Accent',
        src: '/examples/social-media.html?type=feed&layout=resultado&tag=INSTITUCIONAL&headline=DE MÃOS\\nDADAS&subline=Pelo desenvolvimento legítimo das nossas comunidades.&footerL=@INSTITUTODEMOASDADAS&footerR=OFICIAL'
      },
      {
        id: 'feed-resultado',
        name: '02 · Resultado Mensal',
        category: 'Transparência',
        reasoning: 'Foco em métricas tangíveis. Contraste Navy/Accent para hierarquia de informação.',
        sizeRecommendation: '1080x1080px (1:1)',
        versionUsed: 'Marca com Tag',
        src: '/examples/social-media.html?type=feed&layout=citacao&tag=METAS ALCANÇADAS&headline=1.200\\nALUNOS&subline=Formados em nossos bootcamps de tecnologia este ano.&footerL=TRANSPARÊNCIA&footerR=SET/26'
      },
      {
        id: 'feed-evento',
        name: '03 · Card de Evento',
        category: 'Mobilização',
        reasoning: 'Layout compacto para o grid do Instagram. Informações essenciais no primeiro olhar.',
        sizeRecommendation: '1080x1080px (1:1)',
        versionUsed: 'Marca Completa',
        src: '/examples/social-media.html?type=feed&layout=engajamento&tag=VEM AÍ&headline=FESTIVAL\\nCULTURAL&subline=Música e arte na rua para toda a família.&footerL=ENTRADA FRANCA&footerR=PRAÇA CENTRAL'
      },
      {
        id: 'feed-depoimento',
        name: '04 · Vozes Local',
        category: 'Storytelling',
        reasoning: 'Focado no lado humano. Espaço amplo para frase curta e poderosa.',
        sizeRecommendation: '1080x1350px (4:5)',
        versionUsed: 'Logo Minimal',
        src: '/examples/social-media.html?type=feed&layout=citacao&tag=DEPOIMENTO&headline="MUDOU\\nMINHA VIDA"&subline=O relato de quem vive a transformação no dia a dia da favela.&footerL=DMD HISTÓRIAS&footerR=COMUNIDADE'
      },
      {
        id: 'feed-sebrae',
        name: '05 · Parceria Sebrae',
        category: 'Relacionamento',
        reasoning: 'Co-branding estruturado. Mostra robustez e parcerias estratégicas da instituição.',
        sizeRecommendation: '1080x1080px (1:1)',
        versionUsed: 'Logo DMD + Parceiro',
        src: '/examples/social-media.html?type=feed&layout=resultado&tag=PARCERIA&headline=SEBRAE\\n+ DMD&subline=Workshops de negócios para empreendedores locais.&footerL=CAPACITAÇÃO&footerR=2026'
      }
    ]
  },
  {
    id: 'identidade-digital',
    title: 'Identidade Digital',
    description: 'Avatares, Favicons e ícones de aplicação para consistência em todas as telas.',
    type: 'external-app',
    models: [
      {
        id: 'av-institucional',
        name: '01 · Avatar Institucional',
        category: 'Profile Icon',
        reasoning: 'Símbolo isolado sobre fundo degradê institucional (Purple/Navy).',
        sizeRecommendation: '1080x1080px',
        versionUsed: 'Símbolo Isolado',
        src: '/examples/avatar-favicon.html?variation=institucional'
      },
      {
        id: 'av-viva',
        name: '02 · Avatar Favela Viva',
        category: 'Profile Icon',
        reasoning: 'Variação vibrante para campanhas de mobilização e perfis jovens.',
        sizeRecommendation: '1080x1080px',
        versionUsed: 'Símbolo Isolado',
        src: '/examples/avatar-favicon.html?variation=viva'
      },
      {
        id: 'av-premium',
        name: '03 · Avatar Ultra Premium',
        category: 'Profile Icon',
        reasoning: 'Fundo escuro profundo para comunicação de alto nível e eventos de gala.',
        sizeRecommendation: '1080x1080px',
        versionUsed: 'Símbolo Isolado',
        src: '/examples/avatar-favicon.html?variation=premium'
      },
      {
        id: 'av-white',
        name: '04 · Avatar Clean / Web',
        category: 'Profile Icon',
        reasoning: 'Fundo branco para melhor integração em sites e landing pages claras.',
        sizeRecommendation: '1080x1080px',
        versionUsed: 'Símbolo Navy',
        src: '/examples/avatar-favicon.html?variation=white'
      },
      {
        id: 'av-app-icon',
        name: '05 · App Icon & Favicon',
        category: 'UI Components',
        reasoning: 'Visualização de ícone de aplicativo (iOS/Android) e favicon 16x16 / 32x32.',
        sizeRecommendation: '1024x1024 / 16x16px',
        versionUsed: 'Símbolo Sistêmico',
        src: '/examples/avatar-favicon.html?variation=app-icon'
      }
    ]
  },
  {
    id: 'coral',
    title: 'Coral Vozes de Mãos Dadas',
    description: 'Aplicações para o Coral Vozes de Mãos Dadas — Uniformes e camisas para membros e apresentações.',
    type: 'uniform',
    models: [
      { id: 'tshirt-classic-front', name: '01 · Empilhamento Clássico', config: { color: 'navy', view: 'front', layout: 'classic-stack' } },
      { id: 'tshirt-modern-front', name: '02 · Impacto Moderno', config: { color: 'navy', view: 'front', layout: 'modern-bold' } },
      { id: 'tshirt-minimal-front', name: '03 · Minimalismo Clean', config: { color: 'white', view: 'front', layout: 'minimalist-clean' } },
      { id: 'tshirt-artistic-front', name: '04 · Estética Artística', config: { color: 'purple', view: 'front', layout: 'artistic-serif' } },
      { id: 'tshirt-badge-front', name: '06 · Emblema Circular', config: { color: 'navy', view: 'front', layout: 'badge-circle' } },
      { id: 'tshirt-vertical-front', name: '07 · Tipografia Vertical', config: { color: 'navy', view: 'front', layout: 'vertical-modern' } },
      { id: 'tshirt-oversized-front', name: '08 · Foco em VOZES (Oversized)', config: { color: 'white', view: 'front', layout: 'oversized-impact' } },
      { id: 'tshirt-boxed-front', name: '09 · Bloco Tipográfico (Boxed)', config: { color: 'navy', view: 'front', layout: 'boxed-lockup' } },
      { id: 'tshirt-script-front', name: '10 · Estilo Assinatura', config: { color: 'purple', view: 'front', layout: 'script-signature' } },
      { id: 'tshirt-base-back', name: '05 · Identidade (Costas)', config: { color: 'navy', view: 'back' } },
    ]
  }
];
