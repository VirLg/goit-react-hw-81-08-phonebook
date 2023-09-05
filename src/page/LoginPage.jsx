import { login } from 'api/auth';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/authThunk';
import { tokenSelector } from 'redux/selector';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dishath = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(tokenSelector);
  const handleChange = e => {
    e.target.name === 'email'
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    dishath(loginThunk({ email, password }));
  };
  useEffect(() => {
    if (isAuth) {
      return navigate('/');
    } else {
      console.log('isAuth', isAuth);
      navigate('/login');
    }
  }, [isAuth, navigate]);
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input onChange={handleChange} value={email} type="text" name="email" />
      </label>
      <label>
        Password
        <input
          onChange={handleChange}
          value={password}
          type="text"
          name="password"
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginPage;
