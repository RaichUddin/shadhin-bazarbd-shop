import { Alert, AlertTitle, Button, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pic from '../../../amazon-logo-s3f.png';
import useAuth from '../../../Hooks/useAuth';
import './Register.css';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, error, registerUser, loading } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...loginData };
        newData[field] = value;
        setLoginData(newData);
    }

    const handleRegister = e => {
        if (loginData.password !== loginData.password2) {
            Alert("Your password did not match");
            return
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login_log"
                    src={pic}
                    alt="" />
            </Link>
            <div className="login-container">
                <h1>Registration Form</h1>
                {!loading && <form onSubmit={handleRegister}>
                    <h5>Email</h5>
                    <input onChange={handleOnChange} type="email" name="email" id="" />
                    <h5>Password</h5>
                    <input onChange={handleOnChange} type="password" name="password" id="" />
                    <h5> Re-type Password</h5>
                    <input onChange={handleOnChange} type="password" name="password2" id="" />
                    <br />
                    <button className='sign-Btn'>Register</button>
                    <Link style={{ textDecoration: 'none' }} to="/createsign">
                        <Button variant='text'>
                            Alreadr Registered? Please Login
                        </Button>
                    </Link>
                </form>}

            </div>
            {loading && <CircularProgress />}
            {user?.email && <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                registered created successfully
            </Alert>}
            {error && <Alert severity="error">{error}</Alert>}
        </div>
    );
};

export default Register;