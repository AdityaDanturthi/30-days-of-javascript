function calc(operation, num1, num2) {
    var answer;
    switch(operation) {
        case "add":
            answer = num1 + num2;
            break;
        case "sub":
            answer = num1 - num2;
            break;
        case "mul":
            answer = num1 * num2;
            break;
        case "div":
            answer = num1 / num2;
            break;
    }
    return answer;
}

console.log(calc("mul", 1, 2));