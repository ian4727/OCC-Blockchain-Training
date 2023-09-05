// functions (reusable code blocks)

// function declaration
// function greet() {
//     console.log("hello there");
// }

// function expression (declaring a function like a variable)

// name is a parameter (container/placeholder)
const speak = function (name = "luigi", time = "night") {
    console.log(`good ${time}, ${name}`);
};

speak(); // defaults will run (luigi, night)
speak("jared", "morning"); // arguments are the value for parameter

/* expressions must be defined first, function declarations can be before or after invoke */

// regular function
// const calcArea = function (radius) {
//     // return to assign a value to something else
//     return 3.14 * radius ** 2;
// };

// arrow function
/* 
    if only one param, no need for parentheses, but required if zero, two or more

    return is no longer needed
*/
const calcArea = (radius) => 3.14 * radius ** 2;

const area = calcArea(5);
console.log(area);

const greet = () => console.log("hello, world");

greet();

const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10, 15, 30], 0.2));
