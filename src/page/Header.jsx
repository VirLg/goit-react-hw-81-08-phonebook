import { AppBar, Toolbar, Typography } from '@mui/material';
import { delToken } from 'api/auth';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logOutThunk } from 'redux/auth/authThunk';
import { tokenSelector, userSelector } from 'redux/selector';
import logo from 'logo.svg';
const Header = () => {
  const isAuth = useSelector(tokenSelector);
  const userNameAuth = useSelector(userSelector);
  const navigate = useNavigate();
  const dispath = useDispatch();
  console.log('first', userNameAuth);
  const handleLogOut = () => {
    if (isAuth) dispath(logOutThunk(isAuth));
    delToken();
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <NavLink to="/">
          <img src={logo} alt="the girl is studying" width={'60px'} />
        </NavLink>
        <Typography variant="h3" sx={{ flexGrow: 1 }}>
          <NavLink to="/contact"> Contact</NavLink>
        </Typography>
        <>
          <h3>{userNameAuth && userNameAuth.name}</h3>
          <button onClick={handleLogOut}>
            {isAuth ? 'Log Out' : 'Log In'}
          </button>
          {!userNameAuth && <Link to="/signUp">SignUp</Link>}
        </>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
