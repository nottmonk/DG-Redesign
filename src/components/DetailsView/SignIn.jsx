import { useState } from 'react';
import { SignInUser } from '../services/Auth';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignIn = (props) => {
    let navigate = useNavigate();
    const [formValues, setFormValues] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = await SignInUser(formValues);
        setFormValues({
            email: "",
            password: ""
        });
        props.setUser(payload);
        navigate('/home');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Sign In</h2>
                            <form onSubmit={handleSubmit}>
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
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    disabled={!formValues.email || !formValues.password}
                                >
                                    Sign In
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;