helloWorld(3);
document.write("<br>")
helloWorld(7);

function helloWorld(number) {
    for (var i = 0; i < number; i++) {
        document.write((i + 1) + ". Hello world!<br>");
    }
}