---
name: paleta-de-cores
description: >
  Criar, diagnosticar e melhorar paletas de cores para interfaces web e portais digitais — com base em teoria da cor, psicologia cromática e funções comunicativas da cor. Use este skill sempre que o usuário mencionar paleta de cores, escolha de cores para site, identidade visual, contraste, hierarquia cromática, cores de botão, fundo, header, cards ou qualquer decisão de cor em UI. Acione também em redesigns, auditorias visuais, portais institucionais, e-commerce, sistemas internos ou qualquer interface onde a cor precise comunicar com clareza e coerência.
---

# Skill: Paleta de Cores para Interfaces Web

> Fundamentado em: **teoria da cor** (harmonia, contraste, acordes cromáticos), **psicologia da cor e narrativa cromática** (Sole Otero) e **funções comunicativas da cor** (Leire y Eduardo — cor aplicada ao design gráfico).

---

## Princípio fundador

Cor não é decoração — é comunicação. Cada escolha cromática cumpre uma função antes de qualquer leitura: sinaliza hierarquia, evoca emoção, guia o olhar, constrói confiança ou urgência. Uma paleta eficaz não é a que "fica bonita" — é a que faz o usuário sentir o que precisa sentir em cada momento da jornada.

---

## 1. Entradas necessárias

Antes de propor qualquer paleta, coletar:

| Entrada | Por quê importa |
|---|---|
| Tipo de site (institucional, serviço público, e-commerce, blog, landing page) | Define tom emocional e restrições |
| Público-alvo e objetivos (credibilidade, inovação, proximidade, seriedade) | Orienta famílias cromáticas |
| Cores e logotipo da marca (se existirem) | Ponto de partida ou restrição |
| Descrição ou print dos componentes principais (header, menu, botões, cards, fundo) | Permite diagnóstico real |
| Emoções que o site deve transmitir | Base para narrativa cromática |
| Restrições institucionais de cor | Evita propostas inviáveis |

---

## 2. Diagnóstico da paleta atual

Quando houver uma paleta existente, avaliar antes de propor:

- **Contraste:** textos legíveis sobre fundos? Botões distinguíveis da página?
- **Saturação:** excesso de cores vibrantes que competem entre si?
- **Hierarquia:** é possível identificar rapidamente o elemento mais importante?
- **Coerência emocional:** a paleta comunica o posicionamento desejado? (ex.: site institucional com visual infantil)
- **Consistência:** as cores se repetem com a mesma função em todas as páginas?

---

## 3. Funções da cor na interface

Todo elemento da interface pede um tipo de cor. Identificar a função antes de escolher o matiz:

### 3.1 Função denotativa — representação do mundo real
Aplicar em fotos institucionais, ícones realistas, mapas, gráficos de dados.
- Cor naturalista: fidelidade ao objeto real
- Cor exaltada: mais vibrante, mais impacto visual
- Cor expressionista: interpretativa, carregada de significado

### 3.2 Função conotativa — evocação psicológica e simbólica
Aplicar em fundos, cabeçalhos, blocos de conteúdo, destaques editoriais.

| Família cromática | Evocações típicas |
|---|---|
| Azuis | Confiança, estabilidade, institucional, tecnologia |
| Verdes | Equilíbrio, saúde, sustentabilidade, aprovação |
| Laranjas / Amarelos moderados | Energia, proximidade, otimismo, atenção |
| Vermelhos | Urgência, paixão, alerta, força |
| Violetas | Criatividade, premium, espiritualidade |
| Neutros (cinza, branco, bege) | Sobriedade, clareza, leitura, respiro |
| Preto | Autoridade, sofisticação, seriedade |

> **Atenção à saturação e luminosidade:** cores muito saturadas transmitem energia e urgência; cores mais apagadas transmitem calma e seriedade. Ajustar intensidade é tão importante quanto escolher o matiz.

### 3.3 Função de sinal — codificação funcional
Aplicar em alertas, estados de formulário, feedback de sistema, indicadores de fluxo.

| Sinal | Cor convencional | Observação |
|---|---|---|
| Erro | Vermelho contrastante | Deve ter alta visibilidade |
| Sucesso | Verde calmo | Não deve assustar |
| Alerta / aviso | Amarelo ou laranja moderado | Nem urgente demais, nem invisível |
| Informação | Azul neutro | Discreto, não competitivo |
| Foco / interação | Definido pela primária | Consistente em todo o sistema |

---

## 4. Construção da paleta

### 4.1 Estrutura em três camadas

```
Paleta de base
  └── Fundo principal, fundo secundário, fundo de seção
  └── Texto principal, texto secundário, texto desabilitado

Paleta de comunicação
  └── Cor primária (identidade, botões principais, links, destaque)
  └── Cor secundária (elementos de apoio, subtítulos, ícones)
  └── Cor de acento (CTAs, destaques pontuais — usar com moderação)

Paleta de sinalização
  └── Erro, Sucesso, Alerta, Informação, Foco
```

### 4.2 Acordes cromáticos — como combinar

| Acorde | Descrição | Quando usar |
|---|---|---|
| Monocromático | Variações de luminosidade e saturação de um único matiz | Interfaces sóbrias, governo, institucional |
| Análogo | Matizes vizinhos na roda cromática | Ambientes harmoniosos, leitura contínua |
| Complementar | Matizes opostos na roda | Destaque forte, CTAs, contraste de seções |
| Tríade | Três matizes equidistantes | Diversidade com equilíbrio — exige cuidado |
| Tetraédrico | Quatro matizes em dois pares complementares | Sistemas complexos, uso moderado |

> **Regra prática:** começar com monocromático ou análogo para a base; reservar complementar para elementos de destaque.

### 4.3 Variações para UI
Para cada cor principal, gerar ao menos:
- **×100 / ×200** — fundos suaves, hover states, tags
- **×500** — cor base (uso padrão)
- **×700 / ×900** — textos sobre fundo claro, estados ativos

---

## 5. Narrativa cromática por jornada

A cor deve contar uma história consistente ao longo do site:

1. **Mapear a jornada emocional:** quais emoções são desejáveis em cada área? (home, área logada, formulários, suporte, conclusão de fluxo)
2. **Associar emoções a subpaletas:** home mais vibrante → áreas internas mais neutras → formulários com máxima clareza
3. **Aplicar hierarquia emocional:** cores mais expressivas para foco (CTAs, mensagens importantes); cores neutras para fundos e leitura
4. **Validar a narrativa:** perguntar — *"Esta paleta transmite a seriedade esperada para um portal de governo?"* ou *"O uso de cor aqui gera confiança para o usuário inserir seus dados?"*

---

## 6. Acessibilidade e contraste

Verificar sempre antes de aprovar:

| Par de elementos | Contraste mínimo (WCAG AA) |
|---|---|
| Texto normal sobre fundo | 4.5:1 |
| Texto grande (18px+ ou 14px bold) | 3:1 |
| Componentes de UI e ícones informativos | 3:1 |
| Texto sobre botão colorido | 4.5:1 |

Ferramentas de referência: WebAIM Contrast Checker, Stark (Figma), Colour Contrast Analyser.

> Nunca confiar apenas na percepção visual — medir sempre, especialmente em fundos coloridos ou degradês.

---

## 7. Harmonização de imagens e ícones

- Ajustar temperatura e saturação de fotos para conversar com a paleta (imagens muito frias em site quente criam dissonância)
- Ícones monocromáticos: usar cor primária ou secundária conforme hierarquia da ação
- Ícones de sinalização: seguir estritamente a paleta de sinalização definida
- Ilustrações: limitar ao conjunto de matizes da paleta — ilustrações com cores fora do sistema quebram coerência

---

## 8. Perguntas diagnósticas

Antes de aprovar qualquer paleta, percorrer:

1. **Cada cor tem uma função clara?** (base, comunicação ou sinalização)
2. **A paleta transmite a emoção correta para o público-alvo?**
3. **Existe hierarquia visual clara entre primária, secundária e acento?**
4. **Todos os pares texto/fundo passam no contraste mínimo WCAG AA?**
5. **A cor de sinalização (erro, sucesso, alerta) é universalmente reconhecível — inclusive para daltônicos?**
6. **A paleta é consistente em todas as páginas e estados de interação?**
7. **As imagens e ícones estão harmonizados com a paleta definida?**

---

## 9. Saídas esperadas

- Paleta estruturada em três camadas (base, comunicação, sinalização) com valores hex/RGB
- Mapeamento função × componente (ex.: azul-primário → cabeçalho + botões principais)
- Descrição da narrativa cromática por seção da jornada
- Checklist de contraste para componentes principais
- Recomendações de ajuste fino (saturação, luminosidade, harmonia geral)

---

## Referências de base

- **Sole Otero** — Introdução à psicologia da cor: a narrativa cromática (Domestika)
- **Leire y Eduardo** — A cor aplicada ao design gráfico (Domestika)
- **WCAG 2.1** — Web Content Accessibility Guidelines
- **Josef Albers** — *Interaction of Color* (fundação teórica)
