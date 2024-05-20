import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';


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
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Edit</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        value={isEditing.name || user.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        value={isEditing.email || user.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Update
