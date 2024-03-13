import { useState } from "react"

export default function Contador1() {
    const [count, setCount] = useState(0)
    const colorA = count%2 === 0 ? 'green' : 'red'

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
      };

    const increment = () => {
        setCount((prevCount) => prevCount + 1)
    }

    return(
        <>
            <p style={{color: colorA}}>{count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Incrementar</button>
        </>
    )
}