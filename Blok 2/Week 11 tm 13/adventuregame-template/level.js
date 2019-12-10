

var game = {
    level: {
        scene0_WakingUp0: {
            currentScene: "scene0_WakingUp0",
            img: "Assets/Images/bedroom.jpg",
            desc: ["You wake up in your bedroom. " +
                "You see a note saying you need to go grocery shopping. " +
                "With it a list of what you need to buy.",
                "Clothes",
                "Keys and wallet",
                "Phone",
                "First you need to grab your stuff before you can go."],
            load: ["clothes", "phone", "walletAndKeys", "gun"],
            button1: "pickUpItem('clothes');",
            button2: "pickUpItem('walletAndKeys');",
            button3: "pickUpItem('phone');"
        },
        scene0_WakingUp1: {
            currentScene: "scene0_WakingUp1",
            desc: ["You put on your clothes. You live in a dangerous city, do you bring your gun with you?",
                "Leave bedroom",
                "Decide not to go",
                "Take gun"],
            load: ["gun"],
            button1: "playLevel('scene1_LivingRoom0');",
            button2: "doNothing();",
            button3: "pickUpItem('gun');"
        },
        scene1_LivingRoom0: {
            currentScene: "scene1_LivingRoom0",
            img: "Assets/Images/livingroom.jpg",
            desc: ["You walk into the living room. You realise you haven't eaten yet.",
                "Eat moldy sandwich",
                "Eat last 'Frikandellen broodje'",
                "Go (without eating)"],
            button1: "scene1_LivingRoom1(1);", // 
            button2: "scene1_LivingRoom1(0);", //
            button3: "playLevel('scene2_OutsideStreets0');"
        },
        scene2_OutsideStreets0: {
            currentScene: "scene2_OutsideStreets0",
            img: "Assets/Images/outsideStreet.png",
            desc: ["You walk outside, you see your vehicle infront of your house.",
                "Enter vehicle",
                "Enter garage",
                "Walk"],
            button1: "playLevel('scene2_SpaceShip0');", // vehicle
            button2: "playLevel('scene2_Garage0');", // garage
            button3: "alert('Walking will take way too long!');" // cant walk
        },
        scene2_Garage0: {
            currentScene: "scene2_Garage0",
            img: "Assets/Images/garage.jpg",
            desc: ["",
                "Take fuel",
                "Broomstick handle",
                "Go outside"],
            load: ["fuel", "broomstickhandle"],
            button1: "pickUpItem('fuel');", // fuel
            button2: "alert('THY SHALL NOT TOUCC T H E ALMIGHTY BROOMSTICK HANDLE!');", // broomstick
            button3: "inventory.includes('fuel') ? playLevel('scene2_OutsideStreets1') : playLevel('scene2_OutsideStreets0');" // 
        },
        scene2_OutsideStreets1: {
            currentScene: "scene2_OutsideStreets1",
            img: "Assets/Images/outsideStreet.png",
            desc: ["You got the fuel, now you can fuel up your vehicle.",
                "Enter vehicle",
                "Fill up vehicle",
                "Walk"],
            button1: "vehicleFueled == true ? playLevel('scene2_SpaceShip1') : alert('You should fill your car with fuel first.');", // vehicle
            button2: "inventory.remove('fuel'); vehicleFueled = true; updateInventory(); alert('You fueled up your vehicle.');", // fuel up vehicle
            button3: "alert('Walking will take way too long!');" // cant walk
        },
        scene2_SpaceShip0: {
            currentScene: "scene2_SpaceShip0",
            img: "Assets/Images/cockpit.jpg",
            desc: ["You try to take off, but the vehicle is out of fuel.",
                "Exit vehicle",
                "Read note",
                "Self destruct"],
            button1: "playLevel('scene2_OutsideStreets0');", // go back outside
            button2: "alert('The note says there is some fuel left in the garage.');", // note
            button3: "alert('You press the self destruct button. It is pretty obvious what happens, you die.'); gameOver();" //self destruct
        },
        scene2_SpaceShip1: {
            currentScene: "scene2_SpaceShip1",
            img: "Assets/Images/cockpit.jpg",
            desc: ["Now you can fly to the Qualbert Ceyn",
                "Take off",
                "Press random button",
                "Exit vehicle"],
            button1: "playLevel('scene3_QC0');",
            button2: "alert('You press a random button, who knows what happens'); gameOver();",
            button3: "alert('You cannot exit the vehicle now! You still need to do groceries!');"
        },
        scene3_QC0: {
            currentScene: "scene2_SpaceShip1",
            img: "Assets/Images/markt.jpg",
            desc: ["You arrived at Qualbert Ceyn",
                "Buy the stuff you need",
                "Go to the toilet",
                "Go back home"],
            button1: "doneGroceries == true ? alert('You already did the groceries.') : alert('You do the groceries. [time skips 1 hour]'); doneGroceries = true;",
            button2: "alert('You went to the toilet, it was a good pee.');",
            button3: "doneGroceries == true ? playLevel('scene4_Home0') : alert('You forgot to do the groceries');"
        },
        scene4_Home0: {
            currentScene: "scene2_SpaceShip1",
            img: "Assets/Images/livingroom.jpg",
            desc: ["You got home from doing groceries.",
                "Put groceries in fridge and closet",
                "Sleep",
                "Finish game"],
            button1: "did = true; alert('You put the groceries away.');",
            button2: "alert('Sleep tight, dont let the bugs bite. You slept 7 hours, it was a good sleep time.');",
            button3: "did == true ? playLevel('finish') : alert('You need to put the groceries away first.');"
        },
        finish: {
            currentScene: "scene2_SpaceShip1",
            img: "Assets/Images/youwin.jpg",
            desc: ["You did it. You crazy son of a bitch, you did it. You finished the game.",
                "Play again",
                "Play again",
                "Play again"],
            button1: "window.location = location;",
            button2: "window.location = location;",
            button3: "window.location = location;"
        }

    },
    inventoryDisplayItems: [
        { name: "clothes", location: "Assets/Images/clothes.png", id: "inv_clothes" },
        { name: "phone", location: "Assets/Images/phone.png", id: "inv_phone" },
        { name: "keys", location: "Assets/Images/keys.png", id: "inv_keys" },
        { name: "wallet", location: "Assets/Images/wallet.png", id: "inv_wallet" },
        { name: "gun", location: "Assets/Images/gun.png", id: "inv_gun" },
        { name: "fuel", location: "Assets/Images/fuel.png", id: "inv_fuel" }
    ]
}

function scene1_LivingRoom1(n) {
    if (n == 0) {
        if (inventory.includes("gun")) {
            alert("One of your friends come walking in the living room. He notices you eating his 'Frikandellen broodje'. You see him reaching for his gun, but you shoot him first.");
            alert("After shooting your 'friend' you go outside.");
            playLevel('scene2_OutsideStreets0');
        } else {
            alert("One of your friends come walking in the living room. He notices you eating his 'Frikandellen broodje' and just shoots you in the stomach.");
            alert("You later die in the hospital since you do not have any life insurance.");
            gameOver();
        }
    } else {
        alert("You got ligma from eating the moldy sandwich");
        gameOver();
    }
}

function doNothing() {
    console.log("doing nothing what so ever");
    alert("You decided not to do anything.\nWhy though?");
    gameOver();
}

function gameOver() {
    img.src = "Assets/Images/gameover.jpg";
    createDesc("It's game over for you then. Wanna play again?", "PLAY AGAIN", "PLAY AGAIN", "PLAY AGAIN");
    button1.setAttribute("onClick", "window.location = location;");
    button2.setAttribute("onClick", "window.location = location;");
    button3.setAttribute("onClick", "window.location = location;");
}