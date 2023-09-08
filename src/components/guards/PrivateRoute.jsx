import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { tokenSelector } from 'redux/selector';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(tokenSelector);
  return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
