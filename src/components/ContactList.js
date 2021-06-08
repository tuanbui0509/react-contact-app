import React from 'react';
import CardContact from './ContactCard'
const ContactList = (props) => {
    console.log(props);
    const deleteContactHandler = id => {
        props.getContactById(id);
    };
    const renderContactList = props.contacts.map((contact, index) => {
        return (
            <CardContact key={index} contact={contact} clickHandler={deleteContactHandler} />
        )
    });
    return (
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

    );
}

export default ContactList;
