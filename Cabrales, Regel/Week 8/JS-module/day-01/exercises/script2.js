let start = parseInt(prompt('Enter the starting number:'));
let end = parseInt(prompt('Enter the ending number:'));

if (!start || !end) {
    console.log('Please enter valid numbers.');
  } else if (start > end) {
    console.log('The starting number should be less than the ending number.');
  } else {
    // Use a loop to print the numbers in the range
    for (let i = start; i <= end; i++) {
      console.log(i);
    }
  }