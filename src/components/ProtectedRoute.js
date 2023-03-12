import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const data = useSelector(state => state.films);
    console.log(Object.keys(data).length)

    if (!Object.keys(data).length) {
      return <Navigate to={{ pathname: '/' }} replace />;
    }
    return children;

};
