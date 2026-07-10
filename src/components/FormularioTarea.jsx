import { useState } from 'react'

function FormularioTarea({ onAgregarTarea }) {
  const [texto, setTexto] = useState('')
  const [mostrarAyuda, setMostrarAyuda] = useState(false)

  const manejarEnvio = (e) => {
    e.preventDefault()
    if (texto.trim() === '') return
    onAgregarTarea(texto)
    setTexto('')
  }

  return (
    <div className="contenedor-formulario">
      <form className="formulario-tarea" onSubmit={manejarEnvio}>
        <input
          type="text"
          className="input-tarea"
          placeholder="Escribe una tarea..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button type="submit" className="boton-agregar">Agregar</button>
      </form>
      <button
        type="button"
        className="boton-ayuda"
        onClick={() => setMostrarAyuda(!mostrarAyuda)}
      >
        {mostrarAyuda ? 'Ocultar ayuda' : 'Mostrar ayuda'}
      </button>
      {mostrarAyuda && (
        <div className="texto-ayuda">
          Escribe una tarea y presiona Agregar. Haz clic en el emoji de la izquierda para completarla.
        </div>
      )}
    </div>
  )
}

export default FormularioTarea
