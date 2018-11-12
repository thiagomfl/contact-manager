import React, { Component } from 'react';
import {Consumer} from '../../context';
import uuid from 'uuid';

import TextInputGroup from '../layout/TextInputGroup'

export default class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const {name, email, phone} = this.state;
        
        // Check For Errors
        if(name === '') {
            this.setState({
                errors: {
                    name: 'Name is required'
                }
            })
            return;
        }

        if(email === '') {
            this.setState({
                errors: {
                    email: 'Email is required'
                }
            })
            return;
        }

        if(phone === '') {
            this.setState({
                errors: {
                    phone: 'Phone is required'
                }
            })
            return;
        }



        const newContact = {
            id: uuid(),
            name,
            email,
            phone,
            errors: {}
        }

        dispatch({
            type: 'ADD_CONTACT',
            payload: newContact
        })

        // Clear State
        this.setState ({
            name: '',
            email: '',
            phone: ''
        })

        this.props.history.push('/');
    }

    render() {
        const {name, email, phone, errors} = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch} = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">
                                <h3>Add Contact</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                   
                                    <TextInputGroup
                                        label="Name"
                                        name="name"
                                        placeholder="Enter Name"
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name}
                                         />

                                    <TextInputGroup
                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={this.onChange}
                                        error={errors.email}
                                         />
                                    <TextInputGroup
                                        label="Phone"
                                        name="phone"
                                        placeholder="Enter Phone"
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone}
                                         />
                                    <input 
                                        type="submit"
                                        value="Add Contact"
                                        className="btn btn-primary btn-block" />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    } 
}