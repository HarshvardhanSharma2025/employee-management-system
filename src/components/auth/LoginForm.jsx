import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({handleLogin}) => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,password);
        setemail("");
        setpassword("");

    }
    return (
        <div className="login-container">
            <form
                onSubmit={(e) => {
                    submitHandler(e);
                }
                }
                className="login-form">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        value={email}
                        onChange={(e) => {
                            setemail(e.target.value);
                        }}
                        type="email"
                        className="form-control login-input"
                        id="exampleInputEmail1"
                        placeholder="Enter your email"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                    value={password}
                    onChange={(e)=>{
                        setpassword(e.target.value);
                    }}
                        type="password"
                        className="form-control login-input"
                        id="exampleInputPassword1"
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit" className="btn login-button">
                    Log In
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
