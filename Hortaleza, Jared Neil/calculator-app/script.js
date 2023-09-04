/* 
    OPERATORS

    Arithmetic (+, -, *, /)
    Logical (&& [AND], || [OR], ! [NOT], etc.)
    Comparison (==, ===, !=, !==, >, <, >=, <=, etc.)
    Assignment (=, +=, -=, *=, /=, etc.)
*/

// Functions

/* 
    a and b are parameters for the function add, subtract, multiply and divide
*/

// Data types

/* 
    Primitive Types: number, string, boolean, null, undefined and symbol
    Object Types: object, array, function and others
*/

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

function calculator() {
    // parsefloat convers string to float
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Enter the operation (+, -, *, /):");
    let operations = ["+", "-", "*", "/"];

    let result;

    if (isNaN(num1) || isNaN(num2))
        return alert("Error: Please enter valid numbers.");

    if (operation === "+") {
        result = add(num1, num2);
    } else if (operation === "-") {
        result = subtract(num1, num2);
    } else if (operation === "*") {
        result = multiply(num1, num2);
    } else if (operation === "/") {
        result = divide(num1, num2);
    } else {
        return alert("Error: Please enter a valid operation. (+, -, *, /)");
    }
    alert("Result: " + result);
}

calculator();
