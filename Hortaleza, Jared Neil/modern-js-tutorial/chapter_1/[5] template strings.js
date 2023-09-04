// template strings
const title = "Best reads of 2023";
const author = "Mario";
const likes = 30;

// concatenation way
let result =
    "The blog called " + title + " by " + author + " has " + likes + " likes.";
console.log(result);

// template string way
/* Backticks (`) are used for template literals. They allow users to call expressions directly within the string using placeholders (${expression}) */
result = `The blog called ${title} by ${author} has ${likes} likes.`;
console.log(result);

// creating html templates
/* 
    To be used in generating content on the page when values are passed.
*/
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;
console.log(html); // only shows in console
