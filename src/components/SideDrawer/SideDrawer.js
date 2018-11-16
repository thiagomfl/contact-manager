import React from 'react';

import './SideDrawer.css'
import '../Backdrop/Backdrop.css'

const SideDrawer = props => {

   let drawerClasses = 'side-drawer';

   if(props.show) {
      drawerClasses = 'side-drawer open';
   }


   return (
      <nav className={drawerClasses}>
        
         <ul>
         <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact/add" className="nav-link">
                <i className="fas fa-plus" /> Add
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                <i className="fas fa-question" /> About
              </a>
            </li>
         </ul>
      </nav>
   )
}

export default SideDrawer;