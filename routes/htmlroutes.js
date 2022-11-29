const express = require('express');

// get route for notes
const notes = require('./notes');

// express
const app = express();

app.use('/notes', notes);

// export
module.exports = app;