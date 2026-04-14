# Plano de Implementação: Apresentação de Portfólio Interativo - Instituto De Mãos Dadas

Este documento detalha o planejamento para a construção da plataforma interativa de apresentação de marca e identidade visual para o **Instituto De Mãos Dadas**. 

O objetivo central é criar uma página web interativa (`apresentacao_cliente.html`) onde o cliente possa visualizar as propostas de identidade visual e, através de um sistema de "votação/seleção" (opções clicáveis), montar o portfólio de aprovação final. Ao concluir, as escolhas serão compiladas e enviadas por e-mail para a equipe de design.

---

## 1) Estrutura do Site (Mapa e Propósito)

A página será estruturada como uma **apresentação sequencial (One-Page Flow)** para guiar o cliente pela narrativa da marca antes das escolhas:

1. **Hero (Abertura):** *"Transformando realidades, de mãos dadas com a comunidade."*  
   - Apresenta o logo principal em destaque sobre um fundo que transmita a personalidade acolhedora e séria.
2. **Sobre o Propósito (Manifesto):** *"Nossa história em cores e formas."*  
   - Texto curto conectando o objetivo da ONG à importância de uma identidade forte.
3. **Módulo de Escolhas 1: Versões da Marca** *"Flexibilidade sem perder a essência."*
4. **Módulo de Escolhas 2: Combinações Tipográficas** *"As vozes da nossa comunicação."*
5. **Módulo de Escolhas 3: Paleta e Tom Fotográfico** *"As cores e os rostos das nossas ações."*
6. **Módulo de Escolhas 4: Materiais e Aplicações** *"A marca ganhando o mundo."*
7. **Revisão e Envio:** *"Confirme as escolhas para finalizar o portfólio."*  
   - Resumo dinâmico das opções selecionadas e botão de envio por e-mail no final.

---

## 2) Tratamento da Marca no Site

Para garantir consistência e profissionalismo com o propósito social:

- **Presença:** O logo na sua forma principal (`logo-dmd-new.svg`) aparece no cabeçalho.
- **Regras de Uso Visíveis:** Uma seção didática mostrará ao cliente a **área de respiro** (espaço mínimo em torno do logo) e os **limites de redução**.
- **Boas e Más Práticas (Transformação Social):**
  - **Boa Prática:** Logo aplicado sobre fotos que denotam **protagonismo, empoderamento e ação** (pessoas ativas, olhando para frente, sorrisos genuínos).
  - **Má Prática (A Evitar):** Evitar aplicar o logo de forma distorcida, sobre fundos texturizados que atrapalham a leitura, ou acompanhado de tons apelativos e assistencialistas (vitimização). O design social contemporâneo pede dignidade visual.

---

## 3) Variações e Opções Tipográficas

O site fornecerá **3 Opções** selecionáveis para o cliente avaliar e votar. Elas refletem o propósito da transformação social de maneiras levemente diferentes:

- **Opção 1 (Recomendada - Foco em Inovação/Jovem): Space Grotesk (Títulos) + Inter (Corpo)**  
  *Justificativa:* Uma abordagem **moderna e inovadora**. O Space Grotesk traz personalidade geométrica, perfeita para falar com jovens e parceiros criativos. A fonte Inter assegura máxima legibilidade e acessibilidade digital, sendo neutra e acolhedora.
  
- **Opção 2 (Campanha/Urbano): Anton (Destaques) + Roboto (Corpo)**  
  *Justificativa:* Mais **urbana, vibrante e comunitária**. O Anton simula a força de cartazes e ações de impacto rápido (estilo lambe-lambe). Ideal para campanhas que exigem urgência e atenção imediata nas periferias.

- **Opção 3 (Institucional/Premium): Space Grotesk (Títulos) + Crimson Pro (Corpo)**  
  *Justificativa:* Uma escolha **séria e institucional**. O uso da Crimson Pro (Serifada) traz a solidez que agrada doadores corporativos e o poder público, ancorando a marca na confiança e no "peso" de uma instituição estabelecida.

**Diretriz de Escolha:** O site exibirá um selo de **"Recomendação do Designer"** na Opção 1 para evitar paralisia de decisão, mas permitirá a experimentação das outras.

---

## 4) Paleta de Cores e Variações da Marca

A paleta deve comunicar transformação sem cair no clichê. Tendo como base o código nativo:

- **Paleta Principal (Força & Identidade):**
  - Azul Marinho (`#153065`): Seriedade, confiança e base sólida.
  - Roxo (`#7F4CA9`): Transformação, criatividade e visão de futuro.
  - Âmbar/Laranja (`#FF9E00`): Calor humano, energia vital das comunidades.

- **Paleta de Apoio (Acolhimento & Respiro):**
  - Lilás (`#BD90DA`): Acessibilidade emocional, afeto e empatia.
  - Branco Gelo (`#FAFAFA`): Respiro visual, claridade institucional.

**Opções de Variação (Votação da Paleta Geral de uso):**
1. **Opção 1 (Equilíbrio Institucional):** Fundo branco, dominante Azul Marinho, Roxo em detalhes (links/botões), Âmbar apenas para chamadas para ação.
2. **Opção 2 (Campanha Comunitária):** Uso agressivo de Roxo e Âmbar para causar vibração urbana, com tipografia grande e blocos intensos.
3. **Opção 3 (Sóbria e Elevada):** Dominância do Azul Marinho e Branco (quase monocromático), gerando valor percebido e confiabilidade "premium".

---

## 5) Materiais de Aplicação (Online e Offline)

Para que o cliente entenda como a marca vive no mundo real, usaremos **Mockups de Alta Fidelidade processados via CSS/SVG** (em vez de imagens estáticas sempre que possível). Isso permite que a cor e o logo mudem dinamicamente conforme a seleção do cliente:

1. **Capa de Relatório de Impacto (Digital/Impresso):** Versão do logo em 1 cor (Negativa Branca) sobre fundo escuro (Azul Marinho) com texto limpo.
2. **Post de Redes Sociais (Carrossel Informativo):** Cores vibrantes (Roxo + Laranja) para parar o "scroll" e facilitar leitura educativa.
3. **Caneca Institucional (Mockup CSS):** Simulação 3D em tempo real onde o logo e a cor da caneca alternam conforme as escolhas de paleta.
4. **Cordão de Crachá:** Fitas coloridas com o monograma/símbolo (DMD) em repetição, fácil identificação.
5. **Banner para Evento Comunitário:** Tipografia gigante e foto de projeto real dominando a composição.
6. **Apresentação de Slides (Pitch para Doadores):** Estilo minimalista; muito respiro branco, selo da marca discreto na base para não poluir os dados numéricos.

---

## 6) Mecânica de Opções e Escolha (Votação)

Para o cliente escolher e construir o portfólio, **todas as seções acima** (Tipografia, Paletas, Materiais) funcionarão de forma semelhante a formulários visuais interativos.

1. **Apresentação em Cards:** Cada "Combinação" ou versão é um card clicável com feedback tátil (escala).
2. **Estado e Persistência:** Utilizaremos `localStorage` para que as seleções do cliente sejam preservadas mesmo se a página for recarregada ou fechada acidentalmente.
3. **Micro-interação:** Ao clicar, o card ganha borda destacada e o selo "✔ Selecionado". 
4. **Resumo Dinâmico:** Uma barra lateral ou box flutuante ("Seu Portfólio") acumulará as miniaturas das escolhas em tempo real.
5. **Envio Final (FormSubmit):** Utilizaremos o serviço **FormSubmit** para processar o formulário final. Isso garante que a equipe de design receba um e-mail estruturado e formatado com todas as escolhas, evitando as limitações de texto e formatação do método `mailto:`.

---

## 7) Tom e Coerência Social

A essência de toda essa interface e das aplicações propostas é a **potência comunitária e não a carência**. O design será criado para parecer "premium", mostrando que instituições do terceiro setor baseadas em periferias merecem e possuem comunicação de nível global. 
- Fotos devem sempre refletir **dignidade e ação**, jamais sofrimento passivo. Mães organizando a comunidade, jovens aprendendo tecnologias, líderes discursando.
- Todo o site terá contraste validado (AAA) para garantir acessibilidade visual.
