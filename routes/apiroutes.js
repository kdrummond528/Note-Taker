const app = require('express').Router();


// get notes
app.get('/notes', (req, res) => {
    saveData
        .retrieveNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

// post notes
app.post('/', (req, res) => {
    saveData
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

// delete notes
app.delete('/', (req, res) => {
    saveData
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});

// export 
module.exports = app;