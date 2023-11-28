const inputBox = document.getElementById("inputbox");
const taskContainer = document.getElementById("task-container");

function addTask() {
  if (inputBox.value === "") {
    alert("add text");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskContainer.appendChild(li);
  }
  inputBox.value = "";
}
