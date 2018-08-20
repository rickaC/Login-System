import React, { Component } from 'react';

const firebase = require('firebase');
const uuid = require('uuid');

// Initialize Firebase
// Initialize Firebase 
var configAuthen = {
	apiKey: "AIzaSyAg_J5j8qhbkRKrOrzLZXTEoZCr9OEsSpc",
	authDomain: "loginapp-8e672.firebaseapp.com",
	databaseURL: "https://loginapp-8e672.firebaseio.com",
	projectId: "loginapp-8e672",
	storageBucket: "loginapp-8e672.appspot.com",
	messagingSenderId: "880089488937"
	};
	if (!firebase.apps.length) {
		firebase.initializeApp(configAuthen);
	}

class Questions extends Component {

	nameSubmit(event){
		var studentName =this.refs.name.value;
		this.setState({studentName: studentName}, ()=>{
			console.log(this.state);
		});
	}

	answerSelected(event){
		var answers = this.state.answers;
		if(event.target.name === 'answer1'){
			answers.answer1 = event.target.value;
		}
		else if(event.target.name === 'answer2'){
			answers.answer2 = event.target.value;
		}
		else if (event.target.name === 'answer3'){
			answers.answer3 = event.target.value;
		}

		this.setState({answers:answers}, ()=>{
			console.log(this.state);
		});

	}

	questionSubmit(){
		firebase.database().ref('Questions/'+this.state.uid).set({
			studentName: this.state.studentName,
			answers: this.state.answers
		});
		this.setState({isSubmitted: true})
	}

	constructor(props) {
		super(props);
		
		this.state = {
			uid: uuid.v1(),
			studentName: '',
			answers: {
				answer1:'',
				answer2:'',
				answer3:''
			},
			isSubmitted:false
		};
		this.nameSubmit = this.nameSubmit.bind(this);
		this.answerSelected = this.answerSelected.bind(this);
		this.questionSubmit = this.questionSubmit.bind(this);	
	}

	render() {

		let studentName;
		let questions;

		if(this.state.studentName === '' && this.state.isSubmitted === false){
			studentName = <div>
				<h1>Hey Student, please enter your name:</h1>
				<form onSubmit={this.nameSubmit}>
					<input className="namy" type="text" placeholder="Enter you name" ref="name" />
				</form>
			</div>;
			questions = '';	
		}else if (this.state.studentName != '' && this.state.isSubmitted === false){
			studentName = <h1>Welcome To U-Survey, {this.state.studentName}</h1>
			questions = <div>
				<h2>Here are some questions:</h2>
				<form onSubmit={this.questionSubmit}>
					<div className="card">
						<label>What kind of course you like the most:</label><br/>
						<input type="radio" name="answer1" value="Technology" onChange={this.answerSelected}/>Technology
						<input type="radio" name="answer1" value="Design" onChange={this.answerSelected}/>Design
						<input type="radio" name="answer1" value="Marketing" onChange={this.answerSelected}/>Marketing
					</div>
					<div className="card">
						<label>You are a:</label><br/>
						<input type="radio" name="answer2" value="Student" onChange={this.answerSelected}/>Student
						<input type="radio" name="answer2" value="In-Job" onChange={this.answerSelected}/>In-Job
						<input type="radio" name="answer2" value="Look-for-Job" onChange={this.answerSelected}/>Look-for-Job
					</div>
					<div className="card">
						<label>Is online learning helpful:</label><br/>
						<input type="radio" name="answer3" value="yes" onChange={this.answerSelected}/>yes
						<input type="radio" name="answer3" value="No" onChange={this.answerSelected}/>No
						<input type="radio" name="answer3" value="maybe" onChange={this.answerSelected}/>maybe
					</div>
					<input className="feedback-button" type="submit" value="Submit" />

				</form>
			</div>
		}else if(this.state.isSubmitted === true){
			studentName = <h1>Thanks, {this.state.studentName}</h1>
		}

		return(
		<div className="container">
			{studentName}
			-----------------------------------
			{questions}
		</div>
		);
	}	
} 

export default Questions;