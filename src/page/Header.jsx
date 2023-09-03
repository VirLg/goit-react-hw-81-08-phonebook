import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavLink to="/">Home Page</NavLink>
      <button onClick={() => navigate('/login')}>LogIn</button>
      <Link to="/signUp">SignUp</Link>
    </div>
  );
};

export default Header;
