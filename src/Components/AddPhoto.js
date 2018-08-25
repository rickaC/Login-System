import React, {Component} from 'react'

//AddPhoto component responsible for adding to database
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
            this.props.history.push('/Blog')
        }

    }

    render() {
        return (
                <div className="addphoto-blue">
                    <div className="container">
                        <div className="form">
                          <form onSubmit={this.handleSubmit}> 
                               <input type ="text" placeholder="Link" name="link"/><br/>
                               <input type ="text" placeholder="Desciption" name="description"/><br/>
                               <button> Post </button>
                          </form>
                          </div>
                    </div>
                </div>
    )
    }
}



export default AddPhoto;