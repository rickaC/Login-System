import React,{Component} from 'react';
import axios from 'axios';



//https://www.reddit.com/r/space.json
class ApiCall extends Component {

	getReddit(){
		axios.get(`https://www.reddit.com/r/${this.state.subr}.json`)
		.then(res => {
			const posts = res.data.data.children.map(obj => obj.data);
			

			console.log(posts);
			this.setState({posts:posts});
		});
	}

	componentWillMount() {
		this.getReddit();
	}

	constructor(props) {
		super(props);
		
		this.state = {
			posts: [],
			subr: 'space'
		};
		this.getReddit =this.getReddit.bind(this);

	}

	render() {

		return (
			<div>
				<h1>{`/r/${this.state.subr}`}</h1>

				<ul>
				{this.state.posts.map(post =>
					<li key={post.id}>{post.title}</li>
				)}
				</ul>
			</div>
		)
		
	}
}

export default ApiCall;