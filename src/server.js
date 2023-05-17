const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use('/static', express.static(path.resolve(__dirname, '../dist')));
app.set('views', './dist/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('main', { title: 'Hello world', description: 'Hello world description' });
});

app.listen(3000, function () {
    console.log('Application is running on http://localhost:3000/');
});