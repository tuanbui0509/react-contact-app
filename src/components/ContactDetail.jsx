import React from 'react';
import { Link } from 'react-router-dom';

function ContactDetail(props) {
    console.log(props.location.state.contact);
    let { id, name, email } = props.location.state.contact;

    return (
        <div className="another example">
            <div className="ui link cards" style={{ 'justifyContent': 'center' ,'flexDirection': 'column','alignItems': 'center'}}>
                <div className="card">
                    <div className="image">
                        <img src="https://semantic-ui.com/images/avatar2/large/matthew.png" />
                    </div>
                    <div className="content">
                        <div className="header">{name}</div>
                        <div className="meta"> <i>Friends</i> </div>
                        <div className="description"> {email} </div>
                    </div>
                    <div className="extra content">
                        <span className="right floated">  Joined in 2013 </span>
                        <span> <i className="user icon" /> 75 Friends </span>
                    </div>
                </div>
            
                <Link to='/'>
                
                <button className="ui button blue">Back to ContactList</button>
                </Link>  
            </div>
            
        </div>

    );
}

export default ContactDetail;