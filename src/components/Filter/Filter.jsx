import PropTypes from 'prop-types';

const Filter = ({ filterContact }) => {
  return (
    <label
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        padding: '30px',
      }}
    >
      Search
      <input
        onChange={filterContact}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
};

export default Filter;
Filter.propTypes = {
  filterContact: PropTypes.func.isRequired,
};
