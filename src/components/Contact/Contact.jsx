import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ContactsDiv, Button } from './Contacts.styled';

import { contactsDeleteThunk } from 'redux/thunk';
import { contactArrSelector } from 'redux/selector';
import { deleteContactSwager } from 'api/auth';
const Contact = ({ filter }) => {
  const contactArr = useSelector(contactArrSelector);
  const visible = contactArr.filter(e =>
    e.name.toLowerCase().includes(filter.toLowerCase())
  );
  const handleDelete = id => {
    deleteContactSwager(id);
  };
  const dispatch = useDispatch();
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
