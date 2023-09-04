// for loops

/*
for (let i = 0; i < 5; i++) {
    console.log('in loop:', i);
}


const names = ['shaun', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++){
    // console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html)
}


// while loops
const names = ['shaun', 'mario', 'luigi'];
let i = 0;

while(i < names.length){
    console.log(names[i]);
    i++;
}
*/

// if statements
// const age = 25;

// if(age > 20){
//     console.log('you are over 20 years old');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// if(ninjas.length > 3){
//     console.log("that's a lot of ninjas");
// }

// const password = 'pass';

// if(password.length >= 12 && password.includes('@')){
//     console.log('that password is mighty strong!')
// } else if(password.length >= 8){
//     console.log('that password is long enough');
// } else{
//     console.log('password is not long enough')
// }

// let user = false;

// if(!user){
//     console.log('user is not logged in');
// }

// Switch statements
const grade = 'D';

switch (grade) {
    case 'A':
        console.log('you got an A!')
        break;
    case 'B':
        console.log('you got a B!')
        break;
    case 'C':
        console.log('you got a C!')
        break;
            
    default:
        break;
}