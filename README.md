# 🚛 FleetFlow — Gestão Financeira para Transportadora

Sistema web simples e completo para controle financeiro de uma transportadora de pequeno e médio porte. Funciona direto no navegador (computador ou celular), sem instalação, sem servidor, sem login, sem mensalidade.

---

## 📑 Sumário

1. [O que é o FleetFlow](#-o-que-é-o-fleetflow)
2. [Como abrir](#-como-abrir)
3. [Funcionalidades](#-funcionalidades)
4. [Tour pela interface](#-tour-pela-interface)
5. [Primeiros 30 minutos](#-primeiros-30-minutos)
6. [Como cadastrar Fretes](#-como-cadastrar-fretes)
7. [Como cadastrar Contas Fixas](#-como-cadastrar-contas-fixas)
8. [Entendendo o Dashboard](#-entendendo-o-dashboard)
9. [Como ler os gráficos](#-como-ler-os-gráficos)
10. [Saúde Financeira (Score)](#-saúde-financeira-score)
11. [Rotinas recomendadas](#-rotinas-recomendadas)
12. [Cenários práticos](#-cenários-práticos)
13. [Fórmulas e cálculos](#-fórmulas-e-cálculos)
14. [Glossário](#-glossário)
15. [Backup e segurança](#-backup-e-segurança)
16. [Privacidade e dados](#-privacidade-e-dados)
17. [Uso no celular](#-uso-no-celular)
18. [Problemas comuns](#-problemas-comuns)
19. [FAQ](#-faq)
20. [Dicas pro](#-dicas-pro)
21. [Tecnologias](#-tecnologias)
22. [Estrutura](#-estrutura-de-arquivos)

---

## 🎯 O que é o FleetFlow

O FleetFlow é uma ferramenta para **donos de transportadora, autônomos, frotistas e gestores** que querem entender se a operação está dando lucro de verdade — descontando combustível, pedágios, comissões e contas fixas.

### ✅ O que ele FAZ
- Cadastrar fretes (viagens) com todos os custos
- Calcular lucro automaticamente, viagem por viagem
- Controlar contas fixas da empresa
- Mostrar dashboard visual com gráficos
- Comparar meses
- Exportar/importar backup
- Funcionar offline depois de aberto pela primeira vez

### ❌ O que ele NÃO faz
- Emitir nota fiscal
- Gerar boleto / cobrança
- Rastreamento por GPS
- Folha de pagamento completa
- Sincronizar entre dispositivos automaticamente
- Substituir contador

> ⚠️ Não substitui contabilidade. Serve como **ferramenta de gestão operacional** pra você ter clareza do dia a dia.

---

## 🚀 Como abrir

### No computador
1. Vá até a pasta `transportadora-financeiro`
2. Dê **duplo clique** em `index.html`
3. O sistema abre no navegador padrão

### No celular (recomendado)
1. Envie o arquivo `index.html` para o celular (WhatsApp, e-mail, Drive)
2. Abra no Chrome (Android) ou Safari (iPhone)
3. **Adicione à tela inicial** — vira praticamente um aplicativo

> 💡 **Pra acessar de qualquer lugar:** hospede o `index.html` em [Netlify Drop](https://app.netlify.com/drop) (arrastar e soltar), [GitHub Pages](https://pages.github.com/) ou [Vercel](https://vercel.com/). Salve a URL nos favoritos.

---

## ✨ Funcionalidades

| Recurso | Descrição |
|---|---|
| 📊 Dashboard | Indicadores do mês com cards e gráficos |
| 🚚 Fretes | Cadastro de viagens com cálculo automático de lucro |
| 💰 Contas Fixas | Despesas mensais categorizadas |
| 📈 Gráficos | Linha mensal, donut de custos, gauge de saúde |
| 🔍 Filtros | Busca por texto, filtro por mês e categoria |
| 🌗 Tema | Claro e escuro com animação ripple |
| 💾 Persistência | Auto-save no navegador (localStorage) |
| 📊 Excel | Exportar/Importar `.xlsx` (3 abas: Fretes, Contas, Resumo) |
| 📤 Backup JSON | Exportar/Importar arquivo de backup completo |
| 📱 Mobile | 100% responsivo com cards no mobile |
| 🔒 Privacidade | Tudo local, sem servidor, sem login |

---

## 🗺️ Tour pela interface

### Sidebar (menu lateral)
- **Geral**: Visão Geral, Fretes, Contas Fixas
- **Ajuda**: Como Usar (documentação dentro do sistema)
- **Excel**: Exportar / Importar `.xlsx`
- **Backup JSON**: Exportar / Importar backup completo

No celular fica escondida e abre pelo botão hambúrguer (☰).

### Topbar
Boas-vindas + botão de tema (lua/sol) no canto direito.

### Visão Geral (Dashboard)
- 5 cards de indicadores
- Medidor de saúde financeira (gauge)
- Gráfico de evolução mensal
- Donut de distribuição de custos
- Tabela de fretes recentes
- Seletor de mês no canto superior direito

### Fretes
Formulário de cadastro no topo + lista completa com filtros.

### Contas Fixas
Mesma estrutura: cadastro + lista + filtros (incluindo categoria).

---

## ⏱️ Primeiros 30 minutos

### 1️⃣ Cadastre 3-5 fretes recentes (10 min)
Pegue notas/recibos das últimas semanas e cadastre. Se não lembrar exato dos gastos, deixe um valor médio — o importante é começar.

### 2️⃣ Lance suas contas fixas do mês (10 min)
Aluguel, internet, contador, salários, impostos. Tudo o que sai todo mês independente de viagem.

### 3️⃣ Vá pra Visão Geral (5 min)
Veja como o dashboard ficou. Olhe o medidor de saúde. Filtre o mês.

### 4️⃣ Faça seu primeiro backup (5 min)
Sidebar → Exportar Backup. Baixa um arquivo `.json`. Mande pro WhatsApp.

---

## 🚚 Como cadastrar Fretes

### Campos do formulário

| Campo | Descrição |
|---|---|
| **Data** | Dia em que a viagem aconteceu (ou foi paga) |
| **Cliente** | Quem contratou. Use sempre o mesmo nome para a mesma empresa |
| **Motorista** | Quem dirigiu. Mesma regra de padronização |
| **Origem / Destino** | Cidades. Padronize: "Cuiabá — MT" |
| **Valor do Frete** | Bruto recebido pelo cliente, antes dos custos |
| **Combustível** | Diesel/gasolina nessa viagem específica |
| **Pedágio** | Soma dos pedágios da rota |
| **Comissão** | Pago ao motorista nessa viagem |
| **Alimentação** | Refeições do motorista (se a empresa banca) |
| **Outros Gastos** | Estacionamento, lavagem, lonas, multas, etc |

### Exemplo prático

Frete Cuiabá (MT) → Goiânia (GO), cliente Cargill, motorista João Silva, valor R$ 4.500.

```
Valor do Frete:    R$ 4.500,00
Combustível:       R$ 1.800,00
Pedágio:           R$   180,00
Comissão (10%):    R$   450,00
Alimentação:       R$    80,00
Outros:            R$    40,00
─────────────────────────────
Total Gastos:      R$ 2.550,00
Lucro do Frete:    R$ 1.950,00 ✓
Margem:            43%
```

> 🎯 Margem **abaixo de 20-25%** merece atenção.

### ⚠️ Erros comuns

- Esquecer pedágio ou comissão (distorce o lucro)
- Cadastrar dias depois e estimar errado
- Misturar grafia do mesmo cliente ("Cargill" vs "Cargil")
- Lançar custo fixo (ex: aluguel) como "Outros" no frete

---

## 💰 Como cadastrar Contas Fixas

Conta fixa é tudo que a empresa paga **independente de fazer viagem ou não**.

### Categorias

| Categoria | O que entra |
|---|---|
| **Aluguel** | Garagem, escritório, galpão |
| **Internet** | Wi-Fi, telefone, plano celular empresarial |
| **Salários** | Salário fixo de motoristas, secretária, mecânico |
| **Contador** | Honorários do escritório de contabilidade |
| **Impostos** | DAS, IPVA, ICMS, ISS, INSS empresarial |
| **Manutenção** | Óleo, pneus, revisões, peças, reparos grandes |
| **Seguros** | Seguro do caminhão, RCTR-C, vida, frota |
| **Outros** | Software, marketing, água, luz, rastreamento |

### ⚠️ NÃO confunda

Combustível, pedágio, comissão e alimentação **NÃO são contas fixas** — são **custos de viagem**, lançados no frete específico.

---

## 📊 Entendendo o Dashboard

### 5 Cards de Indicadores

| Card | O que mostra |
|---|---|
| 💚 **Receita de Fretes** | Soma do "Valor" de todas as viagens do mês. Bruto. |
| 🟠 **Custos de Viagem** | Soma de combust. + pedágio + comissão + alim. + outros |
| 🩷 **Custos Fixos** | Soma das contas fixas do mês |
| 💎 **Lucro / Prejuízo** | Receita − todos os custos. Vira "Prejuízo" se negativo |
| 💜 **Fretes no mês** | Quantidade de viagens cadastradas |

---

## 📈 Como ler os gráficos

### 📉 Evolução Mensal (linha)
Receita (roxo) e custos totais (rosa) mês a mês. Se a linha rosa se aproximar da roxa, **alerta**.

### 🍩 Distribuição de Custos (donut)
Pra onde foi cada real do mês. Combustível, pedágio, comissão, alimentação, outros e contas fixas.

> Se "Combustível" estiver dominando (60%+), revise rota, peso da carga ou consumo.

### 🎯 Saúde Financeira (gauge)
Score de 0 a 1000 baseado na margem de lucro.

---

## 🩺 Saúde Financeira (Score)

| Score | Status | Margem |
|---|---|---|
| 🟢 700+ | Excelente | > 22% |
| 🟡 500-699 | Saudável | 10% a 22% |
| 🟠 300-499 | Atenção | 0% a 10% |
| 🔴 0-299 | Crítico | Negativa ou ~zero |

### 💡 Como melhorar a margem

- Renegociar valor com clientes recorrentes
- Recusar fretes muito mal pagos
- Otimizar rota (evitar pedágios caros, postos baratos)
- Reduzir consumo de combustível (manutenção, peso, velocidade)
- Consolidar viagens (não rodar caminhão vazio)
- Cortar contas fixas desnecessárias

---

## 📅 Rotinas recomendadas

### 🟢 Diária — 5 minutos
Cadastrar os fretes que aconteceram no dia, com recibos em mãos.

### 🔵 Semanal — 15 minutos
Revisar fretes da semana, lançar contas pagas, **exportar backup**.

### 🟣 Mensal — 30 minutos
Fechamento: filtrar mês, analisar, comparar com o anterior, anotar conclusões, fazer backup do mês fechado.

---

## 🎯 Cenários práticos

### "Vale a pena fazer essa rota X→Y?"
Use a busca em "Fretes" pela cidade. Veja todos os fretes anteriores nessa rota e a média de margem. Se a maioria fica abaixo de 20%, é rota ruim.

### "Qual motorista dá mais lucro?"
Busque pelo nome em "Fretes" e some os lucros. Compare considerando que rotas diferentes têm margens diferentes.

### "Qual cliente é mais rentável?"
Busque pelo cliente. Veja receita acumulada e lucro. Cliente que paga muito mas exige rota cara pode dar menos lucro que cliente menor com rota lucrativa.

### "Onde meu dinheiro está indo?"
No Dashboard, donut "Distribuição de Custos". A maior fatia te diz onde focar.

### "Como mostrar pro contador?"
Tire print do Dashboard com mês filtrado, ou exporte o backup `.json` e mande.

### "Esse mês foi melhor ou pior?"
Use o seletor de mês no Dashboard. Compare receita, lucro e score entre meses. O gráfico de linha já mostra a tendência visual.

---

## 🧮 Fórmulas e cálculos

```
Total de Gastos do Frete = Combustível + Pedágio + Comissão + Alimentação + Outros

Lucro do Frete = Valor do Frete − Total de Gastos
Margem do Frete = (Lucro ÷ Valor do Frete) × 100

Receita do Mês = Σ Valor de todos os Fretes
Custos de Viagem = Σ Total de Gastos de todos os Fretes
Custos Fixos = Σ Valor de todas as Contas Fixas

Lucro Líquido = Receita − Custos de Viagem − Custos Fixos
Score de Saúde ≈ ((Margem + 0.2) ÷ 0.6) × 1000  [limitado de 0 a 1000]
```

---

## 📘 Glossário

| Termo | Significado |
|---|---|
| **Frete** | Cada viagem feita pra um cliente |
| **Receita** | Dinheiro que entra (valor dos fretes) |
| **Custo de Viagem** | Despesa que só acontece se faz a viagem |
| **Custo Fixo** | Despesa mensal independente de viagem |
| **Lucro Bruto** | Receita − custos de viagem |
| **Lucro Líquido** | Receita − todos os custos |
| **Margem de Lucro** | Lucro ÷ receita, em % |
| **Comissão** | Parte do frete que vai pro motorista (10-15%) |
| **Backup** | Cópia de segurança em arquivo `.json` |
| **localStorage** | Lugar dentro do navegador onde os dados ficam |

---

## 💾 Backup e segurança

### 🚨 LEIA ISSO

Os dados ficam **só no navegador** deste aparelho. Se você limpar histórico, desinstalar o navegador, der reset no celular ou usar modo anônimo, **os dados somem**. Backup é a única proteção.

O sistema oferece **dois formatos** de export/import: **Excel** e **JSON**.

### 📊 Excel (.xlsx) — pra usar em planilha

**Quando usar:** mandar pro contador, abrir no Excel/Sheets, imprimir, compartilhar com sócio, ou migrar de uma planilha antiga.

**Exportar:**
1. Sidebar → **"Exportar Excel"**
2. Baixa `fleetflow-YYYY-MM-DD.xlsx` com 3 abas:
   - **Fretes** — todas as viagens com Total e Lucro calculados
   - **Contas Fixas** — todas as despesas
   - **Resumo Mensal** — totais e margem mês a mês
3. Datas e valores já vêm formatados (R$ e dd/mm/yyyy)

**Importar:**
1. Sidebar → **"Importar Excel"**
2. Escolha o arquivo `.xlsx` (ou `.xls` / `.csv`)
3. Sistema lê as abas "Fretes" e "Contas Fixas"
4. Você escolhe:
   - ➕ **Adicionar** — soma aos dados atuais
   - 🔄 **Substituir** — apaga tudo e fica só o do Excel

> 💡 **Não sabe a estrutura?** Exporte primeiro (mesmo vazio) pra ter o modelo, preencha no Excel, e depois importe.

### 💾 JSON (.json) — pra backup completo

**Quando usar:** backup de segurança, trocar de aparelho, restaurar exato como estava, guardar arquivo histórico.

**Exportar:**
1. Sidebar → **"Exportar Backup"**
2. Baixa `fleetflow-backup-YYYY-MM-DD.json`
3. Mande pro WhatsApp / Drive / e-mail

**Importar:**
1. Sidebar → **"Importar Backup"**
2. Escolha o arquivo `.json`
3. Confirma — **substitui tudo** pelo backup (sem opção de adicionar)

### Frequência ideal
- **Mínimo**: 1× por semana
- **Recomendado**: a cada fechamento mensal
- **Antes de**: trocar de celular, limpar navegador, atualizar SO

> 💡 **Backup duplo**: guarde em DOIS lugares (Drive + WhatsApp).

### 🆚 Excel ou JSON?

| Excel (.xlsx) | JSON (.json) |
|---|---|
| Pra ler em planilha | Pra restaurar no sistema |
| Mandar pro contador | Backup de segurança |
| Imprimir relatório | Trocar de aparelho |
| Compartilhar dados | Arquivo histórico |
| Aceita adicionar OU substituir | Só substitui |

---

## 🔒 Privacidade e dados

- ✅ **Nada é enviado pra servidor** — sem login, sem nuvem
- ✅ **Dados só nesse aparelho** — só você vê
- ✅ **Funciona offline** — depois de aberto a primeira vez
- ✅ **Sem cookies de rastreamento** — só localStorage para dados e tema
- ⚠️ **Dependências externas** — Chart.js e Google Fonts (CDN público, mas não recebem seus dados)
- ✅ **LGPD** — como dados ficam só com você, não há tratamento por terceiros

---

## 📱 Uso no celular

### Adicionar à tela inicial (vira app)

**iPhone (Safari):**
1. Abrir o sistema no Safari
2. Tocar no botão de compartilhar
3. Rolar e tocar em "Adicionar à Tela de Início"
4. Confirmar

**Android (Chrome):**
1. Abrir o sistema no Chrome
2. Menu (3 pontos)
3. "Adicionar à tela inicial"
4. Confirmar nome

### Diferenças no mobile
- Sidebar abre por botão hambúrguer (☰)
- Tabelas viram cards verticais
- Formulário em 2 colunas (1 em telas pequenas)
- Inputs com tamanho confortável pra dedo
- Suporta safe-area de iPhone com notch

---

## 🛠️ Problemas comuns

### "Não consigo cadastrar"
Verifique se todos os campos obrigatórios estão preenchidos. Use Chrome, Firefox, Edge ou Safari atualizados.

### "Os números não batem"
Confira o filtro de mês no Dashboard. Confira se a data do frete tá certa.

### "Perdi todos os dados"
Se tem backup `.json`, importe. Se não tem... infelizmente não dá pra recuperar (não temos servidor com cópia). **Crie o hábito de backup semanal.**

### "Lento com muitos fretes"
Acima de 1000 registros, pode demorar. Use filtros de mês e busca pra mostrar menos itens.

### "Não abre no celular antigo"
Em Android 7- ou iOS 13-, pode dar problema. Atualize o navegador ou tente em outro aparelho.

---

## ❓ FAQ

**Posso usar em vários aparelhos ao mesmo tempo?**
Pode, mas cada aparelho tem dados próprios. Pra manter igual, exporte de um e importe no outro.

**Tem limite de quantos fretes posso cadastrar?**
O localStorage aguenta uns 5-10MB — facilmente +50.000 registros.

**Como editar um frete?**
Hoje só excluindo (🗑) e cadastrando de novo. Edição direta tá no roadmap.

**Funciona offline?**
Sim. Depois de carregar pela primeira vez, fica em cache.

**Tem versão paga?**
Não. 100% gratuito, sem limite, sem anúncio.

**Os dados são compartilhados com alguém?**
Não. Tudo local. Sem analytics, sem rastreamento.

**Como zerar tudo?**
Console do navegador (F12 → Console) → `localStorage.clear()` → Enter → recarregar. ⚠️ Faça backup antes!

**Posso compartilhar com meu sócio?**
Sim, mas cada um terá dados próprios. Use exportar/importar pra sincronizar manualmente.

---

## 💡 Dicas pro

- 📌 **Padronize nomes** — sempre escreva clientes/motoristas igual
- 📌 **Cadastre na hora** — em até 24h depois da viagem
- 📌 **Compare meses** — anote conclusões num caderno
- 📌 **Backup duplo** — em DOIS lugares diferentes
- 📌 **Use filtros** — não tente ler tudo junto
- 📌 **Lance até o que parece pequeno** — R$ 30 × 60 viagens = R$ 1.800
- 📌 **Cuidado com fretes baratos** — sempre cheque a margem antes de aceitar
- 📌 **Tema escuro pra estrada** — cansa menos os olhos à noite

---

## 🛠️ Tecnologias

- HTML, CSS e JavaScript puro (sem framework)
- [Chart.js](https://www.chartjs.org/) — gráficos
- [SheetJS (xlsx)](https://sheetjs.com/) — export/import Excel
- [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) — tipografia
- View Transitions API — animação de tema
- localStorage — persistência

> Apenas **um arquivo HTML** — sem build, sem dependências instaladas, sem servidor.

---

## 📂 Estrutura de arquivos

```
transportadora-financeiro/
├── index.html      ← O sistema completo (abra este arquivo)
└── README.md       ← Esta documentação
```

---

## 🚀 Roadmap (futuro)

- [ ] Edição direta de fretes e contas
- [ ] Sincronização entre dispositivos (opcional, com nuvem)
- [ ] Relatório PDF/Excel pra fechamento mensal
- [ ] Cadastro separado de motoristas e veículos
- [ ] Cálculo de custo por km
- [ ] Alertas de manutenção
- [ ] Modo offline com Service Worker (PWA real)

---

Feito com ❤️ para a gestão da sua transportadora. **Boa rodagem!** 🛣️
