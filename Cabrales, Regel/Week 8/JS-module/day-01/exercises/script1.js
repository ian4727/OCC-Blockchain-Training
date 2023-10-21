let score = parseInt(prompt('Enter the score:'));
let grade;

if(grade >= 90){
    grade = "A";
} else if (90 > grade >= 80) {
    grade = "B";
} else if (80 > grade >= 70) {
    grade = "C";
} else if (70 > grade >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log(`The grade for the score ${score} is: ${grade}`);

