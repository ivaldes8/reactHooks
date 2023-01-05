import React, {useState, useEffect} from 'react'

const UseEffect = () => {

  const [count, setCount] = useState(0)

  const [state, setState] = useState(false)

  useEffect(() => {
    setCount(count + 1)
  }, [state])
  

  return (
    <div style={{display:'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center'}}>
    <h2>Use Effect:</h2>
    <hr style={{width: '90%'}}/>
    <p>-Es quien remplaza el component did mount, component did update y component will unmount</p>
    <p>-Cada vez que cambie algo , haz esto otro. En escencia ese es su funcionamiento</p>
    {count}
    <br/>
    {state ? 'True' : 'False'}
    <button style={{width: 60}} onClick={() => setState(!state)}>Change state</button>
  </div>
  )
}

export default UseEffect