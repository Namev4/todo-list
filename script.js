// Date Information
const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");

// Tasks
const tasksContainer = document.getElementById("tasksContainer");

// Here we use setDate() default function to get the date and then we are going to render it.
const setDate = () => {
  const date = new Date();
  dateNumber.textContent = date.toLocaleString("es", { day: "numeric" });
  dateText.textContent = date.toLocaleString("es", { weekday: "long" });
  dateMonth.textContent = date.toLocaleString("es", { month: "short" });
  dateYear.textContent = date.toLocaleString("es", { year: "numeric" });
};

// Add Task and we 
const addNewTask = (event) => {
  event.preventDefault();
  const { value } = event.target.taskText;
  if (!value) return;
  const task = document.createElement("div");
  task.classList.add("task", "roundBorder");
  task.addEventListener("click", changeTaskState);
  task.textContent = value;
  tasksContainer.prepend(task);
  event.target.reset();
};

// Change Task State
const changeTaskState = (event) => {
  event.target.classList.toggle("done");
};

// Here we are going to order the tasks using the order() function and then we are going to render them.
const order = () => {
  const done = [];
  const toDo = [];
  tasksContainer.childNodes.forEach((el) => {
    el.classList.contains("done") ? done.push(el) : toDo.push(el);
  });
  return [...toDo, ...done];
};

// Here we are going to render the tasks using forEach() function.
const renderOrderedTasks = () => {
  order().forEach((el) => tasksContainer.appendChild(el));
};


// Here we use the setDate function to set the date
setDate();
