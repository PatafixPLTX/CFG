content.innerHTML = '<h1 class="text">Settings</h1><div class="slidecontainer text"><input type="range" min="1" max="100" value="50" class="slider" id="myRange"></div>';
contentCreation = document.createElement("link");
contentCreation.rel = "stylesheet";
contentCreation.type = "text/css";
contentCreation.href = "style/sliderStyle.css";
content.appendChild(contentCreation);