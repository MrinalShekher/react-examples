import React, { useState } from 'react'

function Counter() {
    let [count,setCount] = useState(0)
    return (
        <div className='text-white'>
            <p>Counter</p>
            <button className='border-0 rounded' onClick={()=>{setCount(count-1)}}>-</button>  {count}  <button className='border-0 rounded' onClick={()=>{setCount(count+1)}}>+</button>
        </div>
    )
}

export default Counter
