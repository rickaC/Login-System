import React, { Component } from 'react';
import '../App.css';
import {Route} from 'react-router-dom';

import Authen from '../Account/Authen'
import Navigation from './Navigation';
import RESTAPI from './RESTAPI';
import AddPhoto from './AddPhoto';
import PhotoWall from './PhotoWall';
import Blog from './Blog';
import Contact from './Contact';
import Questions from './Questions';
import Single from './Single';
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

            <Route path= "/AddPhoto" render = {({history}) => (
                <AddPhoto {...this.props} onHistory={history}/>
            )}/>

            <Route exact path = "/Blog" render={() => (
                 <div>
                      <PhotoWall {...this.props} />   
                 </div>

            )}/>

            <Route
              exact path="/Contact"
              component={() => <Contact />}
            />

            <Route path="/single/:id" render = {(params) => (
                <Single  {...this.props} {...params}/> 
            )}/>

             <Route
              exact path="/Questions"
              component={() => <Questions />}
            />

            <Route
              exact path="/PhotoWall"
              component={() => <PhotoWall />}
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
