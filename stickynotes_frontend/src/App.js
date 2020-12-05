import React, { Component } from 'react';
import Header from './Components/Header.js';
import Nav from './Components/Nav.js';
import Notes from './Components/Notes.js';
import About from './Pages/About.js';
import Customize from './Pages/Customize.js';
import AddNewNote from './Components/AddNewNote';
import AddNewNoteTwo from './Components/AddNewNoteTwo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
	state = {
		notes: [],
		
		bgClr: 'white',
		noteClr: '#ffd11a',
		textClr: 'black',
		
		httpData: []
	}

	
	// fetches all notes from 'stickynotes' database
	componentDidMount() {
		fetch('http://localhost:5000/notes')
		.then(response => response.json())
		.then(data => this.setState({
				httpData: data.map(
					function(item) {
						let o = Object.assign({});
						o.id = item.id;
						o.body = item.body;
						return o;
					}
				)
			})
		)
		.then( () => this.setState({
				notes: [...this.state.httpData, ...this.state.notes]
			})
		)
	}
	
	
	// saves or updates note to database
	saveNote = (id, body) => {
		let savedNote = {
			id,
			body
		}
		let x;
		let isInDatabase = false;
		
		// checks if saved note is already in database
		for(x=0; x<this.state.httpData.length; x++) {
			if(this.state.httpData[x].id===savedNote.id) {
				isInDatabase = true;
			}
		}
		if(isInDatabase) {
			// updates a note object if there is an existing note
			fetch(`http://localhost:5000/notes/${id}`, {
				headers: { "Content-Type": "application/json; charset=utf-8" },
				method: 'PUT',
				body: JSON.stringify(savedNote)
			})
			.catch((error) => {
				console.error('Error: ', error);
			});
		}
		else {
			// fetch post request
			fetch('http://localhost:5000/notes', {
				headers: { "Content-Type": "application/json; charset=utf-8" },
				method: 'POST',
				body: JSON.stringify(savedNote)
			})
			.then(response => response.json())
			.then( () => {
				for(x=0; x<this.state.notes.length; x++){
					if(this.state.notes[x].id===id) {
						this.setState({ /* finds the note with the specified id and updates the state of that item in the notes array */
							notes: [
								...this.state.notes.slice(0,x),
								Object.assign({}, this.state.notes[x], savedNote), /* 2nd argument indicates where in array is being assigned, 3rd argument is the assigned content */
								...this.state.notes.slice(x+1)
							]
						})
					}
				}
			});
		}
	}
	
	
	// deletes specified note
	delNote = (id, body) => {
		fetch(`http://localhost:5000/notes/${id}`, {
			headers: { "Content-Type": "application/json; charset=utf-8" },
			method: 'DELETE',
			body: JSON.stringify({
				id: id, 
				body: body
			})
		})
		.then( () => this.setState({
				notes: [...this.state.notes.filter(
					note => note.id !== id
				)]
			})
		);
	}
	
	
	// adds new note template from empty
	addNew = () => {
		const newItem = {
			id: Math.floor(Math.random() * 10000),
			body: ''
		}
	
		this.setState({
			notes: [...this.state.notes, newItem]
		});
	}
	
	
	// conditional jsx return statement for home page
	home() {
		if(this.state.notes.length===0) {
			return <AddNewNote addNew={this.addNew} />
		}
		
		else {
			return (
				<React.Fragment>
					<Notes 
						notes={this.state.notes} 
						saveNote={this.saveNote}
						delNote={this.delNote} 
						noteColor={this.state.noteClr}
						textColor={this.state.textClr}
					/>
					
					<AddNewNoteTwo addNew={this.addNew} />
				</React.Fragment>
			)
		}
	}
	
	
	// customize colors for app
	changeBG = (clr) => {
		this.setState({
			bgClr: clr
		});
	}
	
	changeNote = (clr) => {
		this.setState({
			noteClr: clr
		});
	}
	
	changeText = (clr) => {
		this.setState({
			textClr: clr
		});
	}
	
	
	render() {
		return (
			<Router>
				<div style={{backgroundColor:this.state.bgClr, color:this.state.textClr, height:'100vh'}}>
					<Header />
					
					<Nav />
					
					<Route exact path='/' render={props => (this.home())} />
					
					<Route path='/about' component={About} />
					
					<Route 
						path='/customize' 
						render={
							props => 
							<Customize
								bgColor={this.state.bgClr}
								textColor={this.state.textClr}
								noteColor={this.state.noteClr}
								handleBgColor={this.changeBG} 
								handleNoteColor={this.changeNote} 
								handleTextColor={this.changeText} 
							/>
						}							
					/>
				</div>
			</Router>
		);
	}
}

export default App;
