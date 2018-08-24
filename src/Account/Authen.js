import React, {Component} from 'react';
import {Route,Link, Redirect,withRouter} from 'react-router-dom';

import {firebase} from "../Firebase/firebase"




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
		const name = this.refs.name.value;
		const email = this.refs.email.value;
		const password = this.refs.password.value;
		console.log(name, email, password);

		const auth = firebase.auth();

		const promise = auth.signInWithEmailAndPassword(email, password);

		promise.then(user =>{
  			 this.props.history.push("/");
    	});

		promise.catch(e=>{
			var err = e.message;
			console.log(err);
			this.setState({err:err})	
		});
	}

	// Signup Method
signup(){
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
  			 this.props.history.push("/Questions");
    });

    promise.catch(e => {
      var err = e.message;
      console.log(err);
      this.setState(({err: err}));
    });
  }


  logout(){



  	const promise = firebase.auth().signOut();
  	console.log(promise);

  	promise.then(() =>{
  		console.log(promise)
  		this.props.history.push("/LogOut");
    });

  	// Hide LogOut Button
  	// var lout =	document.getElementById('logout');
   //  lout.classList.add('hide');
  }

  // google(){
  // 	var provider = new firebase.auth.GoogleAuthProvider();
  // 	firebase.auth().signInWithPopup(provider);
  // 	var promise = firebase.auth().signInWithPopup(provider);

  // 	promise.then( result => {
  // 		var user = result.user;
  // 		console.log(result);

  // 		firebase.database().ref('users/'+user.uid).set({
  // 			email: user.email,
  // 			name: user.displayName
  // 		});
  // 	});

  // 	promise.catch(e =>{
  // 		var msg = e.message;
  // 		console.log(msg);
  // 	});
  // }


	



	render() {
		return(
		<div className="container">
      <form className="form">
			<input id="name" type="name" placeholder="Enter your name" ref="name"/><br/>
			<input id="email" type="email" placeholder="Enter your email" ref="email"/><br/>
			<input id="pass"  type="password" placeholder="Enter your password" ref="password"/><br/>
			<p>{this.state.err}</p>


			<button onClick={this.login}>Sign In</button>
			<button className="modalSignUp" onClick={this.signup}>Sign Up</button>
			<button id="logout" onClick={this.logout}>Log Out</button><br/>
			{/*<button id="logout" className="google" onClick={this.google}>Sign In With Google</button>*/}
      </form>
		</div>
		)
	};
}

export default withRouter(Authen);


