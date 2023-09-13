import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { delToken } from 'api/auth';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logOutThunk } from 'redux/auth/authThunk';
import { tokenSelector, userSelector } from 'redux/selector';
import logo from 'logo.svg';
import { Accessibility } from '@mui/icons-material';
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
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          <NavLink style={{ textDecoration: 'none' }} to="/contact">
            Contact
          </NavLink>
        </Typography>
        <>
          <h3 style={{ margin: '0' }}>
            {userNameAuth && (
              <Typography variant="h5">{userNameAuth.name}</Typography>
            )}
          </h3>
          {!userNameAuth && (
            <Typography variant="h4">
              <Link to="/signUp" style={{ textDecoration: 'none' }}>
                SignUp
              </Link>
            </Typography>
          )}
          <Button
            onClick={handleLogOut}
            variant="contained"
            color="secondary"
            endIcon={<Accessibility />}
          >
            {isAuth ? 'Log Out' : 'Log In'}
          </Button>
        </>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
