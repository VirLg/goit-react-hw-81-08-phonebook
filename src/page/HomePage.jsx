import React from 'react';
import contact from '../contact.png';
const HomePage = () => {
  return (
    <div className="container-form">
      <img
        src={contact}
        alt=""
        style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
      />
    </div>
  );
};

export default HomePage;
