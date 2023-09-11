import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ContactsDiv, Button } from './Contacts.styled';

import { contactArrSelector, tokenSelector } from 'redux/selector';
import { deleteContactSwager } from 'api/auth';
import { getContactThunk } from 'redux/thunks/thunks';
const Contact = ({ filter }) => {
  const contactArr = useSelector(contactArrSelector);
  const isAuth = useSelector(tokenSelector);
  const dispatch = useDispatch();
  const visible = contactArr.filter(e =>
    e.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    deleteContactSwager(id);
    dispatch(getContactThunk(isAuth));
  };
  return (
    contactArr &&
    visible.map(({ number, name, id }) => {
      return (
        <ContactsDiv key={id}>
          <h-
            style={{
              fontSize: '20px',
            }}
          >
            {name}
          </h->
          <h2
            style={{
              fontSize: '20px',
              marginLeft: '20px',
            }}
          >
            {number}
          </h2>
          <Button type="button" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </ContactsDiv>
      );
    })
  );
};
export default Contact;
// Contact.propTypes = {};
// Contact.propTypes = {
//   deleteContact: PropTypes.func.isRequired,
//   props: PropTypes.array,
// };
