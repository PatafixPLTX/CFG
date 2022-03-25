/** Server static pages transmission part
 * 
 */

const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

fs.readdir(path.join(__dirname, 'img'), function (err, files) {
    if (err) return console.log("Error: " + err);
    files.forEach((file) => {
        app.get('/img/' + file, (req, res) => {
            res.sendFile(path.join(__dirname, 'img/' + file));
        });
    });
});

fs.readdir(path.join(__dirname, 'js'), function (err, files) {
    if (err) return console.log("Error: " + err);
    files.forEach((file) => {
        app.get('/js/' + file, (req, res) => {
            res.sendFile(path.join(__dirname, 'js/' + file));
        });
    });
});

fs.readdir(path.join(__dirname, 'page'), function (err, files) {
    if (err) return console.log("Error: " + err);
    files.forEach((file) => {
        app.get('/page/' + file, (req, res) => {
            res.sendFile(path.join(__dirname, 'page/' + file));
        });
    });
});

fs.readdir(path.join(__dirname, 'style'), function (err, files) {
    if (err) return console.log("Error: " + err);
    files.forEach((file) => {
        app.get('/style/' + file, (req, res) => {
            res.sendFile(path.join(__dirname, 'style/' + file));
        });
    });
});

app.listen(port, () => {
    console.log(`CFG app listening on port ${port}`);
});

/** Game data handling part
 * 
 */
const mySql = require("mysql");

const db = mySql.createConnection({

    host: "localhost",

    user: "root",

    password: ""

});

db.connect(function (err) {
    if (err) console.log(err);
    console.log("Connecté à la base de données MySQL!");
});

const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8080 })


wss.on('connection', ws => {
    console.log("connection ready");
    ws.on('message', message => {
        console.log("message received");
    });
    ws.send('ho!');
});