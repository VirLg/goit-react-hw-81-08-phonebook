import Header from 'page/Header';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { refreshThunk } from 'redux/auth/authThunk';
import { tokenSelector } from 'redux/selector';

const Layout = () => {
  // const isAuth = useSelector(tokenSelector);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(refreshThunk(isAuth));
  // }, [dispatch, isAuth]);
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
