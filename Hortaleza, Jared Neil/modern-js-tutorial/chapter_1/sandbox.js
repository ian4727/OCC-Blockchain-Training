// type conversion (turn datatype to another datatype)
let score = "100";

// turn score string to number
score = Number(score);

// log score + 1 and check type of score
console.log(score + 1);
console.log(typeof score);

let result = Number("hello");
console.log(result); // NaN as hello isn't a number

result = String(50);
console.log(result);
console.log(typeof result); // result is a string

result = Boolean(100);
console.log(result);
console.log(typeof result); // result is a boolean, true because its not null (not zero (0))

result = Boolean(0);
console.log(result);
console.log(typeof result); // result is a boolean, false

result = Boolean('0');
console.log(result);
console.log(typeof result); // result is a boolean, false