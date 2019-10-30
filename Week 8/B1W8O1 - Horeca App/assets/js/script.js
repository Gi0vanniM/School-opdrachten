const price_fris = 1;
const price_bier = 2.5;
const price_wijn = 4;
const price_snack8 = 2.5;
const price_snack16 = 5;

var am_fris = 0;
var am_bier = 0;
var am_wijn = 0;
var am_snack = 0;

var stop = false;


bestel();

function bestel() {

    while (!stop) {
        var ans = prompt("Wat wilt u bestellen?\n\n"
            + "Kies uit:\n"
            + "Fris                             €1,00\n"
            + "Bier                             €2,50\n"
            + "Wijn                             €4,00\n"
            + "Snack (bitterballen)     8st voor €2,50\n"
            + "                                 16st voor €5,00").toLowerCase();
        // ans.toLowerCase;
        if (ans == "stop") {
            stop = true;
        }
        if (ans == "fris") {
            am_fris = prompt("En hoeveel Fris wilt u?");
            if (isNaN(am_fris)) {
                alert("Invoer incorrect.");
            }
        }
        if (ans == "bier") {
            am_bier = prompt("En hoeveel bier wilt u?");
            if (isNaN(am_bier)) {
                alert("Invoer incorrect.");
            }
        }
        if (ans == "wijn") {
            am_wijn = prompt("En hoeveel wijn wilt u?");
            if (isNaN(am_wijn)) {
                alert("Invoer incorrect.");
            }
        }
        if (ans == "snack") {
            var ans_snack = prompt("En hoeveel bitterballen wilt u?\n\nKies uit een schaal van 8 of 16.");
            if (ans_snack == 8 || ans_snack == 16) {
                am_snack += parseInt(ans_snack);
                alert(ans_snack + " bitterballen tegevoegd.\n" + am_snack + " totaal");
            }

        }
        // if (ans == "fris" || ans == "bier" || ans == "wijn" || ans == "snack" || ans == "bitterballen") {
        //     switch (ans) {
        //         case "fris":
        //             am_fris = prompt("En hoeveel fris wil je bestellen?")
        //             break;
        //         case "bier":
        //             break;
        //         case "wijn":
        //             break;
        //         case "snack" || "bitterballen":
        //             break;
        //         default:
        //             break;
        //     }
        // }
        else {
            alert("Invoer incorrect.");
        }
    }
    // function addOrder(product, amount) {
    //     product = 4
    // }
    function calcRekening() {

    }
}