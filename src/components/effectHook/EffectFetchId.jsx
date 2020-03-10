import React,{ useState, useEffect } from 'react'
import Axios from 'axios'

const EffectFetchId = ()  => {
    const [user, setUser] = useState({})
    const [id, setId] = useState(1)
    const [idFromButton, setIdFromButton] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            setUser(data)
        }
        fetchData()
    }, [idFromButton])

    return (
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
            <button onClick={() => setIdFromButton(id)}>Fetch post</button>
            {
            !user.hasOwnProperty('id') ? 'Loading...' : <p>{user.name}</p>
            }
        </div>
    )
}

export default EffectFetchId
