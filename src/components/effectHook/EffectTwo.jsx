import React, { useState, useEffect } from 'react'

const EffectTwo = () => {
    const initialState = { x: 0, y: 0}
    const [position, setPosition] = useState(initialState)

    const logMousePosition = e => {
        setPosition({ x: e.clientX, y: e.clientY })
        console.log('mouseEvent called');
    }
    useEffect(() => {
        window.addEventListener('mousemove', logMousePosition)
        console.log('useEffect called');
    }, [])

    return (
        <div>
            X - {position.x} Y - {position.y}
        </div>
    )
}

export default EffectTwo
