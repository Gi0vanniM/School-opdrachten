const PRICE_FRIS = 1.0; //const caps
const PRICE_BIER = 2.5;
const PRICE_WIJN = 4.0;
const PRICE_SNACK = 0.25;

var am_fris = 0;
var am_bier = 0;
var am_wijn = 0;
var am_snack = 0;

var stop = false;

// bestel();

function bestel() {

    while (!stop) {
        var ans = prompt("Wat wilt u bestellen?\n\n"
            + "Kies uit:\n"
            + "Fris                             €1,00\n"
            + "Bier                             €2,50\n"
            + "Wijn                             €4,00\n"
            + "Snack (bitterballen)     8st voor €2,50\n"
            + "                                 16st voor €5,00");
        ans.toLowerCase();
        // ans.toLowerCase;
        if (ans == "stop") {
            stop = true;
            calcRekening();
        }
        else if (ans == "fris") {
            var ans_fris = parseInt(prompt("En hoeveel fris wilt u?"));
            if (ans_fris > 0) {
                am_fris += ans_fris;
                console.log("[am_fris:" + am_fris + "] [ans_fris:" + ans_fris + "]");
                alert(ans_fris + " fris tegevoegd.\n" + am_fris + " fris totaal");
            }
        }
        else if (ans == "bier") {
            var ans_bier = parseInt(prompt("En hoeveel bier wilt u?"));
            if (ans_bier > 0) {
                am_bier += ans_bier;
                console.log("[am_bier:" + am_bier + "] [ans_bier:" + ans_bier + "]");
                alert(ans_bier + " bier tegevoegd.\n" + am_bier + " bier totaal");
            }
        }
        else if (ans == "wijn") {
            var ans_wijn = parseInt(prompt("En hoeveel wijn wilt u?"));
            if (ans_wijn > 0) {
                am_wijn += ans_wijn;
                console.log("[am_fris:" + am_wijn + "] [ans_fris:" + ans_wijn + "]");
                alert(ans_wijn + " fris tegevoegd.\n" + am_wijn + " fris totaal");
            }
        }
        else if (ans == "snack") {
            var ans_snack = parseInt(prompt("En hoeveel bitterballen wilt u?\n\nKies uit een schaal van 8 of 16."));
            if (ans_snack == 8 || ans_snack == 16) {
                am_snack += ans_snack;
                console.log("[am_snack:" + am_snack + "] [ans_snack:" + ans_snack + "]");
                alert(ans_snack + " bitterballen tegevoegd.\n" + am_snack + " bitterballen totaal");
            } else {
                alert("Je moet uit 8 of 16 bitterballen kiezen.")
            }

        }
    }
}

function calcRekening() {
    var tot_fris = am_fris * PRICE_FRIS;
    var tot_bier = am_bier * PRICE_BIER;
    var tot_wijn = am_wijn * PRICE_WIJN;
    var tot_snack = am_snack * PRICE_SNACK;

    var rekening = "";

    if (tot_fris > 0) {
        rekening = rekening + "Fris " + am_fris + "x....................€" + tot_fris.toFixed(2).replace(".", ",") + "<br>";
    }
    if (tot_bier > 0) {
        rekening = rekening + "Bier " + am_bier + "x....................€" + tot_bier.toFixed(2).replace(".", ",") + "<br>";
    }
    if (tot_wijn > 0) {
        rekening = rekening + "Wijn " + am_wijn + "x....................€" + tot_wijn.toFixed(2).replace(".", ",") + "<br>";
    }
    if (tot_snack > 0) {
        rekening = rekening + "Snack " + am_snack + "x....................€" + tot_snack.toFixed(2).replace(".", ",") + "<br>";
    }
    rekening = rekening + "Totaal: €" + (tot_fris + tot_bier + tot_wijn + tot_snack).toFixed(2).replace(".", ",");
    // document.writeln('<div class="rekening">' + rekening + '</div>');
    document.getElementById("but").remove();
    document.getElementById("rek").innerHTML = '<div class="rekening">' + rekening + '</div>';

}