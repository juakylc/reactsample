import { createContext, useState } from "react";

//1. Crear el contexto
export const CounterContext = createContext()

//2. Crear el provider para proveer al contexto
export function CounterProvider({children}) {
    const [count, setCount] = useState(0)
    return (
        <CounterContext.Provider value={
                {
                    count,
                    setCount
                }
            }>
                {children}
        </CounterContext.Provider>
    )
}