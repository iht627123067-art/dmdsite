---
name: tipografia
description: >
  Aplicar decisões tipográficas rigorosas em projetos de design — identidades visuais, interfaces, documentos institucionais, portais e materiais impressos. Use este skill sempre que o usuário mencionar escolha de fontes, hierarquia tipográfica, legibilidade, composição de texto, espaçamento, interlinha, ou qualquer aspecto de tipografia aplicada. Acione também quando o projeto envolver design de comunicação pública, governo, ongs, ou interfaces funcionais — contextos em que a tipografia tem impacto direto na clareza e acessibilidade.
---

# Skill: Tipografia

> Perspectivas integradas de **Enric Jardí** (discurso tipográfico e escolha de fontes), **David Kimura** (microtipografia e composição) e **Gemma Busquets** (tipografia em interfaces e telas).

---

## Princípio fundador

Tipografia não é decoração — é arquitetura do texto. Cada decisão comunica algo antes mesmo de o leitor ler uma palavra: seriedade ou leveza, institucional ou próximo, urgente ou contemplativo. A forma da letra carrega significado independente do conteúdo verbal.

Esse princípio, central em Jardí, exige resistir ao caminho do menor esforço: as fontes "de todo mundo", os layouts copiados, os espaçamentos ignorados. Tipografia é ferramenta de comunicação — não acabamento final.

---

## 1. O que evitar

### 1.1 Fontes padrão sem justificativa
Não aceitar automaticamente Inter, Roboto, Poppins ou Montserrat só porque são populares ou "seguras". Perguntar sempre: **essa fonte fala a mesma língua que o conteúdo e a marca?** Popularidade não é critério — pertinência é.

### 1.2 Excesso de famílias tipográficas
Limitar a **1–2 famílias**, usando variações de peso, tamanho e estilo para construir hierarquia. Misturar três ou mais famílias sem critério gera ruído visual e enfraquece a identidade — é sinal de que a hierarquia não foi pensada com antecedência.

### 1.3 Fontes decorativas em texto corrido ou interfaces
Fontes caligráficas, "fofas", vintage ou futuristas prejudicam legibilidade e envelhecem rápido. Se houver uso, reservá-las exclusivamente a títulos expressivos com função deliberada — nunca em texto corrido, interfaces funcionais ou documentos de leitura contínua.

### 1.4 O layout genérico de "landing page de IA"
Desconfiar do combo: hero com imagem genérica, título em bold, parágrafo pequeno, botão colorido, três cards iguais. Esse padrão é ubíquo justamente porque não foi pensado. Perguntar: **isso serve ao usuário real ou apenas preenche espaço visualmente?**

### 1.5 Escolher fonte sem considerar o meio
Uma fonte que funciona no Figma pode falhar em texto longo, em tela pequena, em impressão ou em contextos de acessibilidade. A escolha tipográfica só se valida no contexto real de uso — não na tela do designer.

---

## 2. Boas práticas

### 2.1 Definir a hierarquia antes de escolher a fonte
Mapear os níveis antes de qualquer decisão de fonte:

```
H1 — título principal
H2 — subtítulo de seção
H3 — subtítulo de subseção
Parágrafo — texto corrido
Destaque — citação, callout
Legenda — texto auxiliar, metadados
Label — interface, formulários
Link — ação ou referência
```

Esse mapa é o esqueleto. A fonte vem depois, para vestir uma estrutura que já existe. Sem hierarquia definida, a escolha tipográfica é arbitrária.

### 2.2 Projetar para o meio específico
Cada contexto exige decisões próprias de tamanho, contraste e espaçamento:

| Meio | Prioridades |
|---|---|
| Portal / interface web | Responsividade, contraste WCAG, leitura em múltiplos dispositivos |
| Sistema interno | Densidade de informação, legibilidade em telas de trabalho |
| Documento PDF oficial | Composição para impressão, hierarquia clara, tamanhos seguros |
| Apresentação | Leitura a distância, pouco texto, alto contraste |
| Material impresso | Resolução, sangria, comportamento da tinta |

### 2.3 Testar leitura real
Ver a interface em tamanhos diferentes, simular textos longos, testar contraste e legibilidade com pessoas não-designers. Ajustar:

- **Interlinha (line-height):** geralmente 1.4–1.6× para texto corrido
- **Largura de coluna:** 55–75 caracteres por linha para leitura confortável
- **Tracking (espaçamento de letras):** mínimo em texto corrido; moderado em caixa alta
- **Espaçamento entre parágrafos:** suficiente para separar sem fragmentar

Esses ajustes são o que elimina o aspecto genérico. São a diferença entre uma fonte "usada" e uma composição que funciona.

### 2.4 Hierarquia com poucos recursos
Construir distinção visual com os recursos básicos antes de recorrer a efeitos:

**Ordem de prioridade:**
1. Tamanho
2. Peso (bold, regular, light)
3. Espaçamento (entre letras, entre linhas, entre blocos)
4. Cor (com cuidado — acessibilidade e consistência)
5. Caixa alta (com moderação — compromete legibilidade em excesso)
6. Sublinhado (apenas para links — nunca como ênfase decorativa)
7. Itálico (para citações, termos técnicos, ênfase pontual)

---

## 3. Perspectivas de referência

### Enric Jardí — Discurso tipográfico
> *"A tipografia fala antes de ser lida."*

- Escolher poucas fontes, bem justificadas, que "falam a mesma língua" que o conteúdo e o contexto.
- Perguntar o que a forma da letra comunica além do texto: seriedade, proximidade, institucional, contemporâneo, experimental.
- A escolha da fonte é uma posição — não uma preferência estética neutra.
- Aplicação prática: antes de escolher a fonte, escrever em uma linha o que ela deve comunicar. Se não conseguir, ainda não há critério suficiente.

### David Kimura — Microtipografia e composição
> *"O detalhe invisível é o que torna o texto legível."*

- Foco em microtipografia: alinhamentos, entrelinha, tracking, largura de coluna, kerning, hifenização.
- Cada ajuste de espaçamento é uma ferramenta de clareza — especialmente crítico em textos longos, documentos oficiais e sistemas de governo.
- Composição não é sobre o que se vê imediatamente — é sobre o que não cansa, não confunde, não interrompe a leitura.
- Aplicação prática: revisar sempre interlinha e largura de coluna antes de aprovar qualquer layout com texto corrido.

### Gemma Busquets — Tipografia em interfaces e telas
> *"A fonte vive no layout — não existe isolada."*

- Tipografia pensada para telas: responsividade, hierarquia em múltiplos dispositivos, elementos interativos, estados de leitura.
- Integrar tipografia ao grid, ao ritmo vertical e ao espaço em branco — não "jogar" uma fonte sobre um layout pronto.
- Considerar estados dinâmicos: texto truncado, overflow, tamanhos de fonte em breakpoints diferentes.
- Aplicação prática: testar a tipografia no componente real, não apenas em frames estáticos do Figma.

---

## 4. Perguntas diagnósticas

Antes de fechar decisões tipográficas, percorrer estas perguntas:

1. **Essa fonte comunica o que precisa comunicar, independente do conteúdo verbal?**
2. **Consigo construir toda a hierarquia com 1–2 famílias?**
3. **Essa tipografia funciona no dispositivo mais limitado que o usuário usará?**
4. **Os espaçamentos foram ajustados para o texto real — não para o texto de exemplo?**
5. **Testei com alguém que não é designer?**
6. **A tipografia está integrada ao grid e ao layout — ou foi adicionada por cima?**
7. **Se eu remover as fontes, a estrutura hierárquica ainda existe?**

---

## 5. Referências para aprofundamento

- **Enric Jardí** — *Veintidós consejos sobre tipografía* (e versão em português)
- **David Kimura** — cursos e material em Domestika sobre composição tipográfica
- **Gemma Busquets** — publicações sobre tipografia em UI e design de interfaces
- **Robert Bringhurst** — *The Elements of Typographic Style* (fundação técnica)
- **Matthew Butterick** — *Practical Typography* (aplicação contemporânea, disponível online)
