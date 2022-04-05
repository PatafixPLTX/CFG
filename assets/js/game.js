// Websocket data
// send data to server
url = 'ws://localhost:8080/';
connection = new WebSocket(url);

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

canvasState = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function drawYourCircle(posX, posY) {
    // draw image from img/piont_blue.png
    ctx.drawImage(yourPion, posX * oneOnTenWidth + 2, posY * oneOnTenHeigth + 2, oneOnTenWidth - 4, oneOnTenHeigth - 4);
}

function drawEnemyCircle(posX, posY) {
     // draw image from img/piont_red.png
     ctx.drawImage(enemyPion, posX * oneOnTenWidth + 2, posY * oneOnTenHeigth + 2, oneOnTenWidth - 4, oneOnTenHeigth - 4);
}

function calcCanvasSize(windowWidth, windowHeight) {
    if (windowHeight > windowWidth) this.size = windowWidth - 250;
    else this.size = windowHeight;
    if (this.size > preferenceMaxCanvasSize) this.size = preferenceMaxCanvasSize;
    if (this.size < preferenceMinCanvasSize) this.size = preferenceMinCanvasSize;
    this.size *= preferredPercentageSize;
    this.size -= this.size % 10;
    return this.size;
};

$(document).ready(function () {
    canvas = document.createElement('canvas');
    canvas.width = calcCanvasSize($(window).width() - 250, $(window).height());
    canvas.height = canvas.width;
    canvas.style.display = "none";
    contentCreation = document.createElement("link");
    contentCreation.rel = "stylesheet";
    contentCreation.type = "text/css";
    contentCreation.href = "style/canvas.css";
    content.appendChild(contentCreation);
    document.body.appendChild(canvas);
    contentCreation = document.createElement("img");
    contentCreation.src = "img/piont_blue.png";
    contentCreation.id = "yourPion";
    contentCreation.style.display = "none";
    content.appendChild(contentCreation);
    yourPion = document.getElementById("yourPion");
    contentCreation = document.createElement("img");
    contentCreation.src = "img/piont_red.png";
    contentCreation.id = "enemyPion";
    contentCreation.style.display = "none";
    content.appendChild(contentCreation);
    enemyPion = document.getElementById("enemyPion");
    halfWidthCanvas = canvas.width / 2;
    halfHeigthCanvas = canvas.height / 2;

    setTimeout(begin, 250);
});

function begin() {
    canvas.style.display = "block";
    canvas.addEventListener("mousemove", mouseMove);
    canvas.addEventListener("mouseout", mouseOut);

    ctx = canvas.getContext("2d");

    drawGrille();

    drawPions();
}

function drawPions() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            eraseCase(i, j);
            switch (canvasState[i][j]) {
                case 1:
                    drawYourCircle(i, j);
                    break;
                case 2:
                    drawEnemyCircle(i, j);
                    break;
            }
        }
    }
}

function eraseCase(posX, posY) {
    ctx.clearRect(posX * oneOnTenWidth + 2, posY * oneOnTenHeigth + 2, oneOnTenWidth - 4, oneOnTenHeigth - 4);
}

function mouseMove(event) {
    rect = canvas.getBoundingClientRect();
    if (yourTurn) {
        let x = event.x - rect.left - 5; let y = event.y - rect.top - 5;
        if (x != currentMouseOver[0] || y != currentMouseOver[1]) {
            currentMouseOver = [x, y];
            currentCase = [Math.round(currentMouseOver[0] / oneOnTenWidth + 0.5), Math.round(currentMouseOver[1] / oneOnTenHeigth + 0.5)];
            if (currentCase[0] < 1) currentCase[0] = 1;
            if (currentCase[1] < 1) currentCase[1] = 1;
            if (currentCase[0] > 10) currentCase[0] = 10;
            if (currentCase[1] > 10) currentCase[1] = 10;
            if (currentCase[0] != lastCase[0] || currentCase[1] != lastCase[1]) {
                console.log(`current2:${currentCase[0]}`);
                console.log(`last2:${lastCase[0]}`);
                currentCaseCopy[0] = currentCase[0];
                currentCaseCopy[1] = currentCase[1];
                eraseCase(lastCase[0] - 1, lastCase[1] - 1);
                lastCase[0] = currentCase[0];
                lastCase[1] = currentCase[1];
                let aimVar = aim();
                if (aimVar == 1) {
                    console.log("move circle");
                    drawYourCircle(currentCaseCopy[0] - 1, currentCaseCopy[1] - 1);
                    lastCaseCopy[0] = currentCaseCopy[0];
                    lastCaseCopy[1] = currentCaseCopy[1];
                }else{
                    console.error(("Pion cannot be placed here"))
                }
            }
        }
    } else {
        currentMouseOver = [-100, -100];
    }
}

function mouseOut() {
    eraseCase(lastCase[0] - 1, lastCase[1] - 1);
    lastCase = [-1, -1];
}

function aim()

function drawGrille() {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgb(75,75,75);";
    oneOnTenHeigth = canvas.height / 10;
    oneOnTenWidth = canvas.width / 10;
    for (let i = 1; i < 10; i++) {
        ctx.moveTo(i * oneOnTenWidth, 0);
        ctx.lineTo(i * oneOnTenWidth, canvas.height);
    }
    for (let i = 1; i < 10; i++) {
        ctx.moveTo(0, i * oneOnTenHeigth);
        ctx.lineTo(canvas.width, i * oneOnTenHeigth);
    }
    ctx.stroke();
    _CroixCentre();
}

function _CroixCentre() {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.moveTo(0, halfWidthCanvas);
    ctx.lineTo(canvas.width, halfHeigthCanvas);
    ctx.moveTo(halfHeigthCanvas, 0);
    ctx.lineTo(halfWidthCanvas, canvas.height);
    ctx.stroke();
}