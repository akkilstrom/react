import React, { Component } from 'react';

class Input extends Component {
	constructor() {
		super();
		this.state = {
			text: '',
			textArray: []
		}
	}
	//binder klick till komponenten Button.js
	updateText = (event) => {
		this.setState({text: event.target.value})
	}

	handleSubmit = (event) => {
		if(event.keyCode == 13) {
			let newArray = [...this.state.textArray];
			newArray.push(this.state.text);
			this.setState({textArray: newArray}) 
			console.log(this.state.textArray);
			this.state.text = '';
		}
	} 
  	render() {
			return(
				<div className='input-container'>
					<input 
						type='text'
						value= {this.state.text}
						name=''
						onKeyDown = {this.handleSubmit}
						onChange = {this.updateText}
					/>
					<ul className='output'>
						{this.state.textArray.map(function(text, i) {
							return<li key={i}>{text} </li>
						})}
					</ul>
				</div>
			);
  	}
}

export default Input;