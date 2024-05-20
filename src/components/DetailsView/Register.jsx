import { useState } from 'react';
import { RegisterUser } from '../services/Auth';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
    let navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await RegisterUser({
            name: formValues.name,
            email: formValues.email,
            password: formValues.password
        });
        setFormValues({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
        navigate('/signin');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Register</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        onChange={handleChange}
                                        name="name"
                                        type="text"
                                        className="form-control"
                                        placeholder="John Smith"
                                        value={formValues.name}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        onChange={handleChange}
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        placeholder="example@example.com"
                                        value={formValues.email}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        onChange={handleChange}
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        value={formValues.password}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input
                                        onChange={handleChange}
                                        type="password"
                                        name="confirmPassword"
                                        className="form-control"
                                        value={formValues.confirmPassword}
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    disabled={
                                        !formValues.email ||
                                        !formValues.password ||
                                        formValues.password !== formValues.confirmPassword
                                    }
                                >
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;