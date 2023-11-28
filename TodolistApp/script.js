const inputBox = document.getElementById("inputbox");
const taskContainer = document.getElementById("task-container");

function addTask() {
  if (inputBox.value === "") {
    alert(" 할 일을 입력하세요.");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskContainer.appendChild(li);
    // let span = document.createElement("span");
    // span.innerHTML = "x";
    // li.appendChild(span);
    let button = document.createElement("button");
    button.innerHTML = "x";
    li.appendChild(button);
  }
  inputBox.value = "";
}

taskContainer.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    } else if (event.target.tagName === "BUTTON") {
      event.target.parentElement.remove();
    }
  },
  false
);
