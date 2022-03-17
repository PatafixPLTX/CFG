function calcCanvasSize(windowWidth, windowHeight){
    if(windowHeight>windowWidth) this.size = windowWidth-250;
    else                         this.size = windowHeight;
    this.size *= preferredPercentageSize;
    if(this.size>preferenceMaxCanvasSize) this.size = preferenceMaxCanvasSize;
    if(this.size<preferenceMinCanvasSize) this.size = preferenceMinCanvasSize;
    this.size -= this.size%10;
    return this.size;
};

$(document).ready(function () {
    canvas = document.createElement('canvas');
    canvas.width = calcCanvasSize($(window).width()-250, $(window).height());    
    canvas.height = canvas.width;
    canvas.style = "z-index: 10;background: transparent;padding: 0;margin: auto;display: block;position: absolute;left:78px;right:0px;bottom:0px;top: 0px;border: none;transition: all 0.5s ease;";
    document.body.appendChild(canvas);
    halfWidthCanvas = canvas.width / 2;
    halfHeigthCanvas = canvas.height / 2;

    ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.fillColor = "rgb(255,0,0);";
    ctx.rect(25,25,125,365);
    ctx.fill();
});