import { FormControl, InputLabel, TextField } from '@mui/material';
import React, { useState } from 'react';

const FormLogin = ({ handleSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = e => {
    e.target.name === 'email'
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };
  const formSubmit = e => {
    e.preventDefault();
    handleSubmit({ email, password });
  };
  return (
    <div className="container-form">
      <form onSubmit={formSubmit}>
        <TextField
          fullWidth
          label="Email"
          onChange={handleChange}
          value={email}
          type="text"
          name="email"
          sx={{ mt: '1.5rem', mb: '1.5rem' }}
        />

        <TextField
          label="Password"
          fullWidth
          onChange={handleChange}
          value={password}
          type="text"
          name="password"
        />

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default FormLogin;
