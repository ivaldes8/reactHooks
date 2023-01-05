import React, {useState} from 'react'

const UseState = () => {
  const [count, setCount] = useState(0)
  return (
    <div style={{display:'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center'}}>
      <h2>Use state:</h2>
      <hr style={{width: '90%'}}/>
      <p>-Se usa para hacer variables dinamicas</p>
      {count}
      <button style={{width: 30}} onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default UseState