// dependencies
const express = require('express');
const app = require('express').Router();
const path = require('path');
// const router = require('express').Router();

// get route for notes
// const notes = require('./notes');

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// router.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// // Import our modular routers for /notes
// const notesRouter = require('./notes');

// app.get('/notes', notesRouter);

module.exports = app;