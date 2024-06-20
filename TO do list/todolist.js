function add() {
    let taskInput = document.querySelector(".inp");
    let timeInput = document.querySelector(".time");

    if (taskInput.value === "" || timeInput.value === "") {
        alert("Task details and time are empty");
    } else {
        // Add the task to the list
        let tasksDiv = document.querySelector(".tasks");
        let newTask = document.createElement("div");
        newTask.className = "task";
        newTask.innerHTML = `
            <div class="mid">
                <div class="tata">
                    <div class="tt">
                        <p>Task</p> 
                        <p>${timeInput.value}</p> 
                    </div>
                    <div class="pp">
                        <p>${taskInput.value}</p>
                        <img class="done-btn" src="taskcompleted.png" alt="Complete Task">
                    </div>
                </div>
                <div class="remove">
                    <button class="remove-btn">
                        <img src="bin.png" alt="Remove Task">
                    </button>
                </div>
            </div>
        `;

        // Append the new task to the tasks div
        tasksDiv.appendChild(newTask);

        // Clear the input fields
        taskInput.value = "";
        timeInput.value = "";

        // Add event listeners for the done and remove buttons
        newTask.querySelector('.done-btn').addEventListener('click', function() {
            done(this);
        });

        newTask.querySelector('.remove-btn').addEventListener('click', function() {
            removeTask(this);
        });
    }
}

function done(element) {
    let taskText = element.parentElement.querySelector("p");
    taskText.classList.toggle("completed");
}

function removeTask(element) {
    let task = element.closest(".task");
    task.remove();
}