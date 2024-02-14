const noteContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
  noteContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", noteContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");

  inputBox.classList = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  noteContainer.appendChild(inputBox).appendChild(img);

  //   img.addEventListener("click", () => {
  //       inputBox.remove();// when you click on the trash icon it will delete the inputBox
  //     });
});

noteContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }else if(e.target.tagName === "P"){
    notes = document.querySelectorAll(".input-box")
    notes.forEach(notes => {
        notes.onkeyup = function() {
            updateStorage();
        }
    })
  }
});

document.addEventListener("keydown", event =>{
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak")
    event.preventDefault();
  }
})
