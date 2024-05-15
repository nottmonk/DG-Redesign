import React from 'react'
import { useNavigate } from 'react-router-dom'

const myDG = () => {
    let navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate('/signin')}>Sign up</button>
            <a href='./register'>Register</a>
        </div>
    )
}

export default myDG
