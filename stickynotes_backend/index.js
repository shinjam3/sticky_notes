const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
	host: "localhost",
	port: <your_port>, // Replace <your_port> with your MySQL database port number (must be type integer)
	user: "root", // Replace <your_user> with your MySQL user name
	password: "<your_password>", // Replace <your_password> with your MySQL database password
	database: "<your_database>" // Replace <your_database> with your MySQL database name
});


// fetch all notes in database
app.get('/notes', (req, res) => {
 	con.query("SELECT * FROM notes", function(err, result) {
		if (err) throw err;
		const arr = result.map( (item) => {
			let obj = Object.assign({});
			obj.id = item.id;
			obj.body = item.body;
			return obj;
		});
		res.send(arr);
	});
});


// insert new notes into database
app.post('/notes', (req, res) => {
	if(!req.body.body || req.body.body.length < 1) {
		res.status(400).send('Text is required and should be minimum 1 character');
		return; // return because we don't want the rest of the function to execute
	}
	let note = [[req.body.id, req.body.body]];	
	con.query("INSERT INTO notes(id, body) VALUES ?", [note], function(err, result){
		if (err) throw err;
	});
	res.end('Success!');
});


// update specified note in database
app.put('/notes/:id', (req, res) => {
	console.log(str);
	con.query('UPDATE notes SET body = ? WHERE id = ?', [req.body.body, req.params.id], function(err, result){
		if (err) throw err;
	});
	res.end('Success!');
});


// delete specified note from database
app.delete('/notes/:id', (req, res) => {
	con.query('DELETE FROM notes WHERE ID = ?', req.params.id, function(err, result) {
		if (err) throw err;
	});
	res.end('Success!');
});


const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));