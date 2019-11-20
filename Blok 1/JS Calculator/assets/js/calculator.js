function equals() {
    var dis = document.getElementById("display").value.replace(",", ".");
    var out = eval(dis);
    console.log(out);
    document.getElementById("display").value = out;
}

function clearD() {
    console.log("clear");
    document.getElementById("display").value = 0;
}

function back() {
    var dis = document.getElementById("display").value.slice(0, -1);
    document.getElementById("display").value = dis;
}

function num(elmnt) {
    var num = elmnt.value;
    var dis = document.getElementById("display").value;
    console.log(num);
    if (dis == 0) {
        document.getElementById("display").value = num;
    } else {
        document.getElementById("display").value += num;
    }
}

