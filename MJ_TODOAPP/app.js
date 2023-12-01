const inputText = document.getElementById("inputText");
const addBtn = document.getElementById("addBtn");

function addTask() {
  if (inputText.value === "") {
    alert("할 일을 입력하세요.");
  } else {
    let list = document.createElement("li");
    const listContents = document.getElementById("listContainer");
    list.innerHTML = inputText.value;
    listContents.appendChild(list);
    inputText.value = "";
  }
}

addBtn.addEventListener("click", addTask);
