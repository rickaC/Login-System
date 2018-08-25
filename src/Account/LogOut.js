import React,{Component} from 'react';
import {firebase} from "../Firebase/firebase";
import {withRouter} from 'react-router-dom';

// Logout Stateless Component
class LogOut extends Component{

	constructor(props) {
	    super(props);
	    this.state={
	      err: '',
	    };
	    this.logout = this.logout.bind(this); 
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
            <button id="logout" onClick={this.logout}>Log Out</button><br/>
          </form>
          </div>
        	</div>
		)
	}
}

export default withRouter(LogOut);