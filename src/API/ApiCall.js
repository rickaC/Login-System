import React,{Component} from 'react';
import axios from 'axios';

//Api Call Component
class ApiCall extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			posts: [],
			subr: 'space'
		};
		this.getReddit =this.getReddit.bind(this);

	}


	//https://www.reddit.com/r/space.json
	getReddit(){
		axios.get(`https://www.reddit.com/r/${this.state.subr}.json`)
		.then(res => {
			const posts = res.data.data.children.map(obj => obj.data);
			
			this.setState({posts:posts});
		});
	}

	// TODO save post to local storage

	componentWillMount() {
		this.getReddit();
	}

	render() {

		return (
			<div className="container">

				<ul className="row">
				{this.state.posts.map(post =>
					<li className="col-md-4 col-sm-4 api-li" key={post.id}>{post.title}</li>
				)}
				</ul>
			</div>
		)
		
	}
}

export default ApiCall;