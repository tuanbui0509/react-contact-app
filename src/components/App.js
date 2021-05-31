import './App.css';
import { React, Fragment } from 'react'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
function App() {
  const contacts=[
    {
      id: 1,
      name:'Ngoc Tuan',
      email: 'tuanbui0509@gmail.com'
    },
    {
      id: 2,
      name:'Thuy Duong',
      email: 'thuyduongth2304@gmail.com'
    },
    {
      id: 3,
      name:'Ngoc Mang',
      email: 'mangbui2209@gmail.com'
    }
  ]
  return (
    <Fragment>
      <div className="ui container">
        <Header />
        <AddContact />
        <ContactList contacts={contacts} />
      </div>
    </Fragment>
  );
}

export default App;
