// Step 1: Declare a function named isEven that takes a number as a parameter and returns true if the number is even and false otherwise.
function isEven(num) {
    let isEven = false;
    if(num%2==0){
        isEven = true;
    }
    return isEven;
}

// Step 2: Use a for loop to iterate from 0 to 10. Call the isEven function for each iteration and log the result to the console.
for (let i = 0; i <= 10; i++) {
    console.log(isEven(i));
}

// Step 3: Declare a function named multiply that takes two numbers as parameters and returns their product.
function multiply(x, y) {
    return x*y;
}

// Step 4: Use a while loop to repeatedly prompt the user to enter two numbers and calculate their product using the multiply function. Log the result to the console. Terminate the loop when the user enters a negative number as any of the inputs.
while (true) {
    const num1 = parseInt(prompt('Enter the first number:'));
    if (num1 < 0) {
      console.log('You entered a negative number. Exiting the loop~');
      break;
    }
  
    const num2 = parseInt(prompt('Enter the second number:'));
    if (num2 < 0) {
      console.log('You entered a negative number. Exiting the loop~');
      break;
    }
  
    const product = multiply(num1, num2);
    console.log(`The product of ${num1} and ${num2} is ${product}.`);
}

// Step 5: Declare a function named reverseString that takes a string as a parameter and returns the reversed version of the string.
function reverseString(str) {
    const reversedStr = str.split('').reverse().join('');
    return reversedStr;
}

// Step 6: Call the reverseString function with the string 'hello' and log the result to the console.
console.log(reverseString('hello'));

// Step 7: Declare a function named countVowels that takes a string as a parameter and returns the number of vowels in the string.
function countVowels(str) {
    let vowels = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] ===  "e" || str[i] ===  "i" || str[i] === "o" || str[i] === "u"){
            vowels++;
        }
    }
    return vowels;
}

// Step 8: Call the countVowels function with the string 'JavaScript' and log the result to the console.
console.log(countVowels('Javascript'));

// Step 9: Declare a function named findMax that takes an array of numbers as a parameter and returns the maximum value in the array.
function findMax(numbers){
      let max = numbers[0]; // Assume the first element is the maximum.
    
      for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
          max = numbers[i]; // Update max if a larger number is found.
        }
      }
    
      return max;
}

// Step 10: Call the findMax function with the array [4, 9, 2, 7, 5] and log the result to the console.
console.log(findMax([4, 9, 2, 7, 5]));

// Step 11: Declare a function named calculateFactorial that takes a number as a parameter and returns its factorial value.
function calculateFactorial(x) {
    if (x < 0) {
        return "Factorial is not defined for negative numbers.";
    } else if (x === 0) {
        return 1; 
    } else {
        let factorial = 1;
        for (let i = 1; i <= x; i++) {
          factorial *= i;
        }
        return factorial;
    }
}

// Step 12: Call the calculateFactorial function with the number 5 and log the result to the console.
console.log(calculateFactorial(5));

// Step 13: Declare a function named isPalindrome that takes a string as a parameter and returns true if the string is a palindrome and false otherwise.
function isPalindrome(str) {
    let isPalindrome;
    for (let i = 0; i < str.length; i++) {
        // console.log(`${str[i]} and ${str[str.length-(i+1)]}`);
        if(str[i] === str[str.length-(i+1)]) {
            isPalindrome = true;
        } else {
            isPalindrome = false;
        }
    }
    return isPalindrome;
}

// Step 14: Call the isPalindrome function with the string 'level' and log the result to the console.
console.log(isPalindrome("tacocat"));

// Step 15: Declare a function named sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Step 16: Call the sumArray function with the array [1, 2, 3, 4, 5] and log the result to the console.
console.log(sumArray([1, 2, 3, 4, 5]));

// Step 17: Declare a function named capitalizeFirstLetter that takes a string as a parameter and returns the string with the first letter capitalized.
function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// Step 18: Call the capitalizeFirstLetter function with the string 'javascript' and log the result to the console.
console.log(capitalizeFirstLetter('javascript'));

// Step 19: Declare a function named filterEvenNumbers that takes an array of numbers as a parameter and returns a new array with only the even numbers.
function filterEvenNumbers(numbers) {
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i]%2 == 0){
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

// Step 20: Call the filterEvenNumbers function with the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and log the result to the console.
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));