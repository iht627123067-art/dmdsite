# 🧠 DMD Brand Builder: Documentação do Motor Generativo

Este documento detalha o funcionamento técnico e a lógica estratégica por trás do **Brand Builder Avançado** do Instituto De Mãos Dadas. O sistema foi projetado para ser uma ponte entre a **psicologia da marca** e a **aplicação técnica instantânea**.

---

## 🏗️ Arquitetura do Sistema

O Brand Builder opera em três camadas de profundidade:

### 1. Camada de Fundação (Identity Core)
Localizada em `client/src/data/brand-identity.ts`, esta camada armazena o "DNA" da marca:
- **Psicologia Cromática**: Conjuntos de cores baseados em impacto emocional.
- **Narrativa Tipográfica**: Pilhas de fontes associadas a vozes institucionais (Espécimes).
- **Arquitetura de Nome**: Definição da hierarquia verbal (Uso do termo "Instituto").

### 2. Camada Generativa (The Logic)
Implementada em `client/src/pages/Examples.tsx`, esta camada orquestra como a Fundação afeta os Assets:
- **Lifting de Estado**: As decisões tomadas nas abas de Identidade são mantidas em um estado global que alimenta o `AssetRenderer`.
- **Flag `isSmart`**: Cada categoria de asset (Caneca, Crachá, etc.) possui um modelo inicial marcado como `isSmart: true`. Este modelo não possui configuração fixa; ele consome dinamicamente o estado global da marca.

### 3. Camada de Aplicação (React Assets)
Localizada em `client/src/components/assets/`, esta camada contém componentes puramente funcionais:
- **`MugAsset`**, **`BadgeAsset`**, **`NotepadAsset`**, **`PenAsset`**.
- Estes componentes aceitam `Props` que podem ser fornecidas manualmente (assets estáticos) ou injetadas pelo motor generativo (sugestão inteligente).

---

## 🛠️ Como Expandir o Sistema

### Para adicionar uma nova Paleta ou Tipografia:
1. Edite `client/src/data/brand-identity.ts`.
2. Adicione um novo objeto ao array `colorSchemes` ou `typographyStyles`.
3. O novo item aparecerá automaticamente nas abas de seleção da página de Exemplos.

### Para adicionar um novo Asset Físico:
1. Crie um novo componente React em `client/src/components/assets/` (Ex: `TShirtAsset.tsx`).
2. Adicione a nova categoria ao array `examples` em `Examples.tsx`.
3. No `AssetRenderer`, adicione o `case` correspondente para renderizar seu novo componente.
4. Certifique-se de incluir um modelo com `isSmart: true` para habilitar a sugestão dinâmica.

---

## 📚 Filosofia de Design: Narrativa Visual

O diferencial deste processo é que **a forma segue a estratégia**:
- **Cor como Comunicação**: A cor não é escolhida por "beleza", mas por sua função (Psicologia Cromática de Sole Otero).
- **Tipografia como Arquitetura**: A letra fala antes de ser lida (Teoria de Enric Jardí).
- **Consistência 60-30-10**: O motor respeita a regra de distribuição cromática para garantir equilíbrio visual em qualquer aplicação gerada.

---

## 🏁 Dossiê e Exportação
O processo culmina no **Dossiê Estratégico**, que remove a abstração técnica e apresenta a marca como um organismo vivo: Fundação (O que a marca é) -> Aplicações (Como a marca se manifesta).

> [!TIP]
> Use este guia para manter a integridade visual da marca ao criar novos materiais de campanha ou expandir a presença digital do Instituto.
