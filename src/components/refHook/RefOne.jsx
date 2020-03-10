import React, { useEffect, useRef } from 'react'

const RefOne = () => {
    const inputRef = useRef(null)

    useEffect(() => {
        // focus the input elemet
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    )
}

export default RefOne
