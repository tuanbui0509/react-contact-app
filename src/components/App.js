import './App.css';
import { React, Fragment, useState, useEffect } from 'react'
import { uuid } from 'uuidv4'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, [])

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));

  }, [contacts])

  return (
    <Fragment>
      <div className="ui container">
        <Header />
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactById = {removeContactHandler} />
      </div>
    </Fragment>
  );
}

export default App;
