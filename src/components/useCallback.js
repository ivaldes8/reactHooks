import React from 'react'

const UseCallback = () => {
  return (
    <div style={{display:'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center'}}>
        <h2>Use callback:</h2>
        <hr style={{width: '90%'}}/>
        <p>-Se usa para mejorar el performance de la aplicacion</p>
        <p>-Mientras que el use meno guarda valores, el useCallback guarda funciones</p>
      </div>
  )
}

export default UseCallback