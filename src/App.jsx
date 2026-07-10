import { useState } from 'react'
import './App.css'
import Encabezado from './components/Encabezado'
import TarjetaPerfil from './components/TarjetaPerfil'
import FormularioTarea from './components/FormularioTarea'
import ListaTareas from './components/ListaTareas'
import PiePagina from './components/PiePagina'

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Hacer la tarea de React', completada: true },
    { id: 2, texto: 'Aprender props y state', completada: false },
    { id: 3, texto: 'Subir el proyecto a GitHub', completada: false },
  ])

  const [contadorId, setContadorId] = useState(4)

  const agregarTarea = (texto) => {
    const nueva = { id: contadorId, texto: texto, completada: false }
    setTareas([...tareas, nueva])
    setContadorId(contadorId + 1)
  }

  const toggleTarea = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    )
  }

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id))
  }

  const completadas = tareas.filter((t) => t.completada).length

  return (
    <div className="contenedor-app">
      <Encabezado />

      <TarjetaPerfil
        nombre="Manuel Matias"
        rol="Estudiante de Programación"
        avatar="👨‍💻"
        tareasCompletadas={completadas}
      />

      <section>
        <h2>Lista de Tareas:</h2>
        <FormularioTarea onAgregarTarea={agregarTarea} />
        <ListaTareas
          tareas={tareas}
          onToggleTarea={toggleTarea}
          onEliminarTarea={eliminarTarea}
        />
      </section>

      <PiePagina />
    </div>
  )
}

export default App
