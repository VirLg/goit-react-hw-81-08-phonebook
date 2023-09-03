import React, { useState } from 'react';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    console.log('e.target.name', e.target.name);
  };
  const handleSubmit = e => {
    e.preventDefault();
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
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginPage;
