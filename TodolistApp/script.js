const inputBox = document.getElementById("inputbox");
const taskContainer = document.getElementById("task-container");

function addTask() {
  if (inputBox.value === "") {
    alert(" 할 일을 입력하세요.");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "x";
    li.appendChild(span);

    // 이모지 삽입 실패
    //let button = document.createElement("button");
    //span.innerHTML = "\00d7";
    //li.appendChild(button);
    saveData();
  }
  inputBox.value = "";
}

taskContainer.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      saveData();
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", taskContainer.innerHTML);
}

function showTask() {
  taskContainer.innerHTML = localStorage.getItem("data");
}
showTask();
