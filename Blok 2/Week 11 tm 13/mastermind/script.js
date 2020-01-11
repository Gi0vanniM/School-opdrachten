
var attempts = 0;
var loc = 0;
var input = [];
// var answer = Array.from(words[0].toUpperCase());
var answer = [];
var selectedColor = null;

var gameContainer = document.getElementById("game-container");

// rood, blauw, groen, orangje, geel, bruin, zwart, wit

// CREATE DIVS
for (var i = 11; i >= 0; i--) {
    // ROW DIV GRID
    var row = document.createElement("div");
    row.id = "row." + i;
    row.className = "row";
    document.getElementById("attempts").appendChild(row)
    for (var e = 0; e < 4; e++) {
        // CELLS
        var cell = document.createElement("button");
        var cellID = i.toString() + "." + e.toString();
        cell.id = cellID;
        cell.className = "node";
        cell.setAttribute("onclick", "inputColor('" + cellID + "');");
        document.getElementById("row." + i).appendChild(cell);
    }
    // PIN DIV
    var pins = document.createElement("div");
    pins.id = "pins." + i;
    pins.className = "pins";
    document.getElementById("row." + i).appendChild(pins);
    for (var e = 0; e < 4; e++) {
        // PINS
        var pin = document.createElement("div");
        pin.id = "pin." + i + "." + e;
        pin.className = "pin";
        document.getElementById("pins." + i).appendChild(pin);
    }
    var checkButton = document.createElement("button");
    checkButton.id = "button." + i;
    checkButton.className = "checkButton";
    checkButton.style.visibility = "hidden";
    checkButton.innerHTML = "CHECK";
    checkButton.setAttribute("onclick", "check(" + i + ")");
    document.getElementById("row." + i).appendChild(checkButton);
}
document.getElementById("row.0").style.backgroundColor = "gray";
document.getElementById("button.0").style = "show";

function start() {
    attempts = 0;

}

function check(row) {


    if (input.toString() == answer.toString()) {
        alert("Wow je hebt het geraden!");
    }

    // check answer

    putInColors(input);
    if (attempts == 11) {
        alert("Helaas je hebt de code niet geraden.")
    }
    attempts++;

}

function selectColor(col) {
    selectedColor = col;
    console.log("selected color: " + col);
    // document.body.style.cursor = "crosshair";
    document.body.style.cursor = `cursor: url('data:image/svg+xml;utf8, <svg fill="` + col + `" height="32px" width="32px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <g> <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z"/> </g> </g> </svg>') 16 16, auto`;
}

function inputColor(location) {
    console.log(location.toString());
    document.getElementById(location).style.backgroundColor = selectedColor;

    // loc++;
    //
    // if (loc == 4) {
    //     // next row
    //     loc = 0;
    //     if (attempts == 11) {
    //         // fail
    //         attempts = 0;
    //     }
    //     else {
    //         attempts++;
    //     }
    // }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}