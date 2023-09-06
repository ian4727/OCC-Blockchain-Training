let radius = 10;
const pi = 3.14;

// console.log(radius,pi)
// math operators +,-,*,/,**,%
 console.log(10/2);
 console.log(10*2); console.log(10%2);
 console.log(10**2);
//  order of operation = B I D M A S
let result = 5*((10-3)**2);
console.log(result)


// let likes = 10;
// likes = likes +1;
// likes++
// likes--;
// likes += 10;
// likes -= 5;
// likes *=2;
// likes /= 2;


// NaN is not a number
// console.log(5/"hello")

// Concatinate a number
// let result1 = 'the blog has ' + likes +' likes ';
// template strings /template literals

const tittle = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// concatenation way
let result1 = 'the blog called' + tittle + 'by' + author + 'has'+ likes +'likes';
console.log(result1)
// backtiks = ` `
let result2 = `the block called ${tittle} by ${author} has ${likes} likes `
console.log(result2)

// creating html templates

let html = `<h2>${tittle}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>`;
console.log(html)


