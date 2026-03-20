# 📋 My Daily Habits

Projeto desenvolvido ao longo do **Módulo 04 — Desenvolvimento Front-end com React** do curso ITEAM.

🔗 **[Acesse o projeto aqui](https://projeto-meus-habitos-diarios.vercel.app/)**
---

## 🎯 Sobre o projeto

Aplicação para organização e acompanhamento de hábitos diários. O usuário pode cadastrar hábitos, acompanhar o progresso semanal e visualizar detalhes de cada hábito em uma página dedicada.

---

## 📚 O que foi aprendido — Exercícios 1 a 7

### 1/7 — Iniciando o Porjeto
Do zero ao projeto React, rodando com vite. 

### 2/7 — Props
Dados viviam no componente pai (`App`) e desciam para os filhos via props. Primeiro contato com o fluxo unidirecional de dados do React.

### 3/7 — Estado local
Introdução ao `useState`. O estado dos hábitos passou a viver no componente que o usa (`HabitList`), eliminando a necessidade de passar dados pelo pai.

### 4/7 — useEffect e localStorage
O `useEffect` foi usado para sincronizar o estado com o `localStorage`, garantindo que os hábitos persistam após recarregar a página.

### 5/7 — Formulário avançado
Formulário controlado com `handleChange` unificado, validação em tempo real e `useRef` para controle de foco no campo de nome.

### 6/7 — Context API
O estado dos hábitos foi movido para um contexto global (`HabitsContext`). Componentes irmãos como `HabitList` e `BemVindo` passaram a consumir o contexto diretamente via hook customizado `useHabits()`, sem prop drilling.

### 7/7 — React Router DOM
O projeto se tornou uma SPA com múltiplas rotas. Cada seção ganhou uma URL própria, o `Header` usa `NavLink` com destaque na rota ativa, e hábitos podem ser acessados em página de detalhes via URL dinâmica.

---

## 🗂️ Estrutura de pastas

```
src/
  components/
    Header.jsx        — NavLink com destaque na rota ativa
    Footer.jsx
    HabitCard.jsx     
    HabitList.jsx     
    BemVindo.jsx      
    SecaoHabitos.jsx
  contexts/
    HabitsContext.jsx — createContext + HabitsProvider + useHabits
  layouts/
    LayoutPrincipal.jsx — Outlet compartilhando Header e Footer
  pages/
    PaginaInicio.jsx
    PaginaHabitos.jsx
    PaginaNovoHabito.jsx
    PaginaDetalhes.jsx  — useParams + useNavigate
    PaginaNaoEncontrada.jsx
  App.jsx             — Routes + Route
  main.jsx            — BrowserRouter + HabitsProvider
  style.css            - Todos os estilos em página unica
```

---

## 🔗 Rotas

| Rota | Página |
|---|---|
| `/` | Página inicial com resumo |
| `/habitos` | Lista de hábitos |
| `/habitos/novo` | Formulário de novo hábito |
| `/habito/:id` | Detalhes de um hábito |
| `/pagina-qualquer` | Página 404 |

---

## 🛠️ Tecnologias

- React 
- Vite
- CSS 
- JavaScript
- Node.js/npm

💬 O que aprendi
Para o primeiro contato com React, mesmo seguindo as aulas passo a passo foi um desafio. O projeto, as aulas e os bugs "acidentais" do professor — uma experiência e tanto.
A parte mais difícil foi entender quando usar estado local e quando usar contexto global, essa parte de "será que o componente precisa de mais informações" começo parecia confuso, mas depois de ver na prática ficou muito mais claro.
A mudança para o React Router também foi um momento importante, simplesmente parar de colocar tudo em uma tela só como aprendemos no inicio e começar a pensar em páginas separadas com URLs próprias mudou forma de organizar o código. 

Este Projeto foi desenvolvido para fins de estudo e prática em React.
