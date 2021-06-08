import React from 'react';
import { Link } from 'react-router-dom';
import user from '../images/user.png'
const ContactCard = (props) => {
    let { id, name, email } = props.contact;
    return (
        <tr >
            <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
                <td > <img className="ui avatar image" src={user} alt={"user"} /> {name}</td>
            </Link>
            <td >{email}</td>
            <td >
                <Link to={{ pathname: `/edit/${id}`, state: { contact: props.contact } }}>
                    <i className="edit alternate outline icon" style={{ color: "green" }}></i>
                </Link>
            </td>
            <td ><i className="trash alternate outline icon" style={{ color: "red" }} onClick={() => props.clickHandler(id)}></i></td>
        </tr>
    );
}

export default ContactCard;
