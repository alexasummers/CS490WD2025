const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") return; // ignore empty input

  const li = document.createElement("li");
  li.textContent = taskText;

  // mark task as done
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "[X]";
  deleteBtn.style.marginLeft = "10px";

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent toggling "done"
    taskList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  input.value = "";
});

// allow Enter key to add tasks
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});
