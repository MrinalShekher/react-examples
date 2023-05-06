import React, { useState } from 'react'

function Counter() {
    let [count,setCount] = useState(0)
    return (
        <div>
            <p>Counter</p>
            <button onClick={()=>{setCount(count-1)}}>-</button>  {count}  <button onClick={()=>{setCount(count+1)}}>+</button>
        </div>
    )
}

export default Counter
