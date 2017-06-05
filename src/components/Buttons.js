import React, { Component } from 'react';

function Buttons (props){
	
    return(
		<button onClick={props.onClick} style={props.style}>{props.name}  </button>
    );
  }

export default Buttons;