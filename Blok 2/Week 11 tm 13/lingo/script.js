
var attempts = 0;
var input = [];
// var answer = Array.from(words[0].toUpperCase());
var answer = [];
// var tempAnswer = [];


function start() {
    answer = Array.from(words[getRandom(0, words.length)].toUpperCase());
    attempts = 0;

    for (var row = 0; row < 5; row++) {
        for (var col = 0; col < 5; col++) {
            document.getElementById(row + "-" + col).innerHTML = "";
            document.getElementById(row + "-" + col).className = "letter";
        }
    }

    firstLetter();
}

function check() {
    input = Array.from(document.getElementById("input-box").value.toUpperCase());
    var tempAnswer = [answer[0], answer[1], answer[2], answer[3], answer[4]];

    if (input.length == 5) {

        if (input.toString() == answer.toString()) {
            alert("Wow je hebt het geraden! Episch!");
        }

        for (var i = 0; i < 5; i++) {
            if (tempAnswer[i] == input[i]) {
                var id = attempts + "-" + i;
                document.getElementById(id).className += " green";
                tempAnswer[i] = "-";
            }
        }

        for (var i = 0; i < 5; i++) {
            if (tempAnswer.includes(input[i])) {
                var id = attempts + "-" + i;
                document.getElementById(id).className += " yellow";
                tempAnswer[i] = "-";
            }
            else if (tempAnswer[i] != "-") {
                var id = attempts + "-" + i;
                document.getElementById(id).className = "letter";
            }
        }
        writeLetter(input);
        if (attempts == 4) {
            alert("Helaas je hebt het word niet geraden.")
        }
        attempts++;

    } else {
        alert("Input is te klein of te groot. Het moet altijd 5 letters zijn.")
    }
}

function writeLetter(putin) {
    for (var i = 0; i < 5; i++) {
        var id = attempts + "-" + i;
        document.getElementById(id).innerHTML = putin[i];
    }

}

function firstLetter() {
    document.getElementById("0-0").innerHTML = answer[0];
    document.getElementById("0-0").className += " green";
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}