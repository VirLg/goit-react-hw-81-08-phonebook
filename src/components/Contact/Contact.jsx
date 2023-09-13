import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { ContactsDiv, Button } from './Contacts.styled';

import { contactArrSelector, tokenSelector } from 'redux/selector';
import { deleteContactSwager } from 'api/auth';
import { getContactThunk } from 'redux/thunks/thunks';
import { Card, CardActions, CardContent, Typography } from '@mui/material';

import { Delete } from '@mui/icons-material';
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
        <Card
          sx={{
            maxWidth: 600,
            outline: '1px solid teal',
            mt: '1tem',
            mb: '1rem',
          }}
        >
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              name: {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              number: {number}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button onClick={() => handleDelete(id)}>Delete</Button>
          </CardActions>
        </Card>
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
