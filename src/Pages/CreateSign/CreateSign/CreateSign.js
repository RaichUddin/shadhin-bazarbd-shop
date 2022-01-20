import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './CreateSign.css';
import pic from '../../../amazon-logo-s3f.png';
import useAuth from '../../../Hooks/useAuth';
import { Alert, AlertTitle, CircularProgress } from '@mui/material';


const CreateSign = () => {
    const [loginData, setLoginData] = useState({});

    const { user, error, signIn, googleSign, loading } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...loginData };
        newData[field] = value;
        setLoginData(newData);
    }

    const handleSign = e => {
        signIn(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }
    const handleGoogleSign = () => {
        googleSign(location, navigate);
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login_log"
                    src={pic}
                    alt="" />
            </Link>
            <div className="login-container">
                <h1>Sign-In</h1>
                {!loading && <form onSubmit={handleSign}>
                    <h5>Email</h5>
                    <input onChange={handleOnChange} type="email" name="email" id="" />
                    <h5>Password</h5>
                    <input onChange={handleOnChange} type="password" name="password" id="" />
                    <br />
                    <button className='sign-Btn'>Sign In</button>
                </form>}
                <button onClick={handleGoogleSign} className='sign-Btn'>Google Sign In</button>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <Link to="/register">
                    <button className='create-Btn'>Create Your Shadhin Account</button>
                </Link>
            </div>
            {loading && <CircularProgress />}
            {user?.email && <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                Sign IN successfully
            </Alert>}
            {error && <Alert severity="error">{error}</Alert>}
        </div>
    );
};

export default CreateSign;