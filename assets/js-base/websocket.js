// The websocket file that handles all websocket communication

let clientId = null;
let currentGameId = null;
let eventListeners = {
    "pong": (data) => {
        console.log("Ping: " + Math.round((new Date() - pingTime)/2) + "ms");
    }
};

let url = 'ws://localhost:8080/';
let connection = new WebSocket(url);
let pingTime = null;

connection.onopen = () => {
  console.log("Server connection established");
  send("ping", "Connection test");
  pingTime = new Date();
}

connection.onerror = (error) => {
  console.log(error);
}

connection.onmessage = (e) => {
  this.message = JSON.parse(e.data);
  try{
      eventListeners[this.message.type](this.message.data);
    } catch(e) {
        console.log("No function associated with this message type");
        console.log("Error: " + e);
    }
}

function send(_type, _data) {
    let message = {type: _type, data: _data, client: clientId, game: currentGameId};
    let json = JSON.stringify(message);
    connection.send(json);
}
