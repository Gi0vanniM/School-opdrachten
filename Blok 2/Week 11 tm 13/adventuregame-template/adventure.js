
var started = false;
var music = new Audio("Assets/Sound/magus.mp3");

var title = document.getElementById("title");
var desc = document.getElementById("description");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var gameButtons = document.getElementById("game-buttons");
var inventoryItem = document.getElementById("inventoryItem");
inventoryItem.alt = "Inventory\n";

var inventory = [];

var inventoryDisplayItems = [
    { name: "clothes", location: "Assets/Images/clothes.png", id: "inv_clothes" },
    { name: "phone", location: "Assets/Images/phone.png", id: "inv_phone" },
    { name: "keys", location: "Assets/Images/keys.png", id: "inv_keys" },
    { name: "wallet", location: "Assets/Images/wallet.png", id: "inv_wallet" }
]

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
        // alert("Starting...");

        button1.innerHTML = "A";
        button2.innerHTML = "B";
        button3.innerHTML = "C";

        scene0_WakingUp0();
    }
}

function scene0_WakingUp0() {
    img.src = "Assets/Images/bedroom.jpg"
    desc.innerHTML = "You wake up in your bedroom. " +
        "You see a note saying you need to go grocery shopping. " +
        "With it a list of what you need to buy.<br><br>" +
        "First you need to grab your stuff before you can go.<br><br>" +
        "<ul id='get_stuff'><b>A</b>: Clothes<br>" +
        "<b>B</b>: Keys and wallet<br>" +
        "<b>C</b>: Phone</ul>";

    // inventory.push("clothes");
    // inventory.remove("clothes")
    // imgClothes.style.visibility = "hidden";
    loadObject("clothes");
    loadObject("phone");
    loadObject("walletAndKeys");

    button1.setAttribute("onClick", "pickUpItem('clothes');");
    button2.setAttribute("onClick", "pickUpItem('phone');");
    button3.setAttribute("onClick", "pickUpItem('walletAndKeys');");

}

function pickUpItem(item) {
    if (item == "clothes" || item == "phone" || item == "walletAndKeys") {
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
    }
}

function loadObject(objectName) {

    if (objectName == "clothes" || objectName == "phone" || objectName == "walletAndKeys") {
        if (!inventory.includes(objectName)) {
            var imgObject = document.createElement("img");
            imgObject.src = "Assets/Images/" + objectName + ".png";
            imgObject.id = "img_" + objectName;
            document.getElementById("display").appendChild(imgObject);
        }
    }
    // if (objectName == "phone") {
    //     if (!inventory.includes("clothes")) {
    //         var imgPhone = document.createElement("img");
    //         imgPhone.src = "Assets/Images/phone.png";
    //         imgPhone.id = "img_phone";
    //         document.getElementById("display").appendChild(imgPhone);
    //     }
    // }
    // if (objectName == "walletAndKeys") {
    //     if (!inventory.includes("wallet") && !inventory.includes("keys")) {
    //         var imgWalletAndKeys = document.createElement("img");
    //         imgWalletAndKeys.src = "Assets/Images/walletAndKeys.png";
    //         imgWalletAndKeys.id = "img_walletandkeys";
    //         document.getElementById("display").appendChild(imgWalletAndKeys);
    //     }
    // }
}

function updateInventory() {
    inventoryDisplay.innerHTML = "";
    var l = inventory.length;
    for (var i = 0; i < l; i++) {
        // inventoryItem.alt += inventory[i] + "<br>";
        // console.log(inventory[i]);
        let imgLoc = search(inventory[i], inventoryDisplayItems);
        var imag = document.createElement("img");
        imag.src = imgLoc.location
        imag.id = imgLoc.id;
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