import FormSingnUp from 'components/Form/FormSingnUp';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpThunk } from 'redux/auth/authThunk';

const SignUpPage = () => {
  const dispath = useDispatch();

  const handleSubmit = ({ name, email, password }) => {
    dispath(signUpThunk({ name, email, password }));
  };
  return (
    <>
      <FormSingnUp handleSubmit={handleSubmit} />
      <Link to="/login">Login</Link>
    </>
  );
};
export default SignUpPage;
