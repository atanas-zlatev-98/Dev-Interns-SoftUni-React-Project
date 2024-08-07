import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { Navigate } from 'react-router-dom';

const RouteGuardLogged = ({children}) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (isAuthenticated) {
        return <Navigate to='/' />
    }

    return (
        <>
            {children}
        </>
    )
}

export default RouteGuardLogged