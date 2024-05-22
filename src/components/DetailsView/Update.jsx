import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/App.css';


const Update = ({ user, setUser, checkToken }) => {
    let navigate = useNavigate()
    let { id } = useParams()

    const [isEditing, setisEditing] = useState({})
    console.log(user)

    const getUser = async () => {
        const response = await axios.get(`https://dg-recreate-3d0ee82e3471.herokuapp.com/myDg/${user.id}`)

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
        console.log(isEditing)

        const response = await axios.put(`https://dg-recreate-3d0ee82e3471.herokuapp.com/myDg/${user.id}`, isEditing)
        setUser(response.data)
        getUser()
        // setTimeout(() => {
        //     checkToken()

        // }, 1000)
        navigate("/myDg")
    }




    return (
        <div className="mydg-container">
            <div className="container mt-5 pt-5">
                <div className="row justify-content-center">

                    <div className="custom-card shadow-lg">
                        <div className="custom-card-body">
                            <h2 className="custom-card-title text-center mb-4">Edit</h2>
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

    );
};

export default Update;
