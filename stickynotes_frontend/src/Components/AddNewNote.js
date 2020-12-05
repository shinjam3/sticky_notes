import React, {Component} from 'react';

class AddNewNote extends Component {

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
	margin: 'auto',
	marginTop: '100px'
}

export default AddNewNote;