import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'

const myDG = (props) => {
    let { id } = useParams()
    let navigate = useNavigate()


    return (

        <div>
            {props.user && (
                <div>
                    <h4>Name: {props.user.name}</h4>
                    <h4>Email: {props.user.email}</h4>
                    <Link to="/update"><button>Edit</button></Link>
                    <Link to='/delete'><button>Delete</button></Link>
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
            <div>

            </div>
        </div>

    )
}


export default myDG
