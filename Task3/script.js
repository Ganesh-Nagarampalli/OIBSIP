const pendingList = document.getElementById('pendingList');
const completedList = document.getElementById('completedList');
const taskInput = document.getElementById('taskInput');

function createTaskElement(task, completed = false) {
    const li = document.createElement('li');
    li.innerHTML = `
        <button class="complete-button" onclick="completeTask(this)">✔</button>
        <span class="task-text ${completed ? 'complete' : ''}">${task}</span>
        <button class="edit-button" onclick="editTask(this)">✎</button>
    `;
    li.className = 'task-item'; // Add a class for styling
    return li;
}



function addTask() {
    const task = taskInput.value.trim();
    if (task === '') return;

    const li = createTaskElement(task);
    pendingList.appendChild(li);
    taskInput.value = '';
}

function completeTask(button) {
    const li = button.parentElement;
    li.classList.toggle('complete');
    if (li.classList.contains('complete')) {
        completedList.appendChild(li);
    } else {
        pendingList.appendChild(li);
    }
}

function editTask(button) {
    const li = button.parentElement;

    // Check if the task is in the completed list
    if (completedList.contains(li)) {
        alert("This task is already completed and cannot be edited.");
        return;
    }

    const taskText = li.querySelector('.task-text');
    const newTask = prompt('Edit task:', taskText.innerText);
    if (newTask !== null) {
        taskText.innerText = newTask;
    }
}


taskInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
