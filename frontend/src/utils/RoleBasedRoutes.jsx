import React from 'react'
import {useAuth} from '../contextAPI/ContextAPI'
import { Navigate } from 'react-router-dom';

function RoleBasedRoutes({children, requiredRole}) {
    const {user,loading} = useAuth();
    if (loading) return <p>Loading...</p>;
    if(!requiredRole.includes(user.role)) {
        <Navigate to='/login'></Navigate>
    }
    return user?children: <Navigate to='/login'></Navigate>
}

export default RoleBasedRoutes
