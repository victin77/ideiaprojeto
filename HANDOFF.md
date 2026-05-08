# 📋 Handoff — Ideias futuras pro FleetFlow

Lista organizada de melhorias que ficaram pra próxima iteração. Ordenadas por impacto/esforço.

---

## 🥇 Alto impacto

### 1. PWA real (Service Worker + manifest.json)
**O quê:** transformar em Progressive Web App de verdade.
**Por quê:** instala como app nativo no celular (ícone na tela inicial sem barra do navegador), funciona 100% offline mesmo sem ter aberto antes, splash screen ao abrir.
**Como:**
- Criar `manifest.json` com nome, ícones, theme_color
- Criar `sw.js` (Service Worker) que cacheia assets
- Registrar SW no JS principal
- Criar ícones em vários tamanhos (192x192, 512x512)
**Esforço:** médio (2-3h)

### 2. Cadastro separado de Clientes / Motoristas / Veículos
**O quê:** listas próprias de entidades, com autocomplete no form de frete.
**Por quê:** acaba com erro de digitação (`Cargill` vs `Cargil`), permite gerar relatório por cliente/motorista, lista veículos com placa/modelo/ano.
**Como:**
- Novas seções na sidebar: "Clientes", "Motoristas", "Veículos"
- Cada uma com cadastro próprio
- No form de frete, campos de Cliente/Motorista viram autocomplete que sugerem da lista
- Migração: extrair nomes únicos dos fretes existentes
**Esforço:** alto (4-6h)

### 3. Relatório PDF mensal
**O quê:** botão "Gerar PDF do mês" que monta relatório formatado.
**Por quê:** mandar pro contador, sócio, banco. Hoje só print de tela.
**Como:**
- Usar `jsPDF` ou `html2canvas` via CDN
- Layout: capa com mês/empresa, tabela de fretes, tabela de contas, resumo, gráficos
**Esforço:** médio (3h)

### 4. Metas mensais
**O quê:** definir "quero R$ X de lucro este mês" e ver progresso.
**Por quê:** motiva e dá direção.
**Como:**
- Nova seção em "Configurações" pra definir meta
- Card no dashboard com barra de progresso
- Cor verde se atingiu, amarela se 50%+, vermelha se atrás
**Esforço:** baixo (1-2h)

---

## 🥈 Médio impacto

### 5. Ranking de rentabilidade
**O quê:** "Top 5 clientes / motoristas / rotas mais lucrativos do mês" no dashboard.
**Por quê:** identifica o que/quem dá mais retorno.
**Esforço:** baixo (1h)

### 6. Análise sazonal / comparação ano a ano
**O quê:** comparar Maio/2026 com Maio/2025.
**Por quê:** identifica padrões sazonais (mês fraco, mês forte).
**Esforço:** baixo (1h)

### 7. Filtros avançados
**O quê:** filtrar fretes por motorista, cliente ou rota especifica.
**Por quê:** análise mais focada.
**Esforço:** baixo (1h)

### 8. Lembrete de backup
**O quê:** toast amigável se passou >7 dias sem exportar.
**Por quê:** previne perda de dados.
**Como:** salvar timestamp do último backup no localStorage, comparar ao abrir.
**Esforço:** muito baixo (15min)

### 9. Edição em massa
**O quê:** selecionar vários fretes/contas e excluir/editar de uma vez.
**Por quê:** quando tem muito registro pra ajeitar.
**Esforço:** médio (2h)

---

## 🥉 Polimento e extras

### 10. Atalhos de teclado
- `Ctrl/Cmd + N` — novo frete
- `Ctrl/Cmd + K` — busca rápida
- `Esc` — fechar modal
- `1/2/3` — alternar abas
**Esforço:** baixo (1h)

### 11. Tema "auto" baseado em horário
Light durante o dia, dark à noite.
**Esforço:** muito baixo (15min)

### 12. Animações de entrada
Stagger nos cards do dashboard, fade-in nos gráficos.
**Esforço:** baixo (30min)

### 13. Tooltips contextuais
Explicações pequenas ao passar o mouse em ícones e métricas.
**Esforço:** baixo (1h)

### 14. Empty states melhores
CTA chamativo nos estados vazios ("Nenhum frete ainda — Cadastrar primeiro").
**Esforço:** muito baixo (15min)

---

## 🌍 Recursos de negócio (longo prazo)

### 15. Impostos sobre lucro
Aplicar % de carga tributária pra mostrar lucro líquido após impostos.

### 16. Separação PJ × PF
Tag em contas pra separar gastos da empresa de gastos pessoais (sócio).

### 17. Previsão de fechamento
Baseado no ritmo de fretes do mês, projetar onde vai fechar.

### 18. Importar OFX / extrato bancário
Conciliar pagamentos com contas cadastradas.

### 19. Multi-empresa
Várias empresas/CNPJs no mesmo sistema (perfis).

### 20. Sincronização opcional na nuvem
Login opcional pra sincronizar entre dispositivos (Firebase, Supabase).

---

## 🎮 Gamificação

### 21. Conquistas / badges
- "Primeira semana cadastrada"
- "30 fretes em um mês"
- "Margem acima de 25% por 3 meses"
- "Backup feito 4 semanas seguidas"

### 22. Score histórico de gestor
Pontuação acumulada baseada em consistência de uso, margem, backup, etc.

---

## 🔧 Técnico / refatoração

### 23. Quebrar em arquivos separados
Conforme cresce, separar em `app.js`, `charts.js`, `excel.js`, `style.css`.

### 24. Migrar pra TypeScript
Mais segurança em tipos quando crescer.

### 25. Testes
Unitários pelo menos pras funções de cálculo (lucroFrete, totalGastos, score).

---

## ✅ Já implementado (resumo)

- ✅ Cadastro de fretes com cálculo automático de lucro
- ✅ Cadastro de contas fixas categorizadas
- ✅ Dashboard com 5 KPIs + gauge + 2 gráficos + fretes recentes
- ✅ Filtros por mês, busca por texto, filtro por categoria
- ✅ Tema claro/escuro com animação ripple
- ✅ Mobile-first 100% responsivo (cards no mobile)
- ✅ Documentação interna completa (18 seções)
- ✅ Export/Import JSON
- ✅ Export/Import Excel (3 abas: Fretes, Contas, Resumo)
- ✅ Edição de registros
- ✅ Modo demo com restauração segura
- ✅ Custo por km (opcional)
