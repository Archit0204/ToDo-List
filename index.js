const input = document.querySelector("input");

const addButton = document.querySelector(".add");
const clrButton = document.querySelector(".clr");

const display = document.querySelector(".display-container");

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
        const newTask = document.createElement("li");
        newTask.innerText = input.value;
        display.appendChild(newTask);
        input.value = "";
    }

});