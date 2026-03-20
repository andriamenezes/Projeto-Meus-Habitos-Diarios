// src/components/HabitList.jsx

import { useNavigate } from 'react-router-dom'
import HabitCard from './HabitCard'
import { useHabits } from '../contexts/HabitsContext'

function HabitList() {
  const { habits, removerHabit } = useHabits()
  const navigate = useNavigate()

  if (!habits) return null

  return (
    <>
      <button onClick={() => navigate('/habitos/novo')} className="btn-primario">
        + Adicionar hábito
      </button>

      <ul>
        {habits.length === 0 && (
          <p>Nenhum hábito cadastrado ainda. Que tal começar?</p>
        )}
        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            id={habit.id}
            nome={habit.nome}
            descricao={habit.descricao}
            categoria={habit.categoria}
            meta={habit.meta}
            ativo={habit.ativo}
            diasFeitos={habit.diasFeitos}
            onRemover={() => removerHabit(habit.id)}
          />
        ))}
      </ul>
    </>
  )
}

export default HabitList