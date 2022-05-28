content.innerHTML = `
<h1 class="text">Settings</h1>
<div class="slidecontainer">
    <input type="range" min="20" max="200" value="${preferredPercentageSize*100}" class="slider" id="slider" oninput="canvasSize(this)">
</div>
<div class="slidecontainer">
    <input type="color" onchange="canvasColor(this)" value=${preferredColor}>
</div>
`;
contentCreation = document.createElement("link");
contentCreation.rel = "stylesheet";
contentCreation.type = "text/css";
contentCreation.href = "style/sliderStyle.css";
contentCreation = document.createElement("script");
contentCreation.src = "js-particular/settings.js";
content.appendChild(contentCreation);