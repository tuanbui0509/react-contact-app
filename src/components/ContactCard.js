import React from 'react';
import user from '../images/user.png'
const ContactCard = (props) => {
    let {name,email} = props.contact;
    return (
        <tr >
            <td data-label="Name"> <img className="ui avatar image" src={user} alt={"user"} /> {name}</td>
            <td data-label="Age">{email}</td>
            <td data-label="Job"><i className="trash alternate outline icon" style={{color: "red"}}></i></td>
        </tr>
    );
}

export default ContactCard;
