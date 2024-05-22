import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/App.css';

const MyDG = ({ user, setUser }) => {
    let navigate = useNavigate();



    return (
        <div className="mydg-container">
            <div className="container mt-5 pt-5">
                <div className="row justify-content-center">

                    {user ? (
                        <div className="custom-card shadow-lg">
                            <div className="custom-card-body">
                                <h4 className="custom-card-title">Name: {user.name}</h4>
                                <h4 className="custom-card-text">Email: {user.email}</h4>
                                <div className="d-flex justify-content-between mt-3">
                                    <Link to="/update" className="btn btn-primary">Edit</Link>
                                    <Link to="/delete" className="btn btn-danger">Delete</Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="custom-card shadow-lg">
                            <div className="custom-card-body">
                                <h2 className="custom-card-text">Not logged in.</h2>
                                <div className="d-flex justify-content-between mt-3">
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
