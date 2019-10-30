var stop = false;

while (!stop) {
    var ans = prompt("Voer een getal in.");

    if (isNaN(ans) || ans == "" || ans.includes(" ")) {
        console.log("Invoer niet correct.");

    }

    else if (!isNaN(ans)) {
        stop = true;
        for (var i = 1; i <= ans; i++) {
            for (var i1 = 1; i1 <= 10; i1++) {
                document.write(i + " x " + i1 + " = " + (i * i1) + "<br/>");
            }
            document.write("<br>");
        }
    }
}