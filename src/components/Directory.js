import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './directory.css';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: ''
        }
    }
    delete = (e) => {
        let contacts = localStorage.getItem('contacts');
        if (contacts !== "")
            contacts = JSON.parse(contacts);
        Object.keys(contacts).map((contact, i) => {
            if(contact===e.target.value){
                delete contacts[contact];
            }
        })
        contacts = JSON.stringify(contacts);
        localStorage.setItem('contacts', contacts);
        this.setState({ contacts });
    }
    componentDidMount(){
        let contacts = localStorage.getItem('contacts'); //this is a string;
        this.setState({ contacts });
    }
    render() {
        let contacts = {};
        if(this.state.contacts !== "")
            contacts = JSON.parse(this.state.contacts);
        return (
            <div>
                <div className="head">
                    <h2>Phone Directory</h2>
                </div>
                <br /><br />
                <div className="content">
                    <button className="add-btn"><NavLink to="/add">Add</NavLink></button>
                    <br /><br />
                    <table>
                        <tr>
                            <th>NAME</th>
                            <th>PHONE</th>
                            <th></th>
                        </tr>
                        {  contacts && 
                            Object.keys(contacts).map((contact, i) => {
                                return (<tr><td>{contact}</td><td>{contacts[contact]}</td><td><button className="delete-btn" value={contact} onClick={this.delete} >Delete</button></td></tr>)
                            })
                        }
                    </table>
                </div>

            </div>
        );
    }
}

export default Directory;