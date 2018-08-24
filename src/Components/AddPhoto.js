import React, {Component} from 'react'

class AddPhoto extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }
        if (description && imageLink){
            this.props.startAddingPost(post)
            this.props.onHistory.push('/Blog')
        }

    }

    render() {
        return (
    <div className="container">
        <div className="form">
          <form onSubmit={this.handleSubmit}> 
               <input type ="text" placeholder="Link" name="link"/><br/>
               <input type ="text" placeholder="Desciption" name="description"/><br/>
               <button> Post </button>
          </form>
        </div>
    </div>
    )
    }
}



export default AddPhoto;