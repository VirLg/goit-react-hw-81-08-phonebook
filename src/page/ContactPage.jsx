import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'components/Form/Form';
import { getContactThunk } from 'redux/thunks/thunks';
import {
  contactArrSelector,
  errorSelector,
  isLoadingSelector,
  tokenSelector,
} from 'redux/selector';
import Filter from 'components/Filter/Filter';
import Contact from 'components/Contact/Contact';
import { addNewContactSwager } from 'api/auth';

const ContactPage = () => {
  const isLoading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();
  const isAuth = useSelector(tokenSelector);
  const [filter, setFilter] = useState('');
  const contactArr = useSelector(contactArrSelector);
  const addNewContact = props => {
    const { name, number } = props;
    if (contactArr) {
      const check = contactArr.find(
        el => el.name.toLowerCase() === name.toLowerCase()
      );
      if (check) {
        return alert('NoNoNo');
      }
      addNewContactSwager({ name, number });
      dispatch(getContactThunk(isAuth));
    }
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
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading...</h2>}
      <Form addNewContact={addNewContact} />
      <div className="container-form">
        <Filter filterContact={filterContact} />
        <Contact filter={filter} />
      </div>
    </div>
  );
};

export default ContactPage;
// <>
//   (<Form addNewContact={addNewContact} />
//   <Filter filterContact={filterContact} />
//   <Contact filter={filter} />)
// </>;
