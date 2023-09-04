import { signUp } from 'api/auth';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpThunk } from 'redux/auth/authThunk';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispath = useDispatch();
  const handleChange = e => {
    e.target.name === 'name'
      ? setName(e.target.value)
      : e.target.name === 'email'
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispath(signUpThunk({ name, email, password }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input onChange={handleChange} value={name} type="text" name="name" />
      </label>
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
      <button type="submit">Sign Up</button>
      <Link to="/login">Login</Link>
    </form>
  );
};

export default SignUpPage;
