import './App.css';
import { React, Fragment, useState, useEffect } from 'react'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
function App() {
  // const contacts=[
  //   {
  //     id: 1,
  //     name:'Ngoc Tuan',
  //     email: 'tuanbui0509@gmail.com'
  //   },
  //   {
  //     id: 2,
  //     name:'Thuy Duong',
  //     email: 'thuyduongth2304@gmail.com'
  //   },
  //   {
  //     id: 3,
  //     name:'Ngoc Mang',
  //     email: 'mangbui2209@gmail.com'
  //   }
  // ]

  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
    console.log("useEffect []")
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    console.log("useEffect [contact]")

  }, [contacts])

  return (
    <Fragment>
      <div className="ui container">
        <Header />
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} />
      </div>
    </Fragment>
  );
}

export default App;
