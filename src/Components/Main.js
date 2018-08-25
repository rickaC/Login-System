import React, { Component } from 'react';
import '../App.css';
import {Route} from 'react-router-dom';

import Authen from '../Account/Authen'
import Navigation from './Navigation';
import RESTAPI from './RESTAPI';
import AddPhoto from './AddPhoto';
import PhotoWall from './PhotoWall';
import Blog from './Blog';
import Landing from './Landing';
import SignIn from '../Account/SignIn';
import LogOut from '../Account/LogOut';

// Main Components responsible for loading the content for the database and routing to different pages
class App extends Component{

  componentDidMount(){
      this.props.startLoadingPost()
    }

  render() {
    return(
      <div>

        <Navigation/ >

            <Route
              exact path="/"
              component={() => <SignIn />}
            /> 
          
           <Route
              exact path="/RESTAPI"
              component={() => <RESTAPI />}
            />

            <Route
              exact path="/Landing"
              component={() => <Landing />}
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
