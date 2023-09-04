import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { tokenSelector, userSelector } from 'redux/selector';

const Header = () => {
  const isAuth = useSelector(tokenSelector);
  const userNameAuth = useSelector(userSelector);
  const navigate = useNavigate();

  const handleLogOut = () => {
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
