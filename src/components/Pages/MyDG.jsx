import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyDG = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {props.user ? (
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h4 className="card-title">Name: {props.user.name}</h4>
                                <h4 className="card-text">Email: {props.user.email}</h4>
                                <div className="d-flex justify-content-between">
                                    <Link to="/update" className="btn btn-primary">Edit</Link>
                                    <Link to="/delete" className="btn btn-danger">Delete</Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <p className="card-text">You are not logged in.</p>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-primary" onClick={() => navigate('/signin')}>Sign In</button>
                                    <Link to="/register" className="btn btn-secondary">Register</Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyDG;
