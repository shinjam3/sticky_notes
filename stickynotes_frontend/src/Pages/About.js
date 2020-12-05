import React, { Component } from 'react';

class About extends Component {	
	render() {
		return (
			<React.Fragment>
				<h1 style={ {textAlign:'center', margin:'20px'} }>About</h1>
				
				<p style={pStyle}>
					This is a multi-page web app project made by James Shin, 
					digitally representing physical sticky notes. 
					It was made using the React Javascript library in August, 2020. 
				</p>
				
				<p style={pStyle}>
					The web app uses various React components to function dynamically, 
					and sends information to a local MySQL database, using the Express.js 
					(Node.js) server environment.
				</p>
				
				<p style={pStyle}>
					Using a REST API such as Fetch, the web app is able to save, 
					update and delete notes through HTTP requests.
				</p>
			</React.Fragment>
		);
	}	
}

const pStyle = {textAlign:'center', margin:'20px 40px'}

export default About;
