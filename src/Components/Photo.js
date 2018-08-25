import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
function Photo(props) {
    const post = props.post

    return <div className="photo-wraper">
            <figure className="figure"> 
                 
                <div className="photo-image">
                    <img className= "photo img-responsive"  src={post.imageLink} alt={post.description}/>
                </div>
                <figcaption> <p> {post.description} </p> </figcaption>
                <div className = "button-container">
                <button onClick = {() => {
                    props.startRemovingPost(props.index, post.id)
                    props.history.push('/')
                }}> Remove </button>
                </div>
             </figure>
         </div>
}


Photo.propTypes = {
    post: PropTypes.object.isRequired,
}


export default Photo