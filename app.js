const task = document.getElementById('task');
const tasks = document.getElementById('tasks');

function addTask(){
    const tastText = task.value.trim();
    if (tastText === "") return;

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${tastText}</span>
        <button class="delete">Delete</button>
    `;
    tasks.appendChild(listItem);
    task.value = "";
}