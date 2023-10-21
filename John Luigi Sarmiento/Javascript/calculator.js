const c = prompt("Please choose an operation (+) (-) (/) (*):");

function calculator(operations) {
    let result;
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));

    if (operations === '+') {
        result = num1 + num2;
    } else if (operations === '-') {
        result = num1 - num2;
    } else if (operations === '/') {
        if (num2 === 0) {
            result = "Division by zero is not allowed.";
        } else {
            result = num1 / num2;
        }
    } else if (operations === '*') {
        result = num1 * num2;
    } else {
        result = "Invalid operation.";
    }

    return result;
}

const operationResult = calculator(c);
alert(`Result: ${operationResult}`);


