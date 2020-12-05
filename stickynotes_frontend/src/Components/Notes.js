import React, { Component } from 'react';
import Note from './Note.js'

class Notes extends Component {	
	render() {
		return (
 			this.props.notes.map(
				(note) => (
					<Note 
						note={note}
						key={note.id}
						body={note.body}
						noteColor={this.props.noteColor}
						textColor={this.props.textColor}
						saveNote={this.props.saveNote}
						delNote={this.props.delNote}
					/>
				)
			)
		);
	}	
}

export default Notes;
