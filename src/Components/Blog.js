import React, {Component} from 'react'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route, Link} from 'react-router-dom'
import Single from './Single'

class Blog extends Component {

    componentDidMount(){
      this.props.startLoadingPost()
    }

    render() {
        return ( 
        
        <div className="blog-color">
            <h1> 
                <Link to="/"> Blog </Link>    
             </h1>
            
         </div>
        )
    }

}

export default Blog;
 
