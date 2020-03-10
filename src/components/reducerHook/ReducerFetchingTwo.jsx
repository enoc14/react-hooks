import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload,
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                error: 'Something went wrong',
                post: {}
            }
        default:
            return state
    }
}

const ReducerFetchingTwo = () => {
    const [fetch, dispatch] = useReducer(reducer, initialState)
    
    useEffect(() => {
        const fetchData = async() => {
            try {
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/4')
                dispatch({ type: 'FETCH_SUCCESS', payload: data})
            } catch(e) {
                dispatch({ type: 'FETCH_ERROR' })
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            {fetch.loading ? 'Loading...' : fetch.post.title}
            {fetch.error && fetch.error}
        </div>
    )
}

export default ReducerFetchingTwo
