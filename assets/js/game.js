let canvas = null;
let ctx = null;
let canvasState = [
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

let currentMouseOver = [-100, -100];
let currentCase = [-1, -1];
let lastCase = [1, 1];
let yourTurn = true;

let oneOnTenHeigth = null;
let oneOnTenWidth = null;
let halfWidthCanvas = null;
let halfHeigthCanvas = null;
let rect = null;

function drawYourCircle(posX, posY) {
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(posX * oneOnTenWidth + oneOnTenWidth / 2, posY * oneOnTenHeigth + oneOnTenHeigth / 2, oneOnTenHeigth / 2 - 4, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(posX*oneOnTenWidth+4, posY * oneOnTenHeigth + oneOnTenHeigth / 2);
    ctx.lineTo(posX * oneOnTenWidth + oneOnTenWidth-4, posY * oneOnTenHeigth + oneOnTenHeigth / 2);
    ctx.stroke();
}

function drawEnemyCircle(posX, posY) {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(posX * oneOnTenWidth + oneOnTenWidth / 2, posY * oneOnTenHeigth + oneOnTenHeigth / 2, oneOnTenHeigth / 2 - 4, 0, 2 * Math.PI, false);
    ctx.fill();
}

$(document).ready(function () {
    canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 400;
    canvas.style = "z-index: 10;background: rgb(50,50,175);padding: 0;margin: auto;display: block;position: absolute;left:78px;right:0px;bottom:0px;top: 0px;border: 5px black solid;transition: all 0.5s ease;";
    document.body.appendChild(canvas);
    halfWidthCanvas = canvas.width / 2;
    halfHeigthCanvas = canvas.height / 2;

    canvas.addEventListener("mousemove", mouseMove);

    ctx = canvas.getContext("2d");

    drawGrille();

    drawPions();
});

function drawPions() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            ctx.clearRect(i * oneOnTenWidth + 2, j * oneOnTenHeigth + 2, oneOnTenWidth - 4, oneOnTenHeigth - 4);
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
            if (currentCase != lastCase) {
                canvasState[lastCase[0] - 1][lastCase[1] - 1] = 0;
                canvasState[currentCase[0] - 1][currentCase[1] - 1] = 1;
                drawPions();
                lastCase[0] = currentCase[0];
                lastCase[1] = currentCase[1];
            }
        }
    } else {
        currentMouseOver = [-100, -100];
    }
}

function aim() {

}

function determineNextCase() {

}

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