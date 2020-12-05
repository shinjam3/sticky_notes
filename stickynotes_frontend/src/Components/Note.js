import React, { Component } from 'react';
import '../App.css';

class Note extends Component {
	state = {
		id: this.props.note.id,
		body: this.props.body,
		
		noteClr: this.props.noteClr,
		
		noteStyle: {
			margin: '10px 10px',
			width: '315px',
			height: '315px',
			background: this.props.noteColor, /* sets note color based on customization */
			float: 'left',
			borderStyle: 'outset'
		},
		
		bodyStyle: {
			marginTop: '10px',
			width: '290px', 
			height: '250px',
			backgroundColor: this.props.noteColor, /* sets text color based on customization */
			color: this.props.textColor, /* sets text color based on customization */
			'--placeholder-color': this.props.textColor, /* refers to CSS variable in App.css */
			resize: 'none',
			border: 'none',
			fontSize: '15px'
		},
		
		disabled: true
	}
	
	isDisabled = () => {
		this.setState({
			disabled: false
		});
	}
	
	onBodyChange = (e) => this.setState({
		body: e.target.value
	});	
	
	onSubmit = (e) => {
		e.preventDefault();
		this.props.saveNote(this.state.id, this.state.body);
		this.setState({
			disabled: true
		});
	}
	
	delNote = () => {
		this.props.delNote(this.state.id, this.state.body);
	}
	
	render() {
		return (
			<div style={this.state.noteStyle}>
				<form style={ {textAlign:'center'} }>					
					<textarea 
						disabled={this.state.disabled}
						style={this.state.bodyStyle} 
						value={this.state.body} 
						placeholder='Add text...'
						onChange={this.onBodyChange}						
					/>
				</form>
				
				<div style={btnContainter}>
					<button style={btnStyle} onClick={this.onSubmit}>Save</button>
					<button style={btnStyle} onClick={this.isDisabled}>Edit</button>
					<button style={btnStyle} onClick={this.delNote}>Delete</button>
				</div>
			</div>
		);
	}
}

const btnContainter = {
	display: 'flex',
	justifyContent: 'center'
}

const btnStyle = {
	width: '60px',
	margin: '10px'
}

export default Note;