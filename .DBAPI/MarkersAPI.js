// imports
const sqlite3 = require('sqlite3');
var express = require('express');


// instantiate database
const path = '/Users/phillipeismark/Documents/React/MeeWMap2/.DBAPI/MarkersDatabase.sqlite'
var db = new sqlite3.Database(path);

// port
const PORT = 8088;

// create express application
var app = express();

// setup express to use json
app.use(express.json());

// index
app.get('/', (req, res) => {
    console.log('Received request on "/"')
    res.status(200).send({'Response': 'Welcome to MarkersAPI'});
});

// create marker from posted values
app.post('/create-marker', (req, res) => {  
    let data = req.body;
    let query = "INSERT INTO Markers(Title, Description, Latitude, Longitude) VALUES(?,?,?,?)";

    db.run(query, [data.Title, data.Description, data.Latitude, data.Longitude], (err) => {
        if (err) {
            console.log('Error creating marker: ', err);
            return res.status(500).send({'Response':'Error creating marker'});
        } else {
            console.log('Created marker');
            return res.status(200).send({'Response':'Success creating marker'});
        };
    });
});

// delete the row with posted Id
app.delete('/delete-marker', (req, res) => {
    let data = req.body;
    let query = 'DELETE FROM Markers WHERE id = ?';
    db.run(query, [data.Id], (err) => {
        if (err) {
            console.log('Error on delete: ', err);
            return res.status(500).send({'{Response':'Error deleting marker'});
        } else {
            console.log('Deleted marker');
            res.status(200).json({"Response":"Sucess deleting marker"});
        }
    })
});

// get all markers
app.get('/get-all-markers', (req, res) => {
    let query = 'SELECT * FROM Markers'
    console.log('request on get all markers')
    db.all(query, (err, rows) => {
        if (err) {
            console.log(err);
            res.status(500).send({'Response':'Database error'});
        } else {
            console.log('sending all rows');
            return res.json({"Message":"Success", "data":rows});
        }
    })
});

// creating dummy markers for testing.
// stays within lat and long to show where map starts
// lat between ~ 55.70488473998441 and  ~55.640611930143166
// long between ~ 12.505898350247065 and ~12.559841940189472
app.post('/create-dummy-marker', (req, res) => {
    console.log('Received request to insert dummy marker');

    let query = 'INSERT INTO Markers(Title, Description, Latitude, Longitude) VALUES(?,?,?,?)';
    let title = 'DummyTitle' + Math.random(1,1000).toString();
    let desc = 'created by MarkersAPI';
    let lat = generateRandomCoords(55.70488473998441, 55.640611930143166);
    let long = generateRandomCoords(12.505898350247065, 12.559841940189472);

    db.run(query,[title, desc, lat, long], (err) => {
        if (err) {
            console.log(err);
            res.status(500).send({'Response': 'Database error'});
        } else {
            res.status(200).send({'Response': 'Created dummy'});
        }
    });
});

// start sever on port
app.listen(PORT, (err) => {
    if (err) {
        console.log('There was an error starting the server: ', err);
        return;
    } else {
        console.log('Listening on port: ', PORT);
    }
});

// generate random numbers to create random markers. 
function generateRandomCoords (min, max) {
    return Math.random() * (max - min) + min
}