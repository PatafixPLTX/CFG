let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the icons class
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the icons class
    }
}

// profileImg Hover
function onHover() {
    $("#profileImg").attr('src', 'img/upArrow.jpg');
}

// manque une animation de la flèche qui arrive depuis le bas en smooth style flamby - attention -> l'image doit rester pleine pendant l'animation ;)

function offHover() {
    $("#profileImg").attr('src', 'img/profileImg.jpg');
}

function award() {
    send("Award5click", "Secret award received");
}

// cursor pointer hover
document.getElementById("log_out").style.cursor = "pointer";
document.getElementById("profile").style.cursor = "pointer";
//document.getElementById("logo").style.cursor = "pointer";