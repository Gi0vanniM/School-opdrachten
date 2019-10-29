var stop = false;

naamEnLeeftijd();

function naamEnLeeftijd() {
    while (!stop) {
        ans = prompt("Wat is jou naam?\n\nType 'stop' om te stoppen");
        if (ans == "stop") {
            stop = true;
        } else {
            ans2 = prompt("Wat je je leeftijd?");
            document.write("Hallo " + ans + ", je leeftijd is " + ans2 + " jaar.<br/>");
        }
    }
}