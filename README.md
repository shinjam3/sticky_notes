# A React Application: Sticky Note (2020)

## Software Used:
HTML, CSS, JavaScript, React, Node Express, MySQL

## Description:
A web app using the React JavaScript library, digitally representing physical sticky notes. Users can write, save, delete or customize sticky notes. This project uses React components to operate dynamically. Information is sent to a local MySQL database through the Express.js server environment, using HTTP requests with the Fetch API.

## Preparations before downloading and running the project:
* Please have MySQL installed in your computer and set up a local database. 
* Please have Node.js installed. I am currently using Node.js version 12.16.3 for this project.

## To run the project, please follow these steps in sequence, carefully or the program will not work properly:
1. Download the .zip file from this repository. Extract the .zip file and you will see two folders: "stickynotes_frontend" and "stickynotes_backend".
1. In the "stickynotes_backend" folder, you will see a file called "createTable.js". Open the file and follow the steps to replace the code from lines 5-9.
1. In the same folder, you will see a file called "index.js". Open the file and replace the same code from lines 11-15.
1. Afterwards, on the command prompt/terminal, go to the path of the "stickynotes_backend" folder and run "npm i" to install its dependencies.
1. On the terminal in the same "stickynotes_backend" terminal, run "node createTable.js". Once you see "Table created" on the terminal, exit the program by holding the "Ctrl" + "c" keys (windows) or "Ctrl" + "z" (macOS).
1. On the same terminal directory, run the command "node index.js" to run the back-end server. Do not close this terminal window.
1. On a second terminal window, go to the "stickynotes_frontend" directory and run "npm i" to install its dependencies. You can ignore the "vulnerabilities" in the terminal
1. On the second terminal, run "npm start" to run the front-end application. Do not close this terminal window.
1. To close the program on the terminals, simply close both terminal windows.
