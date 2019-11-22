
var started = false;
var music = new Audio("Assets/Sound/magus.mp3");

var title = document.getElementById("title");
var desc = document.getElementById("description");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var gameButtons = document.getElementById("game-buttons");

var img = document.createElement("img");
img.src = "Assets/Images/press_start.jpg";
img.id = "imaaag"
// document.getElementById("game-container").appendChild(img);
gameButtons.before(img);

music.play();

document.head += '<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">'
title.innerHTML = "Doing groceries at Qualbert Ceyn";
desc.innerHTML = "Welcome to <b>The Game</b>";
button1.innerHTML = "-"
button2.innerHTML = "START"
button3.innerHTML = "-"

button2.setAttribute("onClick", "start();");

function start() {
    if (started == false) {
        started = true;
        music.pause();
        alert("Starting...");

        button1.innerHTML = "A";
        button2.innerHTML = "B";
        button3.innerHTML = "C";

    }
}