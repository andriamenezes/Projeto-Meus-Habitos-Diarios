// src/App.jsx
import './style.css'
import { Routes, Route } from 'react-router-dom'
import LayoutPrincipal from './layouts/LayoutPrincipal'
import PaginaInicio from './pages/PaginaInicio'
import PaginaHabitos from './pages/PaginaHabitos'
import PaginaDetalhes from './pages/PaginaDetalhes'
import PaginaNovoHabito from './pages/PaginaNovoHabito'
import PaginaNaoEncontrada from './pages/PaginaNaoEncontrada'

function App() {
  return (
    <Routes>
      <Route element={<LayoutPrincipal />}>
        <Route path="/"                element={<PaginaInicio />} />
        <Route path="/habitos"         element={<PaginaHabitos />} />
        <Route path="/habitos/novo"    element={<PaginaNovoHabito />} />
        <Route path="/habito/:id"      element={<PaginaDetalhes />} />
      </Route>
      <Route path="*" element={<PaginaNaoEncontrada />} />
    </Routes>
  )
}

export default App