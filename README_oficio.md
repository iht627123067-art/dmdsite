# Documentos Institucionais — Instituto de Mãos Dadas

Guia técnico para criação e manutenção dos ofícios e termos em HTML do Instituto de Mãos Dadas. Este documento descreve a **arquitetura de impressão** utilizada para garantir que a logomarca, o cabeçalho e o rodapé se repitam corretamente em **todas as páginas** ao gerar um PDF via navegador.

---

## Arquivos neste diretório

| Arquivo | Tipo | Descrição |
|---|---|---|
| `Oficio_Amorix.html` | HTML | Ofício para a Amorix Alimentos (modelo de referência) |
| `Oficio_Doacao_DMD.html` | HTML | Ofício de doação do Instituto |
| `Oficio_Doacao_Santri.html` | HTML | Ofício de doação Santri |
| `Oficio_Interesse_Amorix.html` | HTML | Ofício de interesse Amorix |
| `Oficio_Secult_DMD.html` | HTML | Ofício para a Secult |
| `Oficio_doacao.md` | Markdown | Fonte de conteúdo do ofício de doação |
| `termoderesponsabilidade.html` | HTML | Termo de Responsabilidade (telefone/e-mail institucional) |
| `termoderesponsabilidade.md` | Markdown | Fonte de conteúdo do Termo de Responsabilidade |
| `termodevoluntariado.md` | Markdown | Fonte de conteúdo do Termo de Voluntariado |

---

## Arquitetura de Impressão

A técnica utilizada é chamada de **"Híbrida: Fixed + Table Spacer"**. Ela combina dois mecanismos do navegador para garantir repetição e espaçamento corretos:

### Visão Geral (3 Camadas)

```
┌─────────────────────────────────────────────┐
│  CAMADA 1: position: fixed (header/footer)  │  ← Garante REPETIÇÃO visual
│                                             │     em todas as páginas
├─────────────────────────────────────────────┤
│  CAMADA 2: <thead> / <tfoot> com spacers    │  ← Garante ESPAÇO reservado
│                                             │     para que o texto não
│                                             │     sobreponha a marca
├─────────────────────────────────────────────┤
│  CAMADA 3: <tbody> com conteúdo             │  ← Fluxo livre de texto
│                                             │     por quantas páginas
│                                             │     forem necessárias
└─────────────────────────────────────────────┘
```

### Por que essa técnica funciona?

O Google Chrome (Chromium) possui uma limitação: elementos `position: fixed` dentro do `<body>` são repetidos em todas as páginas na impressão, **mas o navegador não sabe reservar espaço para eles**. Se usarmos apenas `fixed`, o texto do documento vai ficar "por baixo" do cabeçalho.

A solução é usar uma `<table>` com `<thead>` e `<tfoot>` contendo **divs espaçadoras vazias**. O navegador repete essas áreas vazias em cada página, criando o espaço necessário para que o conteúdo do `<tbody>` nunca sobreponha os elementos fixos.

---

## Estrutura HTML Padrão

```html
<body>
  <div class="page-container">

    <!-- 1. CABEÇALHO FIXO (filho direto do container) -->
    <header class="print-header">
      <div class="logo-box">
        <svg><!-- Logo SVG inline --></svg>
      </div>
      <div class="header-line"></div>
    </header>

    <!-- 2. RODAPÉ FIXO (filho direto do container) -->
    <footer class="print-footer">
      <div class="footer-content">
        <div class="contact-box">
          <!-- Informações de contato -->
        </div>
      </div>
      <div class="accent-stripe"></div>
    </footer>

    <!-- 3. TABELA DE LAYOUT -->
    <table class="print-table">
      <thead>
        <tr><td><div class="header-spacer"></div></td></tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="main-content">
              <!-- TODO: Conteúdo do documento aqui -->
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr><td><div class="footer-spacer"></div></td></tr>
      </tfoot>
    </table>

  </div>
</body>
```

---

## CSS Crítico

### 1. Regra `@page`

```css
@media print {
  @page {
    size: A4;
    margin: 0;  /* OBRIGATÓRIO: zeramos a margem do navegador */
  }
}
```

> **Por que `margin: 0`?** Porque controlamos todo o espaçamento via CSS. Se o navegador adicionar suas próprias margens, o layout quebra.

### 2. Cabeçalho Fixo

```css
.print-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 100;
  padding: 15mm 20mm 15mm;
}
```

### 3. Rodapé Fixo

```css
.print-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 100;
  padding-bottom: 5mm;
}
```

### 4. Espaçadores (o segredo da técnica)

```css
.header-spacer {
  height: 45mm;  /* Deve ser >= altura do cabeçalho fixo */
}

.footer-spacer {
  height: 30mm;  /* Deve ser >= altura do rodapé fixo */
}
```

> **Regra fundamental:** A altura do spacer deve ser **igual ou maior** que a altura do elemento fixo correspondente. Caso contrário, o texto vai sobrepor a marca.

### 5. Container A4

```css
.page-container {
  width: 210mm;
  min-height: 297mm;
  margin: 10mm auto;   /* Centraliza na tela */
  background: white;
}

@media print {
  .page-container {
    margin: 0;
    width: 210mm;
    box-shadow: none;
  }
}
```

---

## Logomarca (SVG Inline)

### Por que SVG inline?

- **Não depende de arquivo externo:** O documento funciona offline.
- **Cores sólidas:** Gradientes SVG podem ser ignorados pelo Chrome em modo de impressão se a opção "Gráficos de Fundo" estiver desativada. Por isso, usamos **cores hexadecimais sólidas** (`#71409D`, `#153065`, `#253C68`).
- **Escalável:** A logo fica nítida em qualquer resolução de impressão.

### Posicionamento da Logo

```css
.logo-box {
  position: absolute;
  bottom: -35px;          /* Sobrepõe a linha degradê */
  left: 30mm;
  width: 135px;
  height: 135px;
  background: white;
  border-radius: 50%;     /* Círculo */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(127, 76, 169, 0.15);
  z-index: 10;            /* Fica acima da linha */
  border: 5px solid white;
}
```

A logo fica dentro de um **círculo branco** que "flutua" sobre a **linha degradê** do cabeçalho, criando o efeito visual da identidade do Instituto.

### Linha Degradê (Identidade Visual)

```css
.header-line {
  position: absolute;
  bottom: 25px;
  left: 20mm;
  right: 20mm;
  height: 3px;
  background: linear-gradient(90deg, #7F4CA9 0%, #FF9E00 100%);
  border-radius: 2px;
}
```

### Faixa do Rodapé

```css
.accent-stripe {
  width: 100%;
  height: 8px;
  background: linear-gradient(90deg, #7F4CA9 0%, #FF9E00 100%);
}
```

---

## Cores Institucionais

| Nome | Hex | Uso |
|---|---|---|
| Roxo | `#7F4CA9` | Cor primária, bordas de seção, gradientes |
| Azul Escuro | `#153065` | Títulos, texto destaque |
| Laranja | `#FF9E00` | Gradientes, acentos |
| Azul Médio | `#516EA2` | Detalhes na logo SVG |
| Roxo Logo | `#71409D` | Texto "DE MÃOS DADAS" na logo |
| Azul Logo | `#253C68` | Elemento gráfico na logo |

---

## Como Criar um Novo Documento

1. **Copie o template:** Use `Oficio_Amorix.html` ou `termoderesponsabilidade.html` como base.

2. **Escreva o conteúdo em Markdown** (arquivo `.md`): Redija o texto jurídico/institucional no formato Markdown para revisão. Esse arquivo é a **fonte de verdade**.

3. **Transcreva para o HTML:** Substitua o conteúdo dentro de `<div class="main-content">` pelo novo texto, mantendo a estrutura HTML intacta (header, footer, table spacers).

4. **Nunca resuma o texto:** O conteúdo do `.md` deve ser transcrito **integralmente** para o HTML. O layout se ajusta automaticamente a qualquer quantidade de páginas.

5. **Teste a impressão:** Abra o arquivo no Chrome, clique no botão de impressão e verifique:
   - ✅ A logo aparece em **todas** as páginas?
   - ✅ O rodapé aparece em **todas** as páginas?
   - ✅ O texto **não** sobrepõe o cabeçalho ou rodapé?
   - ✅ O bloco de assinaturas não foi cortado entre páginas?

---

## Erros Comuns e Soluções

| Problema | Causa | Solução |
|---|---|---|
| Logo some na 2ª página | Header não tem `position: fixed` | Garantir `position: fixed; top: 0;` |
| Texto sobrepõe a logo | Falta o `<thead>` spacer | Adicionar `<div class="header-spacer">` no `<thead>` |
| Documento centralizado na página | `@page { margin }` com valor alto | Usar `@page { margin: 0 }` |
| Rodapé cortado na última página | Falta o `<tfoot>` spacer | Adicionar `<div class="footer-spacer">` no `<tfoot>` |
| Gradiente some na impressão | Opção "Gráficos de fundo" desativada | Usar cores sólidas no SVG, não gradientes |
| Assinatura cortada entre páginas | Falta `page-break-inside: avoid` | Adicionar a regra no bloco de assinaturas |

---

## Fontes Utilizadas

- **Outfit** (Google Fonts): Títulos e elementos de destaque
- **Inter** (Google Fonts): Corpo do texto

```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;700;900&family=Inter:wght@300;400;700&display=swap" rel="stylesheet">
```

---

> **Nota:** Este README documenta a arquitetura validada em abril de 2026. A técnica é compatível com Google Chrome 120+ e navegadores baseados em Chromium. Para outros navegadores (Firefox, Safari), podem ser necessários ajustes adicionais.
