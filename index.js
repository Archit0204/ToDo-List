const input = document.querySelector("input");

const addButton = document.querySelector(".add");
const clrButton = document.querySelector(".clr");

const display = document.querySelector(".display-container");

function addTask() {

    const newTask = document.createElement("div");
    const newTaskText = document.createElement("p");
    const newTaskDoneBtn = document.createElement("button");
    const newTaskDltBtn = document.createElement("button");

    newTask.classList.add("task");
    newTaskDoneBtn.classList.add("done");
    newTaskDltBtn.classList.add("delete");

    newTaskText.innerText = input.value;
    console.log(newTaskText);

    newTask.appendChild(newTaskText);
        
    newTaskDoneBtn.innerHTML = "<img src=\"./assets/check.png\" alt=\"\">";
    newTask.appendChild(newTaskDoneBtn);

    newTaskDltBtn.innerHTML = "<img src=\"./assets/trash-bin.png\" alt=\"\">";
    newTask.appendChild(newTaskDltBtn);

    display.appendChild(newTask);
    console.log(newTask);
    input.value = "";

}

clrButton.addEventListener('click', () => {

    input.value = "";
});

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