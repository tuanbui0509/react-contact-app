import React from 'react';
import { Link } from 'react-router-dom';
import user from '../images/user.png'
const ContactCard = (props) => {
    let { id, name, email } = props.contact;
    return (
        <tr >
            <Link to={{pathname:`/contact/${id}`,state:{contact:props.contact}}}>
                <td data-label="Name"> <img className="ui avatar image" src={user} alt={"user"} /> {name}</td>
            </Link>
            <td data-label="Age">{email}</td>
            <td data-label="Job"><i className="trash alternate outline icon" style={{ color: "red" }} onClick={() => props.clickHandler(id)}></i></td>
        </tr>
    );
}

export default ContactCard;
