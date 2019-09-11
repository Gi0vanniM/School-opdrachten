//////////////////////////////////////////////////////
// Giovanni Mierop                                  //
// Da Vinci College - Applicatie Ontwikkelaar       //
// Opdracht: Pizza Calculator                       //
//////////////////////////////////////////////////////

// Hier worden prijzen bepaald voor elke maat
const SIZE_SMALL = 5.99;
const SIZE_MEDIUM = 7.99;
const SIZE_LARGE = 12.99;
var size_price;

// hier wordt de function "calculate" uitgevoerd wanneer er op de calculeer knop is gedrukt
document.getElementById("calc_button").onclick = calculate;

// start de calculatie en samenstelling van de bestelling
function calculate() {
    // hier wordt de value van de gekozen pizza maat opgevraagd
    var a = document.getElementById("pizza_size");
    var sizeV = a.value;

    // hier wordt de naam van de maat opgevraagd
    var a = document.getElementById("pizza_size");
    var size = a.options[a.selectedIndex].text;

    // hier wordt het aantal pizza's opgevraagd
    var b = document.getElementById("pizza_amount");
    var amount = b.value;

    // hier wordt de jusite prijs gepakt van de maat die gekozen is
    switch (sizeV) {
        case "1":
            size_price = SIZE_SMALL;
            break;
        case "2":
            size_price = SIZE_MEDIUM;
            break;
        case "3":
            size_price = SIZE_LARGE;
            break;
        default:
            // als de gebruiker geen maat heeft ingevoerd wordt het hier op 0 gezet
            size_price = 0;
    }

    // hier wordt er gecheckt of de maat en/of aantal niet 0 is
    if (size_price != 0 && amount != 0) {
        var total_price = size_price * amount;
        // alert(total_price);
        document.write("<h2>Bestelling:</h2><br>"
            + "Maat: " + size + "<br>"
            + "Aantal: " + amount + "<br>"
            + "Prijs: €" + total_price);
    } else { // als de maat en/of aantal niet is opgegeven krijgt de gebruiker een alert
        alert("Je hebt de maat of aantal niet aangegeven.");
    }

}

// var size = prompt("Hoe groote pizza wilt u bestellen? (kies uit: small, medium of large", "small, medium of large");
// var amount = prompt("Hoeveel pizza's wil je?", "1");

// switch (size) {
//     case "small":
//         size_price = SIZE_SMALL;
//         break;
//     case "medium":
//         size_price = SIZE_MEDIUM;
//         break;
//     case "large":
//         size_price = SIZE_LARGE;
//         break;
//     default:
//         size_price = 0;
// }

// document.write("<h2>Uw bestelling:</h2> <br>"
//     + "Pizza grootte: " + size + "<br>"
//     + "Aantal pizza's: " + amount + "<br>"
//     + "Prijs: ");