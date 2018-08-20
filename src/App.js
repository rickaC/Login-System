import React, { Component } from 'react';
import './App.css';
import {Route,Redirect} from 'react-router-dom';

import Authen from './Components/Authen'
import Navigation from './Components/Navigation';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Questions from './Components/Questions';
import Landing from './Components/Landing';
import SignIn from './Components/SignIn';
import LogOut from './Components/SignIn';


class App extends Component{

  state = {
    redirect: true
  }



   renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/Landing' />
    }
  }

  render() {
    return(
      <div>
      {this.renderRedirect()}
        <Navigation/ >



         <Route
              exact path="/Landing"
              component={() => <Landing />}
            />
          
           <Route
              exact path="/About"
              component={() => <About />}
            />

            <Route
              exact path="/Blog"
              component={() => <Blog />}
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
