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
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(posX * oneOnTenWidth + oneOnTenWidth / 2, posY * oneOnTenHeigth + oneOnTenHeigth / 2, oneOnTenHeigth / 2 - 4, 0, 2 * Math.PI, false);
    ctx.fill();
}

function drawEnemyCircle(posX, posY) {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(posX * oneOnTenWidth + oneOnTenWidth / 2, posY * oneOnTenHeigth + oneOnTenHeigth / 2, oneOnTenHeigth / 2 - 4, 0, 2 * Math.PI, false);
    ctx.fill();
}

function calcCanvasSize(windowWidth, windowHeight) {
    if (windowHeight > windowWidth) this.size = windowWidth - 250;
    else this.size = windowHeight;
    this.size *= preferredPercentageSize;
    if (this.size > preferenceMaxCanvasSize) this.size = preferenceMaxCanvasSize;
    if (this.size < preferenceMinCanvasSize) this.size = preferenceMinCanvasSize;
    this.size -= this.size % 10;
    return this.size;
};

$(document).ready(function () {
    canvas = document.createElement('canvas');
    canvas.width = calcCanvasSize($(window).width() - 250, $(window).height());
    canvas.height = canvas.width;
    contentCreation = document.createElement("link");
    contentCreation.rel = "stylesheet";
    contentCreation.type = "text/css";
    contentCreation.href = "style/canvas.css";
    content.appendChild(contentCreation);
    document.body.appendChild(canvas);
    halfWidthCanvas = canvas.width / 2;
    halfHeigthCanvas = canvas.height / 2;

    canvas.addEventListener("mousemove", mouseMove);
    canvas.addEventListener("mouseout", mouseOut);

    ctx = canvas.getContext("2d");

    drawGrille();

    drawPions();
});

function drawPions() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            eraseCase(i,j);
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

function eraseCase(posX,posY){
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
            if (currentCase != lastCase) {
                aim();
                eraseCase(lastCase[0]-1,lastCase[1]-1);
                drawYourCircle(currentCase[0]-1, currentCase[1]-1);
                lastCase[0] = currentCase[0];
                lastCase[1] = currentCase[1];
            }
        }
    } else {
        currentMouseOver = [-100, -100];
    }
}

function mouseOut(){
    eraseCase(lastCase[0]-1, lastCase[1]-1);
    lastCase = [-1,-1];
}

function aim() {
    if(canvasState[currentCase[0], currentCase[1]]){
        determineNextCase(1);
        aim();
    }
}

function determineNextCase(direction) {
    if(direction==1){

    }
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