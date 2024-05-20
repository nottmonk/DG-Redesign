import axios from 'axios'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Delete = ({ user, logout }) => {
    let navigate = useNavigate()
    let { id } = useParams()

    const del = async () => {
        console.log(user.id)
        await axios.delete(`http://localhost:4000/myDg/${user._id}`)
        logout()
        navigate('/myDg')
    }
    return (

        <div>
            <h1>Are You Sure You Want To Delete?</h1>
            <Link to='/myDg'><button>Cancel</button></Link>
            <button onClick={del}>Confirm</button>
        </div>
    )
}

export default Delete
