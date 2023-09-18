function addition(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b == 0)
        return "Error: Division by zero is not allowed";

    return a / b;
}

function calculator(){
    let num1 = parseFloat(prompt("Enter the first number: "));
    let num2 = parseFloat(prompt("Enter the second number: "));
    let operation = prompt("Enter the operation (+, -, *, /):");

    let result;
    
    if(operation === '+')
        result = addition(num1, num2);
    else if(operation === '-')
        result = subtract(num1, num2);
    else if(operation === '*')
        result = multiply(num1, num2);
    else if (operation === '/')
        result = divide(num1, num2);
    else
        result = "Error: Invalid operation";
        

    alert('Result: ' + result);
}

calculator();