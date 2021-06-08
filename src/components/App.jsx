import './App.css';
import { React, Fragment, useState, useEffect } from 'react'
import { uuid } from 'uuidv4'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import ContactDetail from './ContactDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
    <Router>
      <div className="ui container">
        <Header />
        <Switch>
          <Route
            path='/add'
            render={(props) =>
              <AddContact {...props}
                addContactHandler={addContactHandler} />} />
          <Route
            path='/'
            exact
            render={(props) =>
              <ContactList {...props}
                contacts={contacts}
                getContactById={removeContactHandler} />} />
                <Route path ='/contact/:id' component={ContactDetail} />
        </Switch>
        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactById={removeContactHandler} /> */}
      </div>
    </Router>
  );
}

export default App;
