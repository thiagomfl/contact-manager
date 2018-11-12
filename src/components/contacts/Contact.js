import React, { Component } from 'react';
import propTypes from 'prop-types';
import {Consumer} from '../../context';

export default class Contact extends Component {
    state = {
        showContactInfo: true
    }

    onUpdateClick = () => {
        console.log('Update Button')
    }

    onDeleteClick = (id, dispatch) => { 
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
        });
    }

    onShowClick = e => {
        this.setState({
            showContactInfo: !this.state.showContactInfo
        });
    }

    render() {
        const {id, name, email, phone} = this.props.contact;
        const {showContactInfo} = this.state;

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <div className="card card-body mb-3">
                        <h4>{name}  <i onClick={this.onShowClick}
                            className="fas fa-sort-down"
                            style={{cursor: 'pointer'}}></i>

                            <i className="fas fa-times ml-2" 
                                style={{cursor: 'pointer', float: 'right', color: 'red'}}
                                onClick={this.onDeleteClick.bind(this, id, dispatch)}
                                ></i>
                            <i className="far fa-edit " 
                                style={{cursor: 'pointer', float: 'right'}}
                                onClick={this.onUpdateClick}
                                ></i>
                            
                        </h4>
                        {showContactInfo ? (
                            <ul className="list-group">
                                <li className="list-group-item">Email: {email}</li>
                                <li className="list-group-item">Phone: {phone}</li>
                            </ul>
                        ) : null}
                    </div>
                    )
                }}
            </Consumer>
        )
    }
}

Contact.propTypes = {
    contact: propTypes.object.isRequired
}