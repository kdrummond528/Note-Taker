const express = require('express');
const path = require('path');
const fs = require("fs");

// var for express
const app = express();

// local host
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

// routes
const api = require('./routes/apiroutes');
const html = require('./routes/htmlroutes');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', html)

app.listen(PORT, () => {
    console.log("Listening on PORT", PORT)
});