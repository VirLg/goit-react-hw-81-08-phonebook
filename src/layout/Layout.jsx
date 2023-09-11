import Header from 'page/Header';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { token } from 'redux/auth/authSlice';
import { refreshThunk } from 'redux/auth/authThunk';

const Layout = () => {
  const refToken = localStorage.getItem('token');

  const dispatch = useDispatch();
  useEffect(() => {
    if (refToken) {
      dispatch(refreshThunk(refToken));
      dispatch(token(refToken));
    }
  }, [dispatch, refToken]);
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
