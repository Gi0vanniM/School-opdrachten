
// variables
var started = false;
var music = new Audio("Assets/Sound/magus.mp3");

var scene = 0;
var title = document.getElementById("title");
var desc = document.getElementById("description");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var gameButtons = document.getElementById("game-buttons");
var inventoryItem = document.getElementById("inventoryItem");
inventoryItem.alt = "Inventory";

var inventory = [];
var vehicleFueled = false;
var doneGroceries = false;
var did = false;

// var game.inventoryDisplayItems = [
//     { name: "clothes", location: "Assets/Images/clothes.png", id: "inv_clothes" },
//     { name: "phone", location: "Assets/Images/phone.png", id: "inv_phone" },
//     { name: "keys", location: "Assets/Images/keys.png", id: "inv_keys" },
//     { name: "wallet", location: "Assets/Images/wallet.png", id: "inv_wallet" },
//     { name: "gun", location: "Assets/Images/gun.png", id: "inv_gun" }
// ];

var display = document.createElement("div");
display.id = "display";
gameButtons.before(display);

var img = document.createElement("img");
img.src = "Assets/Images/press_start.jpg";
img.id = "imaaag"
document.getElementById("display").appendChild(img);

var inventoryDisplay = document.createElement("div");
inventoryDisplay.id = "invDisplay"
document.getElementById("game-container").appendChild(inventoryDisplay);
inventoryDisplay.innerHTML = "empty"

var currentScene = document.createElement("div");
currentScene.id = "currentScene";
document.body.appendChild(currentScene);
currentScene.innerHTML = "start_screen";

// game start up
music.play();

document.head += '<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">'
title.innerHTML = "Doing groceries at Qualbert Ceyn";
desc.innerHTML = "Welcome to <b>The Game</b>";
button1.innerHTML = "-"
button2.innerHTML = "START"
button3.innerHTML = "-"

button1.setAttribute("onClick", "music.play();");
button2.setAttribute("onClick", "start();");

// game scene functions
function start() {
    if (started == false) {
        started = true;
        music.pause();
        // alert("Starting...");

        button1.innerHTML = "A";
        button2.innerHTML = "B";
        button3.innerHTML = "C";

        playLevel("scene0_WakingUp0");
        // scene0_WakingUp0();
    }
}

function playLevel(lvl) {
    var Level = game.level[lvl];
    unloadAll();
    // img.src = game.level[lvl].img;
    console.log("starting level " + Level.currentScene);
    currentScene.innerHTML = Level.currentScene;
    scene++;

    if (Level.img != null) {
        img.src = Level.img;
    }

    createDesc(Level.desc[0], Level.desc[1], Level.desc[2], Level.desc[3], Level.desc[4]);

    if (Level.load != null) {
        for (var i = 0; i < Level.load.length; i++) {
            loadObject(Level.load[i]);
        }
    }
    button1.setAttribute("onClick", Level.button1);
    button2.setAttribute("onClick", Level.button2);
    button3.setAttribute("onClick", Level.button3);
}

//################################################
// FUNCTIONS

function createDesc(des, optionA, optionB, optionC, action) {
    desc.innerHTML = "";
    if (action == null) {
        action = "Actions:"
    }
    var text = des +
        "<br><br>" + action + "<br>" +
        "<ul id='actions'>" +
        "<b>A</b>: " + optionA + "<br>" +
        "<b>B</b>: " + optionB + "<br>" +
        "<b>C</b>: " + optionC + "</ul>";
    var i = 0;
    var broomstickhandle = 5;
    typeWriter();
    function typeWriter() {
        if (i >= des.length) {
            desc.innerHTML = text;
        }
        if (i < des.length) {
            desc.innerHTML += des.charAt(i);
            i++;
            setTimeout(typeWriter, broomstickhandle);
        }
    }
}

function pickUpItem(item) {
    // if (item == "clothes" || item == "phone"
    //     || item == "walletAndKeys" || item == "gun") {
    if (!inventory.includes(item)) {

        document.getElementById("img_" + item).style.visibility = "hidden";
        if (item == "walletAndKeys") {
            if (!inventory.includes("wallet")) {
                inventory.push("wallet");
                inventory.push("keys");
            }
        } else {
            inventory.push(item);
        }
        updateInventory();
    }
    if (inventory.includes("clothes") && inventory.includes("phone")
        && inventory.includes("keys") && inventory.includes("wallet")
        && scene == 1) {
        playLevel('scene0_WakingUp1');
    }
    // }
}

function loadObject(objectName) {

    // if (objectName == "clothes" || objectName == "phone" || objectName == "walletAndKeys" || objectName == "gun") {
    if (!inventory.includes(objectName)) {
        var imgObject = document.createElement("img");
        imgObject.src = "Assets/Images/" + objectName + ".png";
        imgObject.id = "img_" + objectName;
        imgObject.className = "img_object";
        document.getElementById("display").appendChild(imgObject);
        // }
    }
}

function unloadAll() {
    const elements = document.getElementsByClassName("img_object");

    while (elements.length > 0) elements[0].remove();
}

function updateInventory() {
    inventoryDisplay.innerHTML = "";
    var l = inventory.length;
    for (var i = 0; i < l; i++) {
        // inventoryItem.alt += inventory[i] + "<br>";
        // console.log(inventory[i]);
        let imgLoc = search(inventory[i], game.inventoryDisplayItems);
        var imag = document.createElement("img");
        imag.src = imgLoc.location
        imag.id = imgLoc.id;
        imag.title = inventory[i];
        imag.className = "invItem";
        inventoryDisplay.appendChild(imag);
    }
}

search = (key, inputArray) => {
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].name === key) {
            return inputArray[i];
        }
    }
}

Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}