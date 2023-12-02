const inputText = document.getElementById("inputText");
const addBtn = document.getElementById("addBtn");
const listContainer = document.getElementById("listContainer");

function addTask() {
  if (inputText.value === "") {
    alert("할 일을 입력하세요.");
  } else {
    const list = document.createElement("li");
    const listContents = document.getElementById("listContainer");
    list.innerHTML = inputText.value;
    listContents.appendChild(list);

    const updatespan = document.createElement("span");
    updatespan.innerHTML = "Update";
    list.appendChild(updatespan);
    updatespan.classList = "updateBtn";

    const deletespan = document.createElement("span");
    deletespan.innerHTML = "delete";
    list.appendChild(deletespan);
    deletespan.classList = "deleteBtn";
    // const delBtn = document.querySelector("deleteBtn");
    // delBtn.addEventListener("click", deleteTask);

    inputText.value = "";
  }
}

addBtn.addEventListener("click", addTask);

function handleTask(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("selected");
  } else {
    event.target.parentElement.remove();
  }
}

listContainer.addEventListener("click", handleTask);
