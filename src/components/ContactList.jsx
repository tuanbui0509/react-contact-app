import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import CardContact from './ContactCard'
const ContactList = (props) => {

    const inputEl = useRef("");

    const deleteContactHandler = id => {
        props.getContactById(id);
    };

    const renderContactList = props.contacts.map((contact, index) => {
        return (
            <CardContact key={index} contact={contact} clickHandler={deleteContactHandler} />
        )
    });

    const getSearchTerm = () => {
        props.searchKeyWord(inputEl.current.value);
    }

    return (
        <div>
            <h3>Contact List</h3>
            <div className="item-search">
                <Link to="/add">
                    <button className="ui button blue">Add contact</button>

                </Link>
                <div className="ui right aligned category search focus">
                    <div className="ui icon input">
                        <input
                            ref={inputEl}
                            className="prompt"
                            type="text" placeholder="Search contacts..."
                            autoComplete="off" value={props.term}
                            onChange={getSearchTerm} />
                        <i className="search icon" />
                    </div>
                    <div className="results" />
                </div>

            </div>

            <table className="ui celled table">
                <thead>
                    <tr><th>Name</th>
                        <th>Email</th>
                        <th colSpan="2" className="center">Action</th>
                    </tr></thead>
                <tbody>
                    {renderContactList.length > 0 ? renderContactList : `No contacts available !`}
                </tbody>
            </table>
        </div>

    );
}

export default ContactList;
