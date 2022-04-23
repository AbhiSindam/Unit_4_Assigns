import { useState } from "react"
import '../App.css'

export const Counter = ({value}) => {

    const [count, setCount] = useState(value)


    // console.log(count)
    return (
        <>
            <h1>Counter is: {count % 2 === 0 ?   <span style={{color: "green"}}>{count}</span>:  <span style={{color: "red"}}>{count}</span>}</h1>

            <div className="btn">

            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
            <button onClick={() => setCount(count*2)}>Double</button>
            <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </>
    )
}