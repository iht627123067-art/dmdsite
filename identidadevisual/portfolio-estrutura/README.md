# Portfolio Estrutura — Instituto De Mãos Dadas

Pasta contendo a documentação completa e o site de portfólio interativo para o Instituto De Mãos Dadas.

## 📁 Arquivos

| Arquivo | Descrição |
|---------|-----------|
| [`guia-diretor-arte-portfolio.md`](./guia-diretor-arte-portfolio.md) | Documento principal com estrutura completa do site de portfólio |
| [`portfolio-interativo.html`](./portfolio-interativo.html) | Site interativo para visualização e votação |
| `README.md` | Este arquivo de navegação |

## 🌐 Site Interativo

### Portfolio Interativo ([`portfolio-interativo.html`](./portfolio-interativo.html))

Site completo com **7 seções** para o cliente visualizar e escolher as opções de marca:

| Seção | Conteúdo |
|-------|----------|
| **Hero** | Abertura com logo, tagline e CTA para começar |
| **Manifesto** | Declaração de propósito da identidade visual |
| **Versões da Marca** | 4 variações do logo com preview |
| **Tipografia** | 3 combinações tipográficas com preview |
| **Paleta de Cores** | 3 variações de cores com swatches HEX |
| **Materiais** | 6 materiais de aplicação com mockups |
| **Resumo + Envio** | Revisão das escolhas + formulário de envio |

### Funcionalidades do Site

- ✅ **Cards clicáveis** com feedback visual (seleção, escala)
- ✅ **Persistência** via localStorage (escolhas mantidas ao recarregar)
- ✅ **Resumo flutuante** mostrando quantidade de escolhas feitas
- ✅ **Progresso visual** no header com dots animados
- ✅ **Animações de fade-in** ao rolar a página
- ✅ **FormSubmit** configurado para envio de escolhas por e-mail
- ✅ **Responsivo** (mobile, tablet, desktop)
- ✅ **WCAG** (contrastes validados, fontes legíveis)

## 📄 Documentação Completa

### Guia do Diretor de Arte ([`guia-diretor-arte-portfolio.md`](./guia-diretor-arte-portfolio.md))

Documento de **462 linhas** com todas as especificações:

#### Seção 1: Estrutura do Site
- Mapa com 7 páginas: Home, Sobre, Projetos, Impacto, Comunidade, Parceiros, Contato
- Frase de propósito + elementos visuais para cada página

#### Seção 2: Tratamento da Marca
- Tamanhos mínimos (120px digital / 25mm impresso)
- Área de respiro (15% da altura)
- 5 versões do logo (principal, horizontal, 1 cor, negativa, monograma)
- Boas/más práticas para transformação social

#### Seção 3: Variações Tipográficas (3 Opções)
| Opção | Combinação | Perfil |
|-------|-----------|--------|
| 1 ⭐ | Space Grotesk + Inter + Anton | **RECOMENDADA** — Inovação Social |
| 2 | Anton + Roboto | Alternativa Campanha/Urbano |
| 3 | Space Grotesk + Crimson Pro | Alternativa Institucional/Premium |

#### Seção 4: Paleta de Cores
- **Principal:** Azul Marinho `#153065`, Roxo `#7F4CA9`, Âmbar `#FF9E00`
- **Apoio:** Lilás `#BD90DA`, Branco Gelo `#FAFAFA`, Neutro Escuro `#0F0F1A`
- **3 Variações:** Institucional (60-30-10), Campanha (vibrante), Premium (sóbria)
- Validação WCAG AA/AAA

#### Seção 5: Materiais de Aplicação (7 materiais)
1. Capa de Relatório de Impacto
2. Post de Redes Sociais (Carrossel)
3. Cartão de Visita
4. Folder Institucional
5. Apresentação de Slides (Pitch)
6. Banner para Evento Comunitário
7. Merchandising (Caneca/Camiseta)

#### Seção 6: Opções para Escolha
- Todas numeradas (Opção 1, 2, 3)
- Mini resumo de recomendação após cada bloco

#### Seção 7: Tom e Coerência Social
- Respeito às pessoas retratadas
- Celebração da diversidade
- Transformação social colaborativa

#### Seções Extras
- **Seção 8:** Checklist de Implementação
- **Seção 9:** Anexos e Referências

## 🔗 Referências

- [Design Tokens](../maos-dadas-tokens.yaml)
- [Brandbook](../01-brandbook.md)
- [Logo Principal](../logo-dmd-new.svg)
- [Logo Negativo](../logo-dmd.svg)
- [Logo Contraste](../logo-dmdcontrast.svg)

## 🎯 Como Usar

1. **Para visualizar o site:** Abra [`portfolio-interativo.html`](./portfolio-interativo.html) em um navegador
2. **Para editar o código:** Abra em um editor de código (VS Code, etc.)
3. **Para ver a documentação:** Leia [`guia-diretor-arte-portfolio.md`](./guia-diretor-arte-portfolio.md)

### Configuração do FormSubmit

No arquivo [`portfolio-interativo.html`](./portfolio-interativo.html), linha ~580, configure o e-mail de destino:

```html
<form action="https://formsubmit.co/seu-email@demãosdadas.org.br" method="POST">
```

Substitua `seu-email@demãosdadas.org.br` pelo e-mail real do Instituto.

---

*Instituto De Mãos Dadas — Goiânia, GO*  
*"Em defesa dos direitos sociais"*
