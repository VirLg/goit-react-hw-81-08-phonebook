import { nanoid } from '@reduxjs/toolkit';
import Contact from 'components/Contact/Contact';
import Filter from 'components/Filter/Filter';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'components/Form/Form';
import { addNewContactThunk, getContactThunk } from 'redux/thunks/thunks';
import { tokenSelector } from 'redux/selector';

const ContactPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(tokenSelector);
  const addNewContact = props => {
    console.log('props', props);
    const { name, number } = props;
    // if (contactApi) {
    //   const check = contactApi.contactsApi.find(
    //     el => el.name.toLowerCase() === name.toLowerCase()
    //   );
    //   if (check) {
    //     return alert('NoNoNo');
    //   }

    dispatch(addNewContactThunk({ name, number }));
  };
  useEffect(() => {
    dispatch(getContactThunk(isAuth));
  }, [dispatch, isAuth]);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h4>contact</h4>
      {/* {isLoading && <h2>Loading...</h2>}
      {error ? error.message : <Contact />} */}
      <Form addNewContact={addNewContact} />
      {/* <Filter filterContact={filterContact} />
      <Contact filterArrContact={filterArrContact} /> */}
    </div>
  );
};

export default ContactPage;
