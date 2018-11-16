import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

import './Toolbar.css';

const Toolbar = props => (
   <header className="toolbar">
      <nav className="toolbar-navigation">
         <div className="toolbar-toggle-button">
            <DrawerToggleButton click={props.drawerToggleClickHandler} />
         </div>
         <div className="toolbar-logo">
            <a href="/">Logo</a>
         </div>
         <div className="spacer" />
         <div className="toolbar-navigation-items">
            <ul>
               <li><a href="/">Products</a></li>
               <li><a href="/">Users</a></li>
            </ul>
         </div>
      </nav>
   </header>
);

export default Toolbar;