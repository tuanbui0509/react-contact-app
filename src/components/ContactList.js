import React from 'react';
import CardContact from './ContactCard'
const ContactList = (props) => {
    const renderContactList = props.contacts.map((contact, index) => {
        return (
            // <div className="item" key={index}>
            //     <div className="content">
            //         <div className="header">
            //             {contact.name}
            //         </div>
            //         <div>
            //             {contact.email}
            //         </div>
            //     </div>
            //     <i className="trash alternate outline icon "></i>
            // </div>
            // <tr key={index}>
            //     <td data-label="Name">{contact.name}</td>
            //     <td data-label="Age">{contact.email}</td>
            //     <td data-label="Job"><i className="trash alternate outline icon "></i></td>
            // </tr>
            <CardContact key={index} contact = {contact} />
        )
    });
    return (
        // <div className="ui celled list">
        //     {renderContactList}
        // </div>

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
