import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


export default function Header(props) {
    const {branding} = props;

    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand mb-3">
            <div className="container">
                <Link to="/" className="navbar-brand">{branding}</Link>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/contact/add" className="nav-link">Add</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>  
    )       
}

Header.defaultProps = {
    branding: "Contact Manager"
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
}

