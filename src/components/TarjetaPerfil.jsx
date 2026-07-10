function TarjetaPerfil({ nombre, rol, avatar, tareasCompletadas }) {
  return (
    <div className="tarjeta-perfil">
      <div className="avatar-perfil">{avatar}</div>
      <div className="info-perfil">
        <h2>{nombre}</h2>
        <span className="rol-perfil">{rol}</span>
        <div className="estadisticas-perfil">
          Tareas terminadas: {tareasCompletadas}
        </div>
      </div>
    </div>
  )
}

export default TarjetaPerfil
