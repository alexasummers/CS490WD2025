const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

    // --- Load saved tasks from localStorage when page opens ---
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(renderTask);

    // Add new task when button is clicked
    addBtn.addEventListener("click", () => {
      const taskText = input.value.trim();
      if (taskText === "") return;

      const task = { text: taskText, done: false };
      tasks.push(task);
      saveTasks();

      renderTask(task);
      input.value = "";
    });

    // Allow Enter key to add task
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") addBtn.click();
    });

    // --- Functions ---
    function renderTask(task) {
      const li = document.createElement("li");
      li.textContent = task.text;
      if (task.done) li.classList.add("done");

      // Toggle done on click
      li.addEventListener("click", () => {
        task.done = !task.done;
        li.classList.toggle("done");
        saveTasks();
      });

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "❌";
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // don’t mark done
        tasks = tasks.filter(t => t !== task);
        taskList.removeChild(li);
        saveTasks();
      });

      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    }

    function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
