// if statements
const age = 25;

// if condition is true, execute code
if (age > 20) {
    console.log("you are over 20 years old");
}

const ninjas = ["shaun", "ryu", "chun-li", "yoshi"];

if (ninjas.length > 3) {
    console.log("that's a lot of ninjas");
}

const password = "p@ssword1234";

/* 
    if condition not met? 
    else if to make more conditions
    else statement to catch the rest

    can only run one
*/

/* 
    logical operators
    OR = ||
    AND = &&
    NOT = !

    ORs can separate conditions, ANDs can join conditions
    (true/false) || (true) && (true)
*/

if (password.length >= 16 && password.includes("@")) {
    console.log("that password is very strong!");
} else if (
    password.length >= 8 ||
    (password.includes("@") && password.length >= 5)
) {
    console.log("that password is ok!");
} else {
    console.log("that password is not ok!");
}

// logical not

let user = false;

// if not user or user == false
if (!user) {
    console.log("you must be logged in to continue");
}

// make opposite
console.log(!true);
console.log(!false);

// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 0) {
        // skip this iteration, go to the next one
        continue;
    }

    console.log(`your score: ${scores[i]}`);

    if (scores[i] === 100) {
        console.log("you got the top score!");
        // stop the loop!
        break;
    }
}

// switch statements
const grade = "D";

/* 
    can be several different values

    it uses strict equality (numbers != letters)

    breaks are needed as it'll run everything below it
*/

switch(grade) {
    case 'A':
        console.log('Good Job!');
        break;
    case 'B':
        console.log('Pretty good!');
        break;
    case 'C':
        console.log('Let\'s improve!');
        break;
    case 'D':
        console.log('Try harder!');
        break;
    case 'F':
        console.log('Yikes!');
        break;
    default:
        console.log('Not a valid letter.');
}