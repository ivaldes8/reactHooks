import React, {memo, useMemo} from 'react'

const computeExpensiveValue = (a, b) => {
    return a * b;
}

const UseMemo = () => {
    const change = true

    const memorizedValue = useMemo(() => computeExpensiveValue(2,2), [change])
    return (
      <div style={{display:'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center'}}>
        <h2>Use memo:</h2>
        <hr style={{width: '90%'}}/>
        <p>-Se usa para mejorar el performance de la aplicacion</p>
        <p>-Por ejemplo una funcion que consuma muchos recursos solo se va a ejecutar la primera vez y cada vez que cambie el estado de la variable que se le especifique</p>
        {memorizedValue}
      </div>
    )
}

export default UseMemo