import FormLogin from 'components/Form/FormLogin';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/authThunk';
import { tokenSelector } from 'redux/selector';

const LoginPage = () => {
  const dishath = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(tokenSelector);

  const handleSubmit = ({ email, password }) => {
    dishath(loginThunk({ email, password }));
  };
  useEffect(() => {
    if (isAuth) return navigate('/');
  }, [isAuth, navigate]);
  return (
    <div>
      <button onClick={() => navigate('/')}>{'<'}</button>
      <FormLogin handleSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
