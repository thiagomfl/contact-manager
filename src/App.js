import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Footer from './components/layout/Footer';

import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'

import { Provider } from 'react-redux';
import store from './store';


import './index.css';

class App extends Component {
   state = {
      sideDrawerOpen: false
   }

   drawerToggleClickHandler = () => {
      this.setState((prevState) => {
         return {sideDrawerOpen: !prevState.sideDrawerOpen}
      })
      
   }

   backdropClickHandler = () => {
      this.setState({
         sideDrawerOpen: false
      });
   }

   render() {
      let backdrop;

      if(this.state.sideDrawerOpen) {
         
         backdrop = <Backdrop click={this.backdropClickHandler}/>
      }

      return (
         <Provider store = {store}>
         <Router>
            <div className="App">
               
               <Header branding="Contact Manager" 
               drawerToggleClickHandler={this.drawerToggleClickHandler} />
               <SideDrawer show={this.state.sideDrawerOpen}/>
               {backdrop}
               <div className="container">
               <Switch>
                  <Route exact path="/" component={Contacts} />
                  <Route exact path="/contact/add" component={AddContact} />
                  <Route exact path="/contact/edit/:id" component={EditContact} />
                  <Route exact path="/about" component={About} />
                  <Route component={NotFound} />
               </Switch>
               </div>
               <Footer />
            </div>
         </Router>
         </Provider>
      );
   }
}

export default App;
