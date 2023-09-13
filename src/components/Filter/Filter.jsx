import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const Filter = ({ filterContact }) => {
  return (
    <TextField
      label="Search"
      onChange={filterContact}
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      size="normal"
      sx={{ width: '20rem' }}
    />
  );
};

export default Filter;
Filter.propTypes = {
  filterContact: PropTypes.func.isRequired,
};
