// alert("hello world");
// console.log(1);
// console.log(2);

// VARIABLES ----------------------------------------
// let age = 25;
// let year = 2023;
// log things to console
// console.log(age, year);
// age = 30;
// console.log(age);

// const point = 100;
// console.log(point);

// old way of creating variables 
// var score = 75;
// console.log(score);

// STRINGS ----------------------------------------
// console.log('hello, world');
// let email = 'regelcabrales@gmail.com'
// console.log(email);

// string concatenation
// let firstName = 'Regel';
// let lastName = 'Cabrales';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// getting character
// console.log(fullName[0]);

// string length
// console.log(fullName.length);

// string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName);

// let index = email.indexOf('@');
// console.log('index');

// common string methods

// Shows index of certain character 
// let result2 = email.lastIndexOf('c');

// Slices string, (from, up to) 
// let result2 = email.slice(0,5);

// similar to slicing but parameter is (start, number of characters)
// let result2 = email.substring(4, 10);

// replace first instance of character to another
// let result2 = email.replace('r', 'y');

// console.log(result2);

// NUMBERS ----------------------------------------
// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);

// math operators +. -, *, /, **, %

// modulo
//  console.log(10/2);
//  let result3 = radius % 3;

// multiplication and exponent
// let result3 = pi * radius**2;

// B-Brackets I-Indices D-Division M-Multiplication A-Addition S-Subtraction
// let result3 = 5 * (10-3)**2;
// console.log(results3);

// let likes = 10;
// likes = likes + 1;
// like++;
// likes--;
// likes += 10;
// likes -= 5;
// likes *= 2;
// like /= 2;
// console.log(likes);

// NaN = not a number 
// console.log(5 / 'hello');

// string concatenation
// let result4 = 'the blog has ' + likes + ' likes';
// console.log(result4);

// template strings
// const title = 'Best reads of 2023';
// const author = 'Regel';
// const likes = 444;

// concatenation way
// let result5 = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.';

// template string way (backticks)
// let result5 = `The blog called ${title} by ${author} has ${likes} likes.`;
// console.log(result5);

// creating html templates
// let html = `
//     <h2>${title}</h2>
//     <p>By ${author}</p>
//     <span>This blog has ${likes} likes</span>
// `;
// console.log(html);

// ARRAYS ----------------------------------------
// let ninjas = ['shaun', 'ryu', 'chun-li'];
// ninjas[1] = 'ken';
// console.log(ninjas[1]);
// console.log(ninjas.length);

// let ages = [20,25,30,35];
// console.log(ages[2]);
 
// array methods
// joins all into a single string
// let result7 = ninjas.join (',');
// let result7 = ninjas.concat(['ken', 'crystal']);
// let result7 = ninjas.push('ken');
// let result7 = ninjas.pop();
// console.log(result7);

// NULL & UNDEFINED ----------------------------------------
// let age2 = null;
// console.log(age2, age2 + 3, `the age is ${age2}`)

// BOOLEAN & COMPARISONS ----------------------------------------
// methods can return booleans
// let result8 = email.includes('@');
// let names = ['regel', 'louisa', 'lester'];
// let result8 = email.includes('regel');
// console.log(result8);

// loose comparison (different types can still be equal)
// console.log(age == 25);
// console.log(age == 30);
// strict comparison (different types cannot be equal)
// console.log(age === 25);
// console.log(age === 30);

// type conversion
// let score = '100';
// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result9 = Number('hello');
// let result9 = String(50);

// let result9 = Boolean(100);
// let result9 = Boolean(0);
// 0 = false
// positive numbers = true
// letters = true
// empty string = false

// console.log(result9);

// FOR LOOPS ----------------------------------------
// for(let i=0;i<5;i++){
//     console.log('in loop: ', i);
// }
// console.log('loop finished.');

// let names = ['regel', 'louisa', 'lester'];
// for(let i=0;i<names.length;i++){
//     console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }

// WHILE LOOPS ----------------------------------------
// let i = 0;
// while(i < 5){
//     console.log('in loop: ', i);
//     i++;
// }

// do while loop - starts first regardless if true or false
// let i = 3;
// do{
//     console.log('val of i is ', i);
//     i++;
// }while(i < 5);

// IF STATEMENTS ----------------------------------------
// const age = 23;
// if(age > 20){
//     console.log('you are over 20 years old.');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];
// if(ninjas.length > 3){
//     console.log("That's a lot of ninjas!");
// }

// if, else if, and else statements
// const password = 'p@ss';

// if(password.length >= 12){
//     console.log('that password is mighty strong!');
// } else if(password.length >= 8){
//     console.log('that password is long enough!');
// } else {
//     console.log('that password is not long enough!');
// }

// LOGICAL OPERATORS ----------------------------------------
// OR || and AND &&
// const password = 'p@ssword1234';

// if(password.length >= 12 && password.includes('@')){
//     console.log('that password is mighty strong!');
// } else if(password.length >= 8 || password.includes('@') && password.length > 5){
//     console.log('that password is strong enough!');
// } else {
//     console.log('that password is not strong enough!');
// }

// NOT (!)
// console.log(!true);

// BREAK AND CONTINUE ----------------------------------------
// const scores = [50, 25, 0, 30, 100, 0, 10];

// for(let i=0;i<scores.length;i++){
//     if(scores[i] === 0){continue;}
//     console.log('your score: ', scores[i]);
//     if(scores[i] === 100) {
//         console.log('Congrats, you got the top score!');
//         break;
//     }
// }

// SWITCH STATEMENTS ----------------------------------------
// const grade = 'D';

// switch(grade){
//     case 'A':
//         console.log('You got an A!');
//         break;
//     case 'B':
//         console.log('You got an B!');
//         break;
//     case 'C':
//         console.log('You got an C!');
//         break;
//     case 'D':
//         console.log('You got an D!');
//         break;
//     case 'E':
//         console.log('You got an E!');
//         break;
//     default:
//         console.log('Not a valid grade');
// }

// VARIABLES AND BLOCK SCOPE ----------------------------------------
// const age = 30;
// if(true){
//     const age = 40;
//     const name = 'shaun';
//     console.log('inside 1st code block: ', age, name);

//     if(true){
//         const age = 50;
//         console.log('inside 2nd code block: ', age, name);
//     }
// }
// console.log('outside code block: ', age, name);

// FUNCTIONS ----------------------------------------
// function declaration
// function greet(){
//     console.log('hello there');
// }
// greet();
// greet();
// greet();

// function expression
// const speak = function(){
//     console.log('good day!');
// };
// speak();

// function parameters
// const speak = function(name = 'Louisa', time = 'night'){
//     console.log(`good ${time} ${name}!`);
// };
// speak('Regel', 'morning');
// speak('Regel');
// speak();

// returning values
// const calcArea = function(radius){
//     return 3.14 * radius**2;
// };
// const area = calcArea(5);
// console.log(area);

// arrow function (shorter and easier to write)
// const calcArea = radius => 3.14 * radius**2;

// const area = calcArea(5);
// console.log('area is: ', area);

// METHODS ----------------------------------------
// const myname = 'regel';
// let resultname = myname.toUpperCase();
// console.log(resultname);

// callbacks & foreach
// const myFunc = (callbackFunc) => {
//     //do something
//     let value = 50;
//     callbackFunc(value);
// }

// myFunc(value => {
//     // do something
//     console.log(value);
// });

// let people = ['regel', 'louisa', 'lester', 'john', 'cabrales'];

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// };

// people.forEach(logPerson);

