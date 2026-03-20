// src/pages/PaginaNovoHabito.jsx

import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useHabits } from '../contexts/HabitsContext'

function PaginaNovoHabito() {
  const { adicionarHabit } = useHabits()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    novoNome:      '',
    novaDescricao: '',
    novaCategoria: '',
    novaMeta:      '7',
  })
  const [erroNome, setErroNome] = useState('')
  const nomeInputRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (name === 'novoNome') {
      if (value.length > 0 && value.length < 3) {
        setErroNome('O nome deve ter pelo menos 3 caracteres.')
      } else {
        setErroNome('')
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.novoNome.trim() || erroNome) {
      nomeInputRef.current?.focus()
      return
    }
    const novoHabit = {
      id:         Date.now(),
      nome:       form.novoNome,
      descricao:  form.novaDescricao,
      categoria:  form.novaCategoria || 'Geral',
      meta:       parseInt(form.novaMeta) || 7,
      ativo:      true,
      diasFeitos: 0,
    }
    adicionarHabit(novoHabit)
    navigate('/habitos')
  }

  return (
    <main className="pagina-novo-habito">
      <button onClick={() => navigate('/habitos')} className="btn-voltar">
        ← Voltar
      </button>

      <h1>Novo Hábito</h1>

      <form onSubmit={handleSubmit} className="habit-form">
        <div>
          <label>Nome do hábito *
            <input type="text" name="novoNome"
              value={form.novoNome} onChange={handleChange} ref={nomeInputRef} />
          </label>
          {erroNome && <p style={{ color: 'red', fontSize: '0.8rem' }}>{erroNome}</p>}
        </div>
        <div>
          <label>Descrição
            <input type="text" name="novaDescricao"
              value={form.novaDescricao} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>Categoria
            <input type="text" name="novaCategoria"
              value={form.novaCategoria} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>Meta (dias por semana)
            <input type="number" name="novaMeta" min="1" max="7"
              value={form.novaMeta} onChange={handleChange} />
          </label>
        </div>
        <button type="submit">Adicionar hábito</button>
      </form>
    </main>
  )
}

export default PaginaNovoHabito