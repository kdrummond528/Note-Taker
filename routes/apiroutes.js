const app = require('express').Router();
// const notes = require('express').Router();
const uuid = require('uuid');
const fs = require("fs");

// get
app.get('/notes', (req, res) => {
    saveData
        .retrieveNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
})

// post
app.post('/', (req, res) => {
    saveData
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
})

// delete
app.delete('/', (req, res) => {

})

// export 
module.exports = app;