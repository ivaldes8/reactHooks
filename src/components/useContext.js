import React from 'react'
import {ThemeContext} from '../App'

const UseContext = () => {

  const theme = React.useContext(ThemeContext);
  return (
    <div style={{display:'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center'}}>
    <h2>Use context:</h2>
    <hr style={{width: '90%'}}/>
    <p>-Pasar datos a toda la aplicacion sin tener que pasar de padre a hijo muchas veces</p>
    <p>-Muy util a la hora de setiar idiomas o themes </p>
    {theme.background}
  </div>
  )
}

export default UseContext