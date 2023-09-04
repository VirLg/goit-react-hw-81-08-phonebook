import { login } from 'api/auth';
import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    e.target.name === 'email'
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const a = login({ email, password });
    console.log('a', a);
  };
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
