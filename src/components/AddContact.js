import React, { Component } from 'react';

class AddContact extends Component {
    state = {
        name: '',
        email: ''
    }
    onAdd = (e) => {
        e.preventDefault();
        if (this.state.name === '' || this.state.email === '') {
            alert("All the fields are not empty !!!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({
            name: '',
            email: ''
        })
    }
    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })

    }
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.onAdd}>
                    <div className="field">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                    </div>
                    <button className="ui primary button visible">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;