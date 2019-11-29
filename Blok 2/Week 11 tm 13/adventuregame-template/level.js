

var game = {
    level: {
        scene0_WakingUp0: {
            curruntScene: "scene0_WakingUp0",
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
            curruntScene: "scene0_WakingUp1",
            desc: ["You put on your clothes. You live in a dangerous city, do you bring your gun with you?",
                "Leave bedroom",
                "Decide not to go",
                "Take gun"],
            button1: "playLevel('scene1_LivingRoom0');",
            button2: "doNothing();",
            button3: "pickUpItem('gun');"
        },
        scene1_LivingRoom0: {
            curruntScene: "scene1_LivingRoom0",
            img: "Assets/Images/livingroom.jpg",
            desc: ["You walk into the living room. You realise you haven't eaten yet.",
                "Eat moldy sandwich",
                "Eat last 'Frikandellen broodje'",
                "Go (without eating)"],
            button1: "scene1_LivingRoom1(1);", // 
            button2: "scene1_LivingRoom1(0);", //
            button3: "scene2_OutsideStreets0();"
        },
        scene2_OutsideStreets0: {

        },
        scene2_Garage0: {

        },
        scene2_SpaceShip0: {

        },

    },
    inventoryDisplayItems: [
        { name: "clothes", location: "Assets/Images/clothes.png", id: "inv_clothes" },
        { name: "phone", location: "Assets/Images/phone.png", id: "inv_phone" },
        { name: "keys", location: "Assets/Images/keys.png", id: "inv_keys" },
        { name: "wallet", location: "Assets/Images/wallet.png", id: "inv_wallet" },
        { name: "gun", location: "Assets/Images/gun.png", id: "inv_gun" }
    ]
}