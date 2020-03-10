import React, {useContext} from 'react'
import {CountContex} from '../../App'

const ReducerA = () => {
    const {countDispatch} = useContext(CountContex)
    return (
        <div>
            <p>Component A</p>
            <button onClick={() => countDispatch('increment')}>Increment</button>
            <button onClick={() => countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countDispatch('reset')}>Reset</button>
        </div>
    )
}
const ReducerB = () => <ReducerD />
const ReducerC = () => <ReducerF />

const ReducerD = () => {
    const {countDispatch} = useContext(CountContex)
    return (
        <div>
            <p>Component D</p>
            <button onClick={() => countDispatch('increment')}>Increment</button>
            <button onClick={() => countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countDispatch('reset')}>Reset</button>
        </div>
    )
}

const ReducerE = () => {
    return (
        <div>
            
        </div>
    )
}

const ReducerF = () => {
    const {countDispatch} = useContext(CountContex)
    return (
        <div>
            <p>Component F</p>
            <button onClick={() => countDispatch('increment')}>Increment</button>
            <button onClick={() => countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countDispatch('reset')}>Reset</button>
        </div>
    )
}

export {ReducerA, ReducerB, ReducerC}
