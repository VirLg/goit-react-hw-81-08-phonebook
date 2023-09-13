import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
// import PropTypes from 'prop-types';

const Form = function ({ addNewContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    if (evt.target.name === 'name') setName(evt.target.value);
    else setNumber(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    addNewContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form
      style={{
        width: '330px',
        height: '230px',
        outline: '1px solid teal',
        padding: '30px',
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        label="Name"
        fullWidth
        onChange={handleChange}
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <TextField
        label="Number"
        fullWidth
        onChange={handleChange}
        value={number}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        sx={{
          mt: '1.5rem',
          mb: '1.5rem',
        }}
      />

      <Button variant="contained" type="submit">
        Add Contact
      </Button>
    </form>
  );
};

// Form.propTypes = {
//   addContact: PropTypes.func.isRequired,
// };

export default Form;
