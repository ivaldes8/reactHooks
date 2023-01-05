import React, {useReducer} from 'react'

const initialState = {count:0};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count:state.count + 1}
    case 'decrement':
      return {count:state.count - 1}
  
    default:
      throw new Error()
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{display:'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center'}}>
    <h2>Use reducer:</h2>
    <hr style={{width: '90%'}}/>
    <p>-Es practicamente el mismo principio de redux</p>
    <p>-Defino el reducer, con sus state y action </p>
    Count: {state.count}
    <div style={{flexDirection: 'row'}}> 
      <button onClick={() => dispatch({type:'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
   
  </div>
  )
}

export default UseReducer