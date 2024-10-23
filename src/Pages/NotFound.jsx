import React from 'react'

const NotFound = () => {
  return (
    <div style={{textAlign: 'center'
    ,marginTop: '50px'

    ,fontWeight: 'bold'
    ,textTransform: 'uppercase'
    ,letterSpacing: '2px'
    ,padding: '20px'
    ,borderRadius: '10px'
      
    }}>
      <h1>Página no encontrada</h1>
      <p>La página que buscas no existe o no se encuentra disponible.</p>
      <p>Por favor, verifica la URL o regresa al inicio.</p>

    </div>
  )
}

export default NotFound