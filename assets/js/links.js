let play = document.getElementById("play");
let home = document.getElementById("home");
let news = document.getElementById("news");
let shop = document.getElementById("shop");
let rank = document.getElementById("rank");

let settings = document.getElementById("settings");
let profile = document.getElementById("profile");

let content = document.getElementById("content");

let currentPage = 1;

let tableau = [play, home, news, shop, rank, settings, profile];
let funcs = [play_func, home_func, news_func, shop_func, rank_func, settings_func, profile_func];

let play_func = ()=>{
    if(currentPage == 0) {if(fois>5)award();fois++;return;}
    fois = 0;
    currentPage = 0;

    content.innerHTML = " ";
    let newContent = document.createElement("script");
    newContent.src = "page/play.js";
    content.appendChild(newContent);
}
let home_func = ()=>{
    if(currentPage == 1) {if(fois>5)award();fois++;return;}
    fois = 0;
    currentPage = 1;

    content.innerHTML = " ";
    let newContent = document.createElement("script");
    newContent.src = "page/home.js";
    content.appendChild(newContent);
}
let news_func = ()=>{
    if(currentPage == 2) {if(fois>5)award();fois++;return;}
    fois = 0;
    currentPage = 2;

    content.innerHTML = " ";
    let newContent = document.createElement("script");
    newContent.src = "page/news.js";
    content.appendChild(newContent);
}
let shop_func = ()=>{
    if(currentPage == 3) {if(fois>5)award();fois++;return;}
    fois = 0;
    currentPage = 3;

    content.innerHTML = " ";
    let newContent = document.createElement("script");
    newContent.src = "page/shop.js";
    content.appendChild(newContent);
}
let rank_func = ()=>{
    if(currentPage == 4) {if(fois>5)award();fois++;return;}
    fois = 0;
    currentPage = 4;

    content.innerHTML = " ";
    let newContent = document.createElement("script");
    newContent.src = "page/rank.js";
    content.appendChild(newContent);
}
let settings_func = ()=>{
    if(currentPage == 5) {if(fois>5)award();fois++;return;}
    fois = 0;
    currentPage = 5;

    content.innerHTML = " ";
    let newContent = document.createElement("script");
    newContent.src = "page/settings.js";
    content.appendChild(newContent);
}
let profile_func = ()=>{
    if(currentPage == 6) {if(fois>5)award();fois++;return;}
    fois = 0;
    currentPage = 6;

    content.innerHTML = " ";
    let newContent = document.createElement("script");
    newContent.src = "page/profile.js";
    content.appendChild(newContent);
}

$(document).ready(function () {
    for(let i=0; i<tableau.length; i++){
        tableau[i].addEventListener("click",funcs[i]);
    }
});