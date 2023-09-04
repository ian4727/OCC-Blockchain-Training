let age;

/*   
    undefined because not yet assigned a value, NaN because undefined + 3 is not a number
*/
console.log(age, age + 3, `the age is ${age}`);

age = null;

/* 
    null == 0, null means nothing so nothing + 3 = 3
    null is great for clearing forms and emptying content
*/
console.log(age, age + 3, `the age is ${age}`);