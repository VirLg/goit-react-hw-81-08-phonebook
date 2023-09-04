import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logOutThunk } from 'redux/auth/authThunk';
import { tokenSelector, userSelector } from 'redux/selector';

const Header = () => {
  const isAuth = useSelector(tokenSelector);
  const userNameAuth = useSelector(userSelector);
  const navigate = useNavigate();
  const dispath = useDispatch();
  const handleLogOut = () => {
    dispath(logOutThunk(isAuth));
    navigate('/login');
  };
  return (
    <div>
      <h3>{userNameAuth && userNameAuth.name}</h3>
      <NavLink to="/">Home Page</NavLink>
      <button onClick={handleLogOut}>{isAuth ? 'Log Out' : 'Log In'}</button>
      <Link to="/signUp">SignUp</Link>
    </div>
  );
};

export default Header;
