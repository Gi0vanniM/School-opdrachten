var ans = prompt();

for (var i = 1; i <= ans; i++) {
    for (var i1 = 1; i1 <= 10; i1++) {
        document.write(ans + " x " + i1 + " = " + (i * i1) + "<br/>");
    }
    document.write("<br>");
}