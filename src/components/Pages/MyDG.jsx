import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const myDG = (props) => {
    let navigate = useNavigate()
    const [isupdating, setIsUpdating] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleInputChange = async (e) => {
        setIsUpdating({ ...isupdating, [e.target.name]: e.target.value })
    }

    const handleClick = async () => {
        try {
            const token = localStorage.getItem('token')
            const response = await axios.put(`http://localhost:4000/myDg/${props.user.id}`)
        } catch (error) {

        }
    }

    return (
        <div>
            {props.user && (
                <div>
                    <h4>Name: {props.user.name}</h4><button onClick={""}>Edit</button>
                    <h4>Email: {props.user.email}</h4><button onClick={""}></button>
                </div>
            )
            }
            <div>

            </div>
            {!props.user && (
                <div>
                    <button onClick={() => navigate('/signin')}>Sign up</button>
                    <a href='./register'>Register</a>
                </div>
            )}

        </div>
    )
}

export default myDG
