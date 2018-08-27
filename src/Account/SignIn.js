import React,{Component} from 'react';
import Authen from '../Account/Authen';

// SignIn stateless Compontent
class SignIn extends Component{
	render() {
		return(
        	<div className="auth-color">
        		<Authen/>
        	</div>
		)
	}
}

export default SignIn;