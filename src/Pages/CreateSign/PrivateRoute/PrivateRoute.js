import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    let location = useLocation();
    if (loading) { return <CircularProgress /> }
    if (user.email) {
        return children;
    }
    return <Navigate to="/createsign" state={{ from: location }} />;
};

export default PrivateRoute;