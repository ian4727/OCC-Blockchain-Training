let radius = 10;
const pi = 3.14;

// log radius and pi
console.log(radius, pi);

// math operators => +, -, *, /, ** (exponent), % (modulus or get the remainder)

// divide 10 by 2
console.log(10 / 2);

// get remainder of radius (10) / 3
let result = radius % 3;
console.log(result);

// get radius (pi * radius^2)
result = pi * radius ** 2;
console.log(result);

// order of operations - PEMDAS (Parentheses, Exponents, Multiplication/Division, Addition/Subtraction)

//10 - 3, 7^2, 5*49 == 245
result = 5 * (10 - 3) ** 2;
console.log(result);

let likes = 10;

/* SHORTHAND OPERATIONS */

// take current val and add value
likes += 5;
likes++;

console.log(likes);
likes = 10;

// subtract
likes -= 5;
likes--;

console.log(likes);
likes = 10;

// multiply
likes *= 2;

console.log(likes);
likes = 10;

// divide
likes /= 2;

console.log(likes);

// NaN - not a number
console.log(5 * "hello");

/* Concatenate Numbers */
result = "The blog has " + likes + " likes.";
console.log(result);
