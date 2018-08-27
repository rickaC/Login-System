
import React,{Component} from 'react';
import ApiCall from '../API/ApiCall';


class About extends Component{
	render() {
		return(
			<section className="rest-color d-flex">
		          <div className="container text-center my-auto">
		            <h1 className="mb-1">REST API</h1>
		            <h3 className="mb-5">
		              <em>Displaying data from a REST web service</em>
		            </h3>
		            <ApiCall />
		           
		          </div>
		          <div className="overlay"></div>
		        </section>
		);
	}	
}

export default About;