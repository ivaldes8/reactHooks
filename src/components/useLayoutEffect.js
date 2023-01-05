import React from 'react'

const UseLayoutEffect = () => {
  
  return (
    <div style={{display:'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center'}}>
    <h2>Use Layaout Effect:</h2>
    <hr style={{width: '90%'}}/>
    <p>-Es igual al use effect con la unica diferencia de que este no va a renderizar nada hasta que se ejecute su contenido</p>
    <p>-Hay que tener cuidado , porque el componente solo se renderizara una vez terminado</p>
  </div>
  )
}

export default UseLayoutEffect