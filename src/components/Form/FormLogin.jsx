import { Send } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
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
    <div>
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
        <Button variant="contained" endIcon={<Send />} type="submit">
          Log In
        </Button>
      </form>
    </div>
  );
};

export default FormLogin;
