import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
	function changeBackground(e) {
		e.target.style.background = 'white';
	}
	
	function defaultBackground(e) {
		e.target.style.background = 'lightgray';
	}
	
	return (
		<nav style={navStyle}>
			<ul style={ulStyle}>
				<li style={liStyle}>
					<Link 
						onMouseOver={changeBackground}
						onMouseLeave={defaultBackground}
						style={linkStyle} 
						to='/'
					>Home</Link>
				</li>
				
				<li style={liStyle}>
					<Link
						onMouseOver={changeBackground}
						onMouseLeave={defaultBackground}
						style={linkStyle} 
						to='/customize'
					>Customize</Link>
				</li>
				
				<li style={liStyle}>
					<Link 
						onMouseOver={changeBackground}
						onMouseLeave={defaultBackground}
						style={linkStyle} 
						to='/about'
					>About</Link>
				</li>
			</ul>
		</nav>
	);
}

const navStyle = {
	backgroundColor: 'lightgray',
	padding: '0px',
	height: '50px',
	width: '100%'
};

const ulStyle = {
	display: 'block',
	margin: 'auto',
	width: '300px' // width must be the same as (list item width)*(number of list items) in order to center the list
}

const liStyle = {
	display: 'block',
	listStyleType: 'none',
	float: 'left'
}

const linkStyle = {
	fontFamily: 'Courier New, Courier, monospace',
	fontWeight: 'bold',
	display: 'block',
	paddingTop: '12px',
	textAlign: 'center',
	height: '50px',
	width: '100px',
	color: 'black'
}

export default Nav;