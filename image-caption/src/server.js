const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/', function (req, res) {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/image-caption.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
});

app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.listen(9003, function () {
    console.log('Application is running on http://localhost:9003');
});
