// array, for storing collection of data
let ninjas = ["shaun", "ryu", "chun-li"];

// log ninjas
console.log(ninjas);
// first in the array
console.log(ninjas[0]);

// replace array index with another value
ninjas[1] = "ken";
console.log(ninjas);

// array can store any data type
let ages = [20, 25, 30, 35];
console.log(ages[2]);

// can store more than one type of data type
let random = ["shaun", "crystal", 30, 20];
console.log(random);

console.log(ninjas.length);

// array methods

// join an array with a separator string
let result = ninjas.join(", ");
console.log(result);

// find index of a value
result = ninjas.indexOf("chun-li");
console.log(result);

// combine two arrays
result = ninjas.concat(["ryu", "crystal"]);
console.log(result);

// push new value to array
result = ninjas.push("guile");
console.log(result); // returns length of new array
console.log(ninjas); // returns array

// takeout last value
result = ninjas.pop();
console.log(result); // returns removed value
console.log(ninjas); // returns array