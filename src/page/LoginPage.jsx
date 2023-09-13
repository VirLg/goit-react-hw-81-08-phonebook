import { Button } from '@mui/material';
import FormLogin from 'components/Form/FormLogin';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/authThunk';
import { tokenSelector } from 'redux/selector';
import { ReplyAll, Send } from '@mui/icons-material';
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
    <div className="container-form">
      <Button
        variant="contained"
        endIcon={<ReplyAll />}
        onClick={() => navigate('/')}
      ></Button>
      <FormLogin handleSubmit={handleSubmit} />
      <Button variant="contained" endIcon={<Send />} type="submit">
        Log In
      </Button>
    </div>
  );
};

export default LoginPage;
