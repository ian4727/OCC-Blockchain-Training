// booleans & comparisons
/* 
    true and false are boolean, "true" and "false" are string
*/
console.log(true, false, "true", "false");

// methods can return booleans
let email = "luigi@thenetninja.co.uk";
let names = ["mario", "luigi", "toad"];

// returns false because theres no ! in the email
let result = email.includes("!");
console.log(result);

// returns true and false as luigi is in the array, but not bowser
result = names.includes("luigi");
result = names.includes("bowser");
console.log(result);

// comparison operators
let age = 25;

/* 
    single equals is assigning, double equals is checking equality

    The double equal operator only checks if two objects are references to the same object in memory, while the triple equal operator checks if two objects have the same properties and values.

    const number = 1234 
    const stringNumber = '1234'  

    console.log(number == stringNumber) // true
    console.log(number === stringNumber)  // false

    number is a number but stringNumber is a string
*/

console.log(age == 25); // true
console.log(age == 30); // false
console.log(age != 30); // != means NOT equal, true
console.log(age > 20); // age is greater than 20, true
console.log(age < 20); // age is less than 20, false
console.log(age <= 25); // age is less than or equal to 25, true
console.log(age >= 25); // age is greater than or equal to 25, true

let name = 'jared';

console.log(name == 'jared');
console.log(name == 'Jared'); // has caps, not equal
console.log(name > 'crystal') // later letters in the alphabet are greater than earlier letters (j > c), true
console.log(name > 'Jared') // lowercase letters are greater than uppercase letters, true
console.log(name > 'Crystal') // true
