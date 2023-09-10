import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ContactsDiv, Button } from './Contacts.styled';

import { contactsDeleteThunk } from 'redux/thunk';
import { contactArrSelector } from 'redux/selector';
const Contact = ({ filter }) => {
  const contactArr = useSelector(contactArrSelector);
  const visible = contactArr.filter(e =>
    e.name.toLowerCase().includes(filter.toLowerCase())
  );

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
          <Button
            type="button"
            onClick={() => dispatch(contactsDeleteThunk(id))}
          >
            Delete
          </Button>
        </ContactsDiv>
      );
    })
  );
};
Contact.propTypes = {};
export default Contact;
Contact.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  props: PropTypes.array,
};
