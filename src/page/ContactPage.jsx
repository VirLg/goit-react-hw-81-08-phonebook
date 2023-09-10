import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'components/Form/Form';
import { addNewContactThunk, getContactThunk } from 'redux/thunks/thunks';
import { tokenSelector } from 'redux/selector';
import Filter from 'components/Filter/Filter';
import Contact from 'components/Contact/Contact';

const ContactPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(tokenSelector);
  const [filter, setFilter] = useState('');
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

  const filterContact = evt => setFilter(evt.target.value);

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
      <Filter filterContact={filterContact} />
      <Contact filter={filter} />
    </div>
  );
};

export default ContactPage;
