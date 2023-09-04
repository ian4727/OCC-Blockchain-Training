/*
    Semicolons end statements!

    * js is clever and it can still work without semicolons as it uses Automatic Semicolon Insertion (ASI), but it's still best practice to use semicolons anyway for beginners to truly get the full syntax.

    JS runs from top to bottom!
*/

// alert sends a message to the browser
// alert("hello, world");

/* 
    console = the devtools > console
    log = log(), a method of the console, sends a log to display in devtools > console (great for checking values/testing functionality) 
*/
console.log("test");
console.log("test 2");

// let this variable 'age' be 25, and year by 2023.
let age = 25;
let year = 2019;

// log the age and year
console.log(age, year);

// change value
age = 30;
console.log(age);

// you can change the type of let variables (JS is loosely typed [no need to specify what type of info is in a variable])
age = "pretty old.";
console.log(age);

// const makes the variable stay constant, no overrides allowed
const points = 100;

console.log(points);

// old syntax, not modern JS
var score = 75;
console.log(score);

// single line comments are like this, dont run me!
/* 
    multi line are like this, dont run me!
*/

/* 
    Dot notation is a syntax used in programming languages, including JavaScript, to access an object's attributes and methods.
*/

/* 
    JavaScript Data Types
    
    Number - 1, 2, 3, 100, 3.14
    String - 'hello', 'nice', '123132' (just enclosed in quotes)
    Boolean - true / false (eval conditions)
    Null - explicitly no value
    Undefined - variables that are not yet defined
    Object - complex data structs (arrays, dates, literals, etc.)
    Symbol - Used with objects
*/

/*
    variable format:
        - no spaces (for no ambiguity, and much easier to compile), words are separated through camelCase
            * spaces make for extra cognition time where myAge could be interpreted at once, my age can be confused as two variables or a variable with a space.

        - cannot start with a number
            * This is because the compiler gets confused if is a number or identifier until it reaches an alphabet after the numbers

        - dont use reserved keywords
            * keywords will have multiple purposes, making ambiguity for the programmer and compiler

        - make the variable name meaningful
            * so other programmers will know what the variable does
*/

/*
    The difference between let and var is in the scope of the variables they create:

    Variables declared by let are only available inside the block where they’re defined.
    Variables declared by var are available throughout the function in which they’re declared.

    let only remains the same in the current block, but var is consistent no matter how deeply nested it is
*/
