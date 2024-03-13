import { useState } from 'react'

export default function useCounter() {
    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    };

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const reset = () => {
        setCount(0)
    }

    return {count, decrement, increment, reset}
}