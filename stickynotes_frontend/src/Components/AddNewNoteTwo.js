import React, {Component} from 'react';

class AddNewNoteTwo extends Component {

	render() {
		return(
			<React.Fragment>
				<button onClick={this.props.addNew} style={btnStyle}>Add New Note</button>
			</React.Fragment>
		);
	}
}

const btnStyle = {
	backgroundImage: 'linear-gradient(black, white)',
	borderRadius: '5px',
	fontSize: '15px',
	fontWeight: 'bold',
	color: 'gold',
	width: '200px',
	height: '100px',
	display: 'block',
	clear: 'both',
	margin: 'auto',
	position: 'relative',
	top: '30px'
}

export default AddNewNoteTwo;