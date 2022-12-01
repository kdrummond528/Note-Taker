const app = require('express').Router();
const uuid = require('uuid');
const fs = require("fs");

// get notes
app.get('/notes', (req, res) => {
    readFromFile('./db/note.json').then((data) => res.json(JSON.parse(data)));

});

// post notes
app.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            // post_id: uuidv4(),
        };

        readAndAppend(newNote, './db/note.json');
        res.json(`Note added successfully.`);
    } else {
        res.error('Error in adding note.');
    }
});

// delete notes
app.delete('/', (req, res) => {

});

// export 
module.exports = app;