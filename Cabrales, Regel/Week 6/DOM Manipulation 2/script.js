// Accessing elements
const taskForm = document.getElementById('taskForm'); //get form
const taskInput = document.getElementById('taskInput'); //get inputfield
const taskList = document.getElementById('taskList'); //get ul

// Adding event listener for form submission
taskForm.addEventListener('submit', addTask);

// Function to add a task
function addTask(event) { //event object as a parameter
  event.preventDefault(); // Prevent the default behavior of a form submission
  
  const taskText = taskInput.value.trim(); // Get the trimmed text from an input field

  if (taskText !== '') {
    // Create new task item
    const taskItem = document.createElement('li'); 
    taskItem.textContent = taskText; //<li>Wash Dishes</li>

    // Create delete button for the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete'; //<button>Delete</button>
    deleteButton.addEventListener('click', deleteTask);

    // Append delete button to the task item
    taskItem.appendChild(deleteButton);

    // Append task item to the task list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
  }
}

// Function to delete a task
function deleteTask(event) {
  // Get a reference to the parent element of the clicked button (the task item)
  const taskItem = event.target.parentElement; 

  // Remove the task item from the task list
  taskList.removeChild(taskItem);
}