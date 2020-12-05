const mysql = require('mysql');

const con = mysql.createConnection({
	host: "localhost",
	port: <your_port>, // Replace <your_port> with your MySQL database port number (must be type integer)
	user: "root", // Replace <your_user> with your MySQL user name
	password: "<your_password>", // Replace <your_password> with your MySQL database password
	database: "<your_database>" // Replace <your_database> with your MySQL database name
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	
	const sql = "CREATE TABLE notes (id INT NOT NULL PRIMARY KEY, body VARCHAR(255))";
	
	con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});