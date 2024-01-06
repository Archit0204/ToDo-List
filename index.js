// Selecting the input field, add button, clear button, and display container from the HTML
const input = document.querySelector("input");
const addButton = document.querySelector(".add");
const clrButton = document.querySelector(".clr");
const display = document.querySelector(".display-container");

// Initializing the task counter and arrays to store tasks, done buttons, and delete buttons
let taskCount = 1;
let taskContainer = [];
let taskDoneContainer = [];
let taskDeltContainer = [];

// Function to add a new task
function addTask() {
    // Creating new elements for the task, done button, and delete button
    const newTask = document.createElement("div");
    const newTaskText = document.createElement("p");
    const newTaskDoneBtn = document.createElement("button");
    const newTaskDltBtn = document.createElement("button");

    // Adding classes and IDs to the new elements
    newTask.classList.add("task");
    newTaskDoneBtn.classList.add("done");
    newTaskDltBtn.classList.add("delete");

    newTask.id = `task${taskCount}`;
    newTaskDoneBtn.id = `done${taskCount}`;
    newTaskDltBtn.id = `delt${taskCount}`;

    // Incrementing the task counter
    taskCount++;

    // Pushing the new elements into the corresponding arrays
    taskContainer.push(newTask);
    taskDoneContainer.push(newTaskDoneBtn);
    taskDeltContainer.push(newTaskDltBtn);

    // Setting the inner text of the new task text element to the input value
    newTaskText.innerText = input.value;

    // Appending the new task text element to the new task element
    newTask.appendChild(newTaskText);

    // Setting the inner HTML of the done button element to an image and adding a click event listener
    newTaskDoneBtn.innerHTML = "<img src=\"./assets/check.png\" alt=\"\">";
    newTaskDoneBtn.addEventListener('click', () => {
        const taskIndex = taskDoneContainer.indexOf(newTaskDoneBtn);
        handleDoneClick(taskIndex);
    });
    newTask.appendChild(newTaskDoneBtn);

    // Setting the inner HTML of the delete button element to an image and adding a click event listener
    newTaskDltBtn.innerHTML = "<img src=\"./assets/trash-bin.png\" alt=\"\">";
    newTaskDltBtn.addEventListener('click', () => {
        const taskIndex = taskDeltContainer.indexOf(newTaskDltBtn);
        handleDltClick(taskIndex);
    });
    newTask.appendChild(newTaskDltBtn);

    // Appending the new task element to the display container
    display.appendChild(newTask);

    // Clearing the input value
    input.value = "";
}

// Function to handle the done button click event
function handleDoneClick(taskIndex) {
    const parentDiv = taskContainer[taskIndex];
    const taskText = parentDiv.querySelector("p");

    // Toggling the text decoration of the task text element between line-through and none
    taskText.style.textDecoration = taskText.style.textDecoration === 'line-through' ? 'none' : 'line-through';
}

// Function to handle the delete button click event
function handleDltClick(taskIndex) {
    const parentDiv = taskContainer[taskIndex];

    // Removing the parent div (task) from the display container
    parentDiv.parentNode.removeChild(parentDiv);
}

// Adding a click event listener to the clear button to clear the input value
clrButton.addEventListener('click', () => {
    input.value = "";
});

// Adding a click event listener to the add button to add a new task
addButton.addEventListener('click', () => {
    if (input.value === "") {
        input.placeholder = "Enter a Task first !!!";
        setTimeout(() => {
            input.placeholder = "What do you want to do?";
        }, 2000);
    }
    else {
        addTask();      
    }
});