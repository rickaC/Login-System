import React,{Component} from 'react';
import Authen from '../Account/Authen';

class SignIn extends Component{
	render() {
		return(
        	<div>
        	<h1>This is the signIn page</h1>
        		<Authen/>
        	</div>
		)
	}
}

export default SignIn;