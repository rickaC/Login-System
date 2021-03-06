import React,{Component} from 'react';
import About from './RESTAPI';
import Blog from './Blog';
import Authen from '../Account/Authen';
import SignIn from '../Account/SignIn';
import {Link} from 'react-router-dom';


// Navigation stateless component
class Navigation extends Component{

	render() {
		return(
			<div>

				<nav className="site-header sticky-top py-1">
			      <div className="container d-flex flex-md-row justify-content-between">
			        <Link to="/Landing" className="py-2  d-md-inline-block">Home</Link>
				      <Link to="/RESTAPI" className="py-2  d-md-inline-block">RESTAPI</Link>
				      <Link to="/AddPhoto" className="py-2  d-md-inline-block">AddPhoto</Link>
				      <Link to="/LogOut" className="py-2  d-md-inline-block">Log Out</Link>    
			      </div>
			    </nav>
			  </div>

		    
		);
	}
}


export default Navigation;