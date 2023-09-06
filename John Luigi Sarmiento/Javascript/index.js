console.log(1);
let myAge = 25;
let year = 2019;
console.log(myAge)
console.log(myAge, year);

// remember javascript read the code line my by line
myAge = 30;
console.log(myAge);

const points  = 100; 
console.log(points);
var score = 75
console.log(score);



// string (store any data and manupulate them)
let firstName = 'brandon';
let lastName = 'sanderson';

// string concatenation - (join strings together)
let fullName = firstName +" "+ lastName
console.log(fullName)
// getting character
console.log(fullName[2]);
// string length
console.log(fullName.length);
// string methods
console.log(fullName.toUpperCase())
// let result = fullName.toLowerCase
console.log()



// a function is snippet code that can perform a specific task
// a method is a function that is associated with an object or class . or i can say it is a particular function specific only to your object 
// In object-oriented programming, an object's methods are functions that are designed to work with and manipulate the data associated with that specific object. 
// You are telling JavaScript to take the value of the fullName string (which is a variable or expression containing a string) and apply the toUpperCase method to it. The () are essential because they signify that you want to perform an action (calling a method) on the string stored in fullName.

// let index = email.indexof('@')
// console.log(index);


let email = "mario@thenetnija.co.uk";
let result = email.substr(4, 10);
let result2 = email.replace('m','w')


// result = email.lastIndexOf('n') 
// it searches for the last occurrence of the character 'n' within the string.


let result1 = email.slice(4,10);
// let result = email.slice(2,5)
console.log(result)
console.log(result1)
console.log(email)
console.log(result2)
console.log(email)


