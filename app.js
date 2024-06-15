const task = document.getElementById('task');
const tasks = document.getElementById('tasks');

function addTask(){
    const tastText = task.value.trim();
    if (tastText === "") return;

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${tastText}</span>
        <button class="move-up">👆🏻</button>
        <button class="move-down">👇🏻</button>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    `;
    tasks.appendChild(listItem);
    task.value = "";
}

tasks.addEventListener('click', handleTaskActions);

function handleTaskActions(e) {
    const listItem = e.target.closest('li');
    if (e.target.classList.contains('delete')) {
        tasks.removeChild(listItem);
    } else if (e. target.classList.contains('edit')) {
        editTask(listItem);
    } else if (e.target.classList.contains('move-up')) {
        moveTask(listItem, 0);
    } else if (e.target.classList.contains('move-down')) {
        moveTask(listItem, 1);
    } else if (e.target.tagName === 'SPAN') {
        listItem.classList.toggle('completed');
    }
}

function editTask(listItem) {
    const taskText = listItem.querySelector('span').innerText;
    const newTaskText = prompt('Edit task:', taskText);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        listItem.querySelector('span').innerText = newTaskText.trim();
    }
}

function moveTask(listItem, direction) {
    const sibling = direction === 0 ? listItem.previousElementSibling : listItem.nextElementSibling;
    if (sibling) {
        tasks.insertBefore(listItem, direction === 0 ? sibling : sibling.nextElementSibling);
    }
}