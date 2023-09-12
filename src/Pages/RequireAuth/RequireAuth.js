import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const RequireAuth = ({ children, ...rest }) => {
    const { user, userIsLoading } = useAuth();
    const location = useLocation();
    if (userIsLoading) {
        return <Stack sx={{ color: '#FF4A17', justifyContent: 'center', marginTop: '350px'}} direction="row">
            <CircularProgress size={80} color="inherit"/>
        </Stack>
    }
    if (!user?.email) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;