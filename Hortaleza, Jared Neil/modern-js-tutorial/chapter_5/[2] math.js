// Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

// which ever is closer
console.log(Math.round(area));

// closest lowest whole number
console.log(Math.floor(area));

// closest highest whole number
console.log(Math.ceil(area));

// remove decimal
console.log(Math.trunc(area));

// random numbers

// random number between 0 and 1
const random = Math.random();
console.log(random);

// between 1 and 100
console.log(Math.round(random * 100));
