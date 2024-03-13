import useCounter from "../customshooks/useCounter";

export default function Contador2() {
    const {count, decrement, increment, reset} = useCounter()

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
        </div>
      );
}