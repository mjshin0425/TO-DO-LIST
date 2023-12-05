const inputText = document.getElementById("inputText");
const addBtn = document.getElementById("addBtn");
const listContainer = document.getElementById("listContainer");

function addTask() {
  if (inputText.value === "") {
    alert("할 일을 입력하세요.");
  } else {
    // li 생성
    const listContents = document.getElementById("listContainer");

    const list = document.createElement("li");
    list.classList = "task";

    const textbox = document.createElement("div");
    textbox.classList = "text";
    textbox.innerHTML = inputText.value;

    listContents.appendChild(list);
    list.appendChild(textbox);

    // const listInputEl = document.createElement("INPUT");
    // listInputEl.id = "listInput";
    // listInputEl.setAttribute("readonly", "readonly");
    // listInputEl.textContent = inputText.value; //에러다 에러
    // console.log(inputText.value);
    // console.log(listInputEl.textContent);
    // list.appendChild(listInputEl);

    // edit button
    const editspan = document.createElement("span");
    editspan.innerHTML = "EDIT";
    list.appendChild(editspan);
    editspan.classList = "button";
    editspan.id = "editBtn";
    editspan.type = "button";

    // delete button
    const deletespan = document.createElement("span");
    deletespan.innerHTML = "DEL";
    list.appendChild(deletespan);
    deletespan.classList = "button";
    deletespan.id = "deleteBtn";
    deletespan.type = "button";
    const delBtn = document.getElementById("deleteBtn");
    // delBtn.addEventListener("click", deleteTask);

    inputText.value = "";
  }
}

addBtn.addEventListener("click", addTask);

function handleTask(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("selected");
  } else if (event.target.className === "deleteBtn") {
    event.target.parentElement.remove();
  } else if (event.target.className === "editBtn") {
    const list = document.createElement("LI");
    const listEditInput = document.createElement("INPUT");
    list.appendChild(listEditInput); // input을 li에 넣음
    listEditInput.classList = "editInput";
    listEditInput.innerHTML = list.innerHTML; // 클릭한 li의 text 내용을 input에 옮기기
    const listContents = document.getElementById("listContainer"); //
    listContents.appendChild(list);

    // const list = document.createElement("LI");
    // const listUpdate = document.createElement("INPUT");
    // const listContents = document.getElementById("listContainer");
    // list.appendChild(listUpdate);
    // listContents.appendChild(list);
  }
}

listContainer.addEventListener("click", handleTask);
