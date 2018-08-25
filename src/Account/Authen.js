import React, {Component} from 'react';
import {Route,Link, Redirect,withRouter} from 'react-router-dom';
import {firebase} from "../Firebase/firebase"



// Authen Component controls the Account Sign In, Sign Up, Logout stateless Components
class Authen extends Component {

  constructor(props) {
    super(props);
    this.state={
      err: '',
    };

    this.login= this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this);
    // this.google = this.google.bind(this);  
  }

  // Login Method
  login(event){
    event.preventDefault();
    const name = this.refs.name.value;
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(name, email, password);

    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, password);

    promise.then(user =>{
         this.props.history.push("/Blog");
      });

    promise.catch(e=>{
      var err = e.message;
      console.log(err);
      this.setState({err:err})  
    });
  }

  // Signup Method
signup(event){
    event.preventDefault();
    const name = this.refs.name.value;
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(name, email, password);

    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, password);


    promise
    .then(user => {
      var err = "Welcome "+ name;

      firebase.database().ref('users/'+user.user.uid).set({
        email: user.user.email
      });
      this.setState({err: err});
    });

    promise.then(user =>{
         // this.props.history.push("/");
    });

    promise.catch(e => {
      var err = e.message;
      console.log(err);
      this.setState(({err: err}));
    });
  }


  logout(event){


    event.preventDefault();
    const promise = firebase.auth().signOut();

    promise.then(() =>{
      this.props.history.push("/SignIn");
    });

    promise.catch(e => {
      var err = e.message;
    });
  }

  render() {
    return(
      <div>
    <div className="container">
      <form className="form">
        <input id="name" type="name" placeholder="Enter your name" ref="name"/><br/>
        <input id="email" type="email" placeholder="Enter your email" ref="email"/><br/>
        <input id="pass"  type="password" placeholder="Enter your password" ref="password"/><br/>
        <p>{this.state.err}</p>


        <button onClick={this.login}>Sign In</button>
        <button className="modalSignUp" onClick={this.signup}>Sign Up</button>
        <button id="logout" onClick={this.logout}>Log Out</button><br/>
      </form>
      </div>
    </div>
    )
  };
}

export default withRouter(Authen);
