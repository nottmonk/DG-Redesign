import axios from 'axios'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Delete = ({ user, logout }) => {
    let navigate = useNavigate()
    let { id } = useParams()

    const del = async () => {
        console.log(user.id)
        console.log(user)
        const userId = user.id || user._id
        if (userId) {
            await axios.delete(`https://dg-recreate-3d0ee82e3471.herokuapp.com/myDg/${userId}`)
        }
        logout()
        navigate('/myDg')
    }
    return (
        <div className="container mt-5">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h2 className="card-title text-center mb-4">Are You Sure You Want To Delete?</h2>
                    <div className="d-flex justify-content-center">
                        <Link to='/myDg' className="btn btn-secondary me-3">Cancel</Link>
                        <button onClick={del} className="btn btn-danger">Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Delete
