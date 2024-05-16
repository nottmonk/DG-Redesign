import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const Update = ({ user, setUser }) => {
    let navigate = useNavigate()
    let { id } = useParams()

    const [isEditing, setisEditing] = useState({})

    const getUser = async () => {
        const response = await axios.get(`http://localhost:4000/myDg/${user.id}`)
        setisEditing(response.data)
    }

    const handleChange = (e) => {
        setisEditing({ ...isEditing, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        getUser()
        console.log({ user })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.put(`http://localhost:4000/myDg/${user.id}`, isEditing)
        setUser(response.data)
        navigate("/myDg")
    }




    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='name' onChange={handleChange} defaultValue={user.name} placeholder={user.name} />
                    <input type='text' name='email' onChange={handleChange} defaultValue={user.email} placeholder={user.email} />
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update
