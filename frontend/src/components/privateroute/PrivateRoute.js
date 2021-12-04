import React from 'react'
import { Navigate } from 'react-router'
const PrivateRoutes = ({auth, children }) => {
    //  console.log(children);
    return auth ? children : <Navigate to="/login" />;

}

export default PrivateRoutes