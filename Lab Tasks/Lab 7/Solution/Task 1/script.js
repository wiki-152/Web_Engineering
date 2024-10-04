document.getElementById('add-task-btn').addEventListener('click', function() {
    const input = document.getElementById('task-input');
    const taskText = input.value.trim();
    if (taskText !== "") {
        const tasksContainer = document.getElementById('tasks-container');
        const li = document.createElement('li');
        const textSpan = document.createElement('span'); 
        textSpan.textContent = taskText;
        textSpan.onclick = function() {
            textSpan.classList.toggle('completed');
        };
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn'); 
        deleteBtn.onclick = function() {
            tasksContainer.removeChild(li);
        };

        li.appendChild(textSpan);
        li.appendChild(deleteBtn);
        tasksContainer.appendChild(li);
        input.value = ''; 
    }
});
