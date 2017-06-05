import React, { Component } from 'react';
import NavBar from './NavBar';

class SidebarLeft extends Component {
  	render() {
		return(
			<section className='sidebar'>
				<NavBar />
			</section>
		);
  	}
}

export default SidebarLeft;