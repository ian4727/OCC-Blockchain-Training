// variables & block scope

// global scope (can be in multiple code blocks)
let age = 30;

if (true) {
    // only redefines in the code block (local scope)
    let age = 40;
    let name = "shaun";
    console.log("inside 1st code block: ", age, name);

    if (true) {
        let age = 50;
        console.log("inside 2nd code block: ", age, name);
    }
}

// local scope variables cannot show outside their code block
console.log("outside code block: ", age, name);

/* 
    consts and lets apply the same rules
*/
