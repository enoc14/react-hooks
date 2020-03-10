import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const EffectFetch = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await Axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(data)
        }
        fetchData()
    }, [])

    const printData = () => {
        return users.map(user => <li key={user.id}>{user.name}</li>)
    }

    return (
        <div>
            <ul>
                {
                users.length > 0 ? printData() : 'Loading...'
                }
            </ul>
        </div>
    )
}

export default EffectFetch
