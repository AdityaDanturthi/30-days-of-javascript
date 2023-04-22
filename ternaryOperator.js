// Ternary operator
function checkEqual(a, b) {
    return a===b ? true : false;
}

console.log(checkEqual(1,1));

// Multiple conditional (ternary) operators
function checkSign(num) {
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "zero";
}

console.log(checkSign(2));