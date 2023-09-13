import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const Filter = ({ filterContact }) => {
  return (
    <TextField
      label="Search"
      onChange={filterContact}
      fullWidth
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      sx={{ maxWidth: '600px', mt: '2rem', mb: '2rem' }}
    />
  );
};

export default Filter;
Filter.propTypes = {
  filterContact: PropTypes.func.isRequired,
};
