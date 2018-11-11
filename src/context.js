import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT' : 
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'Thiago Moura',
                email: 'thmoura14@gmail.com',
                phone: '81-99811-3680'
            },
            {
                id: 2,
                name: 'Priscila Borges',
                email: 'priscila-borges24@hotmail.com',
                phone: '81-98924-4773'
            },
            {
                id: 3,
                name: 'Debora Borges',
                email: 'debora@gmail.com',
                phone: '81-98925-5485'
            },
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}


export const Consumer = Context.Consumer;