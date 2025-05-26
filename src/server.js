const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/index.html");
  fs.readFile(pathToHtmlFile, "utf-8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log("Application is running on port 3000");
});
