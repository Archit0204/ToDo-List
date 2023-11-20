const input = document.querySelector("input");

const addButton = document.querySelector(".add");
const clrButton = document.querySelector(".clr");

const display = document.querySelector(".display-container");

clrButton.addEventListener('click', () => {

    input.value = "";
});

addButton.addEventListener('click', () => {

    const newTask = document.createElement("li");

    if (input.value === "")
        alert("Enter a Task first");
    else {
        newTask.innerText = input.value;
        display.appendChild(newTask);
        input.value = "";
    }

});