import React, { useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (keyword !== '') {
      let list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword, contactList]);

  return (
    <div className='list-area'>
      <SearchBox />
      num: {filteredList.length}
      {filteredList.map((item, index) => (
        <ContactItem key={index} item={item} />
      ))}
    </div>
  );
};

export default ContactList;
