import { useState } from "react"

export const Counter = ({value}) => {

    const [count, setCount] = useState(value)


    // console.log(count)
    return (
        <>

            <h1>Counter Value is: {count}</h1>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Deccrement</button>
            <button onClick={() => setCount(count*2)}>Double</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}