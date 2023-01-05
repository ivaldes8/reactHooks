import React, {useRef} from 'react'

const UseRef = () => {
    const inputRef = useRef(2)

    const handleClick = () => {
        alert(inputRef.current.value)
    }
    return (
      <div style={{display:'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center'}}>
      <h2>Use ref:</h2>
      <hr style={{width: '90%'}}/>
      <p>-Se usa para hacer referenciar elemetos del componente</p>
      <p>-Ofrece una forma muy interesante de manejar el dom , podiendo convertir etiquetas p en input fields por ejemplo </p>
      <input type="text" ref={inputRef}/>
      <button onClick={handleClick}>Click me!!</button>
    </div>
    )
}

export default UseRef