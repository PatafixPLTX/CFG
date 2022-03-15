content.innerHTML = '<h1>Settings</h1><div class="slidecontainer"><input type="range" min="1" max="100" value="50" class="slider" id="myRange"></div>';
contentCreation = document.createElement("style");
contentCreation.src = "style/sliderbarStyle.css";
content.appendChild(contentCreation);