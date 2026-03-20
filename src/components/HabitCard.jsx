// src/components/HabitCard.jsx

import { Link } from 'react-router-dom'

function HabitCard({ id, nome, descricao = '', categoria = 'Geral', meta,
                     ativo = true, diasFeitos = 0, onRemover }) {
  const metaAtingida = diasFeitos >= meta

  return (
    <div className="habit-card">
      <h3>{nome}</h3>
      {descricao && <p>{descricao}</p>}
      <small>Categoria: {categoria}</small>
      <p>
        {metaAtingida
          ? '🏆 Meta da semana atingida!'
          : `${diasFeitos} de ${meta} dias concluídos`}
      </p>
      <span>{ativo ? '✅ Ativo' : '⏸️ Pausado'}</span>
      {metaAtingida && <p>⭐ Parabéns! Meta da semana atingida!</p>}

      <div className="habit-card-acoes">
        <Link to={`/habito/${id}`} className="btn-detalhes">
          Ver detalhes
        </Link>
        {onRemover && (
          <button type="button" onClick={onRemover}>Remover</button>
        )}
      </div>
    </div>
  )
}

export default HabitCard