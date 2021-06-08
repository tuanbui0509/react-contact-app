import { React, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { uuid } from 'uuidv4';
import api from '../api/contact';
import AddContact from './AddContact';
import './App.css';
import ContactDetail from './ContactDetail';
import ContactList from './ContactList';
import EditContact from './EditContact';
import Header from './Header';
function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // retrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get('/contacts');
    return response.data;
  }

  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact
    }
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  }

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data;
    setContacts(contacts.map(contact => {
      return contact.id === id ? { ...response.data } : contact;
    }));

  }

  const searchKeyWordHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== '') {
      const newContactList = contacts.filter((contact) => {
        console.log(Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase()));
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
      })
      setSearchResults(newContactList)
    } else {
      setSearchResults(contacts);
    }
  }

  useEffect(() => {
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retrieveContacts) setContacts(retrieveContacts);

    const getAllContact = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    }

    getAllContact();
  }, [])

  const removeContactHandler = async (id) => {

    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }
  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));

  }, [contacts])

  return (
    <Router>
      <div className="ui container">
        <Header />
        <Switch>
          {/* add */}
          <Route
            path='/add'
            render={(props) =>
              <AddContact {...props}
                addContactHandler={addContactHandler} />} />
          {/* edit */}
          <Route
            path='/edit/:id'
            render={(props) =>
              <EditContact {...props}
                updateContactHandler={updateContactHandler} />} />
          {/* Detail */}
          <Route
            path='/'
            exact
            render={(props) =>
              <ContactList
                {...props}
                contacts={searchTerm.length < 1 ? contacts : searchResults}
                getContactById={removeContactHandler}
                searchKeyWord={searchKeyWordHandler}
              />}
            term={searchTerm}

          />

          <Route
            path='/contact/:id'
            component={ContactDetail} />
        </Switch>
        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactById={removeContactHandler} /> */}
      </div>
    </Router>
  );
}

export default App;
