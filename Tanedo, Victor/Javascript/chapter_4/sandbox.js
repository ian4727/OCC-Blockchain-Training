// function greet(){
//     console.log('hello there');
// }

// // function expression
// const speak = function(){
//     console.log('good day!');
// };

// greet();
// greet();
// greet();

// speak();

// const speak = function(name = 'luigi', time = 'night'){
//     console.log(`good ${time} ${name}!`);
// };

// speak('mario', 'morning');
// speak();

// const calcArea = function(radius){
//     return 3.14 * radius ** 2;
// };

// const area = calcArea(5);
// console.log(area);

// arrow functions
// const calcArea = radius => 3.14 * radius**2;

// const area = calcArea(5);
// console.log(area);

// const greet = () => 'hello world';

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++)
//         total += products[i] + products[i] * tax;
//     return total;
// };

// b = bill([10, 15, 30], 0.2);
// console.log(b);

// functions
// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// // method
// const name = 'victor';
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// callbacks and for each
// const myFunc = (callbackFunc) => {
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(value => {
//     console.log(value)
// });


// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// };
const ul = document.querySelector('.people');

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

const ulElements = person => {
    html += `<li style="color: purple">${person}</li>`;
};

people.forEach(ulElements);

console.log(html);
ul.innerHTML = html;