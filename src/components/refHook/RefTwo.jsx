import React, { useState, useEffect, useRef } from 'react'

const RefTwo = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

        return(() => {
            clearInterval(intervalRef.current)
        })
    }, [])

    return (
        <div>
            <p>{timer}</p>
            <button onClick={() => clearInterval(intervalRef.current)}>Stop interval</button>
        </div>
    )
}

export default RefTwo
