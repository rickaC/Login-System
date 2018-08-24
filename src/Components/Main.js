import React, { Component } from 'react';
import '../App.css';
import {Route} from 'react-router-dom';

import Authen from '../Account/Authen'
import Navigation from './Navigation';
import RESTAPI from './RESTAPI';
import AddPhoto from './AddPhoto';
import Contact from './Contact';
import Questions from './Questions';
import Landing from './Landing';
import SignIn from '../Account/SignIn';
import LogOut from '../Account/LogOut';


class App extends Component{


  render() {
    return(
      <div>

        <Navigation/ >

            <Route
              exact path="/"
              component={() => <Landing />}
            /> 
          
           <Route
              exact path="/RESTAPI"
              component={() => <RESTAPI />}
            />

            <Route
              exact path="/AddPhoto"
              component={() => <AddPhoto />}
            />

            <Route
              exact path="/Contact"
              component={() => <Contact />}
            />

             <Route
              exact path="/Questions"
              component={() => <Questions />}
            />

            <Route
              exact path="/SignIn"
              component={() => <SignIn />}
            />

            <Route
              exact path="/LogOut"
              component={() => <LogOut />}
            />


        </div>
    )
  } 
}


export default App;
