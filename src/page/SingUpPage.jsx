import { ReplyAll, Send } from '@mui/icons-material';
import { Button } from '@mui/material';
import FormSingnUp from 'components/Form/FormSingnUp';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signUpThunk } from 'redux/auth/authThunk';

const SignUpPage = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();

  const handleSubmit = ({ name, email, password }) => {
    dispath(signUpThunk({ name, email, password }));
  };
  return (
    <div className="container-form">
      <Button
        variant="contained"
        endIcon={<ReplyAll />}
        onClick={() => navigate('/login')}
      >
        Log in
      </Button>
      <FormSingnUp handleSubmit={handleSubmit} />
    </div>
  );
};
export default SignUpPage;
