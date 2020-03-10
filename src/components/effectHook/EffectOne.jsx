import React, { useState, useEffect } from 'react'

const EffectOne = () => {
    const [clicks, setClicks] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        document.title = `You clicked ${clicks} times`
        console.log('Update Render');
    }, [clicks])

    const clickHandler = () => setClicks(clicks + 1)
    return (
        <div>
            <input type="text" onChange={e => setName(e.target.value)}/>
            <button onClick={clickHandler}>Click {clicks} times</button>
        </div>
    )
}

export default EffectOne
