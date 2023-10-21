// Get references to HTML elements
const colorContainer = document.getElementById('colorContainer');
const changeColorButton = document.getElementById('changeColorButton');

// Array of predefined colors
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'pink'];

// Initialize a color index
let colorIndex = 0;

// Function to change the background color
function changeColor() {
    // Increment the color index, cycling through colors
    colorIndex = (colorIndex + 1) % colors.length;

    //another option
    // if (colorIndex === colors.length - 1) {
    //     colorIndex = 0;
    // } else {
    //     colorIndex++;
    // }

    // Set the background color from the array
    colorContainer.style.backgroundColor = colors[colorIndex];
    
}

// Add an event listener to the button to change the background color
changeColorButton.addEventListener('click', changeColor);

// Initial background color
colorContainer.style.backgroundColor = colors[colorIndex];
