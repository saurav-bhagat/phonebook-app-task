import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './addphone.css';

class AddPhone extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            phone : ''
        }

    }
    changeName = (e) => {
        this.setState({ name : e.target.value });
    }
    changePhone = (e) => {
        this.setState({ phone : e.target.value });
    }
    add = () =>{
        let data = localStorage.getItem('contacts'); //a string
        if(data!==null)
        data = JSON.parse(data);
        else data = {}
        let { name, phone } = this.state;
        data[name] = phone;
        data = JSON.stringify(data); //json to string;
        localStorage.setItem('contacts', data);
        this.props.history.push('/');
    }
    render(){
        return(
            <div>
                <div className="head">
                    <h2>Phone Directory</h2>
                </div>
                <br /><br />
                <div className="content">
                    <button className="back-btn"><NavLink to="/">Back</NavLink></button><br /><br />
                    
                    <div>Name: </div>
                    <input  onChange={this.changeName} type="text" /><br /><br />
                    
                    <div>Phone: </div>
                    <input onChange={this.changePhone} type="text" /><br />
                    
                    <p><b>Subscriber to be added:</b></p>
                    <p>Name: {this.state.name} </p>
                    <p>Phone: {this.state.phone}</p>

                    <br /><br />
                    <button className="add-btn" onClick={this.add}>ADD</button>
                </div>
            </div>
        );
    }
}

export default AddPhone;