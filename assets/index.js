/** Server static pages transmission part
 *   File is gitignored
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

fs.readdir(path.join(__dirname, 'js-base'), function (err, files) {
    if (err) return console.log("Error: " + err);
    files.forEach((file) => {
        app.get('/js-base/' + file, (req, res) => {
            res.sendFile(path.join(__dirname, 'js-base/' + file));
        });
    });
});

fs.readdir(path.join(__dirname, 'js-particular'), function (err, files) {
    if (err) return console.log("Error: " + err);
    files.forEach((file) => {
        app.get('/js-particular/' + file, (req, res) => {
            res.sendFile(path.join(__dirname, 'js-particular/' + file));
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

fs.readdir(path.join(__dirname, 'auth'), function (err, files) {
    if (err) return console.log("Error: " + err);
    files.forEach((file) => {
        app.get('/auth/' + file, (req, res) => {
            res.sendFile(path.join(__dirname, 'auth/' + file));
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
    if (err) return; //console.log(err);
    console.log("Connecté à la base de données MySQL!");
});

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

function toBase64(data) {
    let buff =  Buffer.from(data);
    let base64data = buff.toString('base64');
    return base64data;
}

wss.on('connection', wsArg => {
    ws = wsArg;
    ws.on('message', message => {
        //received json message that we convert to object
        let data = JSON.parse(message);
        if (data.type == "ping") {
            send("pong", data.data);
        }
        else if (data.type == "pawnGet"){
            if(!checkAccessPawn(data.data, data.client)) return send("pawnGet", {type:"Error",data:"Error: Access denied(pawn "+data.data+")"});
            fs.readdir(path.join(__dirname, 'pawns'), function (err, files) {
                files.forEach((file) => {
                    // Check if the name of the directory ends correctely using a RegExp(format of the directory name: a-b-data where data is the data we want to compare)
                    if (file.match(new RegExp("-" + data.data.id))) {
                        fs.readFile(path.join(__dirname, 'pawns/' + file + "/" + data.data.size + ".png"), 'base64', (err, result) => {
                            if (err) throw err;
                            console.log(toBase64(result));
                            fs.writeFile('test.txt', result, function(err) {
                                if(err) console.error("error: "+err);
                            });
            
                            send("pawnGet", { id: data.data.id, size: data.data.size, image: result});
                        });
                    }
                });
            });
        }
    });
});

function checkAccessPawn(pawn, client) {
    // not done yet
    return true;
}

function send(_type, _data) {
    let message = { type: _type, data: _data };
    let json = JSON.stringify(message);
    ws.send(json);
}