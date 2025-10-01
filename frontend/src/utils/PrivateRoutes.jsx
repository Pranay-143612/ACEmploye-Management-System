import React from 'react'
import {useAuth} from '../contextAPI/ContextAPI'
import { Navigate } from 'react-router-dom'


function PrivateRoutes({children}) {
    const {user,loading} = useAuth()
    if (loading) return <p>Loading...</p>;
    return user?children: <Navigate  to='/login'/>
}

export default PrivateRoutes
