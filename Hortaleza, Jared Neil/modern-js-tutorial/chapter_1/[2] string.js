// strings

// log hello world
console.log("hello, world");

// log email variable
let email = "jared@jared.com";
console.log(email);

// string concatenation
let firstName = "Jared";
let lastName = "Hortaleza";

/* 
    combine two strings together (hence the add)
    i.e. 1 + 1 = 11
*/
let fullName = firstName + " " + lastName;
console.log(fullName);

// getting characters

/* 
    Javascript is a zero-based language, so it starts from 0 instead of 1. 
*/

// get the first letter
console.log(fullName[0]);

// string length, how many letters
console.log(fullName.length);

// string methods, does something to the string

// parentheses are used to put data provided as input for a function to use (aka: parameters), here we say there are no parameters to use for this function

// all uppercase
console.log(fullName.toUpperCase());

// all lowercase
let result = fullName.toLowerCase();
console.log(result, fullName);

// find where a series of letters/numbers/symbols is in a string
let index = email.indexOf("@");
console.log(index);