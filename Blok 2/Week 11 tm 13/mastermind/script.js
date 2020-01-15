
var attempts = 0;
var loc = 0;
var input = [];
// var answer = Array.from(words[0].toUpperCase());
var answer = [];
var selectedColor = null;

var gameContainer = document.getElementById("game-container");

// blue 0, red 1, green 2, orange 3, yellow 4, brown 5, black 6, white 7

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

start();

function start() {
    attempts = 0;
    generateColorCode();
}

function check(row) {
    var inputAnswer = [];
    for (var i = 0; i < 4; i++) {
        cell = document.getElementById(row + "." + i);
        inputAnswer.push(cell.style.backgroundColor);
    }
    if (inputAnswer.includes("")) {
        alert("Input is te klein");
    }
    console.log(inputAnswer);

    if (answer.toString() == inputAnswer.toString()) {
        alert("Je hebt de code geraden!");
    } else {
        var pinLoc = 0;
        var tempInputAnswer = [inputAnswer[0].toString(), inputAnswer[1].toString(), inputAnswer[2].toString(), inputAnswer[3].toString()];
        for (var i = 0; i < 4; i++) {
            if (tempInputAnswer[i].toString() == answer[i].toString()) {
                var pin = document.getElementById("pin." + row + "." + pinLoc);
                pin.style.backgroundColor = "red";
                tempInputAnswer[i] = "-";
                console.log(i + " is correct");
                pinLoc++;
                for (var o = 0; o < 4; o++) {
                    if (tempInputAnswer[o].toString() == answer[i]) {
                        tempInputAnswer[o] = "-";
                    }
                }
            }
        }
        for (var i = 0; i < 4; i++) {
            if (answer.includes(tempInputAnswer[i])) {
                var pin = document.getElementById("pin." + row + "." + pinLoc);
                pin.style.backgroundColor = "white";
                tempInputAnswer[i] = "-";
                pinLoc++;
            }
        }
        document.getElementById("row." + row).style.backgroundColor = "darkgray";
        document.getElementById("row." + (row + 1)).style.backgroundColor = "gray";
        document.getElementById("button." + row).style.visibility = "hidden";
        document.getElementById("button." + (row + 1)).style = "show";
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
    if (location.charAt(0) == attempts) {
        document.getElementById(location).style.backgroundColor = selectedColor;
    }

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

function generateColorCode() {
    answer = [];
    while (answer.length != 4) {
        var n = getRandom(0, 7);
        if (!answer.includes(n)) {
            answer.push(n);
        }
    }
    for (var i = 0; i < answer.length; i++) {
        answer[i] = numToColor(answer[i]);
    }
}
// blue 0, red 1, green 2, orange 3, yellow 4, brown 5, black 6, white 7
function numToColor(num) {
    switch (num) {
        case 0:
            return "blue";
        case 1:
            return "red";
        case 2:
            return "green";
        case 3:
            return "orange"
        case 4:
            return "yellow";
        case 5:
            return "brown";
        case 6:
            return "black";
        case 7:
            return "white";
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}