import Contact from 'components/Contact/Contact';
import Filter from 'components/Filter/Filter';
import React from 'react';
import { Form } from 'react-router-dom';

const ContactPage = () => {
  const addNewContact = () => {};

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
