import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'

const myDG = (props) => {
    let { id } = useParams()
    let navigate = useNavigate()
    // const [isupdating, setIsUpdating] = useState(false)
    // const [name, setName] = useState(props.user.name || '')
    // const [email, setEmail] = useState(props.user.email || '')

    const handleInputChange = (e) => {
        const { name, value } = e.target
        if (name === 'name') {
            setName(value)
        } else if (name === 'email') {
            setEmail(value)
        }
    }

    const handleClick = async () => {
        try {
            const token = localStorage.getItem('token')
            const response = await axios.put(`http://localhost:4000/myDg/${id}`)
        } catch (error) {

        }
    }

    return (
        <div>
            {props.user && (
                <div>
                    <h4>Name: {props.user.name}</h4>
                    <h4>Email: {props.user.email}</h4>
                    <Link to="/update"><button>Edit</button></Link>
                </div>
            )
            }
            <div>

            </div>
            {!props.user && (
                <div>
                    <button onClick={() => navigate('/signin')}>Sign In</button>
                    <a href='./register'>Register</a>
                </div>
            )}

        </div>
    )
}

export default myDG
