import React, { useState } from 'react'

const CounterThree = () => {
    const initialState = {
        firstName: '',
        lastName: ''
    }
    const [name, setName] = useState(initialState)

    const nameHandler = e => {
        const { value, name: inputName } = e.target
        setName({
            ...name,
            [inputName]: value
        })
    }
    return (
        <div>
            <form action="">
                <input type="text" name="firstName" value={name.firstName} onChange={nameHandler}/>
                <input type="text" name="lastName" value={name.lastName} onChange={nameHandler}/>
                <p>Your first name is - {name.firstName}</p>
                <p>Your last name is - {name.lastName}</p>
            </form>
        </div>
    )
}

export default CounterThree
