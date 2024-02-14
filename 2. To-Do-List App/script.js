const inputBox = document.querySelector("#input-box");
const addBtn = document.querySelector(".add-btn");
const listContainer = document.querySelector(".list-container");
const alert = document.querySelector(".todo-app");

function addTask() {
  if (inputBox.value === "") {
    let alertMsg = document.createElement("p");
    alertMsg.innerHTML = "Please enter task";
    alert.appendChild(alertMsg);
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") 
    e.target.parentElement.remove();
    saveData();
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
