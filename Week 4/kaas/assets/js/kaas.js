// Giovanni Mierop
// Applicatie - Mediaontwikkeling
// 19A2

// 1STE VRAAG
function kaasGeel() {
    var geel = prompt("Is de kaas geel? (ja of nee)").toLowerCase();
    console.log(geel);
    if (geel == "ja") {
        kaasGaten();
    } else if (geel == "nee") {
        kaasBlauweSchimmel()
    } else {
        alert("Sorry het antwoord dat je hebt in gevuld is niet geldig, het antwoord moet ja of nee zijn.");
        kaasGeel();
    }

}

// 2DE VRAGEN
function kaasGaten() {
    var gaten = prompt("Zitten er gaten in? (ja of nee)").toLowerCase();
    if (gaten == "ja") {
        kaasFuckingDuur();
    } else if (gaten == "nee") {
        kaasHardAlsSteen();
    } else {
        alert("Sorry het antwoord dat je hebt in gevuld is niet geldig, het antwoord moet ja of nee zijn.");
        kaasGaten();
    }
}
function kaasBlauweSchimmel() {
    var blsc = prompt("Heeft de kaas blauwe schimmel? (ja of nee)").toLowerCase();
    if (blsc == "ja") {
        kaasKorstTwee();
    } else if (blsc == "nee") {
        kaasKorst();
    } else {
        alert("Sorry het antwoord dat je hebt in gevuld is niet geldig, het antwoord moet ja of nee zijn.");
        kaasBlauweSchimmel();
    }
}

// 3DE VRAGEN
function kaasFuckingDuur() {
    var duur = prompt("Is de kaas belachelijk duur? (ja of nee)").toLowerCase();
    if (duur == "ja") {
        // Ementhaler
        alert("De kaas is Ementhaler.");
    } else if (duur == "nee") {
        // Leerdammer
        alert("De kaas is Leerdammer.");
    } else {
        alert("Sorry het antwoord dat je hebt in gevuld is niet geldig, het antwoord moet ja of nee zijn.");
        kaasFuckingDuur();
    }
}
function kaasHardAlsSteen() {
    var steen = prompt("Is de kaas hard als steen? (ja of nee)").toLowerCase();
    if (steen == "ja") {
        // Pamigiano Reggiano
        alert("De kaas is Pamigiano Reggiano.");
    } else if (steen == "nee") {
        // Goudse kaas
    } else {
        alert("Sorry het antwoord dat je hebt in gevuld is niet geldig, het antwoord moet ja of nee zijn.");
        kaasHardAlsSteen();
    }
}
function kaasKorst() {
    var kosrt = prompt("Heeft de kaas een korst? (ja of nee)").toLowerCase();
    if (korst == "ja") {
        // Camembert
        alert("De kaas is Camembert.");
    } else if (korst == "nee") {
        // Mozarella
        alert("De kaas is Mozarella.");
    } else {
        alert("Sorry het antwoord dat je hebt in gevuld is niet geldig, het antwoord moet ja of nee zijn.");
        kaasKorst();
    }
}
function kaasKorstTwee() {
    var korstTweePuntNul = prompt("Heeft de kaas een korst? (ja of nee)").toLowerCase();
    if (korstTweePuntNul == "ja") {
        // Bleu de Rochbaron
        alert("De kaas is Bleu de Rochbaron.");
    } else if (korstTweePuntNul == "nee") {
        // Foume d'Ambert
        alert("De kaas is Foume d'Ambert.");
    } else {
        alert("Sorry het antwoord dat je hebt in gevuld is niet geldig, het antwoord moet ja of nee zijn.");
        kaasKorstTwee();
    }
}
