// The websocket file that handles all websocket communication

let clientId = null;
let currentGameId = null;

let url = 'ws://localhost:8080/';
let connection = new WebSocket(url);

connection.onopen = () => {
  console.log("server connection started succesfully");
  send("ping", "Connection test");
}

connection.onerror = (error) => {
  console.log(error);
}

connection.onmessage = (e) => {
  this.message = JSON.parse(e.data);
  console.log(this.message);
}

function send(_type, _data) {
    let message = {type: _type, data: _data, client: clientId, game: currentGameId};
    let json = JSON.stringify(message);
    connection.send(json);
    console.log(json);
    console.log(typeof json);
}
