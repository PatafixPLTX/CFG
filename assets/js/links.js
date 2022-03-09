// BEGIN OF GAME VARIABLES
let ctx = null;
let canvasState = null;

let currentMouseOver = [-100, -100];
let currentCase = [-1, -1];
let lastCase = [1, 1];
let yourTurn = true;

let oneOnTenHeigth = null;
let oneOnTenWidth = null;
let halfWidthCanvas = null;
let halfHeigthCanvas = null;
let rect = null;
// END OF GAME VARIABLES
let play = document.getElementById("play");
let home = document.getElementById("home");
let news = document.getElementById("news");
let shop = document.getElementById("shop");
let rank = document.getElementById("rank");

let settings = document.getElementById("settings");
let profile = document.getElementById("profile");

let content = document.getElementById("content");

let canvasScript = null;
let canvas = null;

let currentPage = 1;

let fois = 0;

let play_func = () => {
    if (currentPage == 0) { if (fois > 5) award(); fois++; return; }
    fois = 0;
    currentPage = 0;

    content.innerHTML = " ";
    let newContent = document.createElement("script");
    newContent.src = "page/play.js";
    content.appendChild(newContent);
}
let home_func = () => {
    removeCanvas();
    if (currentPage == 1) { if (fois > 5) award(); fois++; return; }
    fois = 0;
    currentPage = 1;

    content.innerHTML = " ";
    let newContent = document.createElement("script");
    newContent.src = "page/home.js";
    content.appendChild(newContent);
}
let news_func = () => {
    removeCanvas();
    if (currentPage == 2) { if (fois > 5) award(); fois++; return; }
    fois = 0;
    currentPage = 2;

    content.innerHTML = " ";
    let newContent = document.createElement("script");
    newContent.src = "page/news.js";
    content.appendChild(newContent);
}
let shop_func = () => {
    removeCanvas();
    if (currentPage == 3) { if (fois > 5) award(); fois++; return; }
    fois = 0;
    currentPage = 3;

    content.innerHTML = " ";
    let newContent = document.createElement("script");
    newContent.src = "page/shop.js";
    content.appendChild(newContent);
}
let rank_func = () => {
    removeCanvas();
    if (currentPage == 4) { if (fois > 5) award(); fois++; return; }
    fois = 0;
    currentPage = 4;

    content.innerHTML = " ";
    let newContent = document.createElement("script");
    newContent.src = "page/rank.js";
    content.appendChild(newContent);
}
let settings_func = () => {
    removeCanvas();
    if (currentPage == 5) { if (fois > 5) award(); fois++; return; }
    fois = 0;
    currentPage = 5;

    content.innerHTML = " ";
    let newContent = document.createElement("script");
    newContent.src = "page/settings.js";
    content.appendChild(newContent);
}
let profile_func = () => {
    removeCanvas();
    if (currentPage == 6) { if (fois > 5) award(); fois++; return; }
    fois = 0;
    currentPage = 6;

    content.innerHTML = " ";
    let newContent = document.createElement("script");
    newContent.src = "page/profile.js";
    content.appendChild(newContent);
}

let removeCanvas = ()=>{
    try{
        canvas.parentNode.removeChild(canvas);
    }catch(error){
        console.log("canvas still not defined yet");
    }
}

let tableau = [play, home, news, shop, rank, settings, profile];
let funcs = [play_func, home_func, news_func, shop_func, rank_func, settings_func, profile_func];

$(document).ready(function () {
    profile_func();
    for (let i = 0; i < tableau.length; i++) {
        tableau[i].addEventListener("click", funcs[i]);
    }
});