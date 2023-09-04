/* let age = 34;
// let year = 2023;

// console.log(age, year);

// age = 30;
// console.log(age);

// const points = 100;

// console.log(points);

// var score = 75;
// console.log(score);

*/

/*
// strings
console.log('hello, world!');
let email = 'mario@thenetninja.co.uk';
console.log(email);

// string concatenation
let firstName = 'Brandon';
let LastName = 'Sanderson';

let fullName = firstName + ' ' + LastName;
console.log(fullName)

// getting characters
console.log(fullName[0]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf('@');
console.log(index);
*/

/*
// common string methods
let email = 'mario@thenetninja.co.uk';

// let result = email.lastIndexOf('n');
// let result = email.slice(0, 5);
// let result = email.substr(4, 10)
// let result = email.replace('m', 'w');
let result = email.replace('n', 'w');

console.log(result);
*/

/*
// math operators
let radius = 10;
const pi = 3.14;
console.log(radius, pi);

// console.log(10/2);
// let result = radius % 3;
// let result = pi * radius ** 2;

// let result = 5 * (10 - 3)**2;

// console.log(result);

let likes = 10;
likes += 10;
console.log(likes);

// NaN - not a number
// console.log(5 / 'ehllo');

// concatenation
let result = 'the blog has ' + likes + ' likes';
console.log(result);
*/

/*
// template strings
const title = 'The best reads of 2023';
const author = 'Mario';
const likes = '30';

// concatenation way
//let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes;
//console.log(result);

// template string way
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>This blog has ${likes} likes</span>
`;
console.log(html);
*/

/*
let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];
// console.log(random);

// console.log(ninjas.length);

// array methods
//let result = ninjas.join(',');

// let result = ninjas.indexOf('chun-li')

// let result = ninjas.concat(['ken', 'crystal']);
let result = ninjas.push('ken');
result = ninjas.pop();

console.log(result);
*/

/*
// let age = null;
// console.log(age, age + 3, `the age is ${age}`)

// booleans
console.log(true, false);

// methods can return booleans
let email = 'luigi@thenetninja.co.uk';
let names = ['mario', 'luigi', 'toad'];

// let result = email.includes('@');
// let result = names.includes('luigi');

// console.log(result);
let age = 25;

console.log(age == 25);
console.log(age != 30);
*/

/*
let age = 25;
// loose comparison (different types can be equal)
console.log(age != 25);
console.log(age != '25')

// strict comparison (different types cannot  be equal)
console.log(age === 25);
console.log(age === '25');

// type conversion
let score = '100';

score = Number(score);
console.log(score + 1);
console.log(typeof score);

let result = 'hello';
*/