import React, { Component } from 'react';
import Buttons from './Buttons';

//Ska variabeln ligga i app.js eller denna?

class SidebarRight extends Component {
	constructor() {
		super();
		this.state = {
			counter: 0
		}
	}
	//binder klick till komponenten Button.js
	handleIncrease = () => {
		this.setState({ counter: this.state.counter + 1})
	}
	
	handleDecrease = () =>{
		this.setState({ counter: this.state.counter - 1})
	}

  	render() {
		return(
			<section className='sidebar'>
				<div className='counter'>{this.state.counter}</div>
				<Buttons name='Increase' onClick={this.handleIncrease}/>
				<Buttons name='Decrease' onClick={this.handleDecrease} 
					style ={{borderColor: 'orange' }}/>
			</section>
		);
  	}
}

export default SidebarRight;