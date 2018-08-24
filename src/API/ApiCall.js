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