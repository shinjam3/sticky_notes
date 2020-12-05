import React from 'react';

function Header() {
	return (
		<header style={headerStyle}>
			<h1>Sticky Notes</h1>
		</header>
	);
}

const headerStyle = {
	backgroundImage: 'linear-gradient(to right, black , orange)',
	color: 'yellow',
	textAlign: 'center',
	padding: '10px',
	fontFamily: 'Impact, fantasy',
	fontSize: '25px'
};

export default Header;