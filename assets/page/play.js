content.innerHTML = "<h1>The game</h1>";
try{
    let canvasScript = null;
}catch(error){
    
}
canvasScript = document.createElement("script");
canvasScript.src = "js/game.js";
content.appendChild(canvasScript);