const task = document.getElementById('task');
const tasks = document.getElementById('tasks');

function addTask(){
    const tastText = task.value.trim();
    if (tastText === "") return;

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${tastText}</span>
        <button class="delete">🗑️</button>
    `;
    tasks.appendChild(listItem);
    task.value = "";
}

tasks.addEventListener('click', handleTaskActions);

function handleTaskActions(e) {
    if (e.target.classList.contains('delete')) {
        const listItem = e.target.parentElement;
        tasks.removeChild(listItem);
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.classList.toggle('completed');
    }
}