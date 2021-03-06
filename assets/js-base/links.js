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

let currentPage = 0;

let fois = 0;

class Page{
	constructor(name, files, uid, destroyFunction){
		this.name = name;
		this.script = files;
		this.uid = uid;
		if(typeof destroyFunction === "function"){
			this.destroy = destroyFunction;
		}else{
			this.destroy = function(){
				content.innerHTML = " ";
			};
		}

	}
	create(lastPage){
		if(lastPage == undefined) content.innerHTML="";
		else{ 
			if(this.uid == lastPage.uid) return false;
			lastPage.destroy();
		}
		
		let newContent = document.createElement("script");
		newContent.src = `page/${this.script}`;
		content.appendChild(newContent);
	}
}

let test = new Page("test", "settings.js", 0);
test.create({destroy: function(){content.innerHTML=""}});


let scriptReady = ()=>{};

let play_func = () => {
	if (currentPage == 0) { if (fois > 5) award(); fois++; return; }
	fois = 0;
	currentPage = 0;

	content.innerHTML = " ";
	let newContent = document.createElement("script");
	newContent.src = "page/play.js";
	send("pawnGet", { id: 0b01, size: '50px' , player: 0});
	send("pawnGet", { id: 0b10, size: '50px' , player: 1});
	pawn = [];
	eventListeners["pawnGet"] = (data) => {
		// create image element and give it the image data url in base 64(data.image)
		let image = document.createElement("img");
		image.src = "data:image/png;base64,"+data.image;
		image.style = "visibility: hidden;";
		document.body.appendChild(image);
		image.onload = () => {
			if(data.player){
				return enemyPion = image;
			}
			return yourPion = image;
		};
	}
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

let removeCanvas = () => {
	try {
		canvas.parentNode.removeChild(canvas);
	} catch (error) { }
}

let tableau = [play, home, news, shop, rank, settings, profile];
let funcs = [play_func, home_func, news_func, shop_func, rank_func, settings_func, profile_func];

$(document).ready(function () {
	home_func();
	for (let i = 0; i < tableau.length; i++) {
		tableau[i].addEventListener("click", funcs[i]);
	}
});