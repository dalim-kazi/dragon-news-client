import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
const PrivateRoutes = ({children}) => {
    const { user ,loading} = useContext(AuthContext)
    let location = useLocation();
    if (loading) {
        return  <div style={{marginLeft:"45%", marginBottom:"50px"}}><Spinner animation="border" variant="primary" /></div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children
};

export default PrivateRoutes;