import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Navigation from './Components/Navigation';
import RESTAPI from './Components/RESTAPI';
import AddPhoto from './Components/AddPhoto';
import Contact from './Components/Contact';
import Questions from './Components/Questions';
import Landing from './Components/Landing';
import SignIn from './Account/SignIn';
import LogOut from './Account/LogOut';



class Main extends Component{


  render() {
    return(
      <div>

        <Navigation/ >
 

            <Route
              exact path="/Landing"
              component={() => <Landing />}
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


export default Main;
