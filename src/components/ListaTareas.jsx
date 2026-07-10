function ListaTareas({ tareas, onToggleTarea, onEliminarTarea }) {
  if (tareas.length === 0) {
    return <p className="lista-vacia">No hay tareas pendientes.</p>
  }

  return (
    <ul className="lista-tareas">
      {tareas.map((t) => (
        <li key={t.id} className={`item-tarea ${t.completada ? 'completada' : ''}`}>
          <span
            className="check-tarea"
            onClick={() => onToggleTarea(t.id)}
          >
            {t.completada ? '🟢' : '⚪'}
          </span>
          <span className="texto-tarea">{t.texto}</span>
          <button
            type="button"
            className="boton-eliminar"
            onClick={() => onEliminarTarea(t.id)}
          >
            Borrar
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ListaTareas
