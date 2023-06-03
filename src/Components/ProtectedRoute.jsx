import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { loggedInContext } from '../App';

function ProtectedRoute({ children }) {
    const [login, setLogin] = useContext(loggedInContext) 
    return login.email && login.password ? children : <Navigate to='/login' />
}

export default ProtectedRoute