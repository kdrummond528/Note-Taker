const notes = require('express').Router();
const uuid = require('uuid');
const fs = require("fs");

// get
router.get('/notes', (req, res) => {
    saveData
        .retrieveNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
})

// post
router.post('/', (req, res) => {
    saveData
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
})

// delete
router.delete('/', (req, res) => {

})

// export 
module.exports = router;