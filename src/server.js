const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/hello-world/', function (req, res) {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/hello-world.html');
    res.sendFile(pathToHtmlFile);
});

app.get('/kiwi/', function (req, res) {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/kiwi.html');
    res.sendFile(pathToHtmlFile);
});

app.get('/all/', function (req, res) {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/all.html');
    res.sendFile(pathToHtmlFile);
});

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.listen(3000, function () {
    console.log('Application is running on http://localhost:3000');
});

