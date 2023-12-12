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

    //////////////// 건드리지 마!!!!
    //const listInputEl = document.createElement("INPUT");
    //listInputEl.id = "listInput";
    //listInputEl.setAttribute("readonly", "readonly");
    //listInputEl.value = inputText.value; //에러다 에러
    // console.log(inputText.value);
    // console.log(listInputEl.textContent);
    // list.appendChild(listInputEl);

    // button div 생성

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

    inputText.value = "";
  }
}

addBtn.addEventListener("click", addTask);

function handleTask(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("selected");
  } else if (event.target.className === "deleteBtn") {
    event.target.parentElement.remove(); // 부모요소가 div로 바뀌어서 코드도 바꿔야 함.li 삭제
  } else if (event.target.className === "editBtn") {
    // li에 input 생성
    const listContents = document.getElementById("listContainer"); //
    const list = document.createElement("LI");
    const listEditInput = document.createElement("INPUT");
    listEditInput.type = "text";
    listEditInput.id = "editInput";

    // 노드를 넣음
    listContents.appendChild(list);
    list.appendChild(listEditInput); // input을 li에 넣음

    listInputEl.removeAttribute("readonly");
    listEditInput.innerHTML = list.innerHTML; // 클릭한 li의 text 내용을 input에 옮기기
  }
}

// function handleTask 를 쪼개서 더 작은 단위로 이벤트 리스너를 건다
// li 리스너는 checked 토글,
// button div..

listContainer.addEventListener("click", handleTask);
