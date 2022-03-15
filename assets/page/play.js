content.innerHTML = "<h1>The game</h1>";
canvasScript = document.createElement("script");
canvasScript.src = "js/game.js";
content.appendChild(canvasScript);
contentCreation = document.createElement("div");
contentCreation.style.width = "100%";
content.appendChild(contentCreation);
contentCreation2 = document.createElement("input");
contentCreation2.type = "range";
contentCreation2.min = "1";
contentCreation2.max = "100";
/*contentCreation2.style.width = "90%";
contentCreation2.style.height = "15px";*/
contentCreation2.style = "width: 80%;height: 15px;border-radius: 5px;background: #d3d3d3;outline: none;opacity: 0.7;";
contentCreation.appendChild(contentCreation2);