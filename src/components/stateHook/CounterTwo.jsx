import React, { useState } from 'react'

const CounterTwo = () => {
    const initialCount = 0
    const [counter, setCounter] = useState(initialCount)

    const increment = () => setCounter(counter + 1)
    const decrement = () => setCounter(counter - 1)
    const reset = () => setCounter(initialCount)
    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCounter(prevCount => prevCount + 1)
        }
    }
    return(
        <div>
            <p>Counter {counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default CounterTwo