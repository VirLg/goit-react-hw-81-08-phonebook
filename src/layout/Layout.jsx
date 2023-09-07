import Header from 'page/Header';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { refreshThunk } from 'redux/auth/authThunk';
import { tokenSelector } from 'redux/selector';

const Layout = () => {
  const refToken = localStorage.getItem('token');

  const dispatch = useDispatch();
  useEffect(() => {
    if (refToken) {
      dispatch(refreshThunk(refToken));
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
