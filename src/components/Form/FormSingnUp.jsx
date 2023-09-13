import { TextField } from '@mui/material';
import React, { useState } from 'react';

const FormSingnUp = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = e => {
    e.target.name === 'name'
      ? setName(e.target.value)
      : e.target.name === 'email'
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };
  const formSubmit = e => {
    e.preventDefault();
    handleSubmit({ name, email, password });
  };
  return (
    <div>
      <form className="container-form" onSubmit={formSubmit}>
        <TextField
          fullWidth
          label="Name"
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          sx={{ mt: '1.5rem', mb: '1.5rem' }}
        />

        <TextField
          fullWidth
          label="Email"
          onChange={handleChange}
          value={email}
          type="text"
          name="email"
        />

        <TextField
          fullWidth
          label="Password"
          onChange={handleChange}
          value={password}
          type="text"
          name="password"
          sx={{ mt: '1.5rem', mb: '1.5rem' }}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default FormSingnUp;
