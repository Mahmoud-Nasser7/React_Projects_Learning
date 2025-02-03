import { useState } from "react"

const Counter = () => {
  const [counter , setCounter] = useState(0);
  return (
    <div className="counter-container">
        <h1>{counter}</h1>
        <div className="btns">
        <button onClick={()=>setCounter(counter + 1)}>Increment</button>
        <button onClick={()=>setCounter(counter > 0 ? counter - 1 : 0)}>decrement</button>
        <button onClick={()=>setCounter(0)}>Reset</button>
        </div>
    </div>
  )
}

export default Counter