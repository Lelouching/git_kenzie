import { createContext, useState } from "react";

export const CounterContext = createContext({})

export const CounterProvider = ({ children }) => {

    const [counter, setCounter] = useState(0)

    const increase = () => {
        setCounter(counter + 1)
    }

    const decrease = () => {
        setCounter(counter - 1)
    }

    return (
        <CounterContext.Provider value={{ counter, increase, decrease }}>
            {children}
        </CounterContext.Provider>
    )
}