import React,{Component} from 'react';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Authen from '../Account/Authen';
import SignIn from '../Account/SignIn';
import {Link} from 'react-router-dom';
import $ from 'jquery';

class Navigation extends Component{

	render() {
		return(
			<div>

				<nav className="site-header sticky-top py-1">
			      <div className="container d-flex flex-column flex-md-row justify-content-between">
			        <Link to="/Landing" className="py-2 d-none d-md-inline-block">Home</Link>
				      <Link to="/About" className="py-2 d-none d-md-inline-block">About</Link>
				      <Link to="/Blog" className="py-2 d-none d-md-inline-block">Blog</Link>
				      <Link to="/Contact" className="py-2 d-none d-md-inline-block">Contact</Link>
				      <Link to="/SignIn" className="py-2 d-none d-md-inline-block">Sign In</Link>    
			      </div>
			    </nav>
			  </div>

		    
		);
	}
}


export default Navigation;