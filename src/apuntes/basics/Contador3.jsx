import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function Contador3() {
    const {count, setCount} = useContext(CounterContext)

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };
    
    return(
        <>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
        </>

    )
}