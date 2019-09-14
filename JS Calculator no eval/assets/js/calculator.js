var a;
var b;
var stage = 0;
var action;
var answer;

function equals() {
    var dis = document.getElementById("display").value.replace(",", ".");
    if (isNaN(b) || b == null) {
        b = displayNum();
        console.log("b=" + b);
    }
    if (a == null || b == null) {
        console.log("null:" + a + b);
        return false;
    }
    switch (action) {
        case '-':
            var out = Number(a) - Number(b);
            console.log("action -");
            break;
        case '+':
            var out = Number(a) + Number(b);
            break;
        case '/':
            var out = Number(a) / Number(b);
            break;
        case '*':
            var out = Number(a) * Number(b);
            break;
    }
    console.log("answer = " + out);
    console.log("a=" + a + " b=" + b);
    answer = out;
    a = null;
    b = null;
    document.getElementById("display").value = out;
}

function clearD() {
    console.log("clear");
    document.getElementById("display").value = 0;
    a = null;
    b = null;
}

function back() {
    var dis = document.getElementById("display").value.slice(0, -1);
    document.getElementById("display").value = dis;
}

function operaterAction(elmnt) {
    action = elmnt.value;
    if (a == null) {
        a = document.getElementById("display").value;
        document.getElementById("display").value = 0;
    }
    // if (b == null && a == Number) {
    //     b = document.getElementById("display").value;
    // }
    console.log("a=" + a + " b=" + b);
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

function displayNum() {
    return document.getElementById("display").value;
}

