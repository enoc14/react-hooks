import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ReducerFetchingOne = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        const fetchData = async() => {
            try {
                const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/10`)
                setLoading(false)
                setPost(data)
                setError('')
            } catch(e) {
                setLoading(false)
                setPost({})
                setError('Something went wrong')
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            {loading ? 'Loading...' : post.title}
            {error && error}
        </div>
    )
}

export default ReducerFetchingOne
