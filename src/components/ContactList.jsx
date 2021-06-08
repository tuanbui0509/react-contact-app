import React from 'react';
import { Link } from 'react-router-dom';
import CardContact from './ContactCard'
const ContactList = (props) => {
    const deleteContactHandler = id => {
        props.getContactById(id);
    };

    const renderContactList = props.contacts.map((contact, index) => {
        return (
            <CardContact key={index} contact={contact} clickHandler={deleteContactHandler} />
        )
    });
    return (
        <div>
            <h3>Contact List</h3>
            <Link to="/add">
            <button className="ui button blue">Add contact</button>

            </Link>
            <table className="ui celled table">
                <thead>
                    <tr><th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr></thead>
                <tbody>
                    {renderContactList}
                </tbody>
            </table>
        </div>

    );
}

export default ContactList;
