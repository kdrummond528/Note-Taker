const app = require('express').Router();
const uuid = require('uuid');
const fs = require("fs");

// get notes
app.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results)
    });

    // post notes
    app.post('/', (req, res) => {

    });

    // delete notes
    app.delete('/', (req, res) => {

    });

    // export 
    module.exports = app;