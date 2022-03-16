const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 333;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

fs.readdir(path.join(__dirname, 'img'), function (err, files) {
    if(err) return console.log("Error: "+err);
    files.forEach((file)=>{
        app.get('/img/'+file, (req, res) => {
            res.sendFile(path.join(__dirname, 'img/'+file));
        });
    });
});

fs.readdir(path.join(__dirname, 'js'), function (err, files) {
    if(err) return console.log("Error: "+err);
    files.forEach((file)=>{
        app.get('/js/'+file, (req, res) => {
            res.sendFile(path.join(__dirname, 'js/'+file));
        });
    });
});

fs.readdir(path.join(__dirname, 'page'), function (err, files) {
    if(err) return console.log("Error: "+err);
    files.forEach((file)=>{
        app.get('/page/'+file, (req, res) => {
            res.sendFile(path.join(__dirname, 'page/'+file));
        });
    });
});

fs.readdir(path.join(__dirname, 'style'), function (err, files) {
    if(err) return console.log("Error: "+err);
    files.forEach((file)=>{
        app.get('/style/'+file, (req, res) => {
            res.sendFile(path.join(__dirname, 'style/'+file));
        });
    });
});

app.listen(port, () => {
    console.log(`CFG app listening on port ${port}`)
});
