import React from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';

const ContactList = () => {
  return (
    <div className='list-area'>
      <SearchBox />
      <ContactItem />
    </div>
  );
};

export default ContactList;
