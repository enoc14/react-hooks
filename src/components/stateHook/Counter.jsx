import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const countHanlder = () => setCount(count + 1)
    return (
        <div>
            <button onClick={countHanlder}>Count {count}</button>
        </div>
    )
}

export default Counter
