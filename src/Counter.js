import React,{useState} from 'react'

function Counter() {
    const [count,setCount] = useState(0)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Incriment</button>
        <h1>Hellow iam a counter : {count}</h1>
    </div>
  )
}

export default Counter
