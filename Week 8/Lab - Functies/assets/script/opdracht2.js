console.log(addition(4, 60));
console.log(addition(24, 235));
console.log(addition(9999, 1));

console.log(subtraction(50, 25));
console.log(subtraction(204, 74));
console.log(subtraction(2049, 50));

console.log(multiplication(50, 5));
console.log(multiplication(32, 16));
console.log(multiplication(235, 5));

console.log(division(64, 16));
console.log(division(21, 7));
console.log(division(800, 4));

console.log(increment(9999));
console.log(increment(250825));
console.log(increment(25835));

console.log(decrement(909090));
console.log(decrement(1947));
console.log(decrement(93735735));

function addition(num1, num2) {
    return num1 + " + " + num2 + " = " + (num1 + num2);
}

function subtraction(num1, num2) {
    return num1 + " - " + num2 + " = " + (num1 - num2);
}

function multiplication(num1, num2) {
    return num1 + " * " + num2 + " = " + (num1 * num2);
}

function division(num1, num2) {
    return num1 + " / " + num2 + " = " + (num1 / num2);
}

function increment(num1) {
    return num1 + " + 1 = " + num1++;
}

function decrement(num1) {
    return num1 + " - 1 = " + num1--;
}